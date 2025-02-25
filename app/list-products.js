import './list-products.scss';

// images
import bodyLotion from "./assets/images/body_lotion.jpg";
import lipGloss from "./assets/images/lip_gloss.jpg";
import bbCream from "./assets/images/bbcream.jpg";
import powder from "./assets/images/powder.jpg";
import primer from "./assets/images/primer.jpg";
import citricSerum from "./assets/images/citric_serum.jpg";
import bathKit from "./assets/images/bath_kit.jpg";
import hyaluronicSerum from "./assets/images/hyaluronic_serum.jpg";
import perfume from "./assets/images/perfume.jpg";
import lipstickMirror from "./assets/images/lipstick_mirror.jpg";
import liquidLipstick from "./assets/images/liquid_lipstick.jpg";
import makeupTrolley from "./assets/images/makeup_trolley.jpg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');
    productsContainer.classList.add('container');

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'g-4');

    const products = [
        { name: 'Body Lotion', description: 'Deeply hydrates and nourishes skin.', image: bodyLotion, price: '$12.99' },
        { name: 'Lip Gloss', description: 'Gives a shiny and plump look.', image: lipGloss, price: '$8.99' },
        { name: 'BB Cream', description: 'Light coverage with skincare benefits.', image: bbCream, price: '$14.99' },
        { name: 'Powder', description: 'Controls shine for a matte finish.', image: powder, price: '$10.99' },
        { name: 'Primer', description: 'Smooths skin for long-lasting makeup.', image: primer, price: '$15.99' },
        { name: 'Citric Serum', description: 'Brightens skin and boosts radiance.', image: citricSerum, price: '$19.99' },
        { name: 'Bath Kit', description: 'Everything for a relaxing bath time.', image: bathKit, price: '$24.99' },
        { name: 'Hyaluronic Serum', description: 'Intensely hydrates for plump skin.', image: hyaluronicSerum, price: '$22.99' },
        { name: 'Perfume', description: 'Long-lasting and luxurious fragrance.', image: perfume, price: '$49.99' },
        { name: 'Lipstick with Mirror', description: 'Bold color with a built-in mirror.', image: lipstickMirror, price: '$11.99' },
        { name: 'Liquid Lipstick', description: 'Matte finish and long-lasting wear.', image: liquidLipstick, price: '$9.99' },
        { name: 'Makeup Trolley', description: 'Organize your makeup essentials.', image: makeupTrolley, price: '$39.99' }
    ];

    products.forEach(product => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'h-100');
        
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.width = '100%'; 
        img.style.height = '250px';
        img.style.objectFit = 'cover';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-center');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.classList.add('card-text', 'fw-bold');
        price.textContent = product.price;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn', 'btn-success', 'w-100');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);
        rowDiv.appendChild(colDiv);
    });

    productsContainer.appendChild(rowDiv);
});
