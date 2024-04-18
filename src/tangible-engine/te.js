const TangibleEngine = require('./TangibleEngine').default;
const { screen } = require('electron');

//   const tangible = document.querySelector('.tangible')

const init = ( tangible ) => {
  const te = new TangibleEngine();

  te.scaleFunc = (x,y)=>{
    return screen.dipToScreenPoint({x:x,y:y});
  };

  te.on('patterns', response => {
    console.log(response);
  });

  te.on('connect', () => {console.log('Connected to service');});
  te.on('disconnect', () => {console.log('Disconnected from service');});

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
};

module.exports.init = init;