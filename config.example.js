// ============================================================
// API Configuration Example
// ============================================================
// Copy this file to config.js and add your actual API key
// DO NOT commit config.js to version control
// ============================================================

const CONFIG = {
  // Anthropic API Key for Claude AI
  // Get your key from: https://console.anthropic.com/
  ANTHROPIC_API_KEY: "YOUR_ANTHROPIC_API_KEY_HERE",

  // Optional: Custom API endpoint (for proxy servers)
  API_ENDPOINT: "https://api.anthropic.com/v1/messages",

  // Model selection
  MODEL: "claude-sonnet-4-6",

  // Max tokens for AI response
  MAX_TOKENS: 2000,

  // Image processing settings
  MAX_IMAGE_SIZE: 10 * 1024 * 1024, // 10MB
  SUPPORTED_FORMATS: ["image/jpeg", "image/png", "image/webp"]
};

// For browser usage (if not using a build system)
if (typeof window !== 'undefined') {
  window.AGROSHIELD_CONFIG = CONFIG;
}