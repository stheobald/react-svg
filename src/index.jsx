import React from 'react';
import { render } from 'react-dom';
import OriginalSVG from './flag.svg';
import Candidate from './Candidate.jsx';

class App extends React.Component {
  componentWillMount() {
    console.log(OriginalSVG); // Output here so we can steal the raw code and use it to make loaderRawFlag.jsx
    this.setState({});
  }
 
  render() {
    const change = (target) => (event) => {
      const newProps = {};
      newProps[target] = this.refs[target].value;
      this.setState(newProps);
    }
    
    return (
      <div>
        <h1>Here's a svg image (and a contrived scenario)</h1>
        <h3>It comes from svg. I took the raw=true output from the loader and put some property assignments in it.</h3>
        <h3>This allows the svg colors to be directly influenced by react at render time.</h3>
        <h3>Can we 'tweak' the loader to allow this to happen without the manual steps?</h3>
        <h3> I've made a Candidate.jsx file to illustrate one way that this could be made to work if the loader could support it</h3>
        <h3> Notice how on initial load the svg has it's 'as created' (grey/purple) colors in place, and they're not overridden by 
        the undefined attributes passed as props</h3>
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
        <Candidate 
            attributes={{0:{fill:this.state.square}, 1:{fill:this.state.circle}}}
            style={{height:'600px', width:'600px'}}
        />
      </div>
    )
  }
}
render(<App/>, document.querySelector("#app"));
