
var React = require('react');
var R = require('ramda');

// Pinched from https://github.com/ramda/ramda/wiki/Cookbook#derivative-of-rprops-for-deep-fields
var dotPath = R.useWith(R.path, [R.split('.')]);
var propsDotPath = R.useWith(R.ap, [R.map(dotPath), R.of]);

function Flag (props) {
  const {attributes, ...svgProps} = props;
  const originalAttributes = { // pulled from the tree while it's being standardized
    0: {fill: 'grey'},
    1: {fill: 'purple'},
    2: {fill: 'black',
      0: {fill: '#e9e9ff'},
      1: {fill: '#353564'},
      2: {fill: '#4d4d9f'},
      3: {fill: '#afafde'},
      4: {fill: '#d7d7ff'},
      5: {fill: '#8686bf'},
    },
  };
  
  const attr = (key) => {
    const a =  propsDotPath([key], attributes)[0] || propsDotPath([key], originalAttributes)[0]
    console.log(propsDotPath([key], attributes)[0], propsDotPath([key], originalAttributes)[0], key, a)
    return a
  };
  return React.createElement("svg",svgProps,[
    React.createElement("path",{"fill":attr('0.fill'),"d":"M142.857 260.934h485.714v485.714H142.857z","key":0}), //square
    React.createElement("ellipse",{"cx":"387.143","cy":"515.219","rx":"118.571","ry":"125.714","fill":attr('1.fill'),"key":1}), //circle
    React.createElement("g",{"fill":attr('2.fill'),"fillRule":"evenodd","key":2},[
      React.createElement("path",{"d":"M358.03 542.045l100.478-56.304v75.594L358.029 591.87z","fill":attr('2.0.fill'),"key":0}),
      React.createElement("path",{"d":"M317.143 521.981v59.008l40.886 10.88v-49.824z","fill":attr('2.1.fill'),"key":1}),
      React.createElement("path",{"d":"M317.143 521.981l103.853-87.292 37.512 51.052-100.479 56.304z","fill":attr('2.2.fill'),"key":2}),
      React.createElement("path",{"d":"M317.143 580.989l103.853-47.34 37.512 27.686-100.479 30.535z","fill":attr('2.3.fill'),"key":3}),
      React.createElement("path",{"d":"M420.996 434.689v98.96l37.512 27.686v-75.594z","fill":attr('2.4.fill'),"key":4}),
      React.createElement("path",{"d":"M317.143 521.981l103.853-87.292v98.96l-103.853 47.34z","fill":attr('2.5.fill'),"key":5})
    ])
  ]);
}

Flag.displayName = "Flag";

Flag.defaultProps = {"width":"210mm","height":"297mm","viewBox":"0 0 744.09448819 1052.3622047"};

module.exports = Flag;

Flag.default = Flag;



/*****************
 ** WEBPACK FOOTER
 ** ./src/Flag.svg
 ** module id = 272
 ** module chunks = 0
 **/