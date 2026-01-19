export interface Template {
  id: string;
  title: string;
  description: string;
  filename: string;
  content: string;
}

export const templates: Template[] = [
  {
    id: 'business-plan',
    title: 'Business Plan Template',
    description: 'A comprehensive business plan template to outline your startup strategy, market analysis, and financial projections.',
    filename: 'business-plan-template.txt',
    content: `BUSINESS PLAN TEMPLATE

1. EXECUTIVE SUMMARY
   - Company Overview
   - Mission Statement
   - Vision Statement
   - Key Objectives

2. COMPANY DESCRIPTION
   - Legal Structure
   - Company History
   - Location and Facilities

3. MARKET ANALYSIS
   - Industry Overview
   - Target Market
   - Market Size and Trends
   - Competitive Analysis

4. ORGANIZATION & MANAGEMENT
   - Organizational Structure
   - Management Team
   - Board of Directors (if applicable)

5. SERVICE OR PRODUCT LINE
   - Product/Service Description
   - Competitive Advantages
   - Research and Development

6. MARKETING & SALES STRATEGY
   - Marketing Plan
   - Sales Strategy
   - Pricing Strategy
   - Distribution Channels

7. FINANCIAL PROJECTIONS
   - Startup Costs
   - Revenue Projections (Year 1-3)
   - Break-even Analysis
   - Funding Requirements

8. APPENDIX
   - Supporting Documents
   - Market Research Data
   - Financial Statements`
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy Template',
    description: 'A basic privacy policy template for your website or application, covering data collection and user rights.',
    filename: 'privacy-policy-template.txt',
    content: `PRIVACY POLICY TEMPLATE

Last Updated: [Date]

1. INTRODUCTION
   This Privacy Policy describes how [Company Name] ("we", "our", or "us") collects, uses, and protects your personal information when you use our services.

2. INFORMATION WE COLLECT
   - Personal Information (name, email, phone number)
   - Usage Data (how you interact with our services)
   - Device Information (IP address, browser type)
   - Cookies and Tracking Technologies

3. HOW WE USE YOUR INFORMATION
   - To provide and maintain our services
   - To notify you about changes to our services
   - To provide customer support
   - To gather analysis or valuable information
   - To monitor the usage of our services

4. DATA SHARING AND DISCLOSURE
   We do not sell your personal information. We may share your information:
   - With service providers who assist us
   - For legal compliance
   - To protect our rights and safety

5. DATA SECURITY
   We implement appropriate security measures to protect your personal information.

6. YOUR RIGHTS
   - Right to access your data
   - Right to correct inaccurate data
   - Right to delete your data
   - Right to data portability

7. COOKIES
   We use cookies to enhance your experience. You can control cookie preferences through your browser settings.

8. CHANGES TO THIS POLICY
   We may update this Privacy Policy from time to time. We will notify you of any changes.

9. CONTACT US
   If you have questions about this Privacy Policy, contact us at: [Contact Email]`
  },
  {
    id: 'terms-of-service',
    title: 'Terms of Service Template',
    description: 'A standard terms of service template outlining user rights, responsibilities, and service usage guidelines.',
    filename: 'terms-of-service-template.txt',
    content: `TERMS OF SERVICE TEMPLATE

Last Updated: [Date]

1. ACCEPTANCE OF TERMS
   By accessing and using [Company Name]'s services, you accept and agree to be bound by these Terms of Service.

2. DESCRIPTION OF SERVICE
   [Company Name] provides [brief description of services]. We reserve the right to modify or discontinue services at any time.

3. USER ACCOUNTS
   - You are responsible for maintaining the confidentiality of your account
   - You must provide accurate and complete information
   - You are responsible for all activities under your account

4. ACCEPTABLE USE
   You agree NOT to:
   - Violate any applicable laws or regulations
   - Infringe on intellectual property rights
   - Transmit harmful or malicious code
   - Attempt to gain unauthorized access
   - Use the service for illegal purposes

5. INTELLECTUAL PROPERTY
   All content, features, and functionality are owned by [Company Name] and protected by copyright, trademark, and other laws.

6. PAYMENT TERMS
   - Subscription fees are billed in advance
   - All fees are non-refundable unless stated otherwise
   - We reserve the right to change pricing with notice

7. LIMITATION OF LIABILITY
   [Company Name] shall not be liable for any indirect, incidental, special, or consequential damages.

8. TERMINATION
   We may terminate or suspend your account immediately for violation of these terms.

9. GOVERNING LAW
   These terms shall be governed by the laws of [Jurisdiction].

10. CONTACT INFORMATION
    For questions about these Terms, contact us at: [Contact Email]`
  },
  {
    id: 'nda',
    title: 'Non-Disclosure Agreement (NDA)',
    description: 'A basic NDA template to protect confidential information when discussing business with partners, investors, or contractors.',
    filename: 'nda-template.txt',
    content: `NON-DISCLOSURE AGREEMENT (NDA) TEMPLATE

This Non-Disclosure Agreement ("Agreement") is entered into on [Date] between:

Disclosing Party: [Company Name]
Receiving Party: [Name/Company]

1. DEFINITION OF CONFIDENTIAL INFORMATION
   Confidential Information includes, but is not limited to:
   - Business plans and strategies
   - Financial information
   - Technical data and know-how
   - Customer lists and information
   - Marketing plans
   - Any information marked as confidential

2. OBLIGATIONS OF RECEIVING PARTY
   The Receiving Party agrees to:
   - Hold all Confidential Information in strict confidence
   - Not disclose Confidential Information to third parties
   - Use Confidential Information solely for [Purpose]
   - Take reasonable precautions to protect Confidential Information

3. EXCEPTIONS
   Confidential Information does not include information that:
   - Was publicly known before disclosure
   - Becomes publicly known through no breach of this Agreement
   - Was rightfully received from a third party
   - Was independently developed without use of Confidential Information

4. RETURN OF MATERIALS
   Upon termination of this Agreement, the Receiving Party shall return or destroy all Confidential Information.

5. TERM
   This Agreement shall remain in effect for [Duration] years from the date of signing.

6. REMEDIES
   The Disclosing Party shall be entitled to seek injunctive relief for any breach of this Agreement.

7. GOVERNING LAW
   This Agreement shall be governed by the laws of [Jurisdiction].

8. SIGNATURES

Disclosing Party:                    Receiving Party:
_________________                    _________________
[Name]                               [Name]
[Title]                              [Title]
Date: ___________                    Date: ___________`
  },
  {
    id: 'pitch-deck',
    title: 'Pitch Deck Template',
    description: 'A structured pitch deck template to present your startup to investors, covering key aspects of your business.',
    filename: 'pitch-deck-template.txt',
    content: `PITCH DECK TEMPLATE

Slide 1: TITLE SLIDE
- Company Name
- Tagline/Value Proposition
- Your Name & Title
- Contact Information

Slide 2: PROBLEM
- What problem are you solving?
- Why is this problem important?
- Market pain points

Slide 3: SOLUTION
- Your product/service
- How it solves the problem
- Key features and benefits

Slide 4: MARKET OPPORTUNITY
- Total Addressable Market (TAM)
- Serviceable Addressable Market (SAM)
- Serviceable Obtainable Market (SOM)
- Market growth trends

Slide 5: BUSINESS MODEL
- How you make money
- Revenue streams
- Pricing strategy
- Unit economics

Slide 6: PRODUCT DEMO
- Screenshots or mockups
- Key features highlighted
- User experience flow

Slide 7: TRACTION
- Current metrics (users, revenue, growth)
- Key milestones achieved
- Customer testimonials
- Partnerships

Slide 8: COMPETITIVE ANALYSIS
- Main competitors
- Your competitive advantages
- Market positioning
- Differentiation

Slide 9: MARKETING & SALES STRATEGY
- Go-to-market plan
- Customer acquisition channels
- Sales process
- Growth strategy

Slide 10: TEAM
- Founders and key team members
- Relevant experience
- Advisory board (if applicable)
- Hiring plan

Slide 11: FINANCIAL PROJECTIONS
- Revenue projections (3-5 years)
- Key assumptions
- Unit economics
- Path to profitability

Slide 12: FUNDING ASK
- Amount you're raising
- Use of funds
- Milestones you'll achieve
- Timeline

Slide 13: VISION
- Long-term vision
- Market opportunity
- Exit strategy (if applicable)

Slide 14: CONTACT
- Your contact information
- Next steps
- Thank you`
  },
  {
    id: 'employee-contract',
    title: 'Employee Contract Template',
    description: 'A basic employment contract template covering job responsibilities, compensation, and terms of employment.',
    filename: 'employee-contract-template.txt',
    content: `EMPLOYMENT CONTRACT TEMPLATE

This Employment Agreement ("Agreement") is entered into on [Date] between:

Employer: [Company Name]
Employee: [Employee Name]

1. POSITION AND DUTIES
   - Job Title: [Title]
   - Department: [Department]
   - Reporting To: [Manager Name]
   - Key Responsibilities: [List main duties]

2. TERM OF EMPLOYMENT
   - Start Date: [Date]
   - Employment Type: [Full-time/Part-time/Contract]
   - Probation Period: [Duration]

3. COMPENSATION
   - Base Salary: [Amount] per [Period]
   - Payment Schedule: [Monthly/Bi-weekly]
   - Benefits: [List benefits]
   - Bonus Structure: [If applicable]

4. WORK SCHEDULE
   - Working Hours: [Hours per week]
   - Work Location: [Office/Remote/Hybrid]
   - Overtime Policy: [If applicable]

5. CONFIDENTIALITY
   Employee agrees to maintain confidentiality of all proprietary information and trade secrets.

6. INTELLECTUAL PROPERTY
   All work products created during employment shall be the property of the Company.

7. NON-COMPETE CLAUSE
   [If applicable, specify restrictions on working with competitors]

8. TERMINATION
   - Notice Period: [Duration]
   - Grounds for immediate termination
   - Severance: [If applicable]

9. GOVERNING LAW
   This Agreement shall be governed by the laws of [Jurisdiction] and local labor laws.

10. SIGNATURES

    Employer:                        Employee:
    _________________                _________________
    [Name]                           [Employee Name]
    [Title]                          Date: ___________
    Date: ___________`
  }
];

