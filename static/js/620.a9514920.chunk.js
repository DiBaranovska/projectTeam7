"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[620],{4863:function(e,n,i){i.d(n,{Z:function(){return l}});var t=i(1087),a="buttonNav_btn_link__0kuJ2",r="buttonNav_btn_link_color_light__K69cd",c="buttonNav_btn_link_color_dark__-Lmt+",s=i(184),l=function(e){var n=e.title,i=e.path,l=e.dark,_=void 0!==l&&l?c:r;return(0,s.jsx)(t.OL,{className:"".concat(a," ").concat(_),to:i,children:n})}},6788:function(e,n,i){i.d(n,{Z:function(){return r}});var t="mainPageTitle_title__xtPBV",a=i(184),r=function(e){var n=e.title;return(0,a.jsx)("h1",{className:t,children:n})}},6621:function(e,n,i){i.d(n,{Z:function(){return k}});var t=i(9434),a=i(2426),r=i(2466),c=i(4863),s=i(3313),l="buttonDelete_btn_delete__f0xi-",_=i(184),o=function(e){var n=e.onClick;return(0,_.jsx)("button",{type:"button",className:l,onClick:n,children:(0,_.jsx)(s.Ybf,{size:24})})},u="recipeItem_card_recept__1Avwj",d="recipeItem_container_img__SLTZ1",p="recipeItem_text_recipe__59wmX",m="recipeItem_subtitle__G28Xp",f="recipeItem_ingredient_text__FBLw8",v="recipeItem_description_text__EOS9K",g="recipeItem_wrap_navigation__uIyf0",x=function(e){var n=e.id,i=e.name,s=e.picture,l=e.description,x=e.favorite,h=void 0!==x&&x,k=(0,t.I0)();return(0,_.jsxs)("li",{className:u,children:[(0,_.jsx)("div",{className:d,children:(0,_.jsx)("img",{alt:"movie",src:s,width:"400",height:"400"})}),(0,_.jsxs)("div",{className:p,children:[(0,_.jsxs)("h2",{className:m,children:[i," "]}),(0,_.jsx)("p",{className:f,children:"Ingredients"}),(0,_.jsx)("p",{className:v,children:l})]}),(0,_.jsxs)("div",{className:g,children:[(0,_.jsx)(c.Z,{title:"See recipe",path:"/recipe/".concat(n),dark:!0}),(0,_.jsx)(o,{onClick:function(){return function(e,n){k(n?(0,a.f)(e):(0,r.GW)(e))}(n,h)}})]})]})},h="myRecipesList_gridCard__dfoN5",k=function(e){var n=e.cocktails,i=e.favorite;return(0,_.jsx)("ul",{className:h,children:n.map((function(e){var n=e._id,t=e.drink,a=e.drinkAlternate,r=e.drinkThumb;return(0,_.jsx)(x,{id:n,name:t,picture:r,description:a,favorite:i},n)}))})}},3289:function(e,n,i){i.d(n,{Z:function(){return o}});var t=i(6048),a=i.n(t),r="paginator_pagination__CCXNm",c="paginator_link__UrJ9e",s="paginator_link_acive__-31uX",l="paginator_disabled__ux7Ye",_=i(184),o=function(e){var n=e.handlePageClick,i=e.itemsPerPage,t=e.pageCount;return(0,_.jsx)(a(),{breakLabel:"...",nextLabel:">",onPageChange:n,pageRangeDisplayed:i,marginPagesDisplayed:i,pageCount:t,previousLabel:"<",renderOnZeroPageCount:null,containerClassName:r,pageLinkClassName:c,previousLinkClassName:c,nextLinkClassName:c,activeLinkClassName:s,disabledLinkClassName:l})}},8620:function(e,n,i){i.r(n),i.d(n,{default:function(){return v}});var t=i(2791),a=i(9439),r=i(9434),c=i(7173),s=i(6621),l=i(3289),_=function(e){return e.myRecipes.myRecipes},o=i(2466),u=i(184),d=function(){var e=(0,t.useState)(1),n=(0,a.Z)(e,2),i=n[0],d=n[1],p=(0,r.I0)(),m=(0,r.v9)(_),f=m.items,v=m.total,g=m.isLoading;(0,t.useEffect)((function(){p((0,o.TR)({page:i,limit:6}))}),[p,i]);var x=Math.ceil(v/6);return(0,u.jsxs)("div",{id:"MyRecipes",children:[g&&(0,u.jsx)(c.Z,{}),(0,u.jsx)(s.Z,{cocktails:f}),(0,u.jsx)(l.Z,{handlePageClick:function(e){var n=e.selected+1;d(n)},itemsPerPage:6,pageCount:x})]})},p=i(6788),m="MyRecipesPage_container__Yefu7",f="MyRecipesPage_wrap_main__2wYEf",v=function(){return(0,u.jsx)("div",{className:m,children:(0,u.jsxs)("div",{className:f,children:[(0,u.jsx)(p.Z,{title:"My recipes"}),(0,u.jsx)(d,{})]})})}}}]);
//# sourceMappingURL=620.a9514920.chunk.js.map