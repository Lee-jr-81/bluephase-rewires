export default function BenefitsSection() {
  return (
    <section className="bg-mediumAccent py-24 mt-36">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-lg mx-auto w-5/6 text-white">
        <div>
          <h3 className="text-xl font-bold">Peace of Mind</h3>
          <p className="mt-2">
            Every installation is planned according to your needs, tested, and
            signed off properly in accordance with BS:7671.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Ready for Modern Living</h3>
          <p className="mt-2">
            Power, data, and lighting designed around how you live today. Aswell
            as modern conveniences factored in.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">No Nasty Surprises</h3>
          <p className="mt-2">
            Clear pricing, clear communication, no shortcuts. All from a team of
            experts who actually care.
          </p>
        </div>
      </div>
    </section>
  );
}
