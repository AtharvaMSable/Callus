import ProductCard from '../features/main/components/molecules/ProductCard';
import { products } from '../features/main/data/products';

export default function SalePage() {
  // Filter products that have a discount
  const saleProducts = products.filter(product => product.discount && product.discount > 0);

  const handleAddToCart = (productId: string) => {
    console.log('Adding product to cart:', productId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-60 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Flash Sale
            </span>
          </h1>
          <div className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold mb-6">
            Up to 20% OFF
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover incyellowible discounts on our premium fashion collection. Limited time offers you don't want to miss!
          </p>
        </div>
        
        {/* Sale Products Grid */}
        {saleProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No sale items available</h3>
            <p className="text-gray-600">Check back soon for amazing deals!</p>
          </div>
        )}
        
        {/* Newsletter CTA */}
        {saleProducts.length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Don't Miss Future Sales!</h3>
            <p className="text-yellow-100 mb-6">
              Subscribe to our newsletter and be the first to know about exclusive discounts and flash sales.
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-yellow-600 font-semibold rounded-r-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
