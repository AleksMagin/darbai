// Sukuriame sąrašą su elementais
const list = document.createElement('ul');
const listItems = ['Vaisius', 'Daržovė', 'Pieno produktas', 'Mėsa', 'Gėrimas'];
listItems.forEach(itemText => {
  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
});
document.body.appendChild(list);

// Mygtukas rūšiavimui pagal abėcėlę
const sortAscButton = document.createElement('button');
sortAscButton.textContent = 'Rūšiuoti A-Ž';
sortAscButton.addEventListener('click', () => {
  const sortedItems = Array.from(list.children)
    .sort((a, b) => a.textContent.localeCompare(b.textContent));
  list.innerHTML = '';
  sortedItems.forEach(item => list.appendChild(item));
});
document.body.appendChild(sortAscButton);

// Mygtukas rūšiavimui atvirkštine abėcėlės tvarka
const sortDescButton = document.createElement('button');
sortDescButton.textContent = 'Rūšiuoti Ž-A';
sortDescButton.addEventListener('click', () => {
  const sortedItems = Array.from(list.children)
    .sort((a, b) => b.textContent.localeCompare(a.textContent));
  list.innerHTML = '';
  sortedItems.forEach(item => list.appendChild(item));
});
document.body.appendChild(sortDescButton);