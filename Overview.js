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



//constructor
const multiply = new Function("x","y", "return x * y");

//Declaration
function multiply(x, y){
    return x * y;
}

//Expression; the function is anonymous but assigned to a variable
const multiply = function (x,y){
    return x * y;
};

//Expression; the function have their own name
const multiply = function(x, y){
    return x * y;
};


//Arrow function
const multiply = (x, y) => x * y;

//method
const obj = {
    multiply(x, y){
        return x * y;
    }
}




const firstName = function firstName(){
    var frirstName =  "Sumit";
    return frirstName;
};

const lastName = function lastName(){
    var LastName = "Ray";
    return LastName;
};

console.log("hy" + " " + firstName() +" "+ lastName());