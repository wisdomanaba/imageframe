let textTag = document.querySelector('.type-text');
let text = "Filter Web App!";
let i = 0;
const writeinner = () => {
      if(i < text.length){
            textTag.innerHTML += text.charAt(i);
            i++;
            setTimeout(writeinner,150);
      }
}
window.onload = writeinner();
let filterText = document.getElementById('filter-text');
let filterTo = document.getElementById('to');
let inputBtn = document.getElementById('inputBtn');
inputBtn.addEventListener('click', function(){
      if(filterText.value == ''){
            alert('Field required');
      }
      else{
            filterTo.innerHTML = filterText.value;
            filterText.value = '';
      }
});