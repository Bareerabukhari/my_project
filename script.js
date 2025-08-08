let showMonthly = true;

function togglePricing(){

    let prices = document.querySelectorAll(".price");
    let toggleBtn = document.getElementById("togglebtn");

    prices.forEach(price => {

        let monthly = price.getAttribute("data-monthly");
        let annual = price.getAttribute("data-annual");
        if(showMonthly){

    
            let annualPrice = price.getAttribute('data-annual');
        price.innerHTML = annualPrice + '$<span>/year</span>';
        }
        else{
              let monthlyPrice = price.getAttribute('data-monthly');
        price.innerHTML = monthlyPrice + '$<span>/mon</span>';
        }
        
    });
    toggleBtn.innerText = showMonthly ? "Switch to Monthly" : "Switch to Annual";
      
    showMonthly = !showMonthly;
}