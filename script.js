fetch('https://api.punkapi.com/v2/beers')
        .then(resp => resp.json())
        .then(onDataReady)
        .catch(err => console.log(err));

function onDataReady(loadedData) {
    const beers = loadedData;
    let allBeers = [];
    for (const element of beers) {
        const beer = new Beer(element.id, element.name, element.tagline, element.first_brewed, element.description, element.image_url, element.abv, element.ibu, element.target_fg, element.target_og, element.ebc, element.srm, element.ph, element.attenuation_level, element.volume, element.boil_volume, element.method, element.ingredients, element.food_pairing, element.brewers_tips, element.contributed_by)
        allBeers.push(beer)
    }

    let count = 0;
    loadBeer(allBeers, count);
}

function createData(nameCharact, charNum, val) {
    let string = nameCharact[charNum];
    let valore = val;
    return string + valore;
}

function loadBeer(allBeers, count) {
    const name = document.getElementById("name");
    let nameNode = document.createTextNode(allBeers[count].name);
    name.appendChild(nameNode);

    const charact = document.getElementById("charact");
   // let liElement = document.createElement("li");
    //let elementNode = document.createTextNode(allBeers[0].volume.value);
    //liElement.appendChild(elementNode);
    //charact.appendChild(liElement);
    let charNum = 0;
    let nameCharact = ["Nome: ", "Tagline: ", "Distillata dal: ", "Descrizione: ", "Abv: ", "Ibu: ", "Target FG: ", "Target OG: ", "Ebc: ", "Srm: ", "Ph: ", "Livello di attenuazione: ", "Meglio se accompagnato con: ", "Consiglio del produttore: ", "Contributo di: "]    
    
    for (const element of Object.entries(allBeers[count])) {
        if (element[0] === "name" || element[0] === "id" || element[0] === "imgUrl" || element[0] === "volume" || element[0] === "boilVol"|| element[0] === "method"|| element[0] === "ingredients") {
            continue;
        }
        charNum = charNum + 1;
        let liElement = document.createElement("li");
        let info = createData(nameCharact, charNum, element[1]);
        let elementNode = document.createTextNode(info);
        liElement.appendChild(elementNode);
        charact.appendChild(liElement);
        
    }

    const img = document.getElementById("image");
    loadImage = allBeers[count].imgUrl;
    img.setAttribute("src", loadImage);
    img.setAttribute("width", 100)
}