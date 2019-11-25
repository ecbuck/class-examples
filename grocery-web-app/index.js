const  productListElement = document.querySelector(".main");

axios
  .get("http://localhost:3001/api/products")
  .then(function(response) {
    const products = response.data;
    const newProductListElement = document.createElement("div");
    newProductListElement.classList.add("main");

    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      const nameElement = document.createElement("div");
      nameElement.textContent = p.title;
      const imageElement = document.createElement('img');
      imageElement.src = `/images/thumbnails/${p.url}`;
    //   =`/images/thumbnails/${p.url}`;
      const priceElement = document.createElement("div");
      priceElement.textContent = `\$${p.price}`;
      const productElement = document.createElement("div");
      productElement.append(imageElement);
      productElement.append(nameElement);
      productElement.append(priceElement);
      productElement.classList.add("box");

      newProductListElement.append(productElement);
    }
     productListElement.replaceWith(newProductListElement);
    // handle success
    console.log(response);

    // add to the DOM
  })
  .catch(function(error) {
    // handle error
    debugger;
    console.log(error);
  });
