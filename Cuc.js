const BASE_URL = "https:cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"


const  dropdowns =  document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
// for (names in countryList){
// 	console.log(names);
// }

for (let select of dropdowns) {
	for ( let currCode in countryList) {
	  let newOption =document.createElement("option");
	  newOption.innerText = currCode ;
	  newOption.value = currCode ;
	  if (select.name === "from" && currCode === "USD") {
		newOption.selected = "selected"
	  } else if(select.name === "To" && currCode === "INR") {
		newOption.selected = "selected"
	  }
	  select.append(newOption)
	}
	select.addEventListener("change" , (evt) => {
		updateFlag(evt.target);
	})
	
}



// updating flag 
const updateFlag = (element) => {
     let currCode = element.value ;
	 let countryCode = countryList[currCode];
	 let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
	 let img = element.parentElement.querySelector("img");
	 img.src = newSrc ;
}


// exchane button function
btn.addEventListener("click",(evt)=>{
     evt.preventDefault;
	 let amount = document.querySelector("form input" );
	 let amtval = amount.value;
	  if (amtval === "" || amtval < 1) {
		amtval = 1 ;
		amount.value = "1";
		
	  }
})