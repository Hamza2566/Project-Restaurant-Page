export function contact() {
    const contact = document.getElementById('contact')
    contact.addEventListener('click',() =>{
       const content = document.getElementById('content')
       content.innerHTML = ''
       content.textContent = 'contact'

    })
    
}