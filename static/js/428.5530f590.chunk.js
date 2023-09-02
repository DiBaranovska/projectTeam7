"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[428],{5235:function(e,r,n){n.r(r),n.d(r,{default:function(){return K}});var t=n(5861),i=n(9439),a=n(4687),s=n.n(a),c=n(2791),o=n(9434),d=n(1243);d.Z.defaults.baseURL="https://projectteam7-backend.onrender.com";var p=function(){var e=(0,t.Z)(s().mark((function e(r,n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("recipes/".concat(r),{headers:{Authorization:"Bearer ".concat(n)}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("An error occurred:",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://projectteam7-backend.onrender.com/favorite",e.next=3,fetch("https://projectteam7-backend.onrender.com/favorite",{method:"POST",headers:{accept:"application/json",Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify({id:r})});case 3:e.sent.ok?console.log("Recipe added to favorites"):console.error("Failed to add recipe to favorites");case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),_=function(){var e=(0,t.Z)(s().mark((function e(r,n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://projectteam7-backend.onrender.com/favorite/".concat(r),e.next=3,fetch(t,{method:"DELETE",headers:{Authorization:"Bearer ".concat(n)}});case 3:e.sent.ok?console.log("Recipe removed from favorites"):console.error("Failed to remove recipe from favorites");case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),u="RecipePage_conteiner__Vl14l",f="RecipePage_recipe__conteiner__hYPxr",m="recipeInngredientsList_ingredients__qqVfR",h="recipeInngredientsList_ingredients__title__TKn3w",g="recipeInngredientsList_ingredients__list__n0ct7",v="recipeInngredientsList_ingredients__card__I1pSf",k="recipeInngredientsList_ingredients__card__background__JiQJc",x="recipeInngredientsList_ingredients__card__img__tLTMZ",j="recipeInngredientsList_ingredients__card__description__5lH5Y",b="recipeInngredientsList_ingredients__card__title__3uV7Z",N="recipeInngredientsList_ingredients__card__measure__Q0UN2",P=n(184),w=function(e){var r=e.ingredients;return(0,P.jsxs)("div",{className:m,children:[(0,P.jsx)("h2",{className:h,children:"Ingredients"}),(0,P.jsx)("ul",{className:g,children:r.map((function(e,r){return(0,P.jsxs)("li",{className:v,children:[(0,P.jsx)("div",{className:k,children:e.ingredientThumb&&(0,P.jsx)("img",{src:e.ingredientThumb,alt:e.title,className:x})}),(0,P.jsxs)("div",{className:j,children:[(0,P.jsx)("p",{className:b,children:e.title}),e.measure&&(0,P.jsx)("p",{className:N,children:e.measure})]})]},r)}))})]})},T="recipePreparation_preparation__ejNBK",Z="recipePreparation_preparation__title__k7PDp",I="recipePreparation_preparation__container__vbwqW",A="recipePreparation_preparation__description__HsEFR",L="recipePreparation_preparation__imageContainer__pW-bi",R="recipePreparation_preparation__img__Yu-Lq",S=n.p+"static/media/recipePreparation.40381256e2b33149bbd3.jpg",H=function(e){var r=e.instructions;return(0,P.jsxs)("div",{className:T,children:[(0,P.jsx)("h2",{className:Z,children:"Recipe Preparation"}),(0,P.jsxs)("div",{className:I,children:[(0,P.jsx)("p",{className:A,children:r}),(0,P.jsx)("div",{className:L,children:(0,P.jsx)("img",{src:S,alt:"Recipe Preparation",className:R})})]})]})},y="recipePageHero_field__GVC5K",F="recipePageHero_field__glass__AMbFk",C="recipePageHero_field__drink__RSugn",E="recipePageHero_field__description__+0Wbp",q="recipePageHero_field__button__Ftv3-",B="recipePageHero_field__button_text__pwBve",D="recipePageHero_field__imageContainer__FN9Yw",J="recipePageHero_field__img__RpPxq",V=n.p+"static/media/recipeCocteile.6b53d13bfa3bde5a7824.jpg",Y=function(e){var r=e.glass,n=e.drinkAlternate,a=e.drink,d=e.drinkThumb,p=e.recipeId,u=(0,c.useState)(!1),f=(0,i.Z)(u,2),m=f[0],h=f[1],g=(0,o.v9)((function(e){return e.user.token}));(0,c.useEffect)((function(){try{var e=localStorage.getItem("favoriteRecipes"),r=JSON.parse(e).recipes,n=p,t=r.some((function(e){return e._id===n}));h(t)}catch(i){console.error("Failed to fetch favorite status:",i)}}),[p,g]);var v=function(){var e=(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,m){e.next=7;break}return e.next=4,l(p,g);case 4:h(!0),e.next=10;break;case 7:return e.next=9,_(p,g);case 9:h(!1);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Failed to toggle favorite:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return(0,P.jsxs)("div",{className:y,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("p",{className:F,children:r}),(0,P.jsx)("h1",{className:C,children:a}),(0,P.jsx)("p",{className:E,children:n}),(0,P.jsx)("button",{className:q,onClick:v,children:(0,P.jsx)("span",{className:B,children:m?"Remove from favorite":"Add to favorite recipe"})})]}),(0,P.jsx)("div",{className:D,children:d?(0,P.jsx)("img",{src:d,alt:"Drink Thumbnail",className:J}):(0,P.jsx)("img",{src:V,alt:"Drink Thumbnail",className:J})})]})},z=n(7173);var K=function(){var e=(0,c.useState)(""),r=(0,i.Z)(e,2),n=r[0],a=r[1],d=(0,c.useState)({drink:"",drinkAlternate:"",glass:"",drinkThumb:"",ingredients:[],instructions:""}),l=(0,i.Z)(d,2),_=l[0],m=l[1],h=(0,c.useState)(!0),g=(0,i.Z)(h,2),v=g[0],k=g[1],x=(0,o.v9)((function(e){return e.user.token})),j=(0,c.useState)(null),b=(0,i.Z)(j,2),N=b[0],T=b[1];(0,c.useEffect)((function(){T(x)}),[x]),(0,c.useEffect)((function(){if(N){var e=window.location.pathname.split("/"),r=e[e.length-1];a(r);var n=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(r,N);case 3:(n=e.sent)&&(m({drink:n.drink,drinkAlternate:n.drinkAlternate,glass:n.glass,drinkThumb:n.drinkThumb,ingredients:n.ingredients,instructions:n.instructions}),k(!1)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("An error occurred:",e.t0),console.log("Token:",N),k(!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();n()}}),[N]),(0,c.useEffect)((function(){window.scrollTo(0,0)}),[n]);var Z=_.drink,I=_.drinkAlternate,A=_.glass,L=_.drinkThumb,R=_.ingredients,S=_.instructions;return(0,P.jsx)("div",{className:"".concat(u," ").concat(f),children:v?(0,P.jsx)(z.Z,{}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Y,{glass:A,drinkAlternate:I,drink:Z,drinkThumb:L,recipeId:n}),(0,P.jsx)(w,{ingredients:R}),(0,P.jsx)(H,{instructions:S})]})})}}}]);
//# sourceMappingURL=428.5530f590.chunk.js.map