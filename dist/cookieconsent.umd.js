var e,t;e=this,t=function(){'use strict';const e={mode:'opt-in',revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},t={t:0,o:0,i:0},n={t:new Event('onFirstConsent'),o:new Event('onConsent'),i:new Event('onChange')},a=e=>{function a(e){return'function'==typeof e}window.dispatchEvent(e),e===n.t&&a(t.t)&&t.t(i.l),e===n.o&&a(t.o)&&t.o(i.l),e===n.i&&a(t.i)&&t.i(i.l,i._)},o={u:0,p:0,v:0,m:0,g:0,h:0,C:0,k:0,T:0,M:0,S:0,A:0,B:0,N:0,D:0,H:0,O:0,V:0,F:0,J:0,j:0,P:0,I:0,G:0,L:0,R:0,U:0,q:0},r=e.cookie,i={X:null,K:'',W:[],Y:null,l:null,Z:null,$:null,ee:null,te:'',ne:!0,ae:!1,oe:!1,re:!1,ie:!1,ce:[],le:!1,de:!0,_:[],se:!1,_e:'',ue:!1,pe:[],ve:[],fe:[],me:[],ge:!1,be:!1,we:!1,ye:[],he:[],Ce:[]},c=(e,t)=>e.indexOf(t),l=(e,t)=>-1!==e.indexOf(t),d=e=>{var t=document.createElement(e);return'button'===e&&s(t,'type',e),t},s=(e,t,n)=>{e.setAttribute(t,n)},_=(e,t)=>{e.appendChild(t)},u=(e,t,n,a)=>{e.addEventListener(t,n,!0===a&&{passive:!0})},p=e=>{if('object'==typeof e)return Object.keys(e)},v=(e,t)=>{e.classList.add(t)},f=(e,t)=>{e.classList.remove(t)},m=()=>{var e=r.expiresAfterDays;return'function'==typeof e?e(i._e):e},g=e=>{var t='custom';return e.accepted.length===i.pe.length?t='all':e.accepted.length===i.fe.length&&(t='necessary'),t},b=(e,t)=>{for(var n='accept-',a=l('show-preferences'),o=l(n+'all'),r=l(n+'necessary'),i=l(n+'custom'),c=0;c<a.length;c++)s(a[c],'aria-haspopup','dialog'),u(a[c],'click',(e=>{e.preventDefault(),t.showPreferences(0)}));for(c=0;c<o.length;c++)u(o[c],'click',(e=>{d(e,'all')}));for(c=0;c<i.length;c++)u(i[c],'click',(e=>{d(e)}));for(c=0;c<r.length;c++)u(r[c],'click',(e=>{d(e,[])}));function l(t){return(e||document).querySelectorAll('a[data-cc="'+t+'"], button[data-cc="'+t+'"]')}function d(e,n){e.preventDefault(),t.accept(n),t.hidePreferences(),t.hide()}},w=()=>{var e=i.pe.filter((e=>!l(i.ve,e)));return{accepted:i.ve,rejected:e}},y='data-cookiecategory',h=t=>{if(e.manageScriptTags){var n=document.querySelectorAll('script[data-cookiecategory]'),a=t||i.l.categories||[],o=(e,t)=>{if(t<e.length){var n=e[t],r=n.getAttribute(y);if(l(a,r)){n.removeAttribute('type'),n.removeAttribute(y);var i=n.getAttribute('data-src');i&&n.removeAttribute('data-src');var c=d('script');if(c.textContent=n.innerHTML,((e,t)=>{for(var n=t.attributes,a=n.length,o=0;o<a;o++){var r=n[o].nodeName;s(e,r,t[r]||t.getAttribute(r))}})(c,n),i?c.src=i:i=n.src,i&&(c.onload=()=>{c.onload=null,o(e,++t)}),n.parentNode.replaceChild(c,n),i)return}o(e,++t)}};o(n,0)}};var C=!1,k=!1;const T=e=>{var t=i.X.guiOptions,n=t&&t.consentModal,a=t&&t.preferencesModal;function r(t,n,a,r,i){var c=a&&a.layout,d=a&&a.position,s=a&&!0===a.flipButtons,_=a&&!1===a.equalWeightButtons,u=c&&c.split(' ')||[],p=d&&d.split(' ')||[],f=u[0],m=u[1],g=p[0],b='pm--'===r?p[0]:p[1],w=f,y=n[f];y||(y=n[i],w=i);var h=l(y.ke,m)&&m,T=l(y.Te,g)?g:y.xe,x=l(y.Me,b)?b:y.Se;v(t,r+w),h&&v(t,r+h),T&&v(t,r+T),x&&v(t,r+x),s&&v(t,r+'flip'),_&&('cm--'===r?(o.N&&v(o.N,'cm__btn--secondary'),o.O&&v(o.O,'cm__btn--secondary')):o.U&&v(o.U,'pm__btn--secondary')),0===e?C=!0:k=!0}if(0===e&&!C&&i.ae){var c=['middle','top','bottom'],d=['left','center','right'],s={box:{ke:['wide','inline'],Te:c,Me:d,xe:'bottom',Se:'right'},cloud:{ke:['inline'],Te:c,Me:d,xe:'bottom',Se:'center'},bar:{ke:['inline'],Te:c.slice(1),Me:[],xe:'bottom',Se:''}};r(o.g,s,n,'cm--','box')}1!==e||k||r(o.V,{box:{ke:[],Te:[],Me:[],xe:'',Se:''},bar:{ke:['wide'],Te:[],Me:['left','right'],xe:'',Se:'left'}},a,'pm--','box')},x=e=>{var t=i.Y.consentModal;if(t){!0===i.X.disablePageInteraction&&v(o.u,'disable--interaction');var n=t.acceptAllBtn,a=t.acceptNecessaryBtn,r=t.showPreferencesBtn,c=t.closeIconLabel,l=t.footer;o.v||(o.v=d('div'),o.g=d('div'),o.h=d('div'),o.C=d('div'),o.M=d('div'),v(o.v,'cm-wrapper'),v(o.g,'cm'),v(o.h,'cm__body'),v(o.C,'cm__texts'),v(o.M,'cm__btns'),s(o.g,'role','dialog'),s(o.g,'aria-modal','true'),s(o.g,'aria-hidden','false'),s(o.g,'aria-labelledby','cm__title'),s(o.g,'aria-describedby','cm__desc'),o.g.style.visibility='hidden',c&&(o.O||(o.O=d('button'),o.O.className='cm__btn cm__btn--close',u(o.O,'click',(()=>{e.hide(),e.accept([])})),_(o.h,o.O)),s(o.O,'aria-label',c)),_(o.h,o.C),(n||a||r)&&_(o.h,o.M),_(o.g,o.h),_(o.v,o.g),_(o.p,o.v));var p=t.title;p&&(o.k||(o.k=d('div'),o.k.className=o.k.id='cm__title',s(o.k,'role','heading'),s(o.k,'aria-level','2'),_(o.C,o.k)),o.k.innerHTML=p);var f=t.description;if(f&&(i.le&&(f=f.replace('{{revisionMessage}}',i.de?'':t.revisionMessage||'')),o.T||(o.T=d('div'),o.T.className=o.T.id='cm__desc',_(o.C,o.T)),o.T.innerHTML=f),n&&(o.B||(o.B=d('button'),v(o.B,'cm__btn'),u(o.B,'click',(()=>{e.hide(),e.accept('all')}))),o.B.innerHTML=n),a&&(o.N||(o.N=d('button'),v(o.N,'cm__btn'),u(o.N,'click',(()=>{e.hide(),e.accept([])}))),o.N.innerHTML=a),r&&(o.D||(o.D=d('button'),o.D.className='cm__btn cm__btn--secondary',u(o.D,'click',(()=>{e.showPreferences()}))),o.D.innerHTML=r),!o.A&&r&&(o.A=d('div'),v(o.A,'cm__btn-group'),_(o.A,o.D),_(o.M,o.A)),o.S||(o.S=d('div'),v(o.S,'cm__btn-group'),a&&_(o.S,o.N),n&&_(o.S,o.B),(n||a)&&_(o.h,o.S),_(o.M,o.S)),l){if(!o.H){var m=d('div'),g=d('div');o.H=d('div'),v(m,'cm__footer'),v(g,'cm__links'),v(o.H,'cm__link-group'),_(g,o.H),_(m,g),_(o.g,m)}o.H.innerHTML=l}i.ae=!0,T(0)}},M=e=>{var t=i.Y.preferencesModal;if(t){var n=t.title,a=t.closeIconLabel,r=t.acceptAllBtn,c=t.acceptNecessaryBtn,m=t.savePreferencesBtn,g=t.sections;if(o.m)o.I=d('div'),v(o.I,'pm__body');else{o.m=d('div'),v(o.m,'pm-wrapper'),o.V=d('div'),o.V.style.visibility='hidden',v(o.V,'pm'),s(o.V,'role','dialog'),s(o.V,'aria-hidden',!0),s(o.V,'aria-modal',!0),u(o.u,'keydown',(t=>{27===(t=t||window.event).keyCode&&e.hidePreferences()}),!0),o.F=d('div'),v(o.F,'pm__header'),o.J=d('div'),v(o.J,'pm__title'),s(o.J,'role','heading'),o.j=d('button'),v(o.j,'pm__close-btn'),s(o.j,'aria-label',t.closeIconLabel||''),u(o.j,'click',(()=>{e.hidePreferences()})),o.P=d('div'),v(o.P,'pm__body'),o.L=d('div'),v(o.L,'pm__footer');var b=d('div');v(b,'pm__btns');var w=d('div'),y=d('div');v(w,'pm__btn-group'),v(y,'pm__btn-group'),_(o.L,y),_(o.L,w),_(o.F,o.J),_(o.F,o.j),_(o.V,o.F),_(o.V,o.P),_(o.V,o.L),_(o.m,o.V),_(o.p,o.m)}n&&(o.J.innerHTML=n,a&&s(o.j,'aria-label',a)),g&&g.forEach((e=>{var t=e.title,n=e.description,a=e.linkedCategory,r=a&&i.ue[a],c=e.cookieTable,m=c&&c.body,g=m&&m.length>0,b=!!r||g,w=d('div');if(v(w,'pm__section'),t){var y=d('div'),h=d(b?'button':'div');if(v(y,'pm__section-title-wrapper'),v(h,'pm__section-title'),h.innerHTML=t,_(y,h),b){var C=a+'-desc';w.className+='--expandable',s(h,'aria-expanded',!1),s(h,'aria-controls',C);var k=d('label'),T=d('input'),x=d('span'),M=d('span'),S=d('span'),A=d('span');T.type='checkbox',v(k,'section__toggle-wrapper'),v(T,'section__toggle'),v(S,'toggle__icon-on'),v(A,'toggle__icon-off'),v(x,'toggle__icon'),v(M,'toggle__label'),s(x,'aria-hidden','true'),T.value=a,M.textContent=t,_(x,S),_(x,A),i.ne?(r.enabled||r.readOnly)&&(T.checked=!0,r.enabled&&!o.I&&i.me.push(a)):l(i.l.categories,a)&&(T.checked=!0),r.readOnly&&(T.disabled=!0),_(k,T),_(k,x),_(k,M),_(y,k)}else s(h,'role','heading'),s(h,'aria-level','3');_(w,y)}if(n){var B=d('div'),N=d('div');if(v(B,'pm__section-desc-wrapper'),v(N,'pm__section-desc'),N.innerHTML=n,_(B,N),b&&(s(B,'aria-hidden','true'),B.id=C,((e,t,n)=>{u(h,'click',(()=>{t.classList.contains('is-expanded')?(f(t,'is-expanded'),s(n,'aria-expanded','false'),s(e,'aria-hidden','true')):(v(t,'is-expanded'),s(n,'aria-expanded','true'),s(e,'aria-hidden','false'))}),!1)})(B,w,h),g)){var D=d('table'),E=d('thead'),H=d('tbody');v(D,'pm__section-table'),v(E,'pm__table-head'),v(H,'pm__table-body');var O=c.headers,V=p(O),F=document.createDocumentFragment(),J=d('tr');s(J,'role','row');for(var j=0;j<V.length;j++){var P=O[V[j]],I=d('th');I.id='cc__row-'+P,s(I,'role','columnheader'),s(I,'scope','col'),v(I,'pm__table-th'),I.innerHTML=P,_(F,I)}_(J,F),_(E,J);var G=document.createDocumentFragment();for(j=0;j<m.length;j++){var L=m[j],R=d('tr');s(R,'role','row'),v(R,'pm__table-tr');for(var U=0;U<V.length;U++){var q=V[U],X=O[q],z=L[q],K=d('td'),Q=d('div');v(K,'pm__table-td'),s(K,'data-column',X),s(K,'headers','cc__row-'+X),Q.insertAdjacentHTML('beforeend',z),_(K,Q),_(R,K)}_(G,R)}_(H,G),_(D,E),_(D,H),_(B,D)}_(w,B)}_(o.P,w),o.I?_(o.I,w):_(o.P,w)})),(r||c)&&(c&&(o.U||(o.U=d('button'),v(o.U,'pm__btn'),_(w,o.U),u(o.U,'click',(()=>{h([])}))),o.U.innerHTML=c),r&&(o.R||(o.R=d('button'),v(o.R,'pm__btn'),_(w,o.R),u(o.R,'click',(()=>{h('all')}))),o.R.innerHTML=r)),m&&(o.q||(o.q=d('button'),o.q.className='pm__btn pm__btn--secondary',_(y,o.q),u(o.q,'click',(()=>{h()}))),o.q.innerHTML=m),o.I&&(o.V.replaceChild(o.I,o.P),o.P=o.I),T(1)}function h(t){e.accept(t),e.hidePreferences(),e.hide()}},S=e=>{var t=p(i.W);return l(t,e)?e:l(t,i.K)?i.K:t[0]},A=(e,t)=>{e&&(i.K=S(e)),i.Y=i.W[i.K],'string'==typeof i.Y?((e,t)=>{var n=new XMLHttpRequest;n.onreadystatechange=()=>{if(4===n.readyState){var e,a=n.status;if(200===a)try{e=JSON.parse(n.responseText)}catch(e){}else n.statusText;t(a,e)}},n.open(e.method,e.path),n.send(e.data)})({method:'GET',path:i.Y},((e,n)=>{200===e&&(i.Y=n,i.W[i.K]=n,t())})):(i.Y=i.W[i.K],t())},B=e=>{var t=r.domain;i.se=!1;var n=D('','all'),a=[t,'.'+t];if('www.'===t.slice(0,4)){var o=t.substring(4);a.push(o,'.'+o)}var d=e?i.pe:i._;d=d.filter((e=>{var t=i.ue[e];return!!t&&!t.readOnly&&!!t.autoClear}));for(var s=0;s<d.length;s++){var _=d[s],u=i.ue[_].autoClear,p=u&&u.cookies||[],v=l(i._,_),f=!c(i.ve,_),m=v&&f;if(e&&f||!e&&m){var g=p.length;!0===u.reloadPage&&m&&(i.se=!0);for(var b=0;b<g;b++){var w=[],y=p[b].name,h=y&&'string'!=typeof y,C=p[b].domain||null,k=p[b].path||!1;if(C&&(a=[C,'.'+C]),h)for(var T=0;T<n.length;T++)y.test(n[T])&&w.push(n[T]);else{var x=c(n,y);x>-1&&w.push(n[x])}w.length>0&&E(w,k,a)}}}},N=(e,t,n)=>{var a,o=encodeURIComponent(t),c=n?(a=i.ee?new Date-i.ee:0,864e5*m()-a):864e5*m(),d=new Date;d.setTime(d.getTime()+c);var s=e+'='+(o||'')+(0!==c?'; expires='+d.toUTCString():'')+'; Path='+r.path+';';s+=' SameSite='+r.sameSite+';',l(window.location.hostname,'.')&&(s+=' Domain='+r.domain+';'),'https:'===window.location.protocol&&(s+=' Secure;'),document.cookie=s,JSON.parse(decodeURIComponent(o))},D=(e,t,n,a)=>{var o;if('one'===t){if((o=(o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)'))?n?o.pop():e:'')&&(e===r.name||a)){try{o=JSON.parse(decodeURIComponent(o))}catch(e){o={}}o=JSON.stringify(o)}}else if('all'===t){var i=document.cookie.split(/;\s*/);o=[];for(var c=0;c<i.length;c++)o.push(i[c].split('=')[0])}return o},E=(e,t,n)=>{for(var a=t||'/',o=0;o<e.length;o++){for(var r=0;r<n.length;r++)document.cookie=e[o]+'=; path='+a+(l(n[r],'.')?'; domain='+n[r]:'')+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';e[o]}},H={accept:(t,o)=>{var c=t||void 0,d=o||[],s=[];if(c)if('object'==typeof c&&'number'==typeof c.length)for(var _=0;_<c.length;_++)l(i.pe,c[_])&&s.push(c[_]);else'string'==typeof c&&('all'===c?s=i.pe.slice():l(i.pe,c)&&s.push(c));else s=(()=>{for(var e=document.querySelectorAll('.section__toggle')||[],t=[],n=0;n<e.length;n++)e[n].checked&&t.push(e[n].value);return t})();if(d.length>=1)for(_=0;_<d.length;_++)s=s.filter((e=>e!==d[_]));for(_=0;_<i.fe.length;_++)l(s,i.fe[_])||s.push(i.fe[_]);i.ve=s,(()=>{i._=i.ve.filter((e=>!l(i.l.categories||[],e))).concat((i.l.categories||[]).filter((e=>!l(i.ve,e))));for(var t=i._.length>0,o=document.querySelectorAll('.section__toggle'),c=0;c<o.length;c++)l(i.ve,o[c].value)?o[c].checked=!0:o[c].checked=!1;!i.ne&&e.autoClearCookies&&t&&B(),i.$||(i.$=new Date),i.te||(i.te=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),i.l={categories:JSON.parse(JSON.stringify(i.ve)),revision:e.revision,data:i.Z,consentTimestamp:i.$.toISOString(),consentId:i.te};var d=!1;(i.ne||t)&&(i.ne&&(i.ne=!1,d=!0),i._e=g(w()),i.ee?i.ee=new Date:i.ee=i.$,i.l.lastConsentTimestamp=i.ee.toISOString(),N(r.name,JSON.stringify(i.l)),h()),d&&(e.autoClearCookies&&B(!0),a(n.t),a(n.o),'opt-in'===e.mode)||(t&&a(n.i),i.se&&window.location.reload())})()},validCookie:e=>''!==D(e,'one',!0),eraseCookies:(e,t,n)=>{var a=[],o=r.domain,i=n?[n,'.'+n]:[o,'.'+o];if('object'==typeof e&&e.length>0)for(var c=0;c<e.length;c++)H.validCookie(e[c])&&a.push(e[c]);else H.validCookie(e)&&a.push(e);E(a,t,i)},updateLanguage:(e,t)=>{if('string'==typeof e){var n=S(e);return(n!==i.K||!0===t)&&(i.K=n,A(i.K,(()=>{i.ae&&(x(H),b(o.Ae,H)),M(H)})),!0)}},getUserPreferences:()=>{var e=!i.ne&&w();return{acceptType:i._e,acceptedCategories:i.ne?[]:e.accepted,rejectedCategories:i.ne?[]:e.rejected}},loadScript:(e,t,n)=>{var a='function'==typeof t;if(document.querySelector('script[src="'+e+'"]'))a&&t();else{var o=d('script');if(n&&n.length>0)for(var r=0;r<n.length;++r)n[r]&&s(o,n[r].name,n[r].value);a&&(o.onload=t),o.src=e,_(document.head,o)}},setCookieData:e=>{var t=e.value,n=!1;if('update'===e.mode){i.Z=H.getCookie('data');var a=typeof i.Z==typeof t;if(a&&'object'==typeof i.Z)for(var o in!i.Z&&(i.Z={}),t)i.Z[o]!==t[o]&&(i.Z[o]=t[o],n=!0);else!a&&i.Z||i.Z===t||(i.Z=t,n=!0)}else i.Z=t,n=!0;return n&&(i.l.data=i.Z,N(r.name,JSON.stringify(i.l),!0)),n},getCookie:(e,t)=>{var n=JSON.parse(D(t||r.name,'one',!0,!0)||'{}');return e?n[e]:n},getConfig:t=>e[t]||i.X[t],updateScripts:()=>{h()},show:(e,t)=>{!0===t&&x(H),i.ae&&setTimeout((()=>{v(o.u,'show--consent'),s(o.g,'aria-hidden','false'),i.oe=!0,setTimeout((()=>{i.be=document.activeElement,i.ce=i.ye}),200)}),e>0?e:t?30:0)},hide:()=>{i.ae&&(f(o.u,'show--consent'),s(o.g,'aria-hidden','true'),i.oe=!1,setTimeout((()=>{i.be.focus(),i.ce=null}),200))},hidePreferences:()=>{f(o.u,'show--preferences'),i.re=!1,s(o.V,'aria-hidden','true'),setTimeout((()=>{i.oe?(i.we&&i.we.focus(),i.ce=i.ye):(i.be&&i.be.focus(),i.ce=null),i.ie=!1}),200)},acceptedCategory:t=>{var n;return n=i.ne&&'opt-in'!==e.mode?i.me:H.getUserPreferences().acceptedCategories,l(n,t)},showPreferences:e=>{setTimeout((()=>{v(o.u,'show--preferences'),s(o.V,'aria-hidden','false'),i.re=!0,setTimeout((()=>{i.oe?i.we=document.activeElement:i.be=document.activeElement,0!==i.he.length&&(i.he[3]?i.he[3].focus():i.he[0].focus(),i.ce=i.he)}),200)}),e>0?e:0)},run:c=>{if(!document.getElementById('cc-main')){if((n=>{i.X=n,i.W=n.language.translations,i.ue=i.X.categories,i.pe=p(i.ue);for(var a=0;a<i.pe.length;a++)!0===i.ue[i.pe[a]].readOnly&&i.fe.push(i.pe[a]);'boolean'==typeof n.autoShow&&(e.autoShow=n.autoShow);var c=n.cookie;if(c&&'object'==typeof c){var l=c.name,d=c.domain,s=c.path,_=c.sameSite,u=c.expiresAfterDays;l&&(r.name=l),d&&(r.domain=d),s&&(r.path=s),_&&(r.sameSite=_),u&&(r.expiresAfterDays=u)}t.t=n.onFirstConsent,t.o=n.onConsent,t.i=n.onChange;var v=n.mode,f=n.revision,m=n.autoClearCookies,g=n.manageScriptTags,b=n.hideFromBots;'opt-out'===v&&(e.mode=v),'number'==typeof f&&(f>-1&&(e.revision=f),i.le=!0),'boolean'==typeof m&&(e.autoClearCookies=m),'boolean'==typeof g&&(e.manageScriptTags=g),!1===b&&(e.hideFromBots=!1),!0===e.hideFromBots&&(i.ge=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),e.autoClearCookies,i.le,e.manageScriptTags,i.K=function(){var e,t=i.X.language.autoDetect;if(t){if('browser'===t)return S(((e=navigator.language||navigator.browserLanguage).length>2&&(e=e[0]+e[1]),e.toLowerCase()));if('document'===t)return S(document.documentElement.lang)}return S(i.X.language.default)}(),i.Y=i.W[i.K],i.K,o.u=document.documentElement})(c),i.ge)return;i.l=JSON.parse(D(r.name,'one',!0)||'{}'),i.te=i.l.consentId;var l=void 0!==i.te;i.$=i.l.consentTimestamp,i.$&&(i.$=new Date(i.$)),i.ee=i.l.lastConsentTimestamp,i.ee&&(i.ee=new Date(i.ee));var s=i.l.data;i.Z=void 0!==s?s:null,i.le&&l&&i.l.revision!==e.revision&&(i.de=!1),i.ae=i.ne=!(l&&i.de&&i.$&&i.ee&&i.te),i.ne,i.ne||(i.ve=i.l.categories,i._e=g(w())),A(null,(()=>{(e=>{o.p=d('div'),o.p.id='cc-main',o.p.style.position='fixed',o.p.style.zIndex='1000000',i.ae&&x(e),M(e),_(i.X.root||document.body,o.p)})(H),(()=>{var e=['[href]','button','input','details','[tabindex="0"]'];function t(t,n){var a=!1,o=!1;try{for(var r,i=t.querySelectorAll(e.join(':not([tabindex="-1"]), ')),c=i.length,l=0;l<c;)r=i[l].getAttribute('data-focus'),o||'1'!==r?'0'===r&&(a=i[l],o||'0'===i[l+1].getAttribute('data-focus')||(o=i[l+1])):o=i[l],l++}catch(n){return t.querySelectorAll(e.join(', '))}n[0]=i[0],n[1]=i[i.length-1],n[2]=a,n[3]=o}t(o.V,i.he),i.ae&&t(o.g,i.ye)})(),b(null,H),e.autoShow&&i.ae&&H.show(),setTimeout((()=>{v(o.p,'c--anim')}),100),setTimeout((()=>{(e=>{var t=!1,n=!1;u(document,'keydown',(e=>{'Tab'===(e=e||window.event).key&&(i.ce&&(e.shiftKey?document.activeElement===i.ce[0]&&(i.ce[1].focus(),e.preventDefault()):document.activeElement===i.ce[1]&&(i.ce[0].focus(),e.preventDefault()),n||i.ie||(n=!0,!t&&e.preventDefault(),e.shiftKey?i.ce[3]?i.ce[2]?i.ce[2].focus():i.ce[0].focus():i.ce[1].focus():i.ce[3]?i.ce[3].focus():i.ce[0].focus())),!n&&(t=!0))})),document.contains&&u(o.p,'click',(t=>{t=t||window.event,i.re?o.V.contains(t.target)?i.ie=!0:(e.hidePreferences(0),i.ie=!1):i.oe&&o.g.contains(t.target)&&(i.ie=!0)}),!0)})(H)}),100),i.ne?'opt-out'===e.mode&&(e.mode,i.me,h(i.me)):(h(),a(n.o))}))}}};return{init:()=>(r.domain=window.location.hostname,H)}},'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):(e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent=t();