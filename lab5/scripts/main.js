const txtElementHover = document.getElementById("txtHover");
const txtElementHoverOrig = txtElementHover.textContent;
const txtElementPaint = document.querySelector('.paint');
const txtMultiColors = document.getElementById('txt');
const txtCounter = document.getElementById('counter');
const txtUserResult = document.getElementById("userResult");

const inputName = document.getElementById("inputName");
const inputAge = document.getElementById("inputAge");

const btnRed = document.querySelector('.red');
const btnGreen = document.querySelector('.green');
const btnBlue = document.querySelector('.blue');
const btnSum = document.querySelector('.plus');
const btnSub = document.querySelector('.minus');
const btnSubmit = document.getElementById("btnSubmit");

const card = document.querySelector('.change');
const colorCard = document.getElementById("cardColor");

const colorSelect = document.getElementById("colorSelect");

const colors = ['#ff6b6b', '#feca57', '#1dd1a1', '#54a0ff', '#5f27cd'];

let value = parseInt(txtCounter.textContent);

/* EX 1 */
txtElementHover.addEventListener("mouseenter", () => {
    txtElementHover.classList.add("active");
    txtElementHover.textContent = "Hey gorgeous ;)";
});

txtElementHover.addEventListener("mouseleave", () => {
    txtElementHover.classList.remove("active");
    txtElementHover.textContent = txtElementHoverOrig;
});

/* EX 2 */
btnRed.addEventListener('click', () => {
    txtElementPaint.style.color = '#c0392b';
});

btnGreen.addEventListener('click', () => {
    txtElementPaint.style.color = '#27ae60';
});

btnBlue.addEventListener('click', () => {
    txtElementPaint.style.color = '#2980b9';
});

/* EX 3 */
txtMultiColors.addEventListener('input', () => {
    const length = txtMultiColors.value.length;
    const color = colors[length % colors.length];
    txtMultiColors.style.backgroundColor = color;
});

/* EX 4 */
colorSelect.addEventListener("change", () => {
  colorCard.style.backgroundColor = colorSelect.value;
});

/* EX 5 */
function Sum() {
    value++;
    txtCounter.textContent = value;
}

function Sub() {
    value--;
    txtCounter.textContent = value;
}

/* EX 6 */
btnSubmit.addEventListener("click", () => {
  const name = inputName.value.trim();
  const age = inputAge.value.trim();

  if (name && age) {
    txtUserResult.textContent = `Olá ${name}, tens ${age} anos!`;
  } else {
    txtUserResult.textContent = "Por favor, preenche ambos os campos.";
  }
});

/* EX 7 */
let autoCount = 0;
const autoCounter = document.getElementById("autoCounter");

setInterval(() => {
  autoCount++;
  autoCounter.textContent = autoCount;
}, 1000);