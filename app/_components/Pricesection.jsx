import Button from "./Button";
import ColouredLine from "./ColouredLine";
import PriceCard from "./PriceCard";

const prices = [
  {
    price: 5800,
    bed: 2,
    id: 1,
  },
  {
    price: 7200,
    bed: 3,
    id: 2,
  },
  {
    price: 8600,
    bed: 4,
    id: 3,
  },
  {
    price: 10000,
    bed: 5,
    id: 4,
  },
];

export default function Pricesection() {
  return (
    <section className="mt-36 md:mt-64">
      <div className="grid grid-cols-1 md:grid-cols-2 text-center w-5/6 md:max-w-screen-lg gap-12 md:gap-28 mx-auto">
        <div>
          <div className="mb-4">
            <div className="grid justify-start md:justify-start text-left">
              <h2 className="text-darkAccent text-xl font-bold ">
                General Pricing Guide
              </h2>
              <h2 className="text-mediumAccent text-xl font-bold mb-6">
                Just To Give You An Idea
              </h2>
            </div>
            <div className="w-3/4">
              <ColouredLine colour="red" />
            </div>
            <p className=" text-lg md:text-xl text-left text-darkAccent font-medium mt-16">
              Our service doesn&apos;t begin with a site visit, it begins with
              you deciding you need a rewire. So with that in mind, here are a
              few prices to help you decide if a bluephase rewire is right for
              you. Please bear in mind these are rough guidelines. Depending on
              your layout, plus any cool ideas you may have for what else you
              want including, will affect the price.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          {prices.map((data) => (
            <PriceCard key={data.id} price={data.price} beds={data.bed} />
          ))}
        </div>
        <Button
          name="Contact Us"
          bg="bg-mediumAccent"
          textColour="text-white"
        />
      </div>
    </section>
  );
}
