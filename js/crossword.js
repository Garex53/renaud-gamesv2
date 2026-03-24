// ================= STATE =================
const crosswordState = {
  puzzle: null,
  cells: [],
  selectedWordIndex: 0,
  score: 0,
  solved: false
};

// ================= BANK =================
const crosswordBank = {
  informatique: {
    facile: [
      {
        title: "Informatique facile 8x8 A",
        size: 8,
        words: [
          { answer: "SOURIS", clue: "Périphérique pour cliquer", row: 0, col: 1, dir: "across" },
          { answer: "USB", clue: "Type de port courant", row: 2, col: 0, dir: "down" },
          { answer: "WEB", clue: "Réseau de pages", row: 4, col: 2, dir: "across" },
          { answer: "MAIL", clue: "Message électronique", row: 1, col: 5, dir: "down" },
          { answer: "PIXEL", clue: "Plus petite unité d’une image numérique", row: 6, col: 1, dir: "across" }
        ]
      },
      {
        title: "Informatique facile 8x8 B",
        size: 8,
        words: [
          { answer: "ECRAN", clue: "Affiche l’image", row: 0, col: 0, dir: "across" },
          { answer: "WIFI", clue: "Connexion sans fil", row: 0, col: 2, dir: "down" },
          { answer: "CLIC", clue: "Action de souris", row: 3, col: 3, dir: "across" },
          { answer: "CODE", clue: "Texte écrit par un développeur", row: 1, col: 6, dir: "down" },
          { answer: "JEU", clue: "Application ludique", row: 6, col: 4, dir: "across" }
        ]
      },
      {
        title: "Informatique facile 10x10 A",
        size: 10,
        words: [
          { answer: "CLAVIER", clue: "Périphérique pour écrire", row: 0, col: 1, dir: "across" },
          { answer: "RAM", clue: "Mémoire vive", row: 0, col: 3, dir: "down" },
          { answer: "SITE", clue: "Ensemble de pages web", row: 3, col: 2, dir: "across" },
          { answer: "BUG", clue: "Erreur dans un programme", row: 1, col: 7, dir: "down" },
          { answer: "APP", clue: "Application", row: 6, col: 3, dir: "across" },
          { answer: "PC", clue: "Ordinateur personnel", row: 4, col: 9, dir: "down" }
        ]
      },
      {
        title: "Informatique facile 12x12 A",
        size: 12,
        words: [
          { answer: "SOURIS", clue: "On clique avec", row: 0, col: 1, dir: "across" },
          { answer: "USB", clue: "Port très courant", row: 2, col: 0, dir: "down" },
          { answer: "WEB", clue: "Internet côté pages", row: 4, col: 2, dir: "across" },
          { answer: "MAIL", clue: "Courrier électronique", row: 1, col: 5, dir: "down" },
          { answer: "PIXEL", clue: "Élément d’une image", row: 6, col: 1, dir: "across" },
          { answer: "CLAVIER", clue: "Pour taper du texte", row: 8, col: 2, dir: "across" }
        ]
      }
    ],
    moyen: [
      {
        title: "Informatique moyen 10x10 A",
        size: 10,
        words: [
          { answer: "SERVEUR", clue: "Machine qui héberge des données", row: 0, col: 1, dir: "across" },
          { answer: "HTML", clue: "Langage de structure web", row: 0, col: 3, dir: "down" },
          { answer: "CSS", clue: "Langage de style web", row: 3, col: 2, dir: "across" },
          { answer: "API", clue: "Interface entre services", row: 1, col: 7, dir: "down" },
          { answer: "CACHE", clue: "Mémoire temporaire", row: 6, col: 1, dir: "across" }
        ]
      },
      {
        title: "Informatique moyen 10x10 B",
        size: 10,
        words: [
          { answer: "LOGICIEL", clue: "Programme installé sur un ordinateur", row: 0, col: 1, dir: "across" },
          { answer: "LINUX", clue: "Système d’exploitation libre", row: 0, col: 4, dir: "down" },
          { answer: "RESEAU", clue: "Ensemble d’appareils connectés", row: 3, col: 0, dir: "across" },
          { answer: "GPU", clue: "Processeur graphique", row: 1, col: 8, dir: "down" },
          { answer: "PORT", clue: "Canal de communication", row: 6, col: 2, dir: "across" }
        ]
      },
      {
        title: "Informatique moyen 12x12 A",
        size: 12,
        words: [
          { answer: "NAVIGATEUR", clue: "Programme pour aller sur internet", row: 0, col: 1, dir: "across" },
          { answer: "HTML", clue: "Langage de structure", row: 0, col: 4, dir: "down" },
          { answer: "DONNEE", clue: "Data en français", row: 3, col: 2, dir: "across" },
          { answer: "CLOUD", clue: "Stockage distant", row: 1, col: 8, dir: "down" },
          { answer: "SCRIPT", clue: "Suite d’instructions", row: 6, col: 1, dir: "across" },
          { answer: "BOT", clue: "Programme automatisé", row: 4, col: 10, dir: "down" }
        ]
      }
    ],
    difficile: [
      {
        title: "Informatique difficile 12x12 A",
        size: 12,
        words: [
          { answer: "ALGORITHME", clue: "Suite d’étapes pour résoudre un problème", row: 0, col: 1, dir: "across" },
          { answer: "PYTHON", clue: "Langage de programmation très utilisé", row: 0, col: 4, dir: "down" },
          { answer: "VARIABLE", clue: "Zone mémoire nommée", row: 3, col: 1, dir: "across" },
          { answer: "SQL", clue: "Langage de base de données", row: 2, col: 9, dir: "down" },
          { answer: "PATCH", clue: "Mise à jour corrective", row: 8, col: 3, dir: "across" }
        ]
      },
      {
        title: "Informatique difficile 12x12 B",
        size: 12,
        words: [
          { answer: "FRAMEWORK", clue: "Base de travail pour développer", row: 0, col: 1, dir: "across" },
          { answer: "KERNEL", clue: "Cœur d’un système", row: 0, col: 5, dir: "down" },
          { answer: "SECURITE", clue: "Protection contre les attaques", row: 3, col: 1, dir: "across" },
          { answer: "NODE", clue: "Environnement JavaScript serveur", row: 2, col: 9, dir: "down" },
          { answer: "COMPILER", clue: "Transformer du code source", row: 8, col: 2, dir: "across" }
        ]
      }
    ]
  },

  culture: {
    facile: [
      {
        title: "Culture facile 8x8 A",
        size: 8,
        words: [
          { answer: "PARIS", clue: "Capitale de la France", row: 0, col: 1, dir: "across" },
          { answer: "ART", clue: "Peinture, musique, sculpture…", row: 0, col: 3, dir: "down" },
          { answer: "LUNE", clue: "Satellite naturel de la Terre", row: 3, col: 2, dir: "across" },
          { answer: "MER", clue: "Grande étendue d’eau salée", row: 1, col: 6, dir: "down" },
          { answer: "ROME", clue: "Capitale de l’Italie", row: 6, col: 1, dir: "across" }
        ]
      },
      {
        title: "Culture facile 10x10 A",
        size: 10,
        words: [
          { answer: "AFRIQUE", clue: "Continent", row: 0, col: 1, dir: "across" },
          { answer: "RIO", clue: "Ville du Brésil", row: 0, col: 4, dir: "down" },
          { answer: "SOLEIL", clue: "Étoile du système solaire", row: 3, col: 1, dir: "across" },
          { answer: "EAU", clue: "Liquide vital", row: 2, col: 7, dir: "down" },
          { answer: "OPERA", clue: "Spectacle musical", row: 6, col: 2, dir: "across" }
        ]
      },
      {
        title: "Culture facile 12x12 A",
        size: 12,
        words: [
          { answer: "BELGIQUE", clue: "Pays de Bruxelles", row: 0, col: 1, dir: "across" },
          { answer: "JAZZ", clue: "Genre musical", row: 0, col: 3, dir: "down" },
          { answer: "LIVRE", clue: "Objet qu’on lit", row: 3, col: 2, dir: "across" },
          { answer: "THE", clue: "Boisson chaude", row: 2, col: 8, dir: "down" },
          { answer: "OR", clue: "Métal précieux", row: 6, col: 5, dir: "across" },
          { answer: "ART", clue: "Expression créative", row: 8, col: 1, dir: "across" }
        ]
      }
    ],
    moyen: [
      {
        title: "Culture moyen 10x10 A",
        size: 10,
        words: [
          { answer: "EVEREST", clue: "Plus haut sommet du monde", row: 0, col: 1, dir: "across" },
          { answer: "JAPON", clue: "Pays de Tokyo", row: 0, col: 3, dir: "down" },
          { answer: "NIL", clue: "Long fleuve africain", row: 3, col: 1, dir: "across" },
          { answer: "ORION", clue: "Constellation célèbre", row: 2, col: 8, dir: "down" },
          { answer: "THEATRE", clue: "Art de la scène", row: 6, col: 1, dir: "across" }
        ]
      },
      {
        title: "Culture moyen 12x12 A",
        size: 12,
        words: [
          { answer: "RENAISSANCE", clue: "Grand mouvement artistique européen", row: 0, col: 0, dir: "across" },
          { answer: "MUSEE", clue: "Lieu d’exposition", row: 0, col: 5, dir: "down" },
          { answer: "SAHARA", clue: "Grand désert africain", row: 3, col: 1, dir: "across" },
          { answer: "VIOLON", clue: "Instrument à cordes", row: 6, col: 2, dir: "across" },
          { answer: "ZEUS", clue: "Dieu grec", row: 2, col: 9, dir: "down" }
        ]
      }
    ],
    difficile: [
      {
        title: "Culture difficile 12x12 A",
        size: 12,
        words: [
          { answer: "ASTRONOMIE", clue: "Science des astres", row: 0, col: 1, dir: "across" },
          { answer: "GALILEE", clue: "Savant italien", row: 0, col: 5, dir: "down" },
          { answer: "HISTOIRE", clue: "Étude du passé", row: 4, col: 1, dir: "across" },
          { answer: "OPERA", clue: "Art lyrique", row: 3, col: 9, dir: "down" },
          { answer: "SCULPTURE", clue: "Art de modeler la matière", row: 8, col: 1, dir: "across" }
        ]
      },
      {
        title: "Culture difficile 12x12 B",
        size: 12,
        words: [
          { answer: "ARCHEOLOGIE", clue: "Science des civilisations anciennes", row: 0, col: 0, dir: "across" },
          { answer: "ATLAS", clue: "Livre de cartes", row: 0, col: 6, dir: "down" },
          { answer: "MYTHOLOGIE", clue: "Récits des dieux antiques", row: 3, col: 1, dir: "across" },
          { answer: "BAROQUE", clue: "Style artistique", row: 2, col: 10, dir: "down" },
          { answer: "DYNASTIE", clue: "Suite de souverains", row: 8, col: 2, dir: "across" }
        ]
      }
    ]
  },

  cinema: {
    facile: [
      {
        title: "Cinéma facile 8x8 A",
        size: 8,
        words: [
          { answer: "FILM", clue: "Œuvre projetée au cinéma", row: 0, col: 1, dir: "across" },
          { answer: "SON", clue: "Partie audio", row: 0, col: 3, dir: "down" },
          { answer: "ACTEUR", clue: "Personne qui joue un rôle", row: 3, col: 1, dir: "across" },
          { answer: "STAR", clue: "Vedette", row: 6, col: 2, dir: "across" }
        ]
      },
      {
        title: "Cinéma facile 10x10 A",
        size: 10,
        words: [
          { answer: "ECRAN", clue: "Surface de projection", row: 0, col: 1, dir: "across" },
          { answer: "ROLE", clue: "Personnage joué", row: 3, col: 2, dir: "across" },
          { answer: "OSCAR", clue: "Grande récompense américaine", row: 0, col: 5, dir: "down" },
          { answer: "RIRE", clue: "Réaction à une comédie", row: 6, col: 1, dir: "across" },
          { answer: "ART", clue: "Le cinéma en est un", row: 1, col: 8, dir: "down" }
        ]
      },
      {
        title: "Cinéma facile 12x12 A",
        size: 12,
        words: [
          { answer: "SCENE", clue: "Partie d’un film", row: 0, col: 1, dir: "across" },
          { answer: "GENRE", clue: "Comédie, horreur, action...", row: 3, col: 2, dir: "across" },
          { answer: "SON", clue: "Partie audio", row: 0, col: 5, dir: "down" },
          { answer: "STAR", clue: "Vedette", row: 6, col: 1, dir: "across" },
          { answer: "FILM", clue: "Œuvre projetée", row: 8, col: 2, dir: "across" }
        ]
      }
    ],
    moyen: [
      {
        title: "Cinéma moyen 10x10 A",
        size: 10,
        words: [
          { answer: "MONTAGE", clue: "Assemblage des plans", row: 0, col: 1, dir: "across" },
          { answer: "TRAILER", clue: "Bande-annonce", row: 0, col: 4, dir: "down" },
          { answer: "PLATEAU", clue: "Lieu de tournage", row: 3, col: 1, dir: "across" },
          { answer: "IMAX", clue: "Format de salle géante", row: 2, col: 8, dir: "down" },
          { answer: "COMEDIE", clue: "Genre drôle", row: 6, col: 1, dir: "across" }
        ]
      },
      {
        title: "Cinéma moyen 12x12 A",
        size: 12,
        words: [
          { answer: "REALISATEUR", clue: "Dirige un film", row: 0, col: 0, dir: "across" },
          { answer: "PIXAR", clue: "Studio d’animation connu", row: 0, col: 4, dir: "down" },
          { answer: "SCENARIO", clue: "Histoire écrite du film", row: 3, col: 1, dir: "across" },
          { answer: "MIXAGE", clue: "Travail sur le son", row: 2, col: 9, dir: "down" },
          { answer: "CASCADE", clue: "Scène dangereuse", row: 8, col: 1, dir: "across" }
        ]
      }
    ],
    difficile: [
      {
        title: "Cinéma difficile 12x12 A",
        size: 12,
        words: [
          { answer: "DOCUMENTAIRE", clue: "Film basé sur le réel", row: 0, col: 0, dir: "across" },
          { answer: "NOLAN", clue: "Réalisateur d’Inception", row: 0, col: 5, dir: "down" },
          { answer: "FOLEY", clue: "Bruitage de cinéma", row: 3, col: 8, dir: "down" },
          { answer: "PANORAMIQUE", clue: "Mouvement de caméra horizontal", row: 7, col: 0, dir: "across" }
        ]
      },
      {
        title: "Cinéma difficile 12x12 B",
        size: 12,
        words: [
          { answer: "BLOCKBUSTER", clue: "Film au très grand succès", row: 0, col: 0, dir: "across" },
          { answer: "DOUBLAGE", clue: "Voix remplacée", row: 0, col: 6, dir: "down" },
          { answer: "PREPRODUCTION", clue: "Étape avant le tournage", row: 3, col: 0, dir: "across" },
          { answer: "CGI", clue: "Effets numériques", row: 2, col: 9, dir: "down" }
        ]
      }
    ]
  }
};

// ================= UTILS =================
function clonePuzzle(p) {
  return JSON.parse(JSON.stringify(p));
}

function sanitize(str) {
  return (str || "")
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Z0-9]/g, "");
}

// ================= BUILD GRID =================
function tryBuildPuzzle(sourcePuzzle, chosenSize) {
  const puzzle = clonePuzzle(sourcePuzzle);
  const size = chosenSize;

  const grid = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => null)
  );

  for (const w of puzzle.words) {
    const answer = sanitize(w.answer);
    const len = answer.length;

    w.answer = answer;
    w.cells = [];

    if (w.row >= size || w.col >= size) continue;
    if (w.dir === "across" && w.col + len > size) continue;
    if (w.dir === "down" && w.row + len > size) continue;

    for (let j = 0; j < len; j++) {
      const r = w.row + (w.dir === "down" ? j : 0);
      const c = w.col + (w.dir === "across" ? j : 0);

      // 💥 IMPORTANT : on remplace au lieu de bloquer
      grid[r][c] = answer[j];

      w.cells.push({ r, c });
    }
  }

  let num = 1;
  const startMap = new Map();

  puzzle.words.forEach((w) => {
    const key = `${w.row}-${w.col}`;
    if (!startMap.has(key)) startMap.set(key, num++);
    w.number = startMap.get(key);
  });

  puzzle.size = size;
  puzzle.solution = grid;

  return puzzle;
}

// ================= PICK =================
function pickPuzzle(category, difficulty, chosenSize) {
  const categoryData = crosswordBank[category];
  if (!categoryData) return null;

  const difficultyData = categoryData[difficulty];
  if (!difficultyData || !difficultyData.length) return null;

  // 1) priorité à la taille exacte
  let list = difficultyData
    .filter(p => Number(p.size) === Number(chosenSize))
    .map(p => tryBuildPuzzle(p, Number(p.size)))
    .filter(Boolean);

  if (list.length) {
    return list[Math.floor(Math.random() * list.length)];
  }

  // 2) sinon on prend n'importe quelle grille valide de la même difficulté
  list = difficultyData
    .map(p => tryBuildPuzzle(p, Number(p.size)))
    .filter(Boolean);

  if (list.length) {
    return list[Math.floor(Math.random() * list.length)];
  }

  return null;
}

// ================= GENERATE =================
function generateCrossword() {
  const category = document.getElementById("cwCategory").value;
  const difficulty = document.getElementById("cwDifficulty").value;
  const chosenSize = Number(document.getElementById("cwSize").value);

  const puzzle = pickPuzzle(category, difficulty, chosenSize);

  if (!puzzle) {
    document.getElementById("cwGrid").innerHTML = "";
    document.getElementById("cwClues").innerHTML = "";
    document.getElementById("cwFeedback").innerHTML =
      '<span class="bad">Aucune grille compatible.</span>';
    document.getElementById("cwProgressLabel").textContent = "0%";
    document.getElementById("cwProgressBar").style.width = "0%";
    document.getElementById("cwGridScore").textContent = "0";
    return;
  }

  crosswordState.puzzle = puzzle;
  crosswordState.cells = [];
  crosswordState.selectedWordIndex = 0;
  crosswordState.score = 0;
  crosswordState.solved = false;

  renderCrossword();
  updateCrosswordProgress();

  document.getElementById("cwFeedback").innerHTML =
    `<span class="good">Nouvelle grille générée en ${puzzle.size}x${puzzle.size}.</span>`;
}

// ================= RENDER =================
function renderCrossword() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle) return;

  const gridEl = document.getElementById("cwGrid");
  const cluesEl = document.getElementById("cwClues");

  gridEl.innerHTML = "";
  cluesEl.innerHTML = "";
  gridEl.style.gridTemplateColumns = `repeat(${puzzle.size}, 1fr)`;

  crosswordState.cells = Array.from({ length: puzzle.size }, () =>
    Array.from({ length: puzzle.size }, () => null)
  );

  const numberMap = {};
  puzzle.words.forEach((w) => {
    numberMap[`${w.row}-${w.col}`] = w.number;
  });

  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const wrap = document.createElement("div");
      wrap.className = "cw-cell-wrap";

      if (puzzle.solution[r][c]) {
        const input = document.createElement("input");
        input.className = "cw-cell";
        input.maxLength = 1;
        input.dataset.r = r;
        input.dataset.c = c;

        input.addEventListener("input", (e) => {
          e.target.value = sanitize(e.target.value).slice(0, 1);
          if (e.target.value) moveToNextCell(r, c);
          updateCrosswordProgress();
        });

        input.addEventListener("keydown", (e) => {
          if (e.key === "ArrowUp") focusCell(r - 1, c);
          else if (e.key === "ArrowDown") focusCell(r + 1, c);
          else if (e.key === "ArrowLeft") focusCell(r, c - 1);
          else if (e.key === "ArrowRight") focusCell(r, c + 1);
          else if (e.key === "Backspace" && !e.target.value) moveToPreviousCell(r, c);
        });

        wrap.appendChild(input);
        crosswordState.cells[r][c] = input;

        if (numberMap[`${r}-${c}`]) {
          const num = document.createElement("span");
          num.className = "cw-number";
          num.textContent = numberMap[`${r}-${c}`];
          wrap.appendChild(num);
        }
      } else {
        const block = document.createElement("div");
        block.className = "cw-block";
        wrap.appendChild(block);
      }

      gridEl.appendChild(wrap);
    }
  }

  const info = document.createElement("div");
  info.className = "note";
  info.style.marginBottom = "12px";
  info.textContent = `Grille : ${puzzle.title} — ${puzzle.size}x${puzzle.size}`;
  cluesEl.appendChild(info);

  ["across", "down"].forEach((dir) => {
    const title = dir === "across" ? "Horizontal" : "Vertical";
    const group = document.createElement("div");
    group.className = "clue-group";
    group.innerHTML = `<h3 style="margin-bottom:10px;">${title}</h3>`;

    puzzle.words
      .filter((w) => w.dir === dir)
      .forEach((w) => {
        const div = document.createElement("div");
        div.className = "clue-item";
        div.innerHTML = `<strong>${w.number}.</strong> ${w.clue} <span class="small">(${w.answer.length} lettres)</span>`;
        div.style.cursor = "pointer";
        div.onclick = () => focusWord(puzzle.words.indexOf(w));
        group.appendChild(div);
      });

    cluesEl.appendChild(group);
  });

  focusWord(0);
}

// ================= NAV =================
function focusWord(index) {
  const word = crosswordState.puzzle?.words[index];
  crosswordState.selectedWordIndex = index;
  if (word && word.cells.length) {
    focusCell(word.cells[0].r, word.cells[0].c);
  }
}

function focusCell(r, c) {
  const cell = crosswordState.cells?.[r]?.[c];
  if (cell) {
    cell.focus();
    cell.select();
  }
}

function moveToNextCell(r, c) {
  const word = crosswordState.puzzle.words[crosswordState.selectedWordIndex];
  if (word) {
    const idx = word.cells.findIndex((pos) => pos.r === r && pos.c === c);
    if (idx >= 0 && idx < word.cells.length - 1) {
      focusCell(word.cells[idx + 1].r, word.cells[idx + 1].c);
      return;
    }
  }

  for (let i = r; i < crosswordState.cells.length; i++) {
    for (let j = i === r ? c + 1 : 0; j < crosswordState.cells[i].length; j++) {
      if (crosswordState.cells[i][j]) {
        focusCell(i, j);
        return;
      }
    }
  }
}

function moveToPreviousCell(r, c) {
  for (let i = r; i >= 0; i--) {
    for (let j = i === r ? c - 1 : crosswordState.cells[i].length - 1; j >= 0; j--) {
      if (crosswordState.cells[i][j]) {
        focusCell(i, j);
        return;
      }
    }
  }
}

// ================= PROGRESS =================
function getCrosswordFilledCount() {
  const puzzle = crosswordState.puzzle;
  let total = 0;
  let filled = 0;

  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      if (puzzle.solution[r][c]) {
        total++;
        if (crosswordState.cells[r][c] && crosswordState.cells[r][c].value) {
          filled++;
        }
      }
    }
  }

  return { total, filled };
}

function updateCrosswordProgress() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle) return;

  const { total, filled } = getCrosswordFilledCount();
  const percent = total ? Math.round((filled / total) * 100) : 0;

  document.getElementById("cwProgressLabel").textContent = percent + "%";
  document.getElementById("cwProgressBar").style.width = percent + "%";
  document.getElementById("cwGridScore").textContent = crosswordState.score;
}

// ================= CHECK =================
function clearCellStyles() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle) return;

  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const cell = crosswordState.cells[r][c];
      if (cell) {
        cell.classList.remove("correct", "wrong", "hint", "reveal");
      }
    }
  }
}

function checkCrossword() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle) return;

  let wrong = 0;
  let complete = true;
  clearCellStyles();

  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const sol = puzzle.solution[r][c];
      const cell = crosswordState.cells[r][c];

      if (sol && cell) {
        const val = sanitize(cell.value);

        if (!val) complete = false;

        if (val === sol) {
          cell.classList.add("correct");
        } else {
          if (val) cell.classList.add("wrong");
          wrong++;
          complete = false;
        }
      }
    }
  }

  if (complete && wrong === 0) {
    if (!crosswordState.solved) {
      crosswordState.solved = true;
      const bonus = 100 + Math.max(0, 60 - crosswordState.score);
      crosswordState.score += bonus;

      if (window.appState?.scores) {
        window.appState.scores.crossword += 1;
        window.appState.scores.total += crosswordState.score;
      }

      if (typeof saveScores === "function") saveScores();
      if (typeof renderStats === "function") renderStats();
    }

    document.getElementById("cwFeedback").innerHTML =
      `<span class="good">Bravo, grille terminée ! +${crosswordState.score} points</span>`;
  } else {
    document.getElementById("cwFeedback").innerHTML =
      `<span class="warnText">Il reste ${wrong} erreur(s) ou des cases vides.</span>`;
  }

  updateCrosswordProgress();
}

// ================= HELPERS =================
function giveLetterHint() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle || crosswordState.solved) return;

  const empties = [];

  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      if (
        puzzle.solution[r][c] &&
        sanitize(crosswordState.cells[r][c].value) !== puzzle.solution[r][c]
      ) {
        empties.push({ r, c });
      }
    }
  }

  if (!empties.length) return;

  const pick = empties[Math.floor(Math.random() * empties.length)];
  crosswordState.cells[pick.r][pick.c].value = puzzle.solution[pick.r][pick.c];
  crosswordState.cells[pick.r][pick.c].classList.add("hint");
  crosswordState.score = Math.max(0, crosswordState.score - 4);
  updateCrosswordProgress();
}

function revealWord() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle || crosswordState.solved) return;

  const remainingWords = puzzle.words.filter((w) =>
    w.cells.some((pos) => sanitize(crosswordState.cells[pos.r][pos.c].value) !== puzzle.solution[pos.r][pos.c])
  );

  if (!remainingWords.length) return;

  const word = remainingWords[Math.floor(Math.random() * remainingWords.length)];

  word.cells.forEach((pos) => {
    crosswordState.cells[pos.r][pos.c].value = puzzle.solution[pos.r][pos.c];
    crosswordState.cells[pos.r][pos.c].classList.add("reveal");
  });

  crosswordState.score = Math.max(0, crosswordState.score - 12);
  updateCrosswordProgress();
}

function clearWrongCells() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle) return;

  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const sol = puzzle.solution[r][c];
      const cell = crosswordState.cells[r][c];

      if (sol && cell && cell.value && sanitize(cell.value) !== sol) {
        cell.value = "";
      }

      if (cell) {
        cell.classList.remove("wrong");
      }
    }
  }

  updateCrosswordProgress();
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("cwGrid")) {
    generateCrossword();
  }
});
