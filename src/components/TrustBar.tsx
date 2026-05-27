export default function TrustBar() {
  return (
    <section className="py-14 px-4 bg-white border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-base font-medium text-[#1a1a2e] mb-2">
          Trusted by daycare providers across Texas &middot; Built by CACFP
          compliance experts since 1990
        </p>
        <p className="text-sm text-gray-500">
          CACFP Free is powered by CACFP Solutions &middot;{" "}
          <a
            href="mailto:help@cacfpsolutions.com"
            className="text-[#48195d] hover:underline"
          >
            help@cacfpsolutions.com
          </a>
        </p>
      </div>
    </section>
  );
}
