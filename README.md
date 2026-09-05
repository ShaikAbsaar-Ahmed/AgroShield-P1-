# AgroShield — Smart Pest Identifier for Crops & Plants

 ![Status](https://img.shields.io/badge/Status-Updates%20in%20Progress-yellow?style=for-the-badge)

> [!NOTE]
> **Work in Progress:** Major updates and fresh code are coming soon to this repository. )

AI-powered agricultural assistant that instantly identifies pests, diseases, and provides complete care plans for your crops and plants.

## 🌟 Features

- **AI Pest & Insect Identification** - Detect aphids, caterpillars, beetles, and 500+ other pests instantly with AI-powered image recognition
- **Disease Detection** - Identify fungal infections, bacterial blight, viral diseases and leaf spot patterns before they spread
- **Treatment Solutions** - Get organic and chemical treatment options with step-by-step application instructions tailored to your crop
- **Crop Health Score** - A comprehensive health rating with visual indicators so you always know how your plants are doing at a glance
- **Direct Product Links** - Instantly shop for the exact pesticides, fertilizers, or tools you need — at the lowest prices available
- **Smart Water Scheduler** - Set watering reminders customized to your plant type, soil, and local climate
- **Seasonal Care Guide** - Know exactly what to do each season — when to fertilize, prune, harvest, and which months pose the greatest risk
- **No Login Required** - Open the link and start immediately. No account, no sign-up, no subscription

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Anthropic API key for AI analysis (optional - demo mode available)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/agroshield.git
cd agroshield
```

2. Open `agroshield.html` in your web browser:
```bash
# Simply open the HTML file in your browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000/agroshield.html
```

### Configuration (Optional)

To enable real AI analysis, add your Anthropic API key:

1. Open `agroshield.html` in a text editor
2. Find the configuration section near line 1071:
```javascript
const ANTHROPIC_API_KEY = "YOUR_ANTHROPIC_API_KEY_HERE";
```
3. Replace `YOUR_ANTHROPIC_API_KEY_HERE` with your actual API key
4. Save the file and refresh in your browser

### Demo Mode

The application works in demo mode without an API key, showing sample results for testing purposes.

## 📊 How It Works

1. **Take or Upload a Photo** - Use your phone or camera to photograph your crop or plant. A clear, well-lit photo of the leaves, stem, or affected area works best
2. **AI Analyzes the Image** - Our AI model, built on Claude (Anthropic's advanced AI), processes the image. It's trained on thousands of agricultural datasets covering diseases, pests, and plant conditions
3. **Get Your Full Report** - In seconds, receive a detailed health score, pest identification, disease name, severity level, and exactly which insects or pathogens are present
4. **Follow the Solution Plan** - Receive a step-by-step treatment plan with organic and chemical options, application timing, dosage, and precautions
5. **Shop Directly for Products** - Click the product links to go directly to Amazon, Flipkart, or local agri-stores with the exact fertilizer, pesticide, or tool your plant needs

## 🛠️ Tech Stack

- **Claude AI (Anthropic)** - Core AI Model for vision and language processing
- **Anthropic API** - Vision + Language capabilities
- **Vanilla JS (ES6+)** - Frontend Logic
- **CSS3 + Glassmorphism** - UI / Design
- **HTML5 Canvas / SVG** - Animated Field graphics
- **Google Fonts** - Typography
- **No Backend Server** - Pure Client-Side implementation
- **Responsive Design** - Mobile-First CSS

## 🎯 Use Cases

- **Small Farmers** - Quick pest identification without agricultural experts
- **Home Gardeners** - Plant health monitoring and care guidance
- **Agricultural Students** - Learning tool for plant diseases and pests
- **Urban Gardeners** - Balcony and terrace plant care
- **Organic Farming** - Natural treatment recommendations

## 🌾 Water Scheduler

The smart water scheduler generates personalized watering calendars based on:
- Plant/crop type
- Soil type (sandy, clay, loam, silt, peat)
- Climate/season (hot-dry, humid, cool, cold)
- Growth stage (seedling, vegetative, flowering, fruiting)

## 🗓️ Seasonal Guide

Comprehensive seasonal care for:
- **Spring (Feb–May)** - Ideal for planting, fertilizing, watch for aphids and whitefly
- **Summer (May–Aug)** - High water demand, watch for heat stress and spider mites
- **Monsoon (Jun–Oct)** - Peak risk for fungal disease and root rot
- **Winter (Nov–Jan)** - Protect from frost, slow watering cycle

## 👥 Team

### Project Leader
- **Shaik Absaar Ahmed** - Project Lead · Full-Stack Vision · Presenter

### Team Members
- **Mohammed Muzaffer Ali** - Frontend Developer
- **Shaik Anas Ahmed** - AI / ML Integration
- **Sai Jeshwanth** - UI / UX Designer
- **Shamitha** - Research & Data
- **Sharanya** - Documentation & Pitch

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built for Smart India Hackathon** · Smart Pest Identification for Every Farmer & Gardener
