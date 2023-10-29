// Define house data
const houses = [
    { make: "Bachelor", model: "Civic", year: 99, price: "price less", image: "image4.jpg" },
    { make: "Two-story", model: "Family", year: 2022, price: "$25,000", image: "image1.jpg" },
    { make: "Bachelor", model: "Civic", year: 2023, price: "$24,500", image: "image2.jpg" },
    { make: "Modern", model: "Masterpiece", year: 2022, price: "$35,000", image: "image3.jpg" },
    // Add more houses here with images of the same size
    { make: "Modern", model: "Masterpiece", year: 2022, price: "$35,000", image: "image5.jpg" },
    // Add more houses dynamically as needed
    { make: "Bachelor", model: "Civic", year: 2023, price: "$125,000", image: "image7.jpg" },
    { make: "Bachelor", model: "Civic", year: 2023, price: "$44,000", image: "image8.jpg" },
];

// Function to populate the filter options dynamically
function populateFilterOptions() {
    const yearFilter = document.getElementById('yearFilter');
    const priceFilter = document.getElementById('priceFilter');

    const uniqueYears = [...new Set(houses.map(house => house.year))];
    const uniquePrices = [...new Set(houses.map(house => house.price))];

    yearFilter.innerHTML = `<option value="all">All Years</option>`;
    uniqueYears.forEach(year => {
        yearFilter.innerHTML += `<option value="${year}">${year}</option>`;
    });

    priceFilter.innerHTML = `<option value="all">All Prices</option>`;
    uniquePrices.forEach(price => {
        priceFilter.innerHTML += `<option value="${price}">${price}</option>`;
    }
    );
}

// Function to filter houses based on selected options
function applyFilters() {
    const yearFilterValue = document.getElementById('yearFilter').value;
    const priceFilterValue = document.getElementById('priceFilter').value;

    const filteredHouses = houses.filter(house => {
        const yearMatch = yearFilterValue === 'all' || house.year.toString() === yearFilterValue;
        const priceMatch = priceFilterValue === 'all' || house.price === priceFilterValue;
        return yearMatch && priceMatch;
    });

    // Update the house listings based on the applied filters
    const houseList = document.querySelector('.house-list');
    houseList.innerHTML = ''; // Clear the existing listings

    filteredHouses.forEach((house, index) => {
        const houseCard = document.createElement('div');
        houseCard.classList.add('house-card');
        houseCard.innerHTML = `
            <img src="${house.image}" alt="${house.make} ${house.model}">
            <h2>${house.make} ${house.model}</h2>
            <p>Year: ${house.year}</p>
            <p>Price: ${house.price}</p>
            <button class="buy-button" data-index="${index}">Buy Now</button>
        `;
        houseList.appendChild(houseCard);
    });
}

// Add event listeners to trigger filtering when options change
document.getElementById('yearFilter').addEventListener('change', applyFilters);
document.getElementById('priceFilter').addEventListener('change', applyFilters);

// Call the function to populate filter options
populateFilterOptions();
