document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data
    fetch("js/properties.json")
        .then((response) => response.json())
        .then((data) => {
            const properties = data.properties;
            const propertiesContainer = document.querySelector(".properties");

            // Loop through each property and create HTML elements
            properties.forEach((property) => {
                const propertyDiv = document.createElement("div");
                propertyDiv.classList.add("property");

                propertyDiv.innerHTML = `
                    <h3>${property.name}</h3>
                    <p><strong>Property ID:</strong> ${property.id}</p>
                    <p><strong>Property Name:</strong> ${property.name}</p>
                    <p><strong>Date of Creation :</strong> ${property.dateOfCreation}</p>
                    <p><strong>Location:</strong> ${property.location}</p>
                    <p><strong>Type:</strong> ${property.type}</p>
                    <p><strong>Rent:</strong> ${property.rent}</p>
                `;

                propertiesContainer.appendChild(propertyDiv);
            });
        })
        .catch((error) => console.error("Error fetching data:", error));
});
