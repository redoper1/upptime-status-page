function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,p=!1;function m(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(r>0&&e[n[r]].claim_order<=o?r+1:m(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[i]+1;const a=i+1;n[a]=t,r=Math.max(a,r)}const o=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(i[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function b(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:N(t,s,e[s])}function I(t){return Array.from(t.childNodes)}function R(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,s,r=!1){R(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function k(t,e,n,s){return L(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function O(t,e,n){return k(t,e,n,$)}function H(t,e,n){return k(t,e,n,w)}function C(t,e){return L(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return C(t," ")}function z(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function D(t,e){const n=z(t,"HTML_TAG_START",0),s=z(t,"HTML_TAG_END",n);if(n===s)return new K(void 0,e);R(t);const r=t.splice(n,s-n+1);y(r[0]),y(r[r.length-1]);const o=r.slice(1,r.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(o,e)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e){t.value=null==e?"":e}function G(t,e,n,s){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function B(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function q(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=B();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),y(n)}}function V(t,e){const n=[];let s=0;for(const r of e.childNodes)if(8===r.nodeType){const e=r.textContent.trim();e===`HEAD_${t}_END`?(s-=1,n.push(r)):e===`HEAD_${t}_START`&&(s+=1,n.push(r))}else s>0&&n.push(r);return n}class J{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=w(e.nodeName):this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(y)}}class K extends J{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}}function W(t,e){return new t(e)}function F(t){h=t}function Y(){if(!h)throw new Error("Function called outside component initialization");return h}function X(t){Y().$$.on_mount.push(t)}function Q(t){Y().$$.after_update.push(t)}function Z(t){Y().$$.on_destroy.push(t)}const tt=[],et=[],nt=[],st=[],rt=Promise.resolve();let ot=!1;function it(t){nt.push(t)}const at=new Set;let ct=0;function lt(){const t=h;do{for(;ct<tt.length;){const t=tt[ct];ct++,F(t),ut(t.$$)}for(F(null),tt.length=0,ct=0;et.length;)et.pop()();for(let t=0;t<nt.length;t+=1){const e=nt[t];at.has(e)||(at.add(e),e())}nt.length=0}while(tt.length);for(;st.length;)st.pop()();ot=!1,at.clear(),F(t)}function ut(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}const dt=new Set;let ft;function ht(){ft={r:0,c:[],p:ft}}function pt(){ft.r||r(ft.c),ft=ft.p}function mt(t,e){t&&t.i&&(dt.delete(t),t.i(e))}function gt(t,e,n,s){if(t&&t.o){if(dt.has(t))return;dt.add(t),ft.c.push((()=>{dt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function vt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function bt(t){return"object"==typeof t&&null!==t?t:{}}function yt(t){t&&t.c()}function _t(t,e){t&&t.l(e)}function $t(t,e,s,i){const{fragment:a,after_update:c}=t.$$;a&&a.m(e,s),i||it((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):r(e),t.$$.on_mount=[]})),c.forEach(it)}function wt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){-1===t.$$.dirty[0]&&(tt.push(t),ot||(ot=!0,rt.then(lt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function St(e,n,o,i,a,c,l,u=[-1]){const d=h;F(e);const f=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&Et(e,t)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const t=I(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&mt(e.$$.fragment),$t(e,n.target,n.anchor,n.customElement),p=!1,lt()}F(d)}class xt{$destroy(){wt(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Tt=[];function At(e,n=t){let s;const r=new Set;function o(t){if(i(e,t)&&(e=t,s)){const t=!Tt.length;for(const t of r)t[1](),Tt.push(t,e);if(t){for(let t=0;t<Tt.length;t+=2)Tt[t][0](Tt[t+1]);Tt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||t),i(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Nt={};var Pt={owner:"redoper1",repo:"upptime-status-page",sites:[{name:"Personal website",url:"https://www.davidrychly.cz/"},{name:"Blog",url:"https://blog.davidrychly.cz/"},{name:"Docs",url:"https://docs.davidrychly.cz/"},{name:"VPS",url:"https://vps.davidrychly.cz/"},{name:"Htmlmage API",url:"https://htmlmage.davidrychly.cz/"},{name:"Imagemin API",url:"https://imagemin.davidrychly.cz/"},{name:"Speedtest",url:"https://speedtest.davidrychly.cz/"},{name:"Jitsi",url:"https://jitsi.davidrychly.cz/"},{name:"Activities tracking app",url:"https://activities-tracking-app.davidrychly.cz/login"},{name:"Version check API",url:"https://version-check.davidrychly.cz/"},{name:"Status",url:"https://status.davidrychly.cz/"}],assignees:["redoper1"],"status-website":{cname:"status.davidrychly.cz",logoUrl:"https://davidrychly.cz/favicon/favicon.svg",name:"Status - David Rychlý",introTitle:"**Services status**",introMessage:null,navbar:[{title:"Status",href:"/"},{title:"Website",href:"https://davidrychly.cz"},{title:"GitHub repo",href:"https://github.com/$OWNER/$REPO"}],theme:"dark"},workflowSchedule:{graphs:"0 0 * * *",responseTime:"0 23 * * *",staticSite:"0 1 * * *",summary:"0 0 * * *",updateTemplate:"0 0 * * *",updates:"0 3 * * *",uptime:"*/10 * * * *"},path:"https://status.davidrychly.cz",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function It(t,e,n){const s=t.slice();return s[1]=e[n],s}function Rt(e){let n,s,r,o=Pt["status-website"]&&!Pt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=$("img"),this.h()},l(t){n=O(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=Pt["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(t,e){b(t,n,e)},p:t,d(t){t&&y(n)}}}(),i=Pt["status-website"]&&!Pt["status-website"].hideNavTitle&&function(e){let n,s,r=Pt["status-website"].name+"";return{c(){n=$("div"),s=E(r)},l(t){n=O(t,"DIV",{});var e=I(n);s=C(e,r),e.forEach(y)},m(t,e){b(t,n,e),g(n,s)},p:t,d(t){t&&y(n)}}}();return{c(){n=$("div"),s=$("a"),o&&o.c(),r=S(),i&&i.c(),this.h()},l(t){n=O(t,"DIV",{});var e=I(n);s=O(e,"A",{href:!0,class:!0});var a=I(s);o&&o.l(a),r=U(a),i&&i.l(a),a.forEach(y),e.forEach(y),this.h()},h(){N(s,"href",Pt["status-website"].logoHref||Pt.path),N(s,"class","logo svelte-a08hsz")},m(t,e){b(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(t,e){Pt["status-website"]&&!Pt["status-website"].hideNavLogo&&o.p(t,e),Pt["status-website"]&&!Pt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&y(n),o&&o.d(),i&&i.d()}}}function Lt(t){let e,n,s,r,o,i=t[1].title+"";return{c(){e=$("li"),n=$("a"),s=E(i),o=S(),this.h()},l(t){e=O(t,"LI",{});var r=I(e);n=O(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=I(n);s=C(a,i),a.forEach(y),o=U(r),r.forEach(y),this.h()},h(){N(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",t[1].href.replace("$OWNER",Pt.owner).replace("$REPO",Pt.repo)),N(n,"target",t[1].target||"_self"),N(n,"class","svelte-a08hsz")},m(t,r){b(t,e,r),g(e,n),g(n,s),g(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(t){t&&y(e)}}}function kt(e){let n,s,r,o,i,a=Pt["status-website"]&&Pt["status-website"].logoUrl&&Rt(),c=Pt["status-website"]&&Pt["status-website"].navbar&&function(t){let e,n=Pt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Lt(It(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(1&r){let o;for(n=Pt["status-website"].navbar,o=0;o<n.length;o+=1){const i=It(t,n,o);s[o]?s[o].p(i,r):(s[o]=Lt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&y(e)}}}(e),l=Pt["status-website"]&&Pt["status-website"].navbarGitHub&&!Pt["status-website"].navbar&&function(e){let n,s,r,o=Pt.i18n.navGitHub+"";return{c(){n=$("li"),s=$("a"),r=E(o),this.h()},l(t){n=O(t,"LI",{});var e=I(n);s=O(e,"A",{href:!0,class:!0});var i=I(s);r=C(i,o),i.forEach(y),e.forEach(y),this.h()},h(){N(s,"href",`https://github.com/${Pt.owner}/${Pt.repo}`),N(s,"class","svelte-a08hsz")},m(t,e){b(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&y(n)}}}();return{c(){n=$("nav"),s=$("div"),a&&a.c(),r=S(),o=$("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(t){n=O(t,"NAV",{class:!0});var e=I(n);s=O(e,"DIV",{class:!0});var u=I(s);a&&a.l(u),r=U(u),o=O(u,"UL",{class:!0});var d=I(o);c&&c.l(d),i=U(d),l&&l.l(d),d.forEach(y),u.forEach(y),e.forEach(y),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){b(t,n,e),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){Pt["status-website"]&&Pt["status-website"].logoUrl&&a.p(t,e),Pt["status-website"]&&Pt["status-website"].navbar&&c.p(t,e),Pt["status-website"]&&Pt["status-website"].navbarGitHub&&!Pt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&y(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Ot(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Ht extends xt{constructor(t){super(),St(this,t,Ot,kt,i,{segment:0})}}var Ct={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ut(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function zt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dt(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Ct[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(d,r.index),d=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ut(zt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Dt(Ut(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+zt(r[8])+'" alt="'+zt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+zt(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Dt(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+zt(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Mt(t,e,n){const s=t.slice();return s[3]=e[n],s}function jt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Gt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Bt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Pt.path}/themes/${(Pt["status-website"]||{}).theme||"light"}.css`)},m(t,e){b(t,n,e)},p:t,d(t){t&&y(n)}}}function qt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Pt["status-website"]||{}).themeUrl)},m(t,e){b(t,n,e)},p:t,d(t){t&&y(n)}}}function Vt(e){let n,s;return{c(){n=$("script"),this.h()},l(t){n=O(t,"SCRIPT",{src:!0}),I(n).forEach(y),this.h()},h(){c(n.src,s=e[8].src)||N(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){b(t,n,e)},p:t,d(t){t&&y(n)}}}function Jt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){b(t,n,e)},p:t,d(t){t&&y(n)}}}function Kt(e){let n;return{c(){n=$("meta"),this.h()},l(t){n=O(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){b(t,n,e)},p:t,d(t){t&&y(n)}}}function Wt(e){let n,s,r,o,i,a,c,u,d,f,h,p,m,v,w,E,T,A,P=Dt(Pt.i18n.footer.replace(/\$REPO/,`https://github.com/${Pt.owner}/${Pt.repo}`))+"",R=(Pt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(Pt["status-website"]||{}).customHeadHtml+"";return{c(){n=new K(!1),s=x(),this.h()},l(t){n=D(t,!1),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&y(s),t&&n.d()}}}();let L=((Pt["status-website"]||{}).themeUrl?qt:Bt)(e),k=(Pt["status-website"]||{}).scripts&&function(t){let e,n=(Pt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Vt(Gt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(0&r){let o;for(n=(Pt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Gt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Vt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&y(e)}}}(e),H=(Pt["status-website"]||{}).links&&function(t){let e,n=(Pt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Jt(jt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(0&r){let o;for(n=(Pt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=jt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Jt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&y(e)}}}(e),C=(Pt["status-website"]||{}).metaTags&&function(t){let e,n=(Pt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Kt(Mt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(0&r){let o;for(n=(Pt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Mt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Kt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&y(e)}}}(e),z=Pt["status-website"].css&&function(e){let n,s,r=`<style>${Pt["status-website"].css}</style>`;return{c(){n=new K(!1),s=x(),this.h()},l(t){n=D(t,!1),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&y(s),t&&n.d()}}}(),M=Pt["status-website"].js&&function(e){let n,s,r=`<script>${Pt["status-website"].js}<\/script>`;return{c(){n=new K(!1),s=x(),this.h()},l(t){n=D(t,!1),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&y(s),t&&n.d()}}}(),j=(Pt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(Pt["status-website"]||{}).customBodyHtml+"";return{c(){n=new K(!1),s=x(),this.h()},l(t){n=D(t,!1),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&y(s),t&&n.d()}}}();p=new Ht({props:{segment:e[0]}});const G=e[2].default,B=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(G,e,e[1],null);return{c(){R&&R.c(),n=x(),L.c(),s=$("link"),r=$("link"),o=$("link"),k&&k.c(),i=x(),H&&H.c(),a=x(),C&&C.c(),c=x(),z&&z.c(),u=x(),M&&M.c(),d=x(),f=S(),j&&j.c(),h=S(),yt(p.$$.fragment),m=S(),v=$("main"),B&&B.c(),w=S(),E=$("footer"),T=$("p"),this.h()},l(t){const e=V("svelte-fmspuk",document.head);R&&R.l(e),n=x(),L.l(e),s=O(e,"LINK",{rel:!0,href:!0}),r=O(e,"LINK",{rel:!0,type:!0,href:!0}),o=O(e,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(e),i=x(),H&&H.l(e),a=x(),C&&C.l(e),c=x(),z&&z.l(e),u=x(),M&&M.l(e),d=x(),e.forEach(y),f=U(t),j&&j.l(t),h=U(t),_t(p.$$.fragment,t),m=U(t),v=O(t,"MAIN",{class:!0});var l=I(v);B&&B.l(l),l.forEach(y),w=U(t),E=O(t,"FOOTER",{class:!0});var g=I(E);T=O(g,"P",{}),I(T).forEach(y),g.forEach(y),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${Pt.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(Pt["status-website"]||{}).faviconSvg||(Pt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Pt["status-website"]||{}).favicon||"/logo-192.png"),N(v,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){R&&R.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,a),C&&C.m(document.head,null),g(document.head,c),z&&z.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,d),b(t,f,e),j&&j.m(t,e),b(t,h,e),$t(p,t,e),b(t,m,e),b(t,v,e),B&&B.m(v,null),b(t,w,e),b(t,E,e),g(E,T),T.innerHTML=P,A=!0},p(t,[e]){(Pt["status-website"]||{}).customHeadHtml&&R.p(t,e),L.p(t,e),(Pt["status-website"]||{}).scripts&&k.p(t,e),(Pt["status-website"]||{}).links&&H.p(t,e),(Pt["status-website"]||{}).metaTags&&C.p(t,e),Pt["status-website"].css&&z.p(t,e),Pt["status-website"].js&&M.p(t,e),(Pt["status-website"]||{}).customBodyHtml&&j.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),B&&B.p&&(!A||2&e)&&function(t,e,n,s,r,o){if(r){const i=l(e,n,s,o);t.p(i,r)}}(B,G,t,t[1],A?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(G,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(mt(p.$$.fragment,t),mt(B,t),A=!0)},o(t){gt(p.$$.fragment,t),gt(B,t),A=!1},d(t){R&&R.d(t),y(n),L.d(t),y(s),y(r),y(o),k&&k.d(t),y(i),H&&H.d(t),y(a),C&&C.d(t),y(c),z&&z.d(t),y(u),M&&M.d(t),y(d),t&&y(f),j&&j.d(t),t&&y(h),wt(p,t),t&&y(m),t&&y(v),B&&B.d(t),t&&y(w),t&&y(E)}}}function Ft(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Yt extends xt{constructor(t){super(),St(this,t,Ft,Wt,i,{segment:0})}}function Xt(t){let e,n,s=t[1].stack+"";return{c(){e=$("pre"),n=E(s)},l(t){e=O(t,"PRE",{});var r=I(e);n=C(r,s),r.forEach(y)},m(t,s){b(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&M(n,s)},d(t){t&&y(e)}}}function Qt(e){let n,s,r,o,i,a,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Xt(e);return{c(){s=S(),r=$("h1"),o=E(e[0]),i=S(),a=$("p"),c=E(d),l=S(),f&&f.c(),u=x(),this.h()},l(t){V("svelte-1moakz",document.head).forEach(y),s=U(t),r=O(t,"H1",{class:!0});var n=I(r);o=C(n,e[0]),n.forEach(y),i=U(t),a=O(t,"P",{class:!0});var h=I(a);c=C(h,d),h.forEach(y),l=U(t),f&&f.l(t),u=x(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(t,e){b(t,s,e),b(t,r,e),g(r,o),b(t,i,e),b(t,a,e),g(a,c),b(t,l,e),f&&f.m(t,e),b(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&M(o,t[0]),2&e&&d!==(d=t[1].message+"")&&M(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Xt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&y(s),t&&y(r),t&&y(i),t&&y(a),t&&y(l),f&&f.d(t),t&&y(u)}}}function Zt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class te extends xt{constructor(t){super(),St(this,t,Zt,Qt,i,{status:0,error:1})}}function ee(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=W(i,a())),{c(){n&&yt(n.$$.fragment),s=x()},l(t){n&&_t(n.$$.fragment,t),s=x()},m(t,e){n&&$t(n,t,e),b(t,s,e),r=!0},p(t,e){const r=16&e?vt(o,[bt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ht();const t=n;gt(t.$$.fragment,1,0,(()=>{wt(t,1)})),pt()}i?(n=W(i,a()),yt(n.$$.fragment),mt(n.$$.fragment,1),$t(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&mt(n.$$.fragment,t),r=!0)},o(t){n&&gt(n.$$.fragment,t),r=!1},d(t){t&&y(s),n&&wt(n,t)}}}function ne(t){let e,n;return e=new te({props:{error:t[0],status:t[1]}}),{c(){yt(e.$$.fragment)},l(t){_t(e.$$.fragment,t)},m(t,s){$t(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){gt(e.$$.fragment,t),n=!1},d(t){wt(e,t)}}}function se(t){let e,n,s,r;const o=[ne,ee],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=x()},l(t){n.l(t),s=x()},m(t,n){i[e].m(t,n),b(t,s,n),r=!0},p(t,r){let c=e;e=a(t),e===c?i[e].p(t,r):(ht(),gt(i[c],1,1,(()=>{i[c]=null})),pt(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),mt(n,1),n.m(s.parentNode,s))},i(t){r||(mt(n),r=!0)},o(t){gt(n),r=!1},d(t){i[e].d(t),t&&y(s)}}}function re(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[se]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Yt({props:o}),{c(){yt(n.$$.fragment)},l(t){_t(n.$$.fragment,t)},m(t,e){$t(n,t,e),s=!0},p(t,[e]){const s=12&e?vt(r,[4&e&&{segment:t[2][0]},8&e&&bt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(mt(n.$$.fragment,t),s=!0)},o(t){gt(n.$$.fragment,t),s=!1},d(t){wt(n,t)}}}function oe(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return Q(l),u=Nt,d=s,Y().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,i,a,c,s,l]}class ie extends xt{constructor(t){super(),St(this,t,oe,re,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ae=[],ce=[{js:()=>Promise.all([import("./index.fea4e2d7.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.96db1214.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.d5d22162.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.6da9cce7.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.1e5f791a.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],le=(ue=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ue(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ue(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ue;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function de(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}function fe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let he,pe=1;const me="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ge={};let ve,be;function ye(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function _e(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ve))return null;let e=t.pathname.slice(ve.length);if(""===e&&(e="/"),!ae.some((t=>t.test(e))))for(let n=0;n<le.length;n+=1){const s=le[n],r=s.pattern.exec(e);if(r){const n=ye(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function $e(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=fe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=_e(r);if(o){Se(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),me.pushState({id:he},"",r.href)}}function we(){return{x:pageXOffset,y:pageYOffset}}function Ee(t){if(ge[he]=we(),t.state){const e=_e(new URL(location.href));e?Se(e,t.state.id):location.href=location.href}else!function(t){pe=t}(pe+1),function(t){he=t}(pe),me.replaceState({id:he},"",location.href)}function Se(t,e,n,s){return de(this,void 0,void 0,(function*(){const r=!!e;if(r)he=e;else{const t=we();ge[he]=t,he=e=++pe,ge[he]=n?t:{x:0,y:0}}if(yield be(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ge[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ge[he]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function xe(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Te,Ae=null;function Ne(t){const e=fe(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=_e(new URL(t,xe(document)));if(e)Ae&&t===Ae.href||(Ae={href:t,promise:Ve(e)}),Ae.promise}(e.href)}function Pe(t){clearTimeout(Te),Te=setTimeout((()=>{Ne(t)}),20)}function Ie(t,e={noscroll:!1,replaceState:!1}){const n=_e(new URL(t,xe(document)));if(n){const s=Se(n,null,e.noscroll);return me[e.replaceState?"replaceState":"pushState"]({id:he},"",t),s}return location.href=t,new Promise((()=>{}))}const Re="undefined"!=typeof __SAPPER__&&__SAPPER__;let Le,ke,Oe,He=!1,Ce=[],Ue="{}";const ze={page:function(t){const e=At(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:At(null),session:At(Re&&Re.session)};let De,Me,je;function Ge(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Be(t){return de(this,void 0,void 0,(function*(){Le&&ze.preloading.set(!0);const e=function(t){return Ae&&Ae.href===t.href?Ae.promise:Ve(t)}(t),n=ke={},s=yield e,{redirect:r}=s;if(n===ke)if(r)yield Ie(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield qe(n,e,Ge(e,t.page))}}))}function qe(t,e,n){return de(this,void 0,void 0,(function*(){ze.page.set(n),ze.preloading.set(!1),Le?Le.$set(e):(e.stores={page:{subscribe:ze.page.subscribe},preloading:{subscribe:ze.preloading.subscribe},session:ze.session},e.level0={props:yield Oe},e.notify=ze.page.notify,Le=new ie({target:je,props:e,hydrate:!0})),Ce=t,Ue=JSON.stringify(n.query),He=!0,Me=!1}))}function Ve(t){return de(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Oe){const t=()=>({});Oe=Re.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},De)}let a,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>de(this,void 0,void 0,(function*(){const d=s[a];if(function(t,e,n,s){if(s!==Ue)return!0;const r=Ce[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,d,l,r)&&(u=!0),o.segments[c]=s[a+1],!e)return{segment:d};const f=c++;let h;if(Me||u||!Ce[a]||Ce[a].part!==e.i){u=!1;const{default:s,preload:r}=yield ce[e.i].js();let o;o=He||!Re.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},De):{}:Re.preloaded[a+1],h={component:s,props:o,segment:d,match:l,part:e.i}}else h=Ce[a];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Je,Ke,We;ze.session.subscribe((t=>de(void 0,void 0,void 0,(function*(){if(De=t,!He)return;Me=!0;const e=_e(new URL(location.href)),n=ke={},{redirect:s,props:r,branch:o}=yield Ve(e);n===ke&&(s?yield Ie(s.location,{replaceState:!0}):yield qe(o,r,Ge(r,e.page)))})))),Je={target:document.querySelector("#sapper")},Ke=Je.target,je=Ke,We=Re.baseUrl,ve=We,be=Be,"scrollRestoration"in me&&(me.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{me.scrollRestoration="auto"})),addEventListener("load",(()=>{me.scrollRestoration="manual"})),addEventListener("click",$e),addEventListener("popstate",Ee),addEventListener("touchstart",Ne),addEventListener("mousemove",Pe),Re.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Re;Oe||(Oe=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Oe},level1:{props:{status:o,error:i},component:te},segments:r},c=ye(n);qe([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;me.replaceState({id:pe},"",e);const n=_e(new URL(location.href));if(n)return Se(n,pe,!0,t)}));export{M as A,T as B,r as C,et as D,D as E,c as F,d as G,K as H,G as I,V as J,Dt as K,w as L,H as M,Ie as N,j as O,A as P,e as Q,P as R,xt as S,vt as T,Q as U,Z as V,u as W,bt as X,it as Y,q as Z,S as a,O as b,U as c,I as d,$ as e,y as f,N as g,b as h,St as i,ht as j,pt as k,mt as l,E as m,C as n,X as o,g as p,t as q,Pt as r,i as s,gt as t,x as u,_ as v,yt as w,_t as x,$t as y,wt as z};

import __inject_styles from './inject_styles.803b7e80.js';