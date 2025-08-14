import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🍎 FrutaFresh</h3>
            <p className="text-green-200 mb-4">
              Tu tienda de confianza para las frutas más frescas y deliciosas.
              Calidad premium desde 2024.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-green-300 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-green-300 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-green-300 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-green-200">
              <li><a href="#" className="hover:text-white">Inicio</a></li>
              <li><a href="#" className="hover:text-white">Productos</a></li>
              <li><a href="#" className="hover:text-white">Ofertas</a></li>
              <li><a href="#" className="hover:text-white">Sobre Nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2 text-green-200">
              <li><a href="#" className="hover:text-white">Frutas Tropicales</a></li>
              <li><a href="#" className="hover:text-white">Cítricos</a></li>
              <li><a href="#" className="hover:text-white">Berries</a></li>
              <li><a href="#" className="hover:text-white">Frutas de Temporada</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-green-200">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Calle de las Frutas 123, Madrid</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@frutafresh.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>&copy; 2024 FrutaFresh. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};