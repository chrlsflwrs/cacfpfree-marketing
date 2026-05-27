import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Terms of service — CACFP Free" },
  description: "Terms and conditions for using CACFP Free tools and services.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">{title}</h2>
      <div className="text-[#374151] leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      {/* Purple banner header */}
      <div
        style={{
          background: "linear-gradient(135deg, #48195d 0%, #6b2d7b 100%)",
        }}
        className="px-4 py-10"
      >
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-3xl font-bold text-white">Terms of service</h1>
          <p
            className="text-sm mt-2"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Last updated: May 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-14 px-4">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#374151] leading-relaxed mb-10">
            Welcome to CACFP Free. These terms explain what you can expect from
            us and what we ask of you in return. We&apos;ve kept this
            straightforward — no fine print surprises.
          </p>

          <Section title="Acceptance of terms">
            <p>
              By creating an account or using CACFP Free, you agree to these
              terms. If you don&apos;t agree, please don&apos;t use the service.
              If you&apos;re using CACFP Free on behalf of a business,
              you&apos;re agreeing to these terms on that business&apos;s
              behalf.
            </p>
          </Section>

          <Section title="Description of service">
            <p>
              CACFP Free is a suite of tools to help daycare providers and
              childcare businesses with CACFP record-keeping. Current tools
              include Time Reports and Receipt Processing. A full CACFP software
              platform (enrollment, meal counts, compliance tracking) is in
              development.
            </p>
            <p className="font-medium text-[#1a1a2e] bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
              Important: CACFP Free is a record-keeping tool. We are not a law
              firm and do not provide legal, compliance, or audit advice. Our
              tools help you organize and maintain records — but it&apos;s your
              responsibility to ensure your records are accurate and that you
              comply with CACFP program requirements. When in doubt, consult
              your CACFP sponsor or a qualified professional.
            </p>
          </Section>

          <Section title="Account registration">
            <p>
              You&apos;ll need to create an account to use CACFP Free.
              You&apos;re responsible for keeping your login credentials secure
              and for all activity under your account. Please use a real email
              address — we need it to communicate with you.
            </p>
          </Section>

          <Section title="Free and paid plans">
            <p>
              Each CACFP Free tool offers a free tier with limited capacity, and
              paid plans for more usage. Current plan details are available on
              our{" "}
              <a href="/pricing" className="text-[#48195d] underline hover:text-[#3a1449]">
                Pricing page
              </a>
              . We reserve the right to update pricing and plan features with
              reasonable advance notice.
            </p>
          </Section>

          <Section title="Billing and cancellation">
            <p>
              Paid subscriptions are billed monthly through Stripe. You can
              cancel anytime from your account settings — no hoops to jump
              through. When you cancel, your access continues through the end of
              your current billing period. We don&apos;t offer prorated refunds
              for partial months.
            </p>
          </Section>

          <Section title="Acceptable use">
            <p>
              Please use CACFP Free for its intended purpose: managing
              CACFP-related records for your daycare or childcare business.
              Don&apos;t use it to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Violate any laws or regulations</li>
              <li>Submit false or fraudulent information</li>
              <li>
                Attempt to access other users&apos; accounts or our systems
                without authorization
              </li>
              <li>Resell or redistribute access to the service</li>
            </ul>
          </Section>

          <Section title="Intellectual property">
            <p>
              CACFP Free and all content we create — software, design, text,
              logos — belong to CACFP Solutions. You&apos;re welcome to use the
              service as intended, but please don&apos;t copy or redistribute
              our software or materials without permission.
            </p>
          </Section>

          <Section title="Disclaimer">
            <p>
              We work hard to make CACFP Free reliable, but we provide the
              service &ldquo;as is.&rdquo; We don&apos;t guarantee:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>That the service will be available 100% of the time</li>
              <li>
                That using our tools will result in a successful CACFP audit
              </li>
              <li>
                That our tools are a substitute for professional compliance
                advice
              </li>
            </ul>
            <p>
              Use CACFP Free as one part of your overall CACFP compliance
              process, not as your only safeguard.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the extent permitted by law, CACFP Solutions won&apos;t be
              liable for indirect, incidental, or consequential damages arising
              from your use of CACFP Free. Our total liability to you
              won&apos;t exceed the amount you&apos;ve paid us in the 12 months
              preceding the claim.
            </p>
          </Section>

          <Section title="Account termination">
            <p>
              We can suspend or terminate accounts that violate these terms,
              engage in fraud, or otherwise harm the service or other users.
              We&apos;ll try to notify you before taking action unless
              it&apos;s urgent. If your account is terminated for cause, you
              won&apos;t receive a refund for unused subscription time.
            </p>
            <p>
              You can also delete your account at any time by contacting us at{" "}
              <a
                href="mailto:support@cacfpsolutions.com"
                className="text-[#48195d] underline hover:text-[#3a1449]"
              >
                support@cacfpsolutions.com
              </a>
              .
            </p>
          </Section>

          <Section title="Changes to terms">
            <p>
              We may update these terms from time to time. We&apos;ll give you
              reasonable notice of significant changes — either by email or by
              posting an update on our website. Continuing to use CACFP Free
              after a change takes effect means you accept the updated terms.
            </p>
          </Section>

          <Section title="Governing law">
            <p>
              These terms are governed by the laws of the State of Texas,
              without regard to its conflict of law provisions. Any disputes
              will be resolved in the courts of Dallas County, Texas.
            </p>
          </Section>

          <Section title="Contact us">
            <p>Questions about these terms? We&apos;re easy to reach:</p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@cacfpsolutions.com"
                className="text-[#48195d] underline hover:text-[#3a1449]"
              >
                support@cacfpsolutions.com
              </a>
            </p>
            <p>
              <strong>CACFP Solutions</strong>
              <br />
              Dallas, Texas
            </p>
          </Section>
        </div>
      </div>
    </>
  );
}
