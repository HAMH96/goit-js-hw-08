function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function b(e,t,n){var i,o,r,a,f,l,u=0,c=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,u=t,a=e.apply(r,n)}function h(e){return u=e,f=setTimeout(_,t),c?y(e):a}function k(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-u>=r}function _(){var e=v();if(k(e))return j(e);f=setTimeout(_,function(e){var n=t-(e-l);return s?m(n,r-(e-u)):n}(e))}function j(e){return f=void 0,b&&i?y(e):(i=o=void 0,a)}function w(){var e=v(),n=k(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return h(l);if(s)return f=setTimeout(_,t),y(l)}return void 0===f&&(f=setTimeout(_,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?a:j(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),h=y.children,k=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;for(let e of h)null!=e.firstElementChild?e.firstElementChild.classList.add(`feedback-form__${e.firstElementChild.getAttribute("name")}`):e.classList.add(`feedback-form__${e.getAttribute("type")}`);const[_,j,w]=y.querySelectorAll(".feedback-form__email, .feedback-form__message, .feedback-form__submit");let E={email:"fakemail@fake.com",message:"new001"};const O=localStorage.getItem("feedback-form-state"),S=JSON.parse(O);null!=O&&(_.value=S.email,j.value=S.message);y.addEventListener("input",e(t)((()=>{E={email:_.value,message:j.value},localStorage.setItem("feedback-form-state",JSON.stringify(E))}),500)),w.addEventListener("click",(e=>{k.test(_.value)?(e.preventDefault(),console.log(E),_.value="",j.value="",localStorage.removeItem("feedback-form-state")):alert("El correo no tiene el formato adecuado")}));
//# sourceMappingURL=03-feedback.25d0d03b.js.map