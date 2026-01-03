import Image from "next/image";
import BluephaseFav from "../public/bluephase_logo_favicon.png";

export default function SolutionSection() {
  return (
    <section className="bg-gray-50 py-24 md:mt-36 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-screen-lg mx-auto w-5/6 items-start">
        {/* Image */}
        <div className="w-full max-w-sm mx-auto md:mx-0 aspect-square rounded-xl overflow-hidden md:mt-6">
          <Image
            src={BluephaseFav}
            alt="Lee working on a domestic electrical installation"
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Copy */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-darkAccent">
            A More Considered Approach to Rewiring
          </h2>

          <p className="text-md text-darkAccent">
            After years working in domestic electrical installations, it became
            clear that many rewires were treated as short-term jobs rather than
            long-term decisions.
          </p>

          <p className="text-md text-darkAccent">
            In reality, a house rewire forms part of a home’s core
            infrastructure — Once it’s in place, everything else relies on it.
          </p>

          <p className="text-md text-darkAccent">
            Bluephase Rewires was built around that understanding. Work is
            planned carefully, communication is clear throughout, and every
            decision is made with how the home will be used for years to come.
          </p>
        </div>
      </div>
    </section>
  );
}
