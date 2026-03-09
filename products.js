async function loadProduct() {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const response = await fetch('./products.json');
    const data = await response.json();

    const product = data.products.find(p => p.id === id);

    if (!product) {
        document.body.innerHTML = "<h1>Product not found</h1>";
        return;
    }

    document.getElementById("title").textContent = product.shortDesc;
    document.getElementById("image").src = product.images[0];
    document.getElementById("description").textContent = product.longDesc;
    document.getElementById("price").textContent = "£" + product.price;
    const emailBtn = document.getElementById("emailBtn");
    emailBtn.href="mailto:info@laptronicsolutions.co.uk?subject=Enquiry about " + encodeURIComponent(product.shortDesc);

    const specList = document.getElementById("specList");

    for (const key in product.specs) {

        const li = document.createElement("li");

        li.textContent = key.toUpperCase() + ": " + product.specs[key];

        specList.appendChild(li);
    }

}

loadProduct();
