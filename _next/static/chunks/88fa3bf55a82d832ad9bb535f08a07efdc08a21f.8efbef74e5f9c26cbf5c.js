(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(l.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},l=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,l=e.hasQuery;return n||a&&(void 0!==l&&l)}},"5EUF":function(e,t,n){"use strict";var r,a=n("wx14"),l=n("rePB"),o=n("Ff2n"),i=n("q1tI"),c=n.n(i),s=n("TSYQ"),u=n.n(s);!function(e){e.Outlined="outlined",e.TwoTone="two-tone",e.Round="round",e.Sharp="sharp"}(r||(r={}));var f=c.a.createElement,p=function(e){switch(e){case r.Outlined:return"material-icons-outlined";case r.TwoTone:return"material-icons-two-tone";case r.Round:return"material-icons-round";case"sharp":return r.Sharp;default:return""}};t.a=function(e){var t=e.children,n=e.type,r=e.className,i=Object(o.a)(e,["children","type","className"]);return f("i",Object(a.a)({className:u()("material-icons",r,Object(l.a)({},p(n),n))},i),t)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=c(n("q1tI")),a=c(n("Xuae")),l=n("lwAK"),o=n("FYa8"),i=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var l=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?l=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?l=!1:t.add(a.type);break;case"meta":for(var i=0,c=f.length;i<c;i++){var s=f[i];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?l=!1:n.add(s);else{var u=a.props[s],p=r[s]||new Set;p.has(u)?l=!1:(p.add(u),r[s]=p)}}}return l}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var h=(0,a.default)();function d(e){var t=e.children;return(r.default.createElement(l.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(o.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(h,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(e)},t)}))})))}d.rewind=h.rewind;var m=d;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),l=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||l(e)||o()}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===l)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),l=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),s=n("RIqP");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(i){o(s,i);var c=u(s);function s(e){var l;return r(this,s),l=c.call(this,e),p&&(t.add(a(l)),n(a(l))),l}return l(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),l(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),l=n("7W2i"),o=n("a1gu"),i=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}var s=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var f,p=u(n("q1tI")),h=n("QmWs"),d=n("g/15"),m=s(n("nOHt")),v=n("elyg");function y(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var b=new Map,g=window.IntersectionObserver,w={};function x(){return f||(g?f=new g((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){l(n,e);var t=c(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,l){if(r&&a===t&&l===n)return r;var o=e(a,l);return t=a,n=l,r=o,o}}((function(e,t){return{href:(0,v.addBasePath)(y(e)),as:t?(0,v.addBasePath)(y(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var l=a.formatUrls(a.props.href,a.props.as),o=l.href,i=l.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var c=window.location.pathname;o=(0,h.resolve)(c,o),i=i?(0,h.resolve)(c,i):o,e.preventDefault();var s=a.props.scroll;null==s&&(s=i.indexOf("#")<0),m.default[a.props.replace?"replace":"push"](o,i,{shallow:a.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,h.resolve)(e,n);return[a,r?(0,h.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var l=p.Children.only(t),o={ref:function(t){e.handleRef(t),l&&"object"===typeof l&&l.ref&&("function"===typeof l.ref?l.ref(t):"object"===typeof l.ref&&(l.ref.current=t))},onMouseEnter:function(t){l.props&&"function"===typeof l.props.onMouseEnter&&l.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){l.props&&"function"===typeof l.props.onClick&&l.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==l.type||"href"in l.props)||(o.href=a||r),p.default.cloneElement(l,o)}}]),n}(p.Component);t.default=k},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},malI:function(e,t,n){"use strict";n.d(t,"b",(function(){return _}));var r=n("rePB"),a=n("q1tI"),l=n.n(a),o=n("TSYQ"),i=n.n(o),c=n("YFqc"),s=n.n(c),u=n("5EUF");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=a.createElement("ellipse",{cx:22.585,cy:23.22,fill:"#00034F",rx:15.676,ry:17.505,transform:"rotate(31.103 22.585 23.22)"}),h=a.createElement("ellipse",{fill:"#fff",rx:3.205,ry:3.715,transform:"matrix(.80888 .58798 -.56814 .82293 25.766 17.858)"}),d=a.createElement("path",{stroke:"#fff",strokeWidth:2,d:"M25.874 16.798l5.353-8.872"}),m=a.createElement("path",{fill:"#00034F",d:"M49.984 14.88h2.52v5.64h6.62v-5.64h2.52v14.16h-2.52V22.8h-6.62v6.24h-2.52V14.88zm20.604 12.84h-.06c-.346.547-.786.947-1.32 1.2-.533.24-1.12.36-1.76.36-.44 0-.873-.06-1.3-.18-.413-.12-.786-.3-1.12-.54-.32-.24-.58-.54-.78-.9-.2-.36-.3-.78-.3-1.26 0-.52.094-.96.28-1.32.187-.373.434-.68.74-.92.32-.253.687-.453 1.1-.6.414-.146.84-.253 1.28-.32.454-.08.907-.126 1.36-.14.454-.026.88-.04 1.28-.04h.6v-.26c0-.6-.206-1.046-.62-1.34-.413-.306-.94-.46-1.58-.46-.506 0-.98.094-1.42.28-.44.174-.82.414-1.14.72l-1.26-1.26a4.68 4.68 0 011.86-1.18c.72-.24 1.46-.36 2.22-.36.68 0 1.254.08 1.72.24.467.147.854.34 1.16.58.307.24.54.52.7.84.174.307.294.62.36.94.08.32.127.634.14.94.014.294.02.554.02.78v5.52h-2.16v-1.32zm-.14-2.98h-.5c-.333 0-.706.014-1.12.04a5.671 5.671 0 00-1.18.2c-.36.094-.666.24-.92.44-.253.187-.38.454-.38.8 0 .227.047.42.14.58.107.147.24.274.4.38.16.107.34.187.54.24.2.04.4.06.6.06.827 0 1.434-.193 1.82-.58.4-.4.6-.94.6-1.62v-.54zm11.443-2.42a3.871 3.871 0 00-.88-.7 1.894 1.894 0 00-.94-.26 2.783 2.783 0 00-2.08.88c-.24.267-.427.574-.56.92-.12.347-.18.707-.18 1.08 0 .374.06.734.18 1.08.133.347.32.654.56.92a2.783 2.783 0 002.08.88c.373 0 .72-.073 1.04-.22.32-.16.593-.386.82-.68l1.6 1.72a3.6 3.6 0 01-.84.62c-.307.174-.62.314-.94.42a5.07 5.07 0 01-.92.22c-.294.054-.547.08-.76.08-.72 0-1.4-.12-2.04-.36a4.887 4.887 0 01-1.66-1.02 4.985 4.985 0 01-1.12-1.58c-.267-.626-.4-1.32-.4-2.08s.133-1.446.4-2.06a4.94 4.94 0 011.12-1.6c.466-.44 1.02-.78 1.66-1.02.64-.24 1.32-.36 2.04-.36.613 0 1.226.12 1.84.36a4.118 4.118 0 011.64 1.1l-1.66 1.66zm3.088-8.4h2.4v9.5l3.7-3.98h3.08l-4.12 4.36 4.38 5.24h-3.18l-3.82-4.9h-.04v4.9h-2.4V13.92zm12.662 11.16c.08.72.36 1.28.84 1.68.48.4 1.06.6 1.74.6.6 0 1.1-.12 1.5-.36a4.244 4.244 0 001.08-.94l1.72 1.3c-.56.694-1.186 1.187-1.88 1.48-.693.294-1.42.44-2.18.44-.72 0-1.4-.12-2.04-.36a4.896 4.896 0 01-1.66-1.02 5 5 0 01-1.12-1.58c-.266-.626-.4-1.32-.4-2.08s.134-1.446.4-2.06c.28-.626.654-1.16 1.12-1.6.467-.44 1.02-.78 1.66-1.02.64-.24 1.32-.36 2.04-.36.667 0 1.274.12 1.82.36.56.227 1.034.56 1.42 1 .4.44.707.987.92 1.64.227.64.34 1.38.34 2.22v.66h-7.32zm4.92-1.8c-.013-.706-.233-1.26-.66-1.66-.426-.413-1.02-.62-1.78-.62-.72 0-1.293.207-1.72.62-.413.414-.666.967-.76 1.66h4.92zm4.645-3.84h2.4v1.52h.04c.266-.56.646-.993 1.14-1.3.493-.306 1.06-.46 1.7-.46a2.2 2.2 0 01.42.04c.146.027.293.06.44.1v2.32a4.9 4.9 0 00-.6-.12 2.673 2.673 0 00-.56-.06c-.56 0-1.014.107-1.36.32-.334.2-.594.434-.78.7a2.63 2.63 0 00-.36.8c-.054.267-.08.467-.08.6v5.14h-2.4v-9.6zm12.893 2.66c-.467-.653-1.093-.98-1.88-.98-.32 0-.633.08-.94.24-.307.16-.46.42-.46.78 0 .294.127.507.38.64.253.134.573.247.96.34l1.24.3c.453.094.873.247 1.26.46.387.2.707.48.96.84s.38.854.38 1.48c0 .574-.127 1.06-.38 1.46-.24.387-.56.7-.96.94a4.13 4.13 0 01-1.32.52c-.493.107-.987.16-1.48.16a6.339 6.339 0 01-2.06-.32c-.627-.213-1.187-.6-1.68-1.16l1.6-1.5c.307.347.633.634.98.86.36.214.793.32 1.3.32.173 0 .353-.02.54-.06.187-.04.36-.106.52-.2.16-.093.287-.206.38-.34a.824.824 0 00.16-.5c0-.333-.127-.58-.38-.74a3.214 3.214 0 00-.96-.38 13.98 13.98 0 00-1.26-.28 5.407 5.407 0 01-1.24-.42 2.71 2.71 0 01-.96-.82c-.253-.346-.38-.826-.38-1.44 0-.533.107-.993.32-1.38.227-.4.52-.726.88-.98.36-.253.773-.44 1.24-.56a5.567 5.567 0 013.32.16 3.052 3.052 0 011.52 1.12l-1.6 1.44zm19.805 3.6l3.06 3.34h-3.1l-1.5-1.62c-.574.68-1.187 1.18-1.84 1.5-.654.32-1.434.48-2.34.48a5.951 5.951 0 01-1.82-.28 4.544 4.544 0 01-1.52-.78 4.16 4.16 0 01-1.06-1.3c-.267-.52-.4-1.12-.4-1.8 0-.48.08-.92.24-1.32.16-.413.373-.786.64-1.12.28-.346.606-.646.98-.9.373-.266.773-.48 1.2-.64-.227-.253-.44-.5-.64-.74a6.366 6.366 0 01-.5-.74 4.067 4.067 0 01-.36-.82 3.637 3.637 0 01-.12-.96c0-.573.106-1.08.32-1.52.226-.44.526-.8.9-1.08a3.864 3.864 0 011.3-.66 5.394 5.394 0 011.54-.22c.533 0 1.04.067 1.52.2.48.134.9.34 1.26.62.373.267.666.614.88 1.04.226.427.34.927.34 1.5 0 .44-.08.847-.24 1.22a3.99 3.99 0 01-.64 1 6.1 6.1 0 01-.92.82c-.334.24-.674.447-1.02.62l2.28 2.46 1.58-2.4h2.82l-2.84 4.1zm-4.98-9.02c-.467 0-.867.134-1.2.4-.334.254-.5.594-.5 1.02 0 .187.04.374.12.56.08.174.186.354.32.54.133.174.273.34.42.5.16.16.32.314.48.46.2-.106.413-.226.64-.36.226-.146.433-.306.62-.48.2-.186.36-.386.48-.6.12-.213.18-.453.18-.72 0-.386-.154-.7-.46-.94a1.676 1.676 0 00-1.1-.38zm-.96 6c-.24.147-.474.3-.7.46a3.78 3.78 0 00-.62.5c-.187.187-.34.4-.46.64-.107.24-.16.514-.16.82 0 .307.06.594.18.86.12.267.28.494.48.68.213.187.453.334.72.44.266.107.553.16.86.16.546 0 1.026-.146 1.44-.44.413-.293.8-.613 1.16-.96l-2.9-3.16zm16.782-7.8h4.76c.68 0 1.333.067 1.96.2.64.134 1.2.36 1.68.68.48.307.86.727 1.14 1.26.293.52.44 1.174.44 1.96 0 .894-.153 1.614-.46 2.16-.307.547-.72.974-1.24 1.28-.52.294-1.127.494-1.82.6-.68.107-1.393.16-2.14.16h-1.8v5.86h-2.52V14.88zm4.04 6.14c.36 0 .733-.013 1.12-.04.387-.026.74-.106 1.06-.24.333-.133.6-.333.8-.6.213-.266.32-.64.32-1.12 0-.44-.093-.786-.28-1.04a1.762 1.762 0 00-.72-.6 2.898 2.898 0 00-.98-.28c-.36-.04-.707-.06-1.04-.06h-1.8v3.98h1.52zm13.967 6.7h-.06c-.347.547-.787.947-1.32 1.2-.534.24-1.12.36-1.76.36-.44 0-.874-.06-1.3-.18-.414-.12-.787-.3-1.12-.54-.32-.24-.58-.54-.78-.9-.2-.36-.3-.78-.3-1.26 0-.52.093-.96.28-1.32.186-.373.433-.68.74-.92.32-.253.686-.453 1.1-.6a6.99 6.99 0 011.28-.32c.453-.08.906-.126 1.36-.14.453-.026.88-.04 1.28-.04h.6v-.26c0-.6-.207-1.046-.62-1.34-.414-.306-.94-.46-1.58-.46-.507 0-.98.094-1.42.28-.44.174-.82.414-1.14.72l-1.26-1.26a4.666 4.666 0 011.86-1.18c.72-.24 1.46-.36 2.22-.36.68 0 1.253.08 1.72.24.466.147.853.34 1.16.58.306.24.54.52.7.84.173.307.293.62.36.94.08.32.126.634.14.94.013.294.02.554.02.78v5.52h-2.16v-1.32zm-.14-2.98h-.5c-.334 0-.707.014-1.12.04a5.649 5.649 0 00-1.18.2c-.36.094-.667.24-.92.44-.254.187-.38.454-.38.8 0 .227.046.42.14.58.106.147.24.274.4.38.16.107.34.187.54.24.2.04.4.06.6.06.826 0 1.433-.193 1.82-.58.4-.4.6-.94.6-1.62v-.54zm4.922-5.3h2.4v9.6h-2.4v-9.6zm-.34-3.26c0-.386.14-.72.42-1 .293-.293.66-.44 1.1-.44.44 0 .806.14 1.1.42.306.267.46.607.46 1.02 0 .414-.154.76-.46 1.04-.294.267-.66.4-1.1.4-.44 0-.807-.14-1.1-.42a1.431 1.431 0 01-.42-1.02zm5.495 3.26h2.28v1.54h.04a3.29 3.29 0 011.04-1.24c.467-.36 1.1-.54 1.9-.54.64 0 1.18.107 1.62.32.453.214.82.494 1.1.84.28.347.48.747.6 1.2.12.454.18.927.18 1.42v6.06h-2.4v-4.86c0-.266-.013-.56-.04-.88a2.92 2.92 0 00-.22-.92 1.58 1.58 0 00-.52-.72c-.24-.2-.567-.3-.98-.3-.4 0-.74.067-1.02.2a2.086 2.086 0 00-.68.54 2.25 2.25 0 00-.38.78c-.08.294-.12.6-.12.92v5.24h-2.4v-9.6zm10.364 2.04v-2.04h1.98v-2.78h2.4v2.78h2.64v2.04h-2.64v4.2c0 .48.087.86.26 1.14.187.28.547.42 1.08.42.214 0 .447-.02.7-.06.254-.053.454-.133.6-.24v2.02c-.253.12-.566.2-.94.24-.36.054-.68.08-.96.08-.64 0-1.166-.073-1.58-.22-.4-.133-.72-.34-.96-.62a2.688 2.688 0 01-.48-1.08c-.08-.426-.12-.92-.12-1.48v-4.4h-1.98zm10.814 3.6c.08.72.36 1.28.84 1.68.48.4 1.06.6 1.74.6.6 0 1.1-.12 1.5-.36a4.278 4.278 0 001.08-.94l1.72 1.3c-.56.694-1.187 1.187-1.88 1.48-.693.294-1.42.44-2.18.44-.72 0-1.4-.12-2.04-.36a4.896 4.896 0 01-1.66-1.02 4.985 4.985 0 01-1.12-1.58c-.267-.626-.4-1.32-.4-2.08s.133-1.446.4-2.06a4.94 4.94 0 011.12-1.6c.467-.44 1.02-.78 1.66-1.02.64-.24 1.32-.36 2.04-.36.667 0 1.273.12 1.82.36.56.227 1.033.56 1.42 1 .4.44.707.987.92 1.64.227.64.34 1.38.34 2.22v.66h-7.32zm4.92-1.8c-.013-.706-.233-1.26-.66-1.66-.427-.413-1.02-.62-1.78-.62-.72 0-1.293.207-1.72.62-.413.414-.667.967-.76 1.66h4.92zm4.644-3.84h2.4v1.52h.04c.267-.56.647-.993 1.14-1.3.494-.306 1.06-.46 1.7-.46.147 0 .287.014.42.04.147.027.294.06.44.1v2.32a4.9 4.9 0 00-.6-.12 2.659 2.659 0 00-.56-.06c-.56 0-1.013.107-1.36.32a2.52 2.52 0 00-.78.7 2.68 2.68 0 00-.36.8c-.053.267-.08.467-.08.6v5.14h-2.4v-9.6zm12.894 2.66c-.467-.653-1.094-.98-1.88-.98-.32 0-.634.08-.94.24-.307.16-.46.42-.46.78 0 .294.126.507.38.64.253.134.573.247.96.34l1.24.3c.453.094.873.247 1.26.46.386.2.706.48.96.84.253.36.38.854.38 1.48 0 .574-.127 1.06-.38 1.46-.24.387-.56.7-.96.94a4.13 4.13 0 01-1.32.52 6.97 6.97 0 01-1.48.16 6.335 6.335 0 01-2.06-.32c-.627-.213-1.187-.6-1.68-1.16l1.6-1.5c.306.347.633.634.98.86.36.214.793.32 1.3.32.173 0 .353-.02.54-.06.186-.04.36-.106.52-.2.16-.093.286-.206.38-.34a.83.83 0 00.16-.5c0-.333-.127-.58-.38-.74a3.236 3.236 0 00-.96-.38 13.98 13.98 0 00-1.26-.28 5.391 5.391 0 01-1.24-.42 2.71 2.71 0 01-.96-.82c-.254-.346-.38-.826-.38-1.44 0-.533.106-.993.32-1.38.226-.4.52-.726.88-.98.36-.253.773-.44 1.24-.56a5.567 5.567 0 013.32.16 3.056 3.056 0 011.52 1.12l-1.6 1.44z"});var v=function(e){return a.createElement("svg",f({width:225,height:47,fill:"none",viewBox:"0 0 225 47"},e),p,h,d,m)},y=n("v/zG"),b=n.n(y),g=l.a.createElement,w=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return g("nav",{className:"h-full mx-auto max-w-screen-xxl lg:px-8 flex flex-row items-center justify-between flex-wrap"},g("div",{className:"px-2 sm:px-8 lg:px-0 w-full h-full x lg:w-auto flex justify-between z-20 items-center bg-white"},g(s.a,{href:"/"},g("a",null,g(v,null))),g("div",{className:"block lg:hidden"},g("button",{className:"flex items-center px-3 py-2 focus:outline-none",onClick:function(){n(!t)}},g(u.a,null,"menu")))),g("div",{className:i()("lg:flex lg:items-center lg:w-auto w-full z-10",b.a.listWrapper,Object(r.a)({},b.a.open,t))},g("ul",{className:"lg:flex items-center justify-between text-primary-2-shade pt-0"},g("li",null,g(s.a,{href:"#"},g("a",{className:"lg:p-4 pb-3 pt-0 px-0 block font-avenir"},"Search Database"))),g("li",null,g(s.a,{href:"#"},g("a",{className:"lg:p-4 py-3 px-0 block"},"Features"))),g("li",null,g(s.a,{href:"/pricing"},g("a",{className:"lg:p-4 py-3 px-0 block"},"Pricing"))),g("li",{className:"inline-block"},g(s.a,{href:"#"},g("a",{className:"lg:ml-6 lg:p-4 py-3 px-0  text-primary-2-tint"},"Log in"))),g("li",{className:"inline-block"},g(s.a,{href:"/sign-up/info"},g("button",{className:"ml-4 lg:ml-0 py-1 px-4 text-white rounded-full bg-primary-3-turq focus:outline-none focus:shadow-outline hover:bg-primary-3-shade"},"Sign up"))))))},x=l.a.createElement,k=function(){return x("header",{className:"sticky top-0 h-20 shadow-header bg-white z-10"},x(w,null))},N=l.a.createElement,O=function(){return N("footer",{className:"max-w-screen-xxl mx-auto main-padding text-primary-2-shade"},N("div",{className:"grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 gap-8 mb-16"},N("ul",null,N("li",{className:"py-1",style:{height:"25%"}},N(v,{preserveAspectRatio:"xMinYMin meet",viewBox:"0 0 225 47",height:"100%",width:"100%"}))),N("div",null,N("ul",null,N("li",{className:"font-medium py-2"},"Company"),N("li",{className:"py-2"},N(s.a,{href:"#"},N("a",null,"About"))),N("li",{className:"py-2"},N(s.a,{href:"#"},N("a",null,"Features"))),N("li",{className:"py-2"},N(s.a,{href:"#"},N("a",null,"Careers"))))),N("div",null,N("ul",null,N("li",{className:"font-medium py-2"},"Discover Talent"),N("li",{className:"py-2"},N(s.a,{href:"#"},N("a",null,"Designers"))),N("li",{className:"py-2"},N(s.a,{href:"#"},N("a",null,"Developers"))),N("li",{className:"py-2"},N(s.a,{href:"#"},N("a",null,"Data Scientists"))))),N("div",null,N("ul",null,N("li",{className:"font-medium py-2"},"Help & Support"),N("li",{className:"py-2"},N(s.a,{href:"#"},N("a",null,"Contact Us"))),N("li",{className:"py-2"},N(s.a,{href:"/faq"},N("a",null,"FAQ"))))),N("div",null,N("ul",null,N("li",{className:"font-medium py-2"},"My Account"),N("li",{className:"py-2"},N(s.a,{href:"#"},N("a",null,"Log In"))),N("li",{className:"py-2"},N(s.a,{href:"#"},N("a",null,"Sign Up"))))),N("div",null,N("ul",null,N("li",{className:"font-medium py-2 "},"Stay in Touch"),N("li",{className:"py-2 break-all"},N("button",{className:"text-left",onClick:function(e){e.preventDefault(),window.location.href="mailto:info@hackersandpainters.io?subject=enquiry from website"}},"info@hackersandpainters.io"))))),N("div",{className:"text-xs"},"\xa9 Hackers & Painters\u2122, 2020. All rights reserved |"," ",N(s.a,{href:"#"},N("a",{className:"border-b border-transparent hover:border-primary-2-shade"},"Terms"))," ","|"," ",N(s.a,{href:"#"},N("a",{className:"border-b border-transparent hover:border-primary-2-shade"},"Privacy Policy"))," ","|"," ",N(s.a,{href:"#"},N("a",{className:"border-b border-transparent hover:border-primary-2-shade"},"Cookies Policy"))," ",N("br",null),"Company Registration Number: 12345678"))},S=n("8Kt/"),M=n.n(S),C=l.a.createElement,E=function(){return C(M.a,null,C("link",{rel:"icon",href:"/favicon.ico"}),C("title",null,"Hackers'n painters"),C("link",{href:"https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",rel:"stylesheet"}))},j=n("nOHt"),z=l.a.createElement,I=["/","/about"],P=function(e){var t=e.children,n=Object(j.useRouter)(),a=I.findIndex((function(e){return e===n.pathname}))>-1;return console.log(n.pathname),console.log(a),z("div",{className:"flex flex-col h-full"},z(E,null),z(k,null),z("div",{className:i()("flex-1  w-full",Object(r.a)({},"main-padding max-w-screen-xxl mx-auto",!a))},t),z(O,null))},_=function(e){return z(P,null,e)};t.a=P},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},"v/zG":function(e,t,n){e.exports={listWrapper:"Nav_listWrapper__2D96m",open:"Nav_open__35Hqg"}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}}]);