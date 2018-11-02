let coll = document.getElementsByClassName('btn');


for(let i = 0; i < coll.length; i++){
    coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }
        else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}
