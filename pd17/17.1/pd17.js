const button = document.createElement('button');
button.textContent = 'Paspauskite mane';
button.addEventListener('click', function() {
  alert('Sveiki atvykę į JavaScript pasaulį!');
});
document.body.appendChild(button);