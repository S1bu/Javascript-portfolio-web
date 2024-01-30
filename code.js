



//Skills section javascript code
let skills_data = JSON.parse(localStorage.getItem('Skills'))

skills_data.forEach(element => {
    document.querySelector('.skills-card-holder').innerHTML+=
    `
<div class="Skills-card ">
<div class="skill-image-holder">
    <img src="${element.logo}" alt=""> <span class='Skill-level'>${element.Level}</span>
</div>
<div class="info">
    <h3>${element.name}</h3>
    <p>${element.Description}</p>
</div>
</div>
`
});







// Testimonials section javascrpt code
let Testimonials_data = JSON.parse(localStorage.getItem('Testimonials'))

let slide_show = document.querySelector('.slide-show')
let slide_show_count = document.querySelector('.slide-show-details')
let index = 0
    slide_show.innerHTML=`
    <div class="card">
    <img src='${Testimonials_data[index].image}'>
        <h1>${Testimonials_data[index].fullname}</h1>
        <p>${Testimonials_data[index].Description}
        </p>
    </div>
    `
    slide_show_count.innerHTML=`
    ${Testimonials_data[index].id}/ ${Testimonials_data.length}
    `

const flip = () =>{
    document.querySelector(".card").style.animation = 'backInRight'
}

const NextSlide = () =>{
   

    if(index !== Testimonials_data.length-1){
        
        index++;

    
        slide_show.innerHTML=`
        <div class="card">
        <img src='${Testimonials_data[index].image}'>
            <h1>${Testimonials_data[index].fullname}</h1>
            <p>${Testimonials_data[index].Description}
            </p>
        </div>
        `
    slide_show_count.innerHTML=`
    ${Testimonials_data[index].id}/ ${Testimonials_data.length}
    `
                 // slide effect next
    document.querySelector(".card").style.animation = 'flipInX 1s';
    }
    }
 
const PrevSlide = () =>{
        if(index >= 1){
                   
            index--
            slide_show.innerHTML=`
            <div class="card">
            <img src='${Testimonials_data[index].image}'>
                <h1>${Testimonials_data[index].fullname}</h1>
                <p>${Testimonials_data[index].Description}
                </p>
            </div>
            `
            slide_show_count.innerHTML=`
            ${Testimonials_data[index].id}/ ${Testimonials_data.length}
            `

          // slide effect previous
          document.querySelector(".card").style.animation = 'flipInX 1s';
        }
        }
     

// slideAction()

document.querySelector('.next').addEventListener('click',NextSlide)
document.querySelector('.prev').addEventListener('click',PrevSlide)