let length;
let width;

let a1;
let a2;
let a3;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    
    let area = length * width;   
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker(){

    a1 = parseFloat(document.getElementById('am1').value);
    a2 = parseFloat(document.getElementById('am2').value);
    a3 = parseFloat(document.getElementById('am3').value);

    let total = a1 + a2 + a3;

    document.getElementById('totalamount').innerText = `Total amount is: ${total}`;


}