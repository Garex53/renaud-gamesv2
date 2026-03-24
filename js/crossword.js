const crosswordState = {
  puzzle: null,
  cells: [],
  selectedWordIndex: 0,
  score: 0,
  solved: false
};

const crosswordBank = {
  informatique: {
    facile: [
      {
        title: 'Infos facile 8 A',
        size: 8,
        words: [
          { answer: 'SOURIS', clue: 'Périphérique pour cliquer', row: 0, col: 1, dir: 'across' },
          { answer: 'USB', clue: 'Type de port courant', row: 2, col: 0, dir: 'down' },
          { answer: 'WEB', clue: 'Réseau de pages', row: 4, col: 2, dir: 'across' },
          { answer: 'MAIL', clue: 'Message électronique', row: 1, col: 5, dir: 'down' },
          { answer: 'PIXEL', clue: 'Plus petite unité d’une image numérique', row: 6, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Infos facile 10 A',
        size: 10,
        words: [
          { answer: 'CLAVIER', clue: 'Périphérique pour écrire', row: 0, col: 1, dir: 'across' },
          { answer: 'RAM', clue: 'Mémoire vive', row: 0, col: 3, dir: 'down' },
          { answer: 'BUG', clue: 'Erreur dans un programme', row: 3, col: 2, dir: 'across' },
          { answer: 'SITE', clue: 'Ensemble de pages web', row: 6, col: 2, dir: 'across' },
          { answer: 'APP', clue: 'Application', row: 2, col: 7, dir: 'down' },
          { answer: 'CODE', clue: 'Texte écrit par le développeur', row: 8, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Infos facile 12 A',
        size: 12,
        words: [
          { answer: 'ECRAN', clue: 'Affiche l’image', row: 0, col: 1, dir: 'across' },
          { answer: 'WIFI', clue: 'Connexion sans fil', row: 0, col: 3, dir: 'down' },
          { answer: 'CLIC', clue: 'Action de souris', row: 4, col: 2, dir: 'across' },
          { answer: 'JEU', clue: 'Application ludique', row: 7, col: 4, dir: 'across' },
          { answer: 'DATA', clue: 'Données en anglais', row: 2, col: 8, dir: 'down' },
          { answer: 'PIXEL', clue: 'Unité d’image', row: 10, col: 2, dir: 'across' }
        ]
      }
    ],
    moyen: [
      {
        title: 'Infos moyen 8 A',
        size: 8,
        words: [
          { answer: 'CACHE', clue: 'Mémoire temporaire', row: 0, col: 1, dir: 'across' },
          { answer: 'API', clue: 'Interface de communication', row: 0, col: 3, dir: 'down' },
          { answer: 'CSS', clue: 'Langage de style', row: 3, col: 2, dir: 'across' },
          { answer: 'BOT', clue: 'Programme automatisé', row: 5, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Infos moyen 10 A',
        size: 10,
        words: [
          { answer: 'SERVEUR', clue: 'Machine qui héberge des données', row: 0, col: 1, dir: 'across' },
          { answer: 'HTML', clue: 'Langage de structure web', row: 0, col: 3, dir: 'down' },
          { answer: 'CSS', clue: 'Langage de style web', row: 3, col: 2, dir: 'across' },
          { answer: 'API', clue: 'Interface pour un service', row: 1, col: 7, dir: 'down' },
          { answer: 'CACHE', clue: 'Mémoire temporaire', row: 6, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Infos moyen 12 A',
        size: 12,
        words: [
          { answer: 'LOGICIEL', clue: 'Programme installé', row: 0, col: 1, dir: 'across' },
          { answer: 'LINUX', clue: 'Système libre', row: 0, col: 4, dir: 'down' },
          { answer: 'RESEAU', clue: 'Ensemble d’appareils connectés', row: 4, col: 1, dir: 'across' },
          { answer: 'GPU', clue: 'Processeur graphique', row: 1, col: 8, dir: 'down' },
          { answer: 'PORT', clue: 'Canal de communication', row: 8, col: 2, dir: 'across' },
          { answer: 'FICHIER', clue: 'Document enregistré', row: 10, col: 1, dir: 'across' }
        ]
      }
    ],
    difficile: [
      {
        title: 'Infos difficile 8 A',
        size: 8,
        words: [
          { answer: 'PATCH', clue: 'Mise à jour corrective', row: 0, col: 1, dir: 'across' },
          { answer: 'SQL', clue: 'Langage de base de données', row: 0, col: 3, dir: 'down' },
          { answer: 'NODE', clue: 'Environnement JavaScript', row: 4, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Infos difficile 10 A',
        size: 10,
        words: [
          { answer: 'ALGORITHME', clue: 'Suite d’étapes pour résoudre un problème', row: 0, col: 0, dir: 'across' },
          { answer: 'PYTHON', clue: 'Langage très utilisé', row: 0, col: 4, dir: 'down' },
          { answer: 'PATCH', clue: 'Mise à jour corrective', row: 7, col: 2, dir: 'across' }
        ]
      },
      {
        title: 'Infos difficile 12 A',
        size: 12,
        words: [
          { answer: 'ALGORITHME', clue: 'Suite d’étapes pour résoudre un problème', row: 0, col: 1, dir: 'across' },
          { answer: 'PYTHON', clue: 'Langage très utilisé', row: 0, col: 4, dir: 'down' },
          { answer: 'VARIABLE', clue: 'Zone mémoire nommée', row: 4, col: 1, dir: 'across' },
          { answer: 'SQL', clue: 'Langage de base de données', row: 2, col: 9, dir: 'down' },
          { answer: 'PATCH', clue: 'Mise à jour corrective', row: 9, col: 3, dir: 'across' }
        ]
      }
    ]
  },

  culture: {
    facile: [
      {
        title: 'Culture facile 8 A',
        size: 8,
        words: [
          { answer: 'PARIS', clue: 'Capitale de la France', row: 0, col: 1, dir: 'across' },
          { answer: 'ART', clue: 'Peinture, musique, sculpture…', row: 0, col: 3, dir: 'down' },
          { answer: 'LUNE', clue: 'Satellite naturel de la Terre', row: 3, col: 2, dir: 'across' },
          { answer: 'MER', clue: 'Grande étendue d’eau salée', row: 1, col: 6, dir: 'down' },
          { answer: 'ROME', clue: 'Capitale de l’Italie', row: 6, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Culture facile 10 A',
        size: 10,
        words: [
          { answer: 'AFRIQUE', clue: 'Continent', row: 0, col: 1, dir: 'across' },
          { answer: 'RIO', clue: 'Ville du Brésil', row: 0, col: 4, dir: 'down' },
          { answer: 'SOLEIL', clue: 'Étoile du système solaire', row: 4, col: 1, dir: 'across' },
          { answer: 'EAU', clue: 'Liquide vital', row: 2, col: 7, dir: 'down' },
          { answer: 'OPERA', clue: 'Spectacle musical', row: 8, col: 2, dir: 'across' }
        ]
      },
      {
        title: 'Culture facile 12 A',
        size: 12,
        words: [
          { answer: 'BELGIQUE', clue: 'Pays de Bruxelles', row: 0, col: 1, dir: 'across' },
          { answer: 'JAZZ', clue: 'Genre musical', row: 0, col: 3, dir: 'down' },
          { answer: 'LIVRE', clue: 'Objet qu’on lit', row: 4, col: 2, dir: 'across' },
          { answer: 'THE', clue: 'Boisson chaude', row: 2, col: 8, dir: 'down' },
          { answer: 'OR', clue: 'Métal précieux', row: 9, col: 4, dir: 'across' }
        ]
      }
    ],
    moyen: [
      {
        title: 'Culture moyen 8 A',
        size: 8,
        words: [
          { answer: 'NIL', clue: 'Long fleuve africain', row: 0, col: 1, dir: 'across' },
          { answer: 'ZEUS', clue: 'Dieu grec', row: 0, col: 2, dir: 'down' },
          { answer: 'VIOLON', clue: 'Instrument à cordes', row: 4, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Culture moyen 10 A',
        size: 10,
        words: [
          { answer: 'EVEREST', clue: 'Plus haut sommet du monde', row: 0, col: 1, dir: 'across' },
          { answer: 'JAPON', clue: 'Pays de Tokyo', row: 0, col: 3, dir: 'down' },
          { answer: 'NIL', clue: 'Long fleuve africain', row: 3, col: 1, dir: 'across' },
          { answer: 'ORION', clue: 'Constellation célèbre', row: 2, col: 8, dir: 'down' },
          { answer: 'THEATRE', clue: 'Art de la scène', row: 6, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Culture moyen 12 A',
        size: 12,
        words: [
          { answer: 'PYRAMIDE', clue: 'Monument d’Égypte', row: 0, col: 1, dir: 'across' },
          { answer: 'ASIE', clue: 'Continent', row: 0, col: 2, dir: 'down' },
          { answer: 'TANGO', clue: 'Danse argentine', row: 4, col: 2, dir: 'across' },
          { answer: 'NORD', clue: 'Point cardinal', row: 3, col: 9, dir: 'down' },
          { answer: 'GEOGRAPHIE', clue: 'Étude des territoires', row: 8, col: 1, dir: 'across' }
        ]
      }
    ],
    difficile: [
      {
        title: 'Culture difficile 8 A',
        size: 8,
        words: [
          { answer: 'OPERA', clue: 'Art lyrique', row: 0, col: 1, dir: 'across' },
          { answer: 'ATLAS', clue: 'Livre de cartes', row: 0, col: 3, dir: 'down' },
          { answer: 'JAZZ', clue: 'Musique improvisée', row: 4, col: 2, dir: 'across' }
        ]
      },
      {
        title: 'Culture difficile 10 A',
        size: 10,
        words: [
          { answer: 'ASTRONOMIE', clue: 'Science des astres', row: 0, col: 0, dir: 'across' },
          { answer: 'GALILEE', clue: 'Savant italien', row: 0, col: 5, dir: 'down' },
          { answer: 'HISTOIRE', clue: 'Étude du passé', row: 6, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Culture difficile 12 A',
        size: 12,
        words: [
          { answer: 'ASTRONOMIE', clue: 'Science des astres', row: 0, col: 1, dir: 'across' },
          { answer: 'GALILEE', clue: 'Savant italien', row: 0, col: 5, dir: 'down' },
          { answer: 'HISTOIRE', clue: 'Étude du passé', row: 4, col: 1, dir: 'across' },
          { answer: 'OPERA', clue: 'Art lyrique', row: 3, col: 9, dir: 'down' },
          { answer: 'SCULPTURE', clue: 'Art de modeler la matière', row: 8, col: 1, dir: 'across' }
        ]
      }
    ]
  },

  cinema: {
    facile: [
      {
        title: 'Cinéma facile 8 A',
        size: 8,
        words: [
          { answer: 'FILM', clue: 'Œuvre projetée au cinéma', row: 0, col: 1, dir: 'across' },
          { answer: 'SON', clue: 'Partie audio', row: 0, col: 3, dir: 'down' },
          { answer: 'ACTEUR', clue: 'Personne qui joue un rôle', row: 3, col: 1, dir: 'across' },
          { answer: 'STAR', clue: 'Vedette', row: 6, col: 2, dir: 'across' }
        ]
      },
      {
        title: 'Cinéma facile 10 A',
        size: 10,
        words: [
          { answer: 'ECRAN', clue: 'Surface de projection', row: 0, col: 1, dir: 'across' },
          { answer: 'DVD', clue: 'Ancien support vidéo', row: 0, col: 2, dir: 'down' },
          { answer: 'ROLE', clue: 'Personnage joué', row: 4, col: 2, dir: 'across' },
          { answer: 'ART', clue: 'Le cinéma en est un', row: 1, col: 7, dir: 'down' },
          { answer: 'RIRE', clue: 'Réaction à une comédie', row: 8, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Cinéma facile 12 A',
        size: 12,
        words: [
          { answer: 'SCENE', clue: 'Partie d’un film', row: 0, col: 1, dir: 'across' },
          { answer: 'OSCAR', clue: 'Grande récompense américaine', row: 0, col: 4, dir: 'down' },
          { answer: 'GENRE', clue: 'Comédie, action, horreur…', row: 4, col: 2, dir: 'across' },
          { answer: 'VU', clue: 'Déjà regardé', row: 2, col: 8, dir: 'down' },
          { answer: 'FILM', clue: 'Œuvre de cinéma', row: 9, col: 3, dir: 'across' }
        ]
      }
    ],
    moyen: [
      {
        title: 'Cinéma moyen 8 A',
        size: 8,
        words: [
          { answer: 'IMAX', clue: 'Format de salle géante', row: 0, col: 1, dir: 'across' },
          { answer: 'FX', clue: 'Abréviation effets spéciaux', row: 0, col: 2, dir: 'down' },
          { answer: 'ANIME', clue: 'Film japonais d’animation', row: 4, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Cinéma moyen 10 A',
        size: 10,
        words: [
          { answer: 'MONTAGE', clue: 'Assemblage des plans', row: 0, col: 1, dir: 'across' },
          { answer: 'TRAILER', clue: 'Bande-annonce', row: 0, col: 4, dir: 'down' },
          { answer: 'PLATEAU', clue: 'Lieu de tournage', row: 3, col: 1, dir: 'across' },
          { answer: 'IMAX', clue: 'Format de salle géante', row: 2, col: 8, dir: 'down' },
          { answer: 'COMEDIE', clue: 'Genre drôle', row: 6, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Cinéma moyen 12 A',
        size: 12,
        words: [
          { answer: 'PROJECTION', clue: 'Diffusion en salle', row: 0, col: 1, dir: 'across' },
          { answer: 'MARVEL', clue: 'Univers de super-héros', row: 0, col: 5, dir: 'down' },
          { answer: 'SCENARIO', clue: 'Histoire écrite du film', row: 4, col: 1, dir: 'across' },
          { answer: 'FX', clue: 'Effets spéciaux abrégés', row: 3, col: 9, dir: 'down' },
          { answer: 'CASCADEUR', clue: 'Fait les scènes dangereuses', row: 8, col: 1, dir: 'across' }
        ]
      }
    ],
    difficile: [
      {
        title: 'Cinéma difficile 8 A',
        size: 8,
        words: [
          { answer: 'FOLEY', clue: 'Bruitage de cinéma', row: 0, col: 1, dir: 'across' },
          { answer: 'CGI', clue: 'Effets numériques', row: 0, col: 3, dir: 'down' },
          { answer: 'NOLAN', clue: 'Réalisateur d’Inception', row: 4, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Cinéma difficile 10 A',
        size: 10,
        words: [
          { answer: 'NOLAN', clue: 'Réalisateur d’Inception', row: 0, col: 1, dir: 'across' },
          { answer: 'FOLEY', clue: 'Bruitage de cinéma', row: 0, col: 3, dir: 'down' },
          { answer: 'SEQUEL', clue: 'Suite d’un film en anglais', row: 5, col: 1, dir: 'across' }
        ]
      },
      {
        title: 'Cinéma difficile 12 A',
        size: 12,
        words: [
          { answer: 'DOCUMENTAIRE', clue: 'Film basé sur le réel', row: 0, col: 0, dir: 'across' },
          { answer: 'NOLAN', clue: 'Réalisateur d’Inception', row: 0, col: 5, dir: 'down' },
          { answer: 'FOLEY', clue: 'Bruitage de cinéma', row: 3, col: 8, dir: 'down' },
          { answer: 'PANORAMIQUE', clue: 'Mouvement de caméra horizontal', row: 7, col: 0, dir: 'across' }
        ]
      }
    ]
  }
};

function clonePuzzle(p) {
  return JSON.parse(JSON.stringify(p));
}

function sanitize(str) {
  return (str || '')
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9]/g, '');
}

function tryBuildPuzzle(sourcePuzzle, chosenSize) {
  const puzzle = clonePuzzle(sourcePuzzle);
  const size = chosenSize;
  const grid = Array.from({ length: size }, () => Array.from({ length: size }, () => null));

  for (const w of puzzle.words) {
    const answer = sanitize(w.answer);
    const len = answer.length;

    w.answer = answer;
    w.cells = [];

    if (w.row >= size || w.col >= size) return null;
    if (w.dir === 'across' && w.col + len > size) return null;
    if (w.dir === 'down' && w.row + len > size) return null;

    for (let j = 0; j < len; j++) {
      const r = w.row + (w.dir === 'down' ? j : 0);
      const c = w.col + (w.dir === 'across' ? j : 0);
      if (grid[r][c] && grid[r][c] !== answer[j]) return null;
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

function pickPuzzle(category, difficulty, chosenSize) {
  const exactList = (crosswordBank[category]?.[difficulty] || [])
    .filter((p) => p.size === chosenSize)
    .map((p) => tryBuildPuzzle(p, chosenSize))
    .filter(Boolean);

  if (exactList.length) {
    return exactList[Math.floor(Math.random() * exactList.length)];
  }

  const fallbackList = (crosswordBank[category]?.[difficulty] || [])
    .map((p) => tryBuildPuzzle(p, p.size))
    .filter(Boolean);

  if (fallbackList.length) {
    return fallbackList[Math.floor(Math.random() * fallbackList.length)];
  }

  return null;
}

function generateCrossword() {
  const category = document.getElementById('cwCategory').value;
  const difficulty = document.getElementById('cwDifficulty').value;
  const chosenSize = Number(document.getElementById('cwSize').value);

  const puzzle = pickPuzzle(category, difficulty, chosenSize);

  if (!puzzle) {
    document.getElementById('cwGrid').innerHTML = '';
    document.getElementById('cwClues').innerHTML = '';
    document.getElementById('cwFeedback').innerHTML = '<span class="bad">Aucune grille compatible.</span>';
    document.getElementById('cwProgressLabel').textContent = '0%';
    document.getElementById('cwProgressBar').style.width = '0%';
    document.getElementById('cwGridScore').textContent = '0';
    return;
  }

  crosswordState.puzzle = puzzle;
  crosswordState.cells = [];
  crosswordState.selectedWordIndex = 0;
  crosswordState.score = 0;
  crosswordState.solved = false;

  renderCrossword();
  updateCrosswordProgress();
  document.getElementById('cwFeedback').innerHTML = `<span class="good">Nouvelle grille générée en ${puzzle.size}x${puzzle.size}.</span>`;
}

function renderCrossword() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle) return;

  const gridEl = document.getElementById('cwGrid');
  const cluesEl = document.getElementById('cwClues');

  gridEl.innerHTML = '';
  cluesEl.innerHTML = '';
  gridEl.style.gridTemplateColumns = `repeat(${puzzle.size}, 1fr)`;

  crosswordState.cells = Array.from({ length: puzzle.size }, () => Array.from({ length: puzzle.size }, () => null));

  const numberMap = {};
  puzzle.words.forEach((w) => {
    numberMap[`${w.row}-${w.col}`] = w.number;
  });

  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const wrap = document.createElement('div');
      wrap.className = 'cw-cell-wrap';

      if (puzzle.solution[r][c]) {
        const input = document.createElement('input');
        input.className = 'cw-cell';
        input.maxLength = 1;
        input.dataset.r = r;
        input.dataset.c = c;

        input.addEventListener('input', (e) => {
          e.target.value = sanitize(e.target.value).slice(0, 1);
          if (e.target.value) moveToNextCell(r, c);
          updateCrosswordProgress();
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowUp') focusCell(r - 1, c);
          else if (e.key === 'ArrowDown') focusCell(r + 1, c);
          else if (e.key === 'ArrowLeft') focusCell(r, c - 1);
          else if (e.key === 'ArrowRight') focusCell(r, c + 1);
          else if (e.key === 'Backspace' && !e.target.value) moveToPreviousCell(r, c);
        });

        wrap.appendChild(input);
        crosswordState.cells[r][c] = input;

        if (numberMap[`${r}-${c}`]) {
          const num = document.createElement('span');
          num.className = 'cw-number';
          num.textContent = numberMap[`${r}-${c}`];
          wrap.appendChild(num);
        }
      } else {
        const block = document.createElement('div');
        block.className = 'cw-block';
        wrap.appendChild(block);
      }

      gridEl.appendChild(wrap);
    }
  }

  const info = document.createElement('div');
  info.className = 'note';
  info.style.marginBottom = '12px';
  info.textContent = `Grille : ${puzzle.title} — ${puzzle.size}x${puzzle.size}`;
  cluesEl.appendChild(info);

  ['across', 'down'].forEach((dir) => {
    const title = dir === 'across' ? 'Horizontal' : 'Vertical';
    const group = document.createElement('div');
    group.className = 'clue-group';
    group.innerHTML = `<h3 style="margin-bottom:10px;">${title}</h3>`;

    puzzle.words.filter((w) => w.dir === dir).forEach((w) => {
      const div = document.createElement('div');
      div.className = 'clue-item';
      div.innerHTML = `<strong>${w.number}.</strong> ${w.clue} <span class="small">(${w.answer.length} lettres)</span>`;
      div.style.cursor = 'pointer';
      div.onclick = () => focusWord(puzzle.words.indexOf(w));
      group.appendChild(div);
    });

    cluesEl.appendChild(group);
  });

  focusWord(0);
}

function focusWord(index) {
  const word = crosswordState.puzzle?.words[index];
  crosswordState.selectedWordIndex = index;
  if (word && word.cells.length) focusCell(word.cells[0].r, word.cells[0].c);
}

function focusCell(r, c) {
  const cell = crosswordState.cells?.[r]?.[c];
  if (cell) {
    cell.focus();
    cell.select();
  }
}

function moveToNextCell(r, c) {
  const word = crosswordState.puzzle?.words[crosswordState.selectedWordIndex];
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

function updateCrosswordProgress() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle) return;

  let total = 0;
  let filled = 0;
  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      if (puzzle.solution[r][c]) {
        total++;
        if (crosswordState.cells[r][c]?.value) filled++;
      }
    }
  }

  const percent = total ? Math.round((filled / total) * 100) : 0;
  document.getElementById('cwProgressLabel').textContent = percent + '%';
  document.getElementById('cwProgressBar').style.width = percent + '%';
  document.getElementById('cwGridScore').textContent = crosswordState.score;
}

function clearCellStyles() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle) return;
  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const cell = crosswordState.cells[r][c];
      if (cell) cell.classList.remove('correct', 'wrong', 'hint', 'reveal');
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
        if (val === sol) cell.classList.add('correct');
        else {
          if (val) cell.classList.add('wrong');
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
      appState.scores.crossword += 1;
      appState.scores.total += crosswordState.score;
      saveScores();
    }
    document.getElementById('cwFeedback').innerHTML = `<span class="good">Bravo, grille terminée ! +${crosswordState.score} points</span>`;
    if (typeof beep === 'function') beep(700, 0.12, 'triangle', 0.03);
  } else {
    document.getElementById('cwFeedback').innerHTML = `<span class="warnText">Il reste ${wrong} erreur(s) ou des cases vides.</span>`;
    if (typeof beep === 'function') beep(220, 0.07, 'square', 0.015);
  }

  updateCrosswordProgress();
}

function giveLetterHint() {
  const puzzle = crosswordState.puzzle;
  if (!puzzle || crosswordState.solved) return;

  const remaining = [];
  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      if (puzzle.solution[r][c] && sanitize(crosswordState.cells[r][c].value) !== puzzle.solution[r][c]) {
        remaining.push({ r, c });
      }
    }
  }

  if (!remaining.length) return;
  const pick = remaining[Math.floor(Math.random() * remaining.length)];
  crosswordState.cells[pick.r][pick.c].value = puzzle.solution[pick.r][pick.c];
  crosswordState.cells[pick.r][pick.c].classList.add('hint');
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
    crosswordState.cells[pos.r][pos.c].classList.add('reveal');
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
      if (sol && cell && cell.value && sanitize(cell.value) !== sol) cell.value = '';
      if (cell) cell.classList.remove('wrong');
    }
  }
  updateCrosswordProgress();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cwGrid')) generateCrossword();
});
