//ეს ნაწილი პასუხისმგებელია მობილურ ბურგერ-მენიუზე. getElementById-ით
//DOM ხიდან ამოგვაქვს ღილაკი და მენიუ. click ივენთის დროს classList.toggle
//მეთოდით დინამიურად ვუცვლით კლასს, რაც CSS-ის დახმარებით აჩენს ან მალავს მენიუს.
const myButton = document.getElementById("burgerBtn");
const myMenu = document.getElementById("navMenu");

if (myButton && myMenu) {
    myButton.addEventListener("click", function() {
        myMenu.classList.toggle("active");
    });
}
// ქ ვიყენებთ ბრაუზერის მუდმივ მეხსიერებას (LocalStorage). გვერდის ჩატვირთვისას
// getItem-ით ვამოწმებთ, დაეთანხმა თუ არა მომხმარებელი ქუქიებს. თუ პირობა სრულდება,
// შეტყობინებას ვმალავთ, ხოლო დათანხმების ღილაკზე დაჭერისას setItem-ით ვინახავთ
// სტატუსს ბრაუზერში.“
const cookieBox = document.getElementById("cookie-notification");
const acceptBtn = document.getElementById("accept-cookies");

if (localStorage.getItem("cookiesAccepted") === "true") {
    if (cookieBox) cookieBox.style.display = "none";
}

if (acceptBtn && cookieBox) {
    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBox.style.display = "none";
    });
}
//ეს ბლოკი მუშაობს გლობალურ window ობიექტზე და უსმენს სქროლვის ივენთს.
//თუ ჩამოსქროლილი მანძილი (window.scrollY) აცდება 50px-ს, ჰედერს
//სტილებს ვუცვლით, ხოლო 300px-ის შემდეგ ვაჩენთ 'ზემოთ ასასვლელ'
//ღილაკს, რომელზე დაჭერისას window.scrollTo გვერდს გლუვად (smooth) აბრუნებს თავში.“
const myHeader = document.querySelector(".main-header");
const topBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", function() {
    if (myHeader) {
        if (window.scrollY > 50) {
            myHeader.style.backgroundColor = "#edeeef";
            myHeader.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        } else {
            myHeader.style.backgroundColor = "white";
            myHeader.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    }

    if (window.scrollY > 300) {
        if (topBtn) topBtn.style.display = "flex";
    } else {
        if (topBtn) topBtn.style.display = "none";
    }
});

if (topBtn) {
    topBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
// ს არის ასინქრონული ფუნქცია loadUsers, რომელიც გარე API სერვერიდან იწერს 
// იუზერების მონაცემებს. ვიყენებთ fetch მეთოდს და await ოპერატორს ასინქრონული
// პროცესის სამართავად, ხოლო პოტენციურ შეცდომებს (ერორებს) ვაზღვევთ try-catch ბლოკი
async function loadUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3");
        const data = await res.json();
        showData(data);
    } catch (err) {
        console.log(err);
    }
}
