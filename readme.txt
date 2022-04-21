FILES
- index.html holds the entire content
- css/styles.css custom css styling
- js/scripts.js custom js code with settings for sliders, rotating text and more
- images folder contains all the images


PLUGINS
- Bootstrap https://getbootstrap.com/
- jQuery https://jquery.com/ 
- jQuery Easing https://jqueryui.com/easing/
- Magnific Popup https://dimsemenov.com/plugins/magnific-popup/
- Swiper https://swiperjs.com/
- Isotope https://isotope.metafizzy.co/
- Font Awesome for icons https://fontawesome.com/


IMAGES
All images are included in the download package and can be reused in your projects. The ones mentioned below come for outside resources. The ones not mentioned come from inside resources. Either way you can use them for free in your project if you want.
- Header background: https://www.pexels.com/  
- Services and description: https://www.pexels.com/ 
- Services and description: https://www.pexels.com/
- Services and description: https://www.pexels.com/
- Business services: https://www.pexels.com/
- Business services: https://www.pexels.com/
- Business services: https://www.pexels.com/
- Details 1 and 2 backgrounds: https://www.pexels.com/
- Testimonial authors: https://www.pexels.com/
- About: https://www.pexels.com/ 
- Team: https://www.pexels.com/
- Team: https://www.pexels.com/
- Team: https://www.pexels.com/
- Team: https://www.pexels.com/
- Article details image large: https://www.pexels.com/
- Article details image small: https://www.pexels.com/

CREDITS
- Images by Pexels: https://www.pexels.com/


-----------------------------------------------------


Change Testimonials Slider Properties
- Open for editing js/scripts.js
- Find the section /* Card Slider - Swiper */
- And then fiddle with the settings using the documentation here: https://swiperjs.com/swiper-api


-----------------------------------------------------


Update Projects Section

- The Projects section uses Isotope plugin which can be configured as described here https://isotope.metafizzy.co/

Adding A New Project
- To add a new project in the projects section, you need to:
- Open for editing index.html and find the Projects section
- Here focus on the code area just below

<div class="grid">

- You can copy the following piece of code:

<div class="element-item development">
	<a class="popup-with-move-anim" href="#project-1"><div class="element-item-overlay"><span>Online Bank</span></div><img src="images/project-1.jpg" alt="alternative"></a>
</div>

- And paste it wherever you want your project to be in the Show All order
- Now replace the name and the image as per your requirements
- Also add it to a designated category. Now it's set for development as you can see from the code but you can change it to any category you define

Adding A New Category
- To add a new project category in the projects section, you need to:
- Open for editing index.html and find the Projects section
- Here in the Filter section duplicate a line like the one below:

<a class="button" data-filter=".development"><span>DEVELOPMENT</span></a>

- And replace the word "development" in both locations with your category name
- Then also add it to the project line below

<div class="element-item development">

- By replacing "development" with your category name


-----------------------------------------------------


Change Statistics Values
- Open for editing index.html
- Find the section <!-- Statistics -->
- And then change the value of the data-count tag for each number