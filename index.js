const button = document.querySelector('button');
const div = document.createElement('div');

button.addEventListener('click', () => {
  if (div.firstChild) {
    return div.firstChild.remove();
  }
  const span = document.createElement('span');
  span.innerHTML = `hello`;
  document.body.insertBefore(div, button);
  div.appendChild(span);
});
