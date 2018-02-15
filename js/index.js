var btn = document.querySelector("#refresh");
var price = document.querySelector("#price") ;
var currency1 = document.querySelector("#currency1") ;
var currency2 = document.querySelector("#currency2") ;
var currency3 = document.querySelector("#currency3") ;

btn.addEventListener("click" , function(){
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var data = JSON.parse(xhr.responseText) ;
      if(currency2.checked == true)
        price.innerText = data.bpi.GBP.rate_float + "  GBP";
      else if(currency3.checked == true)
        price.innerText = data.bpi.EUR.rate_float + "  EUR";
      else
        price.innerText = data.bpi.USD.rate_float + "  USD";
    }
  }
  xhr.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
  xhr.send() ;
});