import HeroSection from '../features/main/components/organisms/HeroSection';
import ProductShowcase from '../features/main/components/organisms/ProductShowcase';
import ProductGrid from '../features/main/components/organisms/ProductGrid';
import CTASection from '../features/main/components/organisms/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductShowcase />
      <ProductGrid />
      <CTASection />
    </div>
  );
}
