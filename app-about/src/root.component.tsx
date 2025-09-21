import about from "./assets/about.svg";

export default function Root(props) {
  return (
    <div className="flex w-full px-4 md:px-8 lg:px-10 xl:px-40 flex-col space-y-8 md:flex-row lg:flex-row xl:flex-row items-center gap-8 my-10">
      <div className="flex flex-col w-full">
        <h1 className="mb-10 text-3xl font-bold">About us</h1>
        <span className="mb-8">
          Launced in 2024, our ecommerce is premier online shopping makterplace
          with an active presense in around the world. Supported by wide range
          of tailored marketing, data and service solutions, Ecommerce has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </span>
        <span>
          Our ecommerce has more than 1 Million products to offer, growing at a
          very fast. Ecommerce offers a diverse assotment in categories ranging
          from consumer.
        </span>
      </div>
      <div className="w-full h-full">
        <img src={about} className="rounded-sm" />
      </div>
    </div>
  );
}
