(self.webpackChunktask_management=self.webpackChunktask_management||[]).push([[2687,7889],{1135:(A,b,c)=>{c.d(b,{X:()=>r});var l=c(7579);class r extends l.x{constructor(h){super(),this._value=h}get value(){return this.getValue()}_subscribe(h){const _=super._subscribe(h);return!_.closed&&h.next(this._value),_}getValue(){const{hasError:h,thrownError:_,_value:f}=this;if(h)throw _;return this._throwIfClosed(),f}next(h){super.next(this._value=h)}}},9646:(A,b,c)=>{c.d(b,{of:()=>d});var l=c(3269),r=c(2076);function d(...h){const _=(0,l.yG)(h);return(0,r.D)(h,_)}},8372:(A,b,c)=>{c.d(b,{b:()=>h});var l=c(4986),r=c(4482),d=c(5403);function h(_,f=l.z){return(0,r.e)((E,u)=>{let m=null,v=null,I=null;const y=()=>{if(m){m.unsubscribe(),m=null;const p=v;v=null,u.next(p)}};function T(){const p=I+_,F=f.now();if(F<p)return m=this.schedule(void 0,p-F),void u.add(m);y()}E.subscribe((0,d.x)(u,p=>{v=p,I=f.now(),m||(m=f.schedule(T,_),u.add(m))},()=>{y(),u.complete()},void 0,()=>{v=m=null}))})}},1884:(A,b,c)=>{c.d(b,{x:()=>h});var l=c(4671),r=c(4482),d=c(5403);function h(f,E=l.y){return f=f??_,(0,r.e)((u,m)=>{let v,I=!0;u.subscribe((0,d.x)(m,y=>{const T=E(y);(I||!f(v,T))&&(I=!1,v=T,m.next(y))}))})}function _(f,E){return f===E}},9300:(A,b,c)=>{c.d(b,{h:()=>d});var l=c(4482),r=c(5403);function d(h,_){return(0,l.e)((f,E)=>{let u=0;f.subscribe((0,r.x)(E,m=>h.call(_,m,u++)&&E.next(m)))})}},5684:(A,b,c)=>{c.d(b,{T:()=>r});var l=c(9300);function r(d){return(0,l.h)((h,_)=>d<=_)}},2687:(A,b,c)=>{c.r(b),c.d(b,{A11yModule:()=>we,ActiveDescendantKeyManager:()=>ge,AriaDescriber:()=>me,CDK_DESCRIBEDBY_HOST_ATTRIBUTE:()=>D,CDK_DESCRIBEDBY_ID_PREFIX:()=>k,CdkAriaLive:()=>ke,CdkMonitorFocus:()=>Ne,CdkTrapFocus:()=>Fe,ConfigurableFocusTrap:()=>$,ConfigurableFocusTrapFactory:()=>Re,EventListenerFocusTrapInertStrategy:()=>G,FOCUS_MONITOR_DEFAULT_OPTIONS:()=>re,FOCUS_TRAP_INERT_STRATEGY:()=>Y,FocusKeyManager:()=>be,FocusMonitor:()=>oe,FocusTrap:()=>S,FocusTrapFactory:()=>V,HighContrastModeDetector:()=>ue,INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS:()=>J,INPUT_MODALITY_DETECTOR_OPTIONS:()=>Q,InputModalityDetector:()=>ee,InteractivityChecker:()=>x,IsFocusableConfig:()=>Ee,LIVE_ANNOUNCER_DEFAULT_OPTIONS:()=>ie,LIVE_ANNOUNCER_ELEMENT_TOKEN:()=>te,LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY:()=>se,ListKeyManager:()=>P,LiveAnnouncer:()=>ne,MESSAGES_CONTAINER_ID:()=>fe,isFakeMousedownFromScreenReader:()=>z,isFakeTouchstartFromScreenReader:()=>X});var l=c(417),r=c(8944),d=c(3021),h=c(7579),_=c(727),f=c(1135),E=c(9646),u=c(9399),m=c(8505),v=c(8372),I=c(9300),y=c(4004),T=c(5698),p=c(5684),F=c(1884),de=c(2722),C=c(8968),K=c(6681),he=c(6407);function L(i,s){return(i.getAttribute(s)||"").match(/\S+/g)||[]}const fe="cdk-describedby-message-container",k="cdk-describedby-message",D="cdk-describedby-host";let N=0,me=(()=>{class i{constructor(e,t){this._platform=t,this._messageRegistry=new Map,this._messagesContainer=null,this._id=""+N++,this._document=e,this._id=(0,r.inject)(r.APP_ID)+"-"+N++}describe(e,t,n){if(!this._canBeDescribed(e,t))return;const o=w(t,n);"string"!=typeof t?(W(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,n),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;const o=w(t,n);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),"string"==typeof t){const a=this._messageRegistry.get(o);a&&0===a.referenceCount&&this._deleteMessageElement(o)}0===this._messagesContainer?.childNodes.length&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){const e=this._document.querySelectorAll(`[${D}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(D);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){const n=this._document.createElement("div");W(n,this._id),n.textContent=e,t&&n.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(w(e,t),{messageElement:n,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;const e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();const n=this._document.createElement("div");n.style.visibility="hidden",n.classList.add(e),n.classList.add("cdk-visually-hidden"),this._platform&&!this._platform.isBrowser&&n.setAttribute("platform","server"),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(e){const t=L(e,"aria-describedby").filter(n=>0!=n.indexOf(k));e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){const n=this._messageRegistry.get(t);(function le(i,s,e){const t=L(i,s);t.some(n=>n.trim()==e.trim())||(t.push(e.trim()),i.setAttribute(s,t.join(" ")))})(e,"aria-describedby",n.messageElement.id),e.setAttribute(D,this._id),n.referenceCount++}_removeMessageReference(e,t){const n=this._messageRegistry.get(t);n.referenceCount--,function _e(i,s,e){const n=L(i,s).filter(o=>o!=e.trim());n.length?i.setAttribute(s,n.join(" ")):i.removeAttribute(s)}(e,"aria-describedby",n.messageElement.id),e.removeAttribute(D)}_isElementDescribedByMessage(e,t){const n=L(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&-1!=n.indexOf(a)}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&"object"==typeof t)return!0;const n=null==t?"":`${t}`.trim(),o=e.getAttribute("aria-label");return!(!n||o&&o.trim()===n)}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275inject(l.DOCUMENT),r.\u0275\u0275inject(d.Platform))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function w(i,s){return"string"==typeof i?`${s||""}/${i}`:i}function W(i,s){i.id||(i.id=`${k}-${s}-${N++}`)}class P{constructor(s){this._items=s,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new h.x,this._typeaheadSubscription=_.w0.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._skipPredicateFn=e=>e.disabled,this._pressedLetters=[],this.tabOut=new h.x,this.change=new h.x,s instanceof r.QueryList&&s.changes.subscribe(e=>{if(this._activeItem){const n=e.toArray().indexOf(this._activeItem);n>-1&&n!==this._activeItemIndex&&(this._activeItemIndex=n)}})}skipPredicate(s){return this._skipPredicateFn=s,this}withWrap(s=!0){return this._wrap=s,this}withVerticalOrientation(s=!0){return this._vertical=s,this}withHorizontalOrientation(s){return this._horizontal=s,this}withAllowedModifierKeys(s){return this._allowedModifierKeys=s,this}withTypeAhead(s=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe((0,m.b)(e=>this._pressedLetters.push(e)),(0,v.b)(s),(0,I.h)(()=>this._pressedLetters.length>0),(0,y.U)(()=>this._pressedLetters.join(""))).subscribe(e=>{const t=this._getItemsArray();for(let n=1;n<t.length+1;n++){const o=(this._activeItemIndex+n)%t.length,a=t[o];if(!this._skipPredicateFn(a)&&0===a.getLabel().toUpperCase().trim().indexOf(e)){this.setActiveItem(o);break}}this._pressedLetters=[]}),this}withHomeAndEnd(s=!0){return this._homeAndEnd=s,this}setActiveItem(s){const e=this._activeItem;this.updateActiveItem(s),this._activeItem!==e&&this.change.next(this._activeItemIndex)}onKeydown(s){const e=s.keyCode,n=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!s[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case u.TAB:return void this.tabOut.next();case u.DOWN_ARROW:if(this._vertical&&n){this.setNextItemActive();break}return;case u.UP_ARROW:if(this._vertical&&n){this.setPreviousItemActive();break}return;case u.RIGHT_ARROW:if(this._horizontal&&n){"rtl"===this._horizontal?this.setPreviousItemActive():this.setNextItemActive();break}return;case u.LEFT_ARROW:if(this._horizontal&&n){"rtl"===this._horizontal?this.setNextItemActive():this.setPreviousItemActive();break}return;case u.HOME:if(this._homeAndEnd&&n){this.setFirstItemActive();break}return;case u.END:if(this._homeAndEnd&&n){this.setLastItemActive();break}return;default:return void((n||(0,u.hasModifierKey)(s,"shiftKey"))&&(s.key&&1===s.key.length?this._letterKeyStream.next(s.key.toLocaleUpperCase()):(e>=u.A&&e<=u.Z||e>=u.ZERO&&e<=u.NINE)&&this._letterKeyStream.next(String.fromCharCode(e))))}this._pressedLetters=[],s.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(s){const e=this._getItemsArray(),t="number"==typeof s?s:e.indexOf(s);this._activeItem=e[t]??null,this._activeItemIndex=t}_setActiveItemByDelta(s){this._wrap?this._setActiveInWrapMode(s):this._setActiveInDefaultMode(s)}_setActiveInWrapMode(s){const e=this._getItemsArray();for(let t=1;t<=e.length;t++){const n=(this._activeItemIndex+s*t+e.length)%e.length;if(!this._skipPredicateFn(e[n]))return void this.setActiveItem(n)}}_setActiveInDefaultMode(s){this._setActiveItemByIndex(this._activeItemIndex+s,s)}_setActiveItemByIndex(s,e){const t=this._getItemsArray();if(t[s]){for(;this._skipPredicateFn(t[s]);)if(!t[s+=e])return;this.setActiveItem(s)}}_getItemsArray(){return this._items instanceof r.QueryList?this._items.toArray():this._items}}class ge extends P{setActiveItem(s){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(s),this.activeItem&&this.activeItem.setActiveStyles()}}class be extends P{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(s){return this._origin=s,this}setActiveItem(s){super.setActiveItem(s),this.activeItem&&this.activeItem.focus(this._origin)}}class Ee{constructor(){this.ignoreVisibility=!1}}let x=(()=>{class i{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function pe(i){return!!(i.offsetWidth||i.offsetHeight||"function"==typeof i.getClientRects&&i.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const t=function ve(i){try{return i.frameElement}catch{return null}}(function Oe(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}(e));if(t&&(-1===Z(t)||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),o=Z(e);return e.hasAttribute("contenteditable")?-1!==o:!("iframe"===n||"object"===n||this._platform.WEBKIT&&this._platform.IOS&&!function Ce(i){let s=i.nodeName.toLowerCase(),e="input"===s&&i.type;return"text"===e||"password"===e||"select"===s||"textarea"===s}(e))&&("audio"===n?!!e.hasAttribute("controls")&&-1!==o:"video"===n?-1!==o&&(null!==o||this._platform.FIREFOX||e.hasAttribute("controls")):e.tabIndex>=0)}isFocusable(e,t){return function De(i){return!function ye(i){return function Te(i){return"input"==i.nodeName.toLowerCase()}(i)&&"hidden"==i.type}(i)&&(function Ie(i){let s=i.nodeName.toLowerCase();return"input"===s||"select"===s||"button"===s||"textarea"===s}(i)||function Ae(i){return function Me(i){return"a"==i.nodeName.toLowerCase()}(i)&&i.hasAttribute("href")}(i)||i.hasAttribute("contenteditable")||H(i))}(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275inject(d.Platform))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function H(i){if(!i.hasAttribute("tabindex")||void 0===i.tabIndex)return!1;let s=i.getAttribute("tabindex");return!(!s||isNaN(parseInt(s,10)))}function Z(i){if(!H(i))return null;const s=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(s)?-1:s}class S{constructor(s,e,t,n,o=!1){this._element=s,this._checker=e,this._ngZone=t,this._document=n,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,o||this.attachAnchors()}get enabled(){return this._enabled}set enabled(s){this._enabled=s,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(s,this._startAnchor),this._toggleAnchorTabIndex(s,this._endAnchor))}destroy(){const s=this._startAnchor,e=this._endAnchor;s&&(s.removeEventListener("focus",this.startAnchorListener),s.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(s){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(s)))})}focusFirstTabbableElementWhenReady(s){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(s)))})}focusLastTabbableElementWhenReady(s){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(s)))})}_getRegionBoundary(s){const e=this._element.querySelectorAll(`[cdk-focus-region-${s}], [cdkFocusRegion${s}], [cdk-focus-${s}]`);return"start"==s?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(s){const e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){const t=this._getFirstTabbableElement(e);return t?.focus(s),!!t}return e.focus(s),!0}return this.focusFirstTabbableElement(s)}focusFirstTabbableElement(s){const e=this._getRegionBoundary("start");return e&&e.focus(s),!!e}focusLastTabbableElement(s){const e=this._getRegionBoundary("end");return e&&e.focus(s),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(s){if(this._checker.isFocusable(s)&&this._checker.isTabbable(s))return s;const e=s.children;for(let t=0;t<e.length;t++){const n=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(n)return n}return null}_getLastTabbableElement(s){if(this._checker.isFocusable(s)&&this._checker.isTabbable(s))return s;const e=s.children;for(let t=e.length-1;t>=0;t--){const n=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(n)return n}return null}_createAnchor(){const s=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,s),s.classList.add("cdk-visually-hidden"),s.classList.add("cdk-focus-trap-anchor"),s.setAttribute("aria-hidden","true"),s}_toggleAnchorTabIndex(s,e){s?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(s){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(s,this._startAnchor),this._toggleAnchorTabIndex(s,this._endAnchor))}_executeOnStable(s){this._ngZone.isStable?s():this._ngZone.onStable.pipe((0,T.q)(1)).subscribe(s)}}let V=(()=>{class i{constructor(e,t,n){this._checker=e,this._ngZone=t,this._document=n}create(e,t=!1){return new S(e,this._checker,this._ngZone,this._document,t)}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275inject(x),r.\u0275\u0275inject(r.NgZone),r.\u0275\u0275inject(l.DOCUMENT))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Fe=(()=>{class i{constructor(e,t,n){this._elementRef=e,this._focusTrapFactory=t,this._previouslyFocusedElement=null,this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0)}get enabled(){return this.focusTrap.enabled}set enabled(e){this.focusTrap.enabled=(0,C.coerceBooleanProperty)(e)}get autoCapture(){return this._autoCapture}set autoCapture(e){this._autoCapture=(0,C.coerceBooleanProperty)(e)}ngOnDestroy(){this.focusTrap.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap.hasAttached()||this.focusTrap.attachAnchors()}ngOnChanges(e){const t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=(0,d._getFocusedElementPierceShadowDom)(),this.focusTrap.focusInitialElementWhenReady()}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(V),r.\u0275\u0275directiveInject(l.DOCUMENT))},i.\u0275dir=r.\u0275\u0275defineDirective({type:i,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:["cdkTrapFocus","enabled"],autoCapture:["cdkTrapFocusAutoCapture","autoCapture"]},exportAs:["cdkTrapFocus"],features:[r.\u0275\u0275NgOnChangesFeature]}),i})();class $ extends S{constructor(s,e,t,n,o,a,g){super(s,e,t,n,g.defer),this._focusTrapManager=o,this._inertStrategy=a,this._focusTrapManager.register(this)}get enabled(){return this._enabled}set enabled(s){this._enabled=s,this._enabled?this._focusTrapManager.register(this):this._focusTrapManager.deregister(this)}destroy(){this._focusTrapManager.deregister(this),super.destroy()}_enable(){this._inertStrategy.preventFocus(this),this.toggleAnchors(!0)}_disable(){this._inertStrategy.allowFocus(this),this.toggleAnchors(!1)}}const Y=new r.InjectionToken("FOCUS_TRAP_INERT_STRATEGY");class G{constructor(){this._listener=null}preventFocus(s){this._listener&&s._document.removeEventListener("focus",this._listener,!0),this._listener=e=>this._trapFocus(s,e),s._ngZone.runOutsideAngular(()=>{s._document.addEventListener("focus",this._listener,!0)})}allowFocus(s){!this._listener||(s._document.removeEventListener("focus",this._listener,!0),this._listener=null)}_trapFocus(s,e){const t=e.target,n=s._element;t&&!n.contains(t)&&!t.closest?.("div.cdk-overlay-pane")&&setTimeout(()=>{s.enabled&&!n.contains(s._document.activeElement)&&s.focusFirstTabbableElement()})}}let Le=(()=>{class i{constructor(){this._focusTrapStack=[]}register(e){this._focusTrapStack=this._focusTrapStack.filter(n=>n!==e);let t=this._focusTrapStack;t.length&&t[t.length-1]._disable(),t.push(e),e._enable()}deregister(e){e._disable();const t=this._focusTrapStack,n=t.indexOf(e);-1!==n&&(t.splice(n,1),t.length&&t[t.length-1]._enable())}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Re=(()=>{class i{constructor(e,t,n,o,a){this._checker=e,this._ngZone=t,this._focusTrapManager=n,this._document=o,this._inertStrategy=a||new G}create(e,t={defer:!1}){let n;return n="boolean"==typeof t?{defer:t}:t,new $(e,this._checker,this._ngZone,this._document,this._focusTrapManager,this._inertStrategy,n)}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275inject(x),r.\u0275\u0275inject(r.NgZone),r.\u0275\u0275inject(Le),r.\u0275\u0275inject(l.DOCUMENT),r.\u0275\u0275inject(Y,8))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function z(i){return 0===i.buttons||0===i.offsetX&&0===i.offsetY}function X(i){const s=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!(!s||-1!==s.identifier||null!=s.radiusX&&1!==s.radiusX||null!=s.radiusY&&1!==s.radiusY)}const Q=new r.InjectionToken("cdk-input-modality-detector-options"),J={ignoreKeys:[u.ALT,u.CONTROL,u.MAC_META,u.META,u.SHIFT]},M=(0,d.normalizePassiveListenerOptions)({passive:!0,capture:!0});let ee=(()=>{class i{constructor(e,t,n,o){this._platform=e,this._mostRecentTarget=null,this._modality=new f.X(null),this._lastTouchMs=0,this._onKeydown=a=>{this._options?.ignoreKeys?.some(g=>g===a.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=(0,d._getEventTarget)(a))},this._onMousedown=a=>{Date.now()-this._lastTouchMs<650||(this._modality.next(z(a)?"keyboard":"mouse"),this._mostRecentTarget=(0,d._getEventTarget)(a))},this._onTouchstart=a=>{X(a)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,d._getEventTarget)(a))},this._options={...J,...o},this.modalityDetected=this._modality.pipe((0,p.T)(1)),this.modalityChanged=this.modalityDetected.pipe((0,F.x)()),e.isBrowser&&t.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,M),n.addEventListener("mousedown",this._onMousedown,M),n.addEventListener("touchstart",this._onTouchstart,M)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,M),document.removeEventListener("mousedown",this._onMousedown,M),document.removeEventListener("touchstart",this._onTouchstart,M))}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275inject(d.Platform),r.\u0275\u0275inject(r.NgZone),r.\u0275\u0275inject(l.DOCUMENT),r.\u0275\u0275inject(Q,8))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const te=new r.InjectionToken("liveAnnouncerElement",{providedIn:"root",factory:se});function se(){return null}const ie=new r.InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");let ne=(()=>{class i{constructor(e,t,n,o){this._ngZone=t,this._defaultOptions=o,this._document=n,this._liveElement=e||this._createLiveElement()}announce(e,...t){const n=this._defaultOptions;let o,a;return 1===t.length&&"number"==typeof t[0]?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=n&&n.politeness?n.politeness:"polite"),null==a&&n&&(a=n.duration),this._liveElement.setAttribute("aria-live",o),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(g=>this._currentResolve=g)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=e,"number"==typeof a&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){const e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),n=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return n.classList.add(e),n.classList.add("cdk-visually-hidden"),n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live","polite"),this._document.body.appendChild(n),n}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275inject(te,8),r.\u0275\u0275inject(r.NgZone),r.\u0275\u0275inject(l.DOCUMENT),r.\u0275\u0275inject(ie,8))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),ke=(()=>{class i{constructor(e,t,n,o){this._elementRef=e,this._liveAnnouncer=t,this._contentObserver=n,this._ngZone=o,this._politeness="polite"}get politeness(){return this._politeness}set politeness(e){this._politeness="off"===e||"assertive"===e?e:"polite","off"===this._politeness?this._subscription&&(this._subscription.unsubscribe(),this._subscription=null):this._subscription||(this._subscription=this._ngZone.runOutsideAngular(()=>this._contentObserver.observe(this._elementRef).subscribe(()=>{const t=this._elementRef.nativeElement.textContent;t!==this._previousAnnouncedText&&(this._liveAnnouncer.announce(t,this._politeness,this.duration),this._previousAnnouncedText=t)})))}ngOnDestroy(){this._subscription&&this._subscription.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(ne),r.\u0275\u0275directiveInject(K.ContentObserver),r.\u0275\u0275directiveInject(r.NgZone))},i.\u0275dir=r.\u0275\u0275defineDirective({type:i,selectors:[["","cdkAriaLive",""]],inputs:{politeness:["cdkAriaLive","politeness"],duration:["cdkAriaLiveDuration","duration"]},exportAs:["cdkAriaLive"]}),i})();const re=new r.InjectionToken("cdk-focus-monitor-default-options"),R=(0,d.normalizePassiveListenerOptions)({passive:!0,capture:!0});let oe=(()=>{class i{constructor(e,t,n,o,a){this._ngZone=e,this._platform=t,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new h.x,this._rootNodeFocusAndBlurListener=g=>{for(let O=(0,d._getEventTarget)(g);O;O=O.parentElement)"focus"===g.type?this._onFocus(g,O):this._onBlur(g,O)},this._document=o,this._detectionMode=a?.detectionMode||0}monitor(e,t=!1){const n=(0,C.coerceElement)(e);if(!this._platform.isBrowser||1!==n.nodeType)return(0,E.of)(null);const o=(0,d._getShadowRoot)(n)||this._getDocument(),a=this._elementInfo.get(n);if(a)return t&&(a.checkChildren=!0),a.subject;const g={checkChildren:t,subject:new h.x,rootNode:o};return this._elementInfo.set(n,g),this._registerGlobalListeners(g),g.subject}stopMonitoring(e){const t=(0,C.coerceElement)(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){const o=(0,C.coerceElement)(e);o===this._getDocument().activeElement?this._getClosestElementsInfo(o).forEach(([g,j])=>this._originChanged(g,t,j)):(this._setOrigin(t),"function"==typeof o.focus&&o.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused","touch"===t),e.classList.toggle("cdk-keyboard-focused","keyboard"===t),e.classList.toggle("cdk-mouse-focused","mouse"===t),e.classList.toggle("cdk-program-focused","program"===t)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&t,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,t){const n=this._elementInfo.get(t),o=(0,d._getEventTarget)(e);!n||!n.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),n)}_onBlur(e,t){const n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,R),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,R)}),this._rootNodeFocusListenerCount.set(t,n+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,de.R)(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){const t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){const n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,R),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,R),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){const t=[];return this._elementInfo.forEach((n,o)=>{(o===e||n.checkChildren&&o.contains(e))&&t.push([o,n])}),t}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if("mouse"!==n||!t||t===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const o=e.labels;if(o)for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0;return!1}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275inject(r.NgZone),r.\u0275\u0275inject(d.Platform),r.\u0275\u0275inject(ee),r.\u0275\u0275inject(l.DOCUMENT,8),r.\u0275\u0275inject(re,8))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Ne=(()=>{class i{constructor(e,t){this._elementRef=e,this._focusMonitor=t,this._focusOrigin=null,this.cdkFocusChange=new r.EventEmitter}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){const e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,1===e.nodeType&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription&&this._monitorSubscription.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(oe))},i.\u0275dir=r.\u0275\u0275defineDirective({type:i,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]}),i})();const ce="cdk-high-contrast-black-on-white",ae="cdk-high-contrast-white-on-black",B="cdk-high-contrast-active";let ue=(()=>{class i{constructor(e,t){this._platform=e,this._document=t,this._breakpointSubscription=(0,r.inject)(he.BreakpointObserver).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(B,ce,ae),this._hasCheckedHighContrastMode=!0;const t=this.getHighContrastMode();1===t?e.add(B,ce):2===t&&e.add(B,ae)}}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275inject(d.Platform),r.\u0275\u0275inject(l.DOCUMENT))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),we=(()=>{class i{constructor(e){e._applyBodyHighContrastModeCssClasses()}}return i.\u0275fac=function(e){return new(e||i)(r.\u0275\u0275inject(ue))},i.\u0275mod=r.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=r.\u0275\u0275defineInjector({imports:[K.ObserversModule]}),i})()}}]);