import React from 'react';
import { render } from 'react-dom';
import OriginalSVG from './flag.svg';
import Flag from './loaderRawFlag.jsx'

class App extends React.Component {
  componentWillMount() {
    console.log(OriginalSVG); // Output here so we can steal the raw code and use it to make loaderRawFlag.jsx
    this.setState({
      fill:{
        circle: '#00dc00',
        square: 'black'
      }
    });
  }
 
  render() {
    const change = (target) => (event) => {
      const { ...newFill } = this.state.fill;
      newFill[target] = this.refs[target].value;
      this.setState({fill:newFill});
    }
    
    
    return (
      <div>
        <h1>Here's a flag (and a contrived scenario)</h1>
        <h3>It comes from svg. I took the raw=true output from the loader and put some property assignments in it.</h3>
        <h3>This allows the svg colors to be directly influenced by react at render time.</h3>
        <h3>Can we 'tweak' the loader to allow this to happen without the manual steps?</h3>
        <div>
          Square: <select 
            ref="square" 
            onChange={change('square')}>
            <option key="black">black</option>
            <option key="red">red</option>
          </select>
          Circle: <select 
            ref="circle" 
            onChange={change('circle')}>
            <option key="green">#00dc00</option>
            <option key="blue">blue</option>
          </select>
          <h3>Current this.state = {JSON.stringify(this.state)}</h3>
        </div>
        <Flag fill={this.state.fill} style={{height:'600px', width:'600px'}}/>
      </div>
    )
  }
}
render(<App/>, document.querySelector("#app"));
