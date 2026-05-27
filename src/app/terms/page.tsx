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
            Effective date: January 2026 &nbsp;&middot;&nbsp; Last updated: May 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-14 px-4">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#374151] leading-relaxed mb-10">
            By accessing cacfpfree.com, using our software, or signing up for
            any CACFP Free service, you agree to be bound by these Terms of
            Service. We&apos;ve kept this straightforward &mdash; no fine print
            surprises.
          </p>

          <Section title="1. Acceptance of terms">
            <p>
              By creating an account or using CACFP Free, you agree to these
              terms. If you don&apos;t agree, please don&apos;t use the service.
              If you&apos;re using CACFP Free on behalf of a business or
              organization, you are agreeing to these terms on that
              entity&apos;s behalf and represent that you have the authority to
              do so.
            </p>
          </Section>

          <Section title="2. About our services">
            <p>
              CACFP Free is operated by CACFP Solutions LLC, a Texas-based
              company offering software tools to child care centers and
              after-school programs that participate in the Child and Adult Care
              Food Program (CACFP). Current tools include Time Distribution
              Reports and Receipt Processing. A full CACFP software platform is
              in development.
            </p>
            <p className="font-medium text-[#1a1a2e] bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
              Important: CACFP Free is a record-keeping tool, not a CACFP
              sponsor. We are an independent support team that helps centers
              manage their own CACFP records. Our tools help you organize and
              maintain documentation &mdash; but it&apos;s your responsibility
              to ensure your records are accurate and that you comply with CACFP
              program requirements. When in doubt, consult your CACFP sponsor or
              a qualified professional.
            </p>
          </Section>

          <Section title="3. Eligibility">
            <p>
              CACFP Free is intended for authorized representatives of eligible
              childcare facilities operating in the United States. You must be
              at least 18 years old and have the organizational authority to
              accept these terms on behalf of your center or program.
            </p>
          </Section>

          <Section title="4. User accounts">
            <p>
              You&apos;ll need to create an account to use CACFP Free.
              You&apos;re responsible for maintaining the confidentiality of
              your login credentials and for all activity that occurs under your
              account. Please use a real email address &mdash; we need it to
              communicate with you. Report any unauthorized access to your
              account immediately at{" "}
              <a
                href="mailto:help@cacfpsolutions.com"
                className="text-[#48195d] underline hover:text-[#3a1449]"
              >
                help@cacfpsolutions.com
              </a>{" "}
              or 512-657-8036.
            </p>
          </Section>

          <Section title="5. Free and paid plans">
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

          <Section title="6. Billing and cancellation">
            <p>
              Paid subscriptions are billed monthly through Stripe. All fees
              are due as specified and are non-refundable unless otherwise
              stated. You can cancel anytime from your account settings &mdash;
              no hoops to jump through. When you cancel, your access continues
              through the end of your current billing period. We don&apos;t
              offer prorated refunds for partial months.
            </p>
          </Section>

          <Section title="7. Acceptable use">
            <p>
              Please use CACFP Free for its intended purpose: managing
              CACFP-related records for your daycare or childcare business. You
              agree not to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Use the service unlawfully or contrary to these terms</li>
              <li>Submit false, fraudulent, or misleading information</li>
              <li>
                Attempt unauthorized access to any part of our systems or
                another user&apos;s account
              </li>
              <li>
                Reproduce, distribute, modify, or create derivative works from
                our software, content, or materials without prior written
                consent
              </li>
              <li>Misrepresent your identity or organizational affiliation</li>
              <li>Upload harmful code, malware, or anything that could interfere
                with service functionality
              </li>
              <li>Resell or redistribute access to the service</li>
            </ul>
          </Section>

          <Section title="8. Intellectual property">
            <p>
              All content, software, designs, logos, text, graphics, and other
              materials on CACFP Free are the property of CACFP Solutions LLC
              or our licensors. You&apos;re welcome to use the service as
              intended, but please don&apos;t copy, modify, distribute, sell, or
              lease any part of our software or materials without express written
              permission.
            </p>
          </Section>

          <Section title="9. Third-party services">
            <p>
              CACFP Free may include links to external websites or integrate
              third-party platforms. These third-party services have their own
              terms and privacy policies, and we are not responsible for their
              content, practices, or availability.
            </p>
          </Section>

          <Section title="10. Disclaimer of warranties">
            <p>
              We work hard to make CACFP Free reliable, but we provide the
              service &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              express or implied warranties. We don&apos;t guarantee:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>That the service will be available 100% of the time or
                error-free
              </li>
              <li>
                That using our tools will result in a successful CACFP audit or
                compliance outcome
              </li>
              <li>
                That our tools are a substitute for professional compliance
                advice
              </li>
            </ul>
            <p>
              Compliance guidance is advisory. Your organization remains
              responsible for its own program compliance and outcomes. Use CACFP
              Free as one part of your overall CACFP compliance process.
            </p>
          </Section>

          <Section title="11. Limitation of liability">
            <p>
              To the extent permitted by law, CACFP Solutions LLC, its owners,
              employees, and agents shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages &mdash;
              including lost revenue, data loss, or business interruption &mdash;
              arising from your use of CACFP Free, even if we have been notified
              of the possibility of such damages. Our total liability to you
              will not exceed the amount you have paid us in the 12 months
              preceding the claim.
            </p>
          </Section>

          <Section title="12. Indemnification">
            <p>
              You agree to defend, indemnify, and hold harmless CACFP Solutions
              LLC and its owners, employees, and agents from any claims,
              liabilities, damages, losses, and expenses (including reasonable
              legal fees) arising out of or related to your use of the service,
              your violation of these terms, or your violation of any applicable
              law.
            </p>
          </Section>

          <Section title="13. Account termination">
            <p>
              We may suspend or terminate accounts that violate these terms,
              engage in fraud, or otherwise harm the service or other users,
              with or without notice. We&apos;ll try to notify you before taking
              action unless it&apos;s urgent. If your account is terminated for
              cause, you won&apos;t receive a refund for unused subscription
              time.
            </p>
            <p>
              You may also terminate your account at any time by contacting us
              at{" "}
              <a
                href="mailto:help@cacfpsolutions.com"
                className="text-[#48195d] underline hover:text-[#3a1449]"
              >
                help@cacfpsolutions.com
              </a>{" "}
              with 30 days&apos; advance notice. Termination immediately revokes
              access to the service. Provisions related to intellectual
              property, liability, and indemnification survive termination.
            </p>
          </Section>

          <Section title="14. SMS / text messaging terms">
            <p>
              By providing your phone number and checking an SMS consent box (or
              opting in through the account setup flow), you authorize CACFP
              Free to send you automated text messages. Consent is not a
              condition of purchase or account creation.
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>
                <strong>Message types:</strong> Service alerts, daily time
                confirmation reminders, appointment reminders, account updates,
                and support communications
              </li>
              <li>
                <strong>Message frequency:</strong> Varies based on your account
                activity and the features you use
              </li>
              <li>
                <strong>Message &amp; data rates:</strong> Standard rates from
                your carrier may apply. CACFP Free is not responsible for any
                charges from your carrier.
              </li>
              <li>
                <strong>To opt out:</strong> Reply <strong>STOP</strong> to any
                message at any time
              </li>
              <li>
                <strong>For help:</strong> Reply <strong>HELP</strong>, email{" "}
                <a
                  href="mailto:help@cacfpsolutions.com"
                  className="text-[#48195d] underline hover:text-[#3a1449]"
                >
                  help@cacfpsolutions.com
                </a>
                , or call 512-657-8036
              </li>
            </ul>
            <p>
              Phone number data and SMS opt-in consent will not be shared,
              sold, or conveyed to third parties for marketing purposes,
              excluding aggregators and providers of the text messaging services
              we use to deliver messages.
            </p>
          </Section>

          <Section title="15. Changes to these terms">
            <p>
              We may update these terms to reflect changes in our services,
              practices, or legal requirements. We&apos;ll give you reasonable
              notice of significant changes &mdash; either by email or by
              posting an update on our website. Continuing to use CACFP Free
              after a change takes effect means you accept the updated terms.
            </p>
          </Section>

          <Section title="16. Governing law">
            <p>
              These terms are governed by the laws of the State of Texas,
              without regard to its conflict of law provisions. Any disputes
              will be subject to the exclusive jurisdiction of the state and
              federal courts located in Travis County, Texas.
            </p>
          </Section>

          <Section title="17. Contact us">
            <p>Questions about these terms? We&apos;re easy to reach:</p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:help@cacfpsolutions.com"
                className="text-[#48195d] underline hover:text-[#3a1449]"
              >
                help@cacfpsolutions.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> 512-657-8036
            </p>
            <p>
              <strong>CACFP Solutions LLC</strong>
              <br />
              10900 Research Blvd Ste 160C
              <br />
              Austin, Texas 78759
            </p>
          </Section>
        </div>
      </div>
    </>
  );
}
