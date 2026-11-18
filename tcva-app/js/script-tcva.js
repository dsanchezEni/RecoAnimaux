// ============================================
// SCRIPT PRINCIPAL POUR L'APPLICATION TCVA
// ============================================

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentPage = 'accueil';
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let quizStartTime = 0;
let quizTimer = null;
let timeLeft = 0;
let userAnswers = [];
let quizHistory = [];
let questionsViewed = new Set();

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadHistory();
    loadProgress();
    initDarkMode();
    initSelectOptions();
    displayTotalQuestions();
    updateProgressDisplay();
    displayRecommendations();
    displayHistory();
    displayKeyPoints();
    
    // Gestion de la navigation via hash
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
}

function handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showPage(hash);
    }
}

// ============================================
// DARK MODE
// ============================================

function toggleDarkMode() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    
    // Sauvegarder la préférence
    localStorage.setItem('tcvaDarkMode', isDark ? 'true' : 'false');
    
    // Mettre à jour l'icône du bouton
    const toggleBtn = document.querySelector('.dark-mode-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = isDark ? '☀️' : '🌙';
        toggleBtn.title = isDark ? 'Mode clair' : 'Mode sombre';
    }
    
    // Appliquer aussi au module animaux si chargé
    const animalsPage = document.getElementById('animaux.html') || 
                         (window.location.pathname.includes('animaux.html') ? document.body : null);
    if (animalsPage) {
        animalsPage.classList.toggle('dark-mode', isDark);
    }
}

// Charger le dark mode au démarrage
function initDarkMode() {
    const savedMode = localStorage.getItem('tcvaDarkMode');
    const isDark = savedMode === 'true';
    
    if (isDark) {
        document.body.classList.add('dark-mode');
        const toggleBtn = document.querySelector('.dark-mode-toggle');
        if (toggleBtn) {
            toggleBtn.textContent = '☀️';
            toggleBtn.title = 'Mode clair';
        }
    }
}

// ============================================
// INITIALISATION DES OPTIONS DE SÉLECTION
// ============================================

function initSelectOptions() {
    // Initialiser les blocs de compétences
    const blocSelect = document.getElementById('bloc-select');
    const blocFilterSelect = document.getElementById('question-bloc-filter');
    
    if (blocSelect) {
        BLOCS.forEach(bloc => {
            const option = document.createElement('option');
            option.value = bloc.id;
            option.textContent = `${bloc.id} - ${bloc.name}`;
            blocSelect.appendChild(option);
        });
    }
    
    if (blocFilterSelect) {
        BLOCS.forEach(bloc => {
            const option = document.createElement('option');
            option.value = bloc.id;
            option.textContent = `${bloc.id} - ${bloc.name}`;
            blocFilterSelect.appendChild(option);
        });
    }
    
    // Initialiser le filtre animal
    const animalFilterSelect = document.getElementById('animal-filter');
    const animalFilterList = document.getElementById('question-animal-filter');
    
    if (animalFilterSelect) {
        ANIMAL_CATEGORIES.filter(animal => animal.id !== "all").forEach(animal => {
            const option = document.createElement('option');
            option.value = animal.id;
            option.textContent = `${animal.icon} ${animal.name}`;
            animalFilterSelect.appendChild(option);
        });
    }
    
    if (animalFilterList) {
        ANIMAL_CATEGORIES.filter(animal => animal.id !== "all").forEach(animal => {
            const option = document.createElement('option');
            option.value = animal.id;
            option.textContent = `${animal.icon} ${animal.name}`;
            animalFilterList.appendChild(option);
        });
    }
}

// ============================================
// GESTION DES PAGES
// ============================================

function showPage(pageName) {
    // Cacher toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Afficher la page demandée
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // Actions spécifiques selon la page
        if (pageName === 'questions-list') {
            displayQuestionsList();
        } else if (pageName === 'accueil') {
            updateProgressDisplay();
            displayRecommendations();
            displayHistory();
        }
    }
    
    // Mettre à jour les liens de navigation
    updateNavLinks(pageName);
    
    // Faire défiler vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavLinks(activePage) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === activePage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// GESTION DU QUIZ
// ============================================

function startQuiz() {
    const blocSelect = document.getElementById('bloc-select');
    const niveauSelect = document.getElementById('niveau-select');
    const animalFilter = document.getElementById('animal-filter');
    const questionCount = parseInt(document.getElementById('question-count').value);
    const timeLimit = parseInt(document.getElementById('time-limit').value);
    
    const bloc = blocSelect ? blocSelect.value : 'all';
    const niveau = niveauSelect ? niveauSelect.value : 'all';
    const animal = animalFilter ? animalFilter.value : 'all';
    
    // Filtrer les questions
    currentQuizQuestions = getQuestionsByFilters(bloc, niveau, animal);
    
    // Limiter le nombre de questions
    if (currentQuizQuestions.length > questionCount) {
        currentQuizQuestions = shuffleArray(currentQuizQuestions).slice(0, questionCount);
    }
    
    // Si pas assez de questions, prévenir
    if (currentQuizQuestions.length === 0) {
        alert('Aucune question ne correspond aux critères sélectionnés. Veuillez élargir vos filtres.');
        return;
    }
    
    // Initialiser le quiz
    currentQuestionIndex = 0;
    quizScore = 0;
    userAnswers = [];
    quizStartTime = Date.now();
    
    // Afficher le quiz
    showQuiz();
}

function showQuiz() {
    showPage('quiz');
    displayQuestion(currentQuestionIndex);
    startTimer();
}

function displayQuestion(index) {
    const question = currentQuizQuestions[index];
    
    // Mettre à jour l'interface
    document.getElementById('current-question').textContent = index + 1;
    document.getElementById('total-questions').textContent = currentQuizQuestions.length;
    document.getElementById('question-text').textContent = question.question;
    
    // Mettre à jour les métadonnées
    const metaElement = document.getElementById('question-meta');
    if (metaElement) {
        metaElement.innerHTML = `<strong>Bloc:</strong> ${question.bloc} - ${getBlocName(question.bloc)} | <strong>Niveau:</strong> ${question.niveau}`;
    }
    
    // Mettre à jour le badge animal
    const animalBadge = document.getElementById('question-animal-badge');
    if (animalBadge && question.animal !== 'all') {
        const animal = getAnimalCategory(question.animal);
        animalBadge.textContent = `${animal.icon} ${animal.name}`;
        animalBadge.style.display = 'inline-block';
    } else if (animalBadge) {
        animalBadge.style.display = 'none';
    }
    
    // Réinitialiser le timer
    timeLeft = parseInt(document.getElementById('time-limit').value);
    document.getElementById('timer').textContent = timeLeft;
    
    // Mettre à jour la barre de progression
    const progressPercent = ((index) / currentQuizQuestions.length) * 100;
    const progressBar = document.getElementById('quiz-progress-bar');
    progressBar.style.width = `${progressPercent}%`;
    
    // Appliquer la couleur selon le pourcentage
    progressBar.className = 'progress-bar-fill';
    if (progressPercent < 33) {
        progressBar.classList.add('progress-low');
    } else if (progressPercent < 66) {
        progressBar.classList.add('progress-medium');
    } else {
        progressBar.classList.add('progress-high');
    }
    
    // Afficher les réponses
    displayAnswers(question);
    
    // Cacher les feedbacks
    document.getElementById('explanation').classList.remove('show');
    document.getElementById('next-btn').classList.add('hidden');
}

function displayAnswers(question) {
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const answerElement = document.createElement('div');
        answerElement.className = 'answer-option';
        answerElement.textContent = option;
        answerElement.onclick = () => selectAnswer(index, question);
        answersContainer.appendChild(answerElement);
    });
}

function selectAnswer(selectedIndex, question) {
    // Désactiver les clics sur les réponses
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => {
        option.classList.add('disabled');
    });
    
    // Marquer la réponse sélectionnée
    answerOptions[selectedIndex].classList.add('selected');
    
    // Vérifier si c'est la bonne réponse
    const isCorrect = selectedIndex === question.correct;
    
    // Mettre à jour le score
    if (isCorrect) {
        quizScore++;
        answerOptions[selectedIndex].classList.add('correct');
        answerOptions[selectedIndex].classList.remove('selected');
    } else {
        answerOptions[selectedIndex].classList.add('incorrect');
        // Marquer la bonne réponse
        answerOptions[question.correct].classList.add('correct');
    }
    
    // Marquer la question comme vue
    questionsViewed.add(question.id);
    saveProgress();
    
    // Enregistrer la réponse utilisateur
    userAnswers.push({
        questionId: question.id,
        question: question.question,
        userAnswer: question.options[selectedIndex],
        correctAnswer: question.options[question.correct],
        isCorrect: isCorrect
    });
    
    // Arrêter le timer
    stopTimer();
    
    // Afficher l'explication
    const explanationElement = document.getElementById('explanation');
    explanationElement.textContent = question.explanation;
    explanationElement.classList.add('show');
    
    // Afficher le bouton suivant
    document.getElementById('next-btn').classList.remove('hidden');
    
    // Sauvegarder l'historique de la question
    saveQuestionHistory(question.id);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuizQuestions.length) {
        displayQuestion(currentQuestionIndex);
        startTimer();
    } else {
        showResults();
    }
}

function startTimer() {
    stopTimer(); // Arrêter un éventuel timer existant
    
    const timeLimit = parseInt(document.getElementById('time-limit').value);
    timeLeft = timeLimit;
    
    quizTimer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            // Temps écoulé, passer à la question suivante automatiquement
            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

function showResults() {
    stopTimer();
    showPage('results');
    
    const quizEndTime = Date.now();
    const totalTime = Math.floor((quizEndTime - quizStartTime) / 1000);
    const scorePercent = Math.round((quizScore / currentQuizQuestions.length) * 100);
    
    // Mettre à jour l'interface
    document.getElementById('score-text').textContent = `${scorePercent}%`;
    document.getElementById('score-circle').style.setProperty('--score-percent', scorePercent);
    document.getElementById('correct-answers').textContent = quizScore;
    document.getElementById('incorrect-answers').textContent = currentQuizQuestions.length - quizScore;
    document.getElementById('total-time').textContent = `${totalTime}s`;
    
    // Afficher la revue des mauvaises réponses
    displayWrongAnswersReview();
    
    // Sauvegarder l'historique du quiz
    saveQuizHistory(quizScore, currentQuizQuestions.length, scorePercent, totalTime);
    
    // Mettre à jour la progression
    updateProgressDisplay();
    displayRecommendations();
    displayHistory();
}

function displayWrongAnswersReview() {
    const reviewContainer = document.getElementById('wrong-answers-review');
    reviewContainer.innerHTML = '';
    
    const wrongAnswers = userAnswers.filter(a => !a.isCorrect);
    
    if (wrongAnswers.length === 0) {
        reviewContainer.innerHTML = '<h3>Félicitations ! Vous n\'avez fait aucune erreur.</h3>';
        return;
    }
    
    const title = document.createElement('h3');
    title.textContent = `Révision des erreurs (${wrongAnswers.length})`;
    reviewContainer.appendChild(title);
    
    wrongAnswers.forEach(answer => {
        const item = document.createElement('div');
        item.className = 'wrong-answer-item';
        
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.textContent = answer.question;
        item.appendChild(questionElement);
        
        const answerElement = document.createElement('div');
        answerElement.className = 'user-answer';
        answerElement.textContent = `Votre réponse: ${answer.userAnswer}`;
        item.appendChild(answerElement);
        
        const correctElement = document.createElement('div');
        correctElement.className = 'correct-answer';
        correctElement.textContent = `Bonne réponse: ${answer.correctAnswer}`;
        item.appendChild(correctElement);
        
        reviewContainer.appendChild(item);
    });
}

function resetQuizSetup() {
    document.getElementById('bloc-select').value = 'all';
    document.getElementById('niveau-select').value = 'all';
    document.getElementById('animal-filter').value = 'all';
    document.getElementById('question-count').value = '10';
    document.getElementById('time-limit').value = '30';
}

// ============================================
// GESTION DE LA BASE DE QUESTIONS
// ============================================

function displayQuestionsList() {
    const searchInput = document.getElementById('question-search-input');
    const blocFilter = document.getElementById('question-bloc-filter');
    const levelFilter = document.getElementById('question-level-filter');
    const animalFilter = document.getElementById('question-animal-filter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const bloc = blocFilter ? blocFilter.value : 'all';
    const niveau = levelFilter ? levelFilter.value : 'all';
    const animal = animalFilter ? animalFilter.value : 'all';
    
    const filteredQuestions = getQuestionsByFilters(bloc, niveau, animal).filter(q => {
        const questionText = q.question.toLowerCase();
        const explanationText = q.explanation.toLowerCase();
        return questionText.includes(searchTerm) || explanationText.includes(searchTerm);
    });
    
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    
    if (filteredQuestions.length === 0) {
        questionsContainer.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Aucune question ne correspond aux critères sélectionnés.</p>';
        return;
    }
    
    filteredQuestions.forEach(question => {
        const questionElement = createQuestionElement(question);
        questionsContainer.appendChild(questionElement);
        
        // Marquer comme vue
        questionsViewed.add(question.id);
        saveProgress();
    });
    
    // Mettre à jour le nombre total de questions
    displayTotalQuestions();
}

function createQuestionElement(question) {
    const questionElement = document.createElement('div');
    questionElement.className = 'question-item';
    
    const header = document.createElement('div');
    header.className = 'question-header';
    
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.question;
    header.appendChild(questionText);
    
    const badges = document.createElement('div');
    badges.className = 'question-badges';
    
    const blocBadge = document.createElement('span');
    blocBadge.className = 'badge badge-bloc';
    blocBadge.textContent = question.bloc;
    badges.appendChild(blocBadge);
    
    const levelBadge = document.createElement('span');
    levelBadge.className = 'badge badge-level';
    levelBadge.textContent = question.niveau;
    badges.appendChild(levelBadge);
    
    if (question.animal !== 'all') {
        const animal = getAnimalCategory(question.animal);
        const animalBadge = document.createElement('span');
        animalBadge.className = 'badge badge-animal';
        animalBadge.textContent = `${animal.icon} ${animal.name}`;
        badges.appendChild(animalBadge);
    }
    
    header.appendChild(badges);
    questionElement.appendChild(header);
    
    const answerDiv = document.createElement('div');
    answerDiv.className = 'question-answer';
    answerDiv.style.display = 'none';
    
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = 'Réponse :';
    answerDiv.appendChild(label);
    
    const text = document.createElement('div');
    text.className = 'text';
    text.innerHTML = `<strong>Bonne réponse:</strong> ${question.options[question.correct]}<br><br><strong>Explication:</strong> ${question.explanation}`;
    answerDiv.appendChild(text);
    
    questionElement.appendChild(answerDiv);
    
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-answer';
    toggleButton.textContent = 'Afficher la réponse';
    toggleButton.onclick = () => {
        if (answerDiv.style.display === 'none') {
            answerDiv.style.display = 'block';
            toggleButton.textContent = 'Cacher la réponse';
        } else {
            answerDiv.style.display = 'none';
            toggleButton.textContent = 'Afficher la réponse';
        }
    };
    
    questionElement.appendChild(toggleButton);
    
    return questionElement;
}

function filterQuestionsList() {
    displayQuestionsList();
}

// ============================================
// GESTION DES STATISTIQUES ET PROGRESSION
// ============================================

function displayTotalQuestions() {
    const totalQuestions = QUESTIONS_TCVA.length;
    const elements = document.querySelectorAll('#home-total-questions, #total-questions-info');
    elements.forEach(el => {
        if (el) el.textContent = totalQuestions;
    });
}

function updateProgressDisplay() {
    // Questions vues
    const totalQuestions = QUESTIONS_TCVA.length;
    const seenCount = questionsViewed.size;
    const seenPercent = totalQuestions > 0 ? Math.round((seenCount / totalQuestions) * 100) : 0;
    
    document.getElementById('progress-seen').textContent = `${seenCount}/${totalQuestions}`;
    document.getElementById('progress-seen-meta').textContent = `${seenPercent}% du programme`;
    
    // Thèmes maîtrisés (seuil de 70%)
    const masteryThreshold = 70;
    let masteredThemes = 0;
    
    BLOCS.forEach(bloc => {
        const blocQuestions = getQuestionsByBloc(bloc.id);
        if (blocQuestions.length === 0) return;
        
        const blocSeen = blocQuestions.filter(q => questionsViewed.has(q.id)).length;
        const blocPercent = (blocSeen / blocQuestions.length) * 100;
        
        if (blocPercent >= masteryThreshold) {
            masteredThemes++;
        }
    });
    
    document.getElementById('progress-themes').textContent = masteredThemes;
    
    // Réussite des 3 derniers quiz
    const recentQuizzes = quizHistory.slice(-3);
    if (recentQuizzes.length > 0) {
        const avgScore = recentQuizzes.reduce((sum, q) => sum + q.scorePercent, 0) / recentQuizzes.length;
        document.getElementById('progress-recent').textContent = `${Math.round(avgScore)}%`;
        document.getElementById('progress-recent-meta').textContent = `${recentQuizzes.length} quiz enregistrés`;
    } else {
        document.getElementById('progress-recent').textContent = '0%';
        document.getElementById('progress-recent-meta').textContent = 'Aucun quiz enregistré';
    }
}

function displayRecommendations() {
    const container = document.getElementById('recommendations-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Trouver les blocs les moins vus
    const blocStats = BLOCS.map(bloc => {
        const blocQuestions = getQuestionsByBloc(bloc.id);
        const blocSeen = blocQuestions.filter(q => questionsViewed.has(q.id)).length;
        const blocPercent = blocQuestions.length > 0 ? (blocSeen / blocQuestions.length) * 100 : 0;
        return { bloc, percent: blocPercent };
    }).sort((a, b) => a.percent - b.percent);
    
    // Trouver les blocs avec faible score dans l'historique
    const quizByBloc = {};
    quizHistory.forEach(quiz => {
        quiz.wrongAnswers.forEach(answer => {
            const question = QUESTIONS_TCVA.find(q => q.id === answer.questionId);
            if (question) {
                const blocId = question.bloc;
                if (!quizByBloc[blocId]) {
                    quizByBloc[blocId] = { total: 0, wrong: 0 };
                }
                quizByBloc[blocId].total++;
                quizByBloc[blocId].wrong++;
            }
        });
    });
    
    // Calculer le taux d'erreur par bloc
    const blocErrorRates = Object.entries(quizByBloc).map(([blocId, stats]) => ({
        blocId,
        errorRate: stats.total > 0 ? (stats.wrong / stats.total) * 100 : 0
    })).sort((a, b) => b.errorRate - a.errorRate);
    
    // Recommander les blocs les moins vus ou avec le plus d'erreurs
    const recommendedBlocs = [...blocStats.filter(b => b.percent < 50), 
                               ...blocErrorRates.filter(b => b.errorRate > 30)];
    
    if (recommendedBlocs.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">Aucune recommandation spécifique. Continuez à réviser !</p>';
        return;
    }
    
    // Dédoublonner et limiter
    const uniqueRecommended = [];
    const seenBlocs = new Set();
    recommendedBlocs.forEach(r => {
        const blocId = r.bloc ? r.bloc.id : r.blocId;
        if (!seenBlocs.has(blocId) && blocId) {
            seenBlocs.add(blocId);
            uniqueRecommended.push(getBlocById(blocId));
        }
    });
    
    uniqueRecommended.slice(0, 3).forEach(bloc => {
        if (!bloc) return;
        
        const item = document.createElement('div');
        item.className = 'recommendation-item';
        
        const title = document.createElement('h4');
        title.textContent = bloc.id;
        item.appendChild(title);
        
        const description = document.createElement('p');
        description.textContent = bloc.name;
        item.appendChild(description);
        
        const action = document.createElement('button');
        action.className = 'btn btn-sm';
        action.textContent = 'Réviser ce bloc';
        action.onclick = () => {
            document.getElementById('bloc-select').value = bloc.id;
            showPage('quiz-setup');
        };
        item.appendChild(action);
        
        container.appendChild(item);
    });
}

// ============================================
// GESTION DE L'HISTORIQUE
// ============================================

function displayHistory() {
    const container = document.getElementById('history-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (quizHistory.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">Aucun quiz enregistré pour le moment.</p>';
        return;
    }
    
    // Afficher les 5 derniers quiz
    quizHistory.slice(-5).reverse().forEach((quiz, index) => {
        const item = document.createElement('div');
        item.className = 'history-item';
        
        const date = new Date(quiz.timestamp);
        const dateStr = date.toLocaleDateString('fr-FR');
        const timeStr = date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        
        const info = document.createElement('div');
        info.innerHTML = `<strong>${quiz.score}/${quiz.total}</strong> (${quiz.scorePercent}%) - ${quiz.totalTime}s`;
        info.className = 'score';
        item.appendChild(info);
        
        const dateElement = document.createElement('div');
        dateElement.textContent = `${dateStr} à ${timeStr}`;
        dateElement.className = 'date';
        item.appendChild(dateElement);
        
        container.appendChild(item);
    });
}

function saveQuizHistory(score, total, scorePercent, totalTime) {
    const quizData = {
        timestamp: Date.now(),
        score: score,
        total: total,
        scorePercent: scorePercent,
        totalTime: totalTime,
        wrongAnswers: userAnswers.filter(a => !a.isCorrect)
    };
    
    quizHistory.push(quizData);
    
    // Garder seulement les 20 derniers quiz
    if (quizHistory.length > 20) {
        quizHistory = quizHistory.slice(-20);
    }
    
    saveHistory();
}

function saveQuestionHistory(questionId) {
    // Sauvegarder dans le localStorage
    const history = JSON.parse(localStorage.getItem('tcvaQuestionHistory') || '[]');
    if (!history.includes(questionId)) {
        history.push(questionId);
        localStorage.setItem('tcvaQuestionHistory', JSON.stringify(history));
    }
}

function saveHistory() {
    localStorage.setItem('tcvaQuizHistory', JSON.stringify(quizHistory));
}

function loadHistory() {
    const history = localStorage.getItem('tcvaQuizHistory');
    if (history) {
        quizHistory = JSON.parse(history);
    }
}

function saveProgress() {
    const progress = {
        questionsViewed: Array.from(questionsViewed),
        lastUpdated: Date.now()
    };
    localStorage.setItem('tcvaProgress', JSON.stringify(progress));
}

function loadProgress() {
    const progress = localStorage.getItem('tcvaProgress');
    if (progress) {
        const progressData = JSON.parse(progress);
        questionsViewed = new Set(progressData.questionsViewed);
    }
}

function clearHistory() {
    if (confirm('Êtes-vous sûr de vouloir effacer tout l\'historique ?')) {
        quizHistory = [];
        saveHistory();
        displayHistory();
        
        // Réinitialiser la progression
        questionsViewed = new Set();
        saveProgress();
        updateProgressDisplay();
        displayRecommendations();
    }
}

// ============================================
// PAGE "À RETENIR"
// ============================================

function displayKeyPoints() {
    const container = document.getElementById('key-points-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    BLOCS.forEach(bloc => {
        const item = document.createElement('li');
        
        const title = document.createElement('strong');
        title.textContent = `${bloc.id}: ${bloc.name}`;
        item.appendChild(title);
        
        item.appendChild(document.createElement('br'));
        
        const description = document.createElement('span');
        description.textContent = 'Maîtriser les compétences associées à ce bloc.';
        item.appendChild(description);
        
        container.appendChild(item);
    });
}

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ============================================
// FONCTIONS EXPORTÉES (pour les modules)
// ============================================

function getAppData() {
    return {
        questionsViewed: Array.from(questionsViewed),
        quizHistory: quizHistory,
        currentPage: currentPage
    };
}

// Rendre les fonctions accessibles depuis le module animaux
if (typeof window !== 'undefined') {
    window.TCVA_App = {
        getQuestionsByAnimal: getQuestionsByAnimal,
        getAnimalCategory: getAnimalCategory,
        getBlocName: getBlocName,
        markQuestionAsViewed: (questionId) => {
            questionsViewed.add(questionId);
            saveProgress();
        }
    };
}
