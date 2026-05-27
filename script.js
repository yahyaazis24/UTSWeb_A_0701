console.log("Website De'Tech berhasil dijalankan!");

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    // Ambil kategori
    const filter = button.getAttribute("data-filter");

    // Reset button active
    filterButtons.forEach(btn => {
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-outline-primary");
    });

    // Button aktif
    button.classList.remove("btn-outline-primary");
    button.classList.add("btn-primary");

    // Filter item
    portfolioItems.forEach(item => {

      if (filter === "all") {

        item.style.display = "block";

      } else if (item.classList.contains(filter)) {

        item.style.display = "block";

      } else {

        item.style.display = "none";

      }

    });

  });

});

// Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name === "" || email === "" || message === "") {

    formMessage.innerHTML = "Harap isi semua form!";
    formMessage.style.color = "red";

  } else {

    formMessage.innerHTML = "Pesan berhasil dikirim!";
    formMessage.style.color = "green";

    contactForm.reset();

  }

});