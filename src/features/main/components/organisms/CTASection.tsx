import BasicButton from '../../../../shared/components/atoms/buttons/BasicButton';

export default function CTASection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* CTA Content */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              B2B Exclusive Uniform Solutions!
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              15 years of professional expertise at your service
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience superior quality and professional uniform solutions backed by over a decade of industry excellence.
            </p>
            
            <BasicButton 
              variant="primary" 
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-8 py-3"
            >
              Contact for Business Inquiries
            </BasicButton>
          </div>

          {/* Simple Chat Widget */}
          <div className="fixed bottom-6 right-6 z-50">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-colors duration-200">
              Ch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
