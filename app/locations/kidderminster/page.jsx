import Image from "next/image";
import CTASection from "../../_components/CTASection";
import KidderminsterLandmark from "@/app/public/kidderminster_landmark.png";
import Avatar from "@/app/public/avatar_purple.png";
import AccentLine from "@/app/_components/AccentLine";

export default function KidderminsterPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-screen-lg mx-auto w-5/6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-mediumAccent">
              House Rewires in Kidderminster
            </h1>

            <p className="mt-6 text-lg md:text-xl text-darkAccent">
              We carry out full house rewires for homeowners in Kidderminster,
              focusing on careful planning, clear communication, and electrical
              systems that are built to last.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[240px] md:h-[320px] rounded-xl overflow-hidden">
            <Image
              src={KidderminsterLandmark}
              alt="Kidderminster town landmark"
              placeholder="blur"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="pb-28 mt-16">
        <div className="max-w-screen-md mx-auto w-5/6 space-y-6 text-lg text-darkAccent">
          <h2 className="text-3xl font-bold text-mediumAccent">
            Rewiring Homes Across Kidderminster
          </h2>
          <AccentLine />

          <p className="text-md">
            A house rewire is one of the most important upgrades a home can
            undergo. It forms part of the property’s underlying infrastructure
            and plays a key role in safety, comfort, and everyday usability.
          </p>

          <p className="text-md">
            Homes in and around Kidderminster vary widely in age and layout,
            with many properties still relying on electrical systems that were
            never designed to support modern demands. As households evolve,
            older wiring can quickly become a limiting factor.
          </p>

          <p className="text-md">
            We specialise exclusively in full domestic rewires, allowing us to
            approach each project with care and attention. From power and data
            upgrades to lighting and layout planning, decisions are made with
            long-term use in mind.
          </p>

          <p className="text-md">
            The result is a system that feels robust, thoughtfully designed, and
            capable of supporting modern living for years to come.
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-screen-md mx-auto w-5/6 space-y-6 text-lg text-darkAccent">
          <h2 className="text-3xl font-bold text-mediumAccent">
            Why Homeowners in Kidderminster Choose Bluephase
          </h2>
          <AccentLine />

          <p>
            Many homeowners reach out to us after finding the rewire process
            unclear or overwhelming elsewhere. Without the right guidance,
            important decisions can feel rushed or uncertain.
          </p>

          <p>
            By focusing specifically on house rewires, we’re able to offer a
            more considered service. That specialisation brings clarity to the
            process, better planning from the outset, and a smoother experience
            overall.
          </p>

          <p>
            Our aim is to provide confidence at every stage — through clear
            communication, realistic expectations, and a standard of work that
            reflects the importance of the project.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-screen-md mx-auto w-5/6 space-y-8 text-darkAccent">
          <h2 className="text-3xl font-bold text-mediumAccent">
            Our Rewire Process
          </h2>
          <AccentLine />

          <blockquote className="space-y-4 text-lg leading-relaxed">
            <p>
              “Every rewire starts with a thorough site visit. It’s important to
              understand the property, talk through how the space is used, and
              explain the process clearly before any work begins.
            </p>

            <p>
              Once agreed, the work is planned and carried out in stages.
              Everything is tested, certified, and checked carefully before
              final sign-off, ensuring the job has been completed properly.”
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-4 pt-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={Avatar}
                alt="Lee, Owner of Bluephase Rewires"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="leading-tight">
              <p className="text-lg font-semibold">Lee</p>
              <p className="text-md opacity-70">Owner, Bluephase Rewires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing context */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-screen-md mx-auto w-5/6 space-y-6 text-lg text-darkAccent">
          <h2 className="text-3xl font-bold text-mediumAccent">
            Rewire Costs in Kidderminster
          </h2>
          <AccentLine />

          <p>
            Rewire costs depend on factors such as property size, layout,
            access, and specification. As a general guide, most full house
            rewires fall within typical UK price ranges.
          </p>

          <p>
            A site visit is always required to provide a fixed and accurate
            quotation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
