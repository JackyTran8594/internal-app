(self.webpackChunktask_management=self.webpackChunktask_management||[]).push([[5849],{7272:(h,c,t)=>{t.d(c,{z:()=>f});var d=t(8189),o=t(3269),v=t(2076);function f(...s){return function m(){return(0,d.J)(1)}()((0,v.D)(s,(0,o.yG)(s)))}},5963:(h,c,t)=>{t.d(c,{H:()=>f});var d=t(9751),m=t(4986),o=t(3532);function f(s=0,r,a=m.P){let i=-1;return null!=r&&((0,o.K)(r)?a=r:i=r),new d.y(n=>{let e=function v(s){return s instanceof Date&&!isNaN(s)}(s)?+s-a.now():s;e<0&&(e=0);let l=0;return a.schedule(function(){n.closed||(n.next(l++),0<=i?this.schedule(void 0,i):n.complete())},e)})}},4004:(h,c,t)=>{t.d(c,{U:()=>o});var d=t(4482),m=t(5403);function o(v,f){return(0,d.e)((s,r)=>{let a=0;s.subscribe((0,m.x)(r,i=>{r.next(v.call(f,i,a++))}))})}},8189:(h,c,t)=>{t.d(c,{J:()=>o});var d=t(5577),m=t(4671);function o(v=1/0){return(0,d.z)(m.y,v)}},5577:(h,c,t)=>{t.d(c,{z:()=>a});var d=t(4004),m=t(8421),o=t(4482),v=t(9672),f=t(5403),r=t(576);function a(i,n,e=1/0){return(0,r.m)(n)?a((l,u)=>(0,d.U)((E,D)=>n(l,E,u,D))((0,m.Xf)(i(l,u))),e):("number"==typeof n&&(e=n),(0,o.e)((l,u)=>function s(i,n,e,l,u,E,D,M){const I=[];let O=0,y=0,C=!1;const F=()=>{C&&!I.length&&!O&&n.complete()},x=P=>O<l?_(P):I.push(P),_=P=>{E&&n.next(P),O++;let U=!1;(0,m.Xf)(e(P,y++)).subscribe((0,f.x)(n,A=>{u?.(A),E?x(A):n.next(A)},()=>{U=!0},void 0,()=>{if(U)try{for(O--;I.length&&O<l;){const A=I.shift();D?(0,v.f)(n,D,()=>_(A)):_(A)}F()}catch(A){n.error(A)}}))};return i.subscribe((0,f.x)(n,x,()=>{C=!0,F()})),()=>{M?.()}}(l,u,i,e)))}},8675:(h,c,t)=>{t.d(c,{O:()=>v});var d=t(7272),m=t(3269),o=t(4482);function v(...f){const s=(0,m.yG)(f);return(0,o.e)((r,a)=>{(s?(0,d.z)(f,r,s):(0,d.z)(f,r)).subscribe(a)})}},3900:(h,c,t)=>{t.d(c,{w:()=>v});var d=t(8421),m=t(4482),o=t(5403);function v(f,s){return(0,m.e)((r,a)=>{let i=null,n=0,e=!1;const l=()=>e&&!i&&a.complete();r.subscribe((0,o.x)(a,u=>{i?.unsubscribe();let E=0;const D=n++;(0,d.Xf)(f(u,D)).subscribe(i=(0,o.x)(a,M=>a.next(s?s(u,M,D,E++):M),()=>{i=null,l()}))},()=>{e=!0,l()}))})}},2722:(h,c,t)=>{t.d(c,{R:()=>f});var d=t(4482),m=t(5403),o=t(8421),v=t(5032);function f(s){return(0,d.e)((r,a)=>{(0,o.Xf)(s).subscribe((0,m.x)(a,()=>a.complete(),v.Z)),!a.closed&&r.subscribe(a)})}},6406:(h,c,t)=>{t.d(c,{Z:()=>r});var d=t(4408),m=t(727);const o={schedule(i){let n=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:l}=o;l&&(n=l.requestAnimationFrame,e=l.cancelAnimationFrame);const u=n(E=>{e=void 0,i(E)});return new m.w0(()=>e?.(u))},requestAnimationFrame(...i){const{delegate:n}=o;return(n?.requestAnimationFrame||requestAnimationFrame)(...i)},cancelAnimationFrame(...i){const{delegate:n}=o;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...i)},delegate:void 0};var f=t(7565);const r=new class s extends f.v{flush(n){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:l}=this;let u;n=n||l.shift();do{if(u=n.execute(n.state,n.delay))break}while((n=l[0])&&n.id===e&&l.shift());if(this._active=!1,u){for(;(n=l[0])&&n.id===e&&l.shift();)n.unsubscribe();throw u}}}(class v extends d.o{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,l=0){return null!==l&&l>0?super.requestAsyncId(n,e,l):(n.actions.push(this),n._scheduled||(n._scheduled=o.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,l=0){var u;if(null!=l?l>0:this.delay>0)return super.recycleAsyncId(n,e,l);const{actions:E}=n;null!=e&&(null===(u=E[E.length-1])||void 0===u?void 0:u.id)!==e&&(o.cancelAnimationFrame(e),n._scheduled=void 0)}})}}]);