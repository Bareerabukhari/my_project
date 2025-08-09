let showMonthly = true;

function togglePricing() {
    let prices = document.querySelectorAll(".price");
    let button = document.getElementById("togglebtn");

    prices.forEach(price => {
        let monthly = price.getAttribute("data-monthly");
        let annual = price.getAttribute("data-annual");
        
        if(showMonthly){
            price.innerHTML = monthly + "$<span>/mon</span>";
        }

        else{
             price.innerHTML = annual + "$<span>/year</span>";
        } 

    });
     if (showMonthly) {
        button.textContent = "Switch to Annual";
    } else {
        button.textContent = "Switch to Monthly";
    }
      
    showMonthly = !showMonthly;
}