// function calculateParallelogramArea() {
//     // const baseInput = document.getElementById()

// const base = getParallelogramBase();
// console.log(base);



// }
// function getParallelogramBase(params) {
//     const baseInput =document.getElementById('parallelogram-base');
//     const baseInputText = baseInput.value ;
//     const base = parseFloat(baseInputText);
//     return base;
    
// }

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    console.log('base value is : ',base);
    
    const height = getInputValue('parallelogram-height');
    console.log('height is : ',height);
     
    area = base * height ;
    console.log('area of parallelogram is ',area);

    setInnerText('parallelogram-area',area);
    
}
function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const input = parseFloat(inputFieldText);
    return input;
    

}
function setInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}
