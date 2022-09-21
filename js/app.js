

let dragItems = document.querySelectorAll('.box');
let dropArea = document.querySelector("#dropp");
dropArea.addEventListener('dragover', function(e){
    e.preventDefault();
})
dropArea.addEventListener('dragleave', function(e){
    e.preventDefault();
})
for (let i = 0; i < dragItems.length; i++) {
    dragItems[i].addEventListener('dragstart', function(e) {
           e.dataTransfer.setData('b', this.id)
        })
}

let count = document.getElementById('count');
count.innerHTML = "4";
dropArea.addEventListener('drop', function(e){
    let index = e.dataTransfer.getData('b');
    let drg = document.getElementById(index);
    dropArea.appendChild(drg);
    count.innerHTML -=1;
    
})