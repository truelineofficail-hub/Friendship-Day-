const questions = [
  { q: "What was my first msg to you?", o: ["Question - Hey, we have group of shoko and gojo, and we want geto, can you be, if you are comfortable 😊Answer - okie", "Question - Hey, we have group of shoko and gojo, and we want geto, can you be, if you are comfortable 😊Answer - sure ", "Question - Hey, we have group of shoko and gojo, and we want geto, can you be, if you are comfortable 😊Ans- its good", "Question - Hey, we have group of shoko andgojo, and we want geto, can you be, if you are comfortable 😊Answer- its good"], correct: 3 },
  { q: "which game I loved to play with you too much?", o: ["Reels", "Pluto", "chess", "Truth and dare"], correct: 3 },
  { q: "What's my favourite era of our friendship?", o: ["jjk after life", "ignore game", "jealousy arc", "none"], correct: 1 },
  { q: "which is my favourite Anime series.", o: ["Dragon ball z", "Darling in the franxx", "ereasd", "All Anime"], correct: 0 },
  { q: "what was our 1st kiss?", o: ["Smooch kiss", "tshirt between lips", "Eat my lips", "bite on lips"], correct: 1 },
  { q: "Who is my favourite anime character", o: ["Yu Ishigami", "Vageta", "Geto", "Katsuki Bakugo"], correct: 0 },
  { q: "what was your first gift from me?", o: ["Mug and chocolate", "Mug and 1 earings", "Mug and 2 Earrings", "only Mug"], correct: 2 },
  { q: "What was the date when i bought our 1st ring?", o: ["11 January 2024", "9 January 2024", "23 March 2024", "27 February 2025"], correct: 1 },
  { q: "what is the cutest things you have in my pov?", o: ["Muche", "Eyes", "Lips", "Boobies"], correct: 0 },
  { q: "Which place i like too kiss most...", o: ["chipchapa mandek", "Boobies", "lips", "forehead"], correct: 2 },
  
];

const colors = ['#FF6B6B', '#FFD166', '#06D6A0', '#4CC9F0', '#C9A8FF'];
let current = 0;
const answers = new Array(questions.length).fill(null);

const beadsWrap = document.getElementById('beads');
const beadEls = [];
for (let i = 0; i < questions.length; i++) {
  const b = document.createElement('div');
  b.className = 'bead';
  const pct = (i / (questions.length - 1)) * 100;
  b.style.left = `calc(${pct}%)`;
  b.style.background = colors[i % colors.length];
  beadsWrap.appendChild(b);
  beadEls.push(b);
}

function updateProgress() {
  const answeredCount = answers.filter(a => a !== null).length;
  const pct = (answeredCount / questions.length) * 100;
  document.getElementById('braceletFill').style.width = pct + '%';
  document.getElementById('progressCount').textContent =
    `QUESTION ${Math.min(current+1, questions.length)} / ${questions.length}`;
  beadEls.forEach((b, i) => { b.classList.toggle('on', answers[i] !== null); });
}

const qEyebrow = document.getElementById('qEyebrow');
const qText = document.getElementById('qText');
const optionsWrap = document.getElementById('optionsWrap');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');

function renderQuestion() {
  const item = questions[current];
  qEyebrow.textContent = `THREAD NO. ${String(current+1).padStart(2,'0')}`;
  qText.textContent = item.q;
  optionsWrap.innerHTML = '';
  item.o.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.textContent = optText;
    if (answers[current] === idx) btn.classList.add('picked');
    btn.addEventListener('click', () => {
      answers[current] = idx;
      renderQuestion();
      updateProgress();
    });
    optionsWrap.appendChild(btn);
  });
  nextBtn.disabled = answers[current] === null;
  nextBtn.textContent = current === questions.length - 1 ? 'Finish & View Summary →' : 'Next thread →';
  backBtn.disabled = current === 0;
  updateProgress();
}

nextBtn.addEventListener('click', () => {
  if (answers[current] === null) return;
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showQuizCompletionSummary();
  }
});

backBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});

function showQuizCompletionSummary() {
  document.getElementById('quizCard').classList.add('hidden');
  document.getElementById('braceletTrack').classList.add('hidden');
  document.getElementById('progressCount').classList.add('hidden');
  document.getElementById('summaryBox').classList.remove('hidden');
  document.getElementById('envelopeScene').classList.remove('hidden');
  buildSummary();
}

function buildSummary() {
  const summaryList = document.getElementById('summaryList');
  summaryList.innerHTML = '';
  
  questions.forEach((item, index) => {
    const selectedOptionIndex = answers[index];
    const userAnsText = item.o[selectedOptionIndex] || "No answer";
    const correctAnsText = item.o[item.correct];
    const isCorrect = selectedOptionIndex === item.correct;
    
    const div = document.createElement('div');
    div.className = 'summary-item';
    
    if (isCorrect) {
      div.innerHTML = `
        <div class="summary-q">Thread ${index + 1}: ${item.q}</div>
        <div class="summary-answers-row">
          <span class="user-ans right">Your Answer: ✓ ${userAnsText}</span>
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="summary-q">Thread ${index + 1}: ${item.q}</div>
        <div class="summary-answers-row">
          <span class="user-ans wrong">Your Answer: ✗ ${userAnsText}</span>
          <span class="correct-ans">Correct Answer: ✓ ${correctAnsText}</span>
        </div>
      `;
    }
    summaryList.appendChild(div);
  });
}

const letterText = `Oi bakka,

yk? I'm lucky enough to celebrate 1st August and 2nd August together because my girlfriend and my best friend are same precious person of mine 

You're someone I found as a stranger, but today you're a part of my heart, you're my happiness, whenever I need someone to share my feelings with I lookup to you.

Only I can iritate you, tease you, get angry but our friendship will never break due to such reasons, you're the only one I'm comfortable with being around myself, I dont want many friends, I just want you as my Best Friend forever because I'm very lucky to have you.

You aren't just a friend to me. You are a piece of my soul. Thank you for giving me a sense of life, understanding & comfort when I need it most. Thank you for picking me up when I have a bad day and for laughing with me on good days. Thank you for being the person I can always depend on without judged. I love you & admire you more than you can imagine..

My one and only precious one My MJ I love you soo much.

Happy Friendship Day.`;

const envelope = document.getElementById('envelope');
const letterSheet = document.getElementById('letterSheet');
const letterBody = document.getElementById('letterBody');
const signoff = document.getElementById('signoff');
let opened = false;

envelope.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  envelope.classList.add('open');
  setTimeout(() => {
    letterSheet.classList.add('show');
    typeLetter();
    burstConfetti();
  }, 550);
});

function typeLetter() {
  letterBody.innerHTML = '';
  signoff.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.innerHTML = '&nbsp;';
  letterBody.appendChild(cursor);
  let i = 0;
  
  function step() {
    if (i < letterText.length) {
      cursor.insertAdjacentText('beforebegin', letterText[i]);
      i++;
      setTimeout(step, 14);
    } else {
      cursor.remove();
      signoff.textContent = '— with all of it, always';
    }
  }
  step();
}

document.getElementById('restartBtn').addEventListener('click', () => {
  current = 0;
  answers.fill(null);
  opened = false;
  envelope.classList.remove('open');
  letterSheet.classList.remove('show');
  document.getElementById('summaryBox').classList.add('hidden');
  document.getElementById('envelopeScene').classList.add('hidden');
  document.getElementById('quizCard').classList.remove('hidden');
  document.getElementById('braceletTrack').classList.remove('hidden');
  document.getElementById('progressCount').classList.remove('hidden');
  renderQuestion();
});

const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function burstConfetti() {
  const pieces = [];
  const count = 120;
  for (let i = 0; i < count; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height * 0.35,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -10 - 4,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 12,
      life: 0
    });
  }
  let frame = 0;
  
  function animate() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    pieces.forEach(p => {
      p.vy += 0.28;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.life++;
      if (p.y < canvas.height + 20) alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - p.life / 160);
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    });
    if (alive && frame < 200) { requestAnimationFrame(animate); }
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }
  animate();
}

renderQuestion();
