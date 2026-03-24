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
      { answer: "SOURIS", clue: "Périphérique pour cliquer" },
      { answer: "CLAVIER", clue: "Périphérique pour écrire" },
      { answer: "ECRAN", clue: "Affiche l’image" },
      { answer: "PIXEL", clue: "Élément d’une image" },
      { answer: "WEB", clue: "Réseau de pages" },
      { answer: "USB", clue: "Port courant" },
      { answer: "MAIL", clue: "Courrier électronique" },
      { answer: "SITE", clue: "Ensemble de pages web" },
      { answer: "BUG", clue: "Erreur informatique" },
      { answer: "RAM", clue: "Mémoire vive" },
      { answer: "CODE", clue: "Langage écrit par un développeur" },
      { answer: "APP", clue: "Application" }
    ],
    moyen: [
      { answer: "SERVEUR", clue: "Machine qui héberge des données" },
      { answer: "RESEAU", clue: "Ensemble d’appareils connectés" },
      { answer: "LINUX", clue: "Système libre" },
      { answer: "SCRIPT", clue: "Suite d’instructions" },
      { answer: "DONNEE", clue: "Data en français" },
      { answer: "CLOUD", clue: "Stockage en ligne" },
      { answer: "HTML", clue: "Langage de structure web" },
      { answer: "CSS", clue: "Langage de style web" },
      { answer: "CACHE", clue: "Mémoire temporaire" },
      { answer: "LOGIN", clue: "Connexion à un compte" },
      { answer: "FICHIER", clue: "Document enregistré" },
      { answer: "NAVIGATEUR", clue: "Programme pour aller sur internet" }
    ],
    difficile: [
      { answer: "ALGORITHME", clue: "Suite d’étapes logiques" },
      { answer: "VARIABLE", clue: "Zone mémoire nommée" },
      { answer: "FRAMEWORK", clue: "Base de travail pour développer" },
      { answer: "KERNEL", clue: "Cœur du système" },
      { answer: "SECURITE", clue: "Protection contre les attaques" },
      { answer: "COMPILATEUR", clue: "Transforme du code source" },
      { answer: "DATABASE", clue: "Base de données en anglais" },
      { answer: "PYTHON", clue: "Langage très utilisé" },
      { answer: "JAVASCRIPT", clue: "Langage du web interactif" },
      { answer: "NODE", clue: "Environnement JS serveur" }
    ]
  },

  culture: {
    facile: [
      { answer: "PARIS", clue: "Capitale de la France" },
      { answer: "ROME", clue: "Capitale de l’Italie" },
      { answer: "LUNE", clue: "Satellite naturel de la Terre" },
      { answer: "MER", clue: "Grande étendue d’eau salée" },
      { answer: "ART", clue: "Peinture, musique, sculpture..." },
      { answer: "LIVRE", clue: "Objet qu’on lit" },
      { answer: "THE", clue: "Boisson chaude" },
      { answer: "OR", clue: "Métal précieux" },
      { answer: "RIO", clue: "Ville du Brésil" },
      { answer: "EAU", clue: "Liquide vital" },
      { answer: "OPERA", clue: "Spectacle musical" },
      { answer: "SOLEIL", clue: "Étoile du système solaire" }
    ],
    moyen: [
      { answer: "EVEREST", clue: "Plus haut sommet du monde" },
      { answer: "JAPON", clue: "Pays de Tokyo" },
      { answer: "NIL", clue: "Fleuve africain" },
      { answer: "ORION", clue: "Constellation célèbre" },
      { answer: "THEATRE", clue: "Art de la scène" },
      { answer: "SAHARA", clue: "Grand désert africain" },
      { answer: "VIOLON", clue: "Instrument à cordes" },
      { answer: "ZEUS", clue: "Dieu grec" },
      { answer: "MUSEE", clue: "Lieu d’exposition" },
      { answer: "TANGO", clue: "Danse argentine" },
      { answer: "PYRAMIDE", clue: "Monument d’Égypte" },
      { answer: "GEOGRAPHIE", clue: "Étude des territoires" }
    ],
    difficile: [
      { answer: "ASTRONOMIE", clue: "Science des astres" },
      { answer: "GALILEE", clue: "Savant italien" },
      { answer: "HISTOIRE", clue: "Étude du passé" },
      { answer: "SCULPTURE", clue: "Art de modeler la matière" },
      { answer: "ARCHEOLOGIE", clue: "Science des civilisations anciennes" },
      { answer: "MYTHOLOGIE", clue: "Récits des dieux antiques" },
      { answer: "BAROQUE", clue: "Style artistique européen" },
      { answer: "DYNASTIE", clue: "Suite de souverains" },
      { answer: "LITTERATURE", clue: "Ensemble des œuvres écrites" },
      { answer: "ARCHITECTURE", clue: "Art de concevoir des bâtiments" }
    ]
  },

  cinema: {
    facile: [
      { answer: "FILM", clue: "Œuvre projetée au cinéma" },
      { answer: "SON", clue: "Partie audio" },
      { answer: "STAR", clue: "Vedette" },
      { answer: "ROLE", clue: "Personnage joué" },
      { answer: "ECRAN", clue: "Surface de projection" },
      { answer: "RIRE", clue: "Réaction à une comédie" },
      { answer: "SCENE", clue: "Partie d’un film" },
      { answer: "GENRE", clue: "Comédie, action, horreur..." },
      { answer: "OSCAR", clue: "Grande récompense américaine" },
      { answer: "ART", clue: "Le cinéma en est un" },
      { answer: "DVD", clue: "Ancien support vidéo" },
      { answer: "ACTEUR", clue: "Personne qui joue un rôle" }
    ],
    moyen: [
      { answer: "MONTAGE", clue: "Assemblage des plans" },
      { answer: "TRAILER", clue: "Bande-annonce" },
      { answer: "PLATEAU", clue: "Lieu de tournage" },
      { answer: "IMAX", clue: "Format de salle géante" },
      { answer: "COMEDIE", clue: "Genre drôle" },
      { answer: "REALISATEUR", clue: "Dirige le film" },
      { answer: "PIXAR", clue: "Studio d’animation connu" },
      { answer: "SCENARIO", clue: "Histoire écrite du film" },
      { answer: "MIXAGE", clue: "Travail sur le son" },
      { answer: "CASCADE", clue: "Scène dangereuse" }
    ],
    difficile: [
      { answer: "DOCUMENTAIRE", clue: "Film basé sur le réel" },
      { answer: "NOLAN", clue: "Réalisateur d’Inception" },
      { answer: "FOLEY", clue: "Bruitage de cinéma" },
      { answer: "PANORAMIQUE", clue: "Mouvement horizontal de caméra" },
      { answer: "BLOCKBUSTER", clue: "Film au très grand succès" },
      { answer: "DOUBLAGE", clue: "Voix remplacée" },
      { answer: "PREPRODUCTION", clue: "Étape avant tournage" },
      { answer: "CGI", clue: "Effets numériques" },
      { answer: "PHOTOGRAPHIE", clue: "Image et lumière d’un film" },
      { answer: "FESTIVAL", clue: "Cannes en est un" }
    ]
  }
};

// ================= UTILS =================
function sanitize(str) {
  return (str || "")
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Z0-9]/g, "");
}

function createEmptyGrid(size) {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => null)
  );
}

function cloneGrid(grid) {
  return grid.map(row => [...row]);
}

// ================= GENERATOR =================
function canPlaceWord(grid, word, row, col, dir) {
  const size = grid.length;

  for (let i = 0; i < word.length; i++) {
    const r = row + (dir === "down" ? i : 0);
    const c = col + (dir === "across" ? i : 0);

    if (r < 0 || c < 0 || r >= size || c >= size) return false;

    const existing = grid[r][c];
    if (existing && existing !== word[i]) return false;
  }

  return true;
}

function countIntersections(grid, word, row, col, dir) {
  let intersections = 0;

  for (let i = 0; i < word.length; i++) {
    const r = row + (dir === "down" ? i : 0);
    const c = col + (dir === "across" ? i : 0);
    if (grid[r][c] === word[i]) intersections++;
  }

  return intersections;
}

function placeWord(grid, word, row, col, dir) {
  const cells = [];

  for (let i = 0; i < word.length; i++) {
    const r = row + (dir === "down" ? i : 0);
    const c = col + (dir === "across" ? i : 0);
    grid[r][c] = word[i];
    cells.push({ r, c });
  }

  return cells;
}

function generateAutoPuzzle(wordsData, size) {
  const words = wordsData
    .map(w => ({
      answer: sanitize(w.answer),
      clue: w.clue
    }))
    .filter(w => w.answer.length >= 2 && w.answer.length <= size)
    .sort((a, b) => b.answer.length - a.answer.length);

  if (!words.length) return null;

  let bestPuzzle = null;
  let bestPlacedCount = 0;
  let bestIntersections = -1;

  for (let attempt = 0; attempt < 120; attempt++) {
    const grid = createEmptyGrid(size);
    const placedWords = [];

    const first = words[0];
    const firstRow = Math.floor(size / 2);
    const firstCol = Math.max(0, Math.floor((size - first.answer.length) / 2));

    const firstCells = placeWord(grid, first.answer, firstRow, firstCol, "across");
    placedWords.push({
      answer: first.answer,
      clue: first.clue,
      row: firstRow,
      col: firstCol,
      dir: "across",
      cells: firstCells
    });

    for (let w = 1; w < words.length; w++) {
      const wordObj = words[w];
      let bestCandidate = null;

      for (let p = 0; p < placedWords.length; p++) {
        const placed = placedWords[p];

        for (let i = 0; i < wordObj.answer.length; i++) {
          for (let j = 0; j < placed.answer.length; j++) {
            if (wordObj.answer[i] !== placed.answer[j]) continue;

            let row, col, dir;

            if (placed.dir === "across") {
              dir = "down";
              row = placed.row - i;
              col = placed.col + j;
            } else {
              dir = "across";
              row = placed.row + j;
              col = placed.col - i;
            }

            if (!canPlaceWord(grid, wordObj.answer, row, col, dir)) continue;

            const intersections = countIntersections(grid, wordObj.answer, row, col, dir);

            if (!bestCandidate || intersections > bestCandidate.intersections) {
              bestCandidate = { row, col, dir, intersections };
            }
          }
        }
      }

      if (!bestCandidate) {
        for (let r = 0; r < size; r++) {
          for (let c = 0; c < size; c++) {
            for (const dir of ["across", "down"]) {
              if (!canPlaceWord(grid, wordObj.answer, r, c, dir)) continue;

              const intersections = countIntersections(grid, wordObj.answer, r, c, dir);

              if (!bestCandidate || intersections > bestCandidate.intersections) {
                bestCandidate = { row: r, col: c, dir, intersections };
              }
            }
          }
        }
      }

      if (bestCandidate) {
        const cells = placeWord(
          grid,
          wordObj.answer,
          bestCandidate.row,
          bestCandidate.col,
          bestCandidate.dir
        );

        placedWords.push({
          answer: wordObj.answer,
          clue: wordObj.clue,
          row: bestCandidate.row,
          col: bestCandidate.col,
          dir: bestCandidate.dir,
          cells
        });
      }
    }

    const totalIntersections = placedWords.reduce((acc, word) => {
      return acc + word.cells.filter(cell => {
        let count = 0;
        placedWords.forEach(wd => {
          if (wd.cells.some(c => c.r === cell.r && c.c === cell.c)) count++;
        });
        return count > 1;
      }).length;
    }, 0);

    if (
      placedWords.length > bestPlacedCount ||
      (placedWords.length === bestPlacedCount && totalIntersections > bestIntersections)
    ) {
      bestPlacedCount = placedWords.length;
      bestIntersections = totalIntersections;
      bestPuzzle = {
        size,
        title: `Grille ${size}x${size}`,
        solution: cloneGrid(grid),
        words: placedWords
      };
    }
  }

  if (!bestPuzzle || bestPuzzle.words.length < 3) return null;

  const startMap = new Map();
  let num = 1;

  bestPuzzle.words.forEach(w => {
    const key = `${w.row}-${w.col}`;
    if (!startMap.has(key)) startMap.set(key, num++);
    w.number = startMap.get(key);
  });

  return bestPuzzle;
}

// ================= PICK =================
function pickPuzzle(category, difficulty, chosenSize) {
  const wordsData = crosswordBank?.[category]?.[difficulty];
  if (!wordsData || !wordsData.length) return null;
  return generateAutoPuzzle(wordsData, chosenSize);
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
      .sort((a, b) => a.number - b.number)
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
