import Image from "next/image";
import Network from "../public/2dFlatNetwork.png";
import ColouredLine from "./ColouredLine";
import Spark from "../public/WhiteElectricityIcon.png";

export default function IncludedSection() {
  return (
    <section className="bg-realdarkAccent mt-28 md:mt-64 relative">
      <div className="bg-mediumAccent w-[250px] md:w-[400px] p-2 rounded-xl mx-auto absolute left-24 md:left-[400px] -top-8">
        <h2 className="text-white font-semibold text-lg md:text-3xl text-center">
          Whats Included In Our Rewire?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center w-5/6 md:max-w-screen-lg gap-12 md:gap-28 mx-auto">
        <div className="mt-32 md:mt-64">
          <Image
            src={Network}
            alt="photo of media wall"
            placeholder="blur"
            className="object-cover rounded-xl"
          />
        </div>
        <div className="mt-20 md:mt-64">
          <div className="grid justify-start md:justify-start text-left">
            <h2 className="text-white text-xl font-bold ">
              3 Key Bases Covered
            </h2>
            <h2 className="text-mediumAccent text-xl font-bold mb-6">
              Bringing Rewires Up Do Date
            </h2>
          </div>
          <div className="w-3/4">
            <ColouredLine colour="red" />
          </div>
          <div className="grid mt-20 gap-6 mb-20 md:mb-40">
            <div className="flex items-center gap-4">
              <Image src={Spark} alt="image of an electric spark" height={50} />
              <h3 className="text-mediumAccent text-lg font-semibold text-left">
                Well thought out electrical wiring and accessory choice
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Spark} alt="image of an electric spark" height={50} />
              <h3 className="text-mediumAccent text-lg font-semibold text-left">
                High speed data network wired throughout
              </h3>
            </div>
            <div className="flex items-center gap-4 mb-20">
              <Image src={Spark} alt="image of an electric spark" height={50} />
              <h3 className="text-mediumAccent text-lg font-semibold text-left">
                Security alarm and CCTV system fitted
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
