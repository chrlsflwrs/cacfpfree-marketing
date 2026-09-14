import type { Metadata } from "next";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: { absolute: "Sign up — CACFP Free" },
  description: "Create your free CACFP Free account.",
};

export default function SignupPage() {
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
            Sign up for CACFP Free
          </h1>
          <p
            className="mt-3 text-base"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Free childcare enrollment and compliance software. No app to
            download.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#fafafc] py-14 px-4">
        <div className="max-w-lg mx-auto">
          <SignupForm />
        </div>
      </div>
    </>
  );
}
