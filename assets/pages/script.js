// catatan : maaf mas atau mbak yang meriksa codingan ini, aslinya saya ingin membuat dengan data yang dinamis yaitu data image menggunakan array atau json, tapi saya belum menemukan caranya. meskipuan sudah tampil tapi tampilannya di website berantakan oleh karena itu saya menggunakan code ini, yang sederhana 🙏.

// menu gallery 
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const itemContainer = document.getElementById("item-container");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      // Menambahkan kelas "active" pada tombol filter yang diklik
      // filterBtns.forEach(function (btn) {
      //   btn.classList.remove("active");
      // });
      // this.classList.add("active");

      // Menampilkan semua item jika filter "Semua" dipilih
      if (filterValue === "all") {
        itemContainer.querySelectorAll(".item").forEach(function (item) {
          console.log(item);
          item.style.display = "block";
        });
      } else {
        // Menyembunyikan item yang tidak sesuai dengan filter
        itemContainer.querySelectorAll(".item").forEach(function (item) {
          if (item.classList.contains(filterValue)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }
    });
  });

  // Search Images
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();

    itemContainer.querySelectorAll(".item").forEach(function (item) {
      const altText = item.getAttribute("alt").toLowerCase();

      if (altText.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});