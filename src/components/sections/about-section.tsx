"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { useAdmin } from "@/lib/AdminContext";
import { db } from "@/lib/firebase";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  CloudUpload,
  Image as ImageIcon,
  Loader2,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DEFAULT_ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop";

export function AboutSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { isAdmin } = useAdmin();

  // Active displayed image
  const [aboutImage, setAboutImage] = useState<string>(DEFAULT_ABOUT_IMAGE);

  // Admin Modal & Upload State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>(DEFAULT_ABOUT_IMAGE);
  const [urlInput, setUrlInput] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"upload" | "url">("upload");
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<{ message: string; id: number } | null>(null);

  // Synchronize about image with Firestore
  useEffect(() => {
    const docRef = doc(db, "settings", "about");
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          if (data?.imageUrl && typeof data.imageUrl === "string") {
            setAboutImage(data.imageUrl);
          }
        }
      },
      (error) => {
        console.error("Error fetching about image from Firestore:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  // Toast timer auto-dismiss
  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => {
        setToastMsg(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);

  // Handle open modal
  const handleOpenModal = () => {
    setPreviewUrl(aboutImage);
    setUrlInput("");
    setUploadError(null);
    setIsModalOpen(true);
  };

  // Upload file directly to Cloudinary
  const uploadToCloudinary = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setUploadError("Please choose a valid image file (PNG, JPG, WebP, etc.).");
      return;
    }

    const MAX_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_SIZE) {
      setUploadError("File size exceeds 10MB limit. Please choose a smaller image.");
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ml_default");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dtsh613l2/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.error?.message || "Failed to upload image to Cloudinary.");
      }

      const data = await response.json();
      if (data.secure_url) {
        setPreviewUrl(data.secure_url);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Cloudinary upload failed.";
      setUploadError(message);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadToCloudinary(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      uploadToCloudinary(file);
    }
  };

  // Save selected image to Firestore
  const handleSaveImage = async () => {
    if (!previewUrl) return;
    setIsSaving(true);
    setUploadError(null);

    // Optimistic UI update
    setAboutImage(previewUrl);

    try {
      const docRef = doc(db, "settings", "about");
      await setDoc(docRef, { imageUrl: previewUrl, updatedAt: Date.now() }, { merge: true });
      setIsModalOpen(false);
      setToastMsg({
        message: "About section image updated successfully via Cloudinary!",
        id: Date.now(),
      });
    } catch (err: unknown) {
      console.error("Error saving about image:", err);
      setUploadError("Failed to save to database. Please check your network connection.");
    } finally {
      setIsSaving(false);
    }
  };

  // Reset to original default image
  const handleResetToDefault = async () => {
    setIsSaving(true);
    setUploadError(null);

    setAboutImage(DEFAULT_ABOUT_IMAGE);
    setPreviewUrl(DEFAULT_ABOUT_IMAGE);

    try {
      const docRef = doc(db, "settings", "about");
      await setDoc(docRef, { imageUrl: DEFAULT_ABOUT_IMAGE, updatedAt: Date.now() }, { merge: true });
      setIsModalOpen(false);
      setToastMsg({
        message: "About section image reset to default successfully!",
        id: Date.now(),
      });
    } catch (err: unknown) {
      console.error("Error resetting about image:", err);
      setUploadError("Failed to reset image.");
    } finally {
      setIsSaving(false);
    }
  };

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.35,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.35,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section className="py-8 px-4 bg-[#f5f5f3]" id="about" ref={heroRef}>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-zinc-900 animate-spin-slow">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-medium text-zinc-600"
              >
                WHO WE ARE
              </TimelineContent>
            </div>
            <div className="flex gap-4">
              <TimelineContent
                as="div"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <a
                  href="https://www.instagram.com/tnwebz?igsh=ZnZ3N3VtamJ2aGJ3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img
                    src="https://pro-section.ui-layouts.com/instagram.svg"
                    alt="TNWebz Instagram profile"
                    width={24}
                    height={24}
                  />
                </a>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <a
                  href="https://www.linkedin.com/company/tnwebz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img
                    src="https://pro-section.ui-layouts.com/linkedin.svg"
                    alt="TNWebz LinkedIn company page"
                    width={24}
                    height={24}
                  />
                </a>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <a
                  href="https://www.youtube.com/@TNWebz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <img
                    src="https://pro-section.ui-layouts.com/youtube.svg"
                    alt="TNWebz YouTube channel"
                    width={24}
                    height={24}
                  />
                </a>
              </TimelineContent>
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group"
          >
            {/* Admin Floating Badge */}
            {isAdmin && (
              <div className="absolute top-3 right-3 sm:top-4 sm:right-6 z-20 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-full bg-zinc-950/90 hover:bg-black text-white border border-zinc-700/60 shadow-xl backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95 group/admin-btn"
                  title="Change About Image via Cloudinary (Admin Only)"
                >
                  <Camera className="w-3.5 h-3.5 text-emerald-400 group-hover/admin-btn:rotate-12 transition-transform" />
                  <span>Change Image</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono hidden sm:inline-block">
                    Cloudinary
                  </span>
                </button>
              </div>
            )}

            <svg
              className="w-full"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                href={aboutImage}
                xlinkHref={aboutImage}
              ></image>
            </svg>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-zinc-900 font-bold">3+</span>
                <span className="text-zinc-600">years of experience</span>
                <span className="text-gray-300">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-zinc-900 font-bold">50+</span>
                <span className="text-zinc-600">projects delivered</span>
              </div>
            </TimelineContent>
            <div className="flex flex-wrap items-center justify-end gap-4 lg:gap-8">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-3xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span className="text-zinc-900 font-semibold">100%</span>
                <span className="text-zinc-600 uppercase">
                  client satisfaction
                </span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2 sm:text-base text-xs"
              >
                <span className="text-zinc-900 font-bold">24/7</span>
                <span className="text-zinc-600">support & maintenance</span>
                <span className="text-gray-300 hidden">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="sm:text-4xl md:text-5xl text-3xl !leading-[110%] font-serif tracking-tight text-zinc-900 mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.05}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 0.2,
                }}
              >
                Building Digital Experiences That Help Businesses Grow.
              </VerticalCutReveal>
            </h2>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8 text-zinc-600"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify md:text-left">
                  TNWebz is a web and app development studio in Chennai, Tamil Nadu, helping businesses turn their ideas into modern digital experiences. We build responsive business websites, e-commerce platforms and custom web solutions designed around each client&apos;s goals.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify md:text-left">
                  From a professional business website to a custom web application or mobile app, we combine thoughtful design with reliable development to create digital products that are fast, responsive and easy to use. We work with businesses across Chennai and nearby areas.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1 md:pl-8">
            <div className="text-right md:text-left">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-zinc-900 text-2xl font-bold mb-2"
              >
                TNWEBZ
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-zinc-600 text-sm mb-8"
              >
                Website & App Development Studio in Chennai
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="text-zinc-900 font-medium mb-4">
                  Need a website or app for your business? Let&apos;s build a digital solution around your goals.
                </p>
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
              >
                <a
                  href="#contact"
                  className="bg-neutral-900 hover:bg-neutral-950 shadow-lg shadow-neutral-900/20 border border-neutral-700 flex w-fit ml-auto md:ml-0 gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-lg cursor-pointer font-semibold"
                >
                  LET&apos;S COLLABORATE <ArrowRight />
                </a>
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            key={toastMsg.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-[350] flex items-center gap-3 bg-zinc-950 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-zinc-800"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="font-medium text-sm text-zinc-100">{toastMsg.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Cloudinary Image Edit Modal */}
      <AnimatePresence>
        {isAdmin && isModalOpen && (
          <div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => {
              if (!isUploading && !isSaving) {
                setIsModalOpen(false);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-xl w-full shadow-2xl border border-zinc-200/80 relative my-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Atmospheric Radial Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex justify-between items-start pb-5 border-b border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-zinc-950">
                        About Section Image
                      </h3>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                        Cloudinary
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Upload a new banner image to update the hero visual across the site.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!isUploading && !isSaving) {
                      setIsModalOpen(false);
                    }
                  }}
                  disabled={isUploading || isSaving}
                  className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors disabled:opacity-50 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Live Shape Preview */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Live Preview (Curved Cut-out Shape)
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    Aspect 100:40
                  </span>
                </div>

                <div className="w-full aspect-[100/40] relative rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-inner">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <clipPath
                        id="clip-inverted-modal-preview"
                        clipPathUnits="objectBoundingBox"
                      >
                        <path
                          d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                          fill="#D9D9D9"
                        />
                      </clipPath>
                    </defs>
                    <image
                      clipPath="url(#clip-inverted-modal-preview)"
                      preserveAspectRatio="xMidYMid slice"
                      width="100%"
                      height="100%"
                      href={previewUrl}
                      xlinkHref={previewUrl}
                    />
                  </svg>

                  {isUploading && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center">
                      <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-900 shadow-md">
                        <Loader2 className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
                        Uploading to Cloudinary...
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Mode Tabs */}
              <div className="mt-5 flex gap-2 p-1 bg-zinc-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveTab("upload")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === "upload"
                      ? "bg-white text-zinc-900 shadow-xs"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  <CloudUpload className="w-3.5 h-3.5 text-emerald-600" />
                  Upload via Cloudinary
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("url")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === "url"
                      ? "bg-white text-zinc-900 shadow-xs"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
                  Direct Image URL
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === "upload" ? (
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => !isUploading && fileInputRef.current?.click()}
                    className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
                      isDragging
                        ? "border-emerald-500 bg-emerald-50/60"
                        : "border-zinc-200 hover:border-emerald-400 bg-zinc-50/70 hover:bg-emerald-50/20"
                    }`}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                      disabled={isUploading || isSaving}
                    />
                    {isUploading ? (
                      <div className="flex flex-col items-center gap-2 py-3">
                        <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
                        <p className="text-sm font-semibold text-zinc-800">
                          Uploading image to Cloudinary...
                        </p>
                        <p className="text-xs text-zinc-500">
                          Preset: ml_default
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-center">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-emerald-600 shadow-xs">
                          <CloudUpload className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-zinc-900">
                            Click to select photo
                          </span>
                          <span className="text-sm text-zinc-500"> or drag and drop</span>
                        </div>
                        <p className="text-xs text-zinc-400">
                          Supports PNG, JPG, WebP, AVIF up to 10MB
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <label className="text-xs font-medium text-zinc-700 block">
                      Direct Image URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        placeholder="https://res.cloudinary.com/..."
                        className="flex-1 px-3.5 py-2.5 text-sm rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-normal"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (urlInput.trim()) {
                            setPreviewUrl(urlInput.trim());
                          }
                        }}
                        className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-zinc-900 text-white hover:bg-black transition-colors cursor-pointer"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Error Message */}
              {uploadError && (
                <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                  {uploadError}
                </div>
              )}

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleResetToDefault}
                  disabled={isSaving || isUploading}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors disabled:opacity-50 cursor-pointer"
                  title="Revert back to the original Unsplash team photo"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset to Default
                </button>

                <div className="w-full sm:w-auto flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    disabled={isSaving || isUploading}
                    className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold rounded-xl border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveImage}
                    disabled={isSaving || isUploading || previewUrl === aboutImage}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Save Image
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
