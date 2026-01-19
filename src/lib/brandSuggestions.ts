export interface NameSuggestion {
  name: string;
  tagline: string;
  description: string;
}

export interface LogoConcept {
  id: string;
  name: string;
  description: string;
  colors: string[];
  style: string;
  icon: string;
}

export interface BrandSuggestions {
  names: NameSuggestion[];
  logoConcepts: LogoConcept[];
}

const brandSuggestionsByDomain: { [key: string]: BrandSuggestions } = {
  fintech: {
    names: [
      {
        name: 'PayFlow',
        tagline: 'Seamless Financial Solutions',
        description: 'Modern and trustworthy name suggesting smooth financial transactions'
      },
      {
        name: 'CoinVault',
        tagline: 'Secure Digital Banking',
        description: 'Emphasizes security and digital currency management'
      },
      {
        name: 'FinTech Hub',
        tagline: 'Your Financial Technology Partner',
        description: 'Professional and approachable name for B2B services'
      },
      {
        name: 'MoneyWise',
        tagline: 'Smart Financial Decisions',
        description: 'Friendly name suggesting intelligent financial management'
      },
      {
        name: 'SwiftPay',
        tagline: 'Fast & Secure Payments',
        description: 'Highlights speed and security in payment processing'
      }
    ],
    logoConcepts: [
      {
        id: 'fintech-1',
        name: 'Modern Shield',
        description: 'A sleek shield icon representing security and protection',
        colors: ['#2563EB', '#1E40AF', '#3B82F6'],
        style: 'Geometric, minimalist',
        icon: '🛡️'
      },
      {
        id: 'fintech-2',
        name: 'Digital Coins',
        description: 'Abstract coin or circle design symbolizing currency',
        colors: ['#10B981', '#059669', '#34D399'],
        style: 'Modern, abstract',
        icon: '💳'
      },
      {
        id: 'fintech-3',
        name: 'Growth Arrow',
        description: 'Upward arrow integrated with financial symbols',
        colors: ['#8B5CF6', '#7C3AED', '#A78BFA'],
        style: 'Dynamic, forward-moving',
        icon: '📈'
      }
    ]
  },
  healthtech: {
    names: [
      {
        name: 'HealthCare Plus',
        tagline: 'Advanced Medical Solutions',
        description: 'Professional healthcare technology platform'
      },
      {
        name: 'MediConnect',
        tagline: 'Connecting Patients & Providers',
        description: 'Emphasizes connectivity in healthcare'
      },
      {
        name: 'VitalTech',
        tagline: 'Your Health, Our Technology',
        description: 'Modern name combining health and technology'
      },
      {
        name: 'CareSync',
        tagline: 'Synchronized Healthcare',
        description: 'Suggests coordination and efficiency'
      },
      {
        name: 'WellnessHub',
        tagline: 'Your Wellness Journey Starts Here',
        description: 'Friendly and approachable health platform'
      }
    ],
    logoConcepts: [
      {
        id: 'healthtech-1',
        name: 'Medical Cross',
        description: 'Modern interpretation of medical cross symbol',
        colors: ['#EF4444', '#DC2626', '#F87171'],
        style: 'Clean, medical',
        icon: '➕'
      },
      {
        id: 'healthtech-2',
        name: 'Heart Pulse',
        description: 'Heartbeat line integrated with technology elements',
        colors: ['#EC4899', '#DB2777', '#F472B6'],
        style: 'Energetic, life-affirming',
        icon: '💓'
      },
      {
        id: 'healthtech-3',
        name: 'Shield Health',
        description: 'Protective shield with health symbols',
        colors: ['#10B981', '#059669', '#34D399'],
        style: 'Secure, trustworthy',
        icon: '🏥'
      }
    ]
  },
  edtech: {
    names: [
      {
        name: 'LearnHub',
        tagline: 'Empowering Education',
        description: 'Central platform for learning resources'
      },
      {
        name: 'EduFlow',
        tagline: 'Streamlined Learning Experience',
        description: 'Suggests smooth and efficient learning'
      },
      {
        name: 'SkillForge',
        tagline: 'Forge Your Future Skills',
        description: 'Strong name suggesting skill development'
      },
      {
        name: 'StudySync',
        tagline: 'Synchronized Learning',
        description: 'Modern name for collaborative education'
      },
      {
        name: 'KnowledgeBase',
        tagline: 'Your Learning Companion',
        description: 'Professional educational platform name'
      }
    ],
    logoConcepts: [
      {
        id: 'edtech-1',
        name: 'Graduation Cap',
        description: 'Modern cap icon representing education',
        colors: ['#3B82F6', '#2563EB', '#60A5FA'],
        style: 'Academic, professional',
        icon: '🎓'
      },
      {
        id: 'edtech-2',
        name: 'Light Bulb',
        description: 'Illuminated bulb symbolizing knowledge and ideas',
        colors: ['#F59E0B', '#D97706', '#FBBF24'],
        style: 'Creative, inspiring',
        icon: '💡'
      },
      {
        id: 'edtech-3',
        name: 'Book & Tech',
        description: 'Book integrated with digital elements',
        colors: ['#8B5CF6', '#7C3AED', '#A78BFA'],
        style: 'Modern, educational',
        icon: '📚'
      }
    ]
  },
  ecommerce: {
    names: [
      {
        name: 'ShopEase',
        tagline: 'Shop Made Simple',
        description: 'Easy and convenient shopping experience'
      },
      {
        name: 'CartHub',
        tagline: 'Everything You Need',
        description: 'Central marketplace for all products'
      },
      {
        name: 'QuickBuy',
        tagline: 'Fast & Reliable Shopping',
        description: 'Emphasizes speed in e-commerce'
      },
      {
        name: 'MarketPlace Pro',
        tagline: 'Professional E-Commerce Solutions',
        description: 'B2B focused marketplace platform'
      },
      {
        name: 'RetailRush',
        tagline: 'Your Shopping Destination',
        description: 'Energetic and modern retail platform'
      }
    ],
    logoConcepts: [
      {
        id: 'ecommerce-1',
        name: 'Shopping Bag',
        description: 'Modern shopping bag icon',
        colors: ['#10B981', '#059669', '#34D399'],
        style: 'Friendly, retail',
        icon: '🛍️'
      },
      {
        id: 'ecommerce-2',
        name: 'Cart Icon',
        description: 'Sleek shopping cart design',
        colors: ['#3B82F6', '#2563EB', '#60A5FA'],
        style: 'Clean, modern',
        icon: '🛒'
      },
      {
        id: 'ecommerce-3',
        name: 'Package Box',
        description: 'Gift box or package symbolizing delivery',
        colors: ['#F59E0B', '#D97706', '#FBBF24'],
        style: 'Welcoming, gift-like',
        icon: '📦'
      }
    ]
  },
  saas: {
    names: [
      {
        name: 'CloudSync',
        tagline: 'Your Cloud Solution',
        description: 'Cloud-based software platform'
      },
      {
        name: 'AppFlow',
        tagline: 'Streamline Your Workflow',
        description: 'Efficient software solution'
      },
      {
        name: 'TechStack',
        tagline: 'Complete Software Suite',
        description: 'Comprehensive SaaS platform'
      },
      {
        name: 'SoftHub',
        tagline: 'Software That Works',
        description: 'Reliable software solutions'
      },
      {
        name: 'DataDrive',
        tagline: 'Data-Driven Solutions',
        description: 'Analytics-focused SaaS platform'
      }
    ],
    logoConcepts: [
      {
        id: 'saas-1',
        name: 'Cloud Icon',
        description: 'Modern cloud symbolizing SaaS',
        colors: ['#3B82F6', '#2563EB', '#60A5FA'],
        style: 'Tech-forward, scalable',
        icon: '☁️'
      },
      {
        id: 'saas-2',
        name: 'Gear & Code',
        description: 'Gear integrated with code brackets',
        colors: ['#6366F1', '#4F46E5', '#818CF8'],
        style: 'Technical, precise',
        icon: '⚙️'
      },
      {
        id: 'saas-3',
        name: 'Network Nodes',
        description: 'Connected nodes representing integration',
        colors: ['#8B5CF6', '#7C3AED', '#A78BFA'],
        style: 'Connected, integrated',
        icon: '🔗'
      }
    ]
  },
  marketplace: {
    names: [
      {
        name: 'TradeHub',
        tagline: 'Your Trading Platform',
        description: 'Central marketplace for all trades'
      },
      {
        name: 'ConnectMarket',
        tagline: 'Connecting Buyers & Sellers',
        description: 'Emphasizes connection in marketplace'
      },
      {
        name: 'MarketSquare',
        tagline: 'The Digital Marketplace',
        description: 'Traditional marketplace concept modernized'
      },
      {
        name: 'ExchangePro',
        tagline: 'Professional Exchange Platform',
        description: 'B2B marketplace solution'
      },
      {
        name: 'BazaarNet',
        tagline: 'Online Bazaar Network',
        description: 'Global marketplace platform'
      }
    ],
    logoConcepts: [
      {
        id: 'marketplace-1',
        name: 'Handshake',
        description: 'Digital handshake symbolizing transactions',
        colors: ['#10B981', '#059669', '#34D399'],
        style: 'Trustworthy, professional',
        icon: '🤝'
      },
      {
        id: 'marketplace-2',
        name: 'Exchange Arrows',
        description: 'Bidirectional arrows showing exchange',
        colors: ['#3B82F6', '#2563EB', '#60A5FA'],
        style: 'Dynamic, transactional',
        icon: '🔄'
      },
      {
        id: 'marketplace-3',
        name: 'Network Circle',
        description: 'Connected circle representing community',
        colors: ['#F59E0B', '#D97706', '#FBBF24'],
        style: 'Community-focused',
        icon: '🌐'
      }
    ]
  },
  media: {
    names: [
      {
        name: 'MediaFlow',
        tagline: 'Streaming Content Platform',
        description: 'Modern media streaming service'
      },
      {
        name: 'ContentHub',
        tagline: 'Your Content Destination',
        description: 'Central platform for media content'
      },
      {
        name: 'StreamSync',
        tagline: 'Synchronized Streaming',
        description: 'Multi-platform streaming solution'
      },
      {
        name: 'VideoVault',
        tagline: 'Premium Video Content',
        description: 'High-quality video platform'
      },
      {
        name: 'MediaPro',
        tagline: 'Professional Media Solutions',
        description: 'B2B media platform'
      }
    ],
    logoConcepts: [
      {
        id: 'media-1',
        name: 'Play Button',
        description: 'Modern play button icon',
        colors: ['#EF4444', '#DC2626', '#F87171'],
        style: 'Bold, recognizable',
        icon: '▶️'
      },
      {
        id: 'media-2',
        name: 'Film Strip',
        description: 'Cinematic film strip design',
        colors: ['#6366F1', '#4F46E5', '#818CF8'],
        style: 'Cinematic, creative',
        icon: '🎬'
      },
      {
        id: 'media-3',
        name: 'Sound Waves',
        description: 'Audio waves representing media',
        colors: ['#8B5CF6', '#7C3AED', '#A78BFA'],
        style: 'Dynamic, audio-focused',
        icon: '🎵'
      }
    ]
  },
  logistics: {
    names: [
      {
        name: 'LogiFlow',
        tagline: 'Streamlined Logistics',
        description: 'Efficient logistics management'
      },
      {
        name: 'ShipFast',
        tagline: 'Fast & Reliable Shipping',
        description: 'Speed-focused logistics platform'
      },
      {
        name: 'TransitHub',
        tagline: 'Your Logistics Hub',
        description: 'Central logistics platform'
      },
      {
        name: 'DeliveryPro',
        tagline: 'Professional Delivery Solutions',
        description: 'B2B logistics service'
      },
      {
        name: 'RouteWise',
        tagline: 'Smart Route Optimization',
        description: 'AI-powered logistics platform'
      }
    ],
    logoConcepts: [
      {
        id: 'logistics-1',
        name: 'Truck Icon',
        description: 'Modern delivery truck symbol',
        colors: ['#3B82F6', '#2563EB', '#60A5FA'],
        style: 'Reliable, on-the-move',
        icon: '🚚'
      },
      {
        id: 'logistics-2',
        name: 'Package Route',
        description: 'Package with route lines',
        colors: ['#10B981', '#059669', '#34D399'],
        style: 'Efficient, tracking-focused',
        icon: '📦'
      },
      {
        id: 'logistics-3',
        name: 'Globe & Arrow',
        description: 'Global reach with directional arrow',
        colors: ['#F59E0B', '#D97706', '#FBBF24'],
        style: 'Global, connected',
        icon: '🌍'
      }
    ]
  },
  proptech: {
    names: [
      {
        name: 'PropTech Hub',
        tagline: 'Smart Property Solutions',
        description: 'Technology-driven property platform'
      },
      {
        name: 'HomeBase',
        tagline: 'Your Property Partner',
        description: 'Friendly property management platform'
      },
      {
        name: 'RealEstate Pro',
        tagline: 'Professional Property Solutions',
        description: 'B2B real estate technology'
      },
      {
        name: 'PropertyFlow',
        tagline: 'Streamlined Property Management',
        description: 'Efficient property platform'
      },
      {
        name: 'SpaceTech',
        tagline: 'Smart Space Solutions',
        description: 'Modern property technology'
      }
    ],
    logoConcepts: [
      {
        id: 'proptech-1',
        name: 'House Icon',
        description: 'Modern house/building symbol',
        colors: ['#3B82F6', '#2563EB', '#60A5FA'],
        style: 'Stable, architectural',
        icon: '🏠'
      },
      {
        id: 'proptech-2',
        name: 'Key & Tech',
        description: 'Key integrated with tech elements',
        colors: ['#F59E0B', '#D97706', '#FBBF24'],
        style: 'Access, security',
        icon: '🔑'
      },
      {
        id: 'proptech-3',
        name: 'Building Grid',
        description: 'Geometric building grid pattern',
        colors: ['#6366F1', '#4F46E5', '#818CF8'],
        style: 'Modern, structured',
        icon: '🏢'
      }
    ]
  },
  agritech: {
    names: [
      {
        name: 'AgriTech Solutions',
        tagline: 'Smart Farming Technology',
        description: 'Technology for modern agriculture'
      },
      {
        name: 'FarmFlow',
        tagline: 'Streamlined Farm Management',
        description: 'Efficient agricultural platform'
      },
      {
        name: 'CropWise',
        tagline: 'Intelligent Crop Management',
        description: 'AI-powered agriculture platform'
      },
      {
        name: 'GreenTech',
        tagline: 'Sustainable Agriculture',
        description: 'Eco-friendly farming solutions'
      },
      {
        name: 'HarvestHub',
        tagline: 'Your Agriculture Partner',
        description: 'Central agriculture platform'
      }
    ],
    logoConcepts: [
      {
        id: 'agritech-1',
        name: 'Leaf & Tech',
        description: 'Leaf integrated with technology',
        colors: ['#10B981', '#059669', '#34D399'],
        style: 'Natural, tech-enhanced',
        icon: '🌱'
      },
      {
        id: 'agritech-2',
        name: 'Wheat Icon',
        description: 'Agricultural crop symbol',
        colors: ['#F59E0B', '#D97706', '#FBBF24'],
        style: 'Traditional, growth',
        icon: '🌾'
      },
      {
        id: 'agritech-3',
        name: 'Farm Grid',
        description: 'Geometric farm field pattern',
        colors: ['#22C55E', '#16A34A', '#4ADE80'],
        style: 'Organized, productive',
        icon: '🌿'
      }
    ]
  },
  general: {
    names: [
      {
        name: 'InnovateHub',
        tagline: 'Your Innovation Platform',
        description: 'General innovation platform'
      },
      {
        name: 'TechStart',
        tagline: 'Start Your Tech Journey',
        description: 'General technology startup name'
      },
      {
        name: 'NextGen Solutions',
        tagline: 'Next Generation Technology',
        description: 'Forward-thinking tech platform'
      },
      {
        name: 'StartupHub',
        tagline: 'Your Startup Partner',
        description: 'General startup platform'
      },
      {
        name: 'InnovateLab',
        tagline: 'Innovation Laboratory',
        description: 'Creative innovation platform'
      }
    ],
    logoConcepts: [
      {
        id: 'general-1',
        name: 'Rocket',
        description: 'Rocket symbolizing growth and launch',
        colors: ['#3B82F6', '#2563EB', '#60A5FA'],
        style: 'Dynamic, forward-moving',
        icon: '🚀'
      },
      {
        id: 'general-2',
        name: 'Light Bulb',
        description: 'Idea and innovation symbol',
        colors: ['#F59E0B', '#D97706', '#FBBF24'],
        style: 'Creative, inspiring',
        icon: '💡'
      },
      {
        id: 'general-3',
        name: 'Star',
        description: 'Star representing excellence',
        colors: ['#8B5CF6', '#7C3AED', '#A78BFA'],
        style: 'Premium, aspirational',
        icon: '⭐'
      }
    ]
  }
};

export function getBrandSuggestions(domain: string): BrandSuggestions {
  return brandSuggestionsByDomain[domain.toLowerCase()] || brandSuggestionsByDomain['general'];
}

