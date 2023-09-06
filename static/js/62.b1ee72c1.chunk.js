"use strict";(self.webpackChunkprojectteam7=self.webpackChunkprojectteam7||[]).push([[62],{6788:function(e,n,r){r.d(n,{Z:function(){return i}});var t="mainPageTitle_title__xtPBV",a=r(184),i=function(e){var n=e.title;return(0,a.jsx)("h1",{className:t,children:n})}},3289:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(6048),a=r.n(t),i="paginator_pagination__CCXNm",o="paginator_link__UrJ9e",s="paginator_link_acive__-31uX",c="paginator_disabled__ux7Ye",l=r(184),u=function(e){var n=e.handlePageClick,r=e.itemsPerPage,t=e.pageCount;return(0,l.jsx)(a(),{breakLabel:"...",nextLabel:">",onPageChange:n,pageRangeDisplayed:r,marginPagesDisplayed:r,pageCount:t,previousLabel:"<",renderOnZeroPageCount:null,containerClassName:i,pageLinkClassName:o,previousLinkClassName:o,nextLinkClassName:o,activeLinkClassName:s,disabledLinkClassName:c})}},2062:function(e,n,r){r.r(n),r.d(n,{default:function(){return S}});var t=r(1413),a=r(2791),i=r(9434),o=r(5496),s=r(3025),c=r(7689),l=r(9439),u=r(8028),d=r(180),g={placeholder:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{color:"#FFFFFF"})},container:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{border:"none",width:"100%",fontFamily:"Manrope",fontSize:"17px",fontStyle:"normal",fontWeight:400,lineHeight:"1.56","@media screen and (min-width: 768px)":{width:"199px"}})},control:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{paddingLeft:"24px",backgroundColor:"#161f37",border:n.isFocused?"none":"none;",borderRadius:"200px",height:"56px","@media screen and (min-width: 768px)":{width:"199px"},transition:"background-color 0.4s ease-in-out",cursor:"pointer","&:hover":{backgroundColor:"#2d3b5e"}})},menu:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{borderRadius:"20px",padding:"10px",backgroundColor:"#161f37",animation:"fade--in 0.4s ease-in-out","@keyframes fade--in":{"0%":{opacity:"0"},"100%":{opacity:"1"}}})},menuList:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{backgroundColor:"#161f37",border:n.isFocused?"none":"none;",color:"white","&::-webkit-scrollbar":{width:"10px"},"&::-webkit-scrollbar-thumb":{background:"#434d67",borderRadius:"5px"}})},selectContainer:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{backgroundColor:"#161f37",border:n.isFocused?"none":"none;",borderRadius:"20px"})},option:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{backgroundColor:"#161f37",color:n.isFocused?"#f3f3f3":"rgba(243, 243, 243, 0.5)",cursor:"pointer",padding:"0 10px 5px"})},valueContainer:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{padding:"0"})},Input:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{color:"white",fontSize:"40px"})},singleValue:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{color:"#FFFFFF"})},indicatorSeparator:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{display:"none"})},dropdownIndicator:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{color:n.isFocused?"#161f37":"#F3F3F3",paddingRight:"24px"})}},f=r(5095),h=r.n(f),p=r(184),m=function(){return(0,p.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,p.jsx)("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#F3F3F3",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#F3F3F3",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})};var k=function(e){var n=e.ingredientsList,r=e.categoriesList,f=(0,i.v9)((function(e){return e.user.token})),k=(0,i.I0)(),v=(0,i.v9)((function(e){return e.filter})),_=(0,c.TH)(),x=(0,c.s0)(),Z=new URLSearchParams(_.search).get("category")||"",b=(0,a.useState)(v.name),j=(0,l.Z)(b,2),C=j[0],F=j[1];(0,a.useEffect)((function(){_.pathname.startsWith("/search")||k((0,s.IV)())}),[_.pathname,k]);var y=h()((function(e){var n=e.trim(),r=(0,t.Z)((0,t.Z)({},v),{},{name:n,page:1});k((0,s.H1)(r));var a="/search?category=".concat(r.category,"&ingredient=").concat(r.ingredient,"&name=").concat(r.name);x(a,{replace:!0})}),1e3),L=function(){y(C)};return(0,a.useEffect)((function(){f&&((0,u.a5)(f).then((function(e){e.sort(),e.unshift("Ingredients"),k((0,o.Y1)(e))})).catch((function(e){return console.error("Error fetching ingredients:",e)})),(0,u.bS)(f).then((function(e){e.push("All categories"),e.sort(),k((0,o.Zi)(e))})).catch((function(e){return console.error("Error fetching categories:",e)})))}),[k,f]),(0,p.jsxs)("form",{className:"searchForm",children:[(0,p.jsxs)("div",{className:"searchInputWrapper",children:[(0,p.jsx)("div",{className:"searchIcon",children:(0,p.jsx)(m,{})}),(0,p.jsx)("input",{className:"searchInput",type:"text",placeholder:"Enter the text",name:"name",value:C,onChange:function(e){var n=e.target.value;F(n)},onBlur:L,onKeyDown:function(e){"Enter"===e.key&&L()}})]}),(0,p.jsx)(d.ZP,{name:"category",placeholder:v.category||Z||"All categories",defaultValue:"All categories",value:v.category||Z,onChange:function(e){var n;n="All categories"===e.value?"":e.value;var r=(0,t.Z)((0,t.Z)({},v),{},{category:n,page:1});k((0,s.H1)(r));var a="/search?category=".concat(n,"&ingredient=").concat(v.ingredient,"&name=").concat(v.name);x(a,{replace:!0})},options:r.map((function(e){return{value:e,label:e}})),isSearchable:!0,styles:g}),(0,p.jsx)(d.ZP,{name:"ingredient",placeholder:v.ingredient||"Ingredients",defaultValue:"Ingredients",value:v.ingredient,onChange:function(e){var n;n="Ingredients"===e.value?"":e.value;var r=(0,t.Z)((0,t.Z)({},v),{},{ingredient:n,page:1});k((0,s.H1)(r));var a="/search?category=".concat(v.category,"&ingredient=").concat(n,"&name=").concat(v.name);x(a,{replace:!0})},options:n.map((function(e){return{value:e,label:e}})),isSearchable:!0,styles:g})]})},v=r(1087),_="drinksResults_container__FX2iG",x="drinksResults_container__item__o4yTh",Z="drinksResults_cocktail__Nt+Wv",b="drinksResults_cocktail__image__tM26f",j="drinksResults_cocktail__title__+ELtZ",C="drinksResults_cocktail__link__j5U5U",F="drinksResults_searchResults__CCJQy";var y=function(e){var n=e.results.cocktails||[];return(0,p.jsx)("div",{children:n.length>0?(0,p.jsx)("ul",{className:_,children:n.map((function(e){return(0,p.jsx)("li",{className:x,children:(0,p.jsxs)("ul",{className:Z,children:[(0,p.jsx)("li",{children:(0,p.jsx)("img",{className:b,src:e.drinkThumb,alt:e._id,width:"400",height:"400"})}),(0,p.jsx)("li",{className:j,children:e.drink}),(0,p.jsx)("li",{className:C,children:(0,p.jsx)(v.rU,{to:"/recipe/".concat(e._id),children:"Ingredients"})})]})},e._id)}))}):(0,p.jsx)("div",{className:F,children:"No search results"})})},L=r(3289),N=r(6788),w="DrinksPage_container__BObMF",P="DrinksPage_wrap_main__6netV",R="DrinksPage_drink_page_tittle__ALeu-",I=r(7173);var S=function(){var e=(0,i.v9)((function(e){return e.user.token})),n=(0,i.I0)(),r=(0,c.TH)(),l=new URLSearchParams(r.search),u=(0,i.v9)((function(e){return e.cocktail.status})).isLoading,d=l.get("name")||"",g=l.get("category")||"",f=l.get("ingredient")||"",h=(0,i.v9)((function(e){return e.cocktail.results})),m=(0,i.v9)((function(e){return e.cocktail.results.totalCocktails})),v=(0,i.v9)((function(e){return e.cocktail.results.perPage})),_=Math.ceil(m/v),x=(0,i.v9)((function(e){return e.filter})),Z=(0,i.v9)((function(e){return e.filter.page})),b=(0,i.v9)((function(e){return e.cocktail.categoriesList})),j=(0,i.v9)((function(e){return e.cocktail.ingredientsList}));return(0,a.useEffect)((function(){if(d||g||f){var r={name:d,category:g,ingredient:f,page:Z};n((0,o.r5)({filters:r,token:e}))}else n((0,o.AC)(e))}),[d,g,f,n,e,Z]),(0,p.jsx)("div",{className:w,children:(0,p.jsxs)("div",{className:P,children:[(0,p.jsx)("div",{className:R,children:(0,p.jsx)(N.Z,{className:R,title:"Drinks"})}),(0,p.jsx)(k,{ingredientsList:j,categoriesList:b}),u?(0,p.jsx)(I.Z,{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y,{results:h}),_?(0,p.jsx)(L.Z,{handlePageClick:function(r){var a=r.selected+1,i=(0,t.Z)((0,t.Z)({},x),{},{page:a});n((0,s.H1)(i)),n((0,o.r5)({filters:i,token:e}))},pageCount:_}):(0,p.jsx)(p.Fragment,{})]})]})})}}}]);
//# sourceMappingURL=62.b1ee72c1.chunk.js.map