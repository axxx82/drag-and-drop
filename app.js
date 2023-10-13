const item = document.querySelector(".item")
const placeholders=document.querySelectorAll('.placeholder')
item.addEventListener('dragstart',dragstar)
item.addEventListener('dragend',dragend)

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}




function dragstar (event) {
    event.target.classList.add('hold')
    event.target.classList.remove('custom-item')
    setTimeout(()=> event.target.classList.add('hide'), 0)
    

}

function dragend(event) {
    
    event.target.classList.remove('hold','hide')
    event.target.classList.add('custom-item')

} 

function dragover(event) {
    event.preventDefault()

}
function dragenter(event){
    event.target.classList.add('horevered')
    
}

function dragleave(event){
    event.target.classList.remove('horevered')
    
}

function dragdrop(event){
    event.target.classList.remove('horevered')
    event.target.append(item)
}

