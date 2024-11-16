// JavaScript for switching content
document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        home: `<section id="home">
                  <h2>Welcome to All Delivery</h2>
                  <p>Choose a delivery option to learn more and proceed with your service.</p>
               </section>`,
        food: `<section id="food">
                  <h2>Food Delivery</h2>
                  <p>Order your favorite meals from top restaurants and have them delivered fast.</p>
                  <button>Order Food Now</button>
               </section>`,
        merchandise: `<section id="merchandise">
                         <h2>Merchandise Delivery</h2>
                         <p>Shop online and let us handle the delivery of your products securely.</p>
                         <button>Shop Merchandise</button>
                      </section>`,
        taxi: `<section id="taxi">
                  <h2>Taxi Service</h2>
                  <p>Need a ride? Book a taxi instantly with our reliable service.</p>
                  <button>Book Taxi</button>
               </section>`,
        walking: `<section id="walking">
                     <h2>Walking Courier</h2>
                     <p>For small, fast deliveries, our walking couriers are ready to help!</p>
                     <button>Hire Walking Courier</button>
                  </section>`,
    };

    const content = document.getElementById("content");

    // Helper function to load a section
    const loadSection = (section) => {
        content.innerHTML = sections[section] || sections.home;
    };

    // Attach event listeners to navigation links
    document.getElementById("food-link").addEventListener("click", () => loadSection("food"));
    document.getElementById("merchandise-link").addEventListener("click", () => loadSection("merchandise"));
    document.getElementById("taxi-link").addEventListener("click", () => loadSection("taxi"));
    document.getElementById("walking-link").addEventListener("click", () => loadSection("walking"));
});
document.addEventListener("DOMContentLoaded", () => {
    const confirmButton = document.getElementById("confirm-rider");
    const riderSelect = document.getElementById("rider-select");

    confirmButton.addEventListener("click", () => {
        const selectedRider = riderSelect.value;
        alert(`You have selected ${selectedRider} as your rider!`);
    });
});
