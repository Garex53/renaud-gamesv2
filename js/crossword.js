// ================= STATE =================
const crosswordState = {
  puzzle: null,
  cells: [],
};

// ================= WORD BANK =================
const wordBank = {
  informatique: {
    facile: [
      { answer: "SOURIS", clue: "Périphérique pour cliquer" },
      { answer: "CLAVIER", clue: "Pour écrire" },
      { answer: "ECRAN", clue: "Affiche l'image" },
      { answer: "WEB", clue: "Réseau de pages" },
      { answer: "PIXEL", clue: "Élément d’image" },
      { answer: "USB", clue: "Port courant" },
      { answer: "RAM", clue: "Mémoire vive" },
      { answer: "CODE", clue: "Langage informatique" },
      { answer: "APP", clue: "Application mobile" },
      { answer: "PC", clue: "Ordinateur personnel" }
    ],

    moyen: [
      { answer: "SERVEUR", clue: "Machine réseau" },
      { answer: "RESEAU", clue: "Connexion d’appareils" },
      { answer: "LINUX", clue: "OS libre" },
      { answer: "SCRIPT", clue: "Suite d’instructions" },
      { answer: "DONNEE", clue: "Data" },
      { answer: "CLOUD", clue: "Stockage en ligne" }
    ],

    difficile: [
      { answer: "ALGORITHME", clue: "Suite logique" },
      { answer: "VARIABLE", clue: "Stockage mémoire" },
      { answer: "COMPILER", clue: "Transforme code" },
      { answer: "FRAMEWORK", clue: "Base dev" },
      { answer: "KERNEL", clue: "Cœur système" }
    ]
  }
};

// ================= UTILS =================
function sanitize(str) {
  return (str || "")
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Z]/g, "");
}

// ================= GRID =================
function createEmptyGrid(size) {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => null)
  );
}

// ================= CHECK =================
function canPlaceWord(grid, word, row, col, dir) {
  const len = word.length;
  const size = grid.length;

  for (let i = 0; i < len; i++) {
    const r = row + (dir === "down" ? i : 0);
    const c = col + (dir === "across" ? i : 0);

    if (r >= size || c >= size) return false;

    const existing = grid[r][c];

    if (existing && existing !== word[i]) return false;
  }

  return true;
}

// ================= PLACE =================
function placeWord(grid, word, row, col, dir) {
  for (let i = 0; i < word.length; i++) {
    const r = row + (dir === "down" ? i : 0);
    const c = col + (dir === "across" ? i : 0);
    grid[r][c] = word[i];
  }
}

// ================= GENERATOR =================
function generateGrid(words, size) {
  let bestGrid = null;
  let bestScore = 0;

  for (let attempt = 0; attempt < 50; attempt++) {
    let grid = createEmptyGrid(size);
    let placed = [];

    const sorted = [...words].sort((a, b) => b.answer.length - a.answer.length);

    // placer premier mot au centre
    const first = sanitize(sorted[0].answer);
    const startCol = Math.floor((size - first.length) / 2);

    placeWord(grid, first, Math.floor(size / 2), startCol, "across");
    placed.push({ word: first });

    for (let i = 1; i < sorted.length; i++) {
      const word = sanitize(sorted[i].answer);
      let placedFlag = false;

      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          for (let dir of ["across", "down"]) {
            if (canPlaceWord(grid, word, r, c, dir)) {
              placeWord(grid, word, r, c, dir);
              placed.push({ word });
              placedFlag = true;
              break;
            }
          }
          if (placedFlag) break;
        }
        if (placedFlag) break;
      }
    }

    const score = placed.length;

    if (score > bestScore) {
      bestScore = score;
      bestGrid = grid;
    }
  }

  return bestGrid;
}

// ================= RENDER =================
function renderGrid(grid) {
  const gridEl = document.getElementById("cwGrid");
  gridEl.innerHTML = "";

  const size = grid.length;
  gridEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const wrap = document.createElement("div");
      wrap.className = "cw-cell-wrap";

      if (grid[r][c]) {
        const input = document.createElement("input");
        input.className = "cw-cell";
        input.maxLength = 1;

        wrap.appendChild(input);
      } else {
        const block = document.createElement("div");
        block.className = "cw-block";
        wrap.appendChild(block);
      }

      gridEl.appendChild(wrap);
    }
  }
}

// ================= MAIN =================
function generateCrossword() {
  const category = document.getElementById("cwCategory").value;
  const difficulty = document.getElementById("cwDifficulty").value;
  const size = Number(document.getElementById("cwSize").value);

  const words = wordBank[category][difficulty];

  const grid = generateGrid(words, size);

  if (!grid) {
    document.getElementById("cwFeedback").innerHTML =
      '<span class="bad">Impossible de générer.</span>';
    return;
  }

  renderGrid(grid);

  document.getElementById("cwFeedback").innerHTML =
    '<span class="good">Grille générée automatiquement 🔥</span>';
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  generateCrossword();
});
