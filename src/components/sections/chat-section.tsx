"use client";

import { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";

export function ChatSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const revealVariants = {
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  };

  const whatsappNumber = "918608113558";
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 relative bg-white flex justify-center items-center border-y border-neutral-100">
      <TimelineContent
        as="div"
        animationNum={0}
        timelineRef={sectionRef}
        customVariants={revealVariants}
        className="max-w-4xl w-full flex flex-col items-center justify-center text-center space-y-8"
      >
        <div className="space-y-4">
          <h2 className="md:text-5xl text-3xl font-medium text-zinc-900">
            Have a project in mind?
          </h2>
          <p className="text-zinc-600 sm:text-lg max-w-2xl mx-auto">
            Get in touch with us instantly on WhatsApp. We're here to answer your questions and start building something amazing together.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#22bf5b] text-white rounded-full text-lg sm:text-xl font-medium transition-all duration-300 shadow-[0_10px_25px_rgba(37,211,102,0.25)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.35)] hover:-translate-y-1 w-full sm:w-auto min-w-[280px]"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.347-.272.273-1.04 1.015-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat us
        </a>
      </TimelineContent>
    </section>
  );
}
