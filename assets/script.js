const menuButton = document.querySelectorAll(".menu-button"),
        screenOverlay = document.querySelector(".screen-overlay"),
        themeButton = document.querySelector(".theme-button i"),
        sideBarHidden = document.querySelectorAll(".nav-left"),
        body = document.querySelector('body'),
        categoryList = document.querySelector('.category-list'),
        navbar = document.querySelector('.navbar'),
        videoList = document.querySelector('.video-list')

        navbar.style.width = `${window.innerWidth - 20}px`;

 const btnDb = [
    "All",
    "Website",
    "Music",
    "Gaming",
    "Node.js",
    "JavaScript",
    "React.js",
    "TypeScript",
    "Coding",
    "Data analysis",
    "Web Design",
    "HTML",
    "Tailwind",
    "CSS",
    "Express.js",
    "Vue.js"
    ],
    videoDb =[
        {
            videoImage:"https://i.ytimg.com/vi/5fiXEGdEK10/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRRHHojBtYmJ5egiB5TS2bwjdxQA",
            channelLogo:"https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
            videoTitle:"🤖 Build AI Chatbot in HTML CSS & JavaScript | AI Chatbot Tutorial in JavaScript",
            channelName: "codingNepal",
            views:"28 537 просмотров • 1 месяц назад",
        },
        {
            videoImage:"https://i.ytimg.com/vi/ex4ogBJpTwg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGSXyJ6Q4TMt2DTRkjvX6HDmrwhw",
            channelLogo:"https://yt3.googleusercontent.com/qBAPq2BCeBhIp67hfD30vX7JfA4OceEkDF1hN4deJ9XEYGEkJb4VkVTR1fVUFc08tAsHhbUIzQ=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"Harakatda barakat! Mittivine | NmaGap",
            channelName: "NmaGap",
            views:"1 064 200 просмотров • 1 год назад",
        },
        {
            videoImage:"https://i.ytimg.com/vi/QO4iuBYnkjc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZ-STpoIhf_9hh8kE7rOg1yoKYJQ",
            channelLogo:"https://yt3.googleusercontent.com/0PR0HJjvCmfisyIO4XQtF3cGBvbnP0HlnCIf4xqDTN2--H-9OG_LwVlky3Udu-LynFmEIcUlgg=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"QIZLANI O'RASHning eng zo'r yo'li. (tekin master-klass) | KUNDUZIY",
            channelName: "KUNDUZIY",
            views:"329 595 просмотров • 1 год назад",
        },
        {
            videoImage: "https://i.ytimg.com/vi/cFL5efJ6SOs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQHKZyx7Yycf3ByT7IRiCzs6rSlA",
            channelLogo: "https://yt3.googleusercontent.com/rC_fdsgcxFAeZXTgln66MkmKZgyl3qac53UhJpxIGyXsYLTESPxC9kbO09s2UfrM8FTuwgy5RA=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"GTA 5 / QONXO'RLAR KETMAYDI! / JONLI EFIR",
            channelName: "FEZOT",
            views:"14 635 просмотров • 2 часа назад",
        },
        {
            videoImage:  "https://i.ytimg.com/vi/E5yms0kVHaU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNJnHLsHqs1HjFnDMdkvd6tzdxgQ",
            channelLogo: "https://yt3.googleusercontent.com/x3wknvCyE_uzQhWMykn4QlWfRNFa2sGSSH922nyuwVJ6QSelrzR2PGaN0Rku1ny-F3VAF_XTEQ=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"Как генерировать неограниченную энергию бесплатно | Вечный генератор",
            channelName: "Electronic ideas",
            views:"2 213 006 просмотров • 1 год назад",
        },
        {
            videoImage:   "https://i.ytimg.com/vi/pucSEJnijF8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0R2p9WZbqqY_IRie01XareBXV6Q",
            channelLogo:  "https://yt3.googleusercontent.com/ytc/AIdro_lccdmux9fqyj4swlO1PicPnjaNmtNr1qlk6up65epkAXA=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"A Day in Life of Meta Intern in London",
            channelName: "Azim Pulat",
            views:"61 855 просмотров • 2 года назад",
        },
        {
            videoImage:   "https://i.ytimg.com/vi/TfMFR1dnF1g/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCngT_rpV5ZLMnxYlzXHvfZ0Fsi_Q",
            channelLogo:  "https://yt3.googleusercontent.com/ytc/AIdro_nnwQBKHKZtiMfIdgOnMLQvpXpt0QKLddEN16ZLXB9ONA=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"Biz yo'qotib qo'ygan narsani topib olgan millat — Yaponiyada ilmga munosabat haqida",
            channelName: "KunUZ",
            views:"122 400 просмотров • 5 месяцев назад",
        },
        {
            videoImage:   "https://i.ytimg.com/vi/DD_jUJSx8TQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRKVjs6jkmQuf-cEXD2HuRE7C4_A",
            channelLogo:  "https://yt3.googleusercontent.com/DTvyyEzZdoQchiPPyzzlF4rJw_FDS85UyOI9WKywvMDL_Bf0t854SXo5fpesZBy89aps_RNFCw=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"SOMON YO'LI. Mantiq — Oddiy! @toplesofficial x @Xurmomedia",
            channelName: "XURMO",
            views:"72 605 просмотров • 4 месяца назад",
        },
        {
            videoImage:   "https://i.ytimg.com/vi/QPbZflpaG8k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoWZe248DHB7rJLuoH1Zh_W135Qw",
            channelLogo:  "https://yt3.googleusercontent.com/Jw-CVsWn2KguiHUoxBsa-0ZF_7pGBBj_kVKn0aoh8zLUWaA87RNmlsfe8rkW6waLkTpVhPuv=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"\"O'zbekiston Baribir Rivojlanadi | TEXNOPLOV\"",
            channelName: "Texnoplov",
            views:"130 170 просмотров • 12 дней назад",
        },
        {
            videoImage:  "https://i.ytimg.com/vi/Teng_nQncpg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD523Tu-PGP17Oi5B3066fib3e3vw",
            channelLogo:  "https://yt3.googleusercontent.com/vPuJHmNzb1BH1VaKCKLVIYw265_WhJUAUSeD_6-vVAYHRNwwMDvZ7x58kaDkSpSDUzQyzNRM=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"JavaScript to'liq amaliy kurs",
            channelName: "Samar Badriddinov",
            views:"3 411 просмотров • 8 дней назад",
        },
        {
            videoImage:  "https://i.ytimg.com/vi/02fqr3OY1VM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIU8PKXrQQ8zwfDKIPI6OPb7B-iw",
            channelLogo:   "https://yt3.googleusercontent.com/7YnsGVsIcH5xo7jVwupuR_k3rtrjeAjVMUFoezU8zl_PW_PWt_-_uaXYXpYIvxGzBF8No-JeRpc=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"Responsive Pizza Website Design Using HTML CSS And JavaScript",
            channelName: "Bedimcode",
            views:"11 286 просмотров • 2 недели назад",
        },
        {
            videoImage:  "https://i.ytimg.com/vi/Qof3BtORi0E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCP1Ao4a2y2ZevAPKgtPd7XhAWKoA",
            channelLogo:   "https://yt3.googleusercontent.com/ytc/AIdro_mk2Ex-8sW03SBlBX7D1EC5skH0kv9rS3rU9IXq2I-q2Zg=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"New Pinia & Firebase Auth Course!",
            channelName: "Net Ninja",
            views:"15 905 просмотров • 1 месяц назад",
        },
        {
            videoImage:   "https://i.ytimg.com/vi/zUzQG7hmdNM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD26Zi3wlzMPwiMuAhX1nJZUUkc-Q",
            channelLogo:   "https://yt3.googleusercontent.com/kSdTTj4yddGQYeDbdOsOxw9AclUUOkgc4b1L4wPFegL6uO53021fvaHC7Jj2042MbuB96n_2hA=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"Git и GitHub для начинающих 2024",
            channelName: "ITDoctor",
            views:"10 470 просмотров • 5 месяцев назад",
        },
        {
            videoImage:   "https://i.ytimg.com/vi/9qmo-7nJ-NQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDz3VYe_kroXbbCb8978QaNdmH-yg",
            channelLogo:    "https://yt3.googleusercontent.com/ytc/AIdro_lOvG9-i6-61LY9C0tkn3zko_GP7JwbNQTL8xTDvBeYXPch=s160-c-k-c0x00ffffff-no-rj",
            videoTitle:"01. Базовый Javascript - курс для начинающих разработчиков",
            channelName: "Александр Дудукало",
            views:"17 982 просмотра • 1 год назад", 
        },
    ]

// theme ni turini localga joylash

if(localStorage.getItem("darkMode") === "enabled"){
    document.body.classList.add('dark-mode');
    themeButton.classList.replace('ri-moon-line', "ri-sun-line");
}else{
    themeButton.classList.replace('ri-sun-line', "ri-moon-line");
}

//theme ni almashtirish

themeButton.addEventListener("click", () => {
   const isDarkMode = document.body.classList.toggle('dark-mode');
   localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    themeButton.classList.toggle('ri-sun-line', isDarkMode);
    themeButton.classList.toggle('ri-moon-line', !isDarkMode);
})

//menu btn yordamida sidebarga class qoshish
menuButton.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-hidden')

        if(window.innerWidth > 768 && !body.classList.contains('sidebar-hidden')){
            sideBarHidden[1].style.display = "flex"
        }else if(window.innerWidth > 768 && body.classList.contains('sidebar-hidden')){
            sideBarHidden[1].style.display = "none"
        }
    })
})

//sidebar ni yashirish yoki oshkor qilish
screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle('sidebar-hidden')
})

console.log('Screen width:', window.innerWidth);

btnDb.forEach((item, idx) => {
    const newButton = document.createElement('button');
    newButton.textContent = item;
    if(idx === 0 ){
        newButton.classList.add('category-button');
        newButton.classList.add('active');
    }else{
        newButton.classList.add('category-button');
    }

    categoryList.appendChild(newButton)

    
})
//berilgan massiv yordamida ekranga malumotlarni chiqaramiz~
videoDb.forEach((cards) =>{
    const card = document.createElement('a');
    card.classList.add('video-card');
    card.innerHTML = `
            <div class="thumbnail-container">
                <img
                  src="${cards.videoImage}"
                  class="thumbnail"
                  alt="video image"
                />
                <p class="duration">10:30</p>
              </div>
              <div class="video-info">
                <img
                  src="${cards.channelLogo}"
                  class="icon"
                  alt="channel logo"
                />
                <div class="video-details">
                  <h2 class="title">
                    ${cards.videoTitle}
                  </h2>
                  <p class="channel-name">${cards.channelName}</p>
                  <p class="views">${cards.views}</p>
                </div>
            </div>
    `

    videoList.appendChild(card)
})
