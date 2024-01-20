

let theMiles = document.getElementById('miles-input');

let miles = theMiles.value;

let thePrice = document.getElementById('price-per-gallon');
   
let price = thePrice.value;

let theGallons = document.getElementById('gallons-input');
    
let gallons = theGallons.value;

let mpgDisplay = document.getElementById('mpg');
let totalPriceDisplay = document.getElementById('total-price');

let calculateButton = document.getElementById('calculate').addEventListener('click', ()=>{
    calculate();
})

let work = 'yes it works'
function calculate(){
    mpgDisplay.innerText = theMiles.value / theGallons.value;
    totalPriceDisplay.innerText = thePrice.value * theGallons.value;
    // if (miles === ''){
    //     mpgDisplay.innerText="error: enter miles";
    //     totalPriceDisplay.innerText="error:enter miles";
    // }else if (gallons === ''){
    //     mpgDisplay.innerText="error: enter gallons";
    //     totalPriceDisplay.innerText="error:enter gallons";
    // }else if(price === ''){
    //     totalPriceDisplay.innerText="error: enter price";
    //     mpgDisplay.innerText=miles/gallons
    // }
    }
    

   

