var de=Object.defineProperty;var ge=(e,t,s)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var c=(e,t,s)=>(ge(e,typeof t!="symbol"?t+"":t,s),s);/* empty css              */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const pe=(e,t)=>e===t,M={equals:pe};let te=re;const S=1,P=2,se={owned:null,cleanups:null,context:null,owner:null};var h=null;let U=null,l=null,u=null,p=null,O=0;function we(e,t){const s=l,n=h,i=e.length===0,r=t===void 0?n:t,o=i?se:{owned:null,cleanups:null,context:r?r.context:null,owner:r},a=i?e:()=>e(()=>L(()=>_(o)));h=o,l=null;try{return C(a,!0)}finally{l=s,h=n}}function v(e,t){t=t?Object.assign({},M,t):M;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=i=>(typeof i=="function"&&(i=i(s.value)),ie(s,i));return[ne.bind(s),n]}function F(e,t,s){const n=k(e,t,!1,S);T(n)}function q(e,t,s){te=Se;const n=k(e,t,!1,S);(!s||!s.render)&&(n.user=!0),p?p.push(n):T(n)}function W(e,t,s){s=s?Object.assign({},M,s):M;const n=k(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=s.equals||void 0,T(n),ne.bind(n)}function L(e){if(l===null)return e();const t=l;l=null;try{return e()}finally{l=t}}function ne(){if(this.sources&&this.state)if(this.state===S)T(this);else{const e=u;u=null,C(()=>G(this),!1),u=e}if(l){const e=this.observers?this.observers.length:0;l.sources?(l.sources.push(this),l.sourceSlots.push(e)):(l.sources=[this],l.sourceSlots=[e]),this.observers?(this.observers.push(l),this.observerSlots.push(l.sources.length-1)):(this.observers=[l],this.observerSlots=[l.sources.length-1])}return this.value}function ie(e,t,s){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&C(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=U&&U.running;o&&U.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?u.push(r):p.push(r),r.observers&&ae(r)),o||(r.state=S)}if(u.length>1e6)throw u=[],new Error},!1)),t}function T(e){if(!e.fn)return;_(e);const t=h,s=l,n=O;l=h=e,ye(e,e.value,n),l=s,h=t}function ye(e,t,s){let n;try{n=e.fn(t)}catch(i){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(_),e.owned=null),e.updatedAt=s+1,oe(i)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?ie(e,n):e.value=n,e.updatedAt=s)}function k(e,t,s,n=S,i){const r={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:s};return h===null||h!==se&&(h.owned?h.owned.push(r):h.owned=[r]),r}function N(e){if(e.state===0)return;if(e.state===P)return G(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<O);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===S)T(e);else if(e.state===P){const n=u;u=null,C(()=>G(e,t[0]),!1),u=n}}function C(e,t){if(u)return e();let s=!1;t||(u=[]),p?s=!0:p=[],O++;try{const n=e();return me(s),n}catch(n){s||(p=null),u=null,oe(n)}}function me(e){if(u&&(re(u),u=null),e)return;const t=p;p=null,t.length&&C(()=>te(t),!1)}function re(e){for(let t=0;t<e.length;t++)N(e[t])}function Se(e){let t,s=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[s++]=n:N(n)}for(t=0;t<s;t++)N(e[t])}function G(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const n=e.sources[s];if(n.sources){const i=n.state;i===S?n!==t&&(!n.updatedAt||n.updatedAt<O)&&N(n):i===P&&G(n,t)}}}function ae(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=P,s.pure?u.push(s):p.push(s),s.observers&&ae(s))}}function _(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),i=s.observers;if(i&&i.length){const r=i.pop(),o=s.observerSlots.pop();n<i.length&&(r.sourceSlots[o]=n,i[n]=r,s.observerSlots[n]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)_(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function oe(e,t=h){throw ve(e)}function x(e,t){return L(()=>e(t||{}))}const be=e=>`Stale read from <${e}>.`;function le(e){const t=e.keyed,s=W(()=>e.when,void 0,{equals:(n,i)=>t?n===i:!n==!i});return W(()=>{const n=s();if(n){const i=e.children;return typeof i=="function"&&i.length>0?L(()=>i(t?n:()=>{if(!L(s))throw be("Show");return e.when})):i}return e.fallback},void 0,void 0)}function Ae(e,t,s){let n=s.length,i=t.length,r=n,o=0,a=0,f=t[i-1].nextSibling,g=null;for(;o<i||a<r;){if(t[o]===s[a]){o++,a++;continue}for(;t[i-1]===s[r-1];)i--,r--;if(i===o){const d=r<n?a?s[a-1].nextSibling:s[r-a]:f;for(;a<r;)e.insertBefore(s[a++],d)}else if(r===a)for(;o<i;)(!g||!g.has(t[o]))&&t[o].remove(),o++;else if(t[o]===s[r-1]&&s[a]===t[i-1]){const d=t[--i].nextSibling;e.insertBefore(s[a++],t[o++].nextSibling),e.insertBefore(s[--r],d),t[i]=s[r]}else{if(!g){g=new Map;let b=a;for(;b<r;)g.set(s[b],b++)}const d=g.get(t[o]);if(d!=null)if(a<d&&d<r){let b=o,$=1,V;for(;++b<i&&b<r&&!((V=g.get(t[b]))==null||V!==d+$);)$++;if($>d-a){const he=t[o];for(;a<d;)e.insertBefore(s[a++],he)}else e.replaceChild(s[a++],t[o++])}else o++;else t[o++].remove()}}}function Le(e,t,s,n={}){let i;return we(r=>{i=r,t===document?e():j(t,e(),t.firstChild?null:void 0,s)},n.owner),()=>{i(),t.textContent=""}}function ce(e,t,s){let n;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,s?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>L(()=>document.importNode(n||(n=i()),!0)):()=>(n||(n=i())).cloneNode(!0);return r.cloneNode=r,r}function j(e,t,s,n){if(s!==void 0&&!n&&(n=[]),typeof t!="function")return D(e,t,n,s);F(i=>D(e,t(),i,s),n)}function D(e,t,s,n,i){for(;typeof s=="function";)s=s();if(t===s)return s;const r=typeof t,o=n!==void 0;if(e=o&&s[0]&&s[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),o){let a=s[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),s=A(e,s,n,a)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t;else if(t==null||r==="boolean")s=A(e,s,n);else{if(r==="function")return F(()=>{let a=t();for(;typeof a=="function";)a=a();s=D(e,a,s,n)}),()=>s;if(Array.isArray(t)){const a=[],f=s&&Array.isArray(s);if(R(a,t,s,i))return F(()=>s=D(e,a,s,n,!0)),()=>s;if(a.length===0){if(s=A(e,s,n),o)return s}else f?s.length===0?Y(e,a,n):Ae(e,s,a):(s&&A(e),Y(e,a));s=a}else if(t.nodeType){if(Array.isArray(s)){if(o)return s=A(e,s,n,t);A(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}else console.warn("Unrecognized value. Skipped inserting",t)}return s}function R(e,t,s,n){let i=!1;for(let r=0,o=t.length;r<o;r++){let a=t[r],f=s&&s[r],g;if(!(a==null||a===!0||a===!1))if((g=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))i=R(e,a,f)||i;else if(g==="function")if(n){for(;typeof a=="function";)a=a();i=R(e,Array.isArray(a)?a:[a],Array.isArray(f)?f:[f])||i}else e.push(a),i=!0;else{const d=String(a);f&&f.nodeType===3&&f.data===d?e.push(f):e.push(document.createTextNode(d))}}return i}function Y(e,t,s=null){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],s)}function A(e,t,s,n){if(s===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(i!==a){const f=a.parentNode===e;!r&&!o?f?e.replaceChild(i,a):e.insertBefore(i,s):f&&a.remove()}else r=!0}}else e.insertBefore(i,s);return[i]}const[xe,J]=v(!1),[X,B]=v(0),[I,Ee]=v(0),[Te,Z]=v(!1),[Xe,Ce]=v(0),[Ze,ee]=v(!1);function Me(){const[e,t]=v("0.00%"),s=n=>n.toFixed(2)+"%";return q(()=>{t(s(X()))},[X()]),{progress:e}}function Pe(){const[e,t]=v("00"),s=n=>n.toString().padStart(2,"0");return q(()=>{t(s(I()))},[I()]),{stage:e}}const Ne=ce('<div class="center"><h1>Stage </h1><h2>Loading...</h2><h3>');function Ge(){const{stage:e}=Pe(),{progress:t}=Me();return x(le,{get when(){return xe()},get children(){const s=Ne(),n=s.firstChild;n.firstChild;const i=n.nextSibling,r=i.nextSibling;return j(n,e,null),j(r,t),s}})}const De=ce('<div class="center"><h1>Your GamePlay here');function Ie(){return x(le,{get when(){return Te()},get children(){return De()}})}var m=(e=>(e.Null="Null",e.Load="Load",e.Play="Play",e))(m||{});class H{}class Oe extends H{async show(){return!0}}const E=e=>new Promise(t=>setTimeout(t,e));class _e extends H{async show(){return console.log("Showing ad..."),await E(2e3),console.log("Ad finished"),!0}}class $e extends H{async show(){return!1}}var y=(e=>(e.development="development",e.production="production",e.githubPages="github",e.crazyGames="crazy",e.poki="poki",e.itchIo="itch",e.unitTest="test",e.e2eTest="e2e",e))(y||{});class Ue{constructor(t){this.mode=t}isDevelopment(){return this.mode===y.development}isCrazyGames(){return this.mode===y.crazyGames}isItchIo(){return this.mode===y.itchIo}isPoki(){return this.mode===y.poki}isGithubPages(){return this.mode===y.githubPages}isUnitTest(){return this.mode===y.unitTest}isE2ETest(){return this.mode===y.e2eTest}}const z=new Ue("github");class Be{constructor(){c(this,"CoolDown",3e4);c(this,"ad");c(this,"enabled",!0);c(this,"timer",null);c(this,"timeLeft",0);this.ad=this.pickStrategy()}async show(){if(this.enabled)return this.disableAdManager(),this.enableAdManagerAfter(this.CoolDown),this.ad.show()}disableAdManager(){this.enabled=!1,ee(!0),this.timeLeft=this.CoolDown/1e3,this.timer=setInterval(()=>{Ce(--this.timeLeft)},1e3)}enableAdManagerAfter(t){setTimeout(()=>{this.enabled=!0,ee(!1),this.timer&&clearTimeout(this.timer)},t)}pickStrategy(){return z.isCrazyGames()?new Oe:z.isPoki()?new $e:new _e}}var ue={exports:{}};function K(){}K.prototype={on:function(e,t,s){var n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:s}),this},once:function(e,t,s){var n=this;function i(){n.off(e,i),t.apply(s,arguments)}return i._=t,this.on(e,i,s)},emit:function(e){var t=[].slice.call(arguments,1),s=((this.e||(this.e={}))[e]||[]).slice(),n=0,i=s.length;for(n;n<i;n++)s[n].fn.apply(s[n].ctx,t);return this},off:function(e,t){var s=this.e||(this.e={}),n=s[e],i=[];if(n&&t)for(var r=0,o=n.length;r<o;r++)n[r].fn!==t&&n[r].fn._!==t&&i.push(n[r]);return i.length?s[e]=i:delete s[e],this}};ue.exports=K;var Fe=ue.exports.TinyEmitter=K;const je=new Fe;class Re{constructor(){c(this,"assetsLoaded",{});c(this,"assetsToLoad",{})}setAssets(t){for(const[s,n]of Object.entries(t))this.assetsToLoad[s]=n}async startLoading(){for(const[s,n]of Object.entries(this.assetsLoaded));this.assetsLoaded.backgroundImage=new Image,this.assetsLoaded.spriteSheet=new Image;let t=Math.random()*10;B(t),await E(1e3),t+=Math.random()*40,B(t),await E(1e3),t+=Math.random()*50,B(Math.max(t,100)),je.emit("am:error","Error loading assets")}get assets(){return this.assetsLoaded}}class fe{constructor(t){c(this,"assetManager");c(this,"resources",{});this.game=t,this.assetManager=new Re}get assets(){return this.resources}async startAssetLoading(){this.assetManager.setAssets(this.resourcesToLoad),await this.assetManager.startLoading()}async update(){}}class ze extends fe{get resourcesToLoad(){return{map:"assets/stages/01/map.png",player:"assets/stages/01/player.png",enemy:"assets/stages/01/enemy.png"}}}class w extends fe{get resourcesToLoad(){return{map:"assets/stages/02/map.png",player:"assets/stages/02/player.png",enemy:"assets/stages/02/enemy.png"}}}class qe{constructor(t){c(this,"stages");c(this,"currentStage");this.stages=[new ze(t),new w(t),new w(t),new w(t),new w(t),new w(t),new w(t),new w(t),new w(t)],this.currentStage=this.stages[I()]}async update(){await this.currentStage.update()}async nextStage(){this.changeStage(I()+1)}startAssetLoading(){return this.currentStage.startAssetLoading()}changeStage(t){t=Math.min(t,this.stages.length-1),this.currentStage=this.stages[t],Ee(t)}}class Q{constructor(t){this.game=t}async activate(){console.group(`${this.constructor.name} state`),console.info("Activated")}async deactivate(){console.info("Deactivated"),console.groupEnd()}async update(){await this.game.stage.update()}}class ke extends Q{async activate(){await super.activate(),J(!0),await this.game.stage.startAssetLoading(),await E(2e3),await this.game.state.changeState(m.Play)}async deactivate(){J(!1),await super.deactivate()}async update(){}}class He extends Q{async activate(){}async deactivate(){}async update(){}}class Ke extends Q{async activate(){await super.activate(),await this.game.start(),Z(!0),await E(5e3),await this.game.stage.nextStage(),await this.game.state.changeState(m.Load)}async deactivate(){Z(!1),await super.deactivate()}async update(){}}class Qe{constructor(t){c(this,"states");c(this,"currentState");this.states={[m.Null]:new He(t),[m.Load]:new ke(t),[m.Play]:new Ke(t)},this.currentState=this.states[m.Null]}async update(){await this.currentState.update()}async changeState(t){await this.currentState.deactivate(),this.currentState=this.states[t],await this.currentState.activate()}}class Ve{constructor(){c(this,"state");c(this,"stage");c(this,"ads");this.ads=new Be,this.state=new Qe(this),this.stage=new qe(this)}async init(){console.log("Game initialized"),await this.state.changeState(m.Load)}async start(){console.log("Game started")}async update(){await this.state.update()}async stop(){console.log("Game stopped")}async destroy(){console.log("Game destroyed")}}function We(){const e=new Ve;return q(async()=>(await e.init(),()=>e.destroy())),[x(Ge,{}),x(Ie,{})]}console.info("Is development mode:",z.isDevelopment());Le(()=>x(We,{}),document.body);
//# sourceMappingURL=index-7d7c7f29.js.map