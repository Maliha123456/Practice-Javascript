
/*objective: get base, height of a triangle,calculate the area using the provIding formula and then display the area
step1: get base value of the triangle
step-2: added an id in the input field
step-3:use getElementById to access the input field
step-4:get value from the input field (value id string)
 step-5:convert the value into number
*/

function triangleArea() {
    const triangleInput = document.getElementById('triangle-base');
    const triangleBase = triangleInput.value;
    const base = parseFloat(triangleBase);
    // console.log(typeof(base));

    // triangle height input 
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeight = triangleHeightInput.value;
    const height = parseFloat(triangleHeight);
    // console.log(typeof(height));

    const area = 0.5 * base * height ;
    console.log(area);

    // / display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
    
}

