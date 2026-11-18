// ============================================
// MODULE RECONNAISSANCE ANIMAUX - LOGIQUE
// ============================================

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentAnimalCategory = 'all';
let currentAnimalBloc = 'all';
let currentAnimalSearch = '';
let currentAnimalQuizQuestions = [];
let currentAnimalQuizIndex = 0;
let animalQuizScore = 0;
let animalTimer = null;
let timeLeftAnimal = 0;
let viewedAnimals = new Set();
let favoriteAnimals = new Set();
let viewedAnimalsByBloc = {};
let selectedRevisionBloc = null;
let completedChallenges = new Set();
let challengeProgress = {};
let unlockedRewards = new Set();
let totalPoints = 0;
let quizHistory = [];

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initAnimalsModule();
});

function initAnimalsModule() {
    loadAnimalProgress();
    loadFavoriteAnimals();
    loadBlocStats();
    loadChallengeProgress();
    loadRewardProgress();
    initDarkMode();
    initAnimalSelectOptions();
    displayAnimalCategories();
    displayAnimalGroups();
    displayComparisonCategories();
    updateAnimalStats();
    displayBlocStats();
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
// GESTION DES SECTIONS
// ============================================

function showAnimalSection(sectionName) {
    const sections = document.querySelectorAll('.animal-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Mettre à jour les liens de navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const onclick = link.getAttribute('onclick');
        if (onclick && onclick.includes(sectionName)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Actions spécifiques
    if (sectionName === 'learning') {
        displayAnimalCategories();
        updateAnimalStats();
        displayBlocStats();
        displayBlocFilters();
    } else if (sectionName === 'quiz') {
        showAnimalQuizSetup();
    } else if (sectionName === 'comparison') {
        displayComparisonCategories();
    } else if (sectionName === 'groups') {
        displayAnimalGroups();
    } else if (sectionName === 'bloc-revision') {
        displayBlocRevisionSelector();
    } else if (sectionName === 'challenges') {
        checkAllChallenges();
        displayChallenges();
    } else if (sectionName === 'rewards') {
        checkAndAwardRewards();
        displayRewards('earned');
        updateUserLevelDisplay();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// INITIALISATION DES OPTIONS DE SÉLECTION
// ============================================

function initAnimalSelectOptions() {
    const animalQuizCategory = document.getElementById('animal-quiz-category');
    
    if (animalQuizCategory) {
        ANIMAL_CATEGORIES.filter(category => category.id !== "all").forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = `${category.icon} ${category.name}`;
            animalQuizCategory.appendChild(option);
        });
    }
    
    // Initialiser les options de bloc pour le quiz
    const animalQuizBloc = document.getElementById('animal-quiz-bloc');
    if (animalQuizBloc && BLOCS) {
        BLOCS.filter(bloc => bloc.id !== "all").forEach(bloc => {
            const option = document.createElement('option');
            option.value = bloc.id;
            option.textContent = `${bloc.icon} ${bloc.name}`;
            animalQuizBloc.appendChild(option);
        });
    }
}

// ============================================
// FAVORITES
// ============================================

function toggleFavorite(animalId) {
    if (favoriteAnimals.has(animalId)) {
        favoriteAnimals.delete(animalId);
    } else {
        favoriteAnimals.add(animalId);
    }
    saveFavoriteAnimals();
    updateAnimalStats();
}

function isFavorite(animalId) {
    return favoriteAnimals.has(animalId);
}

function saveFavoriteAnimals() {
    const favorites = Array.from(favoriteAnimals);
    localStorage.setItem('tcvaFavoriteAnimals', JSON.stringify(favorites));
}

function loadFavoriteAnimals() {
    const favorites = localStorage.getItem('tcvaFavoriteAnimals');
    if (favorites) {
        favoriteAnimals = new Set(JSON.parse(favorites));
    }
}

// ============================================
// SECTION APPRENTISSAGE
// ============================================

function filterAnimals(button) {
    const filters = document.querySelectorAll('.animal-filter-btn');
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    currentAnimalCategory = button.getAttribute('data-category');
    displayAnimalCategories();
}

function searchAnimals() {
    const input = document.getElementById('animal-search-input');
    currentAnimalSearch = input ? input.value.toLowerCase() : '';
    displayAnimalCategories();
}

// Filtrer par bloc
function filterByBloc(button) {
    const filters = document.querySelectorAll('.bloc-filter-btn');
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    currentAnimalBloc = button.getAttribute('data-bloc');
    displayAnimalCategories();
    updateAnimalStats();
}

// Afficher les filtres par bloc
function displayBlocFilters() {
    const container = document.getElementById('bloc-filters');
    if (!container || !BLOCS) return;
    
    // Garder le bouton "Tous les blocs"
    const existingButtons = container.querySelectorAll('.bloc-filter-btn');
    if (existingButtons.length <= 1) {
        // Ajouter les boutons pour chaque bloc
        BLOCS.forEach(bloc => {
            if (bloc.id !== 'all') {
                const btn = document.createElement('button');
                btn.className = 'bloc-filter-btn';
                btn.setAttribute('data-bloc', bloc.id);
                btn.innerHTML = `${bloc.icon} ${bloc.name}`;
                btn.onclick = () => filterByBloc(btn);
                container.appendChild(btn);
            }
        });
    }
}

// Réinitialiser les filtres du quiz
function resetQuizFilters() {
    document.getElementById('animal-quiz-category').value = 'all';
    document.getElementById('animal-quiz-bloc').value = 'all';
    document.getElementById('animal-quiz-count').value = '10';
    document.getElementById('animal-quiz-time').value = '20';
    
    // Réinitialiser les filtres visuels
    const categorySelect = document.getElementById('animal-quiz-category');
    const blocSelect = document.getElementById('animal-quiz-bloc');
    
    // Mettre à jour l'affichage
    updateAnimalQuizSetup();
}

function displayAnimalCategories() {
    const container = document.getElementById('animal-categories');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredAnimals = {};
    Object.keys(ANIMALS_DB).forEach(category => {
        if (currentAnimalCategory === 'all' || category === currentAnimalCategory) {
            filteredAnimals[category] = ANIMALS_DB[category].filter(animal => {
                // Filtre par recherche
                const matchesSearch = animal.name.toLowerCase().includes(currentAnimalSearch) ||
                                     animal.scientific.toLowerCase().includes(currentAnimalSearch) ||
                                     animal.description.toLowerCase().includes(currentAnimalSearch);
                
                // Filtre par bloc
                if (currentAnimalBloc !== 'all') {
                    const animalBlocs = getAnimalBlocs(animal);
                    const matchesBloc = animalBlocs.includes(currentAnimalBloc);
                    return matchesSearch && matchesBloc;
                }
                
                return matchesSearch;
            });
        }
    });
    
    Object.entries(filteredAnimals).forEach(([category, animals]) => {
        if (animals.length > 0) {
            const categoryDiv = createAnimalCategoryDiv(category, animals);
            container.appendChild(categoryDiv);
        }
    });
    
    if (container.innerHTML === '') {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Aucun animal ne correspond à vos critères de recherche et de filtre.</p>';
    }
    
    updateAnimalStats();
}

function createAnimalCategoryDiv(category, animals) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'animal-category';
    
    const categoryInfo = ANIMAL_CATEGORIES.find(c => c.id === category);
    const icon = categoryInfo ? categoryInfo.icon : '🐾';
    const name = categoryInfo ? categoryInfo.name : category;
    
    const header = document.createElement('h3');
    header.innerHTML = `${icon} ${name}`;
    categoryDiv.appendChild(header);
    
    const grid = document.createElement('div');
    grid.className = 'animal-grid';
    
    animals.forEach(animal => {
        const animalCard = createAnimalCard(animal);
        grid.appendChild(animalCard);
    });
    
    categoryDiv.appendChild(grid);
    return categoryDiv;
}

function createAnimalCard(animal) {
    const card = document.createElement('div');
    card.className = 'animal-card';
    card.onclick = () => showAnimalModal(animal);
    
    // Conteneur pour l'image et le bouton favoris
    const imgContainer = document.createElement('div');
    imgContainer.className = 'animal-image-container';
    
    const img = document.createElement('img');
    img.src = animal.image || 'https://via.placeholder.com/300x200';
    img.alt = animal.name;
    img.className = 'animal-image';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.onerror = () => {
        img.src = 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(animal.name);
    };
    imgContainer.appendChild(img);
    
    // Bouton favoris
    const favoriteBtn = document.createElement('button');
    favoriteBtn.className = 'animal-favorite-btn';
    favoriteBtn.innerHTML = isFavorite(animal.id) ? '⭐' : '☆';
    favoriteBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(animal.id);
        favoriteBtn.innerHTML = isFavorite(animal.id) ? '⭐' : '☆';
    };
    favoriteBtn.title = isFavorite(animal.id) ? 'Retirer des favoris' : 'Ajouter aux favoris';
    imgContainer.appendChild(favoriteBtn);
    
    card.appendChild(imgContainer);
    
    const name = document.createElement('div');
    name.className = 'animal-name';
    name.textContent = animal.name;
    card.appendChild(name);
    
    const scientific = document.createElement('div');
    scientific.className = 'animal-scientific';
    scientific.textContent = animal.scientific;
    card.appendChild(scientific);
    
    const origin = document.createElement('div');
    origin.className = 'animal-origin';
    origin.textContent = animal.origin || '';
    card.appendChild(origin);
    
    return card;
}

function showAnimalModal(animal) {
    let modal = document.getElementById('animal-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'animal-modal';
        modal.className = 'animal-modal';
        document.body.appendChild(modal);
    }
    
    // Marquer l'animal comme vu et mettre à jour les stats par bloc
    viewedAnimals.add(animal.id);
    saveAnimalProgress();
    updateBlocStatsForAnimal(animal.id);
    
    // Vérifier et attribuer les récompenses
    checkAndAwardRewards();
    
    const categoryInfo = ANIMAL_CATEGORIES.find(c => c.id === animal.category);
    const icon = categoryInfo ? categoryInfo.icon : '🐾';
    
    modal.innerHTML = `
        <div class="animal-modal-content">
            <div class="animal-modal-header">
                <h2>${icon} ${animal.name}</h2>
                <button class="close-modal" onclick="closeAnimalModal()">&times;</button>
            </div>
            <div class="animal-modal-body">
                <img src="${animal.image || 'https://via.placeholder.com/400x300'}" 
                     alt="${animal.name}" 
                     class="animal-modal-image"
                     loading="lazy"
                     decoding="async"
                     onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(animal.name)}';">
                <div class="animal-modal-info">
                    <div class="info-section">
                        <h4>📝 Description</h4>
                        <p>${animal.description}</p>
                    </div>
                    <div class="info-section">
                        <h4>📊 Caractéristiques</h4>
                        <p><strong>Nom scientifique:</strong> ${animal.scientific}</p>
                        <p><strong>Origine:</strong> ${animal.origin || 'N/A'}</p>
                        <p><strong>Catégorie:</strong> ${categoryInfo ? categoryInfo.name : animal.category}</p>
                        ${animal.characteristics ? `
                            <p><strong>Taille:</strong> ${animal.characteristics.taille || 'N/A'}</p>
                            <p><strong>Poids:</strong> ${animal.characteristics.poids || 'N/A'}</p>
                            <p><strong>Espérance de vie:</strong> ${animal.characteristics.esperanceVie || 'N/A'}</p>
                        ` : ''}
                        ${animal.characteristics && animal.characteristics.temperature ? `
                            <p><strong>Température:</strong> ${animal.characteristics.temperature}</p>
                        ` : ''}
                    </div>
                    <div class="info-section">
                        <h4>🏠 Besoins</h4>
                        ${animal.needs ? `
                            <p><strong>Habitat:</strong> ${animal.needs.aquarium || animal.needs.habitat || animal.needs.espace || 'N/A'}</p>
                            <p><strong>Alimentation:</strong> ${animal.needs.alimentation || 'N/A'}</p>
                            <p><strong>Compatibilité:</strong> ${animal.needs.compatible || 'N/A'}</p>
                        ` : ''}
                    </div>
                    ${animal.funFact ? `
                        <div class="info-section">
                            <h4>💡 Le saviez-vous ?</h4>
                            <p>${animal.funFact}</p>
                        </div>
                    ` : ''}
                    ${animal.advice ? `
                        <div class="info-section">
                            <h4>💬 Conseil</h4>
                            <p>${animal.advice}</p>
                        </div>
                    ` : ''}
                    ${animal.regulation ? `
                        <div class="info-section">
                            <h4>⚖️ Réglementation</h4>
                            <p>${animal.regulation}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeAnimalModal() {
    const modal = document.getElementById('animal-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// ============================================
// SECTION QUIZ
// ============================================

function showAnimalQuizSetup() {
    const setupDiv = document.getElementById('animal-quiz-setup');
    const questionDiv = document.getElementById('animal-question');
    
    if (setupDiv) setupDiv.style.display = 'block';
    if (questionDiv) questionDiv.style.display = 'none';
}

function startAnimalQuiz() {
    const category = document.getElementById('animal-quiz-category').value;
    const bloc = document.getElementById('animal-quiz-bloc').value;
    const count = parseInt(document.getElementById('animal-quiz-count').value);
    const timeLimit = parseInt(document.getElementById('animal-quiz-time').value);
    
    currentAnimalQuizQuestions = generateAnimalQuizQuestions(category, bloc, count);
    
    if (currentAnimalQuizQuestions.length === 0) {
        alert('Aucun animal disponible pour cette catégorie.');
        return;
    }
    
    currentAnimalQuizIndex = 0;
    animalQuizScore = 0;
    
    const setupDiv = document.getElementById('animal-quiz-setup');
    const questionDiv = document.getElementById('animal-question');
    
    if (setupDiv) setupDiv.style.display = 'none';
    if (questionDiv) questionDiv.style.display = 'block';
    
    displayAnimalQuestion(timeLimit);
}

function generateAnimalQuizQuestions(category, bloc, count) {
    let animals = [];
    
    if (category === 'all') {
        Object.values(ANIMALS_DB).forEach(catAnimals => {
            animals = animals.concat(catAnimals);
        });
    } else {
        animals = ANIMALS_DB[category] || [];
    }
    
    // Filtrer par bloc si sélectionné
    if (bloc !== 'all' && BLOCS) {
        animals = animals.filter(animal => {
            const animalBlocs = getAnimalBlocs(animal);
            return animalBlocs.includes(bloc);
        });
    }
    
    return shuffleArray(animals).slice(0, Math.min(count, animals.length));
}

function displayAnimalQuestion(timeLimit) {
    const animal = currentAnimalQuizQuestions[currentAnimalQuizIndex];
    
    document.getElementById('quiz-current').textContent = currentAnimalQuizIndex + 1;
    document.getElementById('quiz-total').textContent = currentAnimalQuizQuestions.length;
    
    const progress = ((currentAnimalQuizIndex) / currentAnimalQuizQuestions.length) * 100;
    const progressBar = document.getElementById('animal-quiz-progress');
    progressBar.style.width = `${progress}%`;
    
    // Appliquer la couleur selon le pourcentage
    progressBar.className = 'progress-bar-fill';
    if (progress < 33) {
        progressBar.classList.add('progress-low');
    } else if (progress < 66) {
        progressBar.classList.add('progress-medium');
    } else {
        progressBar.classList.add('progress-high');
    }
    
    timeLeftAnimal = timeLimit;
    document.getElementById('animal-timer').textContent = timeLeftAnimal;
    startAnimalTimer();
    
    const img = document.getElementById('quiz-animal-image');
    img.src = animal.image || 'https://via.placeholder.com/400x300';
    img.alt = animal.name;
    img.loading = 'lazy';
    img.decoding = 'async';
    
    displayAnimalOptions(animal);
    
    document.getElementById('animal-feedback').classList.remove('show');
    document.getElementById('animal-next-btn').classList.add('hidden');
}

function displayAnimalOptions(correctAnimal) {
    const optionsContainer = document.getElementById('animal-options');
    optionsContainer.innerHTML = '';
    
    const allAnimals = [];
    Object.values(ANIMALS_DB).forEach(catAnimals => {
        allAnimals.push(...catAnimals);
    });
    
    const sameCategoryAnimals = allAnimals.filter(a => a.category === correctAnimal.category && a.id !== correctAnimal.id);
    const wrongOptions = shuffleArray(sameCategoryAnimals).slice(0, 3).map(a => a.name);
    
    // Créer toutes les options et les mélanger VRAIMENT aléatoirement
    const allOptions = [correctAnimal.name, ...wrongOptions];
    // Méthode alternative de mélange pour garantir l'aléatoire
    const shuffledOptions = [...allOptions].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'animal-option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnimalOption(option, correctAnimal);
        optionsContainer.appendChild(optionElement);
    });
}

function selectAnimalOption(selectedOption, correctAnimal) {
    const options = document.querySelectorAll('.animal-option');
    options.forEach(opt => opt.classList.add('disabled'));
    
    const isCorrect = selectedOption === correctAnimal.name;
    
    if (isCorrect) {
        animalQuizScore++;
        options.forEach(opt => {
            if (opt.textContent === correctAnimal.name) {
                opt.classList.add('correct');
            }
        });
    } else {
        options.forEach(opt => {
            if (opt.textContent === selectedOption) {
                opt.classList.add('incorrect');
            }
            if (opt.textContent === correctAnimal.name) {
                opt.classList.add('correct');
            }
        });
    }
    
    stopAnimalTimer();
    
    const feedback = document.getElementById('animal-feedback');
    feedback.innerHTML = `
        <strong>${isCorrect ? '✅ Bonne réponse !' : '❌ Mauvaise réponse'}</strong>
        <p><strong>C'est un(e) ${correctAnimal.name} (${correctAnimal.scientific})</strong></p>
        <div class="animal-explanation">
            <h4>📝 Description:</h4>
            <p>${correctAnimal.description}</p>
        </div>
    `;
    feedback.className = `animal-quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.classList.add('show');
    
    document.getElementById('animal-next-btn').classList.remove('hidden');
    
    viewedAnimals.add(correctAnimal.id);
    saveAnimalProgress();
}

function nextAnimalQuestion() {
    currentAnimalQuizIndex++;
    
    if (currentAnimalQuizIndex < currentAnimalQuizQuestions.length) {
        displayAnimalQuestion(parseInt(document.getElementById('animal-quiz-time').value));
    } else {
        showAnimalQuizResults();
    }
}

function showAnimalQuizResults() {
    stopAnimalTimer();
    
    const scorePercent = Math.round((animalQuizScore / currentAnimalQuizQuestions.length) * 100);
    
    // Ajouter le quiz à l'historique pour les récompenses
    addQuizToHistory(animalQuizScore, currentAnimalQuizQuestions.length);
    
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
        <h2>🎉 Résultats du Quiz</h2>
        <div class="results-container" style="max-width: 600px; margin: 0 auto;">
            <div class="score-circle" style="--score-percent: ${scorePercent}%">
                <div class="score-text">${scorePercent}%</div>
            </div>
            <div class="results-summary">
                <div class="stat-card">
                    <div class="stat-number">${animalQuizScore}</div>
                    <div class="stat-label">Bonnes réponses</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${currentAnimalQuizQuestions.length - animalQuizScore}</div>
                    <div class="stat-label">Mauvaises réponses</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${currentAnimalQuizQuestions.length}</div>
                    <div class="stat-label">Questions</div>
                </div>
            </div>
            ${scorePercent === 100 ? '
                <div class="perfect-score-badge" style="text-align: center; margin: 1rem 0;">
                    🌟 Score Parfait ! 🌟
                </div>
            ' : ''}
            <div class="text-center" style="margin-top: 2rem;">
                <button class="btn" onclick="showAnimalQuizSetup()">Nouveau Quiz</button>
                <button class="btn btn-secondary" onclick="showAnimalSection('learning')" style="margin-left: 1rem;">Retour</button>
            </div>
        </div>
    `;
    
    updateAnimalStats();
}

function startAnimalTimer() {
    stopAnimalTimer();
    
    const timeLimit = parseInt(document.getElementById('animal-quiz-time').value);
    timeLeftAnimal = timeLimit;
    
    animalTimer = setInterval(() => {
        timeLeftAnimal--;
        document.getElementById('animal-timer').textContent = timeLeftAnimal;
        
        if (timeLeftAnimal <= 0) {
            stopAnimalTimer();
            const options = document.querySelectorAll('.animal-option');
            if (options.length > 0) {
                const randomOption = options[Math.floor(Math.random() * options.length)];
                randomOption.click();
            }
        }
    }, 1000);
}

function stopAnimalTimer() {
    if (animalTimer) {
        clearInterval(animalTimer);
        animalTimer = null;
    }
}

// ============================================
// SECTION COMPARAISON
// ============================================

function displayComparisonCategories() {
    const container = document.getElementById('comparison-categories');
    if (!container) return;
    
    if (!ANIMAL_CATEGORIES) {
        container.innerHTML = '<p style="text-align: center; color: #f00;">Erreur : données non chargées</p>';
        return;
    }
    
    container.innerHTML = '';
    
    ANIMAL_CATEGORIES.forEach(category => {
        if (category.id !== 'all') {
            const card = document.createElement('div');
            card.className = 'group-card';
            card.onclick = () => displayComparisonTable(category.id);
            
            const icon = document.createElement('div');
            icon.className = 'group-icon';
            icon.textContent = category.icon;
            card.appendChild(icon);
            
            const title = document.createElement('h4');
            title.textContent = category.name;
            card.appendChild(title);
            
            const description = document.createElement('p');
            description.textContent = category.description || 'Comparer les espèces';
            card.appendChild(description);
            
            const animalCount = ANIMALS_DB[category.id] ? ANIMALS_DB[category.id].length : 0;
            const stat = document.createElement('div');
            stat.className = 'group-stat';
            stat.textContent = `${animalCount} espèces`;
            card.appendChild(stat);
            
            container.appendChild(card);
        }
    });
}

function displayComparisonTable(categoryId) {
    const container = document.getElementById('comparison-table-container');
    if (!container) return;
    
    container.innerHTML = '';
    const animals = ANIMALS_DB[categoryId] || [];
    
    if (animals.length === 0) {
        container.innerHTML = '<p>Pas d\'animaux dans cette catégorie.</p>';
        return;
    }
    
    const categoryInfo = ANIMAL_CATEGORIES.find(c => c.id === categoryId);
    const title = document.createElement('h3');
    title.textContent = `Comparaison: ${categoryInfo ? categoryInfo.name : categoryId}`;
    container.appendChild(title);
    
    const table = document.createElement('table');
    table.className = 'comparison-table';
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th class="sticky-col">Caractéristiques</th>' + animals.map(a => `<th>${a.name}</th>`).join('');
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    
    // Caracteristiques
    const charMap = {
        'Taille': 'taille',
        'Poids': 'poids',
        'Espérance de vie': 'esperanceVie',
        'Tempérament': 'temperament'
    };
    ['Taille', 'Poids', 'Espérance de vie', 'Tempérament'].forEach(char => {
        const row = document.createElement('tr');
        const key = charMap[char] || char.toLowerCase().replace(/\s+/g, '').replace('é', 'e');
        row.innerHTML = `<td class="sticky-col">${char}</td>` + animals.map(a => {
            const value = a.characteristics && a.characteristics[key] ? a.characteristics[key] : 'N/A';
            return `<td>${value || 'N/A'}</td>`;
        }).join('');
        tbody.appendChild(row);
    });
    
    // Origine
    const originRow = document.createElement('tr');
    originRow.innerHTML = `<td class="sticky-col">Origine</td>` + animals.map(a => {
        return `<td>${a.origin || 'N/A'}</td>`;
    }).join('');
    tbody.appendChild(originRow);
    
    // Besoins
    ['Alimentation', 'Espace', 'Exercice'].forEach(need => {
        const row = document.createElement('tr');
        row.innerHTML = `<td class="sticky-col">${need}</td>` + animals.map(a => {
            const value = a.needs ? a.needs[need.toLowerCase()] : 'N/A';
            return `<td>${value || 'N/A'}</td>`;
        }).join('');
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    container.appendChild(table);
}

// ============================================
// SECTION GROUPES
// ============================================

function displayAnimalGroups() {
    const container = document.getElementById('animal-groups');
    if (!container) return;
    
    if (!ANIMAL_CATEGORIES) {
        container.innerHTML = '<p style="text-align: center; color: #f00;">Erreur : données non chargées</p>';
        return;
    }
    
    container.innerHTML = '';
    
    ANIMAL_CATEGORIES.forEach(category => {
        if (category.id !== 'all') {
            const card = document.createElement('div');
            card.className = 'group-card';
            card.onclick = () => {
                currentAnimalCategory = category.id;
                showAnimalSection('learning');
            };
            
            const icon = document.createElement('div');
            icon.className = 'group-icon';
            icon.textContent = category.icon;
            card.appendChild(icon);
            
            const title = document.createElement('h4');
            title.textContent = category.name;
            card.appendChild(title);
            
            const description = document.createElement('p');
            description.textContent = category.description || 'Découvrir les espèces';
            card.appendChild(description);
            
            const animalCount = ANIMALS_DB[category.id] ? ANIMALS_DB[category.id].length : 0;
            const stat = document.createElement('div');
            stat.className = 'group-stat';
            stat.textContent = `${animalCount} espèces`;
            card.appendChild(stat);
            
            container.appendChild(card);
        }
    });
}

// ============================================
// STATISTIQUES
// ============================================

function updateAnimalStats() {
    const totalAnimals = Object.values(ANIMALS_DB).reduce((sum, animals) => sum + animals.length, 0);
    const viewedCount = viewedAnimals.size;
    const masteryPercent = totalAnimals > 0 ? Math.round((viewedCount / totalAnimals) * 100) : 0;
    
    const totalEl = document.getElementById('total-animals');
    const viewedEl = document.getElementById('animals-viewed');
    const masteryEl = document.getElementById('mastery-percent');
    
    if (totalEl) totalEl.textContent = totalAnimals;
    if (viewedEl) viewedEl.textContent = viewedCount;
    if (masteryEl) masteryEl.textContent = `${masteryPercent}%`;
}

// ============================================
// STATISTIQUES PAR BLOC
// ============================================

// Initialiser les statistiques par bloc
function initBlocStats() {
    if (!BLOCS) return;
    
    BLOCS.forEach(bloc => {
        if (!viewedAnimalsByBloc[bloc.id]) {
            viewedAnimalsByBloc[bloc.id] = {
                viewed: new Set(),
                total: 0
            };
        }
    });
    
    // Compter le nombre total d'animaux par bloc
    Object.values(ANIMALS_DB).forEach(categoryAnimals => {
        categoryAnimals.forEach(animal => {
            const animalBlocs = getAnimalBlocs(animal);
            animalBlocs.forEach(blocId => {
                if (viewedAnimalsByBloc[blocId]) {
                    viewedAnimalsByBloc[blocId].total++;
                }
            });
        });
    });
}

// Obtenir les blocs d'un animal
function getAnimalBlocs(animal) {
    // Vérifier d'abord si l'animal a des blocs définis directement
    if (animal.blocs && Array.isArray(animal.blocs)) {
        return animal.blocs;
    }
    
    // Vérifier si l'animal a des blocs spécifiques dans SPECIFIC_ANIMAL_BLOCS
    if (SPECIFIC_ANIMAL_BLOCS && SPECIFIC_ANIMAL_BLOCS[animal.id]) {
        return SPECIFIC_ANIMAL_BLOCS[animal.id];
    }
    
    // Si pas de blocs définis, utiliser les blocs par défaut de la catégorie
    if (CATEGORY_BLOCS && CATEGORY_BLOCS[animal.category]) {
        return CATEGORY_BLOCS[animal.category];
    }
    
    // Bloc par défaut
    return ["BC06"];
}

// Charger les statistiques par bloc depuis le localStorage
function loadBlocStats() {
    const savedStats = localStorage.getItem('tcvaBlocStats');
    if (savedStats) {
        try {
            const stats = JSON.parse(savedStats);
            viewedAnimalsByBloc = {};
            Object.keys(stats).forEach(blocId => {
                viewedAnimalsByBloc[blocId] = {
                    viewed: new Set(stats[blocId].viewed || []),
                    total: stats[blocId].total || 0
                };
            });
        } catch (e) {
            console.error('Erreur de chargement des stats par bloc:', e);
            viewedAnimalsByBloc = {};
        }
    } else {
        viewedAnimalsByBloc = {};
    }
    
    initBlocStats();
}

// Sauvegarder les statistiques par bloc
function saveBlocStats() {
    const stats = {};
    Object.keys(viewedAnimalsByBloc).forEach(blocId => {
        stats[blocId] = {
            viewed: Array.from(viewedAnimalsByBloc[blocId].viewed),
            total: viewedAnimalsByBloc[blocId].total
        };
    });
    localStorage.setItem('tcvaBlocStats', JSON.stringify(stats));
}

// Mettre à jour les statistiques par bloc pour un animal
function updateBlocStatsForAnimal(animalId) {
    const animal = findAnimalById(animalId);
    if (!animal) return;
    
    const animalBlocs = getAnimalBlocs(animal);
    animalBlocs.forEach(blocId => {
        if (viewedAnimalsByBloc[blocId]) {
            viewedAnimalsByBloc[blocId].viewed.add(animalId);
        }
    });
    
    saveBlocStats();
    displayBlocStats();
}

// Trouver un animal par son ID
function findAnimalById(animalId) {
    for (const category of Object.keys(ANIMALS_DB)) {
        const animal = ANIMALS_DB[category].find(a => a.id === animalId);
        if (animal) return animal;
    }
    return null;
}

// Afficher les statistiques par bloc
function displayBlocStats() {
    const container = document.getElementById('bloc-stats-grid');
    if (!container || !BLOCS) return;
    
    container.innerHTML = '';
    
    BLOCS.forEach(bloc => {
        const blocData = viewedAnimalsByBloc[bloc.id] || { viewed: new Set(), total: 0 };
        const viewedCount = blocData.viewed.size;
        const total = blocData.total;
        const percent = total > 0 ? Math.round((viewedCount / total) * 100) : 0;
        
        const card = document.createElement('div');
        card.className = 'bloc-stat-card';
        
        card.innerHTML = `
            <div class="bloc-stat-header">
                <span class="bloc-icon">${bloc.icon}</span>
                <h4>${bloc.name}</h4>
            </div>
            <div class="bloc-stat-info">
                <div class="bloc-stat-progress">
                    <div class="bloc-progress-bar" style="width: ${percent}%" data-percent="${percent}"></div>
                </div>
                <div class="bloc-stat-numbers">
                    <span class="bloc-viewed">${viewedCount}/${total}</span>
                    <span class="bloc-percent">${percent}%</span>
                </div>
            </div>
            <div class="bloc-stat-description">${bloc.description}</div>
        `;
        
        container.appendChild(card);
    });
}

// ============================================
// RÉVISION PAR BLOC
// ============================================

// Afficher le sélecteur de bloc pour la révision
function displayBlocRevisionSelector() {
    const container = document.getElementById('bloc-revision-grid');
    if (!container || !BLOCS) return;
    
    container.innerHTML = '';
    
    BLOCS.forEach(bloc => {
        const card = document.createElement('div');
        card.className = 'bloc-revision-card';
        card.onclick = () => selectBlocForRevision(bloc.id);
        
        const blocData = viewedAnimalsByBloc[bloc.id] || { viewed: new Set(), total: 0 };
        const viewedCount = blocData.viewed.size;
        const total = blocData.total;
        const percent = total > 0 ? Math.round((viewedCount / total) * 100) : 0;
        
        card.innerHTML = `
            <div class="bloc-icon">${bloc.icon}</div>
            <h4>${bloc.name}</h4>
            <p>${bloc.description}</p>
            <div class="bloc-revision-progress" style="margin-top: 0.5rem;">
                <div class="bloc-progress-bar" style="width: ${percent}%" data-percent="${percent}"></div>
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.85rem; color: #666;">
                ${viewedCount}/${total} (${percent}%)
            </div>
        `;
        
        if (selectedRevisionBloc === bloc.id) {
            card.classList.add('selected');
        }
        
        container.appendChild(card);
    });
    
    // Si un bloc est sélectionné, afficher son contenu
    if (selectedRevisionBloc) {
        displayBlocRevisionContent(selectedRevisionBloc);
    }
}

// Sélectionner un bloc pour la révision
function selectBlocForRevision(blocId) {
    selectedRevisionBloc = blocId;
    displayBlocRevisionSelector();
    displayBlocRevisionContent(blocId);
}

// Afficher le contenu de révision pour un bloc
function displayBlocRevisionContent(blocId) {
    const container = document.getElementById('bloc-revision-content');
    if (!container) return;
    
    const bloc = BLOCS.find(b => b.id === blocId);
    if (!bloc) return;
    
    const blocData = viewedAnimalsByBloc[blocId] || { viewed: new Set(), total: 0 };
    const viewedCount = blocData.viewed.size;
    const total = blocData.total;
    const percent = total > 0 ? Math.round((viewedCount / total) * 100) : 0;
    
    // Obtenir tous les animaux de ce bloc
    const blocAnimals = [];
    Object.values(ANIMALS_DB).forEach(categoryAnimals => {
        categoryAnimals.forEach(animal => {
            const animalBlocs = getAnimalBlocs(animal);
            if (animalBlocs.includes(blocId)) {
                blocAnimals.push(animal);
            }
        });
    });
    
    // Séparer les animaux vus et non vus
    const viewedAnimalsList = blocAnimals.filter(a => viewedAnimals.has(a.id));
    const notViewedAnimalsList = blocAnimals.filter(a => !viewedAnimals.has(a.id));
    
    container.classList.add('active');
    container.innerHTML = `
        <div class="bloc-revision-info">
            <h3>📚 Révision: ${bloc.icon} ${bloc.name}</h3>
            <p>${bloc.description}</p>
        </div>
        
        <div class="bloc-revision-stats">
            <div class="revision-stat-item">
                <div class="revision-stat-number">${viewedCount}</div>
                <div class="revision-stat-label">Animaux étudiés</div>
            </div>
            <div class="revision-stat-item">
                <div class="revision-stat-number">${notViewedAnimalsList.length}</div>
                <div class="revision-stat-label">À réviser</div>
            </div>
            <div class="revision-stat-item">
                <div class="revision-stat-number">${total}</div>
                <div class="revision-stat-label">Total</div>
            </div>
            <div class="revision-stat-item">
                <div class="revision-stat-number">${percent}%</div>
                <div class="revision-stat-label">Maîtrise</div>
            </div>
        </div>
        
        <div class="bloc-revision-lists">
            ${notViewedAnimalsList.length > 0 ? `
                <div class="revision-list">
                    <h4>🔴 À réviser en priorité (${notViewedAnimalsList.length})</h4>
                    <div class="animal-grid" style="margin-top: 1rem;">
                        ${notViewedAnimalsList.map(a => createAnimalCard(a).outerHTML).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${viewedAnimalsList.length > 0 ? `
                <div class="revision-list" style="margin-top: 2rem;">
                    <h4>✅ Déjà étudiés (${viewedAnimalsList.length})</h4>
                    <div class="animal-grid" style="margin-top: 1rem;">
                        ${viewedAnimalsList.map(a => createAnimalCard(a).outerHTML).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// ============================================
// SAUVEGARDE
// ============================================

function saveAnimalProgress() {
    const progress = {
        viewedAnimals: Array.from(viewedAnimals),
        lastUpdated: Date.now()
    };
    localStorage.setItem('tcvaAnimalsProgress', JSON.stringify(progress));
    
    // Mettre à jour les stats par bloc quand on sauvegarde le progrès
    viewedAnimals.forEach(animalId => {
        updateBlocStatsForAnimal(animalId);
    });
}

function loadAnimalProgress() {
    const progress = localStorage.getItem('tcvaAnimalsProgress');
    if (progress) {
        try {
            const progressData = JSON.parse(progress);
            viewedAnimals = new Set(progressData.viewedAnimals);
        } catch (e) {
            console.error('Erreur:', e);
        }
    }
}

// ============================================
// EXPORT PDF
// ============================================

// Exporter les statistiques par bloc en PDF
async function exportBlocStatsPDF() {
    // Créer une copie de la section à exporter
    const blocStatsSection = document.getElementById('bloc-stats');
    if (!blocStatsSection || !BLOCS) {
        alert('Impossible d\'exporter: les statistiques ne sont pas disponibles.');
        return;
    }
    
    // Créer un élément temporaire avec les stats
    const tempElement = document.createElement('div');
    tempElement.className = 'pdf-export-container';
    
    // Ajouter le titre et la date
    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-FR');
    const timeStr = now.toLocaleTimeString('fr-FR');
    
    tempElement.innerHTML = `
        <div class="pdf-header">
            <h1>📊 Statistiques par Bloc de Compétences</h1>
            <h2>Bac Pro TCVA - Reconnaissances Animaux</h2>
            <p>Généré le ${dateStr} à ${timeStr}</p>
        </div>
        
        <div class="pdf-stats-grid">
            ${BLOCS.map(bloc => {
                const blocData = viewedAnimalsByBloc[bloc.id] || { viewed: new Set(), total: 0 };
                const viewedCount = blocData.viewed.size;
                const total = blocData.total;
                const percent = total > 0 ? Math.round((viewedCount / total) * 100) : 0;
                
                return `
                    <div class="pdf-bloc-card">
                        <h3>${bloc.icon} ${bloc.name}</h3>
                        <p><strong>Description:</strong> ${bloc.description}</p>
                        <p><strong>Progression:</strong> ${viewedCount}/${total} (${percent}%)</p>
                        <div class="pdf-progress-bar" style="width: ${percent}%; background: ${percent >= 75 ? '#4CAF50' : percent >= 50 ? '#FFC107' : '#F44336'};"></div>
                    </div>
                `;
            }).join('')}
        </div>
        
        <div class="pdf-footer" style="margin-top: 2rem; text-align: center; padding: 1rem; border-top: 1px solid #ddd;">
            <p>Application de révision - Bac Pro TCVA</p>
            <p>Denis Sanchez - 2026</p>
        </div>
    `;
    
    // Ajouter les styles pour le PDF
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .pdf-export-container {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        .pdf-header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 20px;
        }
        .pdf-header h1 {
            color: #2E7D32;
            margin-bottom: 10px;
        }
        .pdf-header h2 {
            color: #4CAF50;
            margin-bottom: 10px;
        }
        .pdf-header p {
            color: #666;
            font-size: 14px;
        }
        .pdf-stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        .pdf-bloc-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            page-break-inside: avoid;
        }
        .pdf-bloc-card h3 {
            color: #2E7D32;
            margin-bottom: 8px;
        }
        .pdf-bloc-card p {
            margin: 5px 0;
            font-size: 14px;
        }
        .pdf-progress-bar {
            height: 10px;
            border-radius: 5px;
            margin-top: 10px;
        }
        .pdf-footer {
            font-size: 12px;
            color: #666;
        }
        @media print {
            .pdf-stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    `;
    tempElement.appendChild(styleElement);
    
    // Ajouter l'élément temporaire au body
    document.body.appendChild(tempElement);
    
    try {
        // Utiliser html2pdf pour générer le PDF
        const opt = {
            margin: 10,
            filename: `statistiques-blocs-TCVA-${dateStr}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        const pdf = await html2pdf().from(tempElement).set(opt).save();
        
        // Nettoyer
        tempElement.remove();
    } catch (error) {
        console.error('Erreur lors de l\'export PDF:', error);
        alert('Une erreur est survenue lors de l\'export PDF. Vérifiez que vous avez une connexion internet.');
        tempElement.remove();
    }
}

// ============================================
// DÉFIS
// ============================================

// Charger la progression des défis
function loadChallengeProgress() {
    const savedCompleted = localStorage.getItem('tcvaCompletedChallenges');
    const savedProgress = localStorage.getItem('tcvaChallengeProgress');
    
    if (savedCompleted) {
        try {
            completedChallenges = new Set(JSON.parse(savedCompleted));
        } catch (e) {
            completedChallenges = new Set();
        }
    }
    
    if (savedProgress) {
        try {
            challengeProgress = JSON.parse(savedProgress);
        } catch (e) {
            challengeProgress = {};
        }
    }
}

// Sauvegarder la progression des défis
function saveChallengeProgress() {
    localStorage.setItem('tcvaCompletedChallenges', JSON.stringify(Array.from(completedChallenges)));
    localStorage.setItem('tcvaChallengeProgress', JSON.stringify(challengeProgress));
}

// Mettre à jour la progression d'un défi
function updateChallengeProgress(challengeId, value) {
    challengeProgress[challengeId] = value;
    saveChallengeProgress();
    checkChallengeCompletion(challengeId);
}

// Vérifier si un défi est complété
function checkChallengeCompletion(challengeId) {
    const challenge = CHALLENGES.find(c => c.id === challengeId);
    if (!challenge) return false;
    
    let isCompleted = false;
    
    if (challenge.blocId === 'all') {
        // Défis globaux
        const totalAnimals = Object.values(ANIMALS_DB).reduce((sum, animals) => sum + animals.length, 0);
        const viewedCount = viewedAnimals.size;
        const percent = totalAnimals > 0 ? Math.round((viewedCount / totalAnimals) * 100) : 0;
        isCompleted = percent >= challenge.targetCount;
    } else {
        // Défis par bloc
        const blocData = viewedAnimalsByBloc[challenge.blocId] || { viewed: new Set(), total: 0 };
        const viewedCount = blocData.viewed.size;
        const total = blocData.total;
        
        if (challenge.targetCount === 'all') {
            isCompleted = viewedCount === total && total > 0;
        } else {
            const percent = total > 0 ? Math.round((viewedCount / total) * 100) : 0;
            isCompleted = percent >= challenge.targetCount;
        }
    }
    
    if (isCompleted && !completedChallenges.has(challengeId)) {
        completedChallenges.add(challengeId);
        saveChallengeProgress();
    } else if (!isCompleted && completedChallenges.has(challengeId)) {
        completedChallenges.delete(challengeId);
        saveChallengeProgress();
    }
    
    return isCompleted;
}

// Vérifier tous les défis
function checkAllChallenges() {
    if (CHALLENGES) {
        CHALLENGES.forEach(challenge => {
            checkChallengeCompletion(challenge.id);
        });
    }
}

// Afficher les défis
function displayChallenges() {
    const container = document.getElementById('challenges-grid');
    if (!container || !CHALLENGES) return;
    
    container.innerHTML = '';
    
    // Afficher les défis par bloc
    BLOCS.forEach(bloc => {
        const blocChallenges = CHALLENGES.filter(c => c.blocId === bloc.id);
        if (blocChallenges.length === 0) return;
        
        const blocHeader = document.createElement('div');
        blocHeader.className = 'challenge-bloc-header';
        blocHeader.innerHTML = `
            <h3>${bloc.icon} ${bloc.name}</h3>
        `;
        container.appendChild(blocHeader);
        
        blocChallenges.forEach(challenge => {
            const card = createChallengeCard(challenge);
            container.appendChild(card);
        });
    });
    
    // Afficher les défis globaux
    const globalChallenges = CHALLENGES.filter(c => c.blocId === 'all');
    if (globalChallenges.length > 0) {
        const globalHeader = document.createElement('div');
        globalHeader.className = 'challenge-bloc-header';
        globalHeader.innerHTML = '<h3>🌍 Défis Globaux</h3>';
        container.appendChild(globalHeader);
        
        globalChallenges.forEach(challenge => {
            const card = createChallengeCard(challenge);
            container.appendChild(card);
        });
    }
    
    // Mettre à jour le résumé
    updateChallengeSummary();
}

// Créer une carte de défi
function createChallengeCard(challenge) {
    const card = document.createElement('div');
    card.className = 'challenge-card';
    card.id = `challenge-${challenge.id}`;
    
    // Vérifier si le défi est complété
    const isCompleted = completedChallenges.has(challenge.id);
    
    // Calculer la progression
    let progress = 0;
    let progressText = '';
    
    if (challenge.blocId === 'all') {
        const totalAnimals = Object.values(ANIMALS_DB).reduce((sum, animals) => sum + animals.length, 0);
        const viewedCount = viewedAnimals.size;
        progress = totalAnimals > 0 ? Math.round((viewedCount / totalAnimals) * 100) : 0;
        progressText = `${viewedAnimals.size}/${totalAnimals}`;
    } else {
        const blocData = viewedAnimalsByBloc[challenge.blocId] || { viewed: new Set(), total: 0 };
        const viewedCount = blocData.viewed.size;
        const total = blocData.total;
        
        if (challenge.targetCount === 'all') {
            progress = total > 0 ? Math.round((viewedCount / total) * 100) : 0;
            progressText = `${viewedCount}/${total}`;
        } else {
            progress = total > 0 ? Math.round((viewedCount / total) * 100) : 0;
            progressText = `${viewedCount}/${total} (${progress}%)`;
        }
    }
    
    // Déterminer le niveau
    const level = getChallengeLevel(progress, challenge.targetCount);
    
    card.innerHTML = `
        <div class="challenge-header">
            <span class="challenge-icon">${challenge.icon}</span>
            <div class="challenge-info">
                <h4>${challenge.name}</h4>
                <p class="challenge-difficulty">${challenge.difficulty}</p>
            </div>
            ${isCompleted ? '<span class="challenge-completed-badge">✅ Complété</span>' : ''}
        </div>
        <div class="challenge-body">
            <p>${challenge.description}</p>
            <div class="challenge-objective">
                <strong>Objectif:</strong> ${challenge.objective}
            </div>
        </div>
        <div class="challenge-footer">
            <div class="challenge-progress">
                <div class="challenge-progress-bar" style="width: ${Math.min(progress, 100)}%; background: ${level.color};"></div>
            </div>
            <div class="challenge-stats">
                <span>${progressText}</span>
                <span class="challenge-reward">${level.icon} ${level.name}</span>
            </div>
        </div>
    `;
    
    if (isCompleted) {
        card.classList.add('completed');
    }
    
    return card;
}

// Obtenir le niveau d'un défi
function getChallengeLevel(currentProgress, target) {
    if (target === 'all') {
        if (currentProgress >= 100) return CHALLENGE_LEVELS.PLATINUM;
        if (currentProgress >= 75) return CHALLENGE_LEVELS.GOLD;
        if (currentProgress >= 50) return CHALLENGE_LEVELS.SILVER;
        return CHALLENGE_LEVELS.BRONZE;
    } else {
        if (currentProgress >= target) return CHALLENGE_LEVELS.PLATINUM;
        if (currentProgress >= target * 0.75) return CHALLENGE_LEVELS.GOLD;
        if (currentProgress >= target * 0.5) return CHALLENGE_LEVELS.SILVER;
        return CHALLENGE_LEVELS.BRONZE;
    }
}

// Mettre à jour le résumé des défis
function updateChallengeSummary() {
    const completedEl = document.getElementById('challenges-completed');
    const totalEl = document.getElementById('challenges-total');
    
    if (completedEl && totalEl && CHALLENGES) {
        completedEl.textContent = completedChallenges.size;
        totalEl.textContent = CHALLENGES.length;
    }
}

// ============================================
// RÉCOMPENSES
// ============================================

// Charger la progression des récompenses
function loadRewardProgress() {
    const savedRewards = localStorage.getItem('tcvaUnlockedRewards');
    const savedPoints = localStorage.getItem('tcvaTotalPoints');
    const savedQuizHistory = localStorage.getItem('tcvaQuizHistory');
    
    if (savedRewards) {
        try {
            unlockedRewards = new Set(JSON.parse(savedRewards));
        } catch (e) {
            unlockedRewards = new Set();
        }
    }
    
    if (savedPoints) {
        try {
            totalPoints = parseInt(savedPoints);
        } catch (e) {
            totalPoints = 0;
        }
    }
    
    if (savedQuizHistory) {
        try {
            quizHistory = JSON.parse(savedQuizHistory);
        } catch (e) {
            quizHistory = [];
        }
    }
}

// Sauvegarder la progression des récompenses
function saveRewardProgress() {
    localStorage.setItem('tcvaUnlockedRewards', JSON.stringify(Array.from(unlockedRewards)));
    localStorage.setItem('tcvaTotalPoints', totalPoints.toString());
    localStorage.setItem('tcvaQuizHistory', JSON.stringify(quizHistory));
}

// Vérifier et attribuer les récompenses
function checkAndAwardRewards() {
    if (!REWARDS) return;
    
    Object.keys(REWARDS).forEach(rewardId => {
        const reward = REWARDS[rewardId];
        if (unlockedRewards.has(rewardId)) return;
        
        if (checkRewardUnlock(reward)) {
            unlockReward(rewardId);
        }
    });
    
    updateGlobalLevel();
    saveRewardProgress();
}

// Vérifier si une récompense peut être débloquée
function checkRewardUnlock(reward) {
    const condition = reward.unlockCondition;
    
    if (condition.viewedAnimals) {
        return viewedAnimals.size >= condition.viewedAnimals;
    }
    
    if (condition.category) {
        const categoryAnimals = ANIMALS_DB[condition.category] || [];
        const viewedInCategory = categoryAnimals.filter(a => viewedAnimals.has(a.id)).length;
        const percent = categoryAnimals.length > 0 ? Math.round((viewedInCategory / categoryAnimals.length) * 100) : 0;
        return percent >= condition.percent;
    }
    
    if (condition.bloc) {
        const blocData = viewedAnimalsByBloc[condition.bloc] || { viewed: new Set(), total: 0 };
        const viewedCount = blocData.viewed.size;
        const total = blocData.total;
        const percent = total > 0 ? Math.round((viewedCount / total) * 100) : 0;
        return percent >= condition.percent;
    }
    
    if (condition.allCategories) {
        const categoriesViewed = new Set();
        Object.values(ANIMALS_DB).forEach(categoryAnimals => {
            const viewedInCategory = categoryAnimals.filter(a => viewedAnimals.has(a.id)).length;
            if (viewedInCategory > 0) {
                categoriesViewed.add(categoryAnimals[0].category);
            }
        });
        return categoriesViewed.size >= Object.keys(ANIMALS_DB).length;
    }
    
    if (condition.allBlocs) {
        if (condition.allBlocs === 'all') {
            return true;
        }
        for (const blocId of Object.keys(viewedAnimalsByBloc)) {
            const blocData = viewedAnimalsByBloc[blocId];
            const viewedCount = blocData.viewed.size;
            const total = blocData.total;
            const percent = total > 0 ? Math.round((viewedCount / total) * 100) : 0;
            if (percent < condition.allBlocs) {
                return false;
            }
        }
        return true;
    }
    
    if (condition.quizPerfect) {
        return quizHistory.some(q => q.score === q.total && q.total > 0);
    }
    
    if (condition.quizCount) {
        const highScoreQuizzes = quizHistory.filter(q => q.score >= condition.quizScore).length;
        return highScoreQuizzes >= condition.quizCount;
    }
    
    return false;
}

// Débloquer une récompense
function unlockReward(rewardId) {
    const reward = REWARDS[rewardId];
    if (!reward || unlockedRewards.has(rewardId)) return;
    
    unlockedRewards.add(rewardId);
    totalPoints += reward.points;
    
    // Afficher une notification
    showRewardNotification(reward);
    
    saveRewardProgress();
    displayRewards();
    updateUserLevelDisplay();
}

// Afficher une notification de récompense
function showRewardNotification(reward) {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = 'reward-notification';
    notification.innerHTML = `
        <div class="reward-notification-icon">${reward.icon}</div>
        <div class="reward-notification-content">
            <strong>Nouvelle récompense !</strong>
            <p>${reward.name}</p>
            <small>${reward.description}</small>
        </div>
        <div class="reward-notification-points">+${reward.points} pts</div>
    `;
    
    document.body.appendChild(notification);
    
    // Animer
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Retirer après 5 secondes
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Afficher les récompenses
function displayRewards(filter = 'earned') {
    const container = document.getElementById('rewards-grid');
    if (!container || !REWARDS) return;
    
    container.innerHTML = '';
    
    const rewardsToShow = Object.values(REWARDS).filter(reward => {
        if (filter === 'earned') {
            return unlockedRewards.has(reward.id);
        } else if (filter === 'available') {
            return !unlockedRewards.has(reward.id) && !checkRewardUnlock(reward);
        } else {
            return true;
        }
    });
    
    if (rewardsToShow.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Aucune récompense à afficher.</p>';
        return;
    }
    
    rewardsToShow.forEach(reward => {
        const isUnlocked = unlockedRewards.has(reward.id);
        const card = createRewardCard(reward, isUnlocked);
        container.appendChild(card);
    });
    
    updateRewardsSummary();
}

// Créer une carte de récompense
function createRewardCard(reward, isUnlocked) {
    const card = document.createElement('div');
    card.className = 'reward-card';
    card.id = `reward-${reward.id}`;
    
    if (isUnlocked) {
        card.classList.add('unlocked');
    }
    
    const levelInfo = getRewardLevelInfo(reward.points);
    
    card.innerHTML = `
        <div class="reward-header">
            <div class="reward-icon">${reward.icon}</div>
            <div class="reward-info">
                <h4>${reward.name}</h4>
                <p class="reward-type">${REWARD_TYPES[reward.type].name}</p>
            </div>
            ${isUnlocked ? '<span class="reward-unlocked-badge">✅</span>' : '<span class="reward-locked-badge">🔒</span>'}
        </div>
        <div class="reward-body">
            <p>${reward.description}</p>
        </div>
        <div class="reward-footer">
            <div class="reward-points">${reward.points} pts</div>
            ${isUnlocked ? `<div class="reward-date">Débloqué le ${getRewardUnlockDate(reward.id)}</div>` : ''}
        </div>
        ${!isUnlocked ? `<div class="reward-locked-overlay"></div>` : ''}
    `;
    
    return card;
}

// Obtenir la date de débloquage d'une récompense
function getRewardUnlockDate(rewardId) {
    // Pour l'instant, on retourne une date générique
    // On pourrait stocker les dates de débloquage dans le localStorage
    return '...';
}

// Obtenir les infos de niveau pour une récompense
function getRewardLevelInfo(points) {
    for (const [levelName, levelInfo] of Object.entries(GLOBAL_LEVELS)) {
        if (points >= levelInfo.threshold) {
            return levelInfo;
        }
    }
    return GLOBAL_LEVELS.BEGINNER;
}

// Changer l'onglet des récompenses
function showRewardTab(event, tab) {
    const buttons = document.querySelectorAll('.reward-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Activer le bouton cliqué
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        // Fallback : activer le bouton correspondant au tab
        const activeBtn = Array.from(buttons).find(btn => btn.dataset.tab === tab);
        if (activeBtn) {
            activeBtn.classList.add('active');
        } else {
            buttons[0].classList.add('active');
        }
    }
    displayRewards(tab);
}

// Mettre à jour le résumé des récompenses
function updateRewardsSummary() {
    const earnedEl = document.getElementById('rewards-earned');
    const totalEl = document.getElementById('rewards-total');
    
    if (earnedEl && totalEl && REWARDS) {
        earnedEl.textContent = unlockedRewards.size;
        totalEl.textContent = Object.keys(REWARDS).length;
    }
}

// Mettre à jour l'affichage du niveau de l'utilisateur
function updateUserLevelDisplay() {
    const levelDisplay = document.getElementById('user-level-display');
    if (!levelDisplay) return;
    
    const level = getGlobalLevel();
    levelDisplay.innerHTML = `
        <span class="level-icon">${level.icon}</span>
        <span class="level-name">${level.name}</span>
        <span class="level-points">${totalPoints} pts</span>
    `;
}

// Obtenir le niveau global de l'utilisateur
function getGlobalLevel() {
    for (const [levelName, levelInfo] of Object.entries(GLOBAL_LEVELS)) {
        if (totalPoints >= levelInfo.threshold) {
            return levelInfo;
        }
    }
    return GLOBAL_LEVELS.BEGINNER;
}

// Mettre à jour le niveau global
function updateGlobalLevel() {
    const newLevel = getGlobalLevel();
    // Sauvegarder si nécessaire
}

// Ajouter un résultat de quiz à l'historique
function addQuizToHistory(score, total) {
    quizHistory.push({
        date: new Date().toISOString(),
        score: score,
        total: total,
        percent: total > 0 ? Math.round((score / total) * 100) : 0
    });
    
    // Garder seulement les 50 derniers quiz
    if (quizHistory.length > 50) {
        quizHistory.shift();
    }
    
    saveRewardProgress();
    checkAndAwardRewards();
}

// ============================================
// UTILITAIRES
// ============================================

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
