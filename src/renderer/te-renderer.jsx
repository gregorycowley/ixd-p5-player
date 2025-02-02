
// Screen: Retrieve information about screen size, displays, cursor position, etc.
const { screen } = require('electron');

function app() {
  const TangibleEngine = require('./TangibleEngine').default;
  const te = new TangibleEngine();
  te.scaleFunc = (x,y)=>{
    return screen.dipToScreenPoint({x:x,y:y});
  };
  const tangible = document.querySelector('.tangible');

  te.on('patterns', response => {
    console.log(response);
  });

  te.on('connect', () => console.log('Connected to service'));
  te.on('disconnect', () => console.log('Disconnected from service'));

  te.on('update', response => {
    if (response.TANGIBLES.length > 0) {
      showTangible(tangible);
      updateTangiblePos(
        tangible,
        response.TANGIBLES[0].X,
        response.TANGIBLES[0].Y
      );
      updateTangibleRot(tangible, response.TANGIBLES[0].R);
    } else {
      hideTangible(tangible);
    }
  });

  te.init();
}

function hideTangible(tangible) {
  tangible.style.opacity = 0;
}

function showTangible(tangible) {
  tangible.style.opacity = 1;
}

function updateTangiblePos(tangible, x, y) {
  let newPoint = screen.screenToDipPoint({x:x,y:y});
  const bounds = tangible.getBoundingClientRect();
  tangible.style.left = `${(newPoint.x - bounds.x) * 0.5 +
    bounds.x -
    tangible.clientWidth / 4}px`;
  tangible.style.top = `${(newPoint.y - bounds.y) * 0.5 +
    bounds.y -
    tangible.clientHeight / 4}px`;
}

function updateTangibleRot(tangible, radian) {
  tangible.style.transform = `rotate(${radian * 57.29578}deg)`;
}

app();
