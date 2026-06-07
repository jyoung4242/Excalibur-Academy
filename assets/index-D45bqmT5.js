(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,l,{is:u,defineProperty:d,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:f,getPrototypeOf:ne}=Object,p=globalThis,re=p.trustedTypes,ie=re?re.emptyScript:``,ae=p.reactiveElementPolyfillSupport,oe=(e,t)=>e,se={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ce=(e,t)=>!u(e,t),le={attribute:!0,type:String,converter:se,reflect:!1,useDefault:!1,hasChanged:ce};(l=Symbol).metadata??(l.metadata=Symbol(`metadata`)),p.litPropertyMetadata??(p.litPropertyMetadata=new WeakMap);var m=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??le}static _$Ei(){if(this.hasOwnProperty(oe(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oe(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe(`properties`))){let e=this.properties,t=[...te(e),...f(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?se:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?se:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??(n=a.getPropertyOptions(e)),!((n.hasChanged??ce)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};m.elementStyles=[],m.shadowRootOptions={mode:`open`},m[oe(`elementProperties`)]=new Map,m[oe(`finalized`)]=new Map,ae?.({ReactiveElement:m}),(p.reactiveElementVersions??(p.reactiveElementVersions=[])).push(`2.1.2`);var ue=globalThis,de=e=>e,fe=ue.trustedTypes,pe=fe?fe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,me=`$lit$`,h=`lit$${Math.random().toFixed(9).slice(2)}$`,he=`?`+h,ge=`<${he}>`,g=document,_=()=>g.createComment(``),v=e=>e===null||typeof e!=`object`&&typeof e!=`function`,_e=Array.isArray,ve=e=>_e(e)||typeof e?.[Symbol.iterator]==`function`,ye=`[ 	
\f\r]`,y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,xe=/>/g,b=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Se=/'/g,Ce=/"/g,we=/^(?:script|style|textarea|title)$/i,x=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),S=Symbol.for(`lit-noChange`),C=Symbol.for(`lit-nothing`),Te=new WeakMap,w=g.createTreeWalker(g,129);function Ee(e,t){if(!_e(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return pe===void 0?t:pe.createHTML(t)}var De=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=y;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===y?c[1]===`!--`?o=be:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=b):(we.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=b):o=xe:o===b?c[0]===`>`?(o=i??y,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?b:c[3]===`"`?Ce:Se):o===Ce||o===Se?o=b:o===be||o===xe?o=y:(o=b,i=void 0);let d=o===b&&e[t+1].startsWith(`/>`)?` `:``;a+=o===y?n+ge:l>=0?(r.push(s),n.slice(0,l)+me+n.slice(l)+h+d):n+h+(l===-2?t:d)}return[Ee(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Oe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=De(t,n);if(this.el=e.createElement(l,r),w.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=w.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(me)){let t=u[o++],n=i.getAttribute(e).split(h),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Me:r[1]===`?`?Ne:r[1]===`@`?Pe:je}),i.removeAttribute(e)}else e.startsWith(h)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(we.test(i.tagName)){let e=i.textContent.split(h),t=e.length-1;if(t>0){i.textContent=fe?fe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],_()),w.nextNode(),c.push({type:2,index:++a});i.append(e[t],_())}}}else if(i.nodeType===8)if(i.data===he)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(h,e+1))!==-1;)c.push({type:7,index:a}),e+=h.length-1}a++}}static createElement(e,t){let n=g.createElement(`template`);return n.innerHTML=e,n}};function T(e,t,n=e,r){if(t===S)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=v(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??(n._$Co=[]))[r]=i),i!==void 0&&(t=T(e,i._$AS(e,t.values),i,r)),t}var ke=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??g).importNode(t,!0);w.currentNode=r;let i=w.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ae(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Fe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=w.nextNode(),a++)}return w.currentNode=g,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ae=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),v(e)?e===C||e==null||e===``?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==S&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ve(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&v(this._$AH)?this._$AA.nextSibling.data=e:this.T(g.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Oe.createElement(Ee(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ke(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Te.get(e.strings);return t===void 0&&Te.set(e.strings,t=new Oe(e)),t}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(_()),this.O(_()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=de(e).nextSibling;de(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},je=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=T(this,e,t,0),a=!v(e)||e!==this._$AH&&e!==S,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=T(this,r[n+o],t,o),s===S&&(s=this._$AH[o]),a||(a=!v(s)||s!==this._$AH[o]),s===C?e=C:e!==C&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Me=class extends je{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Ne=class extends je{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},Pe=class extends je{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??C)===S)return;let n=this._$AH,r=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Fe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}},Ie=ue.litHtmlPolyfillSupport;Ie?.(Oe,Ae),(ue.litHtmlVersions??(ue.litHtmlVersions=[])).push(`3.3.3`);var Le=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ae(t.insertBefore(_(),e),e,void 0,n??{})}return i._$AI(e),i},Re=globalThis,E=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Le(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};E._$litElement$=!0,E.finalized=!0,Re.litElementHydrateSupport?.({LitElement:E});var ze=Re.litElementPolyfillSupport;ze?.({LitElement:E}),(Re.litElementVersions??(Re.litElementVersions=[])).push(`4.2.2`);var D=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Be={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:ce},Ve=(e=Be,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function O(e){return(t,n)=>typeof n==`object`?Ve(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function k(e){return O({...e,state:!0,attribute:!1})}var He={tracks:[{id:`typescript`,title:`TypeScript`,icon:`𝚃𝚂`,description:`Learn TypeScript from the ground up through hands-on game development.`,levels:[{id:`beginner`,title:`Beginner`,modules:[{id:`getting-started`,title:`Getting Started`,lessons:[{id:`welcome`,title:`Welcome to TypeScript`,duration:5,difficulty:`beginner`,tags:[`intro`],contentPath:`typescript/beginner/getting-started/welcome.md`},{id:`why-typescript`,title:`Why TypeScript?`,duration:8,difficulty:`beginner`,tags:[`intro`,`motivation`],contentPath:`typescript/beginner/getting-started/why-typescript.md`},{id:`ts-vs-js`,title:`TypeScript vs JavaScript`,duration:10,difficulty:`beginner`,tags:[`comparison`],contentPath:`typescript/beginner/getting-started/ts-vs-js.md`}]},{id:`variables-types`,title:`Variables & Types`,lessons:[{id:`primitive-types`,title:`Primitive Types`,duration:12,difficulty:`beginner`,tags:[`types`,`variables`],contentPath:`typescript/beginner/variables-types/primitive-types.md`},{id:`type-inference`,title:`Type Inference`,duration:10,difficulty:`beginner`,tags:[`types`,`inference`],contentPath:`typescript/beginner/variables-types/type-inference.md`},{id:`const-let-var`,title:`const, let & var`,duration:8,difficulty:`beginner`,tags:[`variables`,`scope`],contentPath:`typescript/beginner/variables-types/const-let-var.md`}]},{id:`functions`,title:`Functions`,lessons:[{id:`function-basics`,title:`Function Basics`,duration:12,difficulty:`beginner`,tags:[`functions`],contentPath:`typescript/beginner/functions/function-basics.md`},{id:`parameters-return`,title:`Parameters & Return Types`,duration:10,difficulty:`beginner`,tags:[`functions`,`types`],contentPath:`typescript/beginner/functions/parameters-return.md`},{id:`arrow-functions`,title:`Arrow Functions`,duration:8,difficulty:`beginner`,tags:[`functions`,`syntax`],contentPath:`typescript/beginner/functions/arrow-functions.md`}]},{id:`objects`,title:`Objects`,lessons:[{id:`object-literals`,title:`Object Literals`,duration:10,difficulty:`beginner`,tags:[`objects`],contentPath:`typescript/beginner/objects/object-literals.md`},{id:`object-types`,title:`Typing Objects`,duration:12,difficulty:`beginner`,tags:[`objects`,`types`],contentPath:`typescript/beginner/objects/object-types.md`},{id:`optional-props`,title:`Optional Properties`,duration:8,difficulty:`beginner`,tags:[`objects`,`types`],contentPath:`typescript/beginner/objects/optional-props.md`}]},{id:`custom-types`,title:`Custom Types`,lessons:[{id:`type-aliases`,title:`Type Aliases`,duration:10,difficulty:`beginner`,tags:[`types`,`aliases`],contentPath:`typescript/beginner/custom-types/type-aliases.md`},{id:`interfaces`,title:`Interfaces`,duration:12,difficulty:`beginner`,tags:[`types`,`interfaces`],contentPath:`typescript/beginner/custom-types/interfaces.md`},{id:`union-types`,title:`Union Types`,duration:10,difficulty:`beginner`,tags:[`types`,`union`],contentPath:`typescript/beginner/custom-types/union-types.md`}]},{id:`arrays`,title:`Arrays`,lessons:[{id:`array-basics`,title:`Array Basics`,duration:10,difficulty:`beginner`,tags:[`arrays`],contentPath:`typescript/beginner/arrays/array-basics.md`},{id:`array-methods`,title:`Array Methods`,duration:15,difficulty:`beginner`,tags:[`arrays`,`methods`],contentPath:`typescript/beginner/arrays/array-methods.md`},{id:`typed-arrays`,title:`Typed Arrays`,duration:8,difficulty:`beginner`,tags:[`arrays`,`types`],contentPath:`typescript/beginner/arrays/typed-arrays.md`}]},{id:`enums`,title:`Enums`,lessons:[{id:`numeric-enums`,title:`Numeric Enums`,duration:10,difficulty:`beginner`,tags:[`enums`],contentPath:`typescript/beginner/enums/numeric-enums.md`},{id:`string-enums`,title:`String Enums`,duration:8,difficulty:`beginner`,tags:[`enums`],contentPath:`typescript/beginner/enums/string-enums.md`},{id:`const-objects`,title:`const Objects vs Enums`,duration:10,difficulty:`beginner`,tags:[`enums`,`patterns`],contentPath:`typescript/beginner/enums/const-objects.md`}]}]},{id:`intermediate`,title:`Intermediate`,modules:[{id:`classes`,title:`Classes`,lessons:[{id:`class-basics`,title:`Class Basics`,duration:15,difficulty:`intermediate`,tags:[`classes`,`oop`],contentPath:`typescript/intermediate/classes/class-basics.md`},{id:`inheritance`,title:`Inheritance`,duration:15,difficulty:`intermediate`,tags:[`classes`,`inheritance`],contentPath:`typescript/intermediate/classes/inheritance.md`}]},{id:`generics`,title:`Generics`,lessons:[{id:`generic-functions`,title:`Generic Functions`,duration:15,difficulty:`intermediate`,tags:[`generics`],contentPath:`typescript/intermediate/generics/generic-functions.md`}]}]}]},{id:`excalibur`,title:`Excalibur`,icon:`⚔`,description:`Master ExcaliburJS to build real 2D games in the browser.`,levels:[{id:`foundations`,title:`Foundations`,modules:[{id:`core-concepts`,title:`Core Concepts`,lessons:[{id:`engine-setup`,title:`Engine Setup`,duration:10,difficulty:`beginner`,tags:[`excalibur`,`setup`],contentPath:`excalibur/foundations/core-concepts/engine-setup.md`},{id:`actors`,title:`Actors`,duration:15,difficulty:`beginner`,tags:[`excalibur`,`actors`],contentPath:`excalibur/foundations/core-concepts/actors.md`},{id:`scenes`,title:`Scenes`,duration:12,difficulty:`beginner`,tags:[`excalibur`,`scenes`],contentPath:`excalibur/foundations/core-concepts/scenes.md`}]}]}]},{id:`projects`,title:`Projects`,icon:`🎮`,description:`Build complete games that put your TypeScript and Excalibur skills to work.`,levels:[{id:`beginner`,title:`Beginner`,modules:[{id:`first-game`,title:`Your First Game`,lessons:[{id:`project-overview`,title:`Project Overview`,duration:5,difficulty:`beginner`,tags:[`project`],contentPath:`projects/beginner/first-game/project-overview.md`}]}]}]}]},A=new class{constructor(){this.flatLessons=[],this.buildFlatList()}buildFlatList(){let e=0;for(let t of He.tracks)for(let n of t.levels)for(let r of n.modules)for(let i of r.lessons)this.flatLessons.push({track:t,level:n,module:r,lesson:i,index:e++})}getTracks(){return He.tracks}getTrack(e){return He.tracks.find(t=>t.id===e)}getLevel(e,t){return this.getTrack(e)?.levels.find(e=>e.id===t)}getModule(e,t,n){return this.getLevel(e,t)?.modules.find(e=>e.id===n)}getLesson(e,t,n,r){return this.getModule(e,t,n)?.lessons.find(e=>e.id===r)}findLessonLocation(e,t,n,r){return this.flatLessons.find(i=>i.track.id===e&&i.level.id===t&&i.module.id===n&&i.lesson.id===r)}getNextLesson(e,t,n,r){let i=this.findLessonLocation(e,t,n,r);if(!i)return;let a=this.flatLessons[i.index+1];return a&&a.track.id===e?a:void 0}getPreviousLesson(e,t,n,r){let i=this.findLessonLocation(e,t,n,r);if(!i||i.index===0)return;let a=this.flatLessons[i.index-1];return a&&a.track.id===e?a:void 0}getFirstLesson(e){return this.flatLessons.find(t=>t.track.id===e)}async loadLessonContent(e){try{let t=await fetch(`/content/${e}`);return t.ok?t.text():`# Content Coming Soon

This lesson is still being written. Check back soon!`}catch{return`# Content Coming Soon

This lesson is still being written. Check back soon!`}}};function j(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Ue,We=(Ue=class extends E{constructor(...e){super(...e),this.activeTrackId=``,this.tracks=[]}connectedCallback(){super.connectedCallback(),this.tracks=A.getTracks()}selectTrack(e){this.dispatchEvent(new CustomEvent(`track-selected`,{detail:{trackId:e},bubbles:!0,composed:!0}))}render(){return x`
      <div class="track-list">
        ${this.tracks.map((e,t)=>x`
          ${t>0?x`<div class="track-divider"></div>`:``}
          <button
            class="track-btn ${this.activeTrackId===e.id?`active`:``}"
            @click=${()=>this.selectTrack(e.id)}
            title=${e.description}
          >
            <span class="track-icon">${e.icon}</span>
            <span class="track-label">${e.title}</span>
          </button>
        `)}
      </div>
    `}},Ue.styles=o`
    :host {
      display: block;
    }

    .track-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 0 12px 12px;
    }

    .track-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: var(--text-secondary);
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.15s ease;
      text-align: left;
      width: 100%;
    }

    .track-btn:hover {
      background: var(--surface-hover);
      color: var(--text-primary);
    }

    .track-btn.active {
      background: var(--accent-muted);
      color: var(--accent);
    }

    .track-icon {
      font-size: 1rem;
      min-width: 20px;
      text-align: center;
      font-style: normal;
    }

    .track-label {
      flex: 1;
    }

    .track-divider {
      height: 1px;
      background: var(--border);
      margin: 8px 0;
    }
  `,Ue);j([O({type:String})],We.prototype,`activeTrackId`,void 0),We=j([D(`track-nav`)],We);var Ge=`excalibur-academy-progress`,M=new class{constructor(){this.data=this.load()}load(){try{let e=localStorage.getItem(Ge);if(e)return JSON.parse(e)}catch{}return{completed:{}}}save(){try{localStorage.setItem(Ge,JSON.stringify(this.data))}catch{}}lessonKey(e,t,n,r){return`${e}/${t}/${n}/${r}`}markComplete(e,t,n,r){let i=this.lessonKey(e,t,n,r);this.data.completed[i]=!0,this.save(),window.dispatchEvent(new CustomEvent(`progress-changed`,{detail:{key:i}}))}markIncomplete(e,t,n,r){let i=this.lessonKey(e,t,n,r);delete this.data.completed[i],this.save(),window.dispatchEvent(new CustomEvent(`progress-changed`,{detail:{key:i}}))}isComplete(e,t,n,r){return!!this.data.completed[this.lessonKey(e,t,n,r)]}getProgress(){return{...this.data}}getCompletedCount(e){return Object.keys(this.data.completed).filter(t=>t.startsWith(`${e}/`)).length}setLastVisited(e){this.data.lastVisited=e,this.save()}getLastVisited(){return this.data.lastVisited}reset(){this.data={completed:{}},this.save(),window.dispatchEvent(new CustomEvent(`progress-changed`,{}))}},Ke,N=(Ke=class extends E{constructor(...e){super(...e),this.trackId=``,this.activeLesson=null,this.track=null,this.collapsedLevels=new Set,this.collapsedModules=new Set,this.progressVersion=0,this.handleProgressChange=()=>{this.progressVersion++}}connectedCallback(){super.connectedCallback(),window.addEventListener(`progress-changed`,this.handleProgressChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`progress-changed`,this.handleProgressChange)}updated(e){e.has(`trackId`)&&this.trackId&&(this.track=A.getTrack(this.trackId)??null,this.collapsedLevels.clear(),this.collapsedModules.clear())}toggleLevel(e){this.collapsedLevels.has(e)?this.collapsedLevels.delete(e):this.collapsedLevels.add(e),this.requestUpdate()}toggleModule(e){this.collapsedModules.has(e)?this.collapsedModules.delete(e):this.collapsedModules.add(e),this.requestUpdate()}selectLesson(e,t,n){this.dispatchEvent(new CustomEvent(`lesson-selected`,{detail:{trackId:this.trackId,levelId:e,moduleId:t,lessonId:n},bubbles:!0,composed:!0}))}render(){return this.progressVersion,this.track?x`
      ${this.track.levels.map(e=>{let t=this.collapsedLevels.has(e.id);return x`
          <div class="level-section">
            <div class="level-header" @click=${()=>this.toggleLevel(e.id)}>
              <span>${e.title}</span>
              <span class="level-toggle ${t?`collapsed`:``}">▼</span>
            </div>

            ${t?``:e.modules.map(t=>{let n=`${e.id}/${t.id}`,r=this.collapsedModules.has(n),i=t.lessons.filter(n=>M.isComplete(this.trackId,e.id,t.id,n.id)).length;return x`
                <div class="module-group">
                  <div class="module-header" @click=${()=>this.toggleModule(n)}>
                    <span>${t.title}</span>
                    <span class="module-progress">${i}/${t.lessons.length}</span>
                    <span class="module-chevron ${r?`collapsed`:``}">▼</span>
                  </div>

                  <div class="lesson-list ${r?`collapsed`:``}">
                    ${t.lessons.map(n=>{let r=M.isComplete(this.trackId,e.id,t.id,n.id);return x`
                        <button
                          class="lesson-btn ${this.activeLesson?.levelId===e.id&&this.activeLesson?.moduleId===t.id&&this.activeLesson?.lessonId===n.id?`active`:``}"
                          @click=${()=>this.selectLesson(e.id,t.id,n.id)}
                        >
                          <span class="lesson-status ${r?`complete`:`incomplete`}">
                            ${r?`✓`:`○`}
                          </span>
                          <span class="lesson-title">${n.title}</span>
                          ${n.duration?x`<span class="lesson-duration">${n.duration}m</span>`:``}
                        </button>
                      `})}
                  </div>
                </div>
              `})}
          </div>
        `})}
    `:x`<div class="empty">Select a track to begin.</div>`}},Ke.styles=o`
    :host {
      display: block;
      overflow-y: auto;
      flex: 1;
    }

    .empty {
      padding: 24px 16px;
      color: var(--text-muted);
      font-size: 0.8rem;
      font-family: var(--font-mono);
      text-align: center;
    }

    .level-section {
      margin-bottom: 4px;
    }

    .level-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px 4px;
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      cursor: pointer;
      user-select: none;
    }

    .level-header:hover {
      color: var(--text-secondary);
    }

    .level-toggle {
      font-size: 0.6rem;
      transition: transform 0.2s ease;
    }

    .level-toggle.collapsed {
      transform: rotate(-90deg);
    }

    .module-group {
      margin: 0 8px 4px;
    }

    .module-header {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 8px;
      color: var(--text-secondary);
      font-family: var(--font-sans);
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      border-radius: 6px;
      user-select: none;
      transition: all 0.15s ease;
    }

    .module-header:hover {
      background: var(--surface-hover);
      color: var(--text-primary);
    }

    .module-chevron {
      font-size: 0.55rem;
      color: var(--text-muted);
      transition: transform 0.2s ease;
      margin-left: auto;
    }

    .module-chevron.collapsed {
      transform: rotate(-90deg);
    }

    .lesson-list {
      padding: 2px 0 4px 12px;
    }

    .lesson-list.collapsed {
      display: none;
    }

    .lesson-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 5px 8px;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: var(--text-secondary);
      font-family: var(--font-sans);
      font-size: 0.78rem;
      cursor: pointer;
      text-align: left;
      transition: all 0.15s ease;
    }

    .lesson-btn:hover {
      background: var(--surface-hover);
      color: var(--text-primary);
    }

    .lesson-btn.active {
      background: var(--accent-muted);
      color: var(--accent);
      font-weight: 600;
    }

    .lesson-status {
      font-size: 0.65rem;
      min-width: 14px;
      text-align: center;
      flex-shrink: 0;
    }

    .lesson-status.complete {
      color: var(--success);
    }

    .lesson-status.incomplete {
      color: var(--text-muted);
    }

    .lesson-title {
      flex: 1;
      line-height: 1.3;
    }

    .lesson-duration {
      font-size: 0.65rem;
      color: var(--text-muted);
      font-family: var(--font-mono);
      flex-shrink: 0;
    }

    .module-progress {
      font-size: 0.6rem;
      color: var(--text-muted);
      font-family: var(--font-mono);
    }
  `,Ke);j([O({type:String})],N.prototype,`trackId`,void 0),j([O({type:Object})],N.prototype,`activeLesson`,void 0),j([k()],N.prototype,`track`,void 0),j([k()],N.prototype,`collapsedLevels`,void 0),j([k()],N.prototype,`collapsedModules`,void 0),j([k()],N.prototype,`progressVersion`,void 0),N=j([D(`module-nav`)],N);var qe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Je=e=>(...t)=>({_$litDirective$:e,values:t}),Ye=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Xe=class extends Ye{constructor(e){if(super(e),this.it=C,e.type!==qe.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===S)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Xe.directiveName=`unsafeHTML`,Xe.resultType=1;var Ze=Je(Xe);function P(e){"@babel/helpers - typeof";return P=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},P(e)}function Qe(e,t){if(P(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(P(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function $e(e){var t=Qe(e,`string`);return P(t)==`symbol`?t:t+``}function F(e,t,n){return(t=$e(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var et;function tt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var I=tt();function nt(e){I=e}var L={exec:()=>null};function R(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function z(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(B.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var rt=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),B={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:R(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:R(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:R(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:R(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:R(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:R(e=>RegExp(`^ {0,${e}}>`))},it=/^(?:[ \t]*(?:\n|$))+/,at=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ot=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,V=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,st=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ct=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,lt=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ut=z(lt).replace(/bull/g,ct).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),dt=z(lt).replace(/bull/g,ct).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ft=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,pt=/^[^\n]+/,mt=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ht=z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,mt).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),gt=z(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,ct).getRegex(),_t=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,vt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,yt=z(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,vt).replace(`tag`,_t).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),bt=z(ft).replace(`hr`,V).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,_t).getRegex(),xt={blockquote:z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,bt).getRegex(),code:at,def:ht,fences:ot,heading:st,hr:V,html:yt,lheading:ut,list:gt,newline:it,paragraph:bt,table:L,text:pt},St=z(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,V).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,_t).getRegex(),Ct={...xt,lheading:dt,table:St,paragraph:z(ft).replace(`hr`,V).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,St).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,_t).getRegex()},wt={...xt,html:z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,vt).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:L,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:z(ft).replace(`hr`,V).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,ut).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Tt=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Et=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Dt=/^( {2,}|\\)\n(?!\s*$)/,Ot=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,H=/[\p{P}\p{S}]/u,kt=/[\s\p{P}\p{S}]/u,At=/[^\s\p{P}\p{S}]/u,jt=z(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,kt).getRegex(),Mt=/(?!~)[\p{P}\p{S}]/u,Nt=/(?!~)[\s\p{P}\p{S}]/u,Pt=/(?:[^\s\p{P}\p{S}]|~)/u,Ft=z(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,rt?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),It=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Lt=z(It,`u`).replace(/punct/g,H).getRegex(),Rt=z(It,`u`).replace(/punct/g,Mt).getRegex(),zt=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Bt=z(zt,`gu`).replace(/notPunctSpace/g,At).replace(/punctSpace/g,kt).replace(/punct/g,H).getRegex(),Vt=z(zt,`gu`).replace(/notPunctSpace/g,Pt).replace(/punctSpace/g,Nt).replace(/punct/g,Mt).getRegex(),Ht=z(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,At).replace(/punctSpace/g,kt).replace(/punct/g,H).getRegex(),Ut=z(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,H).getRegex(),Wt=z(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,At).replace(/punctSpace/g,kt).replace(/punct/g,H).getRegex(),Gt=z(/\\(punct)/,`gu`).replace(/punct/g,H).getRegex(),Kt=z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),qt=z(vt).replace(`(?:-->|$)`,`-->`).getRegex(),Jt=z(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,qt).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Yt=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Xt=z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,Yt).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Zt=z(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Yt).replace(`ref`,mt).getRegex(),Qt=z(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,mt).getRegex(),$t=z(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Zt).replace(`nolink`,Qt).getRegex(),en=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,tn={_backpedal:L,anyPunctuation:Gt,autolink:Kt,blockSkip:Ft,br:Dt,code:Et,del:L,delLDelim:L,delRDelim:L,emStrongLDelim:Lt,emStrongRDelimAst:Bt,emStrongRDelimUnd:Ht,escape:Tt,link:Xt,nolink:Qt,punctuation:jt,reflink:Zt,reflinkSearch:$t,tag:Jt,text:Ot,url:L},nn={...tn,link:z(/^!?\[(label)\]\((.*?)\)/).replace(`label`,Yt).getRegex(),reflink:z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,Yt).getRegex()},rn={...tn,emStrongRDelimAst:Vt,emStrongLDelim:Rt,delLDelim:Ut,delRDelim:Wt,url:z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,en).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:z(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,en).getRegex()},an={...rn,br:z(Dt).replace(`{2,}`,`*`).getRegex(),text:z(rn.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},on={normal:xt,gfm:Ct,pedantic:wt},U={normal:tn,gfm:rn,breaks:an,pedantic:nn},sn={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},cn=e=>sn[e];function W(e,t){if(t){if(B.escapeTest.test(e))return e.replace(B.escapeReplace,cn)}else if(B.escapeTestNoEncode.test(e))return e.replace(B.escapeReplaceNoEncode,cn);return e}function ln(e){try{e=encodeURI(e).replace(B.percentDecode,`%`)}catch{return null}return e}function un(e,t){let n=e.replace(B.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(B.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(B.slashPipe,`|`);return n}function G(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function dn(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&B.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function fn(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function pn(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function mn(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function hn(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var gn=class{constructor(e){F(this,`options`,void 0),F(this,`rules`,void 0),F(this,`lexer`,void 0),this.options=e||I}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:dn(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=hn(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=G(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:G(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:G(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=G(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=pn(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),ee=this.rules.other.blockquoteBeginRegex(d);for(;e;){let te=e.split(`
`,1)[0],f;if(l=te,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),f=l):f=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||ee.test(l)||t.test(l)||n.test(l))break;if(f.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+f.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=te+`
`,e=e.substring(te.length+1),c=f.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&(e.task=!1);if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=dn(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:G(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=un(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:G(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(un(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:G(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=G(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=fn(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),mn(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return mn(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},K=class e{constructor(e){F(this,`tokens`,void 0),F(this,`options`,void 0),F(this,`state`,void 0),F(this,`inlineQueue`,void 0),F(this,`tokenizer`,void 0),this.tokens=[],this.tokens.links=Object.create(null),this.options=e||I,this.options.tokenizer=this.options.tokenizer||new gn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:B,block:on.normal,inline:U.normal};this.options.pedantic?(t.block=on.pedantic,t.inline=U.pedantic):this.options.gfm&&(t.block=on.gfm,this.options.breaks?t.inline=U.breaks:t.inline=U.gfm),this.tokenizer.rules=t}static get rules(){return{block:on,inline:U}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(B.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(B.tabCharGlobal,`    `).replace(B.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},_n=class{constructor(e){F(this,`options`,void 0),F(this,`parser`,void 0),this.options=e||I}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(B.notSpaceStart)?.[0],i=e.replace(B.endingNewline,``)+`
`;return r?`<pre><code class="language-`+W(r)+`">`+(n?i:W(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:W(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${W(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=ln(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+W(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=ln(e);if(i===null)return W(n);e=i;let a=`<img src="${e}" alt="${W(n)}"`;return t&&(a+=` title="${W(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:W(e.text)}},vn=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},q=class e{constructor(e){F(this,`options`,void 0),F(this,`renderer`,void 0),F(this,`textRenderer`,void 0),this.options=e||I,this.options.renderer=this.options.renderer||new _n,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new vn}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},J=(et=class{constructor(e){F(this,`options`,void 0),F(this,`block`,void 0),this.options=e||I}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?K.lex:K.lexInline}provideParser(e=this.block){return e?q.parse:q.parseInline}},F(et,`passThroughHooks`,new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`])),F(et,`passThroughHooksRespectAsync`,new Set([`preprocess`,`postprocess`,`processAllTokens`])),et),Y=new class{constructor(...e){F(this,`defaults`,tt()),F(this,`options`,this.setOptions),F(this,`parse`,this.parseMarkdown(!0)),F(this,`parseInline`,this.parseMarkdown(!1)),F(this,`Parser`,q),F(this,`Renderer`,_n),F(this,`TextRenderer`,vn),F(this,`Lexer`,K),F(this,`Tokenizer`,gn),F(this,`Hooks`,J),this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new _n(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new gn(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new J;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];J.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&J.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return K.lex(e,t??this.defaults)}parser(e,t){return q.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?K.lex:K.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?q.parse:q.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?K.lex:K.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?q.parse:q.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+W(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function X(e,t){return Y.parse(e,t)}X.options=X.setOptions=function(e){return Y.setOptions(e),X.defaults=Y.defaults,nt(X.defaults),X},X.getDefaults=tt,X.defaults=I,X.use=function(...e){return Y.use(...e),X.defaults=Y.defaults,nt(X.defaults),X},X.walkTokens=function(e,t){return Y.walkTokens(e,t)},X.parseInline=Y.parseInline,X.Parser=q,X.parser=q.parse,X.Renderer=_n,X.TextRenderer=vn,X.Lexer=K,X.lexer=K.lex,X.Tokenizer=gn,X.Hooks=J,X.parse=X,X.options,X.setOptions,X.use,X.walkTokens,X.parseInline,q.parse,K.lex;var yn,Z=(yn=class extends E{constructor(...e){super(...e),this.src=``,this.caption=``,this.height=`400px`,this.loading=!0}handleLoad(){this.loading=!1}openInNew(){window.open(this.src,`_blank`)}render(){return x`
      <div class="playground-wrapper">
        <div class="playground-header">
          <div class="playground-label">
            <div class="playground-dot"></div>
            EXCALIBUR PLAYGROUND
          </div>
          <div class="playground-actions">
            <button class="action-btn" @click=${this.openInNew} title="Open in new tab">↗ Open</button>
          </div>
        </div>

        <div class="loading-overlay ${this.loading?``:`hidden`}">
          <div class="spinner"></div>
          Loading playground...
        </div>

        <iframe
          class="playground-frame"
          style="height: ${this.height}"
          src=${this.src}
          allow="accelerometer; camera; encrypted-media; fullscreen; gyroscope; microphone; midi"
          loading="lazy"
          @load=${this.handleLoad}
        ></iframe>

        ${this.caption?x`<div class="caption">${this.caption}</div>`:``}
      </div>
    `}},yn.styles=o`
    :host {
      display: block;
      width: 100%;
    }

    .playground-wrapper {
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid var(--border);
      background: var(--surface);
      position: relative;
    }

    .playground-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background: var(--surface-elevated);
      border-bottom: 1px solid var(--border);
    }

    .playground-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--text-muted);
      font-weight: 600;
      letter-spacing: 0.04em;
    }

    .playground-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent);
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .playground-actions {
      display: flex;
      gap: 6px;
    }

    .action-btn {
      padding: 4px 10px;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: transparent;
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-size: 0.65rem;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .action-btn:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .playground-frame {
      width: 100%;
      height: var(--playground-height, 400px);
      border: none;
      display: block;
      background: #0a0a0f;
    }

    .loading-overlay {
      position: absolute;
      inset: 0;
      top: 37px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-primary);
      gap: 12px;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .loading-overlay.hidden {
      display: none;
    }

    .spinner {
      width: 18px;
      height: 18px;
      border: 2px solid var(--border);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .caption {
      padding: 8px 12px;
      font-size: 0.72rem;
      color: var(--text-muted);
      font-style: italic;
      border-top: 1px solid var(--border);
      background: var(--surface-elevated);
    }
  `,yn);j([O({type:String})],Z.prototype,`src`,void 0),j([O({type:String})],Z.prototype,`caption`,void 0),j([O({type:String})],Z.prototype,`height`,void 0),j([k()],Z.prototype,`loading`,void 0),Z=j([D(`excalibur-playground`)],Z);var bn,Q=(bn=class extends E{constructor(...e){super(...e),this.trackId=``,this.levelId=``,this.moduleId=``,this.lessonId=``,this.content=``,this.loading=!1,this.lesson=null,this.track=null,this.level=null,this.module=null,this.nextLesson=null,this.prevLesson=null,this.isComplete=!1,this.handleProgressChange=()=>{this.lesson&&this.trackId&&this.levelId&&this.moduleId&&this.lessonId&&(this.isComplete=M.isComplete(this.trackId,this.levelId,this.moduleId,this.lessonId))}}connectedCallback(){super.connectedCallback(),window.addEventListener(`progress-changed`,this.handleProgressChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`progress-changed`,this.handleProgressChange)}async updated(e){[`trackId`,`levelId`,`moduleId`,`lessonId`].some(t=>e.has(t))&&this.trackId&&this.levelId&&this.moduleId&&this.lessonId&&await this.loadLesson()}async loadLesson(){this.loading=!0,this.track=A.getTrack(this.trackId)??null,this.level=A.getLevel(this.trackId,this.levelId)??null,this.module=A.getModule(this.trackId,this.levelId,this.moduleId)??null,this.lesson=A.getLesson(this.trackId,this.levelId,this.moduleId,this.lessonId)??null;let e=A.getNextLesson(this.trackId,this.levelId,this.moduleId,this.lessonId),t=A.getPreviousLesson(this.trackId,this.levelId,this.moduleId,this.lessonId);if(this.nextLesson=e??null,this.prevLesson=t??null,this.isComplete=M.isComplete(this.trackId,this.levelId,this.moduleId,this.lessonId),this.lesson){let e=await A.loadLessonContent(this.lesson.contentPath);this.content=await X.parse(e)}this.loading=!1,this.shadowRoot?.querySelector(`.lesson-scroll`)?.scrollTo({top:0,behavior:`instant`}),M.setLastVisited(`${this.trackId}/${this.levelId}/${this.moduleId}/${this.lessonId}`)}toggleComplete(){!this.trackId||!this.levelId||!this.moduleId||!this.lessonId||(this.isComplete?M.markIncomplete(this.trackId,this.levelId,this.moduleId,this.lessonId):M.markComplete(this.trackId,this.levelId,this.moduleId,this.lessonId))}navigateToLesson(e){this.dispatchEvent(new CustomEvent(`lesson-selected`,{detail:{trackId:e.track.id,levelId:e.level.id,moduleId:e.module.id,lessonId:e.lesson.id},bubbles:!0,composed:!0}))}startFirstLesson(){let e=A.getFirstLesson(`typescript`);e&&this.navigateToLesson(e)}render(){return!this.trackId||!this.lessonId?x`
        <div class="welcome-state">
          <div class="welcome-logo">⚔️</div>
          <div class="welcome-title">Excalibur Academy</div>
          <div class="welcome-desc">
            Learn TypeScript through the art of game development.
            Select a lesson from the sidebar to begin your journey.
          </div>
          <button class="start-btn" @click=${this.startFirstLesson}>
            Start Learning →
          </button>
        </div>
      `:this.loading?x`
        <div class="lesson-scroll">
          <div class="loading-state">
            <div class="spinner"></div>
            Loading lesson...
          </div>
        </div>
      `:this.lesson?x`
      <div class="lesson-scroll">
        <div class="lesson-header">
          <div class="breadcrumb">
            <span>${this.track?.title}</span>
            <span class="breadcrumb-sep">›</span>
            <span>${this.level?.title}</span>
            <span class="breadcrumb-sep">›</span>
            <span>${this.module?.title}</span>
          </div>

          <h1 class="lesson-title">${this.lesson.title}</h1>

          <div class="lesson-meta">
            ${this.lesson.duration?x`
              <span class="meta-badge badge-duration">⏱ ${this.lesson.duration} min</span>
            `:``}
            ${this.lesson.difficulty?x`
              <span class="meta-badge badge-difficulty">${this.lesson.difficulty}</span>
            `:``}
            ${(this.lesson.tags??[]).map(e=>x`
              <span class="meta-badge badge-tag">${e}</span>
            `)}
          </div>
        </div>

        <div class="lesson-content">
          ${Ze(this.content)}
        </div>

        <div class="complete-section">
          <span class="complete-status ${this.isComplete?`done`:``}">
            ${this.isComplete?`✓ Lesson complete`:`Mark as complete when done`}
          </span>
          <button
            class="complete-btn ${this.isComplete?`done`:``}"
            @click=${this.toggleComplete}
          >
            ${this.isComplete?`✓ Completed`:`Mark Complete`}
          </button>
        </div>

        <div class="lesson-footer">
          ${this.prevLesson?x`
            <button class="nav-btn prev" @click=${()=>this.navigateToLesson(this.prevLesson)}>
              <span class="nav-label">← Previous</span>
              <span class="nav-title">${this.prevLesson.lesson.title}</span>
            </button>
          `:x`<div></div>`}

          ${this.nextLesson?x`
            <button class="nav-btn next" @click=${()=>this.navigateToLesson(this.nextLesson)}>
              <span class="nav-label">Next →</span>
              <span class="nav-title">${this.nextLesson.lesson.title}</span>
            </button>
          `:x`<div></div>`}
        </div>
      </div>
    `:x`<div class="lesson-scroll"><p>Lesson not found.</p></div>`}},bn.styles=o`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }

    .lesson-scroll {
      flex: 1;
      overflow-y: auto;
      padding: 40px 48px;
      scroll-behavior: smooth;
    }

    @media (max-width: 768px) {
      .lesson-scroll {
        padding: 24px 20px;
      }
    }

    /* Lesson header */
    .lesson-header {
      margin-bottom: 36px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--border);
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-mono);
      font-size: 0.68rem;
      color: var(--text-muted);
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .breadcrumb-sep {
      color: var(--border);
    }

    .lesson-title {
      font-family: var(--font-display);
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1.15;
      margin: 0 0 12px;
      letter-spacing: -0.02em;
    }

    .lesson-meta {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .meta-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 3px 8px;
      border-radius: 4px;
      font-family: var(--font-mono);
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .badge-duration {
      background: var(--surface-elevated);
      color: var(--text-muted);
      border: 1px solid var(--border);
    }

    .badge-difficulty {
      background: var(--accent-muted);
      color: var(--accent);
    }

    .badge-tag {
      background: var(--surface-elevated);
      color: var(--text-muted);
      border: 1px solid var(--border);
    }

    /* Markdown content */
    .lesson-content {
      max-width: 720px;
    }

    .lesson-content :is(h1, h2, h3, h4) {
      font-family: var(--font-display);
      color: var(--text-primary);
      line-height: 1.25;
      letter-spacing: -0.02em;
    }

    .lesson-content h1 {
      font-size: 1.8rem;
      font-weight: 700;
      margin: 0 0 24px;
    }

    .lesson-content h2 {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 40px 0 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }

    .lesson-content h3 {
      font-size: 1.05rem;
      font-weight: 600;
      margin: 28px 0 12px;
      color: var(--accent);
    }

    .lesson-content p {
      font-size: 0.95rem;
      line-height: 1.75;
      color: var(--text-secondary);
      margin: 0 0 16px;
    }

    .lesson-content strong {
      color: var(--text-primary);
      font-weight: 600;
    }

    .lesson-content em {
      color: var(--text-secondary);
    }

    .lesson-content a {
      color: var(--accent);
      text-decoration: none;
      border-bottom: 1px solid var(--accent-muted);
      transition: border-color 0.15s ease;
    }

    .lesson-content a:hover {
      border-color: var(--accent);
    }

    .lesson-content ul,
    .lesson-content ol {
      padding-left: 24px;
      margin: 0 0 16px;
    }

    .lesson-content li {
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--text-secondary);
      margin-bottom: 4px;
    }

    .lesson-content code {
      font-family: var(--font-mono);
      font-size: 0.83em;
      background: var(--surface-elevated);
      color: var(--code-inline);
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid var(--border);
    }

    .lesson-content pre {
      background: var(--surface-code);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 20px 24px;
      overflow-x: auto;
      margin: 20px 0;
      position: relative;
    }

    .lesson-content pre code {
      background: transparent;
      border: none;
      padding: 0;
      font-size: 0.85rem;
      color: var(--code-block);
      line-height: 1.65;
    }

    .lesson-content blockquote {
      border-left: 3px solid var(--accent);
      margin: 20px 0;
      padding: 12px 20px;
      background: var(--accent-muted);
      border-radius: 0 8px 8px 0;
    }

    .lesson-content blockquote p {
      margin: 0;
      color: var(--text-primary);
    }

    .lesson-content table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 0.875rem;
    }

    .lesson-content th {
      text-align: left;
      padding: 10px 14px;
      background: var(--surface-elevated);
      border: 1px solid var(--border);
      font-family: var(--font-mono);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
    }

    .lesson-content td {
      padding: 10px 14px;
      border: 1px solid var(--border);
      color: var(--text-secondary);
      line-height: 1.5;
    }

    .lesson-content tr:nth-child(even) td {
      background: var(--surface);
    }

    /* Callouts */
    .callout {
      display: flex;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 8px;
      margin: 20px 0;
      border: 1px solid;
    }

    .callout-icon { font-size: 1rem; flex-shrink: 0; }

    .callout.info {
      background: rgba(56, 139, 253, 0.08);
      border-color: rgba(56, 139, 253, 0.3);
    }

    .callout.warning {
      background: rgba(255, 166, 0, 0.08);
      border-color: rgba(255, 166, 0, 0.3);
    }

    .callout.tip {
      background: rgba(63, 185, 80, 0.08);
      border-color: rgba(63, 185, 80, 0.3);
    }

    /* Playground embed within content */
    excalibur-playground {
      margin: 28px 0;
    }

    /* Navigation footer */
    .lesson-footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 48px;
      padding-top: 24px;
      border-top: 1px solid var(--border);
    }

    .nav-btn {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 14px 16px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--surface);
      color: var(--text-secondary);
      cursor: pointer;
      text-align: left;
      transition: all 0.15s ease;
      text-decoration: none;
    }

    .nav-btn:hover {
      border-color: var(--accent);
      background: var(--accent-muted);
      color: var(--text-primary);
    }

    .nav-btn.next {
      text-align: right;
    }

    .nav-label {
      font-family: var(--font-mono);
      font-size: 0.62rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-muted);
    }

    .nav-title {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-primary);
    }

    /* Complete button */
    .complete-section {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 32px;
      padding: 16px;
      background: var(--surface-elevated);
      border-radius: 8px;
      border: 1px solid var(--border);
    }

    .complete-status {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--text-muted);
    }

    .complete-status.done {
      color: var(--success);
    }

    .complete-btn {
      padding: 8px 20px;
      border: none;
      border-radius: 6px;
      background: var(--accent);
      color: white;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .complete-btn:hover {
      background: var(--accent-hover);
    }

    .complete-btn.done {
      background: var(--success);
    }

    /* Empty / welcome state */
    .welcome-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      padding: 40px;
      gap: 20px;
    }

    .welcome-logo {
      font-size: 4rem;
      line-height: 1;
    }

    .welcome-title {
      font-family: var(--font-display);
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.02em;
    }

    .welcome-desc {
      font-size: 0.95rem;
      color: var(--text-muted);
      max-width: 400px;
      line-height: 1.6;
    }

    .start-btn {
      padding: 12px 28px;
      border: none;
      border-radius: 8px;
      background: var(--accent);
      color: white;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .start-btn:hover {
      background: var(--accent-hover);
      transform: translateY(-1px);
    }

    /* Loading */
    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      gap: 12px;
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-size: 0.8rem;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid var(--border);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }
  `,bn);j([O({type:String})],Q.prototype,`trackId`,void 0),j([O({type:String})],Q.prototype,`levelId`,void 0),j([O({type:String})],Q.prototype,`moduleId`,void 0),j([O({type:String})],Q.prototype,`lessonId`,void 0),j([k()],Q.prototype,`content`,void 0),j([k()],Q.prototype,`loading`,void 0),j([k()],Q.prototype,`lesson`,void 0),j([k()],Q.prototype,`track`,void 0),j([k()],Q.prototype,`level`,void 0),j([k()],Q.prototype,`module`,void 0),j([k()],Q.prototype,`nextLesson`,void 0),j([k()],Q.prototype,`prevLesson`,void 0),j([k()],Q.prototype,`isComplete`,void 0),Q=j([D(`lesson-view`)],Q);var xn,$=(xn=class extends E{constructor(...e){super(...e),this.route=null,this.activeTrackId=`typescript`,this.sidebarOpen=!1,this.progressVersion=0,this.handleProgressChange=()=>{this.progressVersion++}}connectedCallback(){super.connectedCallback(),window.addEventListener(`progress-changed`,this.handleProgressChange),this.restoreLastVisited()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`progress-changed`,this.handleProgressChange)}restoreLastVisited(){}handleTrackSelected(e){this.activeTrackId=e.detail.trackId,this.route=null,this.sidebarOpen=!1}handleLessonSelected(e){let{trackId:t,levelId:n,moduleId:r,lessonId:i}=e.detail;this.activeTrackId=t,this.route={trackId:t,levelId:n,moduleId:r,lessonId:i},this.sidebarOpen=!1}getTotalCompleted(){this.progressVersion;let{completed:e}=window.__progressService?.getProgress()??{};return e?Object.values(e).filter(Boolean).length:0}getTotalLessons(){return A.getTracks().reduce((e,t)=>e+t.levels.reduce((e,t)=>e+t.modules.reduce((e,t)=>e+t.lessons.length,0),0),0)}render(){let e=this.route?{levelId:this.route.levelId,moduleId:this.route.moduleId,lessonId:this.route.lessonId}:null;return x`
      <div class="app-header">
        <div class="header-left">
          <button class="mobile-menu-btn" @click=${()=>this.sidebarOpen=!this.sidebarOpen}>☰</button>
          <div class="logo">
            <span class="logo-icon">⚔️</span>
            <div>
              <div class="logo-text">Excalibur Academy</div>
              <div class="logo-sub">TypeScript · Game Dev</div>
            </div>
          </div>
        </div>
        <div class="header-right">
          <span class="progress-summary">
            <strong>${this.getTotalCompleted()}</strong> / ${this.getTotalLessons()} lessons
          </span>
        </div>
      </div>

      <div class="app-body">
        <div class="sidebar-overlay ${this.sidebarOpen?`open`:``}" @click=${()=>this.sidebarOpen=!1}></div>

        <aside class="sidebar ${this.sidebarOpen?`open`:``}">
          <div class="sidebar-track-section">
            <div class="sidebar-section-label">Tracks</div>
            <track-nav
              .activeTrackId=${this.activeTrackId}
              @track-selected=${this.handleTrackSelected}
            ></track-nav>
          </div>

          <div class="sidebar-modules-section">
            <module-nav
              .trackId=${this.activeTrackId}
              .activeLesson=${e}
              @lesson-selected=${this.handleLessonSelected}
            ></module-nav>
          </div>
        </aside>

        <main class="main-content">
          <lesson-view
            .trackId=${this.route?.trackId??``}
            .levelId=${this.route?.levelId??``}
            .moduleId=${this.route?.moduleId??``}
            .lessonId=${this.route?.lessonId??``}
            @lesson-selected=${this.handleLessonSelected}
          ></lesson-view>
        </main>
      </div>
    `}},xn.styles=o`
    :host {
      display: block;
      height: 100vh;
      overflow: hidden;
      font-family: var(--font-sans);
      background: var(--bg-primary);
      color: var(--text-primary);
    }

    /* Header */
    .app-header {
      height: 52px;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      background: var(--bg-header);
      backdrop-filter: blur(12px);
      position: relative;
      z-index: 10;
      flex-shrink: 0;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .mobile-menu-btn {
      display: none;
      padding: 6px;
      border: none;
      background: transparent;
      color: var(--text-muted);
      cursor: pointer;
      border-radius: 4px;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: flex;
        align-items: center;
      }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }

    .logo-icon {
      font-size: 1.2rem;
    }

    .logo-text {
      font-family: var(--font-display);
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.02em;
    }

    .logo-sub {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--accent);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .progress-summary {
      font-family: var(--font-mono);
      font-size: 0.68rem;
      color: var(--text-muted);
    }

    .progress-summary strong {
      color: var(--accent);
    }

    /* Body */
    .app-body {
      display: flex;
      height: calc(100vh - 52px);
      overflow: hidden;
    }

    /* Sidebar */
    .sidebar {
      width: 260px;
      flex-shrink: 0;
      border-right: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      background: var(--bg-sidebar);
      overflow: hidden;
      transition: transform 0.25s ease;
    }

    @media (max-width: 768px) {
      .sidebar {
        position: fixed;
        left: 0;
        top: 52px;
        height: calc(100vh - 52px);
        z-index: 50;
        transform: translateX(-100%);
        box-shadow: 4px 0 24px rgba(0,0,0,0.4);
      }

      .sidebar.open {
        transform: translateX(0);
      }
    }

    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      top: 52px;
      background: rgba(0, 0, 0, 0.5);
      z-index: 40;
    }

    @media (max-width: 768px) {
      .sidebar-overlay.open {
        display: block;
      }
    }

    .sidebar-track-section {
      padding: 12px 0 4px;
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }

    .sidebar-section-label {
      padding: 0 16px 8px;
      font-family: var(--font-mono);
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--text-muted);
    }

    .sidebar-modules-section {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding-top: 8px;
    }

    /* Main content */
    .main-content {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
  `,xn);j([k()],$.prototype,`route`,void 0),j([k()],$.prototype,`activeTrackId`,void 0),j([k()],$.prototype,`sidebarOpen`,void 0),j([k()],$.prototype,`progressVersion`,void 0),$=j([D(`excalibur-academy`)],$);