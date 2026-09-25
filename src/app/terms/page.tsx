import { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo-utils";
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  Code2, 
  AlertCircle, 
  HelpCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Terms of Service for TNWebz. Learn about our freelance web development service scope, client responsibilities, payment milestones, intellectual property rights, and project terms.",
  alternates: {
    canonical: "https://tnwebz.com/terms",
  },
  openGraph: {
    title: "Terms of Service | TNWebz",
    description:
      "Review the Terms of Service for TNWebz freelance web development and digital solutions.",
    url: "https://tnwebz.com/terms",
    siteName: "TNWebz",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | TNWebz",
    description:
      "Review the Terms of Service for TNWebz freelance web development and digital solutions.",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://tnwebz.com" },
  { name: "Terms of Service", url: "https://tnwebz.com/terms" },
]);

export default function TermsPage() {
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
            <li className="text-zinc-900 font-medium">Terms of Service</li>
          </ol>
        </nav>
      </div>

      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 border border-zinc-300/80 text-zinc-800 text-xs font-semibold tracking-wide uppercase mb-4">
          <FileText className="w-3.5 h-3.5 text-zinc-700" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 mb-4 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
          These Terms of Service govern your relationship with TNWebz. Please read them carefully before commissioning any web development, design, or technical services.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-500 border-t border-zinc-200/80 pt-4">
          <span>Effective Date: September 2026</span>
          <span className="hidden sm:inline">•</span>
          <span>Business: TNWebz (Sole Proprietorship)</span>
          <span className="hidden sm:inline">•</span>
          <span>Jurisdiction: India</span>
        </div>
      </section>

      {/* Document Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-20">
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.02),0_1px_3px_rgba(0,0,0,0.01)] space-y-12">
          
          {/* 1. Acceptance of Terms */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">01.</span>
              Acceptance of Terms
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                By commissioning work, paying an advance invoice, approving an estimate, or using the website services provided by <strong className="text-zinc-900 font-semibold">TNWebz</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) agree to be legally bound by these Terms of Service.
              </p>
              <p>
                TNWebz operates as an independent sole proprietorship freelance web development service based in Tamil Nadu, India. If you do not agree with any part of these terms, you should notify us in writing before any project commencement or milestone payment.
              </p>
            </div>
          </div>

          {/* 2. Description of Services */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">02.</span>
              Description of TNWebz Services
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                TNWebz provides bespoke digital development and technical implementation services, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-zinc-800">Website Development:</strong> Responsive corporate websites, landing pages, business showcase sites, and personal portfolio websites.</li>
                <li><strong className="text-zinc-800">Web Application Development:</strong> Custom interactive web portals, administrative dashboards, and client-facing interfaces built with modern technologies.</li>
                <li><strong className="text-zinc-800">E-Commerce Development:</strong> Product catalogs, cart management, checkout integration, and online store architecture.</li>
                <li><strong className="text-zinc-800">UI Implementation:</strong> Converting design mockups, wireframes, and prototypes into clean, responsive HTML, CSS, JavaScript, and React code.</li>
                <li><strong className="text-zinc-800">Website Maintenance &amp; Updates:</strong> Code enhancements, speed optimization, technical bug repairs, and content revisions under agreed maintenance terms.</li>
              </ul>
              <p>
                Each project is carried out based on the specific scope agreed upon in the project quotation, proposal, or electronic communication.
              </p>
            </div>
          </div>

          {/* 3. Project Requirements and Scope */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">03.</span>
              Project Scope, Quotations &amp; Estimates
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Prior to commencing work, TNWebz provides a project quotation or statement of work detailing the deliverables, estimated timeline, and investment.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All quotations are provided in Indian Rupees (INR - ₹) unless explicitly stated otherwise in writing.</li>
                <li>Quotations remain valid for thirty (30) calendar days from the date of issue.</li>
                <li>Work is limited strictly to the agreed written specifications. Requests that fall outside the agreed scope are treated as change requests and quoted separately.</li>
              </ul>
            </div>
          </div>

          {/* 4. Client Responsibilities */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">04.</span>
              Client Responsibilities &amp; Content
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                A successful project relies on active client collaboration. The Client agrees to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide necessary text, branding assets, logos, imagery, credentials, and product data in a timely manner.</li>
                <li>Supply content that the Client legally owns or has explicit permission to use. TNWebz is not responsible for copyright or trademark infringements arising from client-supplied materials.</li>
                <li>Provide clear, consolidated feedback, review progress deliverables, and communicate approvals within agreed review windows.</li>
                <li>Designate a primary contact authorized to make project decisions, clarify requirements, and sign off on milestone completions.</li>
              </ul>
            </div>
          </div>

          {/* 5. Project Timelines & Delays */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">05.</span>
              Project Timelines
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Project timelines and delivery estimates are provided in good faith and represent our best professional estimates based on current schedule and project complexity.
              </p>
              <p>
                Timelines are dependent upon timely receipt of client assets, design approvals, and feedback. Delays resulting from missing client content, delayed reviews, or scope alterations will automatically extend project deadlines accordingly.
              </p>
            </div>
          </div>

          {/* 6. Revisions & Change Requests */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">06.</span>
              Revisions &amp; Scope Changes
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                To ensure quality and client satisfaction, standard quotations include a defined round of minor adjustments and refinements (such as text edits, layout fine-tuning, or color tweaks) within the agreed design direction.
              </p>
              <p>
                Substantial changes—including complete redesigns after mockup approval, restructuring developed modules, adding new web pages, or integrating new APIs not in the original scope—are classified as change requests. Such requests will be evaluated and billed separately after client confirmation.
              </p>
            </div>
          </div>

          {/* 7. Payment Obligations & Advance Payments */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">07.</span>
              Payment Obligations &amp; Suspension
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                An advance payment may be required depending on the project scope. The applicable amount and payment milestones will be stated in the quotation or project agreement before work commences.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-zinc-800">Advance Payments:</strong> Mobilize dedicated development time, preliminary research, wireframing, and schedule allocation.</li>
                <li><strong className="text-zinc-800">Milestone Payments:</strong> For larger projects, payments may be staggered according to key developmental milestones.</li>
                <li><strong className="text-zinc-800">Delayed Payments:</strong> Invoices are due upon receipt or within the timeline stated on the invoice. If payment is overdue, TNWebz reserves the right to pause ongoing development and withhold staging/production deployment until outstanding balances are resolved.</li>
                <li><strong className="text-zinc-800">Final Handover:</strong> Full and final balance settlement is required prior to deployment to the live server, domain connection, or release of final source code files.</li>
              </ul>
            </div>
          </div>

          {/* 8. Intellectual Property Ownership */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">08.</span>
              Intellectual Property &amp; Ownership Transfer
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                We respect your intellectual property and clearly outline ownership rights:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-zinc-800">Client Materials:</strong> All text, branding, trademarks, and media supplied by the Client remain the exclusive property of the Client.</li>
                <li><strong className="text-zinc-800">Transfer of Deliverables:</strong> Upon 100% full and final payment of all agreed fees, TNWebz grants and transfers to the Client all ownership rights to the final bespoke front-end code, assets, and design created specifically for the project.</li>
                <li><strong className="text-zinc-800">Third-Party &amp; Open Source:</strong> Ownership transfer does not apply to third-party software, open-source libraries (e.g., React, Next.js, Tailwind CSS), plugins, or pre-existing base utility code, which remain subject to their respective open-source or proprietary licenses.</li>
                <li><strong className="text-zinc-800">Portfolio Display:</strong> Unless a formal Non-Disclosure Agreement (NDA) is executed prior to commencement, TNWebz reserves the right to showcase the completed website, screenshots, and a link to the project in our professional portfolio and promotional materials.</li>
              </ul>
            </div>
          </div>

          {/* 9. Third-Party Services, Hosting & APIs */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">09.</span>
              Third-Party Services, Hosting &amp; Software
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Modern websites frequently interact with third-party providers (such as domain registrars, external hosting platforms, payment gateways, analytics providers, email delivery APIs, and map providers).
              </p>
              <p>
                While TNWebz assists with proper setup and integration, third-party services are operated independently. TNWebz is not responsible for outages, service interruptions, policy alterations, API deprecations, or pricing modifications introduced by external third-party providers. Any separate subscription fees charged directly by third-party services are the Client&apos;s responsibility.
              </p>
            </div>
          </div>

          {/* 10. Warranty & Bug-Fix Limitations */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">10.</span>
              Warranty &amp; Bug-Fix Limitations
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                TNWebz provides a complimentary thirty (30) calendar day warranty period starting from the official date of handover or deployment.
              </p>
              <p>
                During this period, TNWebz will fix any reproducible technical defects or bugs arising directly from the code written by us within the agreed scope, free of charge.
              </p>
              <p>
                This warranty does <strong className="text-zinc-800">not</strong> cover defects or failures resulting from:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Modifications made to the source code, hosting configuration, or database by the Client or any third party.</li>
                <li>Changes, deprecations, or outages in external third-party APIs, plugins, or hosting infrastructure.</li>
                <li>Incompatibilities caused by browser engine updates released after project completion.</li>
                <li>New feature requests or design alterations beyond the original scope.</li>
              </ul>
            </div>
          </div>

          {/* 11. Maintenance and Support */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">11.</span>
              Maintenance &amp; Ongoing Support
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Ongoing website maintenance, content updates, version upgrades, security monitoring, and regular backups beyond the initial warranty period are available through our optional maintenance plans or hourly consulting rates.
              </p>
              <p>
                Ongoing maintenance is not included in one-time development packages unless explicitly specified in the project agreement.
              </p>
            </div>
          </div>

          {/* 12. Limitation of Liability */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">12.</span>
              Limitation of Liability
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                To the fullest extent permitted by applicable law, TNWebz and its proprietor shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of business profits, lost revenue, data corruption, or business interruption, arising out of or related to the use or inability to use the developed deliverables.
              </p>
              <p>
                In all events, the total cumulative liability of TNWebz arising out of or relating to any project, whether in contract, tort, or otherwise, shall be strictly limited to the actual amount paid by the Client to TNWebz for the specific service or project in dispute.
              </p>
            </div>
          </div>

          {/* 13. Cancellation, Termination & Refunds */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">13.</span>
              Cancellation, Termination &amp; Refund Policy
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Either party may terminate a project agreement upon written notice. Upon termination, the Client remains liable for payment covering all work performed, hours expended, and non-recoverable third-party costs incurred up to the effective termination date.
              </p>
              <p>
                All cancellation and refund inquiries are strictly governed by our dedicated{" "}
                <Link href="/refund-policy" className="text-zinc-900 underline font-medium hover:text-black">
                  Refund &amp; Cancellation Policy
                </Link>
                , which provides detailed rules for pre-commencement cancellations, unstarted work, and milestone handovers.
              </p>
            </div>
          </div>

          {/* 14. Governing Law & Dispute Resolution */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">14.</span>
              Governing Law &amp; Jurisdiction
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                These Terms of Service, all related proposals, and any disputes or claims arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong className="text-zinc-900">India</strong>.
              </p>
              <p>
                In the event of any disagreement, the parties agree to first attempt resolution through good-faith informal discussion. If unresolved, the competent courts located in <strong className="text-zinc-900">Chennai, Tamil Nadu, India</strong> shall have exclusive jurisdiction over all legal proceedings.
              </p>
            </div>
          </div>

          {/* 15. Contact Information */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">15.</span>
              Contact Information
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              If you have any questions or require clarification regarding these Terms of Service, please reach out to us:
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
                href="/privacy-policy"
                className="p-4 rounded-xl border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 transition-all text-sm group"
              >
                <span className="font-medium text-zinc-900 block group-hover:text-black">
                  Privacy Policy
                </span>
                <span className="text-zinc-500 text-xs mt-1 block">
                  How we handle and protect data
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
