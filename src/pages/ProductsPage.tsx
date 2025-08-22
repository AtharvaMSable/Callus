import ProductGrid from '../features/main/components/organisms/ProductGrid';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of premium performance apparel designed for professionals.
          </p>
        </div>
        
        <ProductGrid />
      </div>
    </div>
  );
}
