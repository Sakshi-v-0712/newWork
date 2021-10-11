const data = {
    mainTitle: "My Favs",
    cardContents: [{
            name: " Husky",
            imageLink: "https://images.unsplash.com/photo-1633710043114-e33b94c37772?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
            name: "Hampi",
            imageLink: "https://images.unsplash.com/photo-1600100397608-f010f423b971?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        },
        {
            name: "Port Louis",
            imageLink: "https://images.unsplash.com/photo-1581953636842-74649fd3e004?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Zurich",
            imageLink: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80",
        },
    ],
    userData: { name: "SAKSHI", tagLine: "Baby steps !" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
    return `<div class="col-12 col-sm-6 mb-4">
    <div class="tile">
      <div class="tile-text text-center">
        <h5>${name}</h5>
      </div>
      <img 
        src="${imageLink}" />
    </div>
  </div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
    let { name, imageLink } = cardContent;
    cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
    return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
      <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);