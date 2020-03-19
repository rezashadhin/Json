let datah3 = document.querySelector('#dataHere');
let inputData = document.querySelector('#input1');
let sendBtn = document.querySelector('#btn1');
let clearbtn = document.querySelector('#btn2');

sendBtn.addEventListener('click', function(){
    let mainData = inputData.value;
    datah3.innerHTML = mainData;
    datah3.style.color = 'blue';
});
inputData.addEventListener('keyup',function(e){
    if (e.key == 'Enter') {
        datah3.innerHTML = this.value;
        datah3.style.color = 'yellow';
        this.value = '';
    }
})

clearbtn.addEventListener('click',function(){
    datah3.innerHTML = '';
    inputData.value = '';
})