"use strict";(self.webpackChunkprojectTeam7=self.webpackChunkprojectTeam7||[]).push([[469],{6788:function(e,n,t){t.d(n,{Z:function(){return i}});var r="mainPageTitle_title__xtPBV",a=t(184),i=function(e){var n=e.title;return(0,a.jsx)("h1",{className:r,children:n})}},3289:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(6048),a=t.n(r),i="paginator_pagination__CCXNm",s="paginator_link__UrJ9e",c="paginator_link_acive__-31uX",o="paginator_disabled__ux7Ye",l=t(184),u=function(e){var n=e.handlePageClick,t=e.itemsPerPage,r=e.pageCount;return(0,l.jsx)(a(),{breakLabel:"...",nextLabel:">",onPageChange:n,pageRangeDisplayed:t,marginPagesDisplayed:t,pageCount:r,previousLabel:"<",renderOnZeroPageCount:null,containerClassName:i,pageLinkClassName:s,previousLinkClassName:s,nextLinkClassName:s,activeLinkClassName:c,disabledLinkClassName:o})}},8469:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(1413),a=t(2791),i=t(9434),s=t(5496),c=t(3025),o=t(7689),l=t(4942),u=t(8028),g=t(184);var d=function(e){var n=e.ingredientsList,t=e.categoriesList,d=(0,i.v9)((function(e){return e.user.token})),_=(0,i.I0)(),h=(0,i.v9)((function(e){return e.filter})),m=(0,o.TH)(),f=(0,o.s0)(),v=new URLSearchParams(m.search).get("category")||"";(0,a.useEffect)((function(){m.pathname.startsWith("/search")||_((0,c.IV)())}),[m.pathname,_]);var p=function(e){var n,t=e.target,a=t.name,i=t.value.trim(),s=encodeURIComponent(i),o=(0,r.Z)((0,r.Z)({},h),{},(n={},(0,l.Z)(n,a,s),(0,l.Z)(n,"page",1),n));_((0,c.H1)(o));var u="/search?category=".concat(o.category,"&ingredient=").concat(o.ingredient,"&name=").concat(o.name);f(u,{replace:!0})};return(0,a.useEffect)((function(){d&&((0,u.a5)(d).then((function(e){e.sort(),_((0,s.Y1)(e))})).catch((function(e){return console.error("Error fetching ingredients:",e)})),(0,u.bS)(d).then((function(e){e.sort(),_((0,s.Zi)(e))})).catch((function(e){return console.error("Error fetching categories:",e)})))}),[_,d]),(0,g.jsxs)("form",{className:"searchForm",children:[(0,g.jsx)("input",{className:"searchInput",type:"text",placeholder:"Enter the text",name:"name",value:h.name,onChange:p}),(0,g.jsxs)("select",{className:"searchCategory",name:"category",value:decodeURIComponent(h.category||v),onChange:p,children:[(0,g.jsx)("option",{value:"",children:"All categories"}),t.map((function(e){return(0,g.jsx)("option",{value:e,children:e},e)}))]}),(0,g.jsxs)("select",{className:"searchIngredient",name:"ingredient",value:h.ingredient,onChange:p,children:[(0,g.jsx)("option",{value:"",children:"Ingredients"}),n.map((function(e){return(0,g.jsx)("option",{value:e,children:e},e)}))]})]})},_=t(1087),h="drinksResults_container__FX2iG",m="drinksResults_container__item__o4yTh",f="drinksResults_cocktail__Nt+Wv",v="drinksResults_cocktail__image__tM26f",p="drinksResults_cocktail__title__+ELtZ",k="drinksResults_cocktail__link__j5U5U";var x=function(e){var n=e.results.cocktails||[];return(0,g.jsx)("div",{children:(0,g.jsx)("ul",{className:h,children:n.map((function(e){return(0,g.jsx)("li",{className:m,children:(0,g.jsxs)("ul",{className:f,children:[(0,g.jsx)("li",{children:(0,g.jsx)("img",{className:v,src:e.drinkThumb,alt:e._id,width:"400",height:"400"})}),(0,g.jsx)("li",{className:p,children:e.drink}),(0,g.jsx)("li",{className:k,children:(0,g.jsx)(_.rU,{to:"/recipe/".concat(e._id),children:"Ingredients"})})]})},e._id)}))})})},j=t(3289),C=t(6788),N={noScroll:"DrinksPage_noScroll__vW4eD",conteiner:"DrinksPage_conteiner__vpNSN",container:"DrinksPage_container__BObMF",wrap_main:"DrinksPage_wrap_main__6netV"},L=t(7173);var P=function(){var e=(0,i.v9)((function(e){return e.user.token})),n=(0,i.I0)(),t=(0,o.TH)(),l=new URLSearchParams(t.search),u=(0,i.v9)((function(e){return e.cocktail.status})).isLoading,_=l.get("name")||"",h=l.get("category")||"",m=l.get("ingredient")||"",f=(0,i.v9)((function(e){return e.cocktail.results})),v=(0,i.v9)((function(e){return e.cocktail.results.totalCocktails})),p=(0,i.v9)((function(e){return e.cocktail.results.perPage})),k=Math.ceil(v/p),P=(0,i.v9)((function(e){return e.filter})),Z=(0,i.v9)((function(e){return e.filter.page})),y=(0,i.v9)((function(e){return e.cocktail.categoriesList})),R=(0,i.v9)((function(e){return e.cocktail.ingredientsList}));return(0,a.useEffect)((function(){if(_||h||m){var t={name:_,category:h,ingredient:m,page:Z};n((0,s.r5)({filters:t,token:e}))}else n((0,s.AC)(e))}),[_,h,m,n,e,Z]),(0,g.jsx)("div",{className:N.container,children:(0,g.jsxs)("div",{className:N.wrap_main,children:[(0,g.jsx)(C.Z,{title:"Drinks"}),(0,g.jsx)(d,{ingredientsList:R,categoriesList:y}),u?(0,g.jsx)(L.Z,{}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{results:f}),k?(0,g.jsx)(j.Z,{handlePageClick:function(t){var a=t.selected+1,i=(0,r.Z)((0,r.Z)({},P),{},{page:a});n((0,c.H1)(i)),n((0,s.r5)({filters:i,token:e}))},pageCount:k}):(0,g.jsx)("div",{className:N.searchResults,children:"No search results"})]})]})})}}}]);
//# sourceMappingURL=469.c1764ce6.chunk.js.map