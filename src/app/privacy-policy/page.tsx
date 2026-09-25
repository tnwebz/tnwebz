import { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo-utils";
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  Eye, 
  Cookie, 
  FileText, 
  ArrowRight,
  Server,
  CreditCard
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Review the Privacy Policy for TNWebz. Learn how our freelance web development studio collects, handles, stores, and protects client and visitor personal data.",
  alternates: {
    canonical: "https://tnwebz.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | TNWebz",
    description:
      "Privacy Policy for TNWebz. Learn how we safeguard your information and uphold privacy standards.",
    url: "https://tnwebz.com/privacy-policy",
    siteName: "TNWebz",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | TNWebz",
    description:
      "Privacy Policy for TNWebz. Learn how we safeguard your information and uphold privacy standards.",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://tnwebz.com" },
  { name: "Privacy Policy", url: "https://tnwebz.com/privacy-policy" },
]);

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-28 md:pt-36">
        <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 mb-8">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-zinc-900 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-zinc-300">
              /
            </li>
            <li className="text-zinc-900 font-medium">Privacy Policy</li>
          </ol>
        </nav>
      </div>

      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 border border-zinc-300/80 text-zinc-800 text-xs font-semibold tracking-wide uppercase mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-zinc-700" />
          <span>Data Protection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
          At TNWebz, we take data privacy and transparent communication seriously. This policy explains what information we collect, why we collect it, and how your data is handled.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-500 border-t border-zinc-200/80 pt-4">
          <span>Effective Date: September 2026</span>
          <span className="hidden sm:inline">•</span>
          <span>Business: TNWebz (Sole Proprietorship)</span>
          <span className="hidden sm:inline">•</span>
          <span>Applicable Region: India</span>
        </div>
      </section>

      {/* Document Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-20">
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.02),0_1px_3px_rgba(0,0,0,0.01)] space-y-12">
          
          {/* 1. Introduction */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">01.</span>
              Introduction
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                <strong className="text-zinc-900 font-semibold">TNWebz</strong> operates as an independent freelance web development and digital solutions studio based in Chennai, Tamil Nadu, India. This Privacy Policy applies to our website (<code className="text-xs bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-800">https://tnwebz.com</code>) and any direct business engagements, project communications, or support requests with us.
              </p>
              <p>
                We do not sell, rent, monetize, or trade your personal information. We gather only the minimal data essential to correspond with prospective clients, draft quotations, develop web solutions, process payments, and provide reliable customer support.
              </p>
            </div>
          </div>

          {/* 2. Information We Collect */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">02.</span>
              What Information TNWebz May Collect
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>Depending on your interaction with us, we may collect the following details:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-zinc-800">Personal Contact Information:</strong> Your name, email address, and mobile/WhatsApp phone number when you fill out our contact form, inquire via WhatsApp, or reach out via email.</li>
                <li><strong className="text-zinc-800">Business &amp; Project Requirements:</strong> Company name, website URL, design preferences, feature specifications, project timelines, content assets (logos, images, text), and budget expectations.</li>
                <li><strong className="text-zinc-800">Contact Form &amp; Communication Submissions:</strong> Messages and information transmitted through our online contact form, referral submissions, email correspondence, or chat history.</li>
                <li><strong className="text-zinc-800">Billing &amp; Payment Records:</strong> Client billing name, email address, address for invoice preparation, and transaction reference numbers (such as UPI reference ID or bank transfer UTR number). <span className="text-zinc-900 font-semibold">Important note:</span> TNWebz does NOT process, store, or have access to your credit card numbers, debit card numbers, CVVs, or online banking passwords. Payments are conducted via external banking apps or secure payment gateway interfaces.</li>
                <li><strong className="text-zinc-800">Basic Technical Server Data:</strong> When accessing our website, standard web server access logs may automatically record non-identifying technical data such as browser type, operating system, and IP address for operational health and network security.</li>
              </ul>
            </div>
          </div>

          {/* 3. How We Use the Information */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">03.</span>
              How the Information Is Used
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>We use the collected information strictly for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-zinc-800">Client Communication:</strong> Answering inquiries, scheduling initial calls, sharing project proposals, discussing technical details, and providing project progress updates.</li>
                <li><strong className="text-zinc-800">Project Delivery &amp; Execution:</strong> Designing, engineering, testing, and deploying custom websites, web applications, and related digital solutions according to agreed scopes.</li>
                <li><strong className="text-zinc-800">Customer Support:</strong> Assisting clients with bug fixes, technical queries, post-handover support, and ongoing site maintenance.</li>
                <li><strong className="text-zinc-800">Billing &amp; Financial Accounting:</strong> Issuing formal estimates, milestone invoices, tracking payment settlements, and maintaining standard business tax records.</li>
                <li><strong className="text-zinc-800">Platform Security:</strong> Monitoring website health, preventing fraudulent inquiries or spam submissions, and ensuring system integrity.</li>
              </ul>
            </div>
          </div>

          {/* 4. Third-Party Services & Infrastructure */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">04.</span>
              Third-Party Services &amp; Infrastructure
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                To provide modern, performant web development services, TNWebz utilizes reputable technology providers:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-zinc-800">Hosting &amp; Edge Infrastructure:</strong> Our web platforms are hosted and served using enterprise cloud platforms such as Vercel and Firebase (Google Cloud), which provide content delivery networks, SSL encryption, and automated distributed deployment.</li>
                <li><strong className="text-zinc-800">Communication &amp; Messaging:</strong> When you click our chat prompts or submit inquiries via WhatsApp, communication is handled directly through WhatsApp (Meta Platforms), governed by their respective privacy terms.</li>
                <li><strong className="text-zinc-800">Payment Processors &amp; Gateways:</strong> When payments are made via UPI, bank transfer (NEFT/IMPS), or payment gateway links, financial transactions are secured and processed directly by your bank and the respective licensed payment gateway. TNWebz never collects or retains sensitive card authentication data.</li>
                <li><strong className="text-zinc-800">Analytics Disclosure:</strong> We do not deploy invasive third-party tracking pixels (such as advertising retargeting pixels) or sell behavioral user profiles. Any traffic analysis is restricted to standard server access diagnostics.</li>
              </ul>
            </div>
          </div>

          {/* 5. Cookies & Tracking Technologies */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">05.</span>
              Cookies &amp; Local Storage
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                TNWebz does not use tracking cookies for behavioral advertising or cross-site tracking.
              </p>
              <p>
                Our website may utilize essential local storage or transient session tokens solely to preserve functional user interface preferences, administrative verification states, and to maintain site performance. You can configure your browser to reject or clear cookies at any time, which will not impair your ability to browse our core website content.
              </p>
            </div>
          </div>

          {/* 6. Data Retention */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">06.</span>
              Data Retention
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                We retain client personal data only for as long as necessary to fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contact inquiries that do not progress into active projects are periodically purged.</li>
                <li>Active client project files, correspondence, and technical specifications are retained during the project lifecycle and for an appropriate warranty/maintenance period.</li>
                <li>Financial transaction documentation, invoices, and payment receipts are retained for the duration required by applicable Indian tax and accounting obligations.</li>
              </ul>
            </div>
          </div>

          {/* 7. Security Measures */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">07.</span>
              Data Security
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                We implement appropriate technical and administrative safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                All data transmission between your browser and our website is protected using Transport Layer Security (TLS / HTTPS) encryption. Sensitive client access credentials shared during project delivery are handled using restricted access and destroyed or returned upon project handover.
              </p>
            </div>
          </div>

          {/* 8. User Rights & Contact Requests */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">08.</span>
              User Rights &amp; Contact Requests
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                You have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request the deletion of your personal records (subject to mandatory legal, invoicing, or tax retention requirements).
              </p>
              <p>
                To exercise any of these rights, please send a written request to <strong className="text-zinc-900">tnwebzz@gmail.com</strong>. We will review and respond to legitimate requests within a reasonable timeframe.
              </p>
            </div>
          </div>

          {/* 9. Changes to Privacy Policy */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">09.</span>
              Changes to This Policy
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                TNWebz reserves the right to update or modify this Privacy Policy periodically to reflect changes in our operational practices, regulatory requirements, or website capabilities.
              </p>
              <p>
                Any updates will be published directly on this page with an updated &quot;Effective Date&quot;. We encourage you to review this page periodically to stay informed about how we safeguard your information.
              </p>
            </div>
          </div>

          {/* 10. Contact Information */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">10.</span>
              Contact Information
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us:
            </p>
            <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-3 text-sm text-zinc-700">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-zinc-900 w-24">Business:</span>
                <span>TNWebz (Sole Proprietorship)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-zinc-900 w-24">Email:</span>
                <a href="mailto:tnwebzz@gmail.com" className="text-zinc-900 hover:underline">
                  tnwebzz@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-zinc-900 w-24">Phone / WA:</span>
                <a href="tel:+918608113558" className="text-zinc-900 hover:underline">
                  +91 8608113558
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-zinc-900 w-24">Location:</span>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Navigation to Other Legal Pages */}
          <div className="border-t border-zinc-200/80 pt-8 mt-12">
            <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-4">
              Related Business Documentation
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/terms"
                className="p-4 rounded-xl border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 transition-all text-sm group"
              >
                <span className="font-medium text-zinc-900 block group-hover:text-black">
                  Terms of Service
                </span>
                <span className="text-zinc-500 text-xs mt-1 block">
                  Service scope &amp; legal engagement
                </span>
              </Link>
              <Link
                href="/refund-policy"
                className="p-4 rounded-xl border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 transition-all text-sm group"
              >
                <span className="font-medium text-zinc-900 block group-hover:text-black">
                  Refund Policy
                </span>
                <span className="text-zinc-500 text-xs mt-1 block">
                  Cancellations &amp; service refunds
                </span>
              </Link>
              <Link
                href="/payment-terms"
                className="p-4 rounded-xl border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 transition-all text-sm group"
              >
                <span className="font-medium text-zinc-900 block group-hover:text-black">
                  Payment Terms
                </span>
                <span className="text-zinc-500 text-xs mt-1 block">
                  Pricing, milestones &amp; invoicing
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
