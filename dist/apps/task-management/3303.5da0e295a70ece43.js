(self.webpackChunktask_management=self.webpackChunktask_management||[]).push([[3303],{7272:(S,h,e)=>{e.d(h,{z:()=>l});var o=e(8189),u=e(3269),f=e(2076);function l(...n){return function a(){return(0,o.J)(1)}()((0,f.D)(n,(0,u.yG)(n)))}},5963:(S,h,e)=>{e.d(h,{H:()=>l});var o=e(9751),a=e(4986),u=e(3532);function l(n=0,t,s=a.P){let c=-1;return null!=t&&((0,u.K)(t)?s=t:c=t),new o.y(m=>{let p=function f(n){return n instanceof Date&&!isNaN(n)}(n)?+n-s.now():n;p<0&&(p=0);let _=0;return s.schedule(function(){m.closed||(m.next(_++),0<=c?this.schedule(void 0,c):m.complete())},p)})}},3601:(S,h,e)=>{e.d(h,{e:()=>t});var o=e(4986),a=e(4482),u=e(8421),f=e(5403),n=e(5963);function t(s,c=o.z){return function l(s){return(0,a.e)((c,m)=>{let p=!1,_=null,D=null,M=!1;const I=()=>{if(D?.unsubscribe(),D=null,p){p=!1;const x=_;_=null,m.next(x)}M&&m.complete()},O=()=>{D=null,M&&m.complete()};c.subscribe((0,f.x)(m,x=>{p=!0,_=x,D||(0,u.Xf)(s(x)).subscribe(D=(0,f.x)(m,I,O))},()=>{M=!0,(!p||!D||D.closed)&&m.complete()}))})}(()=>(0,n.H)(s,c))}},1884:(S,h,e)=>{e.d(h,{x:()=>f});var o=e(4671),a=e(4482),u=e(5403);function f(n,t=o.y){return n=n??l,(0,a.e)((s,c)=>{let m,p=!0;s.subscribe((0,u.x)(c,_=>{const D=t(_);(p||!n(m,D))&&(p=!1,m=D,c.next(_))}))})}function l(n,t){return n===t}},8746:(S,h,e)=>{e.d(h,{x:()=>a});var o=e(4482);function a(u){return(0,o.e)((f,l)=>{try{f.subscribe(l)}finally{l.add(u)}})}},8189:(S,h,e)=>{e.d(h,{J:()=>u});var o=e(5577),a=e(4671);function u(f=1/0){return(0,o.z)(a.y,f)}},8675:(S,h,e)=>{e.d(h,{O:()=>f});var o=e(7272),a=e(3269),u=e(4482);function f(...l){const n=(0,a.yG)(l);return(0,u.e)((t,s)=>{(n?(0,o.z)(l,t,n):(0,o.z)(l,t)).subscribe(s)})}},4408:(S,h,e)=>{e.d(h,{o:()=>l});var o=e(727);class a extends o.w0{constructor(t,s){super()}schedule(t,s=0){return this}}const u={setInterval(n,t,...s){const{delegate:c}=u;return c?.setInterval?c.setInterval(n,t,...s):setInterval(n,t,...s)},clearInterval(n){const{delegate:t}=u;return(t?.clearInterval||clearInterval)(n)},delegate:void 0};var f=e(8737);class l extends a{constructor(t,s){super(t,s),this.scheduler=t,this.work=s,this.pending=!1}schedule(t,s=0){var c;if(this.closed)return this;this.state=t;const m=this.id,p=this.scheduler;return null!=m&&(this.id=this.recycleAsyncId(p,m,s)),this.pending=!0,this.delay=s,this.id=null!==(c=this.id)&&void 0!==c?c:this.requestAsyncId(p,this.id,s),this}requestAsyncId(t,s,c=0){return u.setInterval(t.flush.bind(t,this),c)}recycleAsyncId(t,s,c=0){if(null!=c&&this.delay===c&&!1===this.pending)return s;null!=s&&u.clearInterval(s)}execute(t,s){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const c=this._execute(t,s);if(c)return c;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,s){let m,c=!1;try{this.work(t)}catch(p){c=!0,m=p||new Error("Scheduled action threw falsy error")}if(c)return this.unsubscribe(),m}unsubscribe(){if(!this.closed){const{id:t,scheduler:s}=this,{actions:c}=s;this.work=this.state=this.scheduler=null,this.pending=!1,(0,f.P)(c,this),null!=t&&(this.id=this.recycleAsyncId(s,t,null)),this.delay=null,super.unsubscribe()}}}},7565:(S,h,e)=>{e.d(h,{v:()=>u});var o=e(6063);class a{constructor(l,n=a.now){this.schedulerActionCtor=l,this.now=n}schedule(l,n=0,t){return new this.schedulerActionCtor(this,l).schedule(t,n)}}a.now=o.l.now;class u extends a{constructor(l,n=a.now){super(l,n),this.actions=[],this._active=!1}flush(l){const{actions:n}=this;if(this._active)return void n.push(l);let t;this._active=!0;do{if(t=l.execute(l.state,l.delay))break}while(l=n.shift());if(this._active=!1,t){for(;l=n.shift();)l.unsubscribe();throw t}}}},4986:(S,h,e)=>{e.d(h,{P:()=>f,z:()=>u});var o=e(4408);const u=new(e(7565).v)(o.o),f=u},6063:(S,h,e)=>{e.d(h,{l:()=>o});const o={now:()=>(o.delegate||Date).now(),delegate:void 0}},3303:(S,h,e)=>{e.d(h,{G_:()=>P,KV:()=>O,WV:()=>T,kn:()=>A,r3:()=>N,rI:()=>M});var o=e(8944),a=e(7579),u=e(3601),f=e(8746),l=e(2722),n=e(4004),t=e(8675),s=e(1884),c=e(153),p=(e(417),e(9074));e(3181);const D=()=>{};let M=(()=>{class r{constructor(i,d){this.ngZone=i,this.rendererFactory2=d,this.resizeSource$=new a.x,this.listeners=0,this.disposeHandle=D,this.handler=()=>{this.ngZone.run(()=>{this.resizeSource$.next()})},this.renderer=this.rendererFactory2.createRenderer(null,null)}ngOnDestroy(){this.handler=D}subscribe(){return this.registerListener(),this.resizeSource$.pipe((0,u.e)(16),(0,f.x)(()=>this.unregisterListener()))}unsubscribe(){this.unregisterListener()}registerListener(){0===this.listeners&&this.ngZone.runOutsideAngular(()=>{this.disposeHandle=this.renderer.listen("window","resize",this.handler)}),this.listeners+=1}unregisterListener(){this.listeners-=1,0===this.listeners&&(this.disposeHandle(),this.disposeHandle=D)}}return r.\u0275fac=function(i){return new(i||r)(o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(o.RendererFactory2))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const I=new Map;let O=(()=>{class r{constructor(){this._singletonRegistry=new Map}get singletonRegistry(){return c.N.isTestMode?I:this._singletonRegistry}registerSingletonWithKey(i,d){const y=this.singletonRegistry.has(i),v=y?this.singletonRegistry.get(i):this.withNewTarget(d);y||this.singletonRegistry.set(i,v)}getSingletonWithKey(i){return this.singletonRegistry.has(i)?this.singletonRegistry.get(i).target:null}withNewTarget(i){return{target:i}}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var P=(()=>{return(r=P||(P={})).xxl="xxl",r.xl="xl",r.lg="lg",r.md="md",r.sm="sm",r.xs="xs",P;var r})();const T={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};let N=(()=>{class r{constructor(i,d){this.resizeService=i,this.mediaMatcher=d,this.destroy$=new a.x,this.resizeService.subscribe().pipe((0,l.R)(this.destroy$)).subscribe(()=>{})}ngOnDestroy(){this.destroy$.next()}subscribe(i,d){if(d){const y=()=>this.matchMedia(i,!0);return this.resizeService.subscribe().pipe((0,n.U)(y),(0,t.O)(y()),(0,s.x)((v,E)=>v[0]===E[0]),(0,n.U)(v=>v[1]))}{const y=()=>this.matchMedia(i);return this.resizeService.subscribe().pipe((0,n.U)(y),(0,t.O)(y()),(0,s.x)())}}matchMedia(i,d){let y=P.md;const v={};return Object.keys(i).map(E=>{const w=E,R=this.mediaMatcher.matchMedia(T[w]).matches;v[E]=R,R&&(y=w)}),d?[y,v]:y}}return r.\u0275fac=function(i){return new(i||r)(o.\u0275\u0275inject(M),o.\u0275\u0275inject(p.MediaMatcher))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),A=(()=>{class r extends a.x{ngOnDestroy(){this.next(),this.complete()}}return r.\u0275fac=function(){let g;return function(d){return(g||(g=o.\u0275\u0275getInheritedFactory(r)))(d||r)}}(),r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})()}}]);