import { productCategories } from '../../data/products';

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 rounded-full text-yellow-600 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Professional Collection
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crafted for{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Professional Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our premium uniform collections designed specifically for businesses that value quality, professionalism, and attention to detail.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {productCategories.map((category, index) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-square mb-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
                  }}
                />
                
                {/* Simple gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 h-16 minimal-gradient" />
                
                {/* Category number */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center text-white">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span className="text-sm font-medium">Explore Collection</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Product Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-96 lg:h-[600px]">
              <img
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/9/DmhV60Re_c06c9d0f226d4448b57e0f632c9b0a27"
                alt="Featured Model"
                className="w-full h-full object-cover"
              />
              
              {/* Simple gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-20 minimal-gradient" />
              
              <div className="absolute top-6 right-6 bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                ✨ New Collection
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Premium Quality
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Engineered for{' '}
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our latest collection combines cutting-edge materials with timeless design principles. 
                  Each piece is meticulously crafted to provide uncompromising comfort and durability 
                  for the modern professional.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">24h</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Fast Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">5★</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Rated</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700">Available in:</span>
                  <div className="flex space-x-2">
                    {['#8B4513', '#000000', '#4A4A4A', '#FFFFFF'].map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-xl hover:from-black hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Collection
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
