const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "https://img.freepik.com/free-photo/happy-latin-businesswoman-standing-with-arms-crossed-against-isolated-background_662251-639.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714348800&semt=ais",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag picked coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs49RL3jXvEyp62oG8Ww9gCdWzuyW1Ldk73g&s",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyntwee enamel pin fashion axe. photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        img: "https://static.vecteezy.com/system/resources/thumbnails/023/907/267/small/young-smiling-businesswoman-standing-in-blur-background-of-office-generative-ai-photo.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, rerum beatae, aliquam corrupti iure dignissimos at ipsum dolore veritatis provident optio cumque recusandae facilis quas quaerat quis blanditiis",
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        img: "https://www.shutterstock.com/shutterstock/photos/2157123223/display_1500/stock-photo-portrait-of-young-confident-indian-teenager-boy-wearing-suit-holding-laptop-in-hand-looking-at-2157123223.jpg",
        text: "Edison bulb put a bird on it humblebrag, marga pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
]
//local review data
//select items
const img = document.getElementById("person-img");
const author = document .getElementById("author");
const job = document .getElementById("job");
const info = document .getElementById("info");

const preBtn = document .querySelector(".prev-btn");
const nextBtn = document .querySelector(".next-btn");
const randomBtn = document .querySelector(".random-btn");
//set starting item
let currentItem = 0;
//load intial item
window.addEventListener("DOMContentLoaded",function() {
  showPerson(currentItem);
});
//show person based on item
function showPerson(){
const item = reviews[currentItem];
img.src = item.img;
author.textContent =item.name;
job.textContent = item.job;
info.textContent =item.text;
}
//show next person
nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});
//show prev person
preBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
      currentItem = reviews.length-1;
    }
    showPerson(currentItem);
});
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()* reviews.length);
    console.logshowPerso(); void
    showPerson ();
});