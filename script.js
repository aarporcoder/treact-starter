function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

function toggleFaq(button) {
    const clickedItem = button.parentElement;
    const allFaqs = document.querySelectorAll(".faq");
    
    allFaqs.forEach((item) => {
        if (item !== clickedItem) {
            item.classList.remove("faq--open");
        }
    });
    
    clickedItem.classList.toggle("faq--open");
}

const testimonials = [
    {
        heading: "Amazing User Experience",
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        name: "Charlotte Hale",
        role: "Director, Delos Inc.",
        photo: "./assets/photo-1494790108377-be9c29b29330.avif"
    },
    {
        heading: "Love the Developer Experience and Design Principles !",
        quote: "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        name: "Adam Cuppy",
        role: "Founder, EventsNYC",
        photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80"
    }
];

let currentTestimonial = 0;

function renderTestimonial() {
    const container = document.querySelector(".testimonial");
    const item = testimonials[currentTestimonial];

    container.classList.add("testimonial--fading");

    setTimeout(() => {
        document.getElementById("testimonial-heading").textContent = item.heading;
        document.getElementById("testimonial-quote").textContent = item.quote;
        document.getElementById("testimonial-name").textContent = item.name;
        document.getElementById("testimonial-role").textContent = item.role;

        const photoEl = document.getElementById("testimonial-photo");
        photoEl.src = item.photo;
        photoEl.alt = item.name;

        container.classList.remove("testimonial--fading");
    }, 150);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
}