//querySelectorAll-ით საიტზე ვპოულობთ ყველა ინფუთს და ციკლით
//სათითაოდ ვუსმენთ მათ. როცა მომხმარებელი ველში ჩაწკაპუნდება (focus),
//მისი სათაური (label) ლურჯდება კლასის დამატებით. როცა სხვაგან გადავა (blur),
//ეს ლურჯი კლასი შორდება და საწყის ფერს უბრუნდება.
document.querySelectorAll('input, textarea, select').forEach(element => {
    element.addEventListener('focus', () => {
        element.parentElement.querySelector('label')?.classList.add('focused-label');
    });
    element.addEventListener('blur', () => {
        element.parentElement.querySelector('label')?.classList.remove('focused-label');
    });
});
//getElementById-ით ვპოულობთ ფორმას. if-ით ვამოწმებთ, რომ ნამდვილად
//არსებობს გვერდზე (ერორების თავიდან ასაცილებლად). როცა მომხმარებელი
//გაგზავნას აწვება (submit), e.preventDefault() ხაზით ვაჩერებთ გვერდის რეფრეშს,
//გამოგვაქვს წარმატების ფანჯარა (alert) და reset() მეთოდით ფორმას მთლიანად ვაცარიელებთ.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('შეტყობინება წარმატებით გაიგზავნა! ჩვენი გუნდი 24 საათში დაგიკავშირდებათ.');
        contactForm.reset();
    });
}
