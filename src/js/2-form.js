const divContainer = document.createElement('div');
divContainer.classList.add('form-container');

const form = document.querySelector('.feedback-form');
form.classList.add('form-class');

divContainer.appendChild(form);
document.body.appendChild(divContainer);

const labels = form.querySelectorAll('label');
labels.forEach(label => {
  label.classList.add('form-label');

  label.style.display = 'block';
  label.style.marginBottom = '8px';
  label.style.font = 'Montserrat';
  label.style.weight = '400';
  label.style.size = '16px';
  label.style.lineHeight = '24px';
});

const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
  input.classList.add('form-input');

  input.style.width = '360px';
  input.style.height = '40px';
  input.style.marginBottom = '8px';
});

const text = form.querySelectorAll('textarea');
textarea.forEach(textarea => {
  textarea.classList.add('form-textarea');

  textarea.style.width = '360px';
  textarea.style.height = '80px';
  textarea.style.marginBottom = '16px';
});

const button = form.querySelector('button');
button.classList.add('form-button');

button.style.padding = '8px 16px';
button.style.backgroundColor = '#4E75FF';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '8px';
button.style.cursor = 'pointer';
button.style.width = '95px';
button.style.height = '40px';

divContainer.style.maxWidth = '408px';
divContainer.style.height = '296px';
divContainer.style.gap = '16px';
divContainer.style.margin = '0 auto';
divContainer.style.padding = '24px';
divContainer.style.border = '1px solid #ccc';
divContainer.style.borderRadius = '8px';
divContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

function populateFormFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}

function handleInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

populateFormFromLocalStorage();
