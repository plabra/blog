const para = document.querySelector('p');
para.addEventListener('click', updateName);
function updateName() {
  let name = prompt('匿称');
  para.textContent = name;
}

