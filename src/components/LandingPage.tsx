import { Rocket, Target, TrendingUp, CheckCircle, Users, Zap, ArrowRight, Menu, X, FileText, Star } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LandingPageProps {
  onGetStarted?: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      navigate('/signin');
    }
  };

  const handleLegalRequirements = () => {
    navigate('/legal-requirements');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Rocket className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Brand Lift</span>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#resources" className="text-gray-600 hover:text-blue-600 transition-colors">Resources</a>
              <button onClick={handleLegalRequirements} className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <FileText className="h-4 w-4" />
                <span>Legal Requirements for Your Startup</span>
              </button>
              <button onClick={handleGetStarted} className="text-gray-600 hover:text-blue-600 transition-colors">Login</button>
              <button onClick={handleGetStarted} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#reviews" className="block text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#resources" className="block text-gray-600 hover:text-blue-600 transition-colors">Resources</a>
              <button onClick={handleLegalRequirements} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Legal Requirements for Your Startup</span>
              </button>
              <button onClick={handleGetStarted} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors">Login</button>
              <button onClick={handleGetStarted} className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">Elevate Your Brand, Grow Your Business</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Complete Guide to
                <span className="text-blue-600"> Building & Growing</span> Your Brand
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Navigate company registration, create your brand identity, and master digital marketing with AI-powered personalized roadmaps tailored for Pakistani entrepreneurs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleGetStarted} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/30">
                  <span className="font-semibold">Start Your Journey</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                  Watch Demo
                </button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600 text-sm">Startups Launched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">10 Min</div>
                  <div className="text-gray-600 text-sm">To Get Started</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Company Registration</div>
                      <div className="text-sm text-gray-500">SECP & Legal Setup</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Brand Identity</div>
                      <div className="text-sm text-gray-500">Logo & Design</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Digital Marketing</div>
                      <div className="text-sm text-gray-500">Strategy & Launch</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Launch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and guidance to transform your startup idea into a thriving business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Survey System</h3>
              <p className="text-gray-600 leading-relaxed">
                Answer a few questions and get a personalized roadmap tailored to your startup's unique needs, industry, and goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Registration Guide</h3>
              <p className="text-gray-600 leading-relaxed">
                Step-by-step guidance for SECP registration, NTN, STRN, and all legal requirements specific to Pakistan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Branding Hub</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn naming strategies, logo design principles, color psychology, and create a memorable brand identity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Academy</h3>
              <p className="text-gray-600 leading-relaxed">
                Master digital marketing with interactive modules covering Meta, Google, LinkedIn ads, and content strategy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Center</h3>
              <p className="text-gray-600 leading-relaxed">
                Access templates, checklists, government links, and downloadable resources to accelerate your progress.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Tools</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate marketing captions, get content ideas, and receive intelligent recommendations powered by AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to launch your startup successfully
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/4 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-600 to-orange-600"></div>
            <div className="hidden md:block absolute top-1/4 left-2/3 w-1/3 h-0.5 bg-gradient-to-r from-orange-600 to-green-600"></div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-blue-600/30">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Survey</h3>
              <p className="text-gray-600 leading-relaxed">
                Answer questions about your business idea, goals, budget, and target market in just 5-7 minutes.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-orange-600/30">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Your Roadmap</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive a personalized, step-by-step roadmap with timelines, resources, and actionable tasks.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-600/30">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Grow</h3>
              <p className="text-gray-600 leading-relaxed">
                Follow the roadmap, track progress, access resources, and watch your startup come to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say About Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of satisfied entrepreneurs who have successfully launched their startups with Brand Lift
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">4.9/5</span>
              <span className="text-gray-600">(247+ reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Brand Lift made our company registration process so smooth! The step-by-step guide saved us weeks of research. Highly recommend to any startup founder in Pakistan."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-lg">AM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ahmed Malik</div>
                  <div className="text-sm text-gray-500">Founder, TechStart PK</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The branding tools are incredible! We got our logo design and brand identity sorted in days. The AI-powered suggestions were spot-on for our e-commerce business."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold text-lg">SK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sara Khan</div>
                  <div className="text-sm text-gray-500">CEO, ShopEasy</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Best investment we made! The digital marketing roadmap helped us launch our first campaign successfully. The templates and resources are gold. Thank you Brand Lift!"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-lg">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Muhammad Raza</div>
                  <div className="text-sm text-gray-500">Co-founder, Digital Solutions</div>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "As a first-time entrepreneur, I was overwhelmed. Brand Lift's personalized survey gave me a clear roadmap. The legal requirements section was especially helpful for SECP registration."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-lg">FA</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fatima Ali</div>
                  <div className="text-sm text-gray-500">Founder, HealthCare Plus</div>
                </div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The comprehensive resource center saved us so much time! All the templates, checklists, and government links in one place. This platform is a game-changer for Pakistani startups."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-lg">HS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Hassan Shah</div>
                  <div className="text-sm text-gray-500">Founder, EduTech Solutions</div>
                </div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Outstanding platform! The AI-powered domain prediction helped us choose the perfect name for our fintech startup. The entire journey from idea to launch was seamless."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold text-lg">ZA</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Zain Ahmed</div>
                  <div className="text-sm text-gray-500">CEO, PayFast Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/feedback')}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Turn Your Idea into Reality?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of successful Pakistani entrepreneurs who elevated their brands with Brand Lift
          </p>
          <button onClick={handleGetStarted} className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-xl font-semibold">
            <span>Start Your Journey Free</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-blue-500" />
                <span className="text-lg font-bold text-white">Brand Lift</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering Pakistani entrepreneurs to elevate their brands and grow their businesses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-blue-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Pricing</a></li>
                <li><a href="#resources" className="hover:text-blue-500 transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Guides</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.linkedin.com/company/brand-lift" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">About Us</a></li>
                <li><a href="https://blog.brandlift.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Blog</a></li>
                <li><a href="mailto:contact@brandlift.com" className="hover:text-blue-500 transition-colors">Contact</a></li>
                <li><a href="https://www.linkedin.com/company/brand-lift/jobs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://brandlift.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                <li><a href="https://brandlift.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                <li><a href="https://brandlift.com/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 text-center">
            <p>&copy; 2024 Brand Lift. All rights reserved. Made with care for Pakistani entrepreneurs.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
