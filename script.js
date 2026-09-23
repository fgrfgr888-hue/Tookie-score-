/* =========================
   CLUB DATA
========================= */

const leagues = {

    premier: {

        name: "الدوري الإنجليزي",

        clubs: [
            "Arsenal",
            "Chelsea",
            "Liverpool",
            "Manchester City",
            "Manchester United",
            "Tottenham",
            "Newcastle United",
            "Aston Villa"
        ]

    },


    laliga: {

        name: "الدوري الإسباني",

        clubs: [
            "Real Madrid",
            "Barcelona",
            "Atletico Madrid",
            "Athletic Bilbao",
            "Sevilla",
            "Valencia",
            "Villarreal",
            "Real Sociedad"
        ]

    },


    seriea: {

        name: "الدوري الإيطالي",

        clubs: [
            "Inter Milan",
            "AC Milan",
            "Juventus",
            "Napoli",
            "Roma",
            "Lazio",
            "Atalanta",
            "Fiorentina"
        ]

    },


    bundesliga: {

        name: "الدوري الألماني",

        clubs: [
            "Bayern Munich",
            "Borussia Dortmund",
            "RB Leipzig",
            "Bayer Leverkusen",
            "Eintracht Frankfurt",
            "Stuttgart",
            "Werder Bremen",
            "Wolfsburg"
        ]

    },


    ligue1: {

        name: "الدوري الفرنسي",

        clubs: [
            "PSG",
            "Marseille",
            "Lyon",
            "Monaco",
            "Lille",
            "Nice",
            "Rennes",
            "Lens"
        ]

    }

};


/* =========================
   KIT DATA
========================= */

const kits = {

    "Arsenal": [
        createKit("Arsenal", "الدريس الأساسي", 85000),
        createKit("Arsenal", "الدريس الاحتياطي", 85000),
        createKit("Arsenal", "دريس الحارس", 75000)
    ],

    "Chelsea": [
        createKit("Chelsea", "الدريس الأساسي", 85000),
        createKit("Chelsea", "الدريس الاحتياطي", 85000),
        createKit("Chelsea", "دريس الحارس", 75000)
    ],

    "Liverpool": [
        createKit("Liverpool", "الدريس الأساسي", 90000),
        createKit("Liverpool", "الدريس الاحتياطي", 85000),
        createKit("Liverpool", "دريس الحارس", 75000)
    ],

    "Manchester City": [
        createKit("Manchester City", "الدريس الأساسي", 90000),
        createKit("Manchester City", "الدريس الاحتياطي", 85000),
        createKit("Manchester City", "دريس الحارس", 75000)
    ],

    "Manchester United": [
        createKit("Manchester United", "الدريس الأساسي", 90000),
        createKit("Manchester United", "الدريس الاحتياطي", 85000),
        createKit("Manchester United", "دريس الحارس", 75000)
    ],

    "Real Madrid": [
        createKit("Real Madrid", "الدريس الأساسي", 95000),
        createKit("Real Madrid", "الدريس الاحتياطي", 90000),
        createKit("Real Madrid", "دريس الحارس", 80000)
    ],

    "Barcelona": [
        createKit("Barcelona", "الدريس الأساسي", 95000),
        createKit("Barcelona", "الدريس الاحتياطي", 90000),
        createKit("Barcelona", "دريس الحارس", 80000)
    ],

    "Atletico Madrid": [
        createKit("Atletico Madrid", "الدريس الأساسي", 90000),
        createKit("Atletico Madrid", "الدريس الاحتياطي", 85000),
        createKit("Atletico Madrid", "دريس الحارس", 80000)
    ],

    "Inter Milan": [
        createKit("Inter Milan", "الدريس الأساسي", 90000),
        createKit("Inter Milan", "الدريس الاحتياطي", 85000),
        createKit("Inter Milan", "دريس الحارس", 80000)
    ],

    "AC Milan": [
        createKit("AC Milan", "الدريس الأساسي", 90000),
        createKit("AC Milan", "الدريس الاحتياطي", 85000),
        createKit("AC Milan", "دريس الحارس", 80000)
    ],

    "Juventus": [
        createKit("Juventus", "الدريس الأساسي", 95000),
        createKit("Juventus", "الدريس الاحتياطي", 90000),
        createKit("Juventus", "دريس الحارس", 80000)
    ],

    "Bayern Munich": [
        createKit("Bayern Munich", "الدريس الأساسي", 95000),
        createKit("Bayern Munich", "الدريس الاحتياطي", 90000),
        createKit("Bayern Munich", "دريس الحارس", 80000)
    ],

    "Borussia Dortmund": [
        createKit("Borussia Dortmund", "الدريس الأساسي", 90000),
        createKit("Borussia Dortmund", "الدريس الاحتياطي", 85000),
        createKit("Borussia Dortmund", "دريس الحارس", 80000)
    ],

    "PSG": [
        createKit("PSG", "الدريس الأساسي", 95000),
        createKit("PSG", "الدريس الاحتياطي", 90000),
        createKit("PSG", "دريس الحارس", 80000)
    ],

    "Marseille": [
        createKit("Marseille", "الدريس الأساسي", 85000),
        createKit("Marseille", "الدريس الاحتياطي", 80000),
        createKit("Marseille", "دريس الحارس", 75000)
    ]

};


/* =========================
   CREATE KIT
========================= */

function createKit(club, type, price) {

    return {

        id:
            club.replaceAll(" ", "-")
            + "-"
            + type,

        club: club,

        type: type,

        price: price,

        /*
        صورة مؤقتة لكل منتج.
        نبدلها لاحقاً بصور الدريسات الحقيقية.
        */

        image:
            "https://placehold.co/600x700/edf6f0/159447?text="
            + encodeURIComponent(club)

    };

}


/* =========================
   VARIABLES
========================= */

let currentLeague = "premier";

let cart = [];


/* =========================
   FORMAT PRICE
========================= */

function formatPrice(price) {

    return price.toLocaleString("ar-IQ")
        + " د.ع";

}


/* =========================
   SELECT LEAGUE
========================= */

function selectLeague(league, button) {

    currentLeague = league;


    document
        .querySelectorAll(".league-card")
        .forEach(card => {

            card.classList.remove("active");

        });


    button.classList.add("active");


    displayClubs(
        leagues[league].clubs
    );


    document
        .getElementById("kits-container")
        .innerHTML = `

            <div class="empty-kits">

                <div>👕</div>

                <h3>
                    اختار ناديك
                </h3>

                <p>
                    اختار نادي من
                    ${leagues[league].name}
                </p>

            </div>

        `;

}


/* =========================
   DISPLAY CLUBS
========================= */

function displayClubs(clubs) {

    const container =
        document.getElementById(
            "clubs-container"
        );


    container.innerHTML = "";


    clubs.forEach(club => {

        const button =
            document.createElement("button");


        button.className =
            "club-btn";


        button.textContent =
            club;


        button.onclick = () => {

            document
                .querySelectorAll(".club-btn")
                .forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


            button.classList.add("active");


            displayKits(club);

        };


        container.appendChild(button);

    });

}


/* =========================
   DISPLAY KITS
========================= */

function displayKits(club) {

    const container =
        document.getElementById(
            "kits-container"
        );


    const title =
        document.getElementById(
            "selected-club"
        );


    title.textContent =
        "دريسات " + club;


    const clubKits =
        kits[club];


    if (!clubKits) {

        container.innerHTML = `

            <div class="empty-kits">

                <div>👕</div>

                <h3>
                    الدريسات قريباً
                </h3>

                <p>
                    راح نضيف دريسات هذا النادي
                    قريباً.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    clubKits.forEach(kit => {

        const card =
            document.createElement("div");


        card.className =
            "kit-card";


        card.innerHTML = `

            <div class="kit-image">

                <img
                    src="${kit.image}"
                    alt="${kit.club} ${kit.type}"
                >

                <span class="kit-label">
                    ${kit.type}
                </span>

            </div>


            <div class="kit-info">

                <span>
                    ${kit.club}
                </span>

                <h3>
                    ${kit.type}
                </h3>


                <div class="kit-bottom">

                    <strong class="price">
                        ${formatPrice(kit.price)}
                    </strong>

                    <button
                        class="add-btn"
                        onclick="addToCart('${kit.id}')">

                        + أضف للسلة

                    </button>

                </div>

            </div>

        `;


        container.appendChild(card);

    });


    document
        .getElementById("kits")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   ADD TO CART
========================= */

function addToCart(id) {

    let selectedKit = null;


    Object.values(kits).forEach(
        clubKits => {

            clubKits.forEach(kit => {

                if (kit.id === id) {

                    selectedKit = kit;

                }

            });

        }
    );


    if (!selectedKit) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...selectedKit,

            quantity: 1

        });

    }


    updateCart();

    openCart();

}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    const container =
        document.getElementById(
            "cart-items"
        );


    const count =
        document.getElementById(
            "cart-count"
        );


    const totalElement =
        document.getElementById(
            "cart-total"
        );


    const totalItems =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    count.textContent =
        totalItems;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <p>
                    السلة فارغة
                </p>

                <span>
                    أضف دريسك المفضل
                </span>

            </div>

        `;

        totalElement.textContent =
            "0 د.ع";

        return;

    }


    container.innerHTML = "";


    cart.forEach(item => {

        const row =
            document.createElement("div");


        row.className =
            "cart-item";


        row.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.club}"
            >


            <div class="cart-item-info">

                <h4>
                    ${item.club}
                </h4>

                <p>
                    ${item.type}
                </p>

                <div class="quantity">

                    <button
                        onclick="changeQuantity('${item.id}', 1)">
                        +
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity('${item.id}', -1)">
                        −
                    </button>

                </div>

            </div>


            <button
                class="remove"
                onclick="removeFromCart('${item.id}')">

                ✕

            </button>

        `;


        container.appendChild(row);

    });


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    totalElement.textContent =
        formatPrice(total);

}


/* =========================
   QUANTITY
========================= */

function changeQuantity(id, amount) {

    const item =
        cart.find(
            item => item.id === id
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );

    }


    updateCart();

}


/* =========================
   REMOVE
========================= */

function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );


    updateCart();

}


/* =========================
   OPEN CART
========================= */

function openCart() {

    document
        .getElementById("cart-overlay")
        .classList.add("open");

}


/* =========================
   CLOSE CART
========================= */

function closeCart(event) {

    if (
        event &&
        event.target.id !==
        "cart-overlay"
    ) {

        return;

    }


    document
        .getElementById("cart-overlay")
        .classList.remove("open");

}


/* =========================
   CHECKOUT
========================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "السلة فارغة ⚽"
        );

        return;

    }


    alert(
        "تم تجهيز طلبك بنجاح! ⚽\n\n" +
        "بالخطوة القادمة نربط الطلب بالواتساب."
    );

}


/* =========================
   START WEBSITE
========================= */

displayClubs(
    leagues.premier.clubs
);

updateCart();
