!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t){"use strict";var r=React.createClass({displayName:"Mytitle",PropTypes:{title:React.PropTypes.string.isRequired},getDefaultProps:function(){return{name:"zhanglun"}},render:function(){return React.createElement("div",null,"title:",this.props.title,",name:",this.props.name)}});ReactDOM.render(React.createElement(r,{title:"string demo"}),document.querySelector("#hello"))}])});