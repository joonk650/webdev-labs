let currentSize = 1.4;
const makeBigger = () => {
   currentSize += 0.2;
   document.querySelector('.content').style.fontSize = `${currentSize}em`;
   document.querySelector('h1').style.fontSize = `${currentSize + 0.4}em`;
   //alert('make bigger!');
};

const makeSmaller = () => {
   currentSize -= 0.2;
   document.querySelector('.content').style.fontSize = `${currentSize}em`;
   document.querySelector('h1').style.fontSize = `${currentSize - 0.4}em`;
   //alert('make smaller!');
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
