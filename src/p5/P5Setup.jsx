import { React } from 'react';
import P5 from 'p5';

class P5Setup extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {

    p.setup = () => {
      // ...
    };

    p.draw = () => {
      // ...
    };
  };

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      <div ref={this.myRef}>

      </div>
    );
  }
}

export default P5Setup;