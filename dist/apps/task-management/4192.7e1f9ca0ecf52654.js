(self.webpackChunktask_management=self.webpackChunktask_management||[]).push([[4192,8944,8647,6374,7579,9751,3153,958,2965],{1135:(m,f,t)=>{t.d(f,{X:()=>l});var u=t(7579);class l extends u.x{constructor(h){super(),this._value=h}get value(){return this.getValue()}_subscribe(h){const n=super._subscribe(h);return!n.closed&&h.next(this._value),n}getValue(){const{hasError:h,thrownError:n,_value:o}=this;if(h)throw n;return this._throwIfClosed(),o}next(h){super.next(this._value=h)}}},9751:(m,f,t)=>{t.d(f,{y:()=>d});var u=t(930),l=t(727),a=t(8822),h=t(9635),n=t(2416),o=t(576),i=t(2806);let d=(()=>{class c{constructor(v){v&&(this._subscribe=v)}lift(v){const p=new c;return p.source=this,p.operator=v,p}subscribe(v,p,D){const P=function e(c){return c&&c instanceof u.Lv||function s(c){return c&&(0,o.m)(c.next)&&(0,o.m)(c.error)&&(0,o.m)(c.complete)}(c)&&(0,l.Nn)(c)}(v)?v:new u.Hp(v,p,D);return(0,i.x)(()=>{const{operator:y,source:x}=this;P.add(y?y.call(P,x):x?this._subscribe(P):this._trySubscribe(P))}),P}_trySubscribe(v){try{return this._subscribe(v)}catch(p){v.error(p)}}forEach(v,p){return new(p=r(p))((D,P)=>{const y=new u.Hp({next:x=>{try{v(x)}catch(S){P(S),y.unsubscribe()}},error:P,complete:D});this.subscribe(y)})}_subscribe(v){var p;return null===(p=this.source)||void 0===p?void 0:p.subscribe(v)}[a.L](){return this}pipe(...v){return(0,h.U)(v)(this)}toPromise(v){return new(v=r(v))((p,D)=>{let P;this.subscribe(y=>P=y,y=>D(y),()=>p(P))})}}return c.create=E=>new c(E),c})();function r(c){var E;return null!==(E=c??n.v.Promise)&&void 0!==E?E:Promise}},4707:(m,f,t)=>{t.d(f,{t:()=>a});var u=t(7579),l=t(6063);class a extends u.x{constructor(n=1/0,o=1/0,i=l.l){super(),this._bufferSize=n,this._windowTime=o,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=o===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,o)}next(n){const{isStopped:o,_buffer:i,_infiniteTimeWindow:d,_timestampProvider:r,_windowTime:s}=this;o||(i.push(n),!d&&i.push(r.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();const o=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:d}=this,r=d.slice();for(let s=0;s<r.length&&!n.closed;s+=i?1:2)n.next(r[s]);return this._checkFinalizedStatuses(n),o}_trimBuffer(){const{_bufferSize:n,_timestampProvider:o,_buffer:i,_infiniteTimeWindow:d}=this,r=(d?1:2)*n;if(n<1/0&&r<i.length&&i.splice(0,i.length-r),!d){const s=o.now();let e=0;for(let c=1;c<i.length&&i[c]<=s;c+=2)e=c;e&&i.splice(0,e+1)}}}},7579:(m,f,t)=>{t.d(f,{x:()=>i});var u=t(9751),l=t(727);const h=(0,t(3888).d)(r=>function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var n=t(8737),o=t(2806);let i=(()=>{class r extends u.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){const c=new d(this,this);return c.operator=e,c}_throwIfClosed(){if(this.closed)throw new h}next(e){(0,o.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const c of this.currentObservers)c.next(e)}})}error(e){(0,o.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;const{observers:c}=this;for(;c.length;)c.shift().error(e)}})}complete(){(0,o.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){const{hasError:c,isStopped:E,observers:v}=this;return c||E?l.Lc:(this.currentObservers=null,v.push(e),new l.w0(()=>{this.currentObservers=null,(0,n.P)(v,e)}))}_checkFinalizedStatuses(e){const{hasError:c,thrownError:E,isStopped:v}=this;c?e.error(E):v&&e.complete()}asObservable(){const e=new u.y;return e.source=this,e}}return r.create=(s,e)=>new d(s,e),r})();class d extends i{constructor(s,e){super(),this.destination=s,this.source=e}next(s){var e,c;null===(c=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===c||c.call(e,s)}error(s){var e,c;null===(c=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===c||c.call(e,s)}complete(){var s,e;null===(e=null===(s=this.destination)||void 0===s?void 0:s.complete)||void 0===e||e.call(s)}_subscribe(s){var e,c;return null!==(c=null===(e=this.source)||void 0===e?void 0:e.subscribe(s))&&void 0!==c?c:l.Lc}}},930:(m,f,t)=>{t.d(f,{Hp:()=>D,Lv:()=>c});var u=t(576),l=t(727),a=t(2416),h=t(7849),n=t(5032);const o=r("C",void 0,void 0);function r(O,_,b){return{kind:O,value:_,error:b}}var s=t(3410),e=t(2806);class c extends l.w0{constructor(_){super(),this.isStopped=!1,_?(this.destination=_,(0,l.Nn)(_)&&_.add(this)):this.destination=S}static create(_,b,M){return new D(_,b,M)}next(_){this.isStopped?x(function d(O){return r("N",O,void 0)}(_),this):this._next(_)}error(_){this.isStopped?x(function i(O){return r("E",void 0,O)}(_),this):(this.isStopped=!0,this._error(_))}complete(){this.isStopped?x(o,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(_){this.destination.next(_)}_error(_){try{this.destination.error(_)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const E=Function.prototype.bind;function v(O,_){return E.call(O,_)}class p{constructor(_){this.partialObserver=_}next(_){const{partialObserver:b}=this;if(b.next)try{b.next(_)}catch(M){P(M)}}error(_){const{partialObserver:b}=this;if(b.error)try{b.error(_)}catch(M){P(M)}else P(_)}complete(){const{partialObserver:_}=this;if(_.complete)try{_.complete()}catch(b){P(b)}}}class D extends c{constructor(_,b,M){let A;if(super(),(0,u.m)(_)||!_)A={next:_??void 0,error:b??void 0,complete:M??void 0};else{let I;this&&a.v.useDeprecatedNextContext?(I=Object.create(_),I.unsubscribe=()=>this.unsubscribe(),A={next:_.next&&v(_.next,I),error:_.error&&v(_.error,I),complete:_.complete&&v(_.complete,I)}):A=_}this.destination=new p(A)}}function P(O){a.v.useDeprecatedSynchronousErrorHandling?(0,e.O)(O):(0,h.h)(O)}function x(O,_){const{onStoppedNotification:b}=a.v;b&&s.z.setTimeout(()=>b(O,_))}const S={closed:!0,next:n.Z,error:function y(O){throw O},complete:n.Z}},727:(m,f,t)=>{t.d(f,{Lc:()=>o,w0:()=>n,Nn:()=>i});var u=t(576);const a=(0,t(3888).d)(r=>function(e){r(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((c,E)=>`${E+1}) ${c.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e});var h=t(8737);class n{constructor(s){this.initialTeardown=s,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let s;if(!this.closed){this.closed=!0;const{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(const v of e)v.remove(this);else e.remove(this);const{initialTeardown:c}=this;if((0,u.m)(c))try{c()}catch(v){s=v instanceof a?v.errors:[v]}const{_finalizers:E}=this;if(E){this._finalizers=null;for(const v of E)try{d(v)}catch(p){s=s??[],p instanceof a?s=[...s,...p.errors]:s.push(p)}}if(s)throw new a(s)}}add(s){var e;if(s&&s!==this)if(this.closed)d(s);else{if(s instanceof n){if(s.closed||s._hasParent(this))return;s._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(s)}}_hasParent(s){const{_parentage:e}=this;return e===s||Array.isArray(e)&&e.includes(s)}_addParent(s){const{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(s),e):e?[e,s]:s}_removeParent(s){const{_parentage:e}=this;e===s?this._parentage=null:Array.isArray(e)&&(0,h.P)(e,s)}remove(s){const{_finalizers:e}=this;e&&(0,h.P)(e,s),s instanceof n&&s._removeParent(this)}}n.EMPTY=(()=>{const r=new n;return r.closed=!0,r})();const o=n.EMPTY;function i(r){return r instanceof n||r&&"closed"in r&&(0,u.m)(r.remove)&&(0,u.m)(r.add)&&(0,u.m)(r.unsubscribe)}function d(r){(0,u.m)(r)?r():r.unsubscribe()}},2416:(m,f,t)=>{t.d(f,{v:()=>u});const u={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},7272:(m,f,t)=>{t.d(f,{z:()=>n});var u=t(8189),a=t(3269),h=t(2076);function n(...o){return function l(){return(0,u.J)(1)}()((0,h.D)(o,(0,a.yG)(o)))}},5963:(m,f,t)=>{t.d(f,{H:()=>n});var u=t(9751),l=t(4986),a=t(3532);function n(o=0,i,d=l.P){let r=-1;return null!=i&&((0,a.K)(i)?d=i:r=i),new u.y(s=>{let e=function h(o){return o instanceof Date&&!isNaN(o)}(o)?+o-d.now():o;e<0&&(e=0);let c=0;return d.schedule(function(){s.closed||(s.next(c++),0<=r?this.schedule(void 0,r):s.complete())},e)})}},1884:(m,f,t)=>{t.d(f,{x:()=>h});var u=t(4671),l=t(4482),a=t(5403);function h(o,i=u.y){return o=o??n,(0,l.e)((d,r)=>{let s,e=!0;d.subscribe((0,a.x)(r,c=>{const E=i(c);(e||!o(s,E))&&(e=!1,s=E,r.next(c))}))})}function n(o,i){return o===i}},9300:(m,f,t)=>{t.d(f,{h:()=>a});var u=t(4482),l=t(5403);function a(h,n){return(0,u.e)((o,i)=>{let d=0;o.subscribe((0,l.x)(i,r=>h.call(n,r,d++)&&i.next(r)))})}},4004:(m,f,t)=>{t.d(f,{U:()=>a});var u=t(4482),l=t(5403);function a(h,n){return(0,u.e)((o,i)=>{let d=0;o.subscribe((0,l.x)(i,r=>{i.next(h.call(n,r,d++))}))})}},8189:(m,f,t)=>{t.d(f,{J:()=>a});var u=t(5577),l=t(4671);function a(h=1/0){return(0,u.z)(l.y,h)}},5577:(m,f,t)=>{t.d(f,{z:()=>d});var u=t(4004),l=t(8421),a=t(4482),h=t(9672),n=t(5403),i=t(576);function d(r,s,e=1/0){return(0,i.m)(s)?d((c,E)=>(0,u.U)((v,p)=>s(c,v,E,p))((0,l.Xf)(r(c,E))),e):("number"==typeof s&&(e=s),(0,a.e)((c,E)=>function o(r,s,e,c,E,v,p,D){const P=[];let y=0,x=0,S=!1;const O=()=>{S&&!P.length&&!y&&s.complete()},_=M=>y<c?b(M):P.push(M),b=M=>{v&&s.next(M),y++;let A=!1;(0,l.Xf)(e(M,x++)).subscribe((0,n.x)(s,I=>{E?.(I),v?_(I):s.next(I)},()=>{A=!0},void 0,()=>{if(A)try{for(y--;P.length&&y<c;){const I=P.shift();p?(0,h.f)(s,p,()=>b(I)):b(I)}O()}catch(I){s.error(I)}}))};return r.subscribe((0,n.x)(s,_,()=>{S=!0,O()})),()=>{D?.()}}(c,E,r,e)))}},8675:(m,f,t)=>{t.d(f,{O:()=>h});var u=t(7272),l=t(3269),a=t(4482);function h(...n){const o=(0,l.yG)(n);return(0,a.e)((i,d)=>{(o?(0,u.z)(n,i,o):(0,u.z)(n,i)).subscribe(d)})}},3900:(m,f,t)=>{t.d(f,{w:()=>h});var u=t(8421),l=t(4482),a=t(5403);function h(n,o){return(0,l.e)((i,d)=>{let r=null,s=0,e=!1;const c=()=>e&&!r&&d.complete();i.subscribe((0,a.x)(d,E=>{r?.unsubscribe();let v=0;const p=s++;(0,u.Xf)(n(E,p)).subscribe(r=(0,a.x)(d,D=>d.next(o?o(E,D,p,v++):D),()=>{r=null,c()}))},()=>{e=!0,c()}))})}},2722:(m,f,t)=>{t.d(f,{R:()=>n});var u=t(4482),l=t(5403),a=t(8421),h=t(5032);function n(o){return(0,u.e)((i,d)=>{(0,a.Xf)(o).subscribe((0,l.x)(d,()=>d.complete(),h.Z)),!d.closed&&i.subscribe(d)})}},4408:(m,f,t)=>{t.d(f,{o:()=>n});var u=t(727);class l extends u.w0{constructor(i,d){super()}schedule(i,d=0){return this}}const a={setInterval(o,i,...d){const{delegate:r}=a;return r?.setInterval?r.setInterval(o,i,...d):setInterval(o,i,...d)},clearInterval(o){const{delegate:i}=a;return(i?.clearInterval||clearInterval)(o)},delegate:void 0};var h=t(8737);class n extends l{constructor(i,d){super(i,d),this.scheduler=i,this.work=d,this.pending=!1}schedule(i,d=0){var r;if(this.closed)return this;this.state=i;const s=this.id,e=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(e,s,d)),this.pending=!0,this.delay=d,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(e,this.id,d),this}requestAsyncId(i,d,r=0){return a.setInterval(i.flush.bind(i,this),r)}recycleAsyncId(i,d,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return d;null!=d&&a.clearInterval(d)}execute(i,d){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(i,d);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,d){let s,r=!1;try{this.work(i)}catch(e){r=!0,s=e||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:i,scheduler:d}=this,{actions:r}=d;this.work=this.state=this.scheduler=null,this.pending=!1,(0,h.P)(r,this),null!=i&&(this.id=this.recycleAsyncId(d,i,null)),this.delay=null,super.unsubscribe()}}}},7565:(m,f,t)=>{t.d(f,{v:()=>a});var u=t(6063);class l{constructor(n,o=l.now){this.schedulerActionCtor=n,this.now=o}schedule(n,o=0,i){return new this.schedulerActionCtor(this,n).schedule(i,o)}}l.now=u.l.now;class a extends l{constructor(n,o=l.now){super(n,o),this.actions=[],this._active=!1}flush(n){const{actions:o}=this;if(this._active)return void o.push(n);let i;this._active=!0;do{if(i=n.execute(n.state,n.delay))break}while(n=o.shift());if(this._active=!1,i){for(;n=o.shift();)n.unsubscribe();throw i}}}},4986:(m,f,t)=>{t.d(f,{P:()=>h,z:()=>a});var u=t(4408);const a=new(t(7565).v)(u.o),h=a},6063:(m,f,t)=>{t.d(f,{l:()=>u});const u={now:()=>(u.delegate||Date).now(),delegate:void 0}},3410:(m,f,t)=>{t.d(f,{z:()=>u});const u={setTimeout(l,a,...h){const{delegate:n}=u;return n?.setTimeout?n.setTimeout(l,a,...h):setTimeout(l,a,...h)},clearTimeout(l){const{delegate:a}=u;return(a?.clearTimeout||clearTimeout)(l)},delegate:void 0}},8822:(m,f,t)=>{t.d(f,{L:()=>u});const u="function"==typeof Symbol&&Symbol.observable||"@@observable"},8737:(m,f,t)=>{function u(l,a){if(l){const h=l.indexOf(a);0<=h&&l.splice(h,1)}}t.d(f,{P:()=>u})},3888:(m,f,t)=>{function u(l){const h=l(n=>{Error.call(n),n.stack=(new Error).stack});return h.prototype=Object.create(Error.prototype),h.prototype.constructor=h,h}t.d(f,{d:()=>u})},2806:(m,f,t)=>{t.d(f,{O:()=>h,x:()=>a});var u=t(2416);let l=null;function a(n){if(u.v.useDeprecatedSynchronousErrorHandling){const o=!l;if(o&&(l={errorThrown:!1,error:null}),n(),o){const{errorThrown:i,error:d}=l;if(l=null,i)throw d}}else n()}function h(n){u.v.useDeprecatedSynchronousErrorHandling&&l&&(l.errorThrown=!0,l.error=n)}},4671:(m,f,t)=>{function u(l){return l}t.d(f,{y:()=>u})},576:(m,f,t)=>{function u(l){return"function"==typeof l}t.d(f,{m:()=>u})},5032:(m,f,t)=>{function u(){}t.d(f,{Z:()=>u})},9635:(m,f,t)=>{t.d(f,{U:()=>a,z:()=>l});var u=t(4671);function l(...h){return a(h)}function a(h){return 0===h.length?u.y:1===h.length?h[0]:function(o){return h.reduce((i,d)=>d(i),o)}}},7849:(m,f,t)=>{t.d(f,{h:()=>a});var u=t(2416),l=t(3410);function a(h){l.z.setTimeout(()=>{const{onUnhandledError:n}=u.v;if(!n)throw h;n(h)})}}}]);