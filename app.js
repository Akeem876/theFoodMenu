//array of menu items
const menu = [
    {
        id:1,
        img:"/img/asparagus-2169305_1280.jpg",
        title:"Asparagus Steak",
        category: "meatlovers",
        price:"$50.00",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatum eligendi assumenda maxime pariatur nihil eveniet ipsum sequi. Eligendi, dolor!"
    },
    {
        id:2,
        img:"/img/bread-2796393_1280.jpg",
        title:"Stock up on Bread",
        category: "breakfast",
        price:"$8.00",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere pariatur, dolores tempore fugiat facilis rem accusantium aperiam assumenda modi. Vel."
    },
    {
        id:3,
        img:"/img/cupcakes-690040_1280.jpg",
        title:"Cupcakes",
        category: "desert",
        price:"$10.00",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur at nulla repellat corporis vel! Aliquid praesentium quidem deserunt animi."
    },
    {
        id:4,
        img:"/img/eclair-3366430_1280.jpg",
        title:"Eclair",
        category:"breakfast",
        price:"$30.00",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur at nulla repellat corporis vel! Aliquid praesentium quidem deserunt animi."
    },
    {
        id:5,
        img:"/img/macarons-2548827_1280.jpg",
        title:"Macarons",
        category: "desert",
        price:"$15.00",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur at nulla repellat corporis vel! Aliquid praesentium quidem deserunt animi."
    },
    {
        id:6,
        img:"/img/pancakes-2291908_1280.jpg",
        title:"Pancakes",
        category: "breakfast",
        price:"$14.00",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur at nulla repellat corporis vel! Aliquid praesentium quidem deserunt animi."
    },
    {
        id:7,
        img:"/img/pizza-329523_1280.jpg",
        title:"Italian Pizza",
        category: "meatlovers",
        price:"$25.00",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur at nulla repellat corporis vel! Aliquid praesentium quidem deserunt animi."
    },
    {
        id:8,
        img:"/img/salmon-518032_1280.jpg",
        title:"Top Teir Salmon",
        category: "meatlovers",
        price:"$35.00",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur at nulla repellat corporis vel! Aliquid praesentium quidem deserunt animi."
    },
    {
        id:9,
        img:"/img/carousel photos/waffles-2190961_1280.jpg",
        title:"waffles",
        category: "breakfast",
        price:"$15.00",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur at nulla repellat corporis vel! Aliquid praesentium quidem deserunt animi."
    }
]
//selector assignment
const articleContainer = document.querySelector(".article-body");
const sector = document.getElementById("sector");
const btnContainer = document.querySelector(".buttons-container")
//event listener
window.addEventListener('DOMContentLoaded',()=>{
    displayAllItems(menu);
    displayMenuBtn();
})

function displayAllItems(menuItem){
    let displayMenuItems = menuItem.map((item)=>{
        return `<div id="sector">
                <article class="food-item">
                <img src="${item.img}" alt="${item.title}">
                <header class="article-title">
                    <h3>${item.title}</h3>
                    <h4>${item.price}</h4>
                </header>
                <p class="descript">
                    ${item.desc}                
                </p>
                </div>`;
    })
    displayMenuItems = displayMenuItems.join("")
    // console.log(displayMenuItems);
    articleContainer.innerHTML = displayMenuItems
}

//carousel selectors
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImg = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
console.log(carouselImg);


let counter = 1;
let size = carouselImg[0].clientWidth;
carouselSlide.style.transform = `translatex(${-size*counter}px)`

//buttons
prevBtn.addEventListener('click',()=>{
    if(counter<=0)return
    counter--;
    carouselSlide.style.transform = `translatex(${-size*counter}px)`;
    carouselSlide.style.transition = `transform 0.8s ease`
    console.log(counter);
})
nextBtn.addEventListener('click',()=>{
    if(counter >=carouselImg.length -1)return
    counter++;
    carouselSlide.style.transform = `translatex(${-size*counter}px)`;
    carouselSlide.style.transition = `transform 0.8s ease`
    console.log(counter);
})

carouselSlide.addEventListener("transitionend",()=>{
    if(carouselImg[counter].classList.contains('last-photo')){
        carouselSlide.style.transition = 'none';
        counter = carouselImg.length-2;
        carouselSlide.style.transform = `translatex(${-size*counter}px)`;
    }
    if(carouselImg[counter].classList.contains('first-photo')){
        carouselSlide.style.transition = 'none';
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = `translatex(${-size*counter}px)`
    }
})


function displayMenuBtn(){
    const filteredCategories = menu.reduce((values, menuItems)=>{
        if(!values.includes(menuItems.category)){
            values.push(menuItems.category)
        }
        return values
    },["all"]);

    const filteredCategoriesBtns = filteredCategories.map((filteredCategory)=>{
        return `<button class = "filter-btn" type = "button" data-id =${filteredCategory}
         id="meatie-btn">${filteredCategory}
         </button>`
        //  console.log(filteredCategory);
    }).join("");
    btnContainer.innerHTML = filteredCategoriesBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(function(btn){
        btn.addEventListener("click",function(e){
            const categoryValue = e.currentTarget.dataset.id;
            console.log(categoryValue);
            let menuCategory = menu.filter((menuItem)=>{
                if(menuItem.category === categoryValue){
                    return menuItem;
                }
            }) 
        if(categoryValue === "all") {
            displayAllItems(menu);
        }  
        else{
            displayAllItems(menuCategory);
        }
        })
    })
}

 