import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Palette, Sparkles, ArrowLeft, Copy, Check, Download } from 'lucide-react';
import { getBrandSuggestions } from '../lib/brandSuggestions';
import { generateLogoSVG, downloadLogoSVG, type LogoConfig } from '../lib/logoGenerator';

export function LogoDesignPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get domain from location state or default to 'general'
  const domain = (location.state as { domain?: string })?.domain || 'general';
  const suggestions = getBrandSuggestions(domain);
  
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>('');

  const handleCopyName = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(name);
    setSelectedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  const handleDownloadLogo = (concept: { id: string; name: string; colors: string[] }) => {
    const logoName = selectedName || suggestions.names[0].name;
    const logoConfig: LogoConfig = {
      id: concept.id,
      name: concept.name,
      colors: concept.colors,
      style: ''
    };
    const svgString = generateLogoSVG(logoConfig, logoName);
    downloadLogoSVG(svgString, `${logoName}-${concept.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const getGeneratedLogo = (concept: { id: string; name: string; colors: string[] }) => {
    const logoName = selectedName || suggestions.names[0].name;
    const logoConfig: LogoConfig = {
      id: concept.id,
      name: concept.name,
      colors: concept.colors,
      style: ''
    };
    return generateLogoSVG(logoConfig, logoName);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Logo Design & Name Suggestions</h1>
              <p className="text-gray-600 mt-1">Personalized brand identity ideas for your {domain} startup</p>
            </div>
          </div>
        </div>

        {/* Name Suggestions Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Startup Name Suggestions</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Here are some name suggestions tailored to your {domain} domain. Click the copy icon to copy any name. 
            <span className="font-semibold text-purple-600"> Selected names will be used to generate logos below!</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestions.names.map((nameSuggestion, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{nameSuggestion.name}</h3>
                    <p className="text-purple-600 font-medium text-sm mb-2">{nameSuggestion.tagline}</p>
                    <p className="text-gray-600 text-sm">{nameSuggestion.description}</p>
                  </div>
                  <button
                    onClick={() => handleCopyName(nameSuggestion.name)}
                    className="ml-4 p-2 text-gray-400 hover:text-purple-600 transition-colors"
                    title="Copy name"
                  >
                    {copiedName === nameSuggestion.name ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Concepts Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Palette className="w-6 h-6 text-pink-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Logo Design Concepts</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Explore these logo design concepts. Each concept includes color palette and style guidelines.
          </p>
          {selectedName && (
            <div className="mb-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Generating logos for:</span> <span className="text-purple-600 font-bold">{selectedName}</span>
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.logoConcepts.map((concept) => (
              <div
                key={concept.id}
                className={`border-2 rounded-xl p-6 transition-all ${
                  selectedLogo === concept.id
                    ? 'border-pink-500 shadow-lg'
                    : 'border-gray-200 hover:border-pink-300'
                }`}
              >
                <div 
                  className="mb-4 flex items-center justify-center bg-gray-50 rounded-lg p-4 min-h-[200px] cursor-pointer"
                  onClick={() => setSelectedLogo(concept.id)}
                  dangerouslySetInnerHTML={{ __html: getGeneratedLogo(concept) }}
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{concept.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{concept.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Color Palette:</p>
                  <div className="flex gap-2">
                    {concept.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Style:</p>
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">{concept.style}</span>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownloadLogo(concept);
                  }}
                  className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Logo (SVG)</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Steps</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Choose a name that resonates with your brand vision</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Select a logo concept that matches your brand personality</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Check domain availability for your chosen name</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Consider trademark registration for brand protection</span>
            </li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Results</span>
          </button>
        </div>
      </div>
    </div>
  );
}

