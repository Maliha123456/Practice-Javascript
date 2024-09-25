function calculateRectangleArea() {
    const rectangularWidth = document.getElementById('rectangle-width');
    const rectangularWidthText = rectangularWidth.value ;
    const width = parseFloat(rectangularWidthText);
    console.log(width);

    const rectangularLength = document.getElementById('rectangle-length');
    const rectangularLengthText =rectangularLength.value;
    const length = parseFloat(rectangularLengthText);
    console.log(length);

    area = width * length ;
    console.log('area of rectangle is : ',area);
    
    // display the area 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
         

}