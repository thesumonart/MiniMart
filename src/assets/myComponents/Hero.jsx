import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="relative bg-gray-900 py-12 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
        <div className="absolute inset-0 hidden lg:block">
          <img
            className="h-full w-full object-cover object-right-bottom"
            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/background.png"
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-md lg:text-left xl:max-w-lg">
            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
              Shop Smarter, Live Better – Everything You Need, All in One Place.
            </h1>
            <p className="mt-8 text-base leading-7 font-normal text-gray-400 lg:max-w-md lg:pr-16 xl:pr-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
              nisl eu consectetur. Mi massa elementum odio eu viverra amet.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-5 lg:justify-start xl:mt-16">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-3 text-base leading-7 font-bold text-gray-900 transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none sm:px-6"
                role="button"
              >
                Go to shop
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:hidden">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
