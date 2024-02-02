//default export
export default function advancedCarousel() {
  console.log("Ben gelişmiş bir karuselim...");
}

//named export
export function carousel() {
  console.log("Ben karusel");
}
//named export
export function basicCarousel() {
  console.log("Ben basit bir karuselim");
}


function compactCarousel(){
    console.log("Ben kompakt bir karuselim");
}

function uberCarousel(){
    console.log("Ben über bir karuselim")
}




export { compactCarousel, uberCarousel };



