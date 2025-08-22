import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BasicButton from '../atoms/buttons/BasicButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const languageRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español'  },
    { code: 'FR', name: 'Français'  },
    { code: 'DE', name: 'Deutsch'  },
    { code: 'IT', name: 'Italiano' },
    { code: 'JP', name: '日本語'  },
  ];

  const navItems = [
    { name: 'SS', href: '/ss' },
    { name: 'FW', href: '/fw' },
    { name: 'PANTS', href: '/pants' },
    { name: 'T-Shirt', href: '/t-shirt' },
    { name: 'SALE', href: '/sale', isSpecial: true },
    { name: 'COLLECTION', href: '/collection' },
    { name: 'COMMUNITY', href: '/community' },
  ];

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    setIsLanguageOpen(false);
    // Here you would typically implement actual translation logic
    console.log(`Language changed to: ${languageCode}`);
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-black font-bold text-lg">L</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
              LANDAS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  item.isSpecial 
                    ? 'text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                {item.isSpecial && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                )}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-3 hover:text-yellow-400 hover:bg-white/10 rounded-lg transition-all duration-300 relative group">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="absolute -inset-1 bg-yellow-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="p-3 hover:text-yellow-400 hover:bg-white/10 rounded-lg transition-all duration-300 relative group">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full" />
              <span className="absolute -inset-1 bg-yellow-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <div className="h-6 w-px bg-gray-700 mx-2" />
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Link>
            </div>
            
            <div className="h-6 w-px bg-gray-700 mx-2" />
            
            {/* Language Selector */}
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
              >
                <span className="text-lg">{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                <span className="font-medium">{currentLanguage}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50 overflow-hidden">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gray-800 transition-colors duration-200 ${
                        currentLanguage === language.code 
                          ? 'text-yellow-400 bg-gray-800' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <div className="flex-1 text-left">
                        <div className="font-medium">{language.code}</div>
                        <div className="text-xs text-gray-500">{language.name}</div>
                      </div>
                      {currentLanguage === language.code && (
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 bg-black/95 backdrop-blur-md">
            <nav className="py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    item.isSpecial 
                      ? 'text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    {item.isSpecial && (
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    )}
                  </div>
                </Link>
              ))}
              <div className="px-4 py-4 border-t border-gray-800 mt-6 pt-6 space-y-3">
                <div className="flex space-x-3">
                  <Link
                    to="/login"
                    className="flex-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BasicButton variant="secondary" size="md" fullWidth className="border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400">
                      Sign In
                    </BasicButton>
                  </Link>
                  <Link
                    to="/signup"
                    className="flex-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BasicButton variant="primary" size="md" fullWidth className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400">
                      Sign Up
                    </BasicButton>
                  </Link>
                </div>
                <div className="flex justify-center space-x-6">
                  <button className="p-2 text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white relative">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full" />
                  </button>
                </div>
                
                {/* Mobile Language Selector */}
                <div className="pt-4 border-t border-gray-800">
                  <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">Language</div>
                  <div className="grid grid-cols-2 gap-2 px-4">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          currentLanguage === language.code
                            ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                            : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
                        }`}
                      >
                        <span className="text-base">{language.flag}</span>
                        <span className="font-medium">{language.code}</span>
                        {currentLanguage === language.code && (
                          <svg className="w-3 h-3 ml-auto text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
