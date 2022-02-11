// sign in //
const para = document.querySelector('p');
para.addEventListener('click', updateName);
function updateName() {
  let name = prompt('请输入匿称');
  para.textContent = '匿称:' + name;
}
