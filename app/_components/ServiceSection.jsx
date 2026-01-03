import AccentLine from "./AccentLine";

export default function ServiceSection() {
  return (
    <section className="mt-20">
      <div className="max-w-screen-lg mx-auto w-5/6">
        {/* Heading */}
        <div className="text-left max-w-screen-md mx-auto">
          <h2 className="text-3xl font-bold text-darkAccent">
            Our Rewire Service
          </h2>
          <AccentLine />
          <p className="mt-4 text-md text-darkAccent">
            One complete service, carefully delivered from planning to sign-off.
          </p>
        </div>

        {/* Service Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Column 1 */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-darkAccent mb-2">
              Planning & Design
            </h3>
            <p className="text-md text-darkAccent">
              We take the time to understand how you live in your home and plan
              the electrical layout around that — not just minimum requirements.
            </p>
          </div>

          {/* Column 2 */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-darkAccent mb-2">
              Installation
            </h3>
            <p className="text-md text-darkAccent">
              Work is carried out in a clean, organised way with respect for
              your home, keeping disruption to a minimum throughout.
            </p>
          </div>

          {/* Column 3 */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-darkAccent mb-2">
              Testing & Sign-Off
            </h3>
            <p className="text-md text-darkAccent">
              Every circuit is fully tested, certified, and signed off so you
              can be confident everything has been done properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
