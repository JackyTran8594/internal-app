(self.webpackChunktask_management=self.webpackChunktask_management||[]).push([[8944,7579,9751,958],{9751:(v,l,e)=>{e.d(l,{y:()=>p});var n=e(930),o=e(727),a=e(8822),d=e(9635),c=e(2416),_=e(576),E=e(2806);let p=(()=>{class s{constructor(u){u&&(this._subscribe=u)}lift(u){const f=new s;return f.source=this,f.operator=u,f}subscribe(u,f,D){const O=function t(s){return s&&s instanceof n.Lv||function r(s){return s&&(0,_.m)(s.next)&&(0,_.m)(s.error)&&(0,_.m)(s.complete)}(s)&&(0,o.Nn)(s)}(u)?u:new n.Hp(u,f,D);return(0,E.x)(()=>{const{operator:S,source:T}=this;O.add(S?S.call(O,T):T?this._subscribe(O):this._trySubscribe(O))}),O}_trySubscribe(u){try{return this._subscribe(u)}catch(f){u.error(f)}}forEach(u,f){return new(f=h(f))((D,O)=>{const S=new n.Hp({next:T=>{try{u(T)}catch(C){O(C),S.unsubscribe()}},error:O,complete:D});this.subscribe(S)})}_subscribe(u){var f;return null===(f=this.source)||void 0===f?void 0:f.subscribe(u)}[a.L](){return this}pipe(...u){return(0,d.U)(u)(this)}toPromise(u){return new(u=h(u))((f,D)=>{let O;this.subscribe(S=>O=S,S=>D(S),()=>f(O))})}}return s.create=P=>new s(P),s})();function h(s){var P;return null!==(P=s??c.v.Promise)&&void 0!==P?P:Promise}},7579:(v,l,e)=>{e.d(l,{x:()=>E});var n=e(9751),o=e(727);const d=(0,e(3888).d)(h=>function(){h(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var c=e(8737),_=e(2806);let E=(()=>{class h extends n.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){const s=new p(this,this);return s.operator=t,s}_throwIfClosed(){if(this.closed)throw new d}next(t){(0,_.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const s of this.currentObservers)s.next(t)}})}error(t){(0,_.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;const{observers:s}=this;for(;s.length;)s.shift().error(t)}})}complete(){(0,_.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){const{hasError:s,isStopped:P,observers:u}=this;return s||P?o.Lc:(this.currentObservers=null,u.push(t),new o.w0(()=>{this.currentObservers=null,(0,c.P)(u,t)}))}_checkFinalizedStatuses(t){const{hasError:s,thrownError:P,isStopped:u}=this;s?t.error(P):u&&t.complete()}asObservable(){const t=new n.y;return t.source=this,t}}return h.create=(r,t)=>new p(r,t),h})();class p extends E{constructor(r,t){super(),this.destination=r,this.source=t}next(r){var t,s;null===(s=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===s||s.call(t,r)}error(r){var t,s;null===(s=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===s||s.call(t,r)}complete(){var r,t;null===(t=null===(r=this.destination)||void 0===r?void 0:r.complete)||void 0===t||t.call(r)}_subscribe(r){var t,s;return null!==(s=null===(t=this.source)||void 0===t?void 0:t.subscribe(r))&&void 0!==s?s:o.Lc}}},930:(v,l,e)=>{e.d(l,{Hp:()=>D,Lv:()=>s});var n=e(576),o=e(727),a=e(2416),d=e(7849),c=e(5032);const _=h("C",void 0,void 0);function h(m,i,b){return{kind:m,value:i,error:b}}var r=e(3410),t=e(2806);class s extends o.w0{constructor(i){super(),this.isStopped=!1,i?(this.destination=i,(0,o.Nn)(i)&&i.add(this)):this.destination=C}static create(i,b,y){return new D(i,b,y)}next(i){this.isStopped?T(function p(m){return h("N",m,void 0)}(i),this):this._next(i)}error(i){this.isStopped?T(function E(m){return h("E",void 0,m)}(i),this):(this.isStopped=!0,this._error(i))}complete(){this.isStopped?T(_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(i){this.destination.next(i)}_error(i){try{this.destination.error(i)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const P=Function.prototype.bind;function u(m,i){return P.call(m,i)}class f{constructor(i){this.partialObserver=i}next(i){const{partialObserver:b}=this;if(b.next)try{b.next(i)}catch(y){O(y)}}error(i){const{partialObserver:b}=this;if(b.error)try{b.error(i)}catch(y){O(y)}else O(i)}complete(){const{partialObserver:i}=this;if(i.complete)try{i.complete()}catch(b){O(b)}}}class D extends s{constructor(i,b,y){let g;if(super(),(0,n.m)(i)||!i)g={next:i??void 0,error:b??void 0,complete:y??void 0};else{let M;this&&a.v.useDeprecatedNextContext?(M=Object.create(i),M.unsubscribe=()=>this.unsubscribe(),g={next:i.next&&u(i.next,M),error:i.error&&u(i.error,M),complete:i.complete&&u(i.complete,M)}):g=i}this.destination=new f(g)}}function O(m){a.v.useDeprecatedSynchronousErrorHandling?(0,t.O)(m):(0,d.h)(m)}function T(m,i){const{onStoppedNotification:b}=a.v;b&&r.z.setTimeout(()=>b(m,i))}const C={closed:!0,next:c.Z,error:function S(m){throw m},complete:c.Z}},727:(v,l,e)=>{e.d(l,{Lc:()=>_,w0:()=>c,Nn:()=>E});var n=e(576);const a=(0,e(3888).d)(h=>function(t){h(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((s,P)=>`${P+1}) ${s.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t});var d=e(8737);class c{constructor(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let r;if(!this.closed){this.closed=!0;const{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(const u of t)u.remove(this);else t.remove(this);const{initialTeardown:s}=this;if((0,n.m)(s))try{s()}catch(u){r=u instanceof a?u.errors:[u]}const{_finalizers:P}=this;if(P){this._finalizers=null;for(const u of P)try{p(u)}catch(f){r=r??[],f instanceof a?r=[...r,...f.errors]:r.push(f)}}if(r)throw new a(r)}}add(r){var t;if(r&&r!==this)if(this.closed)p(r);else{if(r instanceof c){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=null!==(t=this._finalizers)&&void 0!==t?t:[]).push(r)}}_hasParent(r){const{_parentage:t}=this;return t===r||Array.isArray(t)&&t.includes(r)}_addParent(r){const{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r}_removeParent(r){const{_parentage:t}=this;t===r?this._parentage=null:Array.isArray(t)&&(0,d.P)(t,r)}remove(r){const{_finalizers:t}=this;t&&(0,d.P)(t,r),r instanceof c&&r._removeParent(this)}}c.EMPTY=(()=>{const h=new c;return h.closed=!0,h})();const _=c.EMPTY;function E(h){return h instanceof c||h&&"closed"in h&&(0,n.m)(h.remove)&&(0,n.m)(h.add)&&(0,n.m)(h.unsubscribe)}function p(h){(0,n.m)(h)?h():h.unsubscribe()}},2416:(v,l,e)=>{e.d(l,{v:()=>n});const n={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},4004:(v,l,e)=>{e.d(l,{U:()=>a});var n=e(4482),o=e(5403);function a(d,c){return(0,n.e)((_,E)=>{let p=0;_.subscribe((0,o.x)(E,h=>{E.next(d.call(c,h,p++))}))})}},2722:(v,l,e)=>{e.d(l,{R:()=>c});var n=e(4482),o=e(5403),a=e(8421),d=e(5032);function c(_){return(0,n.e)((E,p)=>{(0,a.Xf)(_).subscribe((0,o.x)(p,()=>p.complete(),d.Z)),!p.closed&&E.subscribe(p)})}},6063:(v,l,e)=>{e.d(l,{l:()=>n});const n={now:()=>(n.delegate||Date).now(),delegate:void 0}},3410:(v,l,e)=>{e.d(l,{z:()=>n});const n={setTimeout(o,a,...d){const{delegate:c}=n;return c?.setTimeout?c.setTimeout(o,a,...d):setTimeout(o,a,...d)},clearTimeout(o){const{delegate:a}=n;return(a?.clearTimeout||clearTimeout)(o)},delegate:void 0}},8822:(v,l,e)=>{e.d(l,{L:()=>n});const n="function"==typeof Symbol&&Symbol.observable||"@@observable"},8737:(v,l,e)=>{function n(o,a){if(o){const d=o.indexOf(a);0<=d&&o.splice(d,1)}}e.d(l,{P:()=>n})},3888:(v,l,e)=>{function n(o){const d=o(c=>{Error.call(c),c.stack=(new Error).stack});return d.prototype=Object.create(Error.prototype),d.prototype.constructor=d,d}e.d(l,{d:()=>n})},2806:(v,l,e)=>{e.d(l,{O:()=>d,x:()=>a});var n=e(2416);let o=null;function a(c){if(n.v.useDeprecatedSynchronousErrorHandling){const _=!o;if(_&&(o={errorThrown:!1,error:null}),c(),_){const{errorThrown:E,error:p}=o;if(o=null,E)throw p}}else c()}function d(c){n.v.useDeprecatedSynchronousErrorHandling&&o&&(o.errorThrown=!0,o.error=c)}},4671:(v,l,e)=>{function n(o){return o}e.d(l,{y:()=>n})},576:(v,l,e)=>{function n(o){return"function"==typeof o}e.d(l,{m:()=>n})},5032:(v,l,e)=>{function n(){}e.d(l,{Z:()=>n})},9635:(v,l,e)=>{e.d(l,{U:()=>a,z:()=>o});var n=e(4671);function o(...d){return a(d)}function a(d){return 0===d.length?n.y:1===d.length?d[0]:function(_){return d.reduce((E,p)=>p(E),_)}}},7849:(v,l,e)=>{e.d(l,{h:()=>a});var n=e(2416),o=e(3410);function a(d){o.z.setTimeout(()=>{const{onUnhandledError:c}=n.v;if(!c)throw d;c(d)})}}}]);