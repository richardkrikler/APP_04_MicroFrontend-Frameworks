!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){Luigi.setConfig({communication:{customMessagesListeners:{"back.to.core":e=>{console.log(e),Luigi.customMessages().sendToAll({id:"to.the.client",data:"beautiful data for the client"})}}},navigation:{nodes:()=>[{pathSegment:"home",label:"Home",icon:"home",viewUrl:"/sampleapp.html#/home",children:[{pathSegment:"products",label:"Products",icon:"product",viewUrl:"http://localhost:8081/"},{pathSegment:"about",label:"About Us",icon:"hint",viewUrl:"/sampleapp.html#/about"},{category:{label:"Links",icon:"cloud"},label:"Luigi Project",externalLink:{url:"https://luigi-project.io/"}},{category:"Links",label:"Luigi Docs",externalLink:{url:"https://docs.luigi-project.io/"}},{category:"Links",label:"SkillDisplay",externalLink:{url:"https://skilldisplay.eu/"}}]}]},settings:{header:{title:"Juice Shop",logo:"/logo.png"},responsiveNavigation:"simpleMobileOnly",sideNavFooterText:"KRI v0.0.0",appLoadingIndicator:{hideAutomatically:!0}}}),console.log(Luigi)}]);