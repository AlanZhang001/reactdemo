!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";var n=React.createClass({displayName:"LifeCycle",getInitialState:function(){return{opacity:1}},render:function(){return React.createElement("div",{style:{opacity:this.state.opacity}},"Hello ",this.props.name,",你的名称一闪一闪")},componentDidMount:function(){this.timer=setInterval(function(){var e=this.state.opacity;e-=.05,e<.1&&(e=1),this.setState({opacity:e})}.bind(this),100)}});ReactDOM.render(React.createElement(n,{name:"zhanglun"}),document.querySelector("#hello"))}])});