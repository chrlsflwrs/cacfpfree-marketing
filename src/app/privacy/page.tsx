import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy policy — CACFP Free" },
  description: "How CACFP Free collects, uses, and protects your information.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">{title}</h2>
      <div className="text-[#374151] leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-white">Privacy policy</h1>
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
            At CACFP Free (operated by CACFP Solutions), we take your privacy
            seriously. This policy explains what information we collect, how we
            use it, and your rights regarding your data. We&apos;ve written it
            in plain English — you shouldn&apos;t need a lawyer to understand
            how your information is handled.
          </p>

          <Section title="What information we collect">
            <p>When you sign up for or use CACFP Free, we collect:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>
                <strong>Name</strong> — so we know who you are
              </li>
              <li>
                <strong>Email address</strong> — to send account notifications
                and updates
              </li>
              <li>
                <strong>Phone number</strong> — to send SMS messages related to
                the service (like daily confirmation reminders)
              </li>
              <li>
                <strong>Daycare or organization name</strong> — to identify your
                account
              </li>
            </ul>
            <p>
              We also collect basic usage data (like pages visited and features
              used) to help us improve the service.
            </p>
          </Section>

          <Section title="How we use your information">
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Create and manage your account</li>
              <li>
                Deliver the features you signed up for (time reports, receipt
                processing, etc.)
              </li>
              <li>
                Send SMS messages that are part of the service (like daily time
                confirmation texts)
              </li>
              <li>Respond to your questions and support requests</li>
              <li>Improve and develop our products</li>
              <li>
                Send occasional product updates or announcements (you can opt
                out anytime)
              </li>
            </ul>
          </Section>

          <Section title="Payment processing">
            <p>
              When you subscribe to a paid plan, payments are processed by{" "}
              <strong>Stripe</strong>, a trusted third-party payment processor.
              We never see or store your credit card number — Stripe handles all
              payment data directly. You can review Stripe&apos;s privacy policy
              at{" "}
              <a
                href="https://stripe.com/privacy"
                className="text-[#48195d] underline hover:text-[#3a1449]"
                target="_blank"
                rel="noopener noreferrer"
              >
                stripe.com/privacy
              </a>
              .
            </p>
          </Section>

          <Section title="SMS messaging">
            <p>
              CACFP Free uses SMS text messages as part of its core features.
              For example, the Time Reports tool sends daily text messages to
              staff for time confirmation. By providing your phone number and
              using these features, you consent to receive these SMS messages.
            </p>
            <p>
              Standard message and data rates from your carrier may apply. You
              can opt out of SMS messages at any time by contacting us at{" "}
              <a
                href="mailto:support@cacfpsolutions.com"
                className="text-[#48195d] underline hover:text-[#3a1449]"
              >
                support@cacfpsolutions.com
              </a>
              .
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              We use cookies only for essential site functionality — things like
              keeping you logged in while you use the app. We do not use
              tracking cookies, advertising cookies, or any third-party analytics
              that track you across other websites.
            </p>
          </Section>

          <Section title="Data sharing">
            <p>
              We do not sell, rent, or share your personal information with
              third parties for marketing purposes. We may share limited
              information with:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>
                <strong>Service providers</strong> who help us operate CACFP
                Free (like Stripe for payments or our SMS provider for text
                messages) — only what&apos;s needed for them to do their job
              </li>
              <li>
                <strong>Legal requirements</strong> — if required by law, court
                order, or government authority
              </li>
            </ul>
            <p>That&apos;s it. Your data is not for sale.</p>
          </Section>

          <Section title="Data security">
            <p>
              We store your data securely in the United States. We use
              industry-standard security measures — including encryption in
              transit and at rest — to protect your information. That said, no
              internet-based service is 100% guaranteed to be secure. We
              encourage you to use a strong, unique password for your account.
            </p>
          </Section>

          <Section title="Data retention and deletion">
            <p>
              We keep your data as long as your account is active. If you cancel
              your account, we&apos;ll retain your data for a reasonable period
              (typically 90 days) in case you want to reactivate, then
              permanently delete it.
            </p>
            <p>
              To request deletion of your data at any time, email us at{" "}
              <a
                href="mailto:support@cacfpsolutions.com"
                className="text-[#48195d] underline hover:text-[#3a1449]"
              >
                support@cacfpsolutions.com
              </a>{" "}
              and we&apos;ll take care of it within 30 days.
            </p>
          </Section>

          <Section title="Children's privacy">
            <p>
              CACFP Free is intended for daycare providers and adults who operate
              childcare businesses. We do not knowingly collect personal
              information from children under 13. If we discover we&apos;ve
              collected data from someone under 13, we&apos;ll delete it
              promptly.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. If we make significant
              changes, we&apos;ll let you know by email or by posting a notice
              on our website. The &ldquo;last updated&rdquo; date at the top of
              this page will always reflect when the policy was last revised.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              If you have questions about this privacy policy or your data,
              please reach out:
            </p>
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
