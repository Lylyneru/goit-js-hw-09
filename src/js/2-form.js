document.addEventListener('DOMContentLoaded', () => {
  const divContainer = document.createElement('div');
  divContainer.classList.add('form-container');

  const form = document.querySelector('.feedback-form');
  form.classList.add('feedback-form');

  divContainer.appendChild(form);
  document.body.appendChild(divContainer);
});

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
