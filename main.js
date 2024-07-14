(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(601),a=t.n(o),r=t(314),i=t.n(r),c=t(417),s=t.n(c),d=new URL(t(613),t.b),m=i()(a()),l=s()(d);m.push([n.id,`/* General Styles */\nbody {\n  margin: 0;\n  font-family: 'Poppins', sans-serif;\n  color: #333;\n  background-color: #f9f9f9;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0;\n}\n\n/* Header Styles */\nheader {\n  background-color: #fff;\n  color: #fff;\n  padding: 1.5rem 0;\n}\n\nheader .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5rem;\n}\n\nheader nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 1rem;\n  display: flex;\n}\n\nheader nav ul li {\n  margin-left: 1rem;\n  font-size: 1.5rem;\n}\n\nheader nav ul li a {\n  color: #002b46;\n  text-decoration: none;\n  font-weight: 900;\n  transition: color 0.3s;\n}\n\nheader nav ul li a:hover {\n  color: #002b46;\n}\n\n/* Hero Section Styles */\n#hero {\n  background-image: url(${l});\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n  text-align: center;\n  padding: 18rem 3rem;\n  position: relative;\n  z-index: 1;\n}\n\n#hero::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: -1;\n}\n\n#hero h2 {\n  font-family: 'Playfair Display', serif;\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n  animation: fadeInDown 1s ease-in-out;\n}\n\n#hero p {\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n  animation: fadeInUp 1s ease-in-out;\n}\n\n#hero .btn {\n  background-color: #ff6347;\n  color: #fff;\n  padding: 0.75rem 2rem;\n  text-decoration: none;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  transition: background-color 0.3s;\n  animation: fadeInUp 1.5s ease-in-out;\n}\n\n#hero .btn:hover {\n  background-color: #e5533d;\n}\n\n@keyframes fadeInDown {\n  from {\n      opacity: 0;\n      transform: translateY(-20px);\n  }\n  to {\n      opacity: 1;\n      transform: translateY(0);\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n      opacity: 0;\n      transform: translateY(20px);\n  }\n  to {\n      opacity: 1;\n      transform: translateY(0);\n  }\n}\n\n/* Menu Section Styles */\n#menu {\n  background-color: #fff;\n  padding: 3rem 1rem;\n}\n\n#menu h2 {\n  text-align: center;\n  margin-bottom: 3rem;\n  font-size: 2.5rem;\n  position: relative;\n}\n\n#menu h2::after {\n  content: '';\n  position: absolute;\n  width: 60px;\n  height: 3px;\n  background-color: #ff6347;\n  bottom: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n\n.menu-item {\n  background-color: #f9f9f9;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.menu-item img {\n  width: 100%;\n  height: auto;\n}\n\n.menu-item:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.menu-content {\n  padding: 1.5rem;\n  text-align: center;\n}\n\n.menu-content h3 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.menu-content p {\n  margin: 0.5rem 0;\n  font-size: 1rem;\n  color: #666;\n}\n\n/* About Section Styles */\n#about {\n  background-color: #f4f4f4;\n  padding: 3rem 1rem;\n  text-align: center;\n}\n\n#about h2 {\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem;\n}\n\n#about p {\n  font-size: 1.2rem;\n  max-width: 800px;\n  margin: 0 auto;\n  color: #666;\n}\n\n/* Footer Styles */\nfooter {\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  padding: 1rem 0;\n}\n\nfooter .social-icons {\n  margin-bottom: 1rem;\n}\n\nfooter .social-icons a {\n  color: #fff;\n  margin: 0 0.5rem;\n  text-decoration: none;\n  font-size: 1.2rem;\n  transition: color 0.3s;\n}\n\nfooter .social-icons a:hover {\n  color: #ff6347;\n}\n\nfooter p {\n  margin: 0;\n  font-size: 1rem;\n}\n\n/* Responsive Styles */\n@media (max-width: 768px) {\n  header .container {\n      flex-direction: column;\n      text-align: center;\n  }\n\n  header nav ul {\n      flex-direction: column;\n      align-items: center;\n  }\n\n  header nav ul li {\n      margin-left: 0;\n      margin-top: 0.5rem;\n  }\n\n  #hero h2 {\n      font-size: 2.5rem;\n  }\n\n  #hero p {\n      font-size: 1.25rem;\n  }\n\n  .menu-grid {\n      grid-template-columns: 1fr;\n  }\n\n  .menu-content h3 {\n      font-size: 1.25rem;\n  }\n\n  .menu-content p {\n      font-size: 0.9rem;\n  }\n\n  .menu-content span {\n      font-size: 1rem;\n  }\n\n  #about h2 {\n      font-size: 2rem;\n  }\n\n  #about p {\n      font-size: 1rem;\n  }\n}\n\n@media (max-width: 480px) {\n  #hero h2 {\n      font-size: 2rem;\n  }\n\n  #hero p {\n      font-size: 1rem;\n  }\n\n  .menu-content h3 {\n      font-size: 1.15rem;\n  }\n\n  .menu-content p {\n      font-size: 0.85rem;\n  }\n\n  .menu-content span {\n      font-size: 0.9rem;\n  }\n\n  #about h2 {\n      font-size: 1.75rem;\n  }\n\n  #about p {\n      font-size: 0.9rem;\n  }\n}`,""]);const p=m},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var m=[].concat(n[d]);o&&i[m[0]]||(void 0!==r&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=r),t&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=t):m[2]=t),a&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=a):m[4]="".concat(a)),e.push(m))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],m=r[d]||0,l="".concat(d," ").concat(m);r[d]=m+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=a(u,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var s=o(n,a),d=0;d<r.length;d++){var m=t(r[d]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}r=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},613:(n,e,t)=>{n.exports=t.p+"db3b9bc2f72308fe8822.jpg"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),a=t.n(o),r=t(825),i=t.n(r),c=t(659),s=t.n(c),d=t(56),m=t.n(d),l=t(540),p=t.n(l),u=t(113),f=t.n(u),g=t(208),h={};h.styleTagTransform=f(),h.setAttributes=m(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),a()(g.A,h),g.A&&g.A.locals&&g.A.locals,(()=>{const n=document.body,e=document.createElement("header"),t=document.createElement("div");t.className="container";const o=document.createElement("img"),a=document.createElement("img");o.src="./assets/logo.png",o.alt="BGI logo",o.style.width="20%",o.style.height="auto",a.src="./assets/profiile_image.jpeg",a.alt="profile_image",a.style.width="12%",a.style.borderRadius="50%",a.style.height="auto";const r=document.createElement("nav"),i=document.createElement("ul");["Home","Department","About","Contact","Faculties","Our Campuses"].forEach((n=>{const e=document.createElement("li"),t=document.createElement("a");t.href=`#${n.toLowerCase()}`,t.textContent=n,e.appendChild(t),i.appendChild(e)})),r.appendChild(i),t.appendChild(o),t.appendChild(r),t.appendChild(a),e.appendChild(t),n.appendChild(e)})(),(()=>{const n=document.body,e=document.createElement("section");e.id="hero";const t=document.createElement("div");t.className="container";const o=document.createElement("h2");o.textContent="Welcome to Bansal college of Engineering";const a=document.createElement("p");a.textContent="Providing quality education and excellent placements for over 20 years";const r=document.createElement("a");r.href="#menu",r.className="btn",r.textContent="View Department",t.appendChild(o),t.appendChild(a),t.appendChild(r),e.appendChild(t),n.appendChild(e)})(),(()=>{const n=document.body,e=document.createElement("section");e.id="menu";const t=document.createElement("div");t.className="container";const o=document.createElement("h2");o.textContent="OUR DEPARTMENT";const a=document.createElement("div");a.className="menu-grid",[{name:"Computer science Engineering",description:"The Computer Science & Engineering (CSE) department at Bansal College of Engineering is dedicated to providing students with a solid foundation in computer science principles and practices.",img:"./assets/cs.png"},{name:"Mechanical Enginnering",description:"The Mechanical Engineering department at Bansal College of Engineering offers a comprehensive education in the principles of mechanics, thermodynamics, materials science, and structural analysis. ",img:"./assets/me.png"},{name:"civil Enginnering",description:"The Civil Engineering department at Bansal College of Engineering focuses on educating students in the planning, design, construction, and maintenance of infrastructure projects such as buildings, roads, bridges, and water systems.",img:"./assets/ce.png"},{name:"Electrical Electronic Enginneering",description:"The Electrical & Electronics Engineering (EEE) department at Bansal College of Engineering provides a robust education in the fields of electrical circuits, electronics, power systems, control systems, and telecommunications.",img:"./assets/ee.png"},{name:"Electronic & communication Engineering",description:"The Electronics and Communication Engineering (ECE) department at Bansal College of Engineering offers an in-depth education in electronic devices, circuits, communication systems, and signal processing.",img:"./assets/ec.png"},{name:"1st year Engineering",description:"The First Year Engineering program at Bansal College of Engineering provides a strong foundation in basic engineering principles and sciences. Students are introduced to core subjects such as mathematics, physics, chemistry, and basic engineering disciplines like mechanical, electrical, and computer science.",img:"./assets/ml.png"}].forEach((n=>{const e=document.createElement("div");e.className="menu-item";const t=document.createElement("img");t.src=n.img,t.alt=n.name;const o=document.createElement("div");o.className="menu-content";const r=document.createElement("h3");r.textContent=n.name;const i=document.createElement("p");i.textContent=n.description,o.appendChild(r),o.appendChild(i),e.appendChild(t),e.appendChild(o),a.appendChild(e)})),t.appendChild(o),t.appendChild(a),e.appendChild(t),n.appendChild(e)})(),(()=>{const n=document.body,e=document.createElement("section");e.id="menu";const t=document.createElement("div");t.className="container";const o=document.createElement("h2");o.textContent="FACILITIES";const a=document.createElement("div");a.className="menu-grid",[{name:"Transport",img:"./assets/f1.jpg"},{name:"Computer Labs",img:"./assets/f2.jpg"},{name:"Communication Development",img:"./assets/f3.jpeg"},{name:" Big Library",img:"./assets/f4.jpg"},{name:"Training & Innovation",img:"./assets/f5.jpg"},{name:"Vibrant Campus",img:"./assets/f6.jpg"}].forEach((n=>{const e=document.createElement("div");e.className="menu-item";const t=document.createElement("img");t.src=n.img,t.alt=n.name;const o=document.createElement("div");o.className="menu-content";const r=document.createElement("h3");r.textContent=n.name;const i=document.createElement("p");i.textContent=n.description,o.appendChild(r),o.appendChild(i),e.appendChild(t),e.appendChild(o),a.appendChild(e)})),t.appendChild(o),t.appendChild(a),e.appendChild(t),n.appendChild(e)})(),(()=>{const n=document.body,e=document.createElement("section");e.id="menu";const t=document.createElement("div");t.className="container";const o=document.createElement("h2");o.textContent="OUR CAMPUSES";const a=document.createElement("div");a.className="menu-grid",[{name:"BGI BHOPAL",img:"./assets/c1.jpg"},{name:"BGI INDORE",img:"./assets/c2.jpg"},{name:"BGI MANDIDEEP",img:"./assets/c3.jpg"}].forEach((n=>{const e=document.createElement("div");e.className="menu-item";const t=document.createElement("img");t.src=n.img,t.alt=n.name;const o=document.createElement("div");o.className="menu-content";const r=document.createElement("h3");r.textContent=n.name;const i=document.createElement("p");i.textContent=n.description,o.appendChild(r),o.appendChild(i),e.appendChild(t),e.appendChild(o),a.appendChild(e)})),t.appendChild(o),t.appendChild(a),e.appendChild(t),n.appendChild(e)})(),(()=>{const n=document.body,e=document.createElement("section");e.id="about";const t=document.createElement("div");t.className="container";const o=document.createElement("h2");o.textContent="About Us";const a=document.createElement("p");a.textContent="Bansal College of Engineering Mandideep has been laboriously thriving for the past 20 years. It established itself as the premier engineering college in Mandideep and commenced with only 240 students. This glorious institute holds its affiliation with RGPV and provides fine-quality education.",t.appendChild(o),t.appendChild(a),e.appendChild(t),n.appendChild(e)})(),(()=>{const n=document.body,e=document.createElement("footer"),t=document.createElement("div");t.className="container";const o=document.createElement("div");o.className="social-icons",["facebook-f","twitter","instagram","tripadvisor"].forEach((n=>{const e=document.createElement("a");e.href="#";const t=document.createElement("i");t.className=`fab fa-${n}`,e.appendChild(t),o.appendChild(e)}));const a=document.createElement("p");a.innerHTML="&copy; 2024 ABHISHEK PRASAD (0127CS221008) . All Rights Reserved.",t.appendChild(o),t.appendChild(a),e.appendChild(t),n.appendChild(e)})()})();