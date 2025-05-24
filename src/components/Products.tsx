import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

interface ProductProps {
  image: string;
  name: string;
  price: string;
  rating: number;
  description: string;
}

const ProductCard: React.FC<ProductProps> = ({ image, name, price, rating, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md">
          <ShoppingBag className="h-4 w-4 text-primary-600" />
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-heading font-bold text-lg">{name}</h3>
          <span className="text-secondary-600 font-bold">{price}</span>
        </div>
        
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating}.0)</span>
        </div>
        
        <p className="text-gray-600 text-sm">{description}</p>
        
        <button className="w-full mt-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors duration-300">
          Comprar
        </button>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const products = [
    {
      image: "https://github.com/Francisco-tads/Barbearia-premium/blob/master/src/img/Pomada%20Modeladora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Pomada Modeladora",
      price: "R$ 49,90",
      rating: 5,
      description: "Pomada de fixação forte para criar penteados estruturados com acabamento natural."
    },
    {
      image: "https://raw.githubusercontent.com/Francisco-tads/Barbearia-premium/refs/heads/master/src/img/spray-fixador.jpeg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Spray fixador",
      price: "R$ 39,90",
      rating: 4,
      description: "Spray fixador, para criar penteados estruturados com acabamento natural e brilhante."
    },
    {
      image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Loção pós barba",
      price: "R$ 29,90",
      rating: 4,
      description: "Pente feito de madeira premium para um acabamento perfeito em sua barba."
    },
    {
      image: "https://raw.githubusercontent.com/Francisco-tads/Barbearia-premium/refs/heads/master/src/img/Shampoo-Especial.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Shampoo Especial",
      price: "R$ 45,90",
      rating: 5,
      description: "Shampoo para cabelos masculinos que hidrata e fortalece, sem ressecar."
    }
  ];

  return (
    <section id="products" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="section-title">Nossos Produtos</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Encontre os melhores produtos para cuidados masculinos. 
          Selecionamos as melhores marcas para seu cabelo e barba.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            description={product.description}
          />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <a href="#" className="btn-secondary">
          Ver todos os produtos
        </a>
      </div>
    </section>
  );
};

export default Products;