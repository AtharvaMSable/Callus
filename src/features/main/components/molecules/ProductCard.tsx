import type { Product } from '../../types/product';
import BasicButton from '../../../../shared/components/atoms/buttons/BasicButton';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ product, onAddToCart, viewMode = 'grid' }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price) + '₩';
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
        <div className="flex flex-col sm:flex-row">
          {/* Product Image */}
          <div className="relative w-full sm:w-64 h-64 sm:h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
              }}
            />
            
            {/* Simple gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-16 minimal-gradient" />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col space-y-2">
              {product.isNew && (
                <span className="bg-emerald-500 text-white px-2 py-1 text-xs font-medium rounded">
                  NEW
                </span>
              )}
              {product.discount && (
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-yellow-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                </div>
                
                {/* Wishlist Button */}
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">(4.0)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2 mb-3">
                {product.discount ? (
                  <>
                    <span className="text-xl font-bold text-gray-900">
                      {formatPrice(product.price * (1 - product.discount / 100))}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.price)}
                    </span>
                  </>
                ) : (
                  <span className="text-xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
            </div>

            {/* Action Button */}
            <div className="flex space-x-2">
              <BasicButton
                onClick={() => onAddToCart?.(product.id)}
                variant="primary"
                size="sm"
                className="flex-1"
              >
                Add to Cart
              </BasicButton>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:border-yellow-400 hover:text-yellow-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view - minimalistic design like the provided image
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
          }}
        />
        
        {/* Simple gradient overlay like in the image */}
        <div className="absolute inset-x-0 bottom-0 h-20 minimal-gradient" />
        
        {/* Simple badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-emerald-500 text-white px-2 py-1 text-xs font-medium rounded">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
              SALE
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        
        {/* Simple Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">(4.8)</span>
        </div>

        {/* Simple Add to cart button */}
        <BasicButton
          onClick={() => onAddToCart?.(product.id)}
          variant="primary"
          size="sm"
          className="w-full"
        >
          Add to Cart
        </BasicButton>
      </div>
    </div>
  );
}
