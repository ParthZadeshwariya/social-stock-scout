# Social Stock Scout Dashboard - MarketGuard AI

## Overview
The *Social Stock Scout Dashboard* is an innovative AI-powered solution developed by Team MarketGuard AI for the SEBI Hackathon 2025, held on September 5, 2025. Designed to combat stock market fraud, it monitors X/Twitter in real-time to detect fake stock tips and manipulative schemes, such as pump-and-dump scams. By leveraging advanced Natural Language Processing (NLP), the dashboard analyzes up to 1,000 posts based on a single user-entered keyword (e.g., “NiftyBuy”), flagging suspicious phrases like “guaranteed returns.” The prototype, accessible at [https://social-stock-scout.lovable.app/](https://social-stock-scout.lovable.app/), features a user-friendly interface, demo mode for pre-processed data, and a scalable architecture to empower SEBI and protect investors. **Note**: The prototype is not yet implemented; all data is for representational purposes only.

![Project Overview](assets/image1.png)

*Image: Overview of the Social Stock Scout Dashboard, showcasing the landing page with Team MarketGuard AI’s mission.*

## Problem Statement
Social media platforms like X/Twitter are breeding grounds for fraudulent stock tips, enabling scams that deceive retail investors and undermine trust in India’s financial ecosystem. Unauthorized tipsters use manipulative phrases like “guaranteed returns” or “insider tips” to orchestrate schemes, leading to significant financial losses. This poses a critical challenge for SEBI’s regulatory oversight, as the rapid spread of misinformation threatens market stability. Real-time, AI-driven tools are urgently needed to monitor and detect fraudulent content, ensuring investor confidence and a fair trading environment.

![Fraudulent Stock Tips](assets/image2.png)

*Image: Example of a fraudulent stock tip on X/Twitter, highlighting manipulative language.*

## Proposed Solution
The *Social Stock Scout Dashboard* is a cutting-edge market surveillance tool designed to identify fake stock tips and fraudulent schemes on X/Twitter. Users input a single keyword (e.g., “RelianceBuy”), and the system analyzes up to 1,000 posts using AI-driven NLP to flag suspicious content. It delivers risk scores, flagged posts, and summary statistics, enabling swift action by regulators and investors. The solution’s innovation lies in its real-time AI analysis, user-friendly interface, and demo mode for instant insights, tailored for SEBI’s regulatory needs with potential for multi-platform expansion.

![Dashboard Workflow](assets/image3.png)

*Image: Diagram illustrating the workflow of keyword input to fraud detection output.*

## Prototype
The *Social Stock Scout Dashboard* prototype, accessible at [https://social-stock-scout.lovable.app/](https://social-stock-scout.lovable.app/), is a fully functional demo built for the SEBI Hackathon 2025. Key features include:
- **Keyword-Based Input**: Users enter a single keyword (e.g., “NiftySell”) without spaces or “#”.
- **Mock Data Analysis**: Simulates analysis of 1,000 X/Twitter posts using a mock API.
- **AI Fraud Detection**: Flags fraudulent phrases with risk scores and detailed outputs.
- **Demo Mode**: Enables instant exploration of pre-processed fraud detection results.
- **User Experience**: Clean, intuitive UI designed for SEBI regulators, investors, and analysts.
The prototype is limited to X/Twitter and a 1,000-post cap due to hackathon constraints but is built on a scalable architecture. **Note**: The prototype is not yet implemented; data is for demonstration purposes.


## Key Features
- **Real-Time Analysis**: Monitors up to 1,000 X/Twitter posts for fake stock tips.
- **AI-Driven Fraud Detection**: Flags suspicious phrases (e.g., “guaranteed returns”) using NLP.
- **Simple UI**: Single keyword input (e.g., “NiftyBuy”) for ease of use.
- **Demo Mode**: Allows exploration of pre-processed data for quick insights.
- **Scalable Design**: Supports future multi-platform integration and visualizations.

![Feature Showcase](assets/image4.png)

*Image: Visual representation of key features, highlighting AI detection and demo mode.*

## Intended Users
- **SEBI Regulators**: For real-time market oversight and fraud prevention.
- **Retail Investors**: To avoid scams and make informed investment decisions.
- **Financial Analysts**: For actionable insights into market trends and manipulations.

## Functionality
The *Social Stock Scout Dashboard* enables users to input a single keyword through a streamlined web interface. The system scrapes X/Twitter posts (using a mock API for the prototype) and employs AI to analyze content, assigning risk scores to identify fraudulent posts. Results, including flagged posts and summary statistics, are displayed clearly, empowering users with actionable insights. The dashboard is accessible at [https://social-stock-scout.lovable.app/](https://social-stock-scout.lovable.app/).

## Key Innovation / Differentiator
The *Social Stock Scout Dashboard* stands out due to its AI-powered, real-time fraud detection system, leveraging advanced NLP to identify manipulative stock tips on X/Twitter. Its user-friendly interface simplifies market surveillance with a single-keyword input, analyzing up to 1,000 posts efficiently. The unique demo mode enables instant access to pre-processed data, ideal for hackathon evaluations. Built for SEBI’s regulatory needs, it offers scalability for multi-platform expansion and future xAI API integration (https://x.ai/api), setting it apart as a tailored, impactful tool for enhancing market integrity and protecting investors.

## Technology Stack
The *Social Stock Scout Dashboard* is built on a robust, scalable technology stack optimized for market surveillance. It leverages AI and Machine Learning through Natural Language Processing (NLP) via the xAI API (https://x.ai/api) for real-time fraud detection, analyzing social media posts for suspicious patterns like “guaranteed returns.” TypeScript and JavaScript drive dynamic functionality, while Next.js powers a responsive, scalable frontend. A mock API supports the hackathon prototype, with plans for xAI API integration for advanced analysis. The dashboard is deployed on Vercel for seamless, cloud-based access, utilizing Tailwind CSS for modern styling and potentially Recharts for sentiment visualizations. Cloud-based infrastructure minimizes local hardware requirements, ensuring accessibility and efficiency.

## Feasibility and Risk Mitigation
### Challenges and Risks
- **Limited API Quotas**: Restrict real-time data access during the hackathon.
- **Hardware Constraints**: Common in prototype development environments.
- **Single-Platform Focus**: Currently limited to X/Twitter, reducing coverage.
- **Data Accuracy**: Social media content diversity may impact precision.

### Mitigation Strategies
- **Mock API**: Simulates real-time scraping to overcome API quota limitations.
- **Demo Mode**: Provides pre-processed data for consistent testing and evaluation.
- **Scalable Architecture**: Designed for future multi-platform support.
- **Future xAI Integration**: Plans to enhance accuracy with xAI API (https://x.ai/api).

The prototype is feasible, aligns with SEBI’s regulatory goals, and is built for scalability.

![Risk Mitigation](/assets/image6.png)

*Image: Table or graphic summarizing challenges and mitigation strategies.*

## Impact
The *Social Stock Scout Dashboard* delivers transformative benefits:
- **Social**: Protects retail investors from scams, fostering trust in the market.
- **Economic**: Reduces financial losses caused by fraudulent schemes.
- **Regulatory**: Equips SEBI with real-time surveillance tools for robust oversight.
- **Market Integrity**: Counters manipulation, ensuring a fair trading environment.

Its scalable design supports broader fraud prevention, contributing to a safer, more transparent stock market ecosystem in India.


## Future Roadmap
- **Enhanced AI**: Integrate xAI API for deeper, more accurate fraud detection.
- **Advanced Visualizations**: Implement sentiment pie charts and analytics using Recharts.
- **Platform Expansion**: Extend monitoring to Instagram, Reddit, and other platforms.
- **Real-Time Alerts**: Develop instant notifications for SEBI regulators.
- **Interactive Dashboards**: Create customizable, data-rich dashboards for advanced analytics.

Our vision is to make *Social Stock Scout* SEBI’s cornerstone tool for comprehensive market surveillance.
![Future Roadmap](/assets/image5.png)

## Setup Instructions
> **Note**: The prototype is not yet implemented; these instructions assume a Next.js-based setup for local development.

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd social-stock-scout
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run Locally**:
   ```bash
   npm run dev
   ```
   Access at `http://localhost:3000`.
4. **Deploy to Vercel**:
   - Push to a GitHub repository.
   - Import into Vercel and deploy.
5. **Future Enhancements**:
   - Obtain xAI API access (https://x.ai/api) for real-time fraud detection.
   - Install Recharts (`npm i recharts`) for visualizations.


## Contributing
We welcome contributions to enhance the *Social Stock Scout Dashboard*. Please submit issues or pull requests to the repository. For feedback or collaboration, contact Team MarketGuard AI via the SEBI Hackathon platform.


## License
This project is developed for the SEBI Hackathon 2025 and is not currently licensed for public use. All rights reserved by Team MarketGuard AI.


## Acknowledgments
- SEBI for hosting the Hackathon 2025.
- xAI for providing API access details (https://x.ai/api).
- Vercel for seamless deployment support.


## Contact
For inquiries or feedback, reach out to Team MarketGuard AI through the SEBI Hackathon platform or the repository’s issue tracker.


---

**Note**: The images (image1.png to image25.png) referenced in the original PowerPoint are not included in this README due to lack of access. The above placeholders (image1.png to image17.png) are suggested based on context. To include actual images:
1. Capture screenshots of the dashboard from [https://social-stock-scout.lovable.app/](https://social-stock-scout.lovable.app/) or by running the Next.js app (from my first response).
2. Create mock visuals (e.g., UI screenshots, charts, diagrams) using tools like Figma or PowerPoint.
3. Place images in a `/docs/images` folder in the repository.
4. Update the README with actual image filenames if different from the placeholders.