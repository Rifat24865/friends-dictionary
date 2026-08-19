/* =====================================================
   FRIENDS DICTIONARY
   COMPLETE JAVASCRIPT
   46 FRIENDS
===================================================== */


/* =====================================================
   FRIEND DATA
===================================================== */

const friends = [

    {
        id: 1,
        name: "Mohammad Rifat Hossain",
        group: "Humanities",
        phone: "+8801835851551",
        profession: "Private job",
        blood: "A+",
        address: "Nasirabad, Chattogram",
        email: "rifathossain1432015@gmail.com",
        photo: "images/01.jpg"
    },

    {
        id: 2,
        name: "Dipto Das",
        group: "Business studies",
        phone: "+8801648155850",
        profession: "Teacher",
        blood: "B+",
        address: "Baliga, Kaliganj, Gazipur",
        email: "diptodas2468@gmail.com",
        photo: "images/02.jpg"
    },

    {
        id: 3,
        name: "Parbaz Hossain",
        group: "Science",
        phone: "+8801740658882",
        profession: "Software Engineer",
        blood: "O+",
        address: "Chowra, Kaliganj, Gazipur",
        email: "md.parvezcse@gmail.com",
        photo: "images/03.jpg"
    },

    {
        id: 4,
        name: "Parvej Ahmed",
        group: "Science",
        phone: "+8801683259371",
        profession: "Doctor",
        blood: "B+",
        address: "Cumilla, Bangladesh",
        email: "drparvejahamedhridoy@gmail.com",
        photo: "images/04.jpg"
    },

    {
        id: 5,
        name: "Ali Al Rafu Omit",
        group: "Business studies",
        phone: "+8801778188445",
        profession: "Business",
        blood: "A+",
        address: "Kaliganj, Gazipur",
        email: "amit.rafu@gmail.com",
        photo: "images/05.jpg"
    },

    {
        id: 6,
        name: "Shakil Ahmed",
        group: "Humanities",
        phone: "+8801929769941",
        profession: "Pharmacy",
        blood: "A+",
        address: "Baranagar, Kaliganj, Gazipur",
        email: "niloyshakil010@gmail.com",
        photo: "images/06.jpg"
    },

    {
        id: 7,
        name: "Md Gelman Miah",
        group: "Business studies",
        phone: "+8801939871905",
        profession: "Private job",
        blood: "AB+",
        address: "North Badda, Dhaka",
        email: "gelmanmurad796@gmail.com",
        photo: "images/07.jpg"
    },

    {
        id: 8,
        name: "Md Pavel",
        group: "Business studies",
        phone: "+8801627950452",
        profession: "Teacher",
        blood: "B+",
        address: "Islampara, Danga, Palash, Narsingdi",
        email: "pabelmiah544@gmail.com",
        photo: "images/08.jpg"
    },

    {
        id: 9,
        name: "Wahid Hasan",
        group: "Business studies",
        phone: "+8801756850500",
        profession: "Business",
        blood: "A+",
        address: "Dhaka",
        email: "hasanoahied@gmail.com",
        photo: "images/09.jpg"
    },

    {
        id: 10,
        name: "Roman",
        group: "Humanities",
        phone: "+8801890337568",
        profession: "Job",
        blood: "O+",
        address: "Baligaon, Kaliganj",
        email: "r01581081377@gmail.com",
        photo: "images/10.jpg"
    },

    {
        id: 11,
        name: "Kazi Ashrafuzzaman",
        group: "Business studies",
        phone: "+8801827827392",
        profession: "Banker",
        blood: "O+",
        address: "Chowra, Kaliganj",
        email: "kazi.rocky99@gmail.com",
        photo: "images/11.jpg"
    },

    {
        id: 12,
        name: "Hasibul Islam Shanto",
        group: "Science",
        phone: "+8801709820521",
        profession: "Private Job",
        blood: "O+",
        address: "Bhora Chakidarbari, Hazibug, Gazipur sadar",
        email: "shanto.ipe.pau@gmail.com",
        photo: "images/12.jpg"
    },

    {
        id: 13,
        name: "Tarek Hasan",
        group: "Business studies",
        phone: "+8801628968571",
        profession: "Government employee",
        blood: "AB+",
        address: "Baligaon, Kaliganj, Gazipur",
        email: "tarek.hasan8571@gmail.com",
        photo: "images/13.jpg"
    },

    {
        id: 14,
        name: "Mohammad Junaet Hossain",
        group: "Humanities",
        phone: "+8801934494948",
        profession: "Service Holder",
        blood: "AB+",
        address: "Danga, Polash, Narsingdi",
        email: "mdjunayedhossain74162@gmail.com",
        photo: "images/14.jpg"
    },

    {
        id: 15,
        name: "Nafiz Mehmud Khan",
        group: "Science",
        phone: "+8801789683125",
        profession: "Government Employee",
        blood: "B+",
        address: "Mohammadpur, Dhaka",
        email: "nafizbjri26@gmail.com",
        photo: "images/15.jpg"
    },

    {
        id: 16,
        name: "Md Sahadat Hossain",
        group: "Science",
        phone: "+8801302606949",
        profession: "IT",
        blood: "A+",
        address: "Shopnokunjo 8D, Matikata, Cantonment, Dhaka-1206",
        email: "sahadatsagor1047@gmail.com",
        photo: "images/16.jpg"
    },

    {
        id: 17,
        name: "Fahim kaka",
        group: "Business studies",
        phone: "+8801851141140",
        profession: "Business",
        blood: "B-",
        address: "Dorishom, Kaliganj",
        email: "fahimdk39@gmail.com",
        photo: "images/17.jpg"
    },

    {
        id: 18,
        name: "Mohammad Mahbub Hossain",
        group: "Business studies",
        phone: "+8801903235529",
        profession: "Job",
        blood: "B+",
        address: "Islampara, Danga, Palash, Narshigdi",
        email: "mahbubhossain19953@gmail.com",
        photo: "images/18.jpg"
    },

    {
        id: 19,
        name: "Mohammad Limon Bhuyean",
        group: "Humanities",
        phone: "+8801910534595",
        profession: "Teacher",
        blood: "AB+",
        address: "Firinda, Kaliganj, Gazipur",
        email: "md4202213@gmail.com",
        photo: "images/19.jpg"
    },

    {
        id: 20,
        name: "Shaikat Ahmed Riyadh",
        group: "Business studies",
        phone: "+8801918840107",
        profession: "Banker",
        blood: "B+",
        address: "Shakhipur, Tangail",
        email: "msoiket34@gmail.com",
        photo: "images/20.jpg"
    },

    {
        id: 21,
        name: "Masud Rana",
        group: "Business studies",
        phone: "+8801720960899",
        profession: "IE officer (Industrial Engineering and Planning)",
        blood: "A+",
        address: "Dakhin Bhadarty, Kaliganj, Gazipur",
        email: "masudrana20483@gmail.com",
        photo: "images/21.jpg"
    },

    {
        id: 22,
        name: "TUSHER SINGHA",
        group: "Science",
        phone: "+8801679884948",
        profession: "Job",
        blood: "B+",
        address: "Dhaka, Dhanmondi",
        email: "tushersingh43@gmail.com",
        photo: "images/22.jpg"
    },

    {
        id: 23,
        name: "Mohammad Benzir Ahammed",
        group: "Business studies",
        phone: "+8801601635984",
        profession: "Job",
        blood: "O+",
        address: "Durbati",
        email: "mohammadbenzir@gmail.com",
        photo: "images/23.jpg"
    },

    {
        id: 24,
        name: "Faiaz Ahamed Raihan",
        group: "Science",
        phone: "+8801688220410",
        profession: "Private Job",
        blood: "B+",
        address: "Munshiganj",
        email: "mdfaiazraihan@gmail.com",
        photo: "images/24.jpg"
    },

    {
        id: 25,
        name: "Mohammad Al-Amin Miah",
        group: "Science",
        phone: "+8801757570882",
        profession: "Job Holder",
        blood: "A+",
        address: "Islampra, Danga Bazar, Palash, Narsingdi",
        email: "alaminmd8877@gmail.com",
        photo: "images/25.jpg"
    },

    {
        id: 26,
        name: "Mostofa Kaiser",
        group: "Science",
        phone: "+8801743136666",
        profession: "IT Specialist",
        blood: "B+",
        address: "GA, USA",
        email: "makaiser14@hotmail.com",
        photo: "images/26.jpg"
    },

    {
        id: 27,
        name: "Habibur Rahman",
        group: "Business studies",
        phone: "+8801311761051",
        profession: "Sales-superviser Bkash",
        blood: "A+",
        address: "Dokkhin Shom, Kaligonj, Gazipur",
        email: "jabibur.rahman.mridha951@gmail.com",
        photo: "images/27.jpg"
    },

    {
        id: 28,
        name: "Md Tanvir Hossain",
        group: "Science",
        phone: "+8801724261854",
        profession: "Job",
        blood: "B+",
        address: "Kajirchar, Danga, Palash, Narshingdi",
        email: "tanvir19106@gmail.com",
        photo: "images/28.jpg"
    },

    {
        id: 29,
        name: "Md Rubel Miah",
        group: "Humanities",
        phone: "+8801309090022",
        profession: "Business",
        blood: "O+",
        address: "Kazirchar, Danga, Palash, Narsingdi",
        email: "mdakashahmedo580@gmail.com",
        photo: "images/29.jpg"
    },

    {
        id: 30,
        name: "Mohammad Abdullah",
        group: "Business studies",
        phone: "+8801686343494",
        profession: "Accounts Officer (Quality Feeds Ltd.)",
        blood: "B+",
        address: "Velanagar, Narsingdi Sadar, Narsingdi-1602, Dhaka.",
        email: "abdullah.acn365@gmail.com",
        photo: "images/30.jpg"
    },

    {
        id: 31,
        name: "Jahid Sarker",
        group: "Science",
        phone: "+8801783516315",
        profession: "Business",
        blood: "B+",
        address: "Galimpur, Danga, Palash",
        email: "jahidsarker399@gmail.com",
        photo: "images/31.jpg"
    },

    {
        id: 32,
        name: "Mohammad Sarwarul Haque Munna",
        group: "Science",
        phone: "+8801782440444",
        profession: "Engineer",
        blood: "A+",
        address: "Golabari, Kaliganj, Gazipur",
        email: "sarwarulmunna6@gmail.com",
        photo: "images/32.jpg"
    },

    {
        id: 33,
        name: "Abdullah Al Mamun",
        group: "Business studies",
        phone: "+8801754690470",
        profession: "Job",
        blood: "O+",
        address: "Kaliganj, Baranagor",
        email: "am8937412@gmail.com",
        photo: "images/33.jpg"
    },

    {
        id: 34,
        name: "Rijwanui Ahmed (Shuvo)",
        group: "Business studies",
        phone: "+8801682830660",
        profession: "Audit officer",
        blood: "A+",
        address: "Vhaderty, Kaliganj, Gazipur",
        email: "shuvo.ahmed3827@gmail.com",
        photo: "images/34.jpg"
    },

    {
        id: 35,
        name: "Chinibash Singha",
        group: "Business studies",
        phone: "+8801774064847",
        profession: "Medical Information Officer",
        blood: "O+",
        address: "Chowra naya bari kaliganj, Gazipur, Dhaka",
        email: "chinibashsingha@gmali.com",
        photo: "images/35.jpg"
    },

    {
        id: 36,
        name: "Md Zahirul Islam",
        group: "Business studies",
        phone: "+966536264792",
        profession: "Marketing",
        blood: "O+",
        address: "Saudi Arabia",
        email: "mzahirul266@gmail.com",
        photo: "images/36.jpg"
    },

    {
        id: 37,
        name: "Sadik Sheikh",
        group: "Humanities",
        phone: "+8801714662628",
        profession: "Business",
        blood: "B+",
        address: "Kajirchar, Danga, Palash, Narsingdi",
        email: "sheikhsadik023@gmail.com",
        photo: "images/37.jpg"
    },

    {
        id: 38,
        name: "Abdus Salam",
        group: "Science",
        phone: "+8801993522542",
        profession: "Teaching",
        blood: "AB+",
        address: "Chandaya, Kaligonj, Gazipur",
        email: "abdussalam88225@gmail.com",
        photo: "images/38.jpg"
    },

    {
        id: 39,
        name: "Md.Rajib Miah",
        group: "Business studies",
        phone: "+8801727360129",
        profession: "Business",
        blood: "A+",
        address: "Kazair Char, Danga, Polash, Narsingdi",
        email: "raijb27360@gmail.com",
        photo: "images/39.jpg"
    },

    {
        id: 40,
        name: "Mohammad Alimul Hossain",
        group: "Business studies",
        phone: "+8801688123498",
        profession: "Jobholder",
        blood: "O+",
        address: "Baligaon, Kaliganj, Gazipur",
        email: "gmalimulbhuiya@gmail.com",
        photo: "images/40.jpg"
    },

    {
        id: 41,
        name: "Mohammad Al-Amin Hossain",
        group: "Science",
        phone: "+00000000000",
        profession: "Student",
        blood: "A+",
        address: "Romford, London, UK",
        email: "livon.alamin@gmail.com",
        photo: "images/41.jpg"
    },

    {
        id: 42,
        name: "Mehedi Hasan Shaown",
        group: "Business studies",
        phone: "+8801614326490",
        profession: "Job",
        blood: "O+",
        address: "Kaliganj, Gazipur",
        email: "mehedihasanshaon376@gmail.com",
        photo: "images/42.jpg"
    },

    {
        id: 43,
        name: "Mustakin Shourov",
        group: "Business studies",
        phone: "+8801674466596",
        profession: "Job holder",
        blood: "O+",
        address: "Kaliganj",
        email: "mustakin.hossain596@gmail.com",
        photo: "images/43.jpg"
    },

    {
        id: 44,
        name: "Azlan Sha Tushar",
        group: "Business studies",
        phone: "+8801745023602",
        profession: "Job",
        blood: "AB+",
        address: "Mirpur",
        email: "azlantushar1@gmail.com",
        photo: "images/44.jpg"
    },

    {
        id: 45,
        name: "Asaduzzaman (Shaon)",
        group: "Science",
        phone: "+8801866305002",
        profession: "Private Job",
        blood: "B+",
        address: "Kaliganj, Gazipur",
        email: "shaontex5@gmail.com",
        photo: "images/45.jpg"
    },

    {
        id: 46,
        name: "Shoven Ranjan Das",
        group: "Science",
        phone: "+8801400045920",
        profession: "Government Employee",
        blood: "B+",
        address: "Kaliganj, Gazipur",
        email: "ranjandasshoven@gmail.com",
        photo: "images/46.jpg"
    },
{
    id: 47,
    name: "Togor",
    group: "Science",
    phone: "+8801952848373",
    profession: "Job Holder",
    blood: "O+",
    address: "Keraniganj, Dhaka, Bangladesh",
    email: "togor01677@gmail.com",
    photo: "images/47.jpg"
},
   {
    id: 48,
    name: "Abir Ghosh",
    group: "Science",
    phone: "+8801997502680",
    profession: "Doctor",
    blood: "O-",
    address: "Dhanmondi 01, Dhaka, Bangladesh",
    email: "abirghosh46@gmail.com",
    photo: "images/48.jpg"
},
   {
    id: 49,
    name: "Palash Shaha",
    group: "Business studies",
    phone: "+8801905144201",
    profession: "Business",
    blood: "A+",
    address: "Kaliganj Bazar, Kaliganj, Gazipur",
    email: "palashshaha7076@gmail.com",
    photo: "images/49.jpg"
},
   {
    id: 50,
    name: "Mohammad Didarul Alam",
    group: "Business studies",
    phone: "+8801329459198",
    profession: "Expatriate",
    blood: "B+",
    address: "Kaliganj, Gazipur",
    email: "mdsalmanfarsid@gmail.com",
    photo: "images/50.jpg"
}
];

/* =====================================================
   HTML ELEMENTS
===================================================== */

const friendList =
    document.getElementById("friendList");

const searchInput =
    document.getElementById("searchInput");

const friendCount =
    document.getElementById("friendCount");

const sidebarFriendCount =
    document.getElementById("sidebarFriendCount");

const profileImage =
    document.getElementById("profileImage");

const profileName =
    document.getElementById("profileName");

const profileGroup =
    document.getElementById("profileGroup");

const profilePhone =
    document.getElementById("profilePhone");

const profileProfession =
    document.getElementById("profileProfession");

const profileBlood =
    document.getElementById("profileBlood");

const profileAddress =
    document.getElementById("profileAddress");

const profileEmail =
    document.getElementById("profileEmail");


/* =====================================================
   UPDATE FRIEND COUNT
===================================================== */

function updateFriendCount(count) {

    if (friendCount) {
        friendCount.textContent = count;
    }

    if (sidebarFriendCount) {
        sidebarFriendCount.textContent = count;
    }

}


/* =====================================================
   SHOW FRIEND LIST
===================================================== */

function showFriends(list) {

    if (!friendList) {
        console.error("friendList element not found.");
        return;
    }

    friendList.innerHTML = "";

    updateFriendCount(list.length);


    if (list.length === 0) {

        friendList.innerHTML = `
            <div style="
                color:#687482;
                padding:20px 10px;
                text-align:center;
                font-size:13px;
            ">
                No friend found
            </div>
        `;

        return;
    }


    list.forEach((friend, index) => {

        const div =
            document.createElement("div");

        div.className = "friend";


        if (index === 0) {
            div.classList.add("active");
        }


        div.innerHTML = `

            <img
                src="${friend.photo}"
                alt="${friend.name}"
            >

            <div>

                <div class="friend-name">
                    ${friend.name}
                </div>

                <div class="friend-group">
                    ${friend.group}
                </div>

            </div>

        `;


        /* IMAGE FALLBACK */

        const image =
            div.querySelector("img");

        image.addEventListener(
            "error",
            function () {

                this.src =
                    "data:image/svg+xml;charset=UTF-8," +
                    encodeURIComponent(`
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            viewBox="0 0 100 100">

                            <rect
                                width="100"
                                height="100"
                                fill="#171e28"/>

                            <text
                                x="50"
                                y="56"
                                text-anchor="middle"
                                fill="#ffffff"
                                font-size="40">
                                👤
                            </text>

                        </svg>
                    `);

            }
        );


        /* FRIEND CLICK */

        div.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(".friend")
                    .forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });


                div.classList.add("active");

                showProfile(friend);


                /* Mobile sidebar close */

                if (
                    window.innerWidth <= 800
                ) {

                    closeMobileSidebar();

                }

            }
        );


        friendList.appendChild(div);

    });

}


/* =====================================================
   SHOW PROFILE
===================================================== */

function showProfile(friend) {

    if (!friend) {
        return;
    }


    /* PROFILE IMAGE */

    if (profileImage) {

        profileImage.src =
            friend.photo;

        profileImage.alt =
            friend.name;


        profileImage.onerror =
            function () {

                this.src =
                    "data:image/svg+xml;charset=UTF-8," +
                    encodeURIComponent(`
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="300"
                            height="300"
                            viewBox="0 0 300 300">

                            <rect
                                width="300"
                                height="300"
                                fill="#171e28"/>

                            <text
                                x="150"
                                y="170"
                                text-anchor="middle"
                                fill="#ffffff"
                                font-size="100">
                                👤
                            </text>

                        </svg>
                    `);

            };

    }


    /* NAME */

    if (profileName) {

        profileName.textContent =
            friend.name;

    }


    /* GROUP */

    if (profileGroup) {

        profileGroup.textContent =
            friend.group;

    }


    /* PHONE */

    if (profilePhone) {

        profilePhone.textContent =
            friend.phone;

        profilePhone.href =
            "tel:" + friend.phone;

    }


    /* PROFESSION */

    if (profileProfession) {

        profileProfession.textContent =
            friend.profession;

    }


    /* BLOOD */

    if (profileBlood) {

        profileBlood.textContent =
            friend.blood;

    }


    /* ADDRESS */

    if (profileAddress) {

        profileAddress.textContent =
            friend.address;

        profileAddress.href =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(
                friend.address
            );

        profileAddress.target =
            "_blank";

        profileAddress.rel =
            "noopener";

    }


    /* EMAIL */

    if (profileEmail) {

        profileEmail.textContent =
            friend.email;

        profileEmail.href =
            "mailto:" + friend.email;

    }


    /* Profile animation */

    const card =
        document.querySelector(".profile-card");

    if (card) {

        card.classList.remove(
            "profile-refresh"
        );

        void card.offsetWidth;

        card.classList.add(
            "profile-refresh"
        );

    }

}


/* =====================================================
   SEARCH
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const search =
                this.value
                    .toLowerCase()
                    .trim();


            const filtered =
                friends.filter(
                    friend => {

                        return (

                            friend.name
                                .toLowerCase()
                                .includes(search)

                            ||

                            friend.group
                                .toLowerCase()
                                .includes(search)

                            ||

                            friend.profession
                                .toLowerCase()
                                .includes(search)

                            ||

                            friend.blood
                                .toLowerCase()
                                .includes(search)

                            ||

                            friend.address
                                .toLowerCase()
                                .includes(search)

                        );

                    }
                );


            showFriends(filtered);


            if (
                filtered.length > 0
            ) {

                showProfile(
                    filtered[0]
                );

            }

        }
    );

}


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const sidebar =
    document.getElementById("sidebar");

const sidebarOverlay =
    document.getElementById(
        "sidebarOverlay"
    );


/* =====================================================
   OPEN SIDEBAR
===================================================== */

function openMobileSidebar() {

    if (sidebar) {

        sidebar.classList.add(
            "open"
        );

    }


    if (sidebarOverlay) {

        sidebarOverlay.classList.add(
            "show"
        );

    }


    document.body.classList.add(
        "menu-open"
    );

}


/* =====================================================
   CLOSE SIDEBAR
===================================================== */

function closeMobileSidebar() {

    if (sidebar) {

        sidebar.classList.remove(
            "open"
        );

    }


    if (sidebarOverlay) {

        sidebarOverlay.classList.remove(
            "show"
        );

    }


    document.body.classList.remove(
        "menu-open"
    );

}


/* =====================================================
   TOGGLE SIDEBAR
   SAME 3-DOT BUTTON:
   OPEN + CLOSE
===================================================== */

if (menuButton) {

    menuButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            if (
                sidebar &&
                sidebar.classList.contains(
                    "open"
                )
            ) {

                closeMobileSidebar();

            } else {

                openMobileSidebar();

            }

        }
    );

}


/* =====================================================
   OUTSIDE TAP → CLOSE
===================================================== */

if (sidebarOverlay) {

    sidebarOverlay.addEventListener(
        "click",
        function () {

            closeMobileSidebar();

        }
    );

}


/* =====================================================
   FRIEND SELECT → CLOSE MOBILE SIDEBAR
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.closest(".friend") &&
            window.innerWidth <= 800
        ) {

            setTimeout(
                closeMobileSidebar,
                100
            );

        }

    }
);


/* =====================================================
   RESIZE
===================================================== */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 800
        ) {

            closeMobileSidebar();

        }

    }
);


/* =====================================================
   INITIALIZE APP
===================================================== */

function initializeApp() {

    console.log(
        "Friends Dictionary loaded:",
        friends.length,
        "friends"
    );


    updateFriendCount(
        friends.length
    );


    showFriends(
        friends
    );


    showProfile(
        friends[0]
    );

}


/* =====================================================
   START APP
===================================================== */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeApp
    );

} else {

    initializeApp();

}
/* =========================================
   PROFILE PHOTO ZOOM
========================================== */

function initializePhotoZoom() {

    const photoViewer =
        document.getElementById("photoViewer");

    const largeProfileImage =
        document.getElementById("largeProfileImage");

    const profilePhoto =
        document.getElementById("profileImage");

    if (!photoViewer || !largeProfileImage || !profilePhoto) {
        console.warn("Photo viewer elements not found.");
        return;
    }

    profilePhoto.addEventListener("click", () => {

        if (!profilePhoto.src) return;

        largeProfileImage.src =
            profilePhoto.src;

        largeProfileImage.alt =
            profilePhoto.alt;

        photoViewer.classList.add("show");

    });

    photoViewer.addEventListener("click", () => {

        photoViewer.classList.remove("show");

    });

}

if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", initializePhotoZoom);

} else {

    initializePhotoZoom();

}
