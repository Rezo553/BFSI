// NOTE: move variable declaration to the top, before the functions. Makes code easier to read!
let input_search = document.querySelector(".search")
let search = document.querySelector(".search")
let logo = document.querySelector(".logo")
let autorisation = document.querySelector(".autorisation")

let profile_imgs = document.querySelector(".profile_imgs")
let section_btn = document.querySelector(".section_btn")
let section_inp = document.querySelectorAll(".section_inp")
const divOne = document.getElementById("one")
const divTwho = document.getElementById("two")
const divThree = document.getElementById("three")
const divFour = document.getElementById("four")

// TODO: never ever use vars!!!! use let or const
var i = 0
var images = [
    "https://img.freepik.com/free-photo/view-new-york-city-usa_53876-153448.jpg?w=2000",
    "https://www.99images.com/download-image/863343/2048x1365",
    "https://cdn.99images.com/photos/wallpapers/world/world%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-uweev.jpg",
]
var slideTime = 10000 // 3 seconds

// NOTE: DON'T do this! if you have pre-defined array items just put them in the declartion

// images[0] =
// 	"https://img.freepik.com/free-photo/view-new-york-city-usa_53876-153448.jpg?w=2000"
// images[1] = "https://www.99images.com/download-image/863343/2048x1365"
// images[2] =
// 	"https://cdn.99images.com/photos/wallpapers/world/world%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-uweev.jpg"

let sectionCardsData = [
    {
        img: "./Image/Oval (4).png",
        txt1: '"Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit."',
        txt2: "Shirline Dungey",
        txt3: "Apple",
    },
    {
        img: "./Image/Oval (4).png",
        txt1: '"Dicat eripuit accumsan facilisi has cetero argumentum, vel at fugit definitionem integre abhorreant epicurei ferri aperiri pri."',
        txt2: "Hector Mariano",
        txt3: "Google",
    },
    {
        img: "./Image/Oval (4).png",
        txt1: '"His dolorem habemus mandamus et, eius ponderum lorem molestiae ne, esse vulputate definitiones iracundia bonorum graecis convenire assum novum eu."',
        txt2: "Tiontay Carroll",
        txt3: "Facebook",
    },
    {
        img: "./Image/Oval (4).png",
        txt1: '"Quidam officiis similique indoctum efficiendi platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit."',
        txt2: "Hector Mariano",
        txt3: "Google",
    },
    {
        img: "./Image/Oval (4).png",
        txt1: '"Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit."',
        txt2: "Shirline Dungey",
        txt3: "Apple",
    },
    {
        img: "./Image/Oval (4).png",
        txt1: '"Dicat eripuit accumsan facilisi has cetero argumentum, vel at fugit definitionem integre abhorreant epicurei ferri aperiri pri."',
        txt2: "Hector Mariano",
        txt3: "Google",
    },
    {
        img: "./Image/Oval (4).png",
        txt1: '"His dolorem habemus mandamus et, eius ponderum lorem molestiae ne, esse vulputate definitiones iracundia bonorum graecis convenire assum novum eu."',
        txt2: "Tiontay Carroll",
        txt3: "Facebook",
    },
]

// let next_div =  document.querySelector(".next_div")
// next_div.addEventListener("click", function(){
//     profiles.style.marginTop = "1500px"
// })

function changePicture() {
    autorisation.style.backgroundImage = "url(" + images[i] + ")"
    autorisation.style.backgroundSize = "cover"
    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }
    setTimeout(changePicture, slideTime)
}

window.onload = changePicture

///////////////////////

logo.addEventListener("click", function () {
    search.classList.toggle("toggle")
})

console.log(section_first_inp)

document.addEventListener("keypress", function () {
    if (section_inp[0].value.length >= 6 && section_inp[1].value.length >= 6) {
        section_btn.removeAttribute("disabled") //бѓЁбѓљбѓбѓЎ html-бѓЁбѓ бѓ›бѓбѓњбѓбѓ­бѓ”бѓ‘бѓЈбѓљ disabled бѓђбѓўбѓ бѓбѓ‘бѓЈбѓўбѓЎ
        section_btn.style.backgroundColor = "red"
    }
})
section_btn.addEventListener("click", function () {
    alert("You have successfully logged in") //бѓЁбѓ”бѓўбѓ§бѓќбѓ‘бѓбѓњбѓ”бѓ‘бѓђбѓЎ бѓђбѓ’бѓ“бѓ”бѓ‘бѓЎ
    section_inp[0].value = "" //бѓђбѓЎбѓЈбѓ¤бѓ—бѓђбѓ•бѓ”бѓ‘бѓЎ бѓбѓњбѓ¤бѓЈбѓ—бѓ”бѓ‘бѓЎ
    section_inp[1].value = ""
})

// function imgSlider(anything){
//     document.getElementById("slider").src =anything;
// }

// onclick = "imgSlider('Graham.png)"


//////////////////////////////////////
var p = document.getElementById("p")

// NOTE: never call function "func", call it whatever it is doing, if it's not used then just delete it.
function func(image) {
    profile_imgs.src = image.src
    profile_imgs.parentElement.style.display = "block"
}

console.log(sectionCardsData)

let section_third_box = document.querySelector(".section_third_box")
sectionCardsData.map((item) => {
    console.log(item)
    let box = document.createElement("div");
    box.classList.add('box')
    section_third_box.appendChild(box)
    let box_box_p = document.createElement("div");
    box_box_p.classList.add('box_box_p')
    box.appendChild(box_box_p)  
    let p1 = document.createElement("p");
    box.appendChild(p1)
    p1.innerHTML = item.txt1;
    let img = document.createElement("img");
    img.setAttribute("src", item.img)
    box.appendChild(img);
    let box_box = document.createElement("div");
    box_box.classList.add('box_box')
    box.appendChild(box_box)
    let h3 = document.createElement("h3");
    box_box.appendChild(h3)
    h3.innerHTML = item.txt2;
    let h4 = document.createElement("h4");
    box_box.appendChild(h4)
    h4.innerHTML = item.txt3;
})
window.addEventListener('scroll', function () {
    if( section_third_box.getBoundingClientRect().y < 1150){
        section_third_box.style.transform = 'translateX(0px)';
    }
})


function active() { }

//_: querySelectorAll always returns array
let tabs = document.querySelectorAll(".tabs li")

// let tabsArray = Array.from(tabs)

let divs = document.querySelectorAll(".content > div")
// let divsArray = Array.from(divs)

tabs.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        let tabName = e.target.dataset.tab
        switch (tabName) {
            case "all":
               
                divOne.style.display = "block"
                divTwho.style.display = "block"
                divThree.style.display = "block"
                divFour.style.display = "block"
                break
            case "blockchain":
              
                divOne.style.display = "block"
                divTwho.style.display = "none"
                divThree.style.display = "none"
                divFour.style.display = "none"
                break
            case "fintech":
                
                divOne.style.display = "none"
                divTwho.style.display = "block"
                divThree.style.display = "none"
                divFour.style.display = "none"
                break
            case "neobank":
               
                divOne.style.display = "none"
                divTwho.style.display = "none"
                divThree.style.display = "block"
                divFour.style.display = "none"
                break
            case "AI":
                
                divOne.style.display = "none"
                divTwho.style.display = "none"
                divThree.style.display = "none"
                divFour.style.display = "block"
                break
        }
    })
})

let items_to_show = document.querySelector(".items_to_show")

console.log(items_to_show)




let information_boxs = document.querySelector(".information_boxs")
let Sebian = document.querySelector(".Sebian")
Sebian.addEventListener("click", function() {
    document.querySelector(".section_second_container2").innerHTML=null
    let boxs = document.createElement("div");
    boxs.classList.add('boxs')
    let p = document.createElement("p");
    boxs.appendChild(p)
    let img=document.createElement("img")
    
    img.setAttribute("src", "./images/Oval.png")
     boxs.appendChild(img)
    document.querySelector(".section_second_container2").appendChild(boxs)
  
})


let Graham = document.querySelector(".Graham")
Graham.addEventListener("click", function () {
    document.querySelector(".section_second_container2").innerHTML = null
    let boxs = document.createElement("div");
    boxs.classList.add('boxs')
    let p = document.createElement("p");
    boxs.appendChild(p)
    let img = document.createElement("img")
    img.setAttribute("src", "./images/Graham.png")
    boxs.appendChild(img)
    document.querySelector(".section_second_container2").appendChild(boxs)

})

let Monic = document.querySelector(".Monic")
Monic.addEventListener("click", function () {
    document.querySelector(".section_second_container2").innerHTML = null
    let boxs = document.createElement("div");
    boxs.classList.add('boxs')
    let p = document.createElement("p");
    boxs.appendChild(p)
    let img = document.createElement("img")
    img.setAttribute("src", "./images/monic.png")
    boxs.appendChild(img)
    document.querySelector(".section_second_container2").appendChild(boxs)

})

let Lee = document.querySelector(".Lee")
Lee.addEventListener("click", function () {
    document.querySelector(".section_second_container2").innerHTML = null
    let boxs = document.createElement("div");
    boxs.classList.add('boxs')
    let p = document.createElement("p");
    boxs.appendChild(p)
    let img = document.createElement("img")
    img.setAttribute("src", "./images/Lee.png")
    boxs.appendChild(img)
    document.querySelector(".section_second_container2").appendChild(boxs)

})

let Plan_boxes = document.querySelector(".Plan_boxes")
let box1 = document.querySelector(".box1")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let cpus = document.querySelectorAll(".cpus")
let normal = document.querySelectorAll(".normal")
let text = document.querySelectorAll(".text")
let text2 = document.querySelectorAll(".text2")
let text1 = document.querySelectorAll(".text1")
let price = document.querySelectorAll(".price")
let price1 = document.querySelector(".price1")
let price2 = document.querySelector(".price2")
console.log()

