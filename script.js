document.addEventListener("DOMContentLoaded", function () {
  // ---------------- WATCHLIST ---------------- //
  const watchForm = document.getElementById("watchlistForm");
  const watchContainer = document.getElementById("watchlistContainer");

  if (watchForm && watchContainer) {
    watchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const movie = document.getElementById("movieToAdd").value;
      if (movie.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = movie;
        watchContainer.appendChild(li);
        watchForm.reset();
      }
    });
  }

  // ---------------- REVIEWS ---------------- //
  const reviewForm = document.getElementById("reviewForm");
  const reviewsContainer = document.getElementById("reviewsContainer");

  if (reviewForm && reviewsContainer) {
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const title = document.getElementById("movieTitle").value;
      const text = document.getElementById("reviewText").value;
      if (title.trim() !== "" && text.trim() !== "") {
        const div = document.createElement("div");
        div.className = "review";
        div.style.backgroundColor = "var(--color1)";
        div.style.padding = "10px";
        div.style.marginTop = "10px";
        div.style.borderRadius = "8px";
        div.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
        reviewsContainer.appendChild(div);
        reviewForm.reset();
      }
    });
  }

  // ---------------- COLOR PALETTE ---------------- //
  const paletteForm = document.getElementById("paletteForm");
  const paletteDisplay = document.getElementById("paletteDisplay");

  if (paletteForm && paletteDisplay) {
    paletteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const colors = paletteForm.querySelectorAll('input[type="color"]');
      paletteDisplay.innerHTML = ""; 

      colors.forEach((color) => {
        const block = document.createElement("div");
        block.className = "color-block";
        block.style.backgroundColor = color.value;
        block.textContent = color.value;
        paletteDisplay.appendChild(block);
      });
    });
  }
});
