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
const countryKey = urlParams.get("country")?.toLowerCase();  // e.g., "usa"
const purpose = urlParams.get("purpose");  // e.g., "business", "leisure"

// Function to fetch questions from the backend dynamically
async function fetchQuestions(country, type) {
    const response = await fetch(`http://localhost/fetch_questions.php?country=${country}&type=${type}`);

    if (!response.ok) {
        throw new Error("Failed to fetch questions from the server.");
    }
    return response.json();
}

// Start the quiz by fetching questions from the backend
if (countryKey && purpose) {
    fetchQuestions(countryKey, purpose)
        .then((questions) => {
            loadQuiz(questions);  // Load quiz using the fetched questions
        })
        .catch((error) => {
            console.error("Error fetching questions:", error);
            alert("Unable to load questions. Please try again.");
        });
} else {
    alert("Country or purpose is missing in the URL.");
    window.location.href = "game.html";  // Redirect if parameters are missing
}

let currentQuestionIndex = 0;
let score = 0;
let questions = [];  // Store fetched questions

// Load quiz questions dynamically
function loadQuiz(fetchedQuestions) {
    questions = fetchedQuestions;  // Store fetched questions globally
    loadQuizQuestion();  // Start quiz with the first question
}

function loadQuizQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        const quizQuestionDiv = document.getElementById("quiz-question");

        quizQuestionDiv.innerHTML = `
            <h4>${currentQuestion.question}</h4>
            <ul>
                ${currentQuestion.options
                    .map((option, index) => `<li data-index="${index}">${option}</li>`)
                    .join("")}
            </ul>
        `;

        document.querySelectorAll("#quiz-question li").forEach((option) => {
            option.addEventListener("click", () => handleAnswer(option));
        });

        document.getElementById("feedback").style.display = "none";
        document.getElementById("next-question").style.display = "none";
    } else {
        showQuizResult();  // No more questions, show final result
    }
}

function handleAnswer(selectedOption) {
    const selectedIndex = parseInt(selectedOption.dataset.index);
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        selectedOption.classList.add("correct");
        score++;
    } else {
        selectedOption.classList.add("incorrect");
    }

    document.querySelectorAll("#quiz-question li").forEach((option) => {
        option.style.pointerEvents = "none";  // Disable further selection
        if (parseInt(option.dataset.index) === currentQuestion.correct) {
            option.classList.add("correct");  // Highlight correct answer
        }
    });

    document.getElementById("next-question").style.display = "block";  // Show "Next" button
}

// Proceed to next question
document.getElementById("next-question").addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuizQuestion();
});

// Show final quiz result
function showQuizResult() {
    const quizResultDiv = document.getElementById("quiz-result");
    quizResultDiv.innerHTML = `
        <h3>Quiz Complete!</h3>
        <p>Your score: ${score} / ${questions.length}</p>
        <button onclick="window.location.href='game.html'">Back to Home</button>
    `;
}
