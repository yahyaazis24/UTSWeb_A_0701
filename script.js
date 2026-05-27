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