
document.addEventListener("DOMContentLoaded", function () {

  const searchButton = document.querySelector(".search-btn");

  searchButton.addEventListener("click", function () {

    const fields = document.querySelectorAll(".field");

    const from = fields[0].querySelector("input").value.trim();
    const to = fields[1].querySelector("input").value.trim();
    const date = fields[2].querySelector("input").value;
    const passengers = fields[3].querySelector("select").value;

    if (!from || !to || !date) {
      alert("Please enter From, To and Departure Date.");
      return;
    }

    if (from.toLowerCase() === to.toLowerCase()) {
      alert("Departure and destination cities cannot be the same.");
      return;
    }

    const selectedDate = new Date(date + "T00:00:00");

    if (selectedDate < new Date(new Date().toDateString())) {
      alert("Please select a valid future travel date.");
      return;
    }

    const bookingSearch = {
      from: from,
      to: to,
      departureDate: date,
      passengers: passengers,
      tripType: document.querySelector(
        'input[name="trip"]:checked'
      ).parentElement.textContent.trim()
    };

    sessionStorage.setItem(
      "flywaysgo_search",
      JSON.stringify(bookingSearch)
    );

    window.location.href = "./flights.html";

  });

});
