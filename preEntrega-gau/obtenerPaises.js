const dropdown = document.getElementById('locality-dropdown')
const defaultOption = document.createElement('option');
defaultOption.text = 'Seleccione pais';

const url = 'https://restcountries.com/v3.1/all'

document.addEventListener("DOMContentLoaded", function () {
  displayResult();
}); 

function displayResult() {
  document.querySelector('select[name="locality-dropdown"]').onchange = (e) => {
    pais = e.target.value
  };
};

fetch(url)
  .then(  
    function(response) {    
     response.json().then(function(data) { 
      let option;
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name.common;
      	  option.value = data[i].name.common;
          dropdown.appendChild(option);
        }    
      });
    }  
  )
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
});