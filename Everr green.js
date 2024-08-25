var cards = [
    {
        id: 1,
        img: "image/plant.jpg",
        disc: "Garden and Pation",
        title: "Variegated Cast Iron Plant",
        price: "5740 PKR"
    },
    {
        id: 2,
        img: "image/iron.jpg",
        disc: "Growing Zone 4-11",
        title: "Dwarf Tiny Tank Cast Iron Plant",
        price: "5700 PKR"
    },
    {
        id: 3,
        img: "image/juniper.jpg",
        disc: "Garden and pation",
        title: "Hollywood Juniper Tree",
        price: "13300 PKR"
    },
    {
        id: 4,
        img: "image/tea.jpg",
        disc: "Growing Zone 6-9",
        title: "Tea Plant (Camellia Sinensis)",
        price: "4100 PKR"
    },
    {
        id: 5,
        img: "image/Gardenia.jpg",
        disc: "Growing Zone 9-10",
        title: "Large Braided Gardenia",
        price: "7000 PKR"
    },
    {
        id: 6,
        img: "image/Giant.jpg",
        disc: "Growing Zone 5-8",
        title: "Thuja Green Giant",
        price: "1400 PKR"
    },
    {
        id: 7,
        img: "image/Green.jpg",
        disc: "Growing Zone 3-8",
        title: "Emerald Green Arborvitae",
        price: "1400 PKR"
    },
    {
        id: 8,
        img: "image/Olive.jpg",
        disc: "Growing Zone 7-10",
        title: "Fragrant Tea Olive Tree",
        price: "4200 PKR"
    },
    {
        id: 9,
        img: "image/Thuja.jpg",
        disc: "Growing Zone 5-8",
        title: "Thuja Virginian",
        price: "5700 PKR"
    },
    {
        id: 10,
        img: "image/Radican.jpg",
        disc: "Growing Zone 7-10",
        title: "Radicans Gardenia",
        price: "5700 PKR"
    },
    {
        id: 11,
        img: "image/Sunshine.jpg",
        disc: "Growing Zone 6-10",
        title: "Sunshine Ligustrum",
        price: "11000 PKR"
    },
    {
        id: 12,
        img: "image/baby.jpg",
        disc: "Growing Zone 2-7",
        title: "Baby Blue Spruce",
        price: "8200 PKR"
    }
];
var modalContainer = document.getElementById("modal-container");
var homePage = document.getElementById("home-page");
var cart = {}; // To keep track of items added to the cart
var cartCountElement = document.getElementById("cart-count"); // Cart count display

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
                        <img src="${card.img}" alt="" class="img-fluid modal-img">
                        <p style="font-size: 25px;">Description: ${card.disc}</p>
                        <p style="font-size: 25px;">Price: ${card.price}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="addToCart(${card.id})">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    return { cardHTML, modalHTML };
}

// Function to add items to cart
function addToCart(cardId) {
    if (cart[cardId]) {
        cart[cardId] += 1; // Increment count if item is already in the cart
    } else {
        cart[cardId] = 1; // Add new item with count 1
    }
    updateCartCount(); // Update cart count display
}

// Function to update cart count display
function updateCartCount() {
    var totalCount = Object.values(cart).reduce((a, b) => a + b, 0); // Sum up all counts
    cartCountElement.textContent = totalCount;
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





