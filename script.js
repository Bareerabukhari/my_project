let showMonthly = true;

function togglePricing(){

    let prices = document.querySelectorAll(".price");

    prices.forEach(price => {

        let monthly = price.getAttribute("data-monthly");
        let annual = price.getAttribute("data-annual");
        if(showMonthly){

            price.innerHTML = monthly+ "$/mon";
        }
        else{
             price.innerHTML = annual + "$/year";
        }
        
    });
     
      
    showMonthly = !showMonthly;
}