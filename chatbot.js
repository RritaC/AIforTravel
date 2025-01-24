// API Key and Endpoint (for future use)
const API_KEY = "Q4HDIZUQDY7GEU7RULEG4VDYMQKKDYMD";
const API_URL = "https://api.wit.ai/message";

// DOM Elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Predefined Scenarios
const scenarios = {
    japan: "How do I greet someone in Japan?",
    france: "How do I order food in France?",
    brazil: "What are business etiquettes in Brazil?"
};

// Append Message to Chat
function appendMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle Predefined Question
function sendPredefinedQuestion(question) {
    userInput.value = question;
    handleUserMessage();
}

// Handle User Message
async function handleUserMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Append user's message
    appendMessage(userMessage, "user");
    userInput.value = "";

    // Fetch bot response
    const botResponse = await getBotResponse(userMessage);
    appendMessage(botResponse, "bot");
}

// Fetch AI Response from Hardcoded Answers
async function getBotResponse(userMessage) {
    // Hardcoded responses for predefined questions
    const responses = {
        // Japan
        "How do I greet someone in Japan?": "In Japan, bowing is the traditional greeting. The depth of the bow signifies the level of respect.",
        "What should I avoid doing in Japan?": "In Japan, avoid pointing at people or objects, and don’t tip—it can be considered rude.",
        "How do I show respect when visiting a temple in Japan?": "Remove your shoes before entering, bow slightly, and make a small donation before praying.",

        // France
        "How do I order food in France?": "In France, you can say 'Je voudrais [dish]' (I would like [dish]) to order food politely.",
        "How do I greet someone in France?": "A light kiss on both cheeks is common among friends, but a handshake is customary in professional settings.",
        "What should I avoid doing in France?": "Avoid being loud in public or skipping greetings like 'Bonjour' before asking questions—it’s considered impolite.",

        // Brazil
        "What are business etiquettes in Brazil?": "In Brazil, personal connections are important. Handshakes are common, and maintaining eye contact shows respect.",
        "How do I greet someone in Brazil?": "A firm handshake is standard in business, while friends often greet with a hug and kiss on the cheek.",
        "What should I avoid doing in Brazil?": "Avoid discussing politics or comparing Brazil negatively to other countries—it’s a sensitive topic.",

        // USA
        "What is a common greeting in the USA?": "In the USA, a handshake is common, and saying 'Hi' or 'Hello' is friendly and polite.",
        "How do I tip in the USA?": "Tipping is customary in restaurants, typically 15-20% of the bill.",
        "What should I avoid doing in the USA?": "Avoid invading personal space—Americans value personal boundaries.",

        // General Questions
        "How do I show respect when visiting a foreign country?": "Learn a few basic phrases in the local language, observe customs, and dress modestly in religious or traditional places.",
        "What is the best way to learn about a culture?": "Immerse yourself in local activities, try traditional food, and engage with locals respectfully.",
        "How do I handle language barriers?": "Use translation apps, learn a few key phrases, and rely on gestures or visuals when necessary.",

        // Default
        "default": "I'm not sure about that. Please ask something related to cultural learning or travel!"
    };

    // Match user's input with predefined responses
    const response = responses[userMessage] || responses["default"];
    return response;
}

// Event Listeners
sendButton.addEventListener("click", handleUserMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserMessage();
});
