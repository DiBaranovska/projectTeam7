"use strict";(self.webpackChunkprojectTeam7=self.webpackChunkprojectTeam7||[]).push([[639],{4863:function(A,e,t){t.d(e,{Z:function(){return c}});var i=t(1087),n="buttonNav_btn_link__0kuJ2",a="buttonNav_btn_link_color_light__K69cd",s="buttonNav_btn_link_color_dark__-Lmt+",r=t(184),c=function(A){var e=A.title,t=A.path,c=A.dark,o=void 0!==c&&c?s:a;return(0,r.jsx)(i.OL,{className:"".concat(n," ").concat(o),to:t,children:e})}},6788:function(A,e,t){t.d(e,{Z:function(){return a}});var i="mainPageTitle_title__xtPBV",n=t(184),a=function(A){var e=A.title;return(0,n.jsx)("h1",{className:i,children:e})}},6621:function(A,e,t){t.d(e,{Z:function(){return m}});var i=t(9434),n=t(2426),a=t(2466),s=t(4863),r=t(3853),c="buttonDelete_btn_delete__f0xi-",o=t(184),l=function(A){var e=A.onClick;return(0,o.jsx)("button",{type:"button",className:c,onClick:e,children:(0,o.jsx)(r.Ybf,{size:24})})},d="recipeItem_card_recept__1Avwj",u="recipeItem_container_img__SLTZ1",p="recipeItem_text_recipe__59wmX",g="recipeItem_subtitle__G28Xp",E="recipeItem_ingredient_text__FBLw8",K="recipeItem_description_text__EOS9K",x="recipeItem_wrap_navigation__uIyf0",C=function(A){var e=A.id,t=A.name,r=A.picture,c=A.description,C=A.favorite,U=void 0!==C&&C,m=(0,i.I0)();return(0,o.jsxs)("li",{className:d,children:[(0,o.jsx)("div",{className:u,children:(0,o.jsx)("img",{alt:"movie",src:r,width:"400",height:"400"})}),(0,o.jsxs)("div",{className:p,children:[(0,o.jsxs)("h2",{className:g,children:[t," "]}),(0,o.jsx)("p",{className:E,children:"Ingredients"}),(0,o.jsx)("p",{className:K,children:c})]}),(0,o.jsxs)("div",{className:x,children:[(0,o.jsx)(s.Z,{title:"See recipe",path:"/recipe/".concat(e),dark:!0}),(0,o.jsx)(l,{onClick:function(){return function(A,e){m(e?(0,n.f)(A):(0,a.GW)(A))}(e,U)}})]})]})},U="myRecipesList_gridCard__dfoN5",m=function(A){var e=A.cocktails,t=A.favorite;return(0,o.jsx)("ul",{className:U,children:e.map((function(A){var e=A._id,i=A.drink,n=A.drinkAlternate,a=A.drinkThumb;return(0,o.jsx)(C,{id:e,name:i,picture:a,description:n,favorite:t},e)}))})}},3289:function(A,e,t){t.d(e,{Z:function(){return l}});var i=t(6048),n=t.n(i),a="paginator_pagination__CCXNm",s="paginator_link__UrJ9e",r="paginator_link_acive__-31uX",c="paginator_disabled__ux7Ye",o=t(184),l=function(A){var e=A.handlePageClick,t=A.itemsPerPage,i=A.pageCount;return(0,o.jsx)(n(),{breakLabel:"...",nextLabel:">",onPageChange:e,pageRangeDisplayed:t,marginPagesDisplayed:t,pageCount:i,previousLabel:"<",renderOnZeroPageCount:null,containerClassName:a,pageLinkClassName:s,previousLinkClassName:s,nextLinkClassName:s,activeLinkClassName:r,disabledLinkClassName:c})}},4639:function(A,e,t){t.r(e),t.d(e,{default:function(){return j}});var i=t(2791),n=t(9434),a=function(A){return A.favoriteRecipes.favoriteRecipes},s=t(2426),r=t(9439),c=t(6621),o=t(3289),l="recipeListFavorite_container_pagination__NUtLv",d=t(184),u=function(A){var e=A.items,t=A.total,n=(0,i.useState)(0),a=(0,r.Z)(n,2),s=a[0],u=a[1],p=s+6,g=e.slice(s,p),E=Math.ceil(t/6);return(0,d.jsxs)("div",{id:"RecipesFavorite",className:l,children:[(0,d.jsx)(c.Z,{cocktails:g,favorite:!0}),(0,d.jsx)(o.Z,{handlePageClick:function(A){var e=6*A.selected%t;u(e)},itemsPerPage:6,pageCount:E})]})},p=t(6788),g=t(3632),E="notFound_imgWrap__KmJuY",K="notFound_notFoundImg__OnC6A",x="notFound_notFoundText__pkh3B";function C(A){var e=A.text;return(0,d.jsxs)("div",{className:E,children:[(0,d.jsx)("img",{className:K,src:g,alt:"No recipe"}),(0,d.jsx)("p",{className:x,children:e})]})}var U=t(7173),m="FavoritePage_container__2Z6Mv",Q="FavoritePage_wrap_main__to99H",f="FavoritePage_wrap_main_empty__fqWFV",j=function(){var A=(0,n.I0)(),e=(0,n.v9)(a),t=e.items,r=e.total,c=e.isLoading;return(0,i.useEffect)((function(){A((0,s.e)())}),[A]),(0,d.jsx)("div",{className:m,children:c?(0,d.jsxs)("div",{className:Q,children:[(0,d.jsx)(p.Z,{title:"Favorites"}),(0,d.jsx)(U.Z,{})]}):t.length>0?(0,d.jsxs)("div",{className:Q,children:[(0,d.jsx)(p.Z,{title:"Favorites"}),(0,d.jsx)(u,{items:t,total:r})]}):(0,d.jsxs)("div",{className:f,children:[(0,d.jsx)(p.Z,{title:"Favorites"}),(0,d.jsx)(C,{text:"You haven't added any favorite cocktails yet"})]})})}},3632:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=639.da2a85c7.chunk.js.map