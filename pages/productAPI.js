// productAPI.js

// Fetch data from the API
fetch('https://crudcrud.com/api/your-api-endpoint') // Replace with your actual API endpoint
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');

        // Loop through the data and create product cards
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('kolom');

            productCard.innerHTML = `
                <div class="card">
                    <img src="${product.image}" style="width: 50%;">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <h2>Rp ${product.price}</h2>
                </div>
            `;

            productList.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });