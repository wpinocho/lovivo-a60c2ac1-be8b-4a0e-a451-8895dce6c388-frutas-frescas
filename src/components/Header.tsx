import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  console.log("Header rendered with cart items count:", cartItemsCount);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-green-700">
              🍎 FrutaFresh
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-green-700 hover:text-green-900 font-medium">
              Inicio
            </a>
            <a href="#" className="text-green-700 hover:text-green-900 font-medium">
              Productos
            </a>
            <a href="#" className="text-green-700 hover:text-green-900 font-medium">
              Ofertas
            </a>
            <a href="#" className="text-green-700 hover:text-green-900 font-medium">
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative border-green-300 text-green-700 hover:bg-green-50"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};