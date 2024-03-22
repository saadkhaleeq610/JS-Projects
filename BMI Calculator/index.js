const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please give a valid height'
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please give a valid weight'
    } else if(weight < 18.6 || weight > 24.9){
        results.innerHTML = 'Weight is out of normal range'
    }
     else {
        const bmi = (weight / ((height*weight)/10000)).toFixed(2)
    
        results.innerHTML = `<span>The result is ${bmi}</span>`
    }

    

})