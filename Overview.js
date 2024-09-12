function formatNumber(num){
    return num.toFixed(2);
}

formatNumber(2);

function updatedBrand(obj){

    // Muatting the object is visiable outside the function.
    obj.brand = "Honda";
    obj.model = "city";
}

const car ={
    brand: "hero",
    model: "Accord",
    year:"300",
};// this is the object of an car brand & model.


console.log(car.brand); // this console.log will print the object brand Name (Hero).

updatedBrand(car);// Passing the object references to the Function.


//UpadateBrand and model using object with function.
console.log(car.brand, car.model)