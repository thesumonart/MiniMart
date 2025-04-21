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
      <h1 className="my-5 text-center text-4xl font-bold">
        Welcome to MiniMart
      </h1>
      <span className="mx-auto flex w-3/4 border-b-2 border-dashed border-slate-300"></span>
      <div className="grid gap-4 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {products.map((product) => (
          <Card
            key={`product-${product.id}`}
            className="group overflow-clip bg-blue-50 pt-0 duration-300 hover:-translate-y-1.5 hover:shadow-lg"
          >
            <figure className="w-full overflow-clip">
              <img
                className="w-full transition-transform duration-300 group-hover:scale-110"
                src={product.image}
                alt={product.name}
              />
            </figure>
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
                      variant="Outline"
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
        ))}
      </div>
    </>
  );
};

export default ProductCard;
