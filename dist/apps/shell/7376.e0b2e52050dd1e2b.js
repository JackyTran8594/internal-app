(self.webpackChunkshell=self.webpackChunkshell||[]).push([[7376],{4707:(B,O,r)=>{r.d(O,{t:()=>f});var C=r(7579),i=r(6063);class f extends C.x{constructor(a=1/0,d=1/0,h=i.l){super(),this._bufferSize=a,this._windowTime=d,this._timestampProvider=h,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=d===1/0,this._bufferSize=Math.max(1,a),this._windowTime=Math.max(1,d)}next(a){const{isStopped:d,_buffer:h,_infiniteTimeWindow:p,_timestampProvider:E,_windowTime:_}=this;d||(h.push(a),!p&&h.push(E.now()+_)),this._trimBuffer(),super.next(a)}_subscribe(a){this._throwIfClosed(),this._trimBuffer();const d=this._innerSubscribe(a),{_infiniteTimeWindow:h,_buffer:p}=this,E=p.slice();for(let _=0;_<E.length&&!a.closed;_+=h?1:2)a.next(E[_]);return this._checkFinalizedStatuses(a),d}_trimBuffer(){const{_bufferSize:a,_timestampProvider:d,_buffer:h,_infiniteTimeWindow:p}=this,E=(p?1:2)*a;if(a<1/0&&E<h.length&&h.splice(0,h.length-E),!p){const _=d.now();let M=0;for(let y=1;y<h.length&&h[y]<=_;y+=2)M=y;M&&h.splice(0,M+1)}}}},4968:(B,O,r)=>{r.d(O,{R:()=>_});var C=r(8421),i=r(9751),f=r(5577),u=r(1144),a=r(576),d=r(3268);const h=["addListener","removeListener"],p=["addEventListener","removeEventListener"],E=["on","off"];function _(m,S,l,D){if((0,a.m)(l)&&(D=l,l=void 0),D)return _(m,S,l).pipe((0,d.Z)(D));const[v,T]=function x(m){return(0,a.m)(m.addEventListener)&&(0,a.m)(m.removeEventListener)}(m)?p.map(I=>L=>m[I](S,L,l)):function y(m){return(0,a.m)(m.addListener)&&(0,a.m)(m.removeListener)}(m)?h.map(M(m,S)):function w(m){return(0,a.m)(m.on)&&(0,a.m)(m.off)}(m)?E.map(M(m,S)):[];if(!v&&(0,u.z)(m))return(0,f.z)(I=>_(I,S,l))((0,C.Xf)(m));if(!v)throw new TypeError("Invalid event target");return new i.y(I=>{const L=(...V)=>I.next(1<V.length?V:V[0]);return v(L),()=>T(L)})}function M(m,S){return l=>D=>m[l](S,D)}},9646:(B,O,r)=>{r.d(O,{of:()=>f});var C=r(3269),i=r(2076);function f(...u){const a=(0,C.yG)(u);return(0,i.D)(u,a)}},3601:(B,O,r)=>{r.d(O,{e:()=>h});var C=r(4986),i=r(4482),f=r(8421),u=r(5403),d=r(5963);function h(p,E=C.z){return function a(p){return(0,i.e)((E,_)=>{let M=!1,y=null,w=null,x=!1;const m=()=>{if(w?.unsubscribe(),w=null,M){M=!1;const l=y;y=null,_.next(l)}x&&_.complete()},S=()=>{w=null,x&&_.complete()};E.subscribe((0,u.x)(_,l=>{M=!0,y=l,w||(0,f.Xf)(p(l)).subscribe(w=(0,u.x)(_,m,S))},()=>{x=!0,(!M||!w||w.closed)&&_.complete()}))})}(()=>(0,d.H)(p,E))}},1884:(B,O,r)=>{r.d(O,{x:()=>u});var C=r(4671),i=r(4482),f=r(5403);function u(d,h=C.y){return d=d??a,(0,i.e)((p,E)=>{let _,M=!0;p.subscribe((0,f.x)(E,y=>{const w=h(y);(M||!d(_,w))&&(M=!1,_=w,E.next(y))}))})}function a(d,h){return d===h}},9300:(B,O,r)=>{r.d(O,{h:()=>f});var C=r(4482),i=r(5403);function f(u,a){return(0,C.e)((d,h)=>{let p=0;d.subscribe((0,i.x)(h,E=>u.call(a,E,p++)&&h.next(E)))})}},1520:(B,O,r)=>{r.d(O,{G:()=>f});var C=r(4482),i=r(5403);function f(){return(0,C.e)((u,a)=>{let d,h=!1;u.subscribe((0,i.x)(a,p=>{const E=d;d=p,h&&a.next([E,p]),h=!0}))})}},3099:(B,O,r)=>{r.d(O,{B:()=>a});var C=r(8421),i=r(7579),f=r(930),u=r(4482);function a(h={}){const{connector:p=(()=>new i.x),resetOnError:E=!0,resetOnComplete:_=!0,resetOnRefCountZero:M=!0}=h;return y=>{let w,x,m,S=0,l=!1,D=!1;const v=()=>{x?.unsubscribe(),x=void 0},T=()=>{v(),w=m=void 0,l=D=!1},I=()=>{const L=w;T(),L?.unsubscribe()};return(0,u.e)((L,V)=>{S++,!D&&!l&&v();const z=m=m??p();V.add(()=>{S--,0===S&&!D&&!l&&(x=d(I,M))}),z.subscribe(V),!w&&S>0&&(w=new f.Hp({next:A=>z.next(A),error:A=>{D=!0,v(),x=d(T,E,A),z.error(A)},complete:()=>{l=!0,v(),x=d(T,_),z.complete()}}),(0,C.Xf)(L).subscribe(w))})(y)}}function d(h,p,...E){if(!0===p)return void h();if(!1===p)return;const _=new f.Hp({next:()=>{_.unsubscribe(),h()}});return p(...E).subscribe(_)}},4782:(B,O,r)=>{r.d(O,{d:()=>f});var C=r(4707),i=r(3099);function f(u,a,d){let h,p=!1;return u&&"object"==typeof u?({bufferSize:h=1/0,windowTime:a=1/0,refCount:p=!1,scheduler:d}=u):h=u??1/0,(0,i.B)({connector:()=>new C.t(h,a,d),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:p})}},3101:(B,O,r)=>{r.d(O,{E:()=>x});var C=r(4408);let f,i=1;const u={};function a(S){return S in u&&(delete u[S],!0)}const d={setImmediate(S){const l=i++;return u[l]=!0,f||(f=Promise.resolve()),f.then(()=>a(l)&&S()),l},clearImmediate(S){a(S)}},{setImmediate:p,clearImmediate:E}=d,_={setImmediate(...S){const{delegate:l}=_;return(l?.setImmediate||p)(...S)},clearImmediate(S){const{delegate:l}=_;return(l?.clearImmediate||E)(S)},delegate:void 0};var y=r(7565);const x=new class w extends y.v{flush(l){this._active=!0;const D=this._scheduled;this._scheduled=void 0;const{actions:v}=this;let T;l=l||v.shift();do{if(T=l.execute(l.state,l.delay))break}while((l=v[0])&&l.id===D&&v.shift());if(this._active=!1,T){for(;(l=v[0])&&l.id===D&&v.shift();)l.unsubscribe();throw T}}}(class M extends C.o{constructor(l,D){super(l,D),this.scheduler=l,this.work=D}requestAsyncId(l,D,v=0){return null!==v&&v>0?super.requestAsyncId(l,D,v):(l.actions.push(this),l._scheduled||(l._scheduled=_.setImmediate(l.flush.bind(l,void 0))))}recycleAsyncId(l,D,v=0){var T;if(null!=v?v>0:this.delay>0)return super.recycleAsyncId(l,D,v);const{actions:I}=l;null!=D&&(null===(T=I[I.length-1])||void 0===T?void 0:T.id)!==D&&(_.clearImmediate(D),l._scheduled=void 0)}})},5191:(B,O,r)=>{r.d(O,{b:()=>f});var C=r(9751),i=r(576);function f(u){return!!u&&(u instanceof C.y||(0,i.m)(u.lift)&&(0,i.m)(u.subscribe))}},3268:(B,O,r)=>{r.d(O,{Z:()=>u});var C=r(4004);const{isArray:i}=Array;function u(a){return(0,C.U)(d=>function f(a,d){return i(d)?a(...d):a(d)}(a,d))}},7376:(B,O,r)=>{r.r(O),r.d(O,{CdkFixedSizeVirtualScroll:()=>Q,CdkScrollable:()=>j,CdkScrollableModule:()=>U,CdkVirtualForOf:()=>q,CdkVirtualScrollViewport:()=>Y,CdkVirtualScrollable:()=>W,CdkVirtualScrollableElement:()=>ee,CdkVirtualScrollableWindow:()=>te,DEFAULT_RESIZE_TIME:()=>H,DEFAULT_SCROLL_TIME:()=>Z,FixedSizeVirtualScrollStrategy:()=>K,ScrollDispatcher:()=>k,ScrollingModule:()=>ie,VIRTUAL_SCROLLABLE:()=>F,VIRTUAL_SCROLL_STRATEGY:()=>A,ViewportRuler:()=>G,_fixedSizeVirtualScrollStrategyFactory:()=>N});var C=r(8968),i=r(8944),f=r(7579),u=r(9646),a=r(9751),d=r(4968),h=r(6406),p=r(3101),E=r(727),_=r(5191),M=r(1884),y=r(3601),w=r(9300),x=r(2722),m=r(8675),S=r(1520),l=r(3900),D=r(4782),v=r(3021),T=r(417),I=r(8441),L=r(4177);const V=["contentWrapper"],z=["*"],A=new i.InjectionToken("VIRTUAL_SCROLL_STRATEGY");class K{constructor(c,e,t){this._scrolledIndexChange=new f.x,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,M.x)()),this._viewport=null,this._itemSize=c,this._minBufferPx=e,this._maxBufferPx=t}attach(c){this._viewport=c,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(c,e,t){this._itemSize=c,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(c,e){this._viewport&&this._viewport.scrollToOffset(c*this._itemSize,e)}_updateTotalContentSize(){!this._viewport||this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const c=this._viewport.getRenderedRange(),e={start:c.start,end:c.end},t=this._viewport.getViewportSize(),n=this._viewport.getDataLength();let o=this._viewport.measureScrollOffset(),g=this._itemSize>0?o/this._itemSize:0;if(e.end>n){const R=Math.ceil(t/this._itemSize),P=Math.max(0,Math.min(g,n-R));g!=P&&(g=P,o=P*this._itemSize,e.start=Math.floor(g)),e.end=Math.max(0,Math.min(n,e.start+R))}const b=o-e.start*this._itemSize;if(b<this._minBufferPx&&0!=e.start){const R=Math.ceil((this._maxBufferPx-b)/this._itemSize);e.start=Math.max(0,e.start-R),e.end=Math.min(n,Math.ceil(g+(t+this._minBufferPx)/this._itemSize))}else{const R=e.end*this._itemSize-(o+t);if(R<this._minBufferPx&&e.end!=n){const P=Math.ceil((this._maxBufferPx-R)/this._itemSize);P>0&&(e.end=Math.min(n,e.end+P),e.start=Math.max(0,Math.floor(g-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(g))}}function N(s){return s._scrollStrategy}let Q=(()=>{class s{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new K(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,C.coerceNumberProperty)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,C.coerceNumberProperty)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,C.coerceNumberProperty)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[i.\u0275\u0275ProvidersFeature([{provide:A,useFactory:N,deps:[(0,i.forwardRef)(()=>s)]}]),i.\u0275\u0275NgOnChangesFeature]}),s})();const Z=20;let k=(()=>{class s{constructor(e,t,n){this._ngZone=e,this._platform=t,this._scrolled=new f.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Z){return this._platform.isBrowser?new a.y(t=>{this._globalSubscription||this._addGlobalListener();const n=e>0?this._scrolled.pipe((0,y.e)(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,u.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,w.h)(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((n,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let n=(0,C.coerceElement)(t),o=e.getElementRef().nativeElement;do{if(n==o)return!0}while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,d.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(i.NgZone),i.\u0275\u0275inject(v.Platform),i.\u0275\u0275inject(T.DOCUMENT,8))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),j=(()=>{class s{constructor(e,t,n,o){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=n,this.dir=o,this._destroyed=new f.x,this._elementScrolled=new a.y(g=>this.ngZone.runOutsideAngular(()=>(0,d.R)(this.elementRef.nativeElement,"scroll").pipe((0,x.R)(this._destroyed)).subscribe(g)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,n=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=n?e.end:e.start),null==e.right&&(e.right=n?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),n&&0!=(0,v.getRtlScrollAxisType)()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==(0,v.getRtlScrollAxisType)()?e.left=e.right:1==(0,v.getRtlScrollAxisType)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,v.supportsScrollBehavior)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",n="right",o=this.elementRef.nativeElement;if("top"==e)return o.scrollTop;if("bottom"==e)return o.scrollHeight-o.clientHeight-o.scrollTop;const g=this.dir&&"rtl"==this.dir.value;return"start"==e?e=g?n:t:"end"==e&&(e=g?t:n),g&&2==(0,v.getRtlScrollAxisType)()?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:g&&1==(0,v.getRtlScrollAxisType)()?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(k),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(I.Directionality,8))},s.\u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),s})();const H=20;let G=(()=>{class s{constructor(e,t,n){this._platform=e,this._change=new f.x,this._changeListener=o=>{this._change.next(o)},this._document=n,t.runOutsideAngular(()=>{if(e.isBrowser){const o=this._getWindow();o.addEventListener("resize",this._changeListener),o.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),n=e.documentElement,o=n.getBoundingClientRect();return{top:-o.top||e.body.scrollTop||t.scrollY||n.scrollTop||0,left:-o.left||e.body.scrollLeft||t.scrollX||n.scrollLeft||0}}change(e=H){return e>0?this._change.pipe((0,y.e)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(v.Platform),i.\u0275\u0275inject(i.NgZone),i.\u0275\u0275inject(T.DOCUMENT,8))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const F=new i.InjectionToken("VIRTUAL_SCROLLABLE");let W=(()=>{class s extends j{constructor(e,t,n,o){super(e,t,n,o)}measureViewportSize(e){const t=this.elementRef.nativeElement;return"horizontal"===e?t.clientWidth:t.clientHeight}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(k),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(I.Directionality,8))},s.\u0275dir=i.\u0275\u0275defineDirective({type:s,features:[i.\u0275\u0275InheritDefinitionFeature]}),s})();const J=typeof requestAnimationFrame<"u"?h.Z:p.E;let Y=(()=>{class s extends W{constructor(e,t,n,o,g,b,R,P){super(e,b,n,g),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=o,this.scrollable=P,this._platform=(0,i.inject)(v.Platform),this._detachedSubject=new f.x,this._renderedRangeSubject=new f.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new a.y(ne=>this._scrollStrategy.scrolledIndexChange.subscribe(re=>Promise.resolve().then(()=>this.ngZone.run(()=>ne.next(re))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=E.w0.EMPTY,this._viewportChanges=R.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,C.coerceBooleanProperty)(e)}ngOnInit(){!this._platform.isBrowser||(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,m.O)(null),(0,y.e)(0,J)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,x.R)(this._detachedSubject)).subscribe(t=>{const n=t.length;n!==this._dataLength&&(this._dataLength=n,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function X(s,c){return s.start==c.start&&s.end==c.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&"to-start"===t?0:e;const o="horizontal"==this.orientation,g=o?"X":"Y";let R=`translate${g}(${Number((o&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(R+=` translate${g}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=R&&(this._renderedContentTransform=R,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const n={behavior:t};"horizontal"===this.orientation?n.start=e:n.top=e,this.scrollable.scrollTo(n)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return t=this.scrollable==this?n=>super.measureScrollOffset(n):n=>this.scrollable.measureScrollOffset(n),Math.max(0,t(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t;const n="left",o="right",g="rtl"==this.dir?.value;t="start"==e?g?o:n:"end"==e?g?n:o:e||("horizontal"===this.orientation?"left":"top");const b=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-b}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(A,8),i.\u0275\u0275directiveInject(I.Directionality,8),i.\u0275\u0275directiveInject(k),i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(F,8))},s.\u0275cmp=i.\u0275\u0275defineComponent({type:s,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,t){if(1&e&&i.\u0275\u0275viewQuery(V,7),2&e){let n;i.\u0275\u0275queryRefresh(n=i.\u0275\u0275loadQuery())&&(t._contentWrapper=n.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,t){2&e&&i.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal","horizontal"===t.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==t.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[i.\u0275\u0275ProvidersFeature([{provide:j,useFactory:(c,e)=>c||e,deps:[W,s]}]),i.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:z,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,t){1&e&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275elementStart(0,"div",0,1),i.\u0275\u0275projection(2),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(3,"div",2)),2&e&&(i.\u0275\u0275advance(3),i.\u0275\u0275styleProp("width",t._totalContentWidth)("height",t._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0}),s})();function $(s,c,e){if(!e.getBoundingClientRect)return 0;const n=e.getBoundingClientRect();return"horizontal"===s?"start"===c?n.left:n.right:"start"===c?n.top:n.bottom}let q=(()=>{class s{constructor(e,t,n,o,g,b){this._viewContainerRef=e,this._template=t,this._differs=n,this._viewRepeater=o,this._viewport=g,this.viewChange=new f.x,this._dataSourceChanges=new f.x,this.dataStream=this._dataSourceChanges.pipe((0,m.O)(null),(0,S.G)(),(0,l.w)(([R,P])=>this._changeDataSource(R,P)),(0,D.d)(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new f.x,this.dataStream.subscribe(R=>{this._data=R,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,x.R)(this._destroyed)).subscribe(R=>{this._renderedRange=R,this.viewChange.observers.length&&b.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,(0,L.isDataSource)(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new L.ArrayDataSource((0,_.b)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,n)=>e(t+(this._renderedRange?this._renderedRange.start:0),n):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,C.coerceNumberProperty)(e)}measureRangeSize(e,t){if(e.start>=e.end)return 0;const n=e.start-this._renderedRange.start,o=e.end-e.start;let g,b;for(let R=0;R<o;R++){const P=this._viewContainerRef.get(R+n);if(P&&P.rootNodes.length){g=b=P.rootNodes[0];break}}for(let R=o-1;R>-1;R--){const P=this._viewContainerRef.get(R+n);if(P&&P.rootNodes.length){b=P.rootNodes[P.rootNodes.length-1];break}}return g&&b?$(t,"end",b)-$(t,"start",g):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){!this._renderedRange||(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):(0,u.of)()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const n=this._viewContainerRef.get(t);n.context.index=this._renderedRange.start+t,n.context.count=e,this._updateComputedContextProperties(n.context),n.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(o,g,b)=>this._getEmbeddedViewArgs(o,b),o=>o.item),e.forEachIdentityChange(o=>{this._viewContainerRef.get(o.currentIndex).context.$implicit=o.item});const t=this._data.length;let n=this._viewContainerRef.length;for(;n--;){const o=this._viewContainerRef.get(n);o.context.index=this._renderedRange.start+n,o.context.count=t,this._updateComputedContextProperties(o.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275directiveInject(i.ViewContainerRef),i.\u0275\u0275directiveInject(i.TemplateRef),i.\u0275\u0275directiveInject(i.IterableDiffers),i.\u0275\u0275directiveInject(L._VIEW_REPEATER_STRATEGY),i.\u0275\u0275directiveInject(Y,4),i.\u0275\u0275directiveInject(i.NgZone))},s.\u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},features:[i.\u0275\u0275ProvidersFeature([{provide:L._VIEW_REPEATER_STRATEGY,useClass:L._RecycleViewRepeaterStrategy}])]}),s})(),ee=(()=>{class s extends W{constructor(e,t,n,o){super(e,t,n,o)}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]-this.measureScrollOffset(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(k),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(I.Directionality,8))},s.\u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["","cdkVirtualScrollingElement",""]],hostAttrs:[1,"cdk-virtual-scrollable"],features:[i.\u0275\u0275ProvidersFeature([{provide:F,useExisting:s}]),i.\u0275\u0275InheritDefinitionFeature]}),s})(),te=(()=>{class s extends W{constructor(e,t,n){super(new i.ElementRef(document.documentElement),e,t,n),this._elementScrolled=new a.y(o=>this.ngZone.runOutsideAngular(()=>(0,d.R)(document,"scroll").pipe((0,x.R)(this._destroyed)).subscribe(o)))}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275directiveInject(k),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(I.Directionality,8))},s.\u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["cdk-virtual-scroll-viewport","scrollWindow",""]],features:[i.\u0275\u0275ProvidersFeature([{provide:F,useExisting:s}]),i.\u0275\u0275InheritDefinitionFeature]}),s})(),U=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({}),s})(),ie=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({imports:[I.BidiModule,U,I.BidiModule,U]}),s})()}}]);