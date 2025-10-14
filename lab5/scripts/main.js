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

let autoCount = localStorage.getItem("autoCount")
  ? parseInt(localStorage.getItem("autoCount"))
  : 0;

const autoCounter = document.getElementById("autoCounter");

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
document.querySelectorAll('button.color').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        txtElementPaint.style.color = color;
    });
});

/* EX 3 */
txtMultiColors.addEventListener('input', () => {
    const length = txtMultiColors.value.length;
    const color = colors[length % colors.length];
    txtMultiColors.style.backgroundColor = color;
});

/* EX 4 */
document.querySelector('select').onchange = function () {
    document.querySelector('.change').style.backgroundColor = this.value;
};

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
document.querySelector('form').onsubmit = (e) => {
    e.preventDefault()
    const name = inputName.value.trim();
    const age = inputAge.value.trim();

    if (name && age) {
        txtUserResult.textContent = `Olá ${name}, tens ${age} anos!`;
    } else {
        txtUserResult.textContent = "Por favor, preenche ambos os campos.";
    }
};

/* EX 7 */
function updateCounter() {
  autoCount++;
  autoCounter.textContent = autoCount;
  localStorage.setItem("autoCount", autoCount);
}

document.addEventListener("DOMContentLoaded", () => {
  autoCounter.textContent = autoCount;

  setInterval(updateCounter, 1000);
});