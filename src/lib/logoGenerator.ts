export interface LogoConfig {
  id: string;
  name: string;
  colors: string[];
  style: string;
}

export function generateLogoSVG(config: LogoConfig, companyName: string): string {
  const primaryColor = config.colors[0];
  const secondaryColor = config.colors[1] || config.colors[0];
  const accentColor = config.colors[2] || config.colors[0];

  switch (config.id) {
    case 'fintech-1':
      return generateShieldLogo(companyName, primaryColor, secondaryColor);
    case 'fintech-2':
      return generateCoinLogo(companyName, primaryColor, secondaryColor);
    case 'fintech-3':
      return generateArrowLogo(companyName, primaryColor, secondaryColor);
    
    case 'healthtech-1':
      return generateCrossLogo(companyName, primaryColor, secondaryColor);
    case 'healthtech-2':
      return generateHeartbeatLogo(companyName, primaryColor, secondaryColor);
    case 'healthtech-3':
      return generateShieldHealthLogo(companyName, primaryColor, secondaryColor);
    
    case 'edtech-1':
      return generateCapLogo(companyName, primaryColor, secondaryColor);
    case 'edtech-2':
      return generateBulbLogo(companyName, primaryColor, secondaryColor);
    case 'edtech-3':
      return generateBookLogo(companyName, primaryColor, secondaryColor);
    
    case 'ecommerce-1':
      return generateBagLogo(companyName, primaryColor, secondaryColor);
    case 'ecommerce-2':
      return generateCartLogo(companyName, primaryColor, secondaryColor);
    case 'ecommerce-3':
      return generateBoxLogo(companyName, primaryColor, secondaryColor);
    
    case 'saas-1':
      return generateCloudLogo(companyName, primaryColor, secondaryColor);
    case 'saas-2':
      return generateGearLogo(companyName, primaryColor, secondaryColor);
    case 'saas-3':
      return generateNetworkLogo(companyName, primaryColor, secondaryColor);
    
    case 'marketplace-1':
      return generateHandshakeLogo(companyName, primaryColor, secondaryColor);
    case 'marketplace-2':
      return generateExchangeLogo(companyName, primaryColor, secondaryColor);
    case 'marketplace-3':
      return generateNetworkCircleLogo(companyName, primaryColor, secondaryColor);
    
    case 'media-1':
      return generatePlayLogo(companyName, primaryColor, secondaryColor);
    case 'media-2':
      return generateFilmLogo(companyName, primaryColor, secondaryColor);
    case 'media-3':
      return generateSoundWaveLogo(companyName, primaryColor, secondaryColor);
    
    case 'logistics-1':
      return generateTruckLogo(companyName, primaryColor, secondaryColor);
    case 'logistics-2':
      return generatePackageRouteLogo(companyName, primaryColor, secondaryColor);
    case 'logistics-3':
      return generateGlobeArrowLogo(companyName, primaryColor, secondaryColor);
    
    case 'proptech-1':
      return generateHouseLogo(companyName, primaryColor, secondaryColor);
    case 'proptech-2':
      return generateKeyLogo(companyName, primaryColor, secondaryColor);
    case 'proptech-3':
      return generateBuildingGridLogo(companyName, primaryColor, secondaryColor);
    
    case 'agritech-1':
      return generateLeafLogo(companyName, primaryColor, secondaryColor);
    case 'agritech-2':
      return generateWheatLogo(companyName, primaryColor, secondaryColor);
    case 'agritech-3':
      return generateFarmGridLogo(companyName, primaryColor, secondaryColor);
    
    case 'general-1':
      return generateRocketLogo(companyName, primaryColor, secondaryColor);
    case 'general-2':
      return generateBulbLogo(companyName, primaryColor, secondaryColor);
    case 'general-3':
      return generateStarLogo(companyName, primaryColor, secondaryColor);
    
    default:
      return generateDefaultLogo(companyName, primaryColor, secondaryColor);
  }
}

// Logo Generation Functions
function generateShieldLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M100 20 L160 50 L160 100 Q160 140 100 170 Q40 140 40 100 L40 50 Z" fill="url(#shieldGrad)" stroke="${color1}" stroke-width="3"/>
      <text x="100" y="110" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">${name.substring(0, 2).toUpperCase()}</text>
    </svg>
  `;
}

function generateCoinLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="70" fill="url(#coinGrad)"/>
      <circle cx="100" cy="100" r="60" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
      <text x="100" y="110" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle">${name.substring(0, 1).toUpperCase()}</text>
    </svg>
  `;
}

function generateArrowLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M40 100 L140 100 M120 80 L140 100 L120 120" stroke="url(#arrowGrad)" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="30" y="85" width="80" height="30" rx="5" fill="url(#arrowGrad)" opacity="0.2"/>
      <text x="70" y="105" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateCrossLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="crossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect x="75" y="40" width="50" height="120" rx="5" fill="url(#crossGrad)"/>
      <rect x="40" y="75" width="120" height="50" rx="5" fill="url(#crossGrad)"/>
      <circle cx="100" cy="100" r="35" fill="white" opacity="0.9"/>
      <text x="100" y="110" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 2).toUpperCase()}</text>
    </svg>
  `;
}

function generateHeartbeatLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M40 120 L60 100 L80 120 L100 80 L120 120 L140 100 L160 120" stroke="url(#heartGrad)" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M100 60 Q90 50 80 60 Q70 50 60 60 Q50 70 60 80 L100 120 L140 80 Q150 70 140 60 Q130 50 120 60 Q110 50 100 60 Z" fill="url(#heartGrad)" opacity="0.3"/>
      <text x="100" y="160" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateShieldHealthLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldHealthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M100 20 L160 50 L160 100 Q160 140 100 170 Q40 140 40 100 L40 50 Z" fill="url(#shieldHealthGrad)"/>
      <circle cx="100" cy="90" r="25" fill="white" opacity="0.9"/>
      <path d="M100 75 L100 105 M85 90 L115 90" stroke="${color1}" stroke-width="4" stroke-linecap="round"/>
      <text x="100" y="145" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">${name.substring(0, 4).toUpperCase()}</text>
    </svg>
  `;
}

function generateCapLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M50 80 L100 50 L150 80 L150 100 L50 100 Z" fill="url(#capGrad)"/>
      <circle cx="100" cy="90" r="8" fill="white"/>
      <rect x="60" y="100" width="80" height="20" fill="url(#capGrad)"/>
      <text x="100" y="140" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateBulbLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="90" rx="50" ry="60" fill="url(#bulbGrad)"/>
      <rect x="85" y="130" width="30" height="15" rx="3" fill="url(#bulbGrad)"/>
      <path d="M70 90 Q100 70 130 90" stroke="white" stroke-width="3" fill="none" opacity="0.5"/>
      <text x="100" y="165" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateBookLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect x="60" y="50" width="80" height="100" rx="3" fill="url(#bookGrad)"/>
      <line x1="100" y1="50" x2="100" y2="150" stroke="white" stroke-width="2" opacity="0.3"/>
      <path d="M60 70 L140 70 M60 90 L140 90 M60 110 L120 110" stroke="white" stroke-width="2" opacity="0.4"/>
      <text x="100" y="175" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateBagLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bagGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M70 60 L70 140 L130 140 L130 60 L110 60 L110 50 Q110 40 100 40 Q90 40 90 50 L90 60 Z" fill="url(#bagGrad)"/>
      <path d="M85 60 L85 50 Q85 45 100 45 Q115 45 115 50 L115 60" stroke="white" stroke-width="3" fill="none"/>
      <text x="100" y="170" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateCartLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M50 80 L50 120 L130 120 L140 80 Z" fill="url(#cartGrad)"/>
      <path d="M50 80 L60 50 L130 50 L140 80" stroke="url(#cartGrad)" stroke-width="3" fill="none"/>
      <circle cx="70" cy="145" r="8" fill="url(#cartGrad)"/>
      <circle cx="120" cy="145" r="8" fill="url(#cartGrad)"/>
      <text x="100" y="175" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateBoxLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M60 70 L100 50 L140 70 L140 130 L100 150 L60 130 Z" fill="url(#boxGrad)"/>
      <path d="M60 70 L100 50 L100 150" stroke="white" stroke-width="2" opacity="0.3"/>
      <path d="M140 70 L100 50" stroke="white" stroke-width="2" opacity="0.3"/>
      <text x="100" y="170" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateCloudLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M50 100 Q50 70 80 70 Q85 50 110 50 Q140 50 150 80 Q170 85 170 110 Q170 135 150 135 L50 135 Q30 135 30 110 Q30 85 50 100 Z" fill="url(#cloudGrad)"/>
      <text x="100" y="170" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateGearLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="50" fill="url(#gearGrad)"/>
      <circle cx="100" cy="100" r="30" fill="white"/>
      <rect x="95" y="40" width="10" height="20" rx="2" fill="url(#gearGrad)"/>
      <rect x="95" y="140" width="10" height="20" rx="2" fill="url(#gearGrad)"/>
      <rect x="40" y="95" width="20" height="10" rx="2" fill="url(#gearGrad)"/>
      <rect x="140" y="95" width="20" height="10" rx="2" fill="url(#gearGrad)"/>
      <text x="100" y="170" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateNetworkLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <line x1="100" y1="50" x2="60" y2="100" stroke="url(#networkGrad)" stroke-width="3"/>
      <line x1="100" y1="50" x2="140" y2="100" stroke="url(#networkGrad)" stroke-width="3"/>
      <line x1="60" y1="100" x2="100" y2="150" stroke="url(#networkGrad)" stroke-width="3"/>
      <line x1="140" y1="100" x2="100" y2="150" stroke="url(#networkGrad)" stroke-width="3"/>
      <circle cx="100" cy="50" r="12" fill="url(#networkGrad)"/>
      <circle cx="60" cy="100" r="12" fill="url(#networkGrad)"/>
      <circle cx="140" cy="100" r="12" fill="url(#networkGrad)"/>
      <circle cx="100" cy="150" r="12" fill="url(#networkGrad)"/>
      <text x="100" y="180" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateHandshakeLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="handshakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <ellipse cx="80" cy="100" rx="25" ry="35" fill="url(#handshakeGrad)"/>
      <ellipse cx="120" cy="100" rx="25" ry="35" fill="url(#handshakeGrad)"/>
      <rect x="75" y="95" width="50" height="10" rx="5" fill="url(#handshakeGrad)"/>
      <text x="100" y="160" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateExchangeLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="exchangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M50 80 L100 50 L150 80" stroke="url(#exchangeGrad)" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M50 120 L100 150 L150 120" stroke="url(#exchangeGrad)" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="100" cy="100" r="20" fill="url(#exchangeGrad)"/>
      <text x="100" y="170" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateNetworkCircleLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="networkCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="60" fill="none" stroke="url(#networkCircleGrad)" stroke-width="4"/>
      <circle cx="100" cy="100" r="40" fill="none" stroke="url(#networkCircleGrad)" stroke-width="3" opacity="0.5"/>
      <circle cx="100" cy="100" r="20" fill="url(#networkCircleGrad)"/>
      <circle cx="100" cy="50" r="8" fill="url(#networkCircleGrad)"/>
      <circle cx="100" cy="150" r="8" fill="url(#networkCircleGrad)"/>
      <circle cx="50" cy="100" r="8" fill="url(#networkCircleGrad)"/>
      <circle cx="150" cy="100" r="8" fill="url(#networkCircleGrad)"/>
      <text x="100" y="180" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generatePlayLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="playGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="70" fill="url(#playGrad)"/>
      <path d="M80 70 L80 130 L130 100 Z" fill="white"/>
      <text x="100" y="170" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateFilmLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="filmGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect x="40" y="60" width="120" height="80" fill="url(#filmGrad)"/>
      <rect x="50" y="70" width="30" height="20" fill="white" opacity="0.3"/>
      <rect x="90" y="70" width="30" height="20" fill="white" opacity="0.3"/>
      <rect x="120" y="70" width="30" height="20" fill="white" opacity="0.3"/>
      <text x="100" y="160" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateSoundWaveLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="soundGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect x="50" y="80" width="8" height="40" rx="4" fill="url(#soundGrad)"/>
      <rect x="65" y="70" width="8" height="60" rx="4" fill="url(#soundGrad)"/>
      <rect x="80" y="60" width="8" height="80" rx="4" fill="url(#soundGrad)"/>
      <rect x="95" y="70" width="8" height="60" rx="4" fill="url(#soundGrad)"/>
      <rect x="110" y="80" width="8" height="40" rx="4" fill="url(#soundGrad)"/>
      <text x="100" y="160" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateTruckLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="truckGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect x="50" y="100" width="80" height="40" rx="3" fill="url(#truckGrad)"/>
      <rect x="130" y="110" width="30" height="30" rx="3" fill="url(#truckGrad)"/>
      <circle cx="70" cy="150" r="12" fill="url(#truckGrad)"/>
      <circle cx="130" cy="150" r="12" fill="url(#truckGrad)"/>
      <rect x="60" y="90" width="60" height="20" rx="2" fill="url(#truckGrad)"/>
      <text x="100" y="175" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generatePackageRouteLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="packageRouteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect x="70" y="80" width="60" height="50" rx="3" fill="url(#packageRouteGrad)"/>
      <path d="M40 100 L70 100 M130 100 L160 100" stroke="url(#packageRouteGrad)" stroke-width="4" stroke-linecap="round"/>
      <circle cx="40" cy="100" r="6" fill="url(#packageRouteGrad)"/>
      <circle cx="160" cy="100" r="6" fill="url(#packageRouteGrad)"/>
      <text x="100" y="160" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateGlobeArrowLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="globeArrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="60" fill="none" stroke="url(#globeArrowGrad)" stroke-width="4"/>
      <path d="M40 100 L160 100 M100 40 L100 160" stroke="url(#globeArrowGrad)" stroke-width="2" opacity="0.5"/>
      <path d="M130 80 L150 100 L130 120" stroke="url(#globeArrowGrad)" stroke-width="6" fill="none" stroke-linecap="round"/>
      <text x="100" y="175" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateHouseLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="houseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M100 50 L50 100 L50 140 L150 140 L150 100 Z" fill="url(#houseGrad)"/>
      <rect x="80" y="110" width="40" height="30" fill="white" opacity="0.8"/>
      <text x="100" y="170" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateKeyLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="keyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="120" cy="100" r="25" fill="url(#keyGrad)"/>
      <rect x="80" y="95" width="30" height="10" rx="2" fill="url(#keyGrad)"/>
      <rect x="60" y="90" width="20" height="20" rx="2" fill="url(#keyGrad)"/>
      <text x="100" y="160" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateBuildingGridLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="buildingGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect x="50" y="60" width="100" height="80" fill="url(#buildingGridGrad)"/>
      <line x1="75" y1="60" x2="75" y2="140" stroke="white" stroke-width="2" opacity="0.3"/>
      <line x1="100" y1="60" x2="100" y2="140" stroke="white" stroke-width="2" opacity="0.3"/>
      <line x1="125" y1="60" x2="125" y2="140" stroke="white" stroke-width="2" opacity="0.3"/>
      <line x1="50" y1="90" x2="150" y2="90" stroke="white" stroke-width="2" opacity="0.3"/>
      <line x1="50" y1="120" x2="150" y2="120" stroke="white" stroke-width="2" opacity="0.3"/>
      <text x="100" y="170" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateLeafLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M100 50 Q60 70 60 100 Q60 130 100 150 Q140 130 140 100 Q140 70 100 50" fill="url(#leafGrad)"/>
      <path d="M100 50 L100 150" stroke="white" stroke-width="2" opacity="0.3"/>
      <text x="100" y="175" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateWheatLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wheatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M100 50 L100 140" stroke="url(#wheatGrad)" stroke-width="4" stroke-linecap="round"/>
      <circle cx="100" cy="60" r="8" fill="url(#wheatGrad)"/>
      <circle cx="85" cy="80" r="6" fill="url(#wheatGrad)"/>
      <circle cx="115" cy="80" r="6" fill="url(#wheatGrad)"/>
      <circle cx="100" cy="100" r="6" fill="url(#wheatGrad)"/>
      <text x="100" y="170" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateFarmGridLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="farmGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect x="50" y="70" width="30" height="30" fill="url(#farmGridGrad)"/>
      <rect x="90" y="70" width="30" height="30" fill="url(#farmGridGrad)"/>
      <rect x="130" y="70" width="30" height="30" fill="url(#farmGridGrad)"/>
      <rect x="50" y="110" width="30" height="30" fill="url(#farmGridGrad)"/>
      <rect x="90" y="110" width="30" height="30" fill="url(#farmGridGrad)"/>
      <rect x="130" y="110" width="30" height="30" fill="url(#farmGridGrad)"/>
      <text x="100" y="165" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateRocketLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M100 40 L110 80 L100 100 L90 80 Z" fill="url(#rocketGrad)"/>
      <rect x="90" y="80" width="20" height="60" rx="3" fill="url(#rocketGrad)"/>
      <path d="M85 140 L90 150 L100 145 L110 150 L115 140" fill="url(#rocketGrad)"/>
      <circle cx="100" cy="100" r="8" fill="white"/>
      <text x="100" y="175" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${color1}" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateStarLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M100 30 L115 80 L170 80 L125 110 L140 160 L100 130 L60 160 L75 110 L30 80 L85 80 Z" fill="url(#starGrad)"/>
      <text x="100" y="180" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">${name.substring(0, 3).toUpperCase()}</text>
    </svg>
  `;
}

function generateDefaultLogo(name: string, color1: string, color2: string): string {
  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="70" fill="url(#defaultGrad)"/>
      <text x="100" y="110" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle">${name.substring(0, 2).toUpperCase()}</text>
    </svg>
  `;
}

export function downloadLogoSVG(svgString: string, filename: string): void {
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

