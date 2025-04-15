(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}})();const et=!1;var ht=Array.isArray,fr=Array.prototype.indexOf,ur=Array.from,cr=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,pt=Object.getOwnPropertyDescriptors,vr=Object.prototype,_r=Array.prototype,$e=Object.getPrototypeOf,tt=Object.isExtensible;function dr(e){return e()}function Ce(e){for(var t=0;t<e.length;t++)e[t]()}const C=2,gt=4,xe=8,Ue=16,M=32,X=64,ge=128,S=256,we=512,N=1024,F=2048,W=4096,Q=8192,Te=16384,hr=32768,Ve=65536,pr=1<<19,wt=1<<20,De=1<<21,se=Symbol("$state"),gr=Symbol("");function yt(e){return e===this.v}function wr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function yr(e){return!wr(e,this.v)}function mr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Er(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function br(e){throw new Error("https://svelte.dev/e/effect_orphan")}function xr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Tr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function jr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ar(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let je=!1,Nr=!1;function Or(){je=!0}const Sr=1,kr=2,A=Symbol(),Pr="http://www.w3.org/1999/xhtml";let m=null;function rt(e){m=e}function mt(e,t=!1,r){var n=m={p:m,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};je&&!t&&(m.l={s:null,u:null,r1:[],r2:Be(!1)}),Rt(()=>{n.d=!0})}function Et(e){const t=m;if(t!==null){const s=t.e;if(s!==null){var r=p,n=d;t.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];V(l.effect),I(l.reaction),Ct(l.fn)}}finally{V(r),I(n)}}m=t.p,t.m=!0}return{}}function fe(){return!je||m!==null&&m.l===null}function Z(e){if(typeof e!="object"||e===null||se in e)return e;const t=$e(e);if(t!==vr&&t!==_r)return e;var r=new Map,n=ht(e),a=$(0),l=d,s=o=>{var i=d;I(l);var f=o();return I(i),f};return n&&r.set("length",$(e.length)),new Proxy(e,{defineProperty(o,i,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Tr();var v=r.get(i);return v===void 0?(v=s(()=>$(f.value)),r.set(i,v)):y(v,s(()=>Z(f.value))),!0},deleteProperty(o,i){var f=r.get(i);if(f===void 0)i in o&&r.set(i,s(()=>$(A)));else{if(n&&typeof i=="string"){var v=r.get("length"),u=Number(i);Number.isInteger(u)&&u<v.v&&y(v,u)}y(f,A),nt(a)}return!0},get(o,i,f){var _;if(i===se)return e;var v=r.get(i),u=i in o;if(v===void 0&&(!u||(_=ie(o,i))!=null&&_.writable)&&(v=s(()=>$(Z(u?o[i]:A))),r.set(i,v)),v!==void 0){var c=h(v);return c===A?void 0:c}return Reflect.get(o,i,f)},getOwnPropertyDescriptor(o,i){var f=Reflect.getOwnPropertyDescriptor(o,i);if(f&&"value"in f){var v=r.get(i);v&&(f.value=h(v))}else if(f===void 0){var u=r.get(i),c=u==null?void 0:u.v;if(u!==void 0&&c!==A)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return f},has(o,i){var c;if(i===se)return!0;var f=r.get(i),v=f!==void 0&&f.v!==A||Reflect.has(o,i);if(f!==void 0||p!==null&&(!v||(c=ie(o,i))!=null&&c.writable)){f===void 0&&(f=s(()=>$(v?Z(o[i]):A)),r.set(i,f));var u=h(f);if(u===A)return!1}return v},set(o,i,f,v){var H;var u=r.get(i),c=i in o;if(n&&i==="length")for(var _=f;_<u.v;_+=1){var b=r.get(_+"");b!==void 0?y(b,A):_ in o&&(b=s(()=>$(A)),r.set(_+"",b))}u===void 0?(!c||(H=ie(o,i))!=null&&H.writable)&&(u=s(()=>$(void 0)),y(u,s(()=>Z(f))),r.set(i,u)):(c=u.v!==A,y(u,s(()=>Z(f))));var x=Reflect.getOwnPropertyDescriptor(o,i);if(x!=null&&x.set&&x.set.call(v,f),!c){if(n&&typeof i=="string"){var K=r.get("length"),B=Number(i);Number.isInteger(B)&&B>=K.v&&y(K,B+1)}nt(a)}return!0},ownKeys(o){h(a);var i=Reflect.ownKeys(o).filter(u=>{var c=r.get(u);return c===void 0||c.v!==A});for(var[f,v]of r)v.v!==A&&!(f in o)&&i.push(f);return i},setPrototypeOf(){jr()}})}function nt(e,t=1){y(e,e.v+t)}function bt(e){var t=C|F,r=d!==null&&(d.f&C)!==0?d:null;return p===null||r!==null&&(r.f&S)!==0?t|=S:p.f|=wt,{ctx:m,deps:null,effects:null,equals:yt,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??p}}function xt(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Y(t[r])}}function Rr(e){for(var t=e.parent;t!==null;){if((t.f&C)===0)return t;t=t.parent}return null}function Tt(e){var t,r=p;V(Rr(e));try{xt(e),t=Ht(e)}finally{V(r)}return t}function jt(e){var t=Tt(e),r=(U||(e.f&S)!==0)&&e.deps!==null?W:N;D(e,r),e.equals(t)||(e.v=t,e.wv=Vt())}const oe=new Map;function Be(e,t){var r={f:0,v:e,reactions:null,equals:yt,rv:0,wv:0};return r}function $(e,t){const r=Be(e);return Br(r),r}function ne(e,t=!1){var n;const r=Be(e);return t||(r.equals=yr),je&&m!==null&&m.l!==null&&((n=m.l).s??(n.s=[])).push(r),r}function y(e,t,r=!1){d!==null&&!L&&fe()&&(d.f&(C|Ue))!==0&&!(j!=null&&j.includes(e))&&Ar();let n=r?Z(t):t;return Cr(e,n)}function Cr(e,t){if(!e.equals(t)){var r=e.v;ue?oe.set(e,t):oe.set(e,r),e.v=t,(e.f&C)!==0&&((e.f&F)!==0&&Tt(e),D(e,(e.f&S)===0?N:W)),e.wv=Vt(),At(e,F),fe()&&p!==null&&(p.f&N)!==0&&(p.f&(M|X))===0&&(P===null?Hr([e]):P.push(e))}return t}function At(e,t){var r=e.reactions;if(r!==null)for(var n=fe(),a=r.length,l=0;l<a;l++){var s=r[l],o=s.f;(o&F)===0&&(!n&&s===p||(D(s,t),(o&(N|S))!==0&&((o&C)!==0?At(s,W):Ne(s))))}}var lt,Nt,Ot,St;function Dr(){if(lt===void 0){lt=window,Nt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ot=ie(t,"firstChild").get,St=ie(t,"nextSibling").get,tt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),tt(r)&&(r.__t=void 0)}}function Lr(e=""){return document.createTextNode(e)}function Le(e){return Ot.call(e)}function kt(e){return St.call(e)}function E(e,t){return Le(e)}function g(e,t=1,r=!1){let n=e;for(;t--;)n=kt(n);return n}function Pt(e){p===null&&d===null&&br(),d!==null&&(d.f&S)!==0&&p===null&&Er(),ue&&mr()}function Fr(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function ee(e,t,r,n=!0){var a=p,l={ctx:m,deps:null,nodes_start:null,nodes_end:null,f:e|F,first:null,fn:t,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{He(l),l.f|=hr}catch(i){throw Y(l),i}else t!==null&&Ne(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(wt|ge))===0;if(!s&&n&&(a!==null&&Fr(l,a),d!==null&&(d.f&C)!==0)){var o=d;(o.effects??(o.effects=[])).push(l)}return l}function Rt(e){const t=ee(xe,null,!1);return D(t,N),t.teardown=e,t}function at(e){Pt();var t=p!==null&&(p.f&M)!==0&&m!==null&&!m.m;if(t){var r=m;(r.e??(r.e=[])).push({fn:e,effect:p,reaction:d})}else{var n=Ct(e);return n}}function Ir(e){return Pt(),Dt(e)}function Mr(e){const t=ee(X,e,!0);return(r={})=>new Promise(n=>{r.outro?Ie(t,()=>{Y(t),n(void 0)}):(Y(t),n(void 0))})}function Ct(e){return ee(gt,e,!1)}function Dt(e){return ee(xe,e,!0)}function _e(e,t=[],r=bt){const n=t.map(r);return Lt(()=>e(...n.map(h)))}function Lt(e,t=0){return ee(xe|Ue|t,e,!0)}function Fe(e,t=!0){return ee(xe|M,e,!0,t)}function Ft(e){var t=e.teardown;if(t!==null){const r=ue,n=d;st(!0),I(null);try{t.call(null)}finally{st(r),I(n)}}}function It(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;(r.f&X)!==0?r.parent=null:Y(r,t),r=n}}function qr(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&M)===0&&Y(t),t=r}}function Y(e,t=!0){var r=!1;if((t||(e.f&pr)!==0)&&e.nodes_start!==null){for(var n=e.nodes_start,a=e.nodes_end;n!==null;){var l=n===a?null:kt(n);n.remove(),n=l}r=!0}It(e,t&&!r),be(e,0),D(e,Te);var s=e.transitions;if(s!==null)for(const i of s)i.stop();Ft(e);var o=e.parent;o!==null&&o.first!==null&&Mt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Mt(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ie(e,t){var r=[];qt(e,r,!0),$r(r,()=>{Y(e),t&&t()})}function $r(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function qt(e,t,r){if((e.f&Q)===0){if(e.f^=Q,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&t.push(s);for(var n=e.first;n!==null;){var a=n.next,l=(n.f&Ve)!==0||(n.f&M)!==0;qt(n,t,l?r:!1),n=a}}}function it(e){$t(e,!0)}function $t(e,t){if((e.f&Q)!==0){e.f^=Q,(e.f&N)===0&&(e.f^=N),ce(e)&&(D(e,F),Ne(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&Ve)!==0||(r.f&M)!==0;$t(r,a?t:!1),r=n}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&l.in()}}let ye=[];function Ur(){var e=ye;ye=[],Ce(e)}function Vr(e){ye.length===0&&queueMicrotask(Ur),ye.push(e)}let he=!1,Me=!1,me=null,G=!1,ue=!1;function st(e){ue=e}let pe=[];let d=null,L=!1;function I(e){d=e}let p=null;function V(e){p=e}let j=null;function Br(e){d!==null&&d.f&De&&(j===null?j=[e]:j.push(e))}let T=null,O=0,P=null;function Hr(e){P=e}let Ut=1,Ee=0,U=!1;function Vt(){return++Ut}function ce(e){var u;var t=e.f;if((t&F)!==0)return!0;if((t&W)!==0){var r=e.deps,n=(t&S)!==0;if(r!==null){var a,l,s=(t&we)!==0,o=n&&p!==null&&!U,i=r.length;if(s||o){var f=e,v=f.parent;for(a=0;a<i;a++)l=r[a],(s||!((u=l==null?void 0:l.reactions)!=null&&u.includes(f)))&&(l.reactions??(l.reactions=[])).push(f);s&&(f.f^=we),o&&v!==null&&(v.f&S)===0&&(f.f^=S)}for(a=0;a<i;a++)if(l=r[a],ce(l)&&jt(l),l.wv>e.wv)return!0}(!n||p!==null&&!U)&&D(e,N)}return!1}function Gr(e,t){for(var r=t;r!==null;){if((r.f&ge)!==0)try{r.fn(e);return}catch{r.f^=ge}r=r.parent}throw he=!1,e}function Yr(e){return(e.f&Te)===0&&(e.parent===null||(e.parent.f&ge)===0)}function Ae(e,t,r,n){if(he){if(r===null&&(he=!1),Yr(t))throw e;return}r!==null&&(he=!0);{Gr(e,t);return}}function Bt(e,t,r=!0){var n=e.reactions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];j!=null&&j.includes(e)||((l.f&C)!==0?Bt(l,t,!1):t===l&&(r?D(l,F):(l.f&N)!==0&&D(l,W),Ne(l)))}}function Ht(e){var _;var t=T,r=O,n=P,a=d,l=U,s=j,o=m,i=L,f=e.f;T=null,O=0,P=null,U=(f&S)!==0&&(L||!G||d===null),d=(f&(M|X))===0?e:null,j=null,rt(e.ctx),L=!1,Ee++,e.f|=De;try{var v=(0,e.fn)(),u=e.deps;if(T!==null){var c;if(be(e,O),u!==null&&O>0)for(u.length=O+T.length,c=0;c<T.length;c++)u[O+c]=T[c];else e.deps=u=T;if(!U)for(c=O;c<u.length;c++)((_=u[c]).reactions??(_.reactions=[])).push(e)}else u!==null&&O<u.length&&(be(e,O),u.length=O);if(fe()&&P!==null&&!L&&u!==null&&(e.f&(C|W|F))===0)for(c=0;c<P.length;c++)Bt(P[c],e);return a!==e&&(Ee++,P!==null&&(n===null?n=P:n.push(...P))),v}finally{T=t,O=r,P=n,d=a,U=l,j=s,rt(o),L=i,e.f^=De}}function Wr(e,t){let r=t.reactions;if(r!==null){var n=fr.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&C)!==0&&(T===null||!T.includes(t))&&(D(t,W),(t.f&(S|we))===0&&(t.f^=we),xt(t),be(t,0))}function be(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Wr(e,r[n])}function He(e){var t=e.f;if((t&Te)===0){D(e,N);var r=p,n=m,a=G;p=e,G=!0;try{(t&Ue)!==0?qr(e):It(e),Ft(e);var l=Ht(e);e.teardown=typeof l=="function"?l:null,e.wv=Ut;var s=e.deps,o;et&&Nr&&e.f&F}catch(i){Ae(i,e,r,n||e.ctx)}finally{G=a,p=r}}}function Kr(){try{xr()}catch(e){if(me!==null)Ae(e,me,null);else throw e}}function zr(){var e=G;try{var t=0;for(G=!0;pe.length>0;){t++>1e3&&Kr();var r=pe,n=r.length;pe=[];for(var a=0;a<n;a++){var l=Zr(r[a]);Jr(l)}oe.clear()}}finally{Me=!1,G=e,me=null}}function Jr(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if((n.f&(Te|Q))===0)try{ce(n)&&(He(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Mt(n):n.fn=null))}catch(a){Ae(a,n,null,n.ctx)}}}function Ne(e){Me||(Me=!0,queueMicrotask(zr));for(var t=me=e;t.parent!==null;){t=t.parent;var r=t.f;if((r&(X|M))!==0){if((r&N)===0)return;t.f^=N}}pe.push(t)}function Zr(e){for(var t=[],r=e;r!==null;){var n=r.f,a=(n&(M|X))!==0,l=a&&(n&N)!==0;if(!l&&(n&Q)===0){if((n&gt)!==0)t.push(r);else if(a)r.f^=N;else{var s=d;try{d=r,ce(r)&&He(r)}catch(f){Ae(f,r,null,r.ctx)}finally{d=s}}var o=r.first;if(o!==null){r=o;continue}}var i=r.parent;for(r=r.next;r===null&&i!==null;)r=i.next,i=i.parent}return t}function h(e){var t=e.f,r=(t&C)!==0;if(d!==null&&!L){if(!(j!=null&&j.includes(e))){var n=d.deps;e.rv<Ee&&(e.rv=Ee,T===null&&n!==null&&n[O]===e?O++:T===null?T=[e]:(!U||!T.includes(e))&&T.push(e))}}else if(r&&e.deps===null&&e.effects===null){var a=e,l=a.parent;l!==null&&(l.f&S)===0&&(a.f^=S)}return r&&(a=e,ce(a)&&jt(a)),ue&&oe.has(e)?oe.get(e):e.v}function Gt(e){var t=L;try{return L=!0,e()}finally{L=t}}const Qr=-7169;function D(e,t){e.f=e.f&Qr|t}function Xr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(se in e)qe(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&se in r&&qe(r)}}}function qe(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{qe(e[n],t)}catch{}const r=$e(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=pt(r);for(let a in n){const l=n[a].get;if(l)try{l.call(e)}catch{}}}}}const en=["touchstart","touchmove"];function tn(e){return en.includes(e)}let ot=!1;function rn(){ot||(ot=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Yt(e){var t=d,r=p;I(null),V(null);try{return e()}finally{I(t),V(r)}}function nn(e,t,r,n=r){e.addEventListener(t,()=>Yt(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),rn()}const ln=new Set,ft=new Set;function an(e,t,r,n={}){function a(l){if(n.capture||ae.call(t,l),!l.cancelBubble)return Yt(()=>r==null?void 0:r.call(this,l))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Vr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function sn(e,t,r,n,a){var l={capture:n,passive:a},s=an(e,t,r,l);(t===document.body||t===window||t===document)&&Rt(()=>{t.removeEventListener(e,s,l)})}function ae(e){var H;var t=this,r=t.ownerDocument,n=e.type,a=((H=e.composedPath)==null?void 0:H.call(e))||[],l=a[0]||e.target,s=0,o=e.__root;if(o){var i=a.indexOf(o);if(i!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;i<=f&&(s=i)}if(l=a[s]||e.target,l!==t){cr(e,"currentTarget",{configurable:!0,get(){return l||r}});var v=d,u=p;I(null),V(null);try{for(var c,_=[];l!==null;){var b=l.assignedSlot||l.parentNode||l.host||null;try{var x=l["__"+n];if(x!=null&&(!l.disabled||e.target===l))if(ht(x)){var[K,...B]=x;K.apply(l,[e,...B])}else x.call(l,e)}catch(w){c?_.push(w):c=w}if(e.cancelBubble||b===t||b===null)break;l=b}if(c){for(let w of _)queueMicrotask(()=>{throw w});throw c}}finally{e.__root=t,delete e.currentTarget,I(v),V(u)}}}function on(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function ut(e,t){var r=p;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ve(e,t){var r=(t&Sr)!==0,n=(t&kr)!==0,a,l=!e.startsWith("<!>");return()=>{a===void 0&&(a=on(l?e:"<!>"+e),r||(a=Le(a)));var s=n||Nt?document.importNode(a,!0):a.cloneNode(!0);if(r){var o=Le(s),i=s.lastChild;ut(o,i)}else ut(s,s);return s}}function le(e,t){e!==null&&e.before(t)}function k(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function fn(e,t){return un(e,t)}const J=new Map;function un(e,{target:t,anchor:r,props:n={},events:a,context:l,intro:s=!0}){Dr();var o=new Set,i=u=>{for(var c=0;c<u.length;c++){var _=u[c];if(!o.has(_)){o.add(_);var b=tn(_);t.addEventListener(_,ae,{passive:b});var x=J.get(_);x===void 0?(document.addEventListener(_,ae,{passive:b}),J.set(_,1)):J.set(_,x+1)}}};i(ur(ln)),ft.add(i);var f=void 0,v=Mr(()=>{var u=r??t.appendChild(Lr());return Fe(()=>{if(l){mt({});var c=m;c.c=l}a&&(n.$$events=a),f=e(u,n)||{},l&&Et()}),()=>{var b;for(var c of o){t.removeEventListener(c,ae);var _=J.get(c);--_===0?(document.removeEventListener(c,ae),J.delete(c)):J.set(c,_)}ft.delete(i),u!==r&&((b=u.parentNode)==null||b.removeChild(u))}});return cn.set(f,v),f}let cn=new WeakMap;function de(e,t,[r,n]=[0,0]){var a=e,l=null,s=null,o=A,i=r>0?Ve:0,f=!1;const v=(c,_=!0)=>{f=!0,u(_,c)},u=(c,_)=>{o!==(o=c)&&(o?(l?it(l):_&&(l=Fe(()=>_(a))),s&&Ie(s,()=>{s=null})):(s?it(s):_&&(s=Fe(()=>_(a,[r+1,n]))),l&&Ie(l,()=>{l=null})))};Lt(()=>{f=!1,t(v),f||u(null,null)},i)}const vn=Symbol("is custom element"),_n=Symbol("is html");function ct(e,t,r,n){var a=dn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[gr]=r),r==null?e.removeAttribute(t):typeof r!="string"&&hn(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function dn(e){return e.__attributes??(e.__attributes={[vn]:e.nodeName.includes("-"),[_n]:e.namespaceURI===Pr})}var vt=new Map;function hn(e){var t=vt.get(e.nodeName);if(t)return t;vt.set(e.nodeName,t=[]);for(var r,n=e,a=Element.prototype;a!==n;){r=pt(n);for(var l in r)r[l].set&&t.push(l);n=$e(n)}return t}function pn(e,t,r=t){var n=fe();nn(e,"input",a=>{var l=a?e.defaultValue:e.value;if(l=Pe(e)?Re(l):l,r(l),n&&l!==(l=t())){var s=e.selectionStart,o=e.selectionEnd;e.value=l??"",o!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(o,e.value.length))}}),Gt(t)==null&&e.value&&r(Pe(e)?Re(e.value):e.value),Dt(()=>{var a=t();Pe(e)&&a===Re(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Pe(e){var t=e.type;return t==="number"||t==="range"}function Re(e){return e===""?null:+e}function gn(e=!1){const t=m,r=t.l.u;if(!r)return;let n=()=>Xr(t.s);if(e){let a=0,l={};const s=bt(()=>{let o=!1;const i=t.s;for(const f in i)i[f]!==l[f]&&(l[f]=i[f],o=!0);return o&&a++,a});n=()=>h(s)}r.b.length&&Ir(()=>{_t(t,n),Ce(r.b)}),at(()=>{const a=Gt(()=>r.m.map(dr));return()=>{for(const l of a)typeof l=="function"&&l()}}),r.a.length&&at(()=>{_t(t,n),Ce(r.a)})}function _t(e,t){if(e.l.s)for(const r of e.l.s)h(r);t()}const wn="5";var dt;typeof window<"u"&&((dt=window.__svelte??(window.__svelte={})).v??(dt.v=new Set)).add(wn);Or();var yn=ve('<div class="error svelte-4eh2nj"> </div>'),mn=ve('<div class="spinner svelte-4eh2nj"></div> <p style="text-align: center">Image generation is in progress... Please wait a moment.</p>',1),En=ve('<img class="svelte-4eh2nj">'),bn=ve('<div class="character-section svelte-4eh2nj"><h2 class="svelte-4eh2nj"> </h2> <div class="character-details svelte-4eh2nj"><div class="character-image svelte-4eh2nj"><!></div> <div class="character-info svelte-4eh2nj"><h3 class="svelte-4eh2nj">Description</h3> <p> </p> <h3 class="svelte-4eh2nj">Appearance</h3> <ul class="svelte-4eh2nj"><li class="svelte-4eh2nj"><strong>Gender:</strong> </li> <li class="svelte-4eh2nj"><strong>Age:</strong> </li> <li class="svelte-4eh2nj"><strong>Face:</strong> </li> <li class="svelte-4eh2nj"><strong>Hair:</strong> </li> <li class="svelte-4eh2nj"><strong>Clothing:</strong> </li> <li class="svelte-4eh2nj"><strong>Shoes:</strong> </li> <li class="svelte-4eh2nj"><strong>Expression:</strong> </li> <li class="svelte-4eh2nj"><strong>World View:</strong> </li></ul></div></div></div>'),xn=ve('<main class="svelte-4eh2nj"><h1 class="svelte-4eh2nj">Character Generator</h1> <div class="input-section svelte-4eh2nj"><textarea placeholder="Describe your character (e.g., a young wizard with blue eyes and long white hair)" rows="4" class="svelte-4eh2nj"></textarea> <button class="svelte-4eh2nj"> </button></div> <!> <!></main>');function Tn(e,t){mt(t,!1);let r=ne(""),n=ne(null),a=ne(null),l=ne(!1),s=ne(null);const o="https://character-gen.interverse.one";async function i(){if(!h(r).trim()){y(s,"Please enter a character description");return}y(l,!0),y(s,null),y(n,null),y(a,null);try{const w=await fetch(`${o}/api/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:h(r)})});if(!w.ok){const q=await w.json();throw new Error(q.message||"Failed to generate character")}const R=await w.json();y(n,R.character),f(R.image_req_id)}catch(w){y(s,w.message)}finally{}}async function f(w){let R=0;const q=30;for(;R<q;){const te=await fetch(`${o}/api/image/${w}`);if(te.ok){const re=await te.blob();y(a,URL.createObjectURL(re)),y(l,!1);break}if(te.status!==425){y(s,"Image generation is taking too long or has failed."),y(l,!1);break}R++,await new Promise(re=>setTimeout(re,2e3))}}gn();var v=xn(),u=g(E(v),2),c=E(u),_=g(c,2),b=E(_),x=g(u,2);{var K=w=>{var R=yn(),q=E(R);_e(()=>k(q,h(s))),le(w,R)};de(x,w=>{h(s)&&w(K)})}var B=g(x,2);{var H=w=>{var R=bn(),q=E(R),te=E(q),re=g(q,2),Ge=E(re),Wt=E(Ge);{var Kt=z=>{var Oe=mn();le(z,Oe)},zt=(z,Oe)=>{{var or=Se=>{var ke=En();_e(()=>{ct(ke,"src",h(a)),ct(ke,"alt",h(n).character_name)}),le(Se,ke)};de(z,Se=>{h(a)&&Se(or)},Oe)}};de(Wt,z=>{h(l)?z(Kt):z(zt,!1)})}var Jt=g(Ge,2),Ye=g(E(Jt),2),Zt=E(Ye),Qt=g(Ye,4),We=E(Qt),Xt=g(E(We)),Ke=g(We,2),er=g(E(Ke)),ze=g(Ke,2),tr=g(E(ze)),Je=g(ze,2),rr=g(E(Je)),Ze=g(Je,2),nr=g(E(Ze)),Qe=g(Ze,2),lr=g(E(Qe)),Xe=g(Qe,2),ar=g(E(Xe)),ir=g(Xe,2),sr=g(E(ir));_e(()=>{k(te,h(n).character_name),k(Zt,h(n).character_desc),k(Xt,` ${h(n).character_appearance.gender??""}`),k(er,` ${h(n).character_appearance.age??""}`),k(tr,` ${h(n).character_appearance.face??""}`),k(rr,` ${h(n).character_appearance.hair??""}`),k(nr,` ${h(n).character_appearance.cloth??""}`),k(lr,` ${h(n).character_appearance.shoes??""}`),k(ar,` ${h(n).character_appearance.expression??""}`),k(sr,` ${h(n).character_appearance.world_view??""}`)}),le(w,R)};de(B,w=>{h(n)&&w(H)})}_e(()=>{_.disabled=h(l),k(b,h(l)?"Generating...":"Generate Character")}),pn(c,()=>h(r),w=>y(r,w)),sn("click",_,i),le(e,v),Et()}fn(Tn,{target:document.getElementById("app")});
