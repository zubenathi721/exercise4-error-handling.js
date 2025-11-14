// TODO: Create a function that validates user input
function validateUserInput(input) {
if(input=== "string" || input==="null" || input==="."){
    throw new Error("input cannot be empty");

}
return true;

}
// TODO: Create a function that demonstrates multiple error types
try{
     if (typeof input !== 'string' && typeof input !== 'number') {
            throw "Input should be text or number!";
        }

         if (typeof input=== 'string' && input.length < 1) {
            throw "Text is too short!";
}

} catch(error){
    console.log(input);
}

     

// TODO: Create a collection of helper functions for string manipulation
function validateUserInput(Input) {
    if (isEmpty(Input)) {
        return "Invalid Input";
    }

    let cleaned = removeSpaces(Input);
    let capitalized = capitalizeFirst(cleaned);
    let reversed = reverseString(capitalized);

    return {
        original: Input,
        cleaned,
        capitalized,
        reversed
    };
}

console.log(validateUserInput("  zubenathi  "));
// TODO: Create helper functions for array operations
function filterNumbers(arr) {
    return arr.filter(item => typeof item === "number");
}