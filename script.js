//ეს ნაწილი პასუხისმგებელია მობილურ ბურგერ-მენიუზე. getElementById-ით
//DOM ხიდან ამოგვაქვს ღილაკი და მენიუ. კლიკის ივენთის დროს (addEventListener),
//classList.toggle მეთოდით დინამიურად ვუცვლით მენიუს კლასს, რაც CSS-ის
//დახმარებით აჩენს ან მალავს მ

const myButton = document.getElementById("burgerBtn");
const myMenu = document.getElementById("navMenu");

if (myButton && myMenu) {
    myButton.addEventListener("click", function() {
        myMenu.classList.toggle("active");
    });
}
//აქ ვიყენებთ ბრაუზერის მუდმივ მეხსიერებას (LocalStorage). გვერდის ჩატვირთვისას
//getItem-ით ვამოწმებთ, დაეთანხმა თუ არა მომხმარებელი ქუქიებს. თუ პირობა
//სრულდება (=== "true"), შეტყობინების ბანერს პირდაპირ ვმალავთ, ხოლო
//დათანხმების ღილაკზე დაჭერისას setItem-ით ვინახავთ ამ სტატუსს ბრაუზერში.
const cookieBox = document.getElementById("cookie-notification");
const acceptBtn = document.getElementById("accept-cookies");

if (localStorage.getItem("cookiesAccepted") === "true") {
    if (cookieBox) {
        cookieBox.style.display = "none";
    }
}

if (acceptBtn && cookieBox) {
    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBox.style.display = "none";
    });
}
// ეს ბლოკი მუშაობს გლობალურ window ობიექტზე და უსმენს სქროლვის ივენთს. 
// პირობითი ოპერატორით ვამოწმებთ: თუ ჩამოსქროლილი მანძილი (window.scrollY) 
// აცდება 50px-ს, ჰედერს სტილებს ვუცვლით, ხოლო 300px-ის შემდეგ display = "flex" 
// თვისებით ვაჩენთ 'ზემოთ ასასვლელ' ღილაკს, რომელზე დაჭერისას გვერდი გლუვად 
// (behavior: "smooth") ბრუნდება თავში.“
const myHeader = document.querySelector(".main-header");
const topBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        myHeader.style.backgroundColor = "#edeeef";
        myHeader.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    } else {
        myHeader.style.backgroundColor = "white";
        myHeader.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
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