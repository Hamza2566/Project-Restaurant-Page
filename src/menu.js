import './Menu.css'
import Burger from './img/istockphoto-485832308-612x612.jpg'
import pizaa  from './img/360_F_307651812_yiydVwvUeeZlTCuUs4E2aqsUMUlwIo86.jpg'
import prime from './img/prime 3257e982a6bc68443ac89951e4ac8b7c.jpg'
import coco from './img/images coco  (2).jpg'

export function menu() {
    const menu = document.getElementById('Menu')
    menu.addEventListener('click',() =>{
       const content = document.getElementById('content')
       content.innerHTML = ''
       const   grids = document.createElement('div')
       content.appendChild(grids)
       grids.style.width = '100%'
       grids.style.height = '100vh'
       grids.style.display = 'grid'
       grids.style.gridTemplateColumns = '1fr';
       grids.style.gridTemplateRows = '1fr 1fr 1fr';
       const grid1 = document.createElement('div')
       const grid2 = document.createElement('div')
       const grid3 = document.createElement('div')
    grids.appendChild(grid1)
    grids.appendChild(grid2)
    grids.appendChild(grid3)
    grid1.id = 'grid1'
    grid2.id = 'grid2'
    grid3.id = 'grid3'
    const image = document.createElement('img')
    grid1.appendChild(image)
    grid2.appendChild(image)
    grid3.appendChild(image)

    grid1.innerHTML = `
      <div></div>
     <h3> Burgers</h3>
   <div></div>
    
      <div class="card1">
     <img src="${Burger}" alt="">
   <h2>Burger Chesee</h2>  
     <h1> 81$</h1>
     

       
      </div>
     <div class="card2"> <img src="${Burger}" alt="">
   <h2>Burger Chesee</h2>  
     <h1> 81$</h1></div>
     <div class="card3"><img src="${Burger}" alt="">
   <h2>Burger Chesee</h2>  
     <h1> 81$</h1></div>
        
    
    `
    grid2.innerHTML = `
      <div></div>
     <h3> Pizza</h3>
   <div></div>
    
      <div class="card1">
     <img src="${pizaa}" alt="">
   <h2>pizza Chesee</h2>  
     <h1> 81$</h1>
     

       
      </div>
     <div class="card2"> <img src="${pizaa}" alt="">
   <h2>pizza Chesee</h2>  
     <h1> 81$</h1></div>
     <div class="card3"><img src="${pizaa}" alt="">
   <h2>pizza Chesee</h2>  
     <h1> 81$</h1></div>
        
    
    `
    grid3.innerHTML = `
      <div></div>
     <h3> Burgers</h3>
   <div></div>
    
      <div class="card1">
     <img src="${coco}" alt="">
   <h2>Burger Chesee</h2>  
     <h1> 81$</h1>
     

       
      </div>
     <div class="card2"> <img src="${prime}" alt="">
   <h2>Burger Chesee</h2>  
     <h1> 81$</h1></div>
     <div class="card3"><img src="${Burger}" alt="">
   <h2>Burger Chesee</h2>  
     <h1> 81$</h1></div>
        
    
    `



    })
    
}