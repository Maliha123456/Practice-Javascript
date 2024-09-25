function calculateEllipsArea() {
   const ellipsWidth = getInputValue('ellips-width') ;
   console.log('width of ellips is ',ellipsWidth);
   
   const ellipsLength = getInputValue('ellips-length');
   console.log('length of ellips is ',ellipsLength);
   
   area = 3.14 * ellipsWidth * ellipsLength;
   console.log('area of ellips is ',area);

   setInnerText('ellips-area',area);
   

}