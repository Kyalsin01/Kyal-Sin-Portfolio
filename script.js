// ===================================================
// 1. Mobile Menu Toggle & Auto Close Setup
// ===================================================
const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x'); 
    nav.classList.toggle('active'); 
}

document.querySelectorAll(".links a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove('bx-x');   
        nav.classList.remove('active');  
    });
});


// ===================================================
// 2. Project Portfolio Filter Setup
// ===================================================
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        document.querySelectorAll('.project-box').forEach(box => {
            if (filterValue === 'all' || box.classList.contains(filterValue)) {
                box.classList.remove('hidden'); 
            } else {
                box.classList.add('hidden');   
            }
        });
    });
});