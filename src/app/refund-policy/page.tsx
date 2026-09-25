import { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo-utils";
import { 
  RotateCcw, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Review the Refund and Cancellation Policy for TNWebz freelance web development services. Clear guidelines on project cancellations, advance payments, milestones, and unstarted work.",
  alternates: {
    canonical: "https://tnwebz.com/refund-policy",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | TNWebz",
    description:
      "Transparent and fair refund and cancellation policies for bespoke web development services by TNWebz.",
    url: "https://tnwebz.com/refund-policy",
    siteName: "TNWebz",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Cancellation Policy | TNWebz",
    description:
      "Transparent and fair refund and cancellation policies for bespoke web development services by TNWebz.",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://tnwebz.com" },
  { name: "Refund & Cancellation Policy", url: "https://tnwebz.com/refund-policy" },
]);

export default function RefundPolicyPage() {
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
            <li className="text-zinc-900 font-medium">Refund &amp; Cancellation Policy</li>
          </ol>
        </nav>
      </div>

      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 border border-zinc-300/80 text-zinc-800 text-xs font-semibold tracking-wide uppercase mb-4">
          <RotateCcw className="w-3.5 h-3.5 text-zinc-700" />
          <span>Billing Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 mb-4 tracking-tight">
          Refund &amp; Cancellation Policy
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
          TNWebz provides custom, labor-intensive digital and web development services. This policy outlines our fair and transparent refund and cancellation procedures.
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
          
          {/* 1. Custom Digital Service Nature */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">01.</span>
              Nature of Custom Digital Services
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Unlike pre-packaged retail products or off-the-shelf software downloads, <strong className="text-zinc-900 font-semibold">TNWebz</strong> delivers custom, bespoke web development, design engineering, and digital consulting.
              </p>
              <p>
                Each project involves dedicated developer hours, research, architectural planning, and custom coding tailored specifically to your business requirements. Because significant human time and technical resources are committed immediately upon engagement, our refund terms reflect this service-based reality rather than an e-commerce physical return model.
              </p>
            </div>
          </div>

          {/* 2. Cancellation Before Work Begins */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">02.</span>
              Project Cancellation Before Work Begins
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                If the Client requests cancellation in writing <strong className="text-zinc-900 font-semibold">before</strong> any architectural planning, discovery, design drafting, or code development has commenced:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The advance payment is eligible for a refund, minus any unavoidable third-party transaction or banking fees incurred (e.g. payment gateway processing costs).</li>
                <li>The cancellation notice must be transmitted via official email to <strong className="text-zinc-900">tnwebzz@gmail.com</strong> clearly stating the project name and quotation details.</li>
              </ul>
            </div>
          </div>

          {/* 3. Cancellation After Work Begins */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">03.</span>
              Cancellation After Work Begins
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Once project discovery, design wireframing, architecture, or code development has started:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The initial advance payment is <strong className="text-zinc-900 font-semibold">non-refundable</strong>. The advance covers immediate developer resource reservation, architectural assessment, schedule blockage, and initial production setup.</li>
                <li>The Client is responsible for paying for all work completed, hours expended, and progress milestones achieved up to the effective time of written cancellation.</li>
                <li>If the value of the completed work exceeds the advance payment received, an invoice for the difference will be generated and will become due immediately.</li>
              </ul>
            </div>
          </div>

          {/* 4. Milestone Payments & Completed Milestones */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">04.</span>
              Completed Project Milestones
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                For projects structured around defined milestones (e.g., initial UI mockups, front-end staging, e-commerce checkout integration, final deployment):
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Once a milestone has been presented, demonstrated, reviewed, or approved by the Client, payments associated with that completed milestone are strictly <strong className="text-zinc-900 font-semibold">non-refundable</strong>.</li>
                <li>Approval may be given explicitly via email, messaging, or implicitly through authorizing progression to the next phase of work.</li>
              </ul>
            </div>
          </div>

          {/* 5. Refund Eligibility for Unstarted Portions */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">05.</span>
              Eligibility for Unstarted Portions of Work
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                In cases where a Client has paid in advance for multiple upcoming phases or future project milestones, and mutually agrees with TNWebz to terminate the engagement before those subsequent phases begin:
              </p>
              <p>
                The Client may be eligible for a fair, pro-rata refund covering the specific unstarted portions of work, calculated after deducting the fair value of all completed deliverables, hours logged, and non-recoverable third-party commitments.
              </p>
            </div>
          </div>

          {/* 6. Scope Changes */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">06.</span>
              Client-Requested Scope Changes
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                If the Client modifies the project vision, decides to remove previously planned features, or alters business direction midway through development, such scope changes do not retroactively invalidate payments made for work already completed.
              </p>
              <p>
                Work completed prior to a scope reduction will be billed as agreed, while any balance for unstarted features may, at TNWebz&apos;s discretion, be credited toward new requirements.
              </p>
            </div>
          </div>

          {/* 7. Third-Party Costs */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">07.</span>
              Third-Party Costs &amp; External Purchases
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                All third-party disbursements made on behalf of the Client are strictly <strong className="text-zinc-900 font-semibold">non-refundable</strong> once purchased or provisioned. This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Domain name registrations, domain renewals, or domain transfers.</li>
                <li>Third-party web hosting plans, server allocations, and cloud storage allocations.</li>
                <li>Commercial software licenses, paid plugins, fonts, stock photography, and UI asset kits.</li>
                <li>Paid external API subscriptions and third-party SMS/email gateway fees.</li>
              </ul>
              <p>
                These items are purchased from independent external vendors who do not offer cancellations or refunds to developers once issued.
              </p>
            </div>
          </div>

          {/* 8. Delays Caused by Missing Client Content/Approvals */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">08.</span>
              Delays Caused by Missing Assets or Approvals
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Web development projects require active participation, including supplying copy, imagery, product data, and feedback.
              </p>
              <p>
                Project delays resulting from a Client&apos;s inability or failure to supply requested content, verify milestone staging links, or provide required approvals do not constitute grounds for project cancellation or refunds. In such instances, the project timeline is paused until the required assets are delivered.
              </p>
            </div>
          </div>

          {/* 9. Abandoned Projects */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">09.</span>
              Abandoned Projects
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                If a Client becomes unresponsive to repeated communications (via email, phone, or WhatsApp) for <strong className="text-zinc-900 font-semibold">thirty (30) consecutive calendar days</strong> without prior written notification, the project will be officially classified as <strong className="text-zinc-900">Abandoned</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Upon classification as abandoned, all work ceases, staging access may be suspended, and all payments received are forfeited to compensate for allocated time and lost opportunity costs.</li>
                <li>Reactivating an abandoned project requires a written request and may be subject to a project restart fee and a revised schedule based on current availability.</li>
              </ul>
            </div>
          </div>

          {/* 10. Refund Processing Method & Timeline */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">10.</span>
              Refund Processing Method &amp; Timelines
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                When a refund is approved by TNWebz pursuant to this policy:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-zinc-800">Processing Method:</strong> Refunds are disbursed directly through the original method of payment (bank transfer / NEFT / IMPS / UPI) or directly to the originating bank account.</li>
                <li><strong className="text-zinc-800">Timeline:</strong> Approved refunds will be initiated within <strong className="text-zinc-900 font-semibold">seven (7) to fourteen (14) business days</strong> following mutual written agreement on the final calculated settlement.</li>
                <li><strong className="text-zinc-800">Currency:</strong> All refunds are calculated and executed in Indian Rupees (INR - ₹). TNWebz is not responsible for any currency conversion differences or inter-bank transaction fees incurred by international accounts.</li>
              </ul>
            </div>
          </div>

          {/* 11. How to Request Cancellation / Refund */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">11.</span>
              How to Request a Cancellation or Refund
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              All formal cancellation or refund requests must be submitted in writing. Please provide:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 text-sm sm:text-base">
              <li>Client Name and Business/Project Name</li>
              <li>Quotation or Invoice Reference Number</li>
              <li>Detailed explanation of the reason for cancellation</li>
              <li>Bank account details / UPI ID for any applicable refund remittance</li>
            </ul>
            <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-3 text-sm text-zinc-700 mt-4">
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
                <span className="font-semibold text-zinc-900 w-24">Office:</span>
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
              <Link
                href="/privacy-policy"
                className="p-4 rounded-xl border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 transition-all text-sm group"
              >
                <span className="font-medium text-zinc-900 block group-hover:text-black">
                  Privacy Policy
                </span>
                <span className="text-zinc-500 text-xs mt-1 block">
                  Data handling &amp; confidentiality
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
