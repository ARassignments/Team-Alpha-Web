var cards = [
    {
        id: 1,
        img: "image/Echinopsis.jpg",
        disc: "Growing Zone 1-5",
        title: "Echinopsis Chamaecereus - Peanut Cactus (Bare Rooted)",
        price: "661 PKR"
    },
    {
        id: 2,
        img: "image/BUNNY.jpg",
        disc: "Growing Zone 2-4",
        title: "BUNNY EAR CACTUS YELLOW (BARE ROOTED)",
        price: "664 PKR"
    },
    {
        id: 3,
        img: "image/Christmas.jpg",
        disc: "Growing Zone 5-7",
        title: "Christmas Cactus Pink (Bare Rooted)",
        price: "661 PKR"
    },
    {
        id: 4,
        img: "image/Mammillaria.jpg",
        disc: "Growing Zone 10-13",
        title: "Mammillaria Prolifera (Bare Rooted)",
        price: "495 PKR"
    },
    {
        id: 5,
        img: "image/Opuntia.jpg",
        disc: "Growing Zone 2-10",
        title: "Opuntia Monocantha (Bare Rooted)",
        price: "495 PKR"
    },
    {
        id: 6,
        img: "image/MAMMILLARI.jpg",
        disc: "Growing Zone 7-10",
        title: "MAMMILLARIA-SPP (BARE ROOTED)",
        price: "698 PKR"
    },
    {
        id: 7,
        img: "image/WHITE.jpg",
        disc: "Growing Zone 3-7",
        title: "WHITE BUNNY EAR CACTUS (BARE ROOTED)Regu",
        price: "661 PKR"
    },
    {
        id: 8,
        img: "image/Boxe.webp",
        disc: "Growing Zone 8-10",
        title: "Boxer Cactus (Bare Rooted)",
        price: "990 PKR"
    },
    {
        id: 9,
        img: "image/CHOCOLATE.jpg",
        disc: "Growing Zone 1-10",
        title: "CHOCOLATE CACTUS (BARE ROOTED)",
        price: "661 PKR"
    },
    {
        id: 10,
        img: "image/Gymnocalcium.jpg",
        disc: "Growing Zone 2-12",
        title: "Gymnocalcium mihanovichii Saplings",
        price: "994 PKR"
    },
    {
        id: 11,
        img: "image/Anacanthocereus.jpg",
        disc: "Growing Zone 4-5",
        title: "Anacanthocereus fairy tail cactus",
        price: "847 PKR"
    },
    {
        id: 12,
        img: "image/Echinocactus.jpg",
        disc: "Growing Zone 2-4",
        title: "Echinocactus Grusonii (Bare Rooted)",
        price: "1600 PKR"
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

// Generate and insert cards and modals
var homePage = document.getElementById("home-page");
var modalContainer = document.getElementById("modal-container");

cards.forEach((card, index) => {
    var { cardHTML, modalHTML } = generateCardHTML(card, index);
    homePage.innerHTML += cardHTML;
    modalContainer.innerHTML += modalHTML;
});

// Event listeners
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

if (searchBox) {
    searchBox.addEventListener("click", () => {
        navbar.classList.toggle("showInput");
        if (navbar.classList.contains("showInput")) {
            searchBox.classList.replace("bx-search", "bx-x");
        } else {
            searchBox.classList.replace("bx-x", "bx-search");
        }
    });
}

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

if (menuOpenBtn && menuCloseBtn) {
    menuOpenBtn.onclick = function () {
        navLinks.style.left = "0";
    }
    menuCloseBtn.onclick = function () {
        navLinks.style.left = "-100%";
    }
}

let htmlcssArrow = document.querySelector(".htmlcss-arrow");
let moreArrow = document.querySelector(".more-arrow");
let jsArrow = document.querySelector(".js-arrow");

if (htmlcssArrow) {
    htmlcssArrow.onclick = function () {
        navLinks.classList.toggle("show1");
    }
}
if (moreArrow) {
    moreArrow.onclick = function () {
        navLinks.classList.toggle("show2");
    }
}
if (jsArrow) {
    jsArrow.onclick = function () {
        navLinks.classList.toggle("show3");
    }
};