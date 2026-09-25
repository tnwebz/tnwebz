import { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo-utils";
import { 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Receipt, 
  Coins, 
  ArrowRight,
  ShieldCheck,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Terms",
  description:
    "Review the Payment Terms for TNWebz. Information on pricing in INR, quotations, advance payments, milestone schedules, invoices, and billing policies.",
  alternates: {
    canonical: "https://tnwebz.com/payment-terms",
  },
  openGraph: {
    title: "Payment Terms | TNWebz",
    description:
      "Transparent payment guidelines, milestones, and billing policies for TNWebz web development clients.",
    url: "https://tnwebz.com/payment-terms",
    siteName: "TNWebz",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Terms | TNWebz",
    description:
      "Transparent payment guidelines, milestones, and billing policies for TNWebz web development clients.",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://tnwebz.com" },
  { name: "Payment Terms", url: "https://tnwebz.com/payment-terms" },
]);

export default function PaymentTermsPage() {
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
            <li className="text-zinc-900 font-medium">Payment Terms</li>
          </ol>
        </nav>
      </div>

      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 border border-zinc-300/80 text-zinc-800 text-xs font-semibold tracking-wide uppercase mb-4">
          <CreditCard className="w-3.5 h-3.5 text-zinc-700" />
          <span>Financial Policy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 mb-4 tracking-tight">
          Payment Terms
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
          These Payment Terms set forth the financial guidelines, milestone arrangements, invoicing procedures, and commercial terms applicable to all TNWebz projects.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-500 border-t border-zinc-200/80 pt-4">
          <span>Effective Date: September 2026</span>
          <span className="hidden sm:inline">•</span>
          <span>Currency: Indian Rupees (INR - ₹)</span>
          <span className="hidden sm:inline">•</span>
          <span>Business: TNWebz (Sole Proprietorship)</span>
        </div>
      </section>

      {/* Document Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-20">
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.02),0_1px_3px_rgba(0,0,0,0.01)] space-y-12">
          
          {/* 1. Currency and Pricing */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">01.</span>
              Currency &amp; Pricing Structure
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                All prices, quotations, estimates, and invoices issued by <strong className="text-zinc-900 font-semibold">TNWebz</strong> are denominated in <strong className="text-zinc-900">Indian Rupees (INR - ₹)</strong> unless explicitly quoted in another currency in writing for cross-border international clients.
              </p>
              <p>
                All payments must be settled in full without any deductions for bank remittance fees, currency conversion charges, or intermediary transaction expenses.
              </p>
            </div>
          </div>

          {/* 2. Quotation and Project Cost */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">02.</span>
              Scope-Based Quotations &amp; Estimates
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                The final cost of any project is based strictly on the approved quotation and mutually agreed scope of work.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Quotations are generated following an initial project assessment and outline all included deliverables, page counts, features, and timeline estimates.</li>
                <li>Quotations remain valid for thirty (30) calendar days from the date of issuance, after which TNWebz reserves the right to review and adjust estimates according to current capacity.</li>
                <li>Client sign-off or payment of the advance invoice constitutes formal acceptance of the quoted scope and these Payment Terms.</li>
              </ul>
            </div>
          </div>

          {/* 3. Advance Payment Policy */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">03.</span>
              Advance Payments
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 text-sm sm:text-base font-medium">
                An advance payment may be required depending on the project scope. The applicable amount and payment milestones will be stated in the quotation or project agreement before work commences.
              </div>
              <p>
                The advance payment reserves dedicated developer availability, covers project discovery, initial wireframing, architecture design, and schedule mobilization. No development or design production will begin until the agreed advance payment has cleared in our account.
              </p>
            </div>
          </div>

          {/* 4. Milestone-Based Payments */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">04.</span>
              Milestone-Based Payment Structures
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                For medium and large web projects, payments are typically distributed across key milestone stages to maintain alignment:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-zinc-800">Milestone 1 (Initial Mobilization):</strong> Advance payment prior to project kickoff, discovery, and UI architecture.</li>
                <li><strong className="text-zinc-800">Milestone 2 (Design &amp; Staging Approval):</strong> Interim payment upon presentation and approval of core functional page templates, responsive layout, or staging preview.</li>
                <li><strong className="text-zinc-800">Milestone 3 (Final Deployment &amp; Handover):</strong> Final balance payment prior to production deployment, domain pointing, or code transfer.</li>
              </ul>
              <p>
                The exact milestone breakdown for your specific engagement will be clearly outlined in your custom project proposal.
              </p>
            </div>
          </div>

          {/* 5. Final Balance & Handover */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">05.</span>
              Final Balance &amp; Deployment Handover
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Full and final settlement of all outstanding invoices is strictly required <strong className="text-zinc-900 font-semibold">prior to</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deploying the finished website or web application to the client&apos;s live production domain.</li>
                <li>Transferring repository access, master administrative accounts, or raw source code files.</li>
                <li>Handing over hosting server control or root DNS configurations.</li>
              </ul>
              <p>
                TNWebz does not provide live server deployments or release complete source code repositories on partial balances or promises of future settlement.
              </p>
            </div>
          </div>

          {/* 6. Extra Work & Out-of-Scope Alterations */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">06.</span>
              Extra Work Outside Approved Scope
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Any additional features, new web pages, complex API integrations, or fundamental design revisions requested after project scope approval will be treated as out-of-scope work.
              </p>
              <p>
                Such work will be estimated separately and billed at our standard hourly consulting rate or as an agreed fixed add-on fee. TNWebz will always seek written approval from the Client before undertaking any billable out-of-scope tasks.
              </p>
            </div>
          </div>

          {/* 7. Third-Party Expenses */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">07.</span>
              Third-Party Disbursements &amp; Expenses
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Third-party products and external subscriptions are billed separately unless explicitly bundled within a written project package:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Domain registration, renewal, or DNS management fees.</li>
                <li>Third-party web hosting, Virtual Private Server (VPS), cloud hosting, or database charges.</li>
                <li>Premium commercial software licenses, paid plugins, custom fonts, stock media, or UI kits.</li>
                <li>Paid third-party API subscriptions (e.g., payment gateways, SMS OTP providers, Google Maps API, translation tools).</li>
              </ul>
              <p>
                Where TNWebz procures third-party services on your behalf, payment for those expenses must be reimbursed in full in advance.
              </p>
            </div>
          </div>

          {/* 8. Payment Due Dates & Delayed Payments */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">08.</span>
              Payment Due Dates &amp; Delayed Payments
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                All invoices issued by TNWebz are due immediately upon receipt or within <strong className="text-zinc-900 font-semibold">five (5) to seven (7) business days</strong> of issuance, as specified on the invoice.
              </p>
              <p>
                <strong className="text-zinc-900">Project Suspension for Overdue Payments:</strong> If an agreed milestone payment is delayed beyond seven (7) calendar days, TNWebz reserves the right to immediately pause all active development, postpone delivery timelines, and temporarily disable staging previews until all outstanding dues are paid in full.
              </p>
            </div>
          </div>

          {/* 9. Payment Methods & Verification */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">09.</span>
              Payment Methods &amp; Invoicing
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>We accept payment through the following verified methods:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-zinc-800">Direct Bank Transfer:</strong> NEFT / RTGS / IMPS bank transfers to our designated bank account.</li>
                <li><strong className="text-zinc-800">Unified Payments Interface (UPI):</strong> Fast and secure transfer via Google Pay, PhonePe, Paytm, or BHIM.</li>
                <li><strong className="text-zinc-800">Payment Gateway Link:</strong> Official online checkout link for card/net banking payments via verified payment gateways where configured.</li>
              </ul>
              <p>
                An official electronic invoice or payment confirmation receipt is issued via email for every payment received.
              </p>
            </div>
          </div>

          {/* 10. Refunds and Disputes */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">10.</span>
              Refunds &amp; Payment Disputes
            </h2>
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                All cancellations and refund requests are governed exclusively by our{" "}
                <Link href="/refund-policy" className="text-zinc-900 underline font-medium hover:text-black">
                  Refund &amp; Cancellation Policy
                </Link>
                .
              </p>
              <p>
                If you believe an invoice contains an error or dispute any billing line item, you must notify us in writing within five (5) business days of invoice receipt. Both parties agree to resolve any genuine billing concerns amicably and in good faith before initiating formal legal or payment dispute measures.
              </p>
            </div>
          </div>

          {/* 11. Billing Inquiries & Contact */}
          <div className="space-y-4 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-zinc-400 font-mono text-base font-normal">11.</span>
              Billing &amp; Payment Inquiries
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              For any questions regarding your invoice, payment schedule, or quotation, please contact us:
            </p>
            <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-3 text-sm text-zinc-700 mt-4">
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
