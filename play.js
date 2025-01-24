const countriesData = {
    kosovo: {
        flag: "./assets/images/KOSOVO.png",
        capitalImage: "./assets/images/Pristina.jpg",
        leader: {
            name: "Vjosa Osmani",
            image: "./assets/images/Kosovo President.jpg"
        },
        capital: "Pristina",
        tier1: {
            greetings: "🤝 In Kosovo, greetings depend on familiarity. A handshake is common in formal settings, while friends often greet with a kiss on both cheeks.",
            etiquette: "☕ Hospitality is key in Kosovo! Always accept coffee or tea when offered. When offered Fli (traditional layered pastry), never refuse; it's a sign of deep respect.",
            culturalTips: "🎶 Music and dance are integral to Kosovan culture. Traditional folk songs and the 'Valle' dance are celebrated during events. Kosovo also offers over 300 amazing hiking trails, and it’s known for being budget-friendly for travelers.",
            funFacts: "🌍 The Albanian language, spoken in Kosovo, is over 8000 years old and is one of the oldest continuously spoken languages in Europe."
        }
    },
    usa: {
        flag: "./assets/images/USA.png",
        capitalImage: "./assets/images/DC.jpeg",
        leader: {
            name: "Joe Biden",
            image: "./assets/images/Joe Biden.jpg"
        },
        capital: "Washington, D.C.",
        tier1: {
            greetings: "🤝 A firm handshake is the standard greeting in the USA. In casual settings, a friendly 'Hi' or 'How's it going?' works perfectly.",
            etiquette: "💰 Tipping is important! In restaurants, 15-20% is customary. Being on time is highly valued, whether for a meeting or dinner.",
            culturalTips: "🌟 Americans love personal space—don’t stand too close! Small talk about weather, sports, or daily life is a great way to connect."
        }
    },
    france: {
        flag: "./assets/images/FRANCE.png",
        capitalImage: "./assets/images/Paris.jpg",
        leader: {
            name: "Emmanuel Macron",
            image: "./assets/images/France President.jpg"
        },
        capital: "Paris",
        tier1: {
            greetings: "💋 In France, a light kiss on both cheeks (air kiss) is common among friends. A handshake is used in formal situations.",
            etiquette: "🥖 Always greet people with 'Bonjour' or 'Bonsoir' before starting a conversation. At meals, keep your hands on the table (but not your elbows).",
            culturalTips: "🍷 Dining is a social event; take your time and enjoy the food! The French value politeness and good manners—be sure to use 'please' (s’il vous plaît) and 'thank you' (merci)."
        }
    },
    brazil: {
        flag: "./assets/images/BRAZIL.png",
        capitalImage: "./assets/images/Rasilia.jpg",
        leader: {
            name: "Luiz Inácio Lula da Silva",
            image: "./assets/images/Brazil President.jpg"
        },
        capital: "Brasília",
        tier1: {
            greetings: "🤗 In Brazil, greetings are warm! A hug and a kiss on the cheek (one or two depending on the region) is common among friends. For formal settings, a handshake works great.",
            etiquette: "🍽 Brazilians enjoy long and lively meals; arrive hungry and ready to talk! Punctuality isn't strict in social situations, but it's expected in business.",
            culturalTips: "🎉 Brazilians are known for their friendliness and enthusiasm. Smile often and be expressive to match their warmth. Personal connections matter more than punctuality."
        }
    },
    japan: {
        flag: "./assets/images/JAPAN.png",
        capitalImage: "./assets/images/Tokyo.jpeg",
        leader: {
            name: "Fumio Kishida",
            image: "./assets/images/Japan President.jpg"
        },
        capital: "Tokyo",
        tier1: {
            greetings: "🙏 In Japan, bowing is the traditional greeting. The deeper the bow, the more respect it conveys. In formal settings, bow at a 30-45° angle.",
            etiquette: "👞 Remove your shoes before entering someone's home. Bring a small gift when visiting. Quietness and politeness are highly respected.",
            culturalTips: "🎁 When giving a gift, present it with both hands as a sign of respect. Be mindful of silence—it is valued in communication."
        }
    }
};

// Parse Query Parameters
const urlParams = new URLSearchParams(window.location.search);
const countryKey = urlParams.get("country")?.toLowerCase(); // Case-insensitive matching
const purpose = urlParams.get("purpose");

// Ensure country data exists
const countryData = countriesData[countryKey];

if (countryData) {
    // Populate Header
    document.getElementById("country-name").textContent = countryKey.toUpperCase();
    document.getElementById("purpose").textContent = purpose;

    // Populate Sidebar
    document.getElementById("country-flag").src = countryData.flag;
    document.getElementById("country-capital").src = countryData.capitalImage;
    document.getElementById("capital-name").textContent = countryData.capital;
    document.getElementById("country-leader").src = countryData.leader.image;
    document.getElementById("leader-name").textContent = countryData.leader.name;

    // Populate Tier 1 Content
    // Dynamically populate Tier 1 steps
    const tier1StepsContainer = document.getElementById("tier1-steps");
    const tier1Topics = countryData.tier1;

    // Create each step dynamically
    Object.entries(tier1Topics).forEach(([key, value], index) => {
        const step = document.createElement("div");
        step.classList.add("step");
        step.dataset.index = index;

        step.innerHTML = `
        <div>
            <p class="step-title">${key.charAt(0).toUpperCase() + key.slice(1)}</p>
            <p class="step-description">${value}</p>
        </div>
    `;

        // Add click listener to mark step as completed
        step.addEventListener("click", () => {
            if (!step.classList.contains("completed")) {
                step.classList.add("completed");
                updateTier1Progress();
            }
        });

        tier1StepsContainer.appendChild(step);
    });

    // Update Tier 1 progress bar
    // Update Tier 1 progress bar and enable the "Complete Tier 1" button
    function updateTier1Progress() {
        const totalSteps = document.querySelectorAll(".step").length;
        const completedSteps = document.querySelectorAll(".step.completed").length;

        // Calculate progress as percentage
        const progressHeight = (completedSteps / totalSteps) * 100;
        document.getElementById("tier1-progress-bar").style.height = `${progressHeight}%`;

        // Enable "Complete Tier 1" button if all steps are completed
        if (completedSteps === totalSteps) {
            const completeButton = document.getElementById("complete-tier1");
            completeButton.disabled = false;
        }
    }

    // Add event listener to "Complete Tier 1" button
    document.getElementById("complete-tier1").addEventListener("click", () => {
        document.getElementById("complete-tier1").style.display = "none";
        document.getElementById("move-to-tier2").style.display = "block"; // Show Tier 2 button
    });



    // Progress tracking for Tier 1
    let topicsCompleted = 0;
    const totalTopics = Object.keys(tier1Topics).length;
    const progressBar = document.getElementById("progress-bar");

    // Track progress when checkboxes are clicked
    document.querySelectorAll(".topic-checkbox").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            topicsCompleted = Array.from(
                document.querySelectorAll(".topic-checkbox:checked")
            ).length;

            // Update progress bar width
            progressBar.style.width = `${(topicsCompleted / totalTopics) * 100}%`;

            // Enable Tier 2 button if all topics are completed
            moveToTier2Button.disabled = topicsCompleted !== totalTopics;
        });
    });


    // Enable "Move to Tier 2" Button
    const checkboxes = document.querySelectorAll(".topic-checkbox");
    const moveToTier2Button = document.getElementById("move-to-tier2");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
            moveToTier2Button.disabled = !allChecked;
        });
    });

    moveToTier2Button.addEventListener("click", () => {
        document.getElementById("tier1-content").style.display = "none"; // Hide Tier 1 content
        document.getElementById("quiz-content").style.display = "block"; // Show Quiz content
        moveToTier2Button.style.display = "none"; // Hide the "Move to Tier 2" button
        loadQuizQuestion();
    });
} else {
    alert("Country not found. Redirecting to the main page.");
    window.location.href = "game.html";
}

// Quiz Questions Data
const quizQuestions = {
    kosovo: [
        { question: "What is a common greeting in Kosovo?", options: ["A handshake", "A bow", "A high-five"], correct: 0 },
        { question: "What is the capital of Kosovo?", options: ["Pristina", "Peja", "Gjakova"], correct: 0 },
        { question: "Who is the current president of Kosovo?", options: ["Hashim Thaçi", "Vjosa Osmani", "Albin Kurti"], correct: 1 },
        { question: "What is a key part of hospitality in Kosovo?", options: ["Offering coffee or tea", "Exchanging gifts", "Dancing"], correct: 0 },
        { question: "What traditional dance is popular in Kosovo?", options: ["Sirtaki", "Valle", "Tango"], correct: 1 },
        { question: "What is a cultural value in Kosovo?", options: ["Individualism", "Hospitality", "Minimal interaction"], correct: 1 },
        { question: "What is an important part of celebrations in Kosovo?", options: ["Sports", "Folk music and dance", "Silent gatherings"], correct: 1 }
    ],

    brazil: [
        { question: "What is a common greeting in Brazil?", options: ["A bow", "A firm handshake", "A hug and a kiss on the cheek"], correct: 2 },
        { question: "What is expected during meals in Brazil?", options: ["Silence", "Lively conversations", "Quick eating"], correct: 1 },
        { question: "What is considered important in Brazilian culture?", options: ["Strict punctuality", "Personal connections", "Minimal expression"], correct: 1 },
        { question: "How many kisses might you give when greeting a friend in Brazil?", options: ["One or two", "Three", "None"], correct: 0 },
        { question: "What is Brazil's capital?", options: ["Rio de Janeiro", "Brasília", "São Paulo"], correct: 1 },
        { question: "What is the name of Brazil’s current leader?", options: ["Jair Bolsonaro", "Dilma Rousseff", "Luiz Inácio Lula da Silva"], correct: 2 },
        { question: "What should you do if you’re late for a business meeting in Brazil?", options: ["Apologize sincerely", "Ignore it", "Offer an excuse"], correct: 0 }
    ],
    usa: [
        { question: "What is a typical greeting in the USA?", options: ["A firm handshake", "A bow", "A kiss on the cheek"], correct: 0 },
        { question: "How much should you tip in a restaurant in the USA?", options: ["5%", "15-20%", "Tipping isn’t necessary"], correct: 1 },
        { question: "What is the capital of the USA?", options: ["Washington, D.C.", "New York", "Los Angeles"], correct: 0 },
        { question: "Who is the current president of the USA?", options: ["Donald Trump", "Kamala Harris", "Joe Biden"], correct: 2 },
        { question: "What do Americans value in social settings?", options: ["Silence", "Small talk", "Standing very close"], correct: 1 },
        { question: "What is a common restaurant etiquette in the USA?", options: ["No talking", "Tipping", "Sharing meals"], correct: 1 },
        { question: "How should you greet someone in a professional setting in the USA?", options: ["A firm handshake", "A hug", "A kiss"], correct: 0 }
    ],
    japan: [
        { question: "What is the traditional greeting in Japan?", options: ["A handshake", "Bowing", "A wave"], correct: 1 },
        { question: "What should you remove when entering a Japanese home?", options: ["A hat", "Shoes", "Coat"], correct: 1 },
        { question: "What is the capital of Japan?", options: ["Tokyo", "Kyoto", "Osaka"], correct: 0 },
        { question: "Who is the current leader of Japan?", options: ["Shinzo Abe", "Fumio Kishida", "Yoshihide Suga"], correct: 1 },
        { question: "How should you present a gift in Japan?", options: ["With one hand", "With both hands", "By tossing it"], correct: 1 },
        { question: "What does bowing signify in Japan?", options: ["Respect", "Anger", "Excitement"], correct: 0 },
        { question: "What is a key cultural value in Japan?", options: ["Politeness and silence", "Loud expressions", "Tipping generously"], correct: 0 }
    ],
    france: [
        { question: "How do friends greet each other in France?", options: ["A handshake", "A kiss on both cheeks", "A wave"], correct: 1 },
        { question: "What should you say before starting a conversation?", options: ["Nothing", "Bonjour", "Salut"], correct: 1 },
        { question: "What is the capital of France?", options: ["Paris", "Lyon", "Marseille"], correct: 0 },
        { question: "Who is the current leader of France?", options: ["Nicolas Sarkozy", "Emmanuel Macron", "François Hollande"], correct: 1 },
        { question: "What is a key dining etiquette in France?", options: ["Keep your hands on the table", "Use your elbows", "Finish quickly"], correct: 0 },
        { question: "What does 's’il vous plaît' mean?", options: ["Please", "Thank you", "Hello"], correct: 0 },
        { question: "How should you approach dining in France?", options: ["Quickly", "Quietly", "Slowly and socially"], correct: 2 }
    ]
};


const quizQuestionDiv = document.getElementById("quiz-question");
const nextQuestionButton = document.getElementById("next-question");
const backToHomeButton = document.createElement("button");
const moveToTier1Button = document.createElement("button");
const quizResultDiv = document.getElementById("quiz-result");

const badgeDisplayDiv = document.createElement("div");
badgeDisplayDiv.id = "badge-display";


// Configure Back to Home Button
backToHomeButton.textContent = "Back to Home";
backToHomeButton.style.padding = "10px 20px";
backToHomeButton.style.background = "#4c9eaf";
backToHomeButton.style.color = "white";
backToHomeButton.style.border = "none";
backToHomeButton.style.borderRadius = "5px";
backToHomeButton.style.cursor = "pointer";
backToHomeButton.style.marginTop = "20px";
backToHomeButton.addEventListener("click", () => {
    window.location.href = "game.html";
});

// Configure Move to Tier 1 Button
moveToTier1Button.textContent = "Move to Tier 1";
moveToTier1Button.style.padding = "10px 20px";
moveToTier1Button.style.background = "#4c9eaf";
moveToTier1Button.style.color = "white";
moveToTier1Button.style.border = "none";
moveToTier1Button.style.borderRadius = "5px";
moveToTier1Button.style.cursor = "pointer";
moveToTier1Button.style.marginTop = "20px";
moveToTier1Button.addEventListener("click", () => {
    document.getElementById("tier1-content").style.display = "block";
    document.getElementById("quiz-content").style.display = "none";
});

let currentQuestionIndex = 0;
let score = 0;

// Update Progress Bar
// Update Tier 2 progress bar
function updateTier2Progress() {
    const totalQuestions = quizQuestions[countryKey].length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById("tier2-progress-bar").style.width = `${progress}%`;
}


// Load Quiz Questions
function loadQuizQuestion() {
    const countryQuiz = quizQuestions[countryKey];
    if (currentQuestionIndex < countryQuiz.length) {
        const currentQuestion = countryQuiz[currentQuestionIndex];
        const quizQuestionDiv = document.getElementById("quiz-question");
        quizQuestionDiv.innerHTML = `
            <h4>${currentQuestion.question}</h4>
            <ul>
                ${currentQuestion.options
                .map(
                    (option, index) => `<li data-index="${index}">${option}</li>`
                )
                .join("")}
            </ul>
        `;

        // Add Click Event Listeners to Options
        document.querySelectorAll("#quiz-question li").forEach((option) => {
            option.addEventListener("click", () => handleAnswer(option));
        });

        // Hide Feedback and Next Button Initially
        document.getElementById("feedback").style.display = "none";
        document.getElementById("next-question").style.display = "none";

        // Update Progress Bar
        updateTier2Progress();
    } else {
        // Show Final Score
        document.getElementById("quiz-content").style.display = "none";
        const quizResultDiv = document.getElementById("quiz-result");
        quizResultDiv.style.display = "block";
        quizResultDiv.innerHTML = `
            <h3>Quiz Complete!</h3>
            <p>Your score: ${score} / ${countryQuiz.length}</p>
            <button class="tier-button" onclick="window.location.href='game.html'">Back to Home</button>
            
        `;

        const badgeClass = getBadgeForScore(score);
        displayBadge(badgeClass);
    }
}



// Handle Answer Selection
function handleAnswer(selectedOption) {
    const selectedIndex = parseInt(selectedOption.dataset.index);
    const currentQuestion = quizQuestions[countryKey][currentQuestionIndex];

    // Highlight Correct and Incorrect Answers
    if (selectedIndex === currentQuestion.correct) {
        selectedOption.classList.add("correct");
        document.getElementById("feedback").textContent = "Correct! 🎉";
        score++;
    } else {
        selectedOption.classList.add("incorrect");
        document.getElementById("feedback").textContent = "Incorrect! 😢";
    }

    document.getElementById("feedback").style.display = "block";

    // Disable Further Selection
    document.querySelectorAll("#quiz-question li").forEach((option) => {
        option.style.pointerEvents = "none";
        if (parseInt(option.dataset.index) === currentQuestion.correct) {
            option.classList.add("correct");
        }
    });

    // Show Next Button
    document.getElementById("next-question").style.display = "block";
}

// On "Next Question" Button Click
document.getElementById("next-question").addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuizQuestion();
});

// Dynamically Load and Display Badges from levels-badges.html
function loadBadges(score) {
    // Fetch the levels-badges.html file
    fetch("levels-badges.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch levels-badges.html");
            }
            return response.text();
        })
        .then((html) => {
            // Parse the HTML content
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            // Find the badge container in the fetched HTML
            const badgeContainer = doc.querySelector(".badge-container");
            if (badgeContainer) {
                // Determine which badge to display based on the score
                const badgeClass = getBadgeForScore(score);
                const selectedBadge = badgeContainer.querySelector(`.${badgeClass}`);

                if (selectedBadge) {
                    // Clone the selected badge
                    const badgeClone = selectedBadge.cloneNode(true);

                    // Append the badge to the quiz result div
                    const quizResultDiv = document.getElementById("quiz-result");
                    quizResultDiv.appendChild(badgeClone);
                } else {
                    console.error(`Badge with class ${badgeClass} not found in levels-badges.html.`);
                }
            } else {
                console.error("Badge container not found in levels-badges.html.");
            }
        })
        .catch((error) => {
            console.error("Error loading badges:", error);
        });
}

// Helper Function: Determine Badge Class Based on Score
function getBadgeForScore(score) {
    if (score >= 7) return "badge-worldtraveler";
    if (score >= 5) return "badge-trailblazer";
    if (score >= 3) return "badge-level3";
    return "badge-level1";
}


// Initialize Quiz
loadQuizQuestion();
