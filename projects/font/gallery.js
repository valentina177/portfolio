var num = 0;

//Replace with your own values and add additional lines for more images
imgArray = [
  ['images/font1.jpg'],
  ['images/font2.jpg'],
  ['images/font3.jpg'],
  ['images/font4.jpg']
]

//Function called by clicking on 'next' link
//Replace id name with the id name you gave to the img
function slideshowUp() {
  num++;
  num = num % imgArray.length;
  document.getElementById('slide_show').src=imgArray[num];
}

//Function called by clicking on 'previous' link
function slideshowBack() {
  num--;
  if (num < 0) {num=imgArray.length-1;}
  num = num % imgArray.length;
  document.getElementById('slide_show').src=imgArray[num];
}
