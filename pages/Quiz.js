const questions = [
    { question: "Quel agent possède 'Blade Storm' ?", choices: ["Phoenix", "Jett", "Raze", "Reyna"], answer: 1 },
    { question: "Quelle map possède des téléporteurs ?", choices: ["Split", "Bind", "Ascent", "Haven"], answer: 1 },
    { question: "Quel agent utilise 'Toxic Screen' ?", choices: ["Sova", "Brimstone", "Viper", "Sage"], answer: 2 },
    { question: "Quelle est la capacité ultime de Phoenix ?", choices: ["Run It Back", "Showstopper", "Empress", "Resurrection"], answer: 0 },
    { question: "Combien de bomb sites y a-t-il sur Haven ?", choices: ["2", "3", "4", "1"], answer: 1 },
    { question: "Quel agent a la capacité 'Recon Bolt' ?", choices: ["Killjoy", "Viper", "Sova", "Cypher"], answer: 2 },
    { question: "Quelle arme coûte 2900 crédits ?", choices: ["Phantom", "Operator", "Vandal", "Judge"], answer: 2 },
    { question: "Qui est l'agent avec la capacité 'Lockdown' ?", choices: ["Breach", "Killjoy", "Reyna", "Brimstone"], answer: 1 },
    { question: "Quel agent possède 'Healing Orb' ?", choices: ["Sage", "Reyna", "Skye", "Jett"], answer: 0 },
    { question: "Quelle map a un site B en sous-sol ?", choices: ["Icebox", "Fracture", "Split", "Lotus"], answer: 0 },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const choiceButtons = document.querySelectorAll(".choice");
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    choiceButtons.forEach((button, index) => {
      button.textContent = currentQuestion.choices[index];
    });
  }
  
  function checkAnswer(choice) {
    // Vérifie si la réponse est correcte
    if (choice === questions[currentQuestionIndex].answer) {
      score++;
    }
  
    // Passe à la question suivante
    currentQuestionIndex++;
  
    // Si les questions sont terminées, affiche le score
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = `Votre score est : ${score} / ${questions.length}`;
  }
  
  // Charge la première question
  loadQuestion();
  