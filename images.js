function cls(){
    let wrap = document.getElementById("background_selection");
    wrap.style.display = "none"; 
};
window.onload = function() {
//создаём 
const wrapper = document.getElementById("wrapper");
wrapper.addEventListener('click', sel_img);
//получаем ссылку изображения по клику и вкладываем её в отдельную рамку
function sel_img(event){
    let img = event.target;
    let atr_img = img.getAttribute("src");
    let block = document.getElementById("selection");
    block.src = atr_img;
    let wrap = document.getElementById("background_selection");
    wrap.style.display = "block";   
    
} 
};
