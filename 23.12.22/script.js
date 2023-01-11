const quantidadeSubtotal = document.getElementById("quantidade-subtotal");
const valorSubtotal = document.getElementById("valor-subtotal");
const subItens = document.getElementById("btn-subtrair-produto-01")
const addItens = document.getElementById("btn-adicionar-produto-01");
const quantidadeItem = document.getElementById("quantidade-produto-01");
/*const title = document.getElementsByTagName("h2");*/

console.log(quantidadeItem.value);

const valorItemInfo = {
  valor: 45.90,
};

subItens.addEventListener("click", subtrairItem);
addItens.addEventListener("click", adicionarItem);

function calculoValorTotal(quantidadeItem) {
  if (quantidadeItem > 0) {
    valorSubtotal.innerText = (valorItemInfo.valor * quantidadeItem).toFixed(2);
  } else {
    valorSubtotal.innerText = 0
  }
}

function updateSubTotalText() {
  quantidadeSubtotal.innerText = quantidadeItem.value == 1? `${quantidadeItem.value} item` : `${quantidadeItem.value} itens`;
  calculoValorTotal(quantidadeItem.value);
}

function subtrairItem() {
  if (quantidadeItem.value > 0) {
    quantidadeItem.value = Number(quantidadeItem.value) - 1;
  }
  updateSubTotalText();
}

function adicionarItem() {
  if (quantidadeItem.value < 10) {
    quantidadeItem.value = Number(quantidadeItem.value) + 1;
  } //else {
  //  title[1].innerText = "MÁXIMO DE 10 ITENS";
  //}*/
  updateSubTotalText();
}


