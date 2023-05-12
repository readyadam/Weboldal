const button = document.createElement('button');  // gomb elem létrehozása
button.textContent = 'Játék indítása';  // gomb szövege
button.addEventListener('click', function() {  // kattintás esemény hozzáadása
  window.location.href = 'https://readyadam.github.io/Game/';  // új oldal megnyitása
});
document.body.appendChild(button);  // gomb hozzáadása a dokumentumhoz
