const questions = [
    {
        question: "Are you ready to play the game?",
        image: "./Matirials/chain me bandha dregon.png",
        options: [
            { text: "Yes", nextQuestion: 1 },
            { text: "No", gameOver: true }
        ]
    },
    {
        question: "You hear a cry for help from the dragon trapped in a cave. What will you do?",
        image: "./Matirials/Crying dragon.png",
        options: [
            { text: "Rush to the cave to save the dragon.", nextQuestion: 2 },
            { text: "Ignore the cry for help and continue your journey.", nextQuestion: 3 },
            { text: "Run away in fear.", gameOver: true }
        ]
    },
    {
        question: "As you approach the cave, you encounter a fierce monster guarding the entrance. What's your plan?",
        image: "./Matirials/standing.png",
        options: [
            { text: "Fight the monster bravely.", nextQuestion: 4 },
            { text: "Try to sneak past the monster.", nextQuestion: 5 },
            { text: "Run away from the cave.", gameOver: true }
        ]
    },
    {
        question: "You successfully defeat the monster. Now, you stand in front of the dragon. What will you do?",
        image: "./Matirials/dregon thinking.png",
        options: [
            { text: "Free the dragon from the chains.", nextQuestion: 6 },
            { text: "Leave the dragon and continue your journey.", nextQuestion: 7 },
            { text: "Attack the dragon.", gameOver: true }
        ]
    },
    {
        question: "The dragon is grateful for your help. It tells you about a hidden treasure. What's your decision?",
        image: "./Matirials//hiddn stasure find.png",
        options: [
            { text: "Follow the dragon to find the treasure.", nextQuestion: 8 },
            { text: "Thank the dragon and go your own way.", nextQuestion: 9 },
            { text: "Betray the dragon and try to take the treasure for yourself.", gameOver: true }
        ]
    },
    {
        question: "You and the dragon successfully find the hidden treasure. What will you do now?",
        image: "./Matirials//hiddn stasure find.png",
        options: [
            { text: "Share the treasure with the dragon.", nextQuestion: 10 },
            { text: "Keep the entire treasure for yourself.", gameOver: true },
            { text: "Leave the dragon and take the treasure alone.", gameOver: true }
        ]
    },
    {
        question: "The dragon is pleased with your generosity. It offers to be your companion. What's your choice?",
        image: "./Matirials/hiddn stasure find.png",
        options: [
            { text: "Accept the dragon as your companion.", nextQuestion: 11 },
            { text: "Politely decline and continue your journey.", nextQuestion: 12 },
            { text: "Attack the dragon.", gameOver: true }
        ]
    },
    {
        question: "You and the dragon become great companions. You embark on many adventures together. The dragon reveals its name is Ember. What will you do next?",
        image: "./Matirials/atteck to dragon.png",
        options: [
            { text: "Continue your adventures with Ember.", nextQuestion: 10 },
            { text: "Say goodbye to Ember and continue alone.", nextQuestion: 11 },
            { text: "Betray Ember and attempt to take control.", gameOver: true }
        ]
    },
    {
        question: "Ember leads you to a magical portal that will transport you to a safer land. What's your decision?",
        image: "./Matirials/hiddn stasure find.png",
        options: [
            { text: "Enter the portal with Ember.", nextQuestion: 12 },
            { text: "Thank Ember and go your own way.", nextQuestion: 13 },
            { text: "Attack Ember and try to take the portal for yourself.", gameOver: true }
        ]
    },
    {
        question: "You and Ember emerge in a beautiful and safe land. The dragon is finally free and grateful for your companionship. Congratulations! You've successfully saved the dragon. The end.",
        image: "./Matirials/dregon thinking.png",
        options: [
            { text: "The End", gameWin: true }
        ]
    },
    {
        question: "You chose a path that led to the dragon's demise. The dragon perishes, and you continue your journey alone. The end.",
        image: "./Matirials/dregon thinking.png",
        options: [
            { text: "The End", gameOver: true }
        ]
    },
    {
        question: "You decided to attack the dragon. Unfortunately, the dragon is much stronger. Your journey ends here.",
        image: "./Matirials/warrirar standing.png",
        options: [
            { text: "The End", gameOver: true }
        ]
    },
];
let currentQuestion = 0;

function initializeGame() {
    hideEndScreens();
    updateUI();
}

function nextQuestion(choice) {
    const option = questions[currentQuestion].options[choice - 1];

    if (option.gameOver) {
        gameOver();
    } else if (option.gameWin) {
        gameWin();
    } else {
        currentQuestion = option.nextQuestion;
        updateUI();
    }
}

function updateUI() {
    const questionElement = document.getElementById('question');
    const questionImageElement = document.getElementById('question-image');
    const optionsContainer = document.getElementById('options-container');

    // Display the current question
    questionElement.textContent = questions[currentQuestion].question;

    // Display the question image
    questionImageElement.src = questions[currentQuestion].image;

    // Display the options
    optionsContainer.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = `${index + 1}. ${option.text}`;
        button.addEventListener('click', () => nextQuestion(index + 1));
        optionsContainer.appendChild(button);
    });
}

function gameOver() {
    const gameContainer = document.getElementById('game-container');
    const gameOverScreen = document.getElementById('game-over-screen');

    // Hide the game container
    gameContainer.style.display = 'none';

    // Show the game over screen
    gameOverScreen.style.display = 'flex';
}

function gameWin() {
    const gameContainer = document.getElementById('game-container');
    const gameWinScreen = document.getElementById('game-win-screen');

    // Hide the game container
    gameContainer.style.display = 'none';

    // Show the game win screen
    gameWinScreen.style.display = 'flex';
}

function restartGame() {
    const gameContainer = document.getElementById('game-container');
    const gameOverScreen = document.getElementById('game-over-screen');
    const gameWinScreen = document.getElementById('game-win-screen');

    // Reset the current question
    currentQuestion = 0;

    // Show the game container
    gameContainer.style.display = 'block';

    // Hide the game over and game win screens
    hideEndScreens();

    // Update the UI for the initial question
    updateUI();
}

function hideEndScreens() {
    const gameOverScreen = document.getElementById('game-over-screen');
    const gameWinScreen = document.getElementById('game-win-screen');

    // Hide the game over and game win screens
    gameOverScreen.style.display = 'none';
    gameWinScreen.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', initializeGame);
