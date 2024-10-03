import './About.css'



export function About() {
    const About = document.getElementById('About')
    About.addEventListener('click',() =>{
       const content = document.getElementById('content')
       content.innerHTML = ''
    //    <div class="form-container">
        const container =document.createElement('div')
        content.appendChild(container) 
        //  <div class="about-container">
        container.classList.add('about-container')
        container.innerHTML = `
        
                <h1 class="about-title">About Us</h1>
        <p class="about-description">
            <i class="fas fa-utensils icon"></i>
            Welcome to <strong>Restaurant Name</strong>, where we serve delicious meals made from the freshest ingredients. Our passion for food and commitment to quality shine through in every dish we prepare.
        </p>
        <p class="about-description">
            <i class="fas fa-clock icon"></i>
            Established in [Year], our restaurant has become a beloved gathering place for friends and family. Whether you're celebrating a special occasion or enjoying a casual meal, we strive to create a warm and welcoming atmosphere for everyone.
        </p>
        <p class="about-description">
            <i class="fas fa-chef-hat icon"></i>
            Our talented chefs are dedicated to crafting exceptional culinary experiences, with a menu that features a delightful mix of traditional and modern dishes. Join us to explore flavors that will tantalize your taste buds!
        </p>
        <p class="about-description">
            <i class="fas fa-thumbs-up icon"></i>
            Thank you for choosing <strong>Restaurant Name</strong>. We look forward to serving you!
        </p>

        
        
        
        
        `


    })
    
}