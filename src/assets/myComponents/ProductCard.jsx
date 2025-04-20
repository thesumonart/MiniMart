import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from "../../data/product.data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-5">
        Welcome to MiniMart
      </h1>
      <span className="w-3/4 border-b-2 border-dashed border-slate-300 flex mx-auto"></span>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 py-8 ">
        {products.map((product) => (
          <Card
            key={`product-${product.id}`}
            className="pt-0 overflow-clip group bg-blue-50 hover:shadow-lg hover:-translate-y-1.5 duration-300"
          >
            <figure className="w-full overflow-clip">
              <img
                className="transition-transform duration-300 group-hover:scale-110 w-full"
                src={product.image}
                alt={product.name}
              />
            </figure>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <div className="flex flex-col h-full justify-end gap-3">
              <CardContent>
                <CardDescription>{product.shortDesc}</CardDescription>
              </CardContent>
              <CardFooter className="gap-2 flex-col items-start">
                <p className="font-medium">${product.price}</p>
                <div className="flex gap-2">
                  <Link to={`/product/${product.name}`}>
                    <Button
                      variant="Outline"
                      className="cursor-pointer border border-primary hover:bg-primary hover:text-secondary duration-300"
                    >
                      View details
                    </Button>
                  </Link>
                  <Link to={`/product/${product.name}`}>
                    <Button className="cursor-pointer border border-primary duration-300 hover:bg-transparent hover:text-primary">
                      Buy now
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
