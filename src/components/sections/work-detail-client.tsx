"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Trash2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { type ClientProject } from "@/lib/data";
import { useAdmin } from "@/lib/AdminContext";
import { CloudinaryUpload } from "@/components/ui/cloudinary-upload";

function AnimatedImage({
  alt,
  src,
  ratio,
  onDelete,
  isAdmin,
  onClick,
  draggable,
  onDragStart,
  onDragEnter,
  onDragEnd,
  onDragOver,
}: {
  alt: string;
  src: string;
  ratio: number;
  onDelete?: () => void;
  isAdmin?: boolean;
  onClick?: () => void;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragEnter?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div
      ref={ref}
      className="relative w-full rounded-xl overflow-hidden bg-zinc-50 border border-zinc-200/50 shadow-[0_20px_40px_rgba(0,0,0,0.02),0_1px_3px_rgba(0,0,0,0.01)] group cursor-pointer"
      style={{ aspectRatio: ratio }}
      onClick={onClick}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className="absolute inset-0 bg-zinc-100 animate-pulse" style={{ opacity: isLoading ? 1 : 0, transition: "opacity 0.5s ease" }} />
      <img
        alt={alt}
        src={imgSrc}
        className={`size-full object-cover transition-all duration-1000 ease-[0.16,1,0.3,1] ${
          isInView && !isLoading ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
        }`}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        onContextMenu={(e) => e.preventDefault()}
        draggable="false"
        onError={() =>
          setImgSrc(
            `https://placehold.co/800x450/ebeaff/2019fe?text=${encodeURIComponent(
              alt
            )}`
          )
        }
      />
      {isAdmin && onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="absolute top-3 right-3 p-2 bg-red-600/90 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 shadow-md"
          title="Delete Image"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export function WorkDetailClient({ client }: { client: ClientProject }) {
  const { isAdmin } = useAdmin();
  const [images, setImages] = useState<{ src: string; alt: string; ratio: number }[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<{ message: string; id: number } | null>(null);
  const [imageToDelete, setImageToDelete] = useState<number | null>(null);

  // Load images from local storage (no fallback to static data)
  useEffect(() => {
    const storedKey = `tnwebz_gallery_${client.id}`;
    const stored = localStorage.getItem(storedKey);
    if (stored) {
      try {
        setImages(JSON.parse(stored));
      } catch (e) {
        setImages([]);
      }
    } else {
      setImages([]);
    }
  }, [client.id]);

  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => {
        setToastMsg(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);

  const saveImages = (newImages: { src: string; alt: string; ratio: number }[]) => {
    setImages(newImages);
    localStorage.setItem(`tnwebz_gallery_${client.id}`, JSON.stringify(newImages));
  };

  const handleUploadSuccess = (urls: string[]) => {
    const newImages = urls.map((url, i) => ({
      src: url, 
      alt: `${client.title} - Image ${images.length + i + 1}`, 
      ratio: 1.5 
    }));
    
    const updated = [...newImages, ...images];
    saveImages(updated);
    setToastMsg({ message: `${urls.length} image(s) uploaded successfully!`, id: Date.now() });
  };

  const confirmDelete = () => {
    if (imageToDelete !== null) {
      const updated = images.filter((_, index) => index !== imageToDelete);
      saveImages(updated);
      setImageToDelete(null);
    }
  };

  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart = (e: React.DragEvent, position: number) => {
    dragItem.current = position;
  };

  const handleDragEnter = (e: React.DragEvent, position: number) => {
    dragOverItem.current = position;
  };

  const handleDragEnd = () => {
    if (dragItem.current !== null && dragOverItem.current !== null && dragItem.current !== dragOverItem.current) {
      const newImages = [...images];
      const draggedItemContent = newImages[dragItem.current];
      newImages.splice(dragItem.current, 1);
      newImages.splice(dragOverItem.current, 0, draggedItemContent);
      saveImages(newImages);
    }
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-zinc-200">
      <div className="container mx-auto px-4 pt-28 pb-8 md:pt-36 md:pb-16 max-w-7xl">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-20"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors group"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-zinc-200 group-hover:border-zinc-300 shadow-sm transition-all group-hover:-translate-x-1">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-24"
        >
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="text-zinc-900 font-medium text-sm tracking-wider uppercase mb-4">
              {client.title}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-zinc-950 mb-6 tracking-tight">
              {client.websiteName}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
              {client.websiteDescription}
            </p>
            <a
              href={client.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-950/10 transition-all active:scale-[0.98]"
            >
              Visit Live Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 shadow-[0_20px_40px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-zinc-200/60 relative">
              <img
                src={client.image}
                alt={client.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-900">
              Gallery
            </h2>
            <div className="flex-1 h-px bg-zinc-200"></div>
          </div>

          {isAdmin && (
            <CloudinaryUpload 
              onUploadSuccess={handleUploadSuccess} 
              maxFilesPerUpload={5}
            />
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((shot, index) => (
              <AnimatedImage
                key={`gallery-${index}-${shot.src}`}
                alt={shot.alt}
                src={shot.src}
                ratio={shot.ratio}
                isAdmin={isAdmin}
                onDelete={() => setImageToDelete(index)}
                onClick={() => setSelectedImage(shot.src)}
                draggable={isAdmin}
                onDragStart={(e) => isAdmin && handleDragStart(e, index)}
                onDragEnter={(e) => isAdmin && handleDragEnter(e, index)}
                onDragEnd={isAdmin ? handleDragEnd : undefined}
                onDragOver={(e) => e.preventDefault()}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen preview" 
            className="max-w-full max-h-full w-[85vw] h-[85vh] object-contain select-none" 
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            key={toastMsg.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[300] flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 px-5 py-4 rounded-xl shadow-lg shadow-emerald-500/10"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span className="font-medium text-sm">{toastMsg.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {imageToDelete !== null && (
          <div className="fixed inset-0 z-[400] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm relative"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <Trash2 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Delete Image</h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Are you sure you want to delete this image from your gallery? This action cannot be undone.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setImageToDelete(null)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
