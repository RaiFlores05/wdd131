const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastMod = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastMod}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Tegucigalpa Honduras",
    location: "Francisco Morazán, Honduras",
    dedicated: "2013, March, 17",
    area: 28254,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tegucigalpa-honduras/400x250/tegucigalpa-honduras-temple-rendering-1063891-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 328207,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg"
  }];
  
  createTempleCard(temples);

const home = document.querySelector("#home");
const old = document.querySelector("#old");
const news = document.querySelector("#news");
const large = document.querySelector("#large");
const small = document.querySelector("#small");


//Home – displays all the temples stored in the array.
home.addEventListener("click", () =>{
    document.querySelector("main h2").textContent = "Home";
    createTempleCard(temples); 
});

//Old – temples built before 1900
old.addEventListener("click", () =>{

    document.querySelector("main h2").textContent = "Old Temples";

    let oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.substring(0,4));
        return year < 1900;
    });
    createTempleCard(oldTemples);

});

//New – temples built after 2000
news.addEventListener("click", () =>{

    document.querySelector("main h2").textContent = "New Temples";

    let newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.substring(0,4));
        return year > 2000;
    });
    createTempleCard(newTemples);
});

//Small – temples smaller than 10,000 square feet
small.addEventListener("click", () =>{

    document.querySelector("main h2").textContent = "Small Temples";
    
    let smallTemples = temples.filter(temple => temple.area < 10000
    );
    createTempleCard(smallTemples);
});

//Large – temples larger than 90,000 square feet
large.addEventListener("click", () =>{
    document.querySelector("main h2").textContent = "Large Temples";

    let largeTemples = temples.filter(temple => temple.area > 90000
    );
    createTempleCard(largeTemples);
});


//Creating the Cards
  function createTempleCard(filteredTemples){
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt",`${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");    
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);

    })

  }
;