(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,i="millisecond",a="second",n="minute",s="hour",r="day",d="week",o="month",c="quarter",f="year",l="date",b="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"}},m=function(e,t,i){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(i)+e},v={s:m,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),a=Math.floor(i/60),n=i%60;return(t<=0?"+":"-")+m(a,2,"0")+":"+m(n,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var a=12*(i.year()-t.year())+(i.month()-t.month()),n=t.clone().add(a,o),s=i-n<0,r=t.clone().add(a+(s?-1:1),o);return+(-(a+(i-n)/(s?n-r:r-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:f,w:d,d:r,D:l,h:s,m:n,s:a,ms:i,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",_={};_[y]=h;var g=function(e){return e instanceof w},$=function e(t,i,a){var n;if(!t)return y;if("string"==typeof t){var s=t.toLowerCase();_[s]&&(n=s),i&&(_[s]=i,n=s);var r=t.split("-");if(!n&&r.length>1)return e(r[0])}else{var d=t.name;_[d]=t,n=d}return!a&&n&&(y=n),n||!a&&y},T=function(e,t){if(g(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new w(i)},M=v;M.l=$,M.i=g,M.w=function(e,t){return T(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(p);if(a){var n=a[2]-1||0,s=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)):new Date(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===b)},m.isSame=function(e,t){var i=T(e);return this.startOf(t)<=i&&i<=this.endOf(t)},m.isAfter=function(e,t){return T(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<T(e)},m.$g=function(e,t,i){return M.u(e)?this[t]:this.set(i,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var i=this,c=!!M.u(t)||t,b=M.p(e),p=function(e,t){var a=M.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return c?a:a.endOf(r)},u=function(e,t){return M.w(i.toDate()[e].apply(i.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},h=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(b){case f:return c?p(1,0):p(31,11);case o:return c?p(1,m):p(0,m+1);case d:var _=this.$locale().weekStart||0,g=(h<_?h+7:h)-_;return p(c?v-g:v+(6-g),m);case r:case l:return u(y+"Hours",0);case s:return u(y+"Minutes",1);case n:return u(y+"Seconds",2);case a:return u(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var d,c=M.p(e),b="set"+(this.$u?"UTC":""),p=(d={},d[r]=b+"Date",d[l]=b+"Date",d[o]=b+"Month",d[f]=b+"FullYear",d[s]=b+"Hours",d[n]=b+"Minutes",d[a]=b+"Seconds",d[i]=b+"Milliseconds",d)[c],u=c===r?this.$D+(t-this.$W):t;if(c===o||c===f){var h=this.clone().set(l,1);h.$d[p](u),h.init(),this.$d=h.set(l,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](u);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[M.p(e)]()},m.add=function(i,c){var l,b=this;i=Number(i);var p=M.p(c),u=function(e){var t=T(b);return M.w(t.date(t.date()+Math.round(e*i)),b)};if(p===o)return this.set(o,this.$M+i);if(p===f)return this.set(f,this.$y+i);if(p===r)return u(1);if(p===d)return u(7);var h=(l={},l[n]=e,l[s]=t,l[a]=1e3,l)[p]||1,m=this.$d.getTime()+i*h;return M.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||b;var a=e||"YYYY-MM-DDTHH:mm:ssZ",n=M.z(this),s=this.$H,r=this.$m,d=this.$M,o=i.weekdays,c=i.months,f=function(e,i,n,s){return e&&(e[i]||e(t,a))||n[i].slice(0,s)},l=function(e){return M.s(s%12||12,e,"0")},p=i.meridiem||function(e,t,i){var a=e<12?"AM":"PM";return i?a.toLowerCase():a},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:d+1,MM:M.s(d+1,2,"0"),MMM:f(i.monthsShort,d,c,3),MMMM:f(c,d),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:M.s(s,2,"0"),h:l(1),hh:l(2),a:p(s,r,!0),A:p(s,r,!1),m:String(r),mm:M.s(r,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:n};return a.replace(u,(function(e,t){return t||h[e]||n.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(i,l,b){var p,u=M.p(l),h=T(i),m=(h.utcOffset()-this.utcOffset())*e,v=this-h,y=M.m(this,h);return y=(p={},p[f]=y/12,p[o]=y,p[c]=y/3,p[d]=(v-m)/6048e5,p[r]=(v-m)/864e5,p[s]=v/t,p[n]=v/e,p[a]=v/1e3,p)[u]||v,b?y:M.a(y)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return _[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),a=$(e,t,!0);return a&&(i.$L=a),i},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),D=w.prototype;return T.prototype=D,[["$ms",i],["$s",a],["$m",n],["$H",s],["$W",r],["$M",o],["$y",f],["$D",l]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),T.extend=function(e,t){return e.$i||(e(t,w,T),e.$i=!0),T},T.locale=$,T.isDayjs=g,T.unix=function(e){return T(1e3*e)},T.en=_[y],T.Ls=_,T.p={},T}()}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,i="beforeend"){t.insertAdjacentElement(i,e.getElement())}var a=i(484),n=i.n(a);function s(e){return e[0].toUpperCase()+e.slice(1)}const r=["everything","future","present","past"],d=["day","event","time","price","offers"],o=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];class c{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class f{getTemplate(){return`\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      ${d.map((e=>function(e){return`\n    <div class="trip-sort__item  trip-sort__item--${e}">\n      <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" checked>\n      <label class="trip-sort__btn" for="sort-${e}">${s(e)}</label>\n    </div>`}(e))).join("")}\n    </form>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class l{constructor({point:e,allOffers:t,pointDestination:i,allDestination:a}){this.point=e,this.allOffers=t,this.pointDestination=i,this.allDestination=a}getTemplate(){return function(e,t,i,a){const{basePrice:n,type:r}=e,d=r[0].toUpperCase()+r.slice(1,r.length),{name:c,description:f}=i,l=t.offers.map((i=>{const a=e.offers.includes(i.id)?"checked":"";return function(e,t,i,a){return`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}" ${a}}>\n      <label class="event__offer-label" for="event-offer-${e}-1">\n        <span class="event__offer-title">${s(t)}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${i}</span>\n      </label>\n    </div>\n  `}(t.type,i.title,i.price,a)})).join(""),b=a.map((e=>`<option value="${e.name}"></option>`)).join(""),p=o.map((e=>function(e,t){return`\n    <div class="event__type-item">\n      <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${t}>\n      <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${s(e)}</label>\n    </div>\n  `}(e,e===d?"checked":""))).join("");return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${r}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${p}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${d}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${c}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${b}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=${n}>\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              ${l}\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${f}</p>\n          </section>\n        </section>\n      </form>\n    </li>`}(this.point,this.allOffers,this.pointDestination,this.allDestination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class b{constructor({point:e,offers:t,destination:i}){this.point=e,this.offers=t,this.destination=i}getTemplate(){return function(e,t,i){const{basePrice:a,type:s,isFavorite:r,dateFrom:d}=e,o=(c=d)?n()(c).format("MMM D"):"";var c;const f=s[0].toUpperCase()+s.slice(1,s.length),l=t.map((e=>`\n    <li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </li>\n  `)).join(""),b=r?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn";return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">${o}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${s}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${f} ${i.name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n          </p>\n          <p class="event__duration">30M</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${a}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${l}\n        </ul>\n        <button class="${b}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`}(this.point,this.offers,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const p=[{id:"a6263f1b-64de-45ae-93f2-275ebd566439",basePrice:1077,dateFrom:"2024-08-30T13:04:10.038Z",dateTo:"2024-08-31T03:33:10.038Z",destination:"1cf86b06-e5d8-4fb0-9084-dff6faaf6d18",isFavorite:!1,offers:[],type:"flight"},{id:"33fb41a4-9a68-4fc1-905a-1accd77157a3",basePrice:5515,dateFrom:"2024-09-01T14:08:10.038Z",dateTo:"2024-09-02T21:03:10.038Z",destination:"733a7d11-615f-4421-b548-7ad7832b79c1",isFavorite:!1,offers:[],type:"sightseeing"},{id:"d7c4bc49-c593-4cc2-91d9-80e8c8a0d0eb",basePrice:3262,dateFrom:"2024-09-04T14:21:10.038Z",dateTo:"2024-09-06T00:08:10.038Z",destination:"1cf86b06-e5d8-4fb0-9084-dff6faaf6d18",isFavorite:!0,offers:[],type:"bus"},{id:"5a493b2f-9521-40e3-b0c0-15f688482a27",basePrice:2514,dateFrom:"2024-09-07T05:55:10.038Z",dateTo:"2024-09-08T09:37:10.038Z",destination:"b4e50dbd-9525-48cd-a47f-67cc08025912",isFavorite:!0,offers:["76e2af55-252a-4035-9732-0d2ff2b49db2"],type:"restaurant"},{id:"810ce458-278a-44ef-9ef5-6d1c628b3a23",basePrice:8145,dateFrom:"2024-09-09T03:03:10.038Z",dateTo:"2024-09-10T05:06:10.038Z",destination:"e9d6f17b-c3f3-4445-b98e-74bdeaee2e9b",isFavorite:!0,offers:["cbab2ac1-f371-40c5-b00e-cd6afb26a547","1705434e-2ad5-4276-8048-25441ece631f"],type:"flight"},{id:"d5997906-d612-4346-8e0c-4b993381cc51",basePrice:9825,dateFrom:"2024-09-11T00:55:10.038Z",dateTo:"2024-09-11T22:00:10.038Z",destination:"1cf86b06-e5d8-4fb0-9084-dff6faaf6d18",isFavorite:!0,offers:["943c13cf-4dcb-4f84-8394-8acd2b2e67ba","76e2af55-252a-4035-9732-0d2ff2b49db2"],type:"restaurant"},{id:"e1a90be4-16e8-46d1-8e4c-c4ca91ecdf9c",basePrice:5428,dateFrom:"2024-09-13T01:19:10.038Z",dateTo:"2024-09-14T04:02:10.038Z",destination:"8cbb6d07-3758-40a9-b48d-973d8f07e6cd",isFavorite:!0,offers:["77a26089-c3ce-4f8d-9b49-70c5197ea02e","7275cbad-122b-4b17-a0ea-6d960eef2b97","b62080b2-42f6-43a7-9dfd-f749ce32a40e","55eaf254-ea26-49f5-b708-02d562f2ff50","dfb2196a-3d0f-4cf3-8e28-2e9372d12e7b"],type:"check-in"},{id:"afd44e14-31b1-4642-9297-b3f10bcc4b0d",basePrice:1281,dateFrom:"2024-09-15T02:35:10.038Z",dateTo:"2024-09-16T10:05:10.038Z",destination:"e9d6f17b-c3f3-4445-b98e-74bdeaee2e9b",isFavorite:!1,offers:["943c13cf-4dcb-4f84-8394-8acd2b2e67ba","76e2af55-252a-4035-9732-0d2ff2b49db2"],type:"restaurant"},{id:"75139210-c3dc-4d4b-8fff-c5eeb1a0f6a4",basePrice:7066,dateFrom:"2024-09-17T17:34:10.038Z",dateTo:"2024-09-19T17:19:10.038Z",destination:"8cbb6d07-3758-40a9-b48d-973d8f07e6cd",isFavorite:!1,offers:["ee39cecf-bd06-40c3-8daa-bef799ca4f59","2c9898c7-b1e9-44ad-be51-e9ce28d01120","7bef7ef8-223c-4945-9f9d-daac85eabfd9","9b2abd8a-cded-4e53-b13f-8a7c24a61d93","cbab2ac1-f371-40c5-b00e-cd6afb26a547","1705434e-2ad5-4276-8048-25441ece631f"],type:"flight"},{id:"69d84615-c0a5-4793-8be1-766da05e5afd",basePrice:8962,dateFrom:"2024-09-21T14:58:10.038Z",dateTo:"2024-09-23T14:38:10.038Z",destination:"f3ce1e9f-d82c-4ebd-b93d-15f48e2baadb",isFavorite:!1,offers:["2c9898c7-b1e9-44ad-be51-e9ce28d01120","7bef7ef8-223c-4945-9f9d-daac85eabfd9","9b2abd8a-cded-4e53-b13f-8a7c24a61d93","cbab2ac1-f371-40c5-b00e-cd6afb26a547","1705434e-2ad5-4276-8048-25441ece631f"],type:"flight"},{id:"c3c45137-eacb-4422-8c99-236879713413",basePrice:9155,dateFrom:"2024-09-24T06:48:10.038Z",dateTo:"2024-09-25T00:39:10.038Z",destination:"e385a3ce-2e95-4262-989f-51799f504408",isFavorite:!0,offers:["76e2af55-252a-4035-9732-0d2ff2b49db2"],type:"restaurant"},{id:"6ddd61bd-86fc-4682-a6d1-e84007f09a3c",basePrice:8459,dateFrom:"2024-09-26T20:26:10.038Z",dateTo:"2024-09-27T08:47:10.038Z",destination:"8cbb6d07-3758-40a9-b48d-973d8f07e6cd",isFavorite:!0,offers:["87b6c88d-99d6-46c7-aeaa-348607d5f870","3115fd86-e4ff-40a5-8ff8-0ba4bd397a1e"],type:"ship"},{id:"7fdbd08b-fdee-427d-a2dd-369d1ed92181",basePrice:4948,dateFrom:"2024-09-28T23:56:10.038Z",dateTo:"2024-09-30T11:47:10.038Z",destination:"e385a3ce-2e95-4262-989f-51799f504408",isFavorite:!0,offers:["c59b78ac-d5fb-4f88-8034-ceaae508d2e4"],type:"taxi"},{id:"783e2a90-15e2-4b5c-a13f-834ad1d53794",basePrice:6834,dateFrom:"2024-10-01T23:18:10.038Z",dateTo:"2024-10-02T19:28:10.038Z",destination:"8cbb6d07-3758-40a9-b48d-973d8f07e6cd",isFavorite:!0,offers:["cbab2ac1-f371-40c5-b00e-cd6afb26a547","1705434e-2ad5-4276-8048-25441ece631f"],type:"flight"},{id:"f1e189b2-069d-4689-bda0-101a81e8e2ab",basePrice:7263,dateFrom:"2024-10-03T23:36:10.038Z",dateTo:"2024-10-04T12:34:10.038Z",destination:"e9d6f17b-c3f3-4445-b98e-74bdeaee2e9b",isFavorite:!1,offers:[],type:"taxi"},{id:"4b9bfaa5-45c6-4880-b200-856a42c807d4",basePrice:6120,dateFrom:"2024-10-06T04:20:10.038Z",dateTo:"2024-10-07T15:45:10.038Z",destination:"e9d6f17b-c3f3-4445-b98e-74bdeaee2e9b",isFavorite:!1,offers:["76e2af55-252a-4035-9732-0d2ff2b49db2"],type:"restaurant"},{id:"c2b3ebac-324a-4cb9-b569-99263b22b2ed",basePrice:2388,dateFrom:"2024-10-09T03:31:10.038Z",dateTo:"2024-10-09T23:42:10.038Z",destination:"e3e9c36e-3116-4046-bf6e-ba3d2a55b22d",isFavorite:!1,offers:["77a26089-c3ce-4f8d-9b49-70c5197ea02e","7275cbad-122b-4b17-a0ea-6d960eef2b97","b62080b2-42f6-43a7-9dfd-f749ce32a40e","55eaf254-ea26-49f5-b708-02d562f2ff50","dfb2196a-3d0f-4cf3-8e28-2e9372d12e7b"],type:"check-in"},{id:"0d699578-3840-45ff-aaaf-d0fbb7582511",basePrice:7952,dateFrom:"2024-10-10T15:12:10.038Z",dateTo:"2024-10-12T14:57:10.038Z",destination:"f3ce1e9f-d82c-4ebd-b93d-15f48e2baadb",isFavorite:!1,offers:["9a040cfd-14fe-4967-9a12-389ff2a98683","9043c8fd-9f4a-4f9e-b97c-e854e8e7daef","19ef9851-caa9-4530-a8fe-dc03e7b0485a","87b6c88d-99d6-46c7-aeaa-348607d5f870","3115fd86-e4ff-40a5-8ff8-0ba4bd397a1e"],type:"ship"},{id:"87c9f6f9-2d51-4ad0-8ea7-5db3b3d64bbe",basePrice:4888,dateFrom:"2024-10-14T02:07:10.038Z",dateTo:"2024-10-15T14:13:10.038Z",destination:"2c5a64ff-3d19-4961-8126-85fad7240df8",isFavorite:!0,offers:["9043c8fd-9f4a-4f9e-b97c-e854e8e7daef","19ef9851-caa9-4530-a8fe-dc03e7b0485a","87b6c88d-99d6-46c7-aeaa-348607d5f870","3115fd86-e4ff-40a5-8ff8-0ba4bd397a1e"],type:"ship"},{id:"c4d9eb6d-d606-48dd-b347-1262d14720fa",basePrice:5615,dateFrom:"2024-10-17T13:07:10.038Z",dateTo:"2024-10-19T01:03:10.038Z",destination:"2c5a64ff-3d19-4961-8126-85fad7240df8",isFavorite:!0,offers:["6147bc88-8de5-48af-a832-bfe828f81dd0","575ef478-35fb-404b-bc85-ef9bfd87ff2a"],type:"bus"},{id:"d6b5d16f-13b3-4d66-90b5-7412daa71e1e",basePrice:4601,dateFrom:"2024-10-20T08:01:10.038Z",dateTo:"2024-10-21T02:16:10.038Z",destination:"e9d6f17b-c3f3-4445-b98e-74bdeaee2e9b",isFavorite:!0,offers:["943c13cf-4dcb-4f84-8394-8acd2b2e67ba","76e2af55-252a-4035-9732-0d2ff2b49db2"],type:"restaurant"},{id:"b769d499-303c-41e6-a70a-67a206836f87",basePrice:3519,dateFrom:"2024-10-23T01:06:10.038Z",dateTo:"2024-10-23T11:33:10.038Z",destination:"e385a3ce-2e95-4262-989f-51799f504408",isFavorite:!0,offers:["095fb1bc-707a-436e-beae-04449d3acb07","6147bc88-8de5-48af-a832-bfe828f81dd0","575ef478-35fb-404b-bc85-ef9bfd87ff2a"],type:"bus"},{id:"39d7512d-6a4a-4142-8ac0-8f0eae7f1b20",basePrice:3848,dateFrom:"2024-10-25T11:41:10.038Z",dateTo:"2024-10-25T22:04:10.038Z",destination:"1cf86b06-e5d8-4fb0-9084-dff6faaf6d18",isFavorite:!0,offers:[],type:"restaurant"},{id:"8bd1eac0-549d-4bff-8c5b-2a711cd36967",basePrice:2759,dateFrom:"2024-10-26T17:05:10.038Z",dateTo:"2024-10-27T01:09:10.038Z",destination:"8cbb6d07-3758-40a9-b48d-973d8f07e6cd",isFavorite:!0,offers:["7275cbad-122b-4b17-a0ea-6d960eef2b97","b62080b2-42f6-43a7-9dfd-f749ce32a40e","55eaf254-ea26-49f5-b708-02d562f2ff50","dfb2196a-3d0f-4cf3-8e28-2e9372d12e7b"],type:"check-in"},{id:"e7fca5e0-00e2-489f-8037-72812566812b",basePrice:6055,dateFrom:"2024-10-27T12:53:10.038Z",dateTo:"2024-10-28T12:19:10.038Z",destination:"1cf86b06-e5d8-4fb0-9084-dff6faaf6d18",isFavorite:!0,offers:["3115fd86-e4ff-40a5-8ff8-0ba4bd397a1e"],type:"ship"}];function u(){return(e=p)[Math.floor(Math.random()*e.length)];var e}const h=[{id:"1cf86b06-e5d8-4fb0-9084-dff6faaf6d18",description:"Den Haag - for those who value comfort and coziness",name:"Den Haag",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Den Haag a perfect place to stay with a family"},{src:"https://24.objects.htmlacademy.pro/static/destinations/18.jpg",description:"Den Haag a perfect place to stay with a family"},{src:"https://24.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Den Haag famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Den Haag is a beautiful city"}]},{id:"e385a3ce-2e95-4262-989f-51799f504408",description:"Madrid - with a beautiful old town",name:"Madrid",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/15.jpg",description:"Madrid is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/15.jpg",description:"Madrid full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://24.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Madrid for those who value comfort and coziness"},{src:"https://24.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Madrid with crowded streets"},{src:"https://24.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Madrid famous for its crowded street markets with the best street food in Asia"}]},{id:"8cbb6d07-3758-40a9-b48d-973d8f07e6cd",description:"Hiroshima - for those who value comfort and coziness",name:"Hiroshima",pictures:[]},{id:"e6ca0dad-5322-439f-a793-4e56e4b8458a",description:"Rome - a true asian pearl",name:"Rome",pictures:[]},{id:"733a7d11-615f-4421-b548-7ad7832b79c1",description:"Rotterdam - middle-eastern paradise",name:"Rotterdam",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Rotterdam with an embankment of a mighty river as a centre of attraction"},{src:"https://24.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Rotterdam in a middle of Europe"},{src:"https://24.objects.htmlacademy.pro/static/destinations/13.jpg",description:"Rotterdam full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://24.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Rotterdam full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"2c5a64ff-3d19-4961-8126-85fad7240df8",description:"",name:"Barcelona",pictures:[]},{id:"b4e50dbd-9525-48cd-a47f-67cc08025912",description:"Nagasaki - a true asian pearl",name:"Nagasaki",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Nagasaki a true asian pearl"},{src:"https://24.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Nagasaki a true asian pearl"},{src:"https://24.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Nagasaki for those who value comfort and coziness"},{src:"https://24.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Nagasaki famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/7.jpg",description:"Nagasaki full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"f3ce1e9f-d82c-4ebd-b93d-15f48e2baadb",description:"Amsterdam - famous for its crowded street markets with the best street food in Asia",name:"Amsterdam",pictures:[]},{id:"e9d6f17b-c3f3-4445-b98e-74bdeaee2e9b",description:"Paris - a perfect place to stay with a family",name:"Paris",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Paris is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Paris in a middle of Europe"},{src:"https://24.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Paris full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"e3e9c36e-3116-4046-bf6e-ba3d2a55b22d",description:"Valencia - for those who value comfort and coziness",name:"Valencia",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Valencia full of of cozy canteens where you can try the best coffee in the Middle East"}]}],m=[{type:"taxi",offers:[{id:"605b2d65-a231-4ed8-8823-77adc29fd26a",title:"Upgrade to a business class",price:56},{id:"09fa24e8-b682-4d11-a1a4-4b291278425d",title:"Choose the radio station",price:128},{id:"b89150ae-06b9-43c7-a32f-a2f209b63723",title:"Choose temperature",price:87},{id:"6a6b9c37-813e-4dd2-8c1e-f166cea2aa24",title:"Drive quickly, I'm in a hurry",price:155},{id:"c59b78ac-d5fb-4f88-8034-ceaae508d2e4",title:"Drive slowly",price:66}]},{type:"bus",offers:[{id:"095fb1bc-707a-436e-beae-04449d3acb07",title:"Infotainment system",price:71},{id:"6147bc88-8de5-48af-a832-bfe828f81dd0",title:"Order meal",price:195},{id:"575ef478-35fb-404b-bc85-ef9bfd87ff2a",title:"Choose seats",price:45}]},{type:"train",offers:[{id:"1b737f5d-522d-460c-9e94-11398dfc9e3d",title:"Book a taxi at the arrival point",price:93},{id:"f1b216c3-ba92-4856-b31a-d960607de977",title:"Order a breakfast",price:34},{id:"1714f4b4-1bca-4cb0-9302-f5855980eefe",title:"Wake up at a certain time",price:117}]},{type:"flight",offers:[{id:"ee39cecf-bd06-40c3-8daa-bef799ca4f59",title:"Choose meal",price:154},{id:"2c9898c7-b1e9-44ad-be51-e9ce28d01120",title:"Choose seats",price:120},{id:"7bef7ef8-223c-4945-9f9d-daac85eabfd9",title:"Upgrade to comfort class",price:94},{id:"9b2abd8a-cded-4e53-b13f-8a7c24a61d93",title:"Upgrade to business class",price:157},{id:"cbab2ac1-f371-40c5-b00e-cd6afb26a547",title:"Add luggage",price:168},{id:"1705434e-2ad5-4276-8048-25441ece631f",title:"Business lounge",price:37}]},{type:"check-in",offers:[{id:"77a26089-c3ce-4f8d-9b49-70c5197ea02e",title:"Choose the time of check-in",price:116},{id:"7275cbad-122b-4b17-a0ea-6d960eef2b97",title:"Choose the time of check-out",price:92},{id:"b62080b2-42f6-43a7-9dfd-f749ce32a40e",title:"Add breakfast",price:169},{id:"55eaf254-ea26-49f5-b708-02d562f2ff50",title:"Laundry",price:105},{id:"dfb2196a-3d0f-4cf3-8e28-2e9372d12e7b",title:"Order a meal from the restaurant",price:124}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"83dcb532-a0f9-49ea-bbc7-55b48da83f4d",title:"Choose meal",price:160},{id:"9a040cfd-14fe-4967-9a12-389ff2a98683",title:"Choose seats",price:172},{id:"9043c8fd-9f4a-4f9e-b97c-e854e8e7daef",title:"Upgrade to comfort class",price:123},{id:"19ef9851-caa9-4530-a8fe-dc03e7b0485a",title:"Upgrade to business class",price:143},{id:"87b6c88d-99d6-46c7-aeaa-348607d5f870",title:"Add luggage",price:88},{id:"3115fd86-e4ff-40a5-8ff8-0ba4bd397a1e",title:"Business lounge",price:127}]},{type:"drive",offers:[{id:"5cceca48-e7cc-45f8-97f6-b552629f2d0a",title:"With automatic transmission",price:109},{id:"f44bd763-6d68-4aa0-a694-b5adebc08565",title:"With air conditioning",price:193}]},{type:"restaurant",offers:[{id:"943c13cf-4dcb-4f84-8394-8acd2b2e67ba",title:"Choose live music",price:138},{id:"76e2af55-252a-4035-9732-0d2ff2b49db2",title:"Choose VIP area",price:90}]}],v=document.querySelector(".page-header"),y=v.querySelector(".trip-main"),_=v.querySelector(".trip-controls__filters"),g=document.querySelector(".page-main").querySelector(".trip-events"),$=new class{points=Array.from({length:4},u);destinations=h;offers=m;getPoints(){return this.points}getDestinations(){return this.destinations}getOffers(){return this.offers}getDestinationsById(e){return this.getDestinations().find((t=>t.id===e))}getOffersByType(e){return this.getOffers().find((t=>t.type===e))}getOffersById(e,t){return this.getOffersByType(e).offers.filter((e=>t.find((t=>e.id===t))))}},T=new class{eventsListComponent=new c;constructor({container:e,pointsModel:t}){this.eventsListContainer=e,this.pointsModel=t}init(){this.eventsListPoints=[...this.pointsModel.getPoints()],t(this.eventsListComponent,this.eventsListContainer),t(new f,this.eventsListComponent.getElement()),t(new l({point:this.eventsListPoints[0],allDestination:this.pointsModel.getDestinations(),allOffers:this.pointsModel.getOffersByType(this.eventsListPoints[0].type),pointDestination:this.pointsModel.getDestinationsById(this.eventsListPoints[0].destination)}),this.eventsListComponent.getElement());for(let e=1;e<this.eventsListPoints.length;e++)t(new b({point:this.eventsListPoints[e],offers:[...this.pointsModel.getOffersById(this.eventsListPoints[e].type,this.eventsListPoints[e].offers)],destination:this.pointsModel.getDestinationsById(this.eventsListPoints[e].destination)}),this.eventsListComponent.getElement())}}({container:g,pointsModel:$});t(new class{getTemplate(){return'\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},y,"afterbegin"),t(new class{getTemplate(){return`<form class="trip-filters" action="#" method="get">\n      ${r.map((e=>function(e){return`\n    <div class="trip-filters__filter">\n      <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}" checked>\n      <label class="trip-filters__filter-label" for="filter-${e}">${s(e)}</label>\n    </div>`}(e))).join("")}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},_),T.init()})()})();
//# sourceMappingURL=bundle.1880a9acd24942cbe72f.js.map