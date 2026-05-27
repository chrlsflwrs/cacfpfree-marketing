const testimonials = [
  {
    stars: 5,
    quote:
      "Since partnering with CACFP Solutions, a major load is lifted. Going paperless makes my job so easy!",
    author: "Sharon F.",
    org: "Kids Express",
    initials: "SF",
  },
  {
    stars: 5,
    quote:
      "Their friendly, supportive staff are there to help our daycare whenever we need them — from admin reviews to daily recordkeeping!",
    author: "Millie M.",
    org: "Kids Express",
    initials: "MM",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">
          What daycare directors are saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.08)] transition-all duration-200"
            >
              {/* Stars */}
              <div className="text-[#E8734A] text-lg mb-4 tracking-wide">
                {"★".repeat(t.stars)}
              </div>

              {/* Quote */}
              <p className="text-[#374151] leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#48195d] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a2e] text-sm">
                    {t.author}
                  </p>
                  <p className="text-gray-500 text-xs">{t.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
