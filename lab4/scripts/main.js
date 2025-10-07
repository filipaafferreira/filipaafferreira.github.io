const txtElementHover = document.getElementById("txtHover");
const txtElementHoverOrig = txtElementHover.textContent;
const txtElementPaint = document.querySelector('.paint');
const txtMultiColors = document.getElementById('txt');
const txtColorChange = document.querySelector('#txtColorChange');
const txtCounter = document.getElementById('counter');

const btnRed = document.querySelector('.red');
const btnGreen = document.querySelector('.green');
const btnBlue = document.querySelector('.blue');
const btnSubmit = document.querySelector('.submit');
const btnSum = document.querySelector('.plus');
const btnSub = document.querySelector('.minus');

const card = document.querySelector('.change');

const colors = ['#ff6b6b', '#feca57', '#1dd1a1', '#54a0ff', '#5f27cd'];

let value = parseInt(txtCounter.textContent);

txtElementHover.addEventListener("mouseenter", () => {
    txtElementHover.textContent = "Hey gorgeous ;)";
});

txtElementHover.addEventListener("mouseleave", () => {
    txtElementHover.textContent = txtElementHoverOrig;
});

btnRed.addEventListener('click', () => {
    txtElementPaint.style.color = '#c0392b';
});

btnGreen.addEventListener('click', () => {
    txtElementPaint.style.color = '#27ae60';
});

btnBlue.addEventListener('click', () => {
    txtElementPaint.style.color = '#2980b9';
});

txtMultiColors.addEventListener('input', () => {
    const length = txtMultiColors.value.length;
    const color = colors[length % colors.length];
    txtMultiColors.style.backgroundColor = color;
});

btnSubmit.addEventListener('click', () => {
    const color = txtColorChange.value.toLowerCase().trim();
    card.style.backgroundColor = color;
});

btnSum.addEventListener('click', () => {
    value++;
    txtCounter.textContent = value;
});

btnSub.addEventListener('click', () => {
    value--;
    txtCounter.textContent = value;
});
