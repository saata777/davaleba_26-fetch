let currentNumber = 1; 

document.getElementById('fetchProduct').addEventListener('click', async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${currentNumber}`);
        if (!response.ok) {
            throw new Error('პროდუქტი ვერ მოიძებნა');
        }
        const product = await response.json();

    
        const productContainer = document.getElementById('productContainer');
        productContainer.innerHTML = `
            <h2>${product.title}</h2>
            <p>ფასი: $${product.price}</p>
            <img src="${product.image}" alt="${product.title}">
        `;

        currentNumber++;
    } catch (error) {
        console.error('შეცდომა:', error.message);
        alert('პროდუქტი ვერ მოიძებნა ან არ არის დამატებით ინფორმაცია!');
    }
});