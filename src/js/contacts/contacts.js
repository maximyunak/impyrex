import '../../scss/contacts/contacts.scss';

const sendButton = document.querySelector('.question__send');
const thanksContainer = document.querySelector('.thanks');
const thanksText = document.querySelector('.thanks__text');
const body = document.querySelector('body');

// Add click event listener to the button
sendButton.addEventListener('click', () => {
  thanksContainer.classList.add('active');
  thanksText.classList.add('active');
  body.classList.add('active');
});

// Use event delegation to listen for clicks inside the thanks container
thanksContainer.addEventListener('click', (event) => {
  // We don't need to prevent the event from bubbling up in this case
  // event.stopPropagation();
});

// Listen for clicks on the body, but only if they are outside the thanksContainer
body.addEventListener('click', (event) => {
  if (!thanksText.contains(event.target) && !sendButton.contains(event.target)) {
    thanksContainer.classList.remove('active');
    thanksText.classList.remove('active');
    body.classList.remove('active');
  }
});
