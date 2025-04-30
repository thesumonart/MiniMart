import { useParams } from "react-router-dom";
import { products } from "../../data/product.data";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const viewedProduct = products.find(
      (vProduct) => vProduct.name === params.productName,
    );
    setProduct(viewedProduct);
  }, []);
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex w-full flex-col gap-4 px-4 py-10 md:flex-row">
        <div className="w-full md:w-1/2">
          <figure className="flex w-full overflow-hidden rounded-md">
            <img className="w-full" src={product.image} alt={product.name} />
          </figure>
        </div>
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <h1 className="text-2xl font-bold md:text-3xl">{product.name}</h1>
          <p className="font- text-base text-gray-500">{product.shortDesc}</p>
          <p className="font-semibold text-gray-500">
            SKU: <span className="text-gray-800">{product.sku}</span>
          </p>

          <p className="font-semibold text-gray-500">
            Category: <span className="text-gray-800">{product.category}</span>
          </p>
          <p className="font-semibold text-gray-500">
            Brand: <span className="text-gray-800">{product.brand}</span>
          </p>
          <p className="font-semibold text-gray-500">
            Weight:{" "}
            <span className="text-gray-800">
              {product.weight.value} {product.weight.unit}
            </span>
          </p>
          <p className="font-semibold text-gray-500">
            Warranty: <span className="text-gray-800">{product.warranty}</span>
          </p>
          <div className="flex gap-2">
            {product.tags.map((badge) => (
              <Badge
                key={`badge-${badge}`}
                className="flex items-center justify-center capitalize"
              >
                {badge}
              </Badge>
            ))}
          </div>
          <p className="font-sans text-2xl font-bold">{`$${product.price}`}</p>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              className="cursor-pointer duration-300"
              onClick={() => {
                alert("product added to cart");
              }}
            >
              Add to cart
            </Button>
            <Button
              className="cursor-pointer duration-300"
              onClick={() => {
                alert("product purchased");
              }}
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 pb-20">
        <div className="flex flex-col gap-3">
          <h3 className="product-description text-2xl font-bold">
            Product Description
          </h3>
          <p className="text-base text-slate-500">{product.description}</p>
        </div>

        <div className="accordions-wrapper">
          <h3 className="product-description text-2xl font-bold">
            Frequently asked questions (FAQ)
          </h3>
          <Accordion type="single" className="mt-5" collapsible>
            {product.faq.map((accordion, index) => (
              <AccordionItem
                key={`accordion-${index}`}
                value={`accordion-${index}`}
              >
                <AccordionTrigger className="cursor-pointer text-lg font-semibold hover:text-blue-400 hover:no-underline">
                  {accordion.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-500">
                  {accordion.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
