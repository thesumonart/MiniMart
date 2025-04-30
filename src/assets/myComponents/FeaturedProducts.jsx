import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "../../data/product.data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between pt-10">
        <h3 className="text-2xl font-bold text-slate-800">
          Discover our Featured Products
        </h3>
        <Link to={"/shop"}>
          <Button className="group border-primary hover:text-primary relative flex cursor-pointer items-center gap-2 border duration-300 hover:bg-transparent">
            View All Products
            <ArrowRight className="!group-hover:w-4 !w-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Button>
        </Link>
      </div>
      <Swiper
        spaceBetween={24}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="!py-10"
      >
        {products
          .filter((product) => product.labels.includes("featured"))
          .map((product) => (
            <SwiperSlide key={`product-slide-${product.id}`} className="">
              <Card
                key={`product-${product.id}`}
                className="relative h-full overflow-clip bg-blue-50 pt-0 duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <Link
                  to={`/product/${product.name}`}
                  className="w-full overflow-clip"
                >
                  <img
                    className="aspect-3/2 w-full transition-transform duration-300 group-hover:scale-110"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <div className="flex h-full flex-col justify-end gap-3">
                  <CardContent>
                    <CardDescription>{product.shortDesc}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-2">
                    <p className="font-medium">${product.price}</p>
                    <div className="flex gap-2">
                      <Link to={`/product/${product.name}`}>
                        <Button
                          variant="outline"
                          className="border-primary hover:bg-primary hover:text-secondary cursor-pointer border duration-300"
                        >
                          View details
                        </Button>
                      </Link>
                      <Link to={`/product/${product.name}`}>
                        <Button className="border-primary hover:text-primary cursor-pointer border duration-300 hover:bg-transparent">
                          Buy now
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
