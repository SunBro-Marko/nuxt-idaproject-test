(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(t,e,n){"use strict";n(14),n(19),n(20),n(28),n(29),n(24),n(21);var r=n(10),o=n(0),c=n(47),l=n(116),d=n(183);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(c.c)("phone",{validate:function(t){return 17===t.length},message:"Введите номер телефона полностью"}),Object.keys(l).forEach((function(t){Object(c.c)(t,m(m({},l[t]),{},{message:d.a[t]}))})),o.a.component("ValidationProvider",c.b),o.a.component("ValidationObserver",c.a)},117:function(t,e,n){"use strict";var r=n(0),o=n(184);r.a.use(o.a)},118:function(t,e,n){"use strict";var r=n(185),o=n(86);n(263);e.a=function(t){var e=t.store;t.req;Object(r.a)({key:"yourkey",paths:["basket"],storage:{getItem:function(t){return o.get(t)},setItem:function(t,e){return o.set(t,e,{expires:365,secure:!1})},removeItem:function(t){return o.remove(t)}}})(e)}},162:function(t,e,n){var content=n(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("532d1ab2",content,!0,{sourceMap:!1})},163:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("39c21438",content,!0,{sourceMap:!1})},164:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("7e3a83b1",content,!0,{sourceMap:!1})},165:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("4b8de20e",content,!0,{sourceMap:!1})},166:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("21f15b18",content,!0,{sourceMap:!1})},167:function(t,e,n){var content=n(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("b0adbaec",content,!0,{sourceMap:!1})},187:function(t,e,n){"use strict";n(14),n(19),n(20),n(28),n(29),n(24),n(21);var r=n(10),o=n(7);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={methods:l({},Object(o.d)("basket",["closeBasket"])),computed:l({},Object(o.c)("basket",["isOpen"]))},f=(n(222),n(8)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"App"},[n("client-only",[n("transition",{attrs:{name:"overlay"}},[t.isOpen?n("div",{staticClass:"overlay",on:{click:t.closeBasket}}):t._e()]),t._v(" "),n("transition",{attrs:{name:"basket-container"}},[t.isOpen?n("Basket"):t._e()],1)],1),t._v(" "),n("Header",{staticClass:"header"}),t._v(" "),n("transition",{attrs:{name:"component-fade",mode:"out-in"}},[n("Nuxt",{staticClass:"content"})],1),t._v(" "),n("Sidebar",{staticClass:"sidebar"}),t._v(" "),n("Footer",{staticClass:"footer"})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Basket:n(265).default,Header:n(266).default,Sidebar:n(267).default,Footer:n(268).default})},188:function(t,e,n){"use strict";var r=n(8),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},189:function(t,e,n){t.exports=n.p+"img/raiting.icon.2ebc540.svg"},190:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjAwMDAyIDAuMTI1QzcuMjM3OSAwLjEyNSA3LjQ1NTE3IDAuMjYwMDQ1IDcuNTYwNDYgMC40NzMzNkw5LjM0NjQzIDQuMDkxNTRMMTMuMzQwNCA0LjY3NTMyQzEzLjU3NTggNC43MDk3MiAxMy43NzEyIDQuODc0NzMgMTMuODQ0NSA1LjEwMDk4QzEzLjkxNzkgNS4zMjcyMyAxMy44NTY1IDUuNTc1NTIgMTMuNjg2MSA1Ljc0MTQ3TDEwLjc5NjYgOC41NTU4NUwxMS40Nzg1IDEyLjUzMThDMTEuNTE4NyAxMi43NjYzIDExLjQyMjMgMTMuMDAzMyAxMS4yMjk5IDEzLjE0MzJDMTEuMDM3NCAxMy4yODMgMTAuNzgyMiAxMy4zMDE0IDEwLjU3MTYgMTMuMTkwN0w3LjAwMDAyIDExLjMxMjRMMy40Mjg0MyAxMy4xOTA3QzMuMjE3ODUgMTMuMzAxNCAyLjk2MjY3IDEzLjI4MyAyLjc3MDE4IDEzLjE0MzJDMi41Nzc3IDEzLjAwMzMgMi40ODEyOSAxMi43NjYzIDIuNTIxNTEgMTIuNTMxOEwzLjIwMzQ0IDguNTU1ODVMMC4zMTM5MzUgNS43NDE0N0MwLjE0MzU0OSA1LjU3NTUyIDAuMDgyMTI4NCA1LjMyNzIzIDAuMTU1NDg5IDUuMTAwOThDMC4yMjg4NSA0Ljg3NDczIDAuNDI0Mjc1IDQuNzA5NzIgMC42NTk2MjYgNC42NzUzMkw0LjY1MzYgNC4wOTE1NEw2LjQzOTU4IDAuNDczMzZDNi41NDQ4NyAwLjI2MDA0NSA2Ljc2MjEzIDAuMTI1IDcuMDAwMDIgMC4xMjVaTTcuMDAwMDIiIGZpbGw9IiNGMkM5NEMiIC8+Cjwvc3ZnPgo="},191:function(t,e,n){n(192),t.exports=n(193)},208:function(t,e,n){"use strict";n.r(e),e.default=function(t){t.store;(0,t.redirect)("/catalog/1")}},222:function(t,e,n){"use strict";n(162)},223:function(t,e,n){(e=n(35)(!1)).push([t.i,'*{margin:0;padding:0;border:0}.App{min-height:100vh;display:grid;grid-template-columns:1fr 220px minmax(auto,1220px) 1fr;grid-template-rows:66px 1fr auto;grid-template-areas:"header header header header" ". sidebar content ." "footer footer footer footer"}.App,.header{background:#fff}.header{grid-area:header;box-shadow:0 4px 16px rgba(0,0,0,.05);border-radius:0 0 8px 8px}.content{grid-area:content}.sidebar{grid-area:sidebar}.footer{grid-area:footer;background-color:#dbd6a7}.overlay{left:0;min-width:100vw;opacity:.8;z-index:98}.basket-container,.overlay{position:absolute;top:0;min-height:100vh;background:#fff}.basket-container{right:0;width:460px;max-width:460px;box-shadow:-4px 0 16px rgba(0,0,0,.05);border-radius:8px 0 0 8px;z-index:99;box-sizing:border-box;padding:48px;max-height:360px;overflow-y:auto;overflow-x:hidden;display:grid;grid-template-rows:auto 1fr}.component-fade-enter-active,.component-fade-leave-active{transition:all .7s}.component-fade-enter,.component-fade-leave-to{opacity:0;transform:translateY(100px)}.overlay-enter-active,.overlay-leave-active{transition:all 1s}.overlay-enter,.overlay-leave-to{opacity:0}.basket-container-enter-active,.basket-container-leave-active{transition:all .5s}.basket-container-enter,.basket-container-leave-to{opacity:0;transform:translateX(350px)}',""]),t.exports=e},224:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy43MDcxIDAuMjkyODkzQzE0LjA5NzYgMC42ODM0MTcgMTQuMDk3NiAxLjMxNjU4IDEzLjcwNzEgMS43MDcxMUwxLjcwNzExIDEzLjcwNzFDMS4zMTY1OCAxNC4wOTc2IDAuNjgzNDE3IDE0LjA5NzYgMC4yOTI4OTMgMTMuNzA3MUMtMC4wOTc2MzExIDEzLjMxNjYgLTAuMDk3NjMxMSAxMi42ODM0IDAuMjkyODkzIDEyLjI5MjlMMTIuMjkyOSAwLjI5Mjg5M0MxMi42ODM0IC0wLjA5NzYzMTEgMTMuMzE2NiAtMC4wOTc2MzExIDEzLjcwNzEgMC4yOTI4OTNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuMjkyODkzIDAuMjkyODkzQzAuNjgzNDE3IC0wLjA5NzYzMTEgMS4zMTY1OCAtMC4wOTc2MzExIDEuNzA3MTEgMC4yOTI4OTNMMTMuNzA3MSAxMi4yOTI5QzE0LjA5NzYgMTIuNjgzNCAxNC4wOTc2IDEzLjMxNjYgMTMuNzA3MSAxMy43MDcxQzEzLjMxNjYgMTQuMDk3NiAxMi42ODM0IDE0LjA5NzYgMTIuMjkyOSAxMy43MDcxTDAuMjkyODkzIDEuNzA3MTFDLTAuMDk3NjMxMSAxLjMxNjU4IC0wLjA5NzYzMTEgMC42ODM0MTcgMC4yOTI4OTMgMC4yOTI4OTNaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},225:function(t,e,n){t.exports=n.p+"img/success-hand.3d20358.svg"},226:function(t,e,n){"use strict";n(163)},227:function(t,e,n){(e=n(35)(!1)).push([t.i,".my-class{overflow-y:hidden}.basket-empty{display:flex;flex-direction:column;grid-row-gap:24px;row-gap:24px;max-width:100%}.basket-empty p{width:100%;font-family:PT Sans;font-style:normal;font-weight:400;font-size:22px;line-height:28px}.basket-header{display:flex;justify-content:space-between;margin-bottom:24px}.basket-button-close{background:none;cursor:pointer;outline:#fff}.basket-button-black{display:block;color:#fff;outline:#fff;cursor:pointer;background:#000;border-radius:8px;height:50px;width:100%;margin-bottom:24px;font-family:PT Sans;font-style:normal;font-weight:400;font-size:16px;line-height:21px}.basket-button-black:hover{background:#59606d}.basket-header-title{font-family:PT Sans;font-style:normal;font-weight:700;font-size:32px;line-height:41px}.order-success{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.order-success h2{font-weight:700;font-size:24px;line-height:31px;margin-top:24px;color:#000}.order-success h2,.order-success h3{font-family:PT Sans;font-style:normal}.order-success h3{font-weight:400;font-size:16px;line-height:21px;color:#59606d}.basket-enter-active,.basket-leave-active{transition:all .5s}.basket-enter,.basket-leave-to{opacity:0;transform:translateX(-150px)}",""]),t.exports=e},228:function(t,e,n){t.exports=n.p+"img/recyclebin.32705d1.svg"},229:function(t,e,n){"use strict";n(164)},230:function(t,e,n){(e=n(35)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=PT+Sans&display=swap);"]),e.push([t.i,".item-card[data-v-705db0f2]{width:100%;height:120px;background:#fff;box-shadow:0 4px 16px rgba(0,0,0,.05);border-radius:8px;margin:8px;display:flex}.item-card-img[data-v-705db0f2]{padding:18px 18px 0}.item-image[data-v-705db0f2]{max-height:90px;max-width:100%}.item-card-rating[data-v-705db0f2]{width:100%;display:flex}.card-info[data-v-705db0f2]{width:170px;display:flex;flex-direction:column;justify-content:space-between;padding:12px 0 16px}.card-name[data-v-705db0f2]{font-weight:400;color:#59606d}.card-name[data-v-705db0f2],.card-price[data-v-705db0f2]{font-family:PT Sans;font-style:normal;font-size:14px;line-height:18px;display:flex;align-items:flex-end}.card-price[data-v-705db0f2]{font-weight:700;color:#1f1f1f}.item-rating[data-v-705db0f2]{max-height:20px;width:25px;font-family:PT Sans;font-style:normal;font-weight:700;font-size:10px;line-height:13px;display:flex;align-items:center;justify-content:space-between;color:var(--color)}.raiting-icon[data-v-705db0f2]{position:relative}.raiting-icon img[data-v-705db0f2]{position:absolute}.crop[data-v-705db0f2]{float:left;position:relative;width:14px;height:14px}.crop img[data-v-705db0f2]{margin:0;position:absolute;clip:rect(var(--raiting) auto auto auto)}.card-delete-button[data-v-705db0f2]{display:flex;flex-direction:column;justify-content:center}.card-delete-button button[data-v-705db0f2]{background:none;cursor:pointer;outline:#fff}",""]),t.exports=e},231:function(t,e,n){"use strict";n(165)},232:function(t,e,n){(e=n(35)(!1)).push([t.i,".input-group{display:grid;grid-row-gap:24px;row-gap:24px}.input-group input{display:block;height:50px;max-height:50px;width:100%;background:#f8f8f8;border-radius:8px;font-family:PT Sans;font-style:normal;font-weight:400;font-size:16px;line-height:21px;padding-left:15px}.input-group input:-webkit-autofill{box-shadow:inset 0 0 0 30px #f8f8f8!important}.input-group h3{margin-top:32px;font-family:PT Sans;font-style:normal;font-weight:400;font-size:18px;line-height:23px;color:#59606d}.basket-input{position:relative}.basket-input span{position:absolute;bottom:-18px;left:16px;font-family:PT Sans;font-size:14px;color:red}",""]),t.exports=e},233:function(t,e,n){t.exports=n.p+"img/basket.78f806a.svg"},234:function(t,e,n){"use strict";n(166)},235:function(t,e,n){(e=n(35)(!1)).push([t.i,".header-nav-container[data-v-204c5ab0]{display:grid;grid-template-columns:1fr minmax(auto,1440px) 1fr}.header-nav[data-v-204c5ab0]{grid-column:2;display:grid;grid-template-columns:220px 1fr 132px}.nav-title[data-v-204c5ab0]{grid-column:1;position:relative}.nav-title .nav-link[data-v-204c5ab0]{position:absolute;left:44px;top:18px;font-family:PT Sans;font-style:normal;font-weight:700;font-size:22px;line-height:28px;color:#59606d;text-decoration:none}.nav-basket-container[data-v-204c5ab0]{grid-column:3;position:relative;display:flex}.nav-basket[data-v-204c5ab0]{position:relative;cursor:pointer}.nav-basket[data-v-204c5ab0],.nav-basket-counter[data-v-204c5ab0]{display:flex;align-content:center}.nav-basket-counter[data-v-204c5ab0]{justify-content:center;position:absolute;color:#fff;background:#59606d;width:12px;height:12px;border-radius:50%;left:17px;top:16px;font-family:PT Sans;font-style:normal;font-weight:700;font-size:8px;line-height:10px}.nav-basket-counter span[data-v-204c5ab0]{padding-top:.5px}",""]),t.exports=e},236:function(t,e,n){"use strict";n(167)},237:function(t,e,n){(e=n(35)(!1)).push([t.i,".category-title[data-v-71ab24e7]{font-family:PT Sans;font-style:normal;font-weight:700;font-size:32px;line-height:41px;margin-top:32px;margin-left:44px;color:#1f1f1f}.category-nav[data-v-71ab24e7]{margin-top:24px;margin-left:44px;list-style:none}.category-link[data-v-71ab24e7]{margin-top:16px;text-decoration:none;font-family:PT Sans;font-style:normal;font-weight:400;font-size:16px;line-height:21px;display:flex;align-items:flex-end;color:#59606d}.category-link.active[data-v-71ab24e7]{-webkit-text-decoration-line:underline;text-decoration-line:underline;color:#1f1f1f}",""]),t.exports=e},238:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l})),n.d(e,"getters",(function(){return d}));n(42);var r=n(6),o=function(){return{categories:[],activeCategory:1}},c={setCategories:function(t,e){t.categories=e},setActiveCategories:function(t,e){t.categories=categories}},l={nuxtServerInit:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,e.$axios.$get("http://front-test.idalite.com/api/product-category");case 3:o=n.sent,r("setCategories",o);case 5:case"end":return n.stop()}}),n)})))()}},d={categories:function(s){return s.categories}}},239:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l})),n.d(e,"getters",(function(){return d}));n(19),n(42);var r=n(6),o=function(){return{items:[],isOpen:!1,isOrdered:!1,customer:{name:"",email:"",phone:""}}},c={openBasket:function(t){document.body.classList.add("my-class"),t.isOpen=!0},closeBasket:function(t){document.body.classList.remove("my-class"),t.isOpen=!1,!0===t.isOrdered&&(t.isOrdered=!1)},addItem:function(t,e){var n=JSON.parse(JSON.stringify(e));n._id=t.items.length?t.items.length+1:1,t.items.push(n)},deleteItem:function(t,e){t.items=t.items.filter((function(t){return t._id!==e._id}))},checkoutSuccess:function(t){t.items=[],t.isOrdered=!0}},l={checkout:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.commit,t.state;try{n("checkoutSuccess"),console.log("Заказ был сделан")}catch(t){console.log(t)}case 2:case"end":return e.stop()}}),e)})))()}},d={items:function(s){return s.items},itemsCount:function(t){return t.items.length},isOpen:function(s){return s.isOpen},isNotEmpty:function(t){return 0!==t.items.length},isOrdered:function(s){return s.isOrdered},customer:function(s){return s.customer}}},265:function(t,e,n){"use strict";n.r(e);n(14),n(19),n(20),n(28),n(29),n(24),n(21);var r=n(10),o=n(7);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={methods:l({},Object(o.d)("basket",["deleteItem","closeBasket","openBasket"])),computed:l({},Object(o.c)("basket",["items","isOpen","isNotEmpty","isOrdered"])),mounted:function(){this.openBasket()}},f=(n(226),n(8)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"basket-container"},[r("div",{staticClass:"basket-header"},[r("h1",{staticClass:"basket-header-title"},[t._v("Корзина")]),t._v(" "),r("button",{staticClass:"basket-button-close",on:{click:t.closeBasket}},[r("img",{attrs:{src:n(224),alt:""}})])]),t._v(" "),t.isNotEmpty||t.isOrdered?t._e():r("div",{staticClass:"basket-empty"},[r("p",[t._v("Пока что вы ничего не добавили в корзину")]),t._v(" "),r("button",{staticClass:"basket-button-black",on:{click:t.closeBasket}},[t._v("\n      Перейти к выбору\n    ")])]),t._v(" "),t.isNotEmpty?r("div",{staticClass:"basket-notEmpty"},[r("h3",[t._v("Товары в корзине")]),t._v(" "),r("transition-group",{attrs:{name:"basket"}},t._l(t.items,(function(t){return r("BasketCard",{key:t._id,attrs:{item:t}})})),1),t._v(" "),r("BasketInputGroup")],1):t._e(),t._v(" "),t.isOrdered?r("div",{staticClass:"order-success"},[r("img",{attrs:{src:n(225),alt:""}}),t._v(" "),r("h2",[t._v("Заявка успешно отправлена")]),t._v(" "),r("h3",[t._v("Вскоре наш менеджер свяжется с Вами")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BasketCard:n(269).default,BasketInputGroup:n(270).default})},266:function(t,e,n){"use strict";n.r(e);n(14),n(19),n(20),n(28),n(29),n(24),n(21);var r=n(10),o=n(7);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={methods:l({},Object(o.d)("basket",["openBasket"])),computed:l({},Object(o.c)("basket",["isNotEmpty","itemsCount"]))},f=(n(234),n(8)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"header-nav-container"},[r("div",{staticClass:"header-nav"},[r("div",{staticClass:"nav-title"},[r("nuxt-link",{staticClass:"nav-link",attrs:{exact:"","no-prefetch":"","active-class":"active",to:"/"}},[t._v("\n        HOME.PAGE\n      ")])],1),t._v(" "),r("client-only",[r("div",{staticClass:"nav-basket-container"},[r("div",{staticClass:"nav-basket",on:{click:t.openBasket}},[r("img",{staticClass:"nav-bascket-icon",attrs:{src:n(233),alt:""}}),t._v(" "),t.isNotEmpty?r("div",{staticClass:"nav-basket-counter"},[r("span",[t._v(t._s(t.itemsCount))])]):t._e()])])])],1)])}),[],!1,null,"204c5ab0",null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);var r={computed:{categories:function(){return this.$store.getters.categories},activeCategory:function(){}},methods:{openCategory:function(t){this.$router.push("/catalog/"+t.id)}}},o=(n(236),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",{staticClass:"category-title"},[t._v("Каталог")]),t._v(" "),n("ul",{staticClass:"category-nav"},t._l(t.categories,(function(e){return n("li",{key:e.id},[n("NuxtLink",{staticClass:"category-link",attrs:{"active-class":"active",to:"/catalog/"+e.id}},[t._v(t._s(e.name))])],1)})),0)])}),[],!1,null,"71ab24e7",null);e.default=component.exports},268:function(t,e,n){"use strict";n.r(e);var r={},o=n(8),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\n    Тут будет футер\n")])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);n(14),n(19),n(20),n(28),n(29),n(24),n(21);var r=n(10),o=n(7);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={props:["item"],data:function(){return{color:"red",filled:["14px","10px","8px","6px","4px","0px"]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("basket",["addItem","deleteItem"]))},d=(n(229),n(8)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item-card"},[r("div",{staticClass:"item-card-img"},[r("img",{staticClass:"item-image",attrs:{src:"http://front-test.idalite.com"+t.item.photo,alt:""}})]),t._v(" "),r("div",{staticClass:"card-info"},[r("span",[r("h3",{staticClass:"card-name"},[t._v(t._s(t.item.name))]),t._v(" "),r("h3",{staticClass:"card-price"},[t._v(t._s(t.item.price.toLocaleString("ru-RU"))+" ₽")])]),t._v(" "),r("div",{staticClass:"item-rating"},[r("div",{staticClass:"raiting-icon"},[r("img",{attrs:{src:n(189),alt:""}}),t._v(" "),r("div",{staticClass:"crop"},[r("img",{staticClass:"img-filled",style:{"--raiting":t.filled[Number(t.item.rating)]},attrs:{src:n(190),alt:""}})])]),t._v("\n      "+t._s(t.item.rating)+"\n    ")])]),t._v(" "),r("div",{staticClass:"card-delete-button"},[r("button",{on:{click:function(e){return t.deleteItem(t.item)}}},[r("img",{attrs:{src:n(228),alt:""}})])])])}),[],!1,null,"705db0f2",null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);n(14),n(19),n(20),n(27),n(28),n(29),n(24),n(21);var r=n(10),o=n(7);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{name:"",phone:"",adress:""}},methods:l(l({},Object(o.b)("basket",["checkout"])),{},{testmet:function(){this.checkout({name:this.name,phone:this.phone,adress:this.adress})}})},f=(n(231),n(8)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group"},[n("h3",[t._v("Оформить заказ")]),t._v(" "),n("ValidationObserver",{staticClass:"input-group",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[n("ValidationProvider",{staticClass:"basket-input",attrs:{name:"Имя",rules:"required|min:3"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{name:"name",placeholder:"Ваше имя",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("span",[t._v(t._s(r[0]))])]}}],null,!0)}),t._v(" "),n("ValidationProvider",{staticClass:"basket-input",attrs:{name:"Телефон",rules:"required|phone"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("input",{directives:[{name:"mask",rawName:"v-mask",value:"+7(###) ###-##-##",expression:"'+7(###) ###-##-##'"},{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{name:"phone",placeholder:"+7(999) 999-99-99",type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),n("span",[t._v(t._s(r[0]))])]}}],null,!0)}),t._v(" "),n("ValidationProvider",{staticClass:"basket-input",attrs:{name:"Адрес",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.adress,expression:"adress"}],attrs:{name:"adress",placeholder:"Адрес",invalid:"adress.valid",type:"text"},domProps:{value:t.adress},on:{input:function(e){e.target.composing||(t.adress=e.target.value)}}}),t._v(" "),n("span",[t._v(t._s(r[0]))])]}}],null,!0)}),t._v(" "),n("button",{staticClass:"basket-button-black",on:{click:function(e){return r(t.testmet)}}},[t._v("\n      Отправить\n    ")])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports}},[[191,5,1,6]]]);