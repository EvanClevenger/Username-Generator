//this is the only function in this folder
//this  function calls the API

const LoadRandomUsername = (resultDiv) => { //the only thing passed into this function is a referance to the place that we want to populate the results
    fetch('http://localhost:3001/animal')
    .then(response => response.json()) //converts the response, from the fetch, into a javascript object
    .then(result => {
        resultDiv.innerHTML = `<h2>${result.animal} ${result.number}<h2>`;
    }) //populates the result div as an argument 
}

//simply all this function does is sends a network request and reads the response that comes back