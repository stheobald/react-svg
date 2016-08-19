/* 
*
* This is a copy of the svg-react-loader?raw=true!image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false!./flag.svg
*
*/
var React = require('react');

function Flag (props) {
  console.log('PROPS',props.fill.square)
    return React.createElement("svg",props,[React.createElement("path",{"fill":props.fill.square,"d":"M142.857 260.934h485.714v485.714H142.857z","key":0},[React.createElement("desc",{"key":0},"A Square"),React.createElement("title",{"key":1},"square")]),React.createElement("ellipse",{"cx":"387.143","cy":"515.219","rx":"118.571","ry":"125.714","fill":props.fill.circle,"key":1}),React.createElement("g",{"fill":props.fill.square,"fillRule":"evenodd","key":2},[React.createElement("path",{"d":"M358.03 542.045l100.478-56.304v75.594L358.029 591.87z","fill":"#e9e9ff","key":0}),React.createElement("path",{"d":"M317.143 521.981v59.008l40.886 10.88v-49.824z","fill":"#353564","key":1}),React.createElement("path",{"d":"M317.143 521.981l103.853-87.292 37.512 51.052-100.479 56.304z","fill":"#4d4d9f","key":2}),React.createElement("path",{"d":"M317.143 580.989l103.853-47.34 37.512 27.686-100.479 30.535z","fill":"#afafde","key":3}),React.createElement("path",{"d":"M420.996 434.689v98.96l37.512 27.686v-75.594z","fill":"#d7d7ff","key":4}),React.createElement("path",{"d":"M317.143 521.981l103.853-87.292v98.96l-103.853 47.34z","fill":"#8686bf","key":5})])]);
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