const regenerateButton = document.querySelector('#password-regenerate-button');
const passwordDisplay = document.querySelector('#password-display');
const passwordLengthInput = document.querySelector('#length-input');
const form = document.querySelector('form');

async function generatePassword() {
  const length = passwordLengthInput.value;
  const resultBody = await (await fetch(`/api/password/${length}`)).json();

  passwordDisplay.innerText = resultBody.password;
}

async function copyToClipboard() {
  navigator.clipboard.writeText(passwordDisplay.innerText);
  const alert = document.createElement('div');
  alert.innerText = 'Password copied to clipboard';
  form.appendChild(alert);
  setTimeout(() => {
    form.removeChild(alert);
  }, 2000);
}

window.addEventListener('load', () => {
  generatePassword();
  regenerateButton.addEventListener('click', (event) => {
    event.preventDefault();
    generatePassword();
  });
  passwordLengthInput.addEventListener('change', () => {
    generatePassword();
  });
  passwordLengthInput.addEventListener('keyup', (event) => {
    const { key } = event;

    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(key)))
      generatePassword();
  });
  passwordDisplay.addEventListener('click', () => {
    copyToClipboard();
  });
});
