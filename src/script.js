import './styles.css'
import './About.css'
import './contant.css'
import './Menu.css'
import { menu } from './menu';
import { About } from './about';
import Burger from './img/istockphoto-485832308-612x612.jpg'
function Home() {
    const Home = document.getElementById('Home')
    Home.addEventListener('click',() =>{
      const content = document.getElementById('content');
      if (content) { 
          content.innerHTML = ''; 
      
          const top = document.createElement('div');
          content.appendChild(top);
          top.style.display = 'grid'; 
          top.style.gridTemplateColumns = '1fr 1fr'; 
          // top.style.gap = '20px'; //
          top.style.height = '100vh'
      
          const text = document.createElement('div');
          top.appendChild(text);
          text.id = 'text';
          text.innerHTML = `
              <h2>Are You Hungry?</h2>
              <h1>What Are You Waiting For?</h1>
              <button type="button" id="btn">Order Now</button>
          `;
          const img = document.createElement('div')
          top.appendChild(img)
          img.id = 'img'
         const image = document.createElement('img')

         img.appendChild(image)

         image.src = Burger

      }
    })
    
}
Home()
About()
// contact()
menu()







