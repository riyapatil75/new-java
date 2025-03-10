const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let InvalidId;
  const startChangingColors = function () {
    if (!InvalidId) InvalidId = setInterval(changeBgColor, 1000);
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColors = function () {
    clearInterval(InvalidId);
    InvalidId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColors);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColors);
  