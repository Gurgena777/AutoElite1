//ეს ფუნქცია აკონტროლებს პაროლის ველის ვიზუალს. getElementById-ით
//ვპოულობთ ინფუთს და თვალის აიქონს. if-else პირობით ვამოწმებთ ინფუთის
//ტიპს: თუ არის 'password', ვუცვლით ტიპს 'text'-ზე (რომ პაროლი გამოჩნდეს)
//და innerText-ით ვცვლით აიქონს. წინააღმდეგ შემთხვევაში, ისევ ვმალავთ პაროლს.“
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput && eyeIcon) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.innerText = 'visibility_off';
        } else {
            passwordInput.type = 'password';
            eyeIcon.innerText = 'visibility';
        }
    }
}
//აქ ხდება ლოგინის ფორმის გაგზავნის მართვა. submit ივენთის დროს, e.preventDefault()
//მეთოდით ვაჩერებთ ბრაუზერის სტანდარტულ ქცევას (გვერდის რეფრეშს). შემდეგ, .value
//თვისებით ამოგვაქვს ჩაწერილი იმეილი, გამოგვაქვს alert შეტყობინება და ბოლოს
//window.location.href ობიექტის საშუალებით მომხმარებელი გადაგვყავს მთავარ გვერდზე.“
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // გვერდის გადატვირთვის გაჩერება
        
        const emailValue = document.getElementById('email').value;
        alert('სისტემაში შესვლა წარმატებულია! მომხმარებელი: ' + emailValue);
        
        window.location.href = 'index.html';
    });
}