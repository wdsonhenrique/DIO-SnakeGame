const canvas = document.getElementById("snake");
const context = canvas.getContext("2d");
const box = 32;

const criarBG = () => {
  context.fillStyle = "000000";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();






/* Colors:
#47E500 -- green snake
#000000 -- black bg
#FFFFFF -- food snake
*/
