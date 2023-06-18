// Add your JavaScript functionality here

// Example: Form submission event handler
const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Process form data here or make an AJAX request to save the changes
    console.log('Form submitted!');
    // Show a success message or perform any other desired action
    const successMessage = document.createElement('p');
    successMessage.classList.add('success-message');
    successMessage.innerText = 'Changes saved successfully!';
    form.appendChild(successMessage);
    // Reset the form after submission
    form.reset();
    // Remove the success message after a certain duration
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  });
});

// Switch functionality
const switches = document.querySelectorAll('.switch-input');
switches.forEach((switchElement) => {
  switchElement.addEventListener('change', (e) => {
    const switchSlider = switchElement.nextElementSibling;
    const switchLabel = switchSlider.parentElement;
    const switchText = switchLabel.querySelector('.switch-text');
    if (switchElement.checked) {
      switchSlider.style.backgroundColor = '#4caf50';
      switchSlider.style.transform = 'translateX(20px)';
      switchText.innerText = 'On';
    } else {
      switchSlider.style.backgroundColor = '#ccc';
      switchSlider.style.transform = 'translateX(0)';
      switchText.innerText = 'Off';
    }
  });
});
