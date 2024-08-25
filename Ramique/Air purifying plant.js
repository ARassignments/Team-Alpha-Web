var cards = [{
    id: 1,
    img: "image/Crassul.jpg",
    disc: "Growing Zone 1-5",
    title: "Crassula Jade plant (Kubber plant) Bare Rooted",
    price: "300 PKR"
},
{
    id: 2,
    img: "image/Ivy.jpg",
    disc: "Growing Zone 8-10",
    title: "English Ivy (Bare Rooted)",
    price: "362 PKR"
},
{
    id: 3,
    img: "image/SPIDERPLANT.webp",
    disc: "Growing Zone 5-7",
    title: "SPIDER PLANT AIR PURIFIER (BARE ROOTED)",
    price: "665 PKR"
},
{
    id: 4,
    img: "image/Sanseveria.jpg",
    disc: "Growing Zone 10-13",
    title: "Sanseveria Hybrid Air purifier (Bare Rooted)",
    price: "326 PKR"
},
{
    id: 5,
    img: "image/Tiger.jpg",
    disc: "Growing Zone 2-10",
    title: "Tiger tooth aloe (Bare Rooted)",
    price: "491 PKR"
},
{
    id: 6,
    img: "image/SANSEVERI.jpg",
    disc: "Growing Zone 7-10",
    title: "SANSEVERIA DWARF (SNAKE PLANT) Bare Rooted",
    price: "491 PKR"
},
{
    id: 7,
    img: "image/Christma.jpg",
    disc: "Growing Zone 3-7",
    title: "Christmas Carol Aloe (Bare Rooted)",
    price: "656 PKR"
},
{
    id: 8,
    img: "image/Pink.jpg",
    disc: "Growing Zone 8-10",
    title: "Pink syngonium in 2 inches Netpot",
    price: "656 PKR"
},
{
    id: 9,
    img: "image/Aloe.webp",
    disc: "Growing Zone 1-10",
    title: "Aloe Wansley Green (Bare Rooted)",
    price: "494 PKR"
},
{
    id: 10,
    img: "image/Syngonium.jpg",
    disc: "Growing Zone 2-12",
    title: "Syngonium pixie in 1-2 inches netpot)",
    price: "656 PKR"
},
{
    id: 11,
    img: "image/Philodendron.webp",
    disc: "Growing Zone 4-5",
    title: "Philodendron moonshine in 1-2 inches netpot",
    price: "656 PKR"
},
{
    id: 12,
    img: "image/Alocasia.jpg",
    disc: "Growing Zone 2-4",
    title: "Alocasia Cucullata in 1 inches netpot",
    price: "661 PKR"
},
{
    id: 13,
    img: "image/Whit.jpg",
    disc: "Growing Zone 6-12",
    title: "White Bougainvillea Thai Variety ( 4 inches )",
    price: "700 PKR"
}
];
var modalContainer = document.getElementById("modal-container");
var homePage = document.getElementById("home-page");

// Function to generate card and modal HTML
function generateCardHTML(card, index) {
    var modalId = `exampleModal${index}`;

    // Card HTML
    var cardHTML = `
        <article class="ca">
            <img src="${card.img}" alt="" class="ci">
            <div class="cd">
                <span class="cardd">${card.disc}</span>
                <h2 class="cardt">${card.title}</h2>
                <span class="cardd">${card.price}</span>
                <br>
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#${modalId}">
                    Read More
                </button>
            </div>
        </article>
    `;

    // Modal HTML
    var modalHTML = `
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true" data-bs-backdrop="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="${modalId}Label">${card.title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${card.img}" alt="" class=" img-fluid modal-img">
                        <p style=" font-size: 25px;">Discription = ${card.disc}</p>
                        <p style=" font-size: 25px;">Price = ${card.price}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" id="adt" class="btn btn-primary" onclick="add()">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    return { cardHTML, modalHTML };
}

function add() {
    var add = document.getElementById(adt);
    if (add == document.getElementById(adt)) {
        alert("Product Add to cart Successfully")
    }
    else {
        alert("Invalid Credential")
    }
}

function renderCards(filteredCards) {
    homePage.innerHTML = '';
    modalContainer.innerHTML = '';

    filteredCards.forEach((card, index) => {
        var { cardHTML, modalHTML } = generateCardHTML(card, index);
        homePage.innerHTML += cardHTML;
        modalContainer.innerHTML += modalHTML;
    });
}

// Search function
function searchCards() {
    var query = document.getElementById('search-input').value.toLowerCase();
    var filteredCards = cards.filter(card => card.title.toLowerCase().includes(query));
    renderCards(filteredCards);
}

// Event listener for search input
document.getElementById('search-input').addEventListener('input', searchCards);

// Initial render of all cards
renderCards(cards);


let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
}

let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
}