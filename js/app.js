let hotel = {
  vincy: {
    name: "Vincci Selección La Plantacion del Sur",
    img: "img/Vincci_Selección_La_Plantacion_del_Sur.jpg",
    ubcation: "Tenerife, Adeje",
  },
  mirage: {
    name: "Hollywood Mirage",
    img: "img/Hollywood_Mirage.jpg",
    ubcation: "Tenerife, Los Cristianos",
  },
  mencey: {
    name: "Iberostar Heritage Grand Mencey",
    img: "img/Iberostar_Heritage_Grand_Mencey.jpg",
    ubcation: "Tenerife, Santa Cruz de Tenerife",
  },
};

let stars = {
  1: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  2: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  3: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  4: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  5: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

let hotelName =   prompt("Indique el hotel sobre el que quiere hacer la reseña: Vincy, Mirage o Mencey").toLowerCase();

let puntuationStars = parseInt(prompt("Puntuación: 1, 2, 3, 4 o 5 estrellas"));


let isAnonimo = confirm("Quieres que la reseña sea anónyma?"); 

document.querySelector("#name-hotel").innerHTML = hotel[hotelName].name;
document.querySelector("#location-hotel").innerHTML = hotel[hotelName].ubcation;
document.querySelector("#img-hotel").src = hotel[hotelName].img;

document.querySelector(".stars").innerHTML += stars[puntuationStars];

document.querySelector("#anonymus").checked = isAnonimo;