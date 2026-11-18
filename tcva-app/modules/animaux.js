// ============================================
// MODULE RECONNAISSANCE ANIMAUX - LOGIQUE
// ============================================

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentAnimalCategory = 'all';
let currentAnimalSearch = '';
let currentAnimalQuizQuestions = [];
let currentAnimalQuizIndex = 0;
let animalQuizScore = 0;
let animalTimer = null;
let timeLeftAnimal = 0;
let viewedAnimals = new Set();
let favoriteAnimals = new Set();

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initAnimalsModule();
});

function initAnimalsModule() {
    loadAnimalProgress();
    loadFavoriteAnimals();
    initDarkMode();
    initAnimalSelectOptions();
    displayAnimalCategories();
    displayAnimalGroups();
    displayComparisonCategories();
    updateAnimalStats();
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
    } else if (sectionName === 'quiz') {
        showAnimalQuizSetup();
    } else if (sectionName === 'comparison') {
        displayComparisonCategories();
    } else if (sectionName === 'groups') {
        displayAnimalGroups();
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

function displayAnimalCategories() {
    const container = document.getElementById('animal-categories');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredAnimals = {};
    Object.keys(ANIMALS_DB).forEach(category => {
        if (currentAnimalCategory === 'all' || category === currentAnimalCategory) {
            filteredAnimals[category] = ANIMALS_DB[category].filter(animal => {
                return animal.name.toLowerCase().includes(currentAnimalSearch) ||
                       animal.scientific.toLowerCase().includes(currentAnimalSearch) ||
                       animal.description.toLowerCase().includes(currentAnimalSearch);
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
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Aucun animal ne correspond à votre recherche.</p>';
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
    
    viewedAnimals.add(animal.id);
    saveAnimalProgress();
    
    // Conteneur pour l'image et le bouton favoris
    const imgContainer = document.createElement('div');
    imgContainer.className = 'animal-image-container';
    
    const img = document.createElement('img');
    img.src = animal.image || 'https://via.placeholder.com/300x200';
    img.alt = animal.name;
    img.className = 'animal-image';
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
    const count = parseInt(document.getElementById('animal-quiz-count').value);
    const timeLimit = parseInt(document.getElementById('animal-quiz-time').value);
    
    currentAnimalQuizQuestions = generateAnimalQuizQuestions(category, count);
    
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

function generateAnimalQuizQuestions(category, count) {
    let animals = [];
    
    if (category === 'all') {
        Object.values(ANIMALS_DB).forEach(catAnimals => {
            animals = animals.concat(catAnimals);
        });
    } else {
        animals = ANIMALS_DB[category] || [];
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
    
    const options = [correctAnimal.name, ...wrongOptions];
    const shuffledOptions = shuffleArray(options);
    
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
// SAUVEGARDE
// ============================================

function saveAnimalProgress() {
    const progress = {
        viewedAnimals: Array.from(viewedAnimals),
        lastUpdated: Date.now()
    };
    localStorage.setItem('tcvaAnimalsProgress', JSON.stringify(progress));
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
