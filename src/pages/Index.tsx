import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  unit: string;
}

export interface CartItem extends Product {
  quantity: number;
}

const fruits: Product[] = [
  {
    id: 1,
    name: "Manzanas Rojas",
    price: 3.50,
    image: "🍎",
    description: "Manzanas rojas frescas y crujientes",
    category: "Manzanas",
    unit: "kg"
  },
  {
    id: 2,
    name: "Plátanos",
    price: 2.20,
    image: "🍌",
    description: "Plátanos maduros y dulces",
    category: "Tropical",
    unit: "kg"
  },
  {
    id: 3,
    name: "Naranjas",
    price: 2.80,
    image: "🍊",
    description: "Naranjas jugosas llenas de vitamina C",
    category: "Cítricos",
    unit: "kg"
  },
  {
    id: 4,
    name: "Fresas",
    price: 4.50,
    image: "🍓",
    description: "Fresas frescas y aromáticas",
    category: "Berries",
    unit: "kg"
  },
  {
    id: 5,
    name: "Uvas Verdes",
    price: 5.20,
    image: "🍇",
    description: "Uvas verdes sin semillas",
    category: "Uvas",
    unit: "kg"
  },
  {
    id: 6,
    name: "Piña",
    price: 3.80,
    image: "🍍",
    description: "Piña tropical madura y dulce",
    category: "Tropical",
    unit: "unidad"
  },
  {
    id: 7,
    name: "Mangos",
    price: 4.20,
    image: "🥭",
    description: "Mangos tropicales maduros",
    category: "Tropical",
    unit: "kg"
  },
  {
    id: 8,
    name: "Peras",
    price: 3.20,
    image: "🍐",
    description: "Peras jugosas y suaves",
    category: "Peras",
    unit: "kg"
  },
  {
    id: 9,
    name: "Duraznos",
    price: 4.80,
    image: "🍑",
    description: "Duraznos frescos y aromáticos",
    category: "Frutas de hueso",
    unit: "kg"
  },
  {
    id: 10,
    name: "Kiwis",
    price: 6.50,
    image: "🥝",
    description: "Kiwis ricos en vitamina C",
    category: "Exóticas",
    unit: "kg"
  },
  {
    id: 11,
    name: "Sandía",
    price: 1.80,
    image: "🍉",
    description: "Sandía refrescante y dulce",
    category: "Melones",
    unit: "kg"
  },
  {
    id: 12,
    name: "Limones",
    price: 2.50,
    image: "🍋",
    description: "Limones frescos y ácidos",
    category: "Cítricos",
    unit: "kg"
  }
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log("Index component rendered with cart items:", cartItems);

  const addToCart = (product: Product) => {
    console.log("Adding product to cart:", product);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log("Updated cart items:", updatedItems);
        return updatedItems;
      } else {
        const newItems = [...prevItems, { ...product, quantity: 1 }];
        console.log("New cart items:", newItems);
        return newItems;
      }
    });
  };

  const removeFromCart = (productId: number) => {
    console.log("Removing product from cart:", productId);
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== productId);
      console.log("Cart after removal:", updatedItems);
      return updatedItems;
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    console.log("Updating quantity for product:", productId, "to:", quantity);
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
      console.log("Cart after quantity update:", updatedItems);
      return updatedItems;
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
            🍎 FrutaFresh 🍊
          </h1>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Las frutas más frescas y deliciosas directamente a tu mesa. 
            Calidad premium, precios justos.
          </p>
        </div>

        <ProductGrid products={fruits} onAddToCart={addToCart} />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Index;