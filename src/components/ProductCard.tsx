import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { Product } from "@/pages/Index";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  console.log("ProductCard rendered for product:", product.name);

  const handleAddToCart = () => {
    console.log("Add to cart clicked for:", product.name);
    onAddToCart(product);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-green-100">
      <CardHeader className="text-center pb-2">
        <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit mx-auto">
          {product.category}
        </Badge>
      </CardHeader>
      
      <CardContent className="text-center">
        <h3 className="font-bold text-lg text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-2xl font-bold text-green-600">
            €{product.price.toFixed(2)}
          </span>
          <span className="text-gray-500 text-sm">
            / {product.unit}
          </span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
        >
          <Plus className="h-4 w-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};