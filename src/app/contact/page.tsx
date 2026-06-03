import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Contact us — CACFP Free" },
  description:
    "Get in touch with the CACFP Free team. Questions, support, or just say hello.",
};

export default function ContactPage() {
  return (
    <>
      {/* Purple banner header */}
      <div
        style={{
          background: "linear-gradient(135deg, #48195d 0%, #6b2d7b 100%)",
        }}
        className="px-4 py-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Get in touch
          </h1>
          <p
            className="mt-3 text-base"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Have a question? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#fafafc] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — contact info */}
            <div>
              <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
                Have a question about CACFP Free? Need help getting started?
                Just want to say hello? We&apos;d love to hear from you.
              </p>

            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-[#1a1a2e] mb-5">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
