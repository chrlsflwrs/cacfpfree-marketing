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
            Effective date: January 1, 2024 &nbsp;&middot;&nbsp; Last updated: May 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-14 px-4">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#374151] leading-relaxed mb-10">
            At CACFP Free (operated by CACFP Solutions LLC), we take your privacy
            seriously. This policy explains what information we collect, how we
            use it, and your rights regarding your data. We&apos;ve written it
            in plain English &mdash; you shouldn&apos;t need a lawyer to understand
            how your information is handled.
          </p>

          <Section title="What information we collect">
            <p>
              When you register for or use CACFP Free, we may collect the
              following:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>
                <strong>Name</strong> &mdash; so we know who you are
              </li>
              <li>
                <strong>Email address</strong> &mdash; for account notifications,
                updates, and support
              </li>
              <li>
                <strong>Phone number</strong> &mdash; when you consent to receive
                SMS messages as part of the service
              </li>
              <li>
                <strong>Mailing address</strong> &mdash; if provided during
                account setup or billing
              </li>
              <li>
                <strong>Daycare or organization name</strong> &mdash; to identify
                your account
              </li>
              <li>
                <strong>Payment information</strong> &mdash; processed directly
                by Stripe (we never store card numbers on our servers)
              </li>
            </ul>
            <p>
              We also collect interaction data related to SMS messages (such as
              delivery reports and responses) and basic usage data (like pages
              visited and features used) to help us improve the service.
            </p>
          </Section>

          <Section title="When we collect information">
            <p>We collect information when you:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Create an account or complete the setup flow</li>
              <li>Subscribe to a paid plan</li>
              <li>Opt in to SMS messages</li>
              <li>Fill out a form or contact us for support</li>
              <li>Use any CACFP Free feature (time reports, receipts, etc.)</li>
            </ul>
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
                Send SMS messages that are part of the service &mdash; such as
                daily time confirmation texts, service alerts, appointment
                reminders, and account updates
              </li>
              <li>Respond to your support requests and questions</li>
              <li>Process transactions quickly and securely</li>
              <li>Improve and develop our products</li>
              <li>
                Send occasional product updates or announcements (you can opt
                out anytime)
              </li>
              <li>
                Administer any contests or promotions (if applicable)
              </li>
            </ul>
          </Section>

          <Section title="SMS / text messaging">
            <p>
              CACFP Free uses SMS text messages as part of its core features.
              By providing your phone number and opting in to SMS, you consent
              to receive text messages from us. Opt-in may occur through the
              account setup flow or another form that presents a clear disclosure
              of message types, frequency, rates, and how to opt out.
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>
                <strong>Message types:</strong> Service alerts, daily time
                confirmation reminders, appointment reminders, account updates,
                and support communications
              </li>
              <li>
                <strong>Message frequency:</strong> Varies based on your account
                activity and service features you use
              </li>
              <li>
                <strong>Message &amp; data rates:</strong> Standard rates from
                your carrier may apply. CACFP Free is not responsible for any
                charges from your carrier.
              </li>
              <li>
                <strong>To opt out:</strong> Reply <strong>STOP</strong> to any
                message at any time to stop receiving texts from us
              </li>
              <li>
                <strong>For help:</strong> Reply <strong>HELP</strong>, or
                contact us at{" "}
                <a
                  href="mailto:help@cacfpsolutions.com"
                  className="text-[#48195d] underline hover:text-[#3a1449]"
                >
                  help@cacfpsolutions.com
                </a>{" "}
                or 512-657-8036
              </li>
            </ul>
            <p>
              <strong>Consent data sharing:</strong> Text messaging opt-in data
              and consent will not be shared with any third parties, excluding
              aggregators and providers of the text messaging services we use to
              deliver messages.
            </p>
          </Section>

          <Section title="Payment processing">
            <p>
              When you subscribe to a paid plan, payments are processed by{" "}
              <strong>Stripe</strong>, a trusted third-party payment processor.
              We never see or store your credit card number &mdash; Stripe handles
              all payment data directly and uses Secure Socket Layer (SSL)
              technology. You can review Stripe&apos;s privacy policy at{" "}
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

          <Section title="Cookies">
            <p>
              Cookies are small files that a site transfers to your
              computer&apos;s hard drive to help recognize your browser and
              remember visit details. We use cookies for essential site
              functionality &mdash; things like keeping you logged in while you
              use the app. You can disable cookies through your browser settings,
              though some features may not work properly without them.
            </p>
            <p>
              We do not use advertising cookies or third-party tracking cookies
              that follow you across other websites.
            </p>
          </Section>

          <Section title="Analytics">
            <p>
              We may use Google Analytics to understand how visitors use our
              site. Google Analytics collects information like pages visited and
              time spent on site. You can opt out using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-[#48195d] underline hover:text-[#3a1449]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics opt-out browser add-on
              </a>
              . For more information, see{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-[#48195d] underline hover:text-[#3a1449]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s privacy policy
              </a>
              .
            </p>
          </Section>

          <Section title="Data sharing">
            <p>
              We do not sell, rent, or share your personal information with
              third parties for marketing or promotional purposes. Mobile
              information will not be shared, sold, or conveyed to third parties
              for marketing or promotional purposes. We may share limited
              information only in these circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>
                <strong>Service providers</strong> who help us operate CACFP
                Free (such as Stripe for payments or our SMS provider for text
                message delivery) &mdash; only what&apos;s needed for them to
                do their job, and they cannot use or disclose it otherwise
              </li>
              <li>
                <strong>Business transfers</strong> &mdash; in the event of a
                merger, acquisition, or sale of assets, your information may
                transfer to the new entity with prior notice to you
              </li>
              <li>
                <strong>Legal requirements</strong> &mdash; if required by law,
                court order, or government authority
              </li>
            </ul>
            <p>That&apos;s it. Your data is not for sale.</p>
          </Section>

          <Section title="Data security">
            <p>
              Your personal information is stored behind secured networks and is
              only accessible by a limited number of authorized personnel. We
              use industry-standard security measures &mdash; including SSL
              encryption in transit and encryption at rest &mdash; to protect
              your information. We conduct regular security reviews of our
              systems.
            </p>
            <p>
              That said, no method of transmission over the internet or
              electronic storage is 100% secure. We encourage you to use a
              strong, unique password for your account.
            </p>
          </Section>

          <Section title="Data retention and deletion">
            <p>
              We retain your information only as long as your account is active
              and as necessary to provide services, comply with legal
              obligations, resolve disputes, and enforce our agreements.
            </p>
            <p>
              If you cancel your account, we&apos;ll retain your data for a
              reasonable period (typically 90 days) in case you want to
              reactivate, then permanently delete it. To request deletion of
              your data at any time, email us at{" "}
              <a
                href="mailto:help@cacfpsolutions.com"
                className="text-[#48195d] underline hover:text-[#3a1449]"
              >
                help@cacfpsolutions.com
              </a>{" "}
              and we&apos;ll take care of it within 30 days.
            </p>
          </Section>

          <Section title="Third-party links">
            <p>
              Our website or app may include links to third-party websites or
              integrations. These third parties have their own privacy policies,
              and we are not responsible for their content or practices. We
              encourage you to review their policies before providing any
              personal information.
            </p>
          </Section>

          <Section title="Children&apos;s privacy">
            <p>
              CACFP Free is intended for daycare providers and adults who operate
              childcare businesses. We do not knowingly collect personal
              information from children under 13. If we discover we&apos;ve
              collected data from someone under 13, we&apos;ll delete it
              promptly.
            </p>
          </Section>

          <Section title="GDPR rights (European users)">
            <p>
              If you are located in the European Economic Area, CACFP Solutions
              LLC acts as a Data Controller for your personal information. You
              have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request erasure of your personal information</li>
              <li>Request that we restrict processing of your information</li>
              <li>Object to our processing of your information</li>
              <li>Request portability of your data</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:help@cacfpsolutions.com"
                className="text-[#48195d] underline hover:text-[#3a1449]"
              >
                help@cacfpsolutions.com
              </a>{" "}
              or 512-657-8036. You also have the right to lodge a complaint with
              your local data protection authority.
            </p>
          </Section>

          <Section title="California privacy rights (CCPA)">
            <p>
              If you are a California resident, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>
                Know what categories of personal data we have collected about
                you, and request the specific pieces of information we hold
              </li>
              <li>Request deletion of the personal data we have collected</li>
              <li>
                Opt out of the sale of your personal data (note: we do not sell
                personal data)
              </li>
            </ul>
            <p>
              You may submit requests directly or through an authorized agent.
              We have one month to respond. Contact us at{" "}
              <a
                href="mailto:help@cacfpsolutions.com"
                className="text-[#48195d] underline hover:text-[#3a1449]"
              >
                help@cacfpsolutions.com
              </a>{" "}
              or 512-657-8036.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time to reflect changes in
              our practices or for operational, legal, or regulatory reasons. If
              we make significant changes, we&apos;ll let you know by email or
              by posting a notice on our website. The &ldquo;last updated&rdquo;
              date at the top of this page will always reflect when the policy
              was last revised. Continued use of CACFP Free after an update
              constitutes acceptance of the revised policy.
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
