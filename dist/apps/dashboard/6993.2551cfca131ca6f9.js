(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[6993],{4033:(L,T,l)=>{l.d(T,{c:()=>f});var x=l(9751),n=l(727),m=l(8343),C=l(5403),w=l(4482);class f extends x.y{constructor(d,h){super(),this.source=d,this.subjectFactory=h,this._subject=null,this._refCount=0,this._connection=null,(0,w.A)(d)&&(this.lift=d.lift)}_subscribe(d){return this.getSubject().subscribe(d)}getSubject(){const d=this._subject;return(!d||d.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:d}=this;this._subject=this._connection=null,d?.unsubscribe()}connect(){let d=this._connection;if(!d){d=this._connection=new n.w0;const h=this.getSubject();d.add(this.source.subscribe((0,C.x)(h,void 0,()=>{this._teardown(),h.complete()},a=>{this._teardown(),h.error(a)},()=>this._teardown()))),d.closed&&(this._connection=null,d=n.w0.EMPTY)}return d}refCount(){return(0,m.x)()(this)}}},4968:(L,T,l)=>{l.d(T,{R:()=>a});var x=l(8421),n=l(9751),m=l(5577),C=l(1144),w=l(576),f=l(3268);const y=["addListener","removeListener"],d=["addEventListener","removeEventListener"],h=["on","off"];function a(v,p,c,b){if((0,w.m)(c)&&(b=c,c=void 0),b)return a(v,p,c).pipe((0,f.Z)(b));const[O,M]=function V(v){return(0,w.m)(v.addEventListener)&&(0,w.m)(v.removeEventListener)}(v)?d.map(k=>z=>v[k](p,z,c)):function S(v){return(0,w.m)(v.addListener)&&(0,w.m)(v.removeListener)}(v)?y.map(g(v,p)):function R(v){return(0,w.m)(v.on)&&(0,w.m)(v.off)}(v)?h.map(g(v,p)):[];if(!O&&(0,C.z)(v))return(0,m.z)(k=>a(k,p,c))((0,x.Xf)(v));if(!O)throw new TypeError("Invalid event target");return new n.y(k=>{const z=(...I)=>k.next(1<I.length?I:I[0]);return O(z),()=>M(z)})}function g(v,p){return c=>b=>v[c](p,b)}},6451:(L,T,l)=>{l.d(T,{T:()=>f});var x=l(8189),n=l(8421),m=l(515),C=l(3269),w=l(2076);function f(...y){const d=(0,C.yG)(y),h=(0,C._6)(y,1/0),a=y;return a.length?1===a.length?(0,n.Xf)(a[0]):(0,x.J)(h)((0,w.D)(a,d)):m.E}},8343:(L,T,l)=>{l.d(T,{x:()=>m});var x=l(4482),n=l(5403);function m(){return(0,x.e)((C,w)=>{let f=null;C._refCount++;const y=(0,n.x)(w,void 0,void 0,void 0,()=>{if(!C||C._refCount<=0||0<--C._refCount)return void(f=null);const d=C._connection,h=f;f=null,d&&(!h||d===h)&&d.unsubscribe(),w.unsubscribe()});C.subscribe(y),y.closed||(f=C.connect())})}},3099:(L,T,l)=>{l.d(T,{B:()=>w});var x=l(8421),n=l(7579),m=l(930),C=l(4482);function w(y={}){const{connector:d=(()=>new n.x),resetOnError:h=!0,resetOnComplete:a=!0,resetOnRefCountZero:g=!0}=y;return S=>{let R,V,v,p=0,c=!1,b=!1;const O=()=>{V?.unsubscribe(),V=void 0},M=()=>{O(),R=v=void 0,c=b=!1},k=()=>{const z=R;M(),z?.unsubscribe()};return(0,C.e)((z,I)=>{p++,!b&&!c&&O();const F=v=v??d();I.add(()=>{p--,0===p&&!b&&!c&&(V=f(k,g))}),F.subscribe(I),!R&&p>0&&(R=new m.Hp({next:P=>F.next(P),error:P=>{b=!0,O(),V=f(M,h,P),F.error(P)},complete:()=>{c=!0,O(),V=f(M,a),F.complete()}}),(0,x.Xf)(z).subscribe(R))})(S)}}function f(y,d,...h){if(!0===d)return void y();if(!1===d)return;const a=new m.Hp({next:()=>{a.unsubscribe(),y()}});return d(...h).subscribe(a)}},3900:(L,T,l)=>{l.d(T,{w:()=>C});var x=l(8421),n=l(4482),m=l(5403);function C(w,f){return(0,n.e)((y,d)=>{let h=null,a=0,g=!1;const S=()=>g&&!h&&d.complete();y.subscribe((0,m.x)(d,R=>{h?.unsubscribe();let V=0;const v=a++;(0,x.Xf)(w(R,v)).subscribe(h=(0,m.x)(d,p=>d.next(f?f(R,p,v,V++):p),()=>{h=null,S()}))},()=>{g=!0,S()}))})}},6406:(L,T,l)=>{l.d(T,{Z:()=>y});var x=l(4408),n=l(727);const m={schedule(h){let a=requestAnimationFrame,g=cancelAnimationFrame;const{delegate:S}=m;S&&(a=S.requestAnimationFrame,g=S.cancelAnimationFrame);const R=a(V=>{g=void 0,h(V)});return new n.w0(()=>g?.(R))},requestAnimationFrame(...h){const{delegate:a}=m;return(a?.requestAnimationFrame||requestAnimationFrame)(...h)},cancelAnimationFrame(...h){const{delegate:a}=m;return(a?.cancelAnimationFrame||cancelAnimationFrame)(...h)},delegate:void 0};var w=l(7565);const y=new class f extends w.v{flush(a){this._active=!0;const g=this._scheduled;this._scheduled=void 0;const{actions:S}=this;let R;a=a||S.shift();do{if(R=a.execute(a.state,a.delay))break}while((a=S[0])&&a.id===g&&S.shift());if(this._active=!1,R){for(;(a=S[0])&&a.id===g&&S.shift();)a.unsubscribe();throw R}}}(class C extends x.o{constructor(a,g){super(a,g),this.scheduler=a,this.work=g}requestAsyncId(a,g,S=0){return null!==S&&S>0?super.requestAsyncId(a,g,S):(a.actions.push(this),a._scheduled||(a._scheduled=m.requestAnimationFrame(()=>a.flush(void 0))))}recycleAsyncId(a,g,S=0){var R;if(null!=S?S>0:this.delay>0)return super.recycleAsyncId(a,g,S);const{actions:V}=a;null!=g&&(null===(R=V[V.length-1])||void 0===R?void 0:R.id)!==g&&(m.cancelAnimationFrame(g),a._scheduled=void 0)}})},3101:(L,T,l)=>{l.d(T,{E:()=>V});var x=l(4408);let m,n=1;const C={};function w(p){return p in C&&(delete C[p],!0)}const f={setImmediate(p){const c=n++;return C[c]=!0,m||(m=Promise.resolve()),m.then(()=>w(c)&&p()),c},clearImmediate(p){w(p)}},{setImmediate:d,clearImmediate:h}=f,a={setImmediate(...p){const{delegate:c}=a;return(c?.setImmediate||d)(...p)},clearImmediate(p){const{delegate:c}=a;return(c?.clearImmediate||h)(p)},delegate:void 0};var S=l(7565);const V=new class R extends S.v{flush(c){this._active=!0;const b=this._scheduled;this._scheduled=void 0;const{actions:O}=this;let M;c=c||O.shift();do{if(M=c.execute(c.state,c.delay))break}while((c=O[0])&&c.id===b&&O.shift());if(this._active=!1,M){for(;(c=O[0])&&c.id===b&&O.shift();)c.unsubscribe();throw M}}}(class g extends x.o{constructor(c,b){super(c,b),this.scheduler=c,this.work=b}requestAsyncId(c,b,O=0){return null!==O&&O>0?super.requestAsyncId(c,b,O):(c.actions.push(this),c._scheduled||(c._scheduled=a.setImmediate(c.flush.bind(c,void 0))))}recycleAsyncId(c,b,O=0){var M;if(null!=O?O>0:this.delay>0)return super.recycleAsyncId(c,b,O);const{actions:k}=c;null!=b&&(null===(M=k[k.length-1])||void 0===M?void 0:M.id)!==b&&(a.clearImmediate(b),c._scheduled=void 0)}})},6287:(L,T,l)=>{l.d(T,{T:()=>w,f:()=>m});var x=l(417),n=l(8944);let m=(()=>{class f{constructor(d,h){this.viewContainer=d,this.templateRef=h,this.embeddedViewRef=null,this.context=new C,this.nzStringTemplateOutletContext=null,this.nzStringTemplateOutlet=null}static ngTemplateContextGuard(d,h){return!0}recreateView(){this.viewContainer.clear();const d=this.nzStringTemplateOutlet instanceof n.TemplateRef;this.embeddedViewRef=this.viewContainer.createEmbeddedView(d?this.nzStringTemplateOutlet:this.templateRef,d?this.nzStringTemplateOutletContext:this.context)}updateContext(){const h=this.nzStringTemplateOutlet instanceof n.TemplateRef?this.nzStringTemplateOutletContext:this.context,a=this.embeddedViewRef.context;if(h)for(const g of Object.keys(h))a[g]=h[g]}ngOnChanges(d){const{nzStringTemplateOutletContext:h,nzStringTemplateOutlet:a}=d;a&&(this.context.$implicit=a.currentValue),(()=>{let R=!1;if(a)if(a.firstChange)R=!0;else{const c=a.currentValue instanceof n.TemplateRef;R=a.previousValue instanceof n.TemplateRef||c}return h&&(p=>{const c=Object.keys(p.previousValue||{}),b=Object.keys(p.currentValue||{});if(c.length===b.length){for(const O of b)if(-1===c.indexOf(O))return!0;return!1}return!0})(h)||R})()?this.recreateView():this.updateContext()}}return f.\u0275fac=function(d){return new(d||f)(n.\u0275\u0275directiveInject(n.ViewContainerRef),n.\u0275\u0275directiveInject(n.TemplateRef))},f.\u0275dir=n.\u0275\u0275defineDirective({type:f,selectors:[["","nzStringTemplateOutlet",""]],inputs:{nzStringTemplateOutletContext:"nzStringTemplateOutletContext",nzStringTemplateOutlet:"nzStringTemplateOutlet"},exportAs:["nzStringTemplateOutlet"],features:[n.\u0275\u0275NgOnChangesFeature]}),f})();class C{}let w=(()=>{class f{}return f.\u0275fac=function(d){return new(d||f)},f.\u0275mod=n.\u0275\u0275defineNgModule({type:f}),f.\u0275inj=n.\u0275\u0275defineInjector({imports:[x.CommonModule]}),f})()},9699:(L,T,l)=>{l.d(T,{xd:()=>re,ZD:()=>W,x0:()=>de,N7:()=>G,mF:()=>j,Cl:()=>he,rL:()=>Z});var x=l(4174),n=l(8944),m=l(7579),C=l(9646),w=l(9751),f=l(4968),y=l(6406),d=l(3101),h=l(727),a=l(5191),g=l(1884),S=l(3601),R=l(9300),V=l(2722),v=l(8675),p=l(4482),c=l(5403),O=l(3900),M=l(4707),k=l(3099),I=l(2052),F=l(417),P=l(3168),$=l(4033);class J extends class Y{}{constructor(i){super(),this._data=i}connect(){return(0,a.b)(this._data)?this._data:(0,C.of)(this._data)}disconnect(){}}class q{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(i,e,t,r,s){i.forEachOperation((u,D,_)=>{let E,A;null==u.previousIndex?(E=this._insertView(()=>t(u,D,_),_,e,r(u)),A=E?1:0):null==_?(this._detachAndCacheView(D,e),A=3):(E=this._moveView(D,_,e,r(u)),A=2),s&&s({context:E?.context,operation:A,record:u})})}detach(){for(const i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,r){const s=this._insertViewFromCache(e,t);if(s)return void(s.context.$implicit=r);const u=i();return t.createEmbeddedView(u.templateRef,u.context,u.index)}_detachAndCacheView(i,e){const t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,r){const s=t.get(i);return t.move(s,e),s.context.$implicit=r,s}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{const t=e.indexOf(i);-1===t?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){const t=this._viewCache.pop();return t&&e.insert(t,i),t||null}}const U=new n.InjectionToken("_ViewRepeater"),ee=["contentWrapper"],te=["*"],N=new n.InjectionToken("VIRTUAL_SCROLL_STRATEGY");class ie{constructor(i,e,t){this._scrolledIndexChange=new m.x,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,g.x)()),this._viewport=null,this._itemSize=i,this._minBufferPx=e,this._maxBufferPx=t}attach(i){this._viewport=i,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(i,e,t){this._itemSize=i,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(i,e){this._viewport&&this._viewport.scrollToOffset(i*this._itemSize,e)}_updateTotalContentSize(){!this._viewport||this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const i=this._viewport.getRenderedRange(),e={start:i.start,end:i.end},t=this._viewport.getViewportSize(),r=this._viewport.getDataLength();let s=this._viewport.measureScrollOffset(),u=this._itemSize>0?s/this._itemSize:0;if(e.end>r){const _=Math.ceil(t/this._itemSize),E=Math.max(0,Math.min(u,r-_));u!=E&&(u=E,s=E*this._itemSize,e.start=Math.floor(u)),e.end=Math.max(0,Math.min(r,e.start+_))}const D=s-e.start*this._itemSize;if(D<this._minBufferPx&&0!=e.start){const _=Math.ceil((this._maxBufferPx-D)/this._itemSize);e.start=Math.max(0,e.start-_),e.end=Math.min(r,Math.ceil(u+(t+this._minBufferPx)/this._itemSize))}else{const _=e.end*this._itemSize-(s+t);if(_<this._minBufferPx&&e.end!=r){const E=Math.ceil((this._maxBufferPx-_)/this._itemSize);E>0&&(e.end=Math.min(r,e.end+E),e.start=Math.max(0,Math.floor(u-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(u))}}function ne(o){return o._scrollStrategy}let re=(()=>{class o{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new ie(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,x.su)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,x.su)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,x.su)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[n.\u0275\u0275ProvidersFeature([{provide:N,useFactory:ne,deps:[(0,n.forwardRef)(()=>o)]}]),n.\u0275\u0275NgOnChangesFeature]}),o})(),j=(()=>{class o{constructor(e,t,r){this._ngZone=e,this._platform=t,this._scrolled=new m.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new w.y(t=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe((0,S.e)(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,C.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,R.h)(s=>!s||r.indexOf(s)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((r,s)=>{this._scrollableContainsElement(s,e)&&t.push(s)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let r=(0,x.fI)(t),s=e.getElementRef().nativeElement;do{if(r==s)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,f.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275inject(n.NgZone),n.\u0275\u0275inject(I.t4),n.\u0275\u0275inject(F.DOCUMENT,8))},o.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),K=(()=>{class o{constructor(e,t,r,s){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=r,this.dir=s,this._destroyed=new m.x,this._elementScrolled=new w.y(u=>this.ngZone.runOutsideAngular(()=>(0,f.R)(this.elementRef.nativeElement,"scroll").pipe((0,V.R)(this._destroyed)).subscribe(u)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,r=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=r?e.end:e.start),null==e.right&&(e.right=r?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&0!=(0,I._i)()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==(0,I._i)()?e.left=e.right:1==(0,I._i)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,I.Mq)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",r="right",s=this.elementRef.nativeElement;if("top"==e)return s.scrollTop;if("bottom"==e)return s.scrollHeight-s.clientHeight-s.scrollTop;const u=this.dir&&"rtl"==this.dir.value;return"start"==e?e=u?r:t:"end"==e&&(e=u?t:r),u&&2==(0,I._i)()?e==t?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:u&&1==(0,I._i)()?e==t?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:e==t?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(j),n.\u0275\u0275directiveInject(n.NgZone),n.\u0275\u0275directiveInject(P.Is,8))},o.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),o})(),Z=(()=>{class o{constructor(e,t,r){this._platform=e,this._change=new m.x,this._changeListener=s=>{this._change.next(s)},this._document=r,t.runOutsideAngular(()=>{if(e.isBrowser){const s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),r=e.documentElement,s=r.getBoundingClientRect();return{top:-s.top||e.body.scrollTop||t.scrollY||r.scrollTop||0,left:-s.left||e.body.scrollLeft||t.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe((0,S.e)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275inject(I.t4),n.\u0275\u0275inject(n.NgZone),n.\u0275\u0275inject(F.DOCUMENT,8))},o.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const H=new n.InjectionToken("VIRTUAL_SCROLLABLE");let le=(()=>{class o extends K{constructor(e,t,r,s){super(e,t,r,s)}measureViewportSize(e){const t=this.elementRef.nativeElement;return"horizontal"===e?t.clientWidth:t.clientHeight}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(j),n.\u0275\u0275directiveInject(n.NgZone),n.\u0275\u0275directiveInject(P.Is,8))},o.\u0275dir=n.\u0275\u0275defineDirective({type:o,features:[n.\u0275\u0275InheritDefinitionFeature]}),o})();const ce=typeof requestAnimationFrame<"u"?y.Z:d.E;let G=(()=>{class o extends le{constructor(e,t,r,s,u,D,_,E){super(e,D,r,u),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=s,this.scrollable=E,this._platform=(0,n.inject)(I.t4),this._detachedSubject=new m.x,this._renderedRangeSubject=new m.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new w.y(A=>this._scrollStrategy.scrolledIndexChange.subscribe(B=>Promise.resolve().then(()=>this.ngZone.run(()=>A.next(B))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=h.w0.EMPTY,this._viewportChanges=_.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,x.Ig)(e)}ngOnInit(){!this._platform.isBrowser||(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,v.O)(null),(0,S.e)(0,ce)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,V.R)(this._detachedSubject)).subscribe(t=>{const r=t.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function ae(o,i){return o.start==i.start&&o.end==i.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&"to-start"===t?0:e;const s="horizontal"==this.orientation,u=s?"X":"Y";let _=`translate${u}(${Number((s&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(_+=` translate${u}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=_&&(this._renderedContentTransform=_,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const r={behavior:t};"horizontal"===this.orientation?r.start=e:r.top=e,this.scrollable.scrollTo(r)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return t=this.scrollable==this?r=>super.measureScrollOffset(r):r=>this.scrollable.measureScrollOffset(r),Math.max(0,t(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t;const r="left",s="right",u="rtl"==this.dir?.value;t="start"==e?u?s:r:"end"==e?u?r:s:e||("horizontal"===this.orientation?"left":"top");const D=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-D}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(n.ChangeDetectorRef),n.\u0275\u0275directiveInject(n.NgZone),n.\u0275\u0275directiveInject(N,8),n.\u0275\u0275directiveInject(P.Is,8),n.\u0275\u0275directiveInject(j),n.\u0275\u0275directiveInject(Z),n.\u0275\u0275directiveInject(H,8))},o.\u0275cmp=n.\u0275\u0275defineComponent({type:o,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,t){if(1&e&&n.\u0275\u0275viewQuery(ee,7),2&e){let r;n.\u0275\u0275queryRefresh(r=n.\u0275\u0275loadQuery())&&(t._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,t){2&e&&n.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal","horizontal"===t.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==t.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[n.\u0275\u0275ProvidersFeature([{provide:K,useFactory:(i,e)=>i||e,deps:[[new n.Optional,new n.Inject(H)],o]}]),n.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:te,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,t){1&e&&(n.\u0275\u0275projectionDef(),n.\u0275\u0275elementStart(0,"div",0,1),n.\u0275\u0275projection(2),n.\u0275\u0275elementEnd(),n.\u0275\u0275element(3,"div",2)),2&e&&(n.\u0275\u0275advance(3),n.\u0275\u0275styleProp("width",t._totalContentWidth)("height",t._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0}),o})();function Q(o,i,e){if(!e.getBoundingClientRect)return 0;const r=e.getBoundingClientRect();return"horizontal"===o?"start"===i?r.left:r.right:"start"===i?r.top:r.bottom}let de=(()=>{class o{constructor(e,t,r,s,u,D){this._viewContainerRef=e,this._template=t,this._differs=r,this._viewRepeater=s,this._viewport=u,this.viewChange=new m.x,this._dataSourceChanges=new m.x,this.dataStream=this._dataSourceChanges.pipe((0,v.O)(null),function b(){return(0,p.e)((o,i)=>{let e,t=!1;o.subscribe((0,c.x)(i,r=>{const s=e;e=r,t&&i.next([s,r]),t=!0}))})}(),(0,O.w)(([_,E])=>this._changeDataSource(_,E)),function z(o,i,e){let t,r=!1;return o&&"object"==typeof o?({bufferSize:t=1/0,windowTime:i=1/0,refCount:r=!1,scheduler:e}=o):t=o??1/0,(0,k.B)({connector:()=>new M.t(t,i,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new m.x,this.dataStream.subscribe(_=>{this._data=_,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,V.R)(this._destroyed)).subscribe(_=>{this._renderedRange=_,this.viewChange.observers.length&&D.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,function X(o){return o&&"function"==typeof o.connect&&!(o instanceof $.c)}(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new J((0,a.b)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,r)=>e(t+(this._renderedRange?this._renderedRange.start:0),r):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,x.su)(e)}measureRangeSize(e,t){if(e.start>=e.end)return 0;const r=e.start-this._renderedRange.start,s=e.end-e.start;let u,D;for(let _=0;_<s;_++){const E=this._viewContainerRef.get(_+r);if(E&&E.rootNodes.length){u=D=E.rootNodes[0];break}}for(let _=s-1;_>-1;_--){const E=this._viewContainerRef.get(_+r);if(E&&E.rootNodes.length){D=E.rootNodes[E.rootNodes.length-1];break}}return u&&D?Q(t,"end",D)-Q(t,"start",u):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){!this._renderedRange||(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):(0,C.of)()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const r=this._viewContainerRef.get(t);r.context.index=this._renderedRange.start+t,r.context.count=e,this._updateComputedContextProperties(r.context),r.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(s,u,D)=>this._getEmbeddedViewArgs(s,D),s=>s.item),e.forEachIdentityChange(s=>{this._viewContainerRef.get(s.currentIndex).context.$implicit=s.item});const t=this._data.length;let r=this._viewContainerRef.length;for(;r--;){const s=this._viewContainerRef.get(r);s.context.index=this._renderedRange.start+r,s.context.count=t,this._updateComputedContextProperties(s.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275directiveInject(n.ViewContainerRef),n.\u0275\u0275directiveInject(n.TemplateRef),n.\u0275\u0275directiveInject(n.IterableDiffers),n.\u0275\u0275directiveInject(U),n.\u0275\u0275directiveInject(G,4),n.\u0275\u0275directiveInject(n.NgZone))},o.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},features:[n.\u0275\u0275ProvidersFeature([{provide:U,useClass:q}])]}),o})(),W=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=n.\u0275\u0275defineInjector({}),o})(),he=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=n.\u0275\u0275defineInjector({imports:[P.vT,W,P.vT,W]}),o})()}}]);