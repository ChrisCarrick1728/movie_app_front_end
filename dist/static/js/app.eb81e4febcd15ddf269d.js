webpackJsonp([1],{"4HAc":function(e,t){},"5j/h":function(e,t){},A5ol:function(e,t){},KyM4:function(e,t){},MANR:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("div",{staticClass:"logo"},[t("img",{attrs:{src:a("bhF5")}}),this._v(" "),t("h1",[this._v(this._s(this.appName))]),this._v(" "),t("div",{staticClass:"logout"},[t("router-link",{attrs:{to:"/logout"}},[this._v("logout")])],1)])])},staticRenderFns:[]};var o=a("VU/8")({data:function(){return{appName:"My Movie Database"}}},s,!1,function(e){a("s6lv")},"data-v-f4657792",null).exports,i=a("mtWM"),r=a.n(i),l={name:"loginComp_app",data:function(){return{logon_username:"",logon_password:""}},methods:{validateLogon:function(){console.log("login attempted"),console.log(F.phpPath);var e=new URLSearchParams;e.append("userName",this.logon_username),e.append("password",this.logon_password),r.a.defaults.withCredentials=!0,r.a.post(F.phpPath+"/php/checkUser.php",e).then(function(e){console.log(e.data),"true"===e.data[0]&&(window.location="#/home")})}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"loginContainer"},[e._m(0),e._v(" "),a("div",{staticClass:"loginInput"},[a("p",[e._v("Username:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.logon_username,expression:"logon_username"}],attrs:{type:"text",name:"logon_username",value:""},domProps:{value:e.logon_username},on:{input:function(t){t.target.composing||(e.logon_username=t.target.value)}}}),e._v(" "),a("p",[e._v("Password:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.logon_password,expression:"logon_password"}],attrs:{type:"password",name:"logon_password",value:""},domProps:{value:e.logon_password},on:{input:function(t){t.target.composing||(e.logon_password=t.target.value)}}}),e._v(" "),a("input",{attrs:{type:"button",name:"submit",value:"Login"},on:{click:e.validateLogon}}),e._v(" "),a("p",{staticClass:"center"},[e._v("Or")]),e._v(" "),a("input",{attrs:{type:"button",name:"signup",value:"Sign up"},on:{click:function(t){return e.$emit("swapLogin")}}})])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loginHeader"},[t("h3",[this._v("Please Sign in:")])])}]};var u={name:"signup_app",data:function(){return{signup_username:"",signup_password:"",signup_vPassword:"",signup_email:"",errorMessage:""}},methods:{validateSignup:function(){for(var e=this,t=document.getElementsByClassName("required"),a=!1,n=0;n<t.length;n++)""===t[n].value&&(t[n].style="border-bottom: 1px Solid Red",a=!0);if(this.signup_password!=this.signup_vPassword){a=!0;var s=document.getElementsByClassName("pass");for(n=0;n<s.length;n++)s[n].style="border-bottom: 1px solid Red"}if(!a){var o=new URLSearchParams;o.append("username",this.signup_username),o.append("password",this.signup_password),o.append("vPassword",this.signup_vPassword),o.append("email",this.signup_email),r.a.defaults.withCredentials=!0,r.a.post(F.phpPath+"/php/addUser.php",o).then(function(a){if(console.log(a.data),"Account created successfully."===a.data[0]){e.errorMessage=a.data[0];for(var n=0;n<t.length;n++)""===t[n].value&&(t[n].style="border-bottom: 1px Solid green")}else{e.errorMessage=a.data[0];for(n=0;n<t.length;n++)""===t[n].value&&(t[n].style="border-bottom: 1px Solid red")}})}}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"loginContainer"},[e._m(0),e._v(" "),a("div",{staticClass:"signupInput"},[a("p",[e._v("User Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.signup_username,expression:"signup_username"}],staticClass:"required",attrs:{type:"text",name:"signup_username",value:""},domProps:{value:e.signup_username},on:{input:function(t){t.target.composing||(e.signup_username=t.target.value)}}}),e._v(" "),a("p",[e._v("Password")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.signup_password,expression:"signup_password"}],staticClass:"required",attrs:{type:"password",name:"signup_password",value:""},domProps:{value:e.signup_password},on:{input:function(t){t.target.composing||(e.signup_password=t.target.value)}}}),e._v(" "),a("p",[e._v("Verify Password")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.signup_vPassword,expression:"signup_vPassword"}],staticClass:"required",attrs:{type:"password",name:"signup_vPassword",value:""},domProps:{value:e.signup_vPassword},on:{input:function(t){t.target.composing||(e.signup_vPassword=t.target.value)}}}),e._v(" "),a("p",[e._v("Email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.signup_email,expression:"signup_email"}],staticClass:"required",attrs:{type:"email",name:"signup_email",value:""},domProps:{value:e.signup_email},on:{input:function(t){t.target.composing||(e.signup_email=t.target.value)}}}),e._v(" "),a("p",{staticClass:"errorMessage"},[e._v(e._s(e.errorMessage))]),e._v(" "),a("input",{attrs:{type:"button",name:"signup",value:"Sign up"},on:{click:e.validateSignup}}),e._v(" "),a("p",{staticClass:"center"},[e._v("Or, already have an account?")]),e._v(" "),a("input",{attrs:{type:"button",name:"submit",value:"Go to Login"},on:{click:function(t){return e.$emit("swapLogin")}}})])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"signupHeader"},[t("h3",[this._v("Enter your Information:")])])}]};var d={components:{"app-login":a("VU/8")(l,p,!1,function(e){a("k9c7")},null,null).exports,"app-signup":a("VU/8")(u,c,!1,function(e){a("MANR")},null,null).exports},name:"loginPage_app",data:function(){return{component:"app-login"}},methods:{swapLoginComponent:function(){"app-login"===this.component?this.component="app-signup":this.component="app-login"}},updateComponent:function(e){console.log(e)}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t(this.component,{tag:"component",on:{swapLogin:this.swapLoginComponent}})],1)},staticRenderFns:[]};var h=a("VU/8")(d,v,!1,function(e){a("xux2")},null,null).exports,m={name:"links",data:function(){return{}},methods:{addMovies:function(){console.log("add Movies clicked")}}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("router-link",{attrs:{to:"/logout"}},[this._v("Logout")]),this._v(" "),t("router-link",{attrs:{to:"/home"}},[this._v("Home")]),this._v(" "),t("router-link",{attrs:{to:"/add"}},[this._v("Add Movie")]),this._v(" "),t("router-link",{attrs:{to:"/browse"}},[this._v("Browse Movies")])],1)},staticRenderFns:[]};var g=a("VU/8")(m,w,!1,function(e){a("A5ol")},null,null).exports,M={components:{"nav-link":g},name:"homeComp_app",data:function(){return{}},methods:{addMovies:function(){console.log("add Movies clicked")}}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("Home Page")]),this._v(" "),t("nav-link")],1)},staticRenderFns:[]};var f={components:{"app-home":a("VU/8")(M,_,!1,function(e){a("YJzn")},null,null).exports},name:"homePage_app",data:function(){return{component:"app-home"}},methods:{swapLoginComponent:function(){"app-login"===this.component?this.component="app-signup":this.component="app-login"}},created:function(){r.a.post(F.phpPath+"/php/checkauth.php").then(function(e){console.log(e.data),"false"===e.data[0]&&(window.location="#/")})}},L={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t(this.component,{tag:"component",on:{swapLogin:this.swapLoginComponent}})],1)},staticRenderFns:[]};var D=a("VU/8")(f,L,!1,function(e){a("eLA5")},null,null).exports,N={components:{"app-header":o,"app-login":h,"app-home":D},name:"main_app",data:function(){return{main_component:"app-login"}},methods:{updateComponent:function(e){this.main_component=e}},beforeCreate:function(){}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("app-header"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var y=a("VU/8")(N,C,!1,function(e){a("4HAc")},null,null).exports,j=a("/ocq"),x={name:"movie_format_app",data:function(){return{searchString:"",searchSuccesfull:!1,searchResults:[],movieFormatObj:[],selectedFormat:""}},methods:{searchAPI:function(){var e=this;console.log("search clicked");var t=new URLSearchParams;t.append("search",this.searchString),r.a.defaults.withCredentials=!0,r.a.post(F.phpPath+"/php/searchAPI.php",t).then(function(t){console.log(t.data),void 0!==t.data.message?console.log(t.data.message):(e.searchResults=t.data,e.searchSuccesfull=!0)})},addToLibrary:function(){console.log("add to library");var e=new URLSearchParams;e.append("title",this.searchResults[event.target.name].title),e.append("poster_url",this.searchResults[event.target.name].poster_path),e.append("overview",this.searchResults[event.target.name].overview),e.append("genre_ids",this.searchResults[event.target.name].genre_ids),e.append("format",this.selectedFormat),r.a.defaults.withCredentials=!0,r.a.post(F.phpPath+"/php/addToLibrary.php",e).then(function(e){console.log(e.data),void 0!==e.data.message&&console.log(e.data.message)})},addNewFormat:function(){var e=this;console.log("add new format");var t=new URLSearchParams;t.append("movie_format",prompt("Enter a Media Format","DVD")),r.a.defaults.withCredentials=!0,r.a.post(F.phpPath+"/php/addNewMovieFormat.php",t).then(function(t){console.log(t.data),e.getMovieFormat()})},getMovieFormat:function(){var e=this;console.log("loading movie format");new URLSearchParams;r.a.defaults.withCredentials=!0,r.a.post(F.phpPath+"/php/getMovieFormat.php").then(function(t){console.log(t.data),e.movieFormatObj=t.data})}},beforeCreate:function(){var e=this;console.log("loading movie format");new URLSearchParams;r.a.defaults.withCredentials=!0,r.a.post(F.phpPath+"/php/getMovieFormat.php").then(function(t){console.log(t.data),e.movieFormatObj=t.data})}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("Search for Movies to add:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],attrs:{type:"text",name:"searchBox",value:""},domProps:{value:e.searchString},on:{input:function(t){t.target.composing||(e.searchString=t.target.value)}}}),e._v(" "),a("input",{attrs:{type:"button",name:"search",value:"Search"},on:{click:e.searchAPI}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.searchSuccesfull,expression:"searchSuccesfull"}],attrs:{id:"results"}},e._l(e.searchResults,function(t,n){return a("div",{staticClass:"tile"},["null"!=t.poster_path?a("span",[a("div",{staticClass:"innerTile"},[a("div",{staticClass:"poster"},[a("img",{attrs:{src:t.poster_path,alt:""}})]),e._v(" "),a("div",{staticClass:"resultsText"},[a("h3",[e._v(e._s(t.title))]),e._v(" "),a("p",[e._v(e._s(t.overview))]),e._v(" "),a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFormat,expression:"selectedFormat"}],attrs:{name:"Movie Format"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedFormat=t.target.multiple?a:a[0]}}},e._l(e.movieFormatObj,function(t,n){return a("option",{domProps:{value:t.format}},[e._v(" "+e._s(t.format)+"\n                ")])}),0),e._v("Select Movie Format\n            "),a("input",{attrs:{type:"button",name:"addButton",value:"Add New Format"},on:{click:e.addNewFormat}})]),e._v(" "),a("input",{attrs:{type:"button",name:n,value:"Add to Library"},on:{click:e.addToLibrary}})])])]):e._e()])}),0)])},staticRenderFns:[]};var S={components:{"all-movies":g,"movie-search":a("VU/8")(x,T,!1,function(e){a("Zm9E")},null,null).exports},name:"addPage_app",data:function(){return{}},methods:{addMovies:function(){console.log("add Movies clicked")},browseMovies:function(){console.log("browse movies clicked")}},created:function(){r.a.post(F.phpPath+"/php/checkauth.php").then(function(e){console.log(e.data),"false"===e.data[0]&&(window.location="#/")})}},A={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("Add Movies Page")]),this._v(" "),t("all-movies"),this._v(" "),t("movie-search")],1)},staticRenderFns:[]};var k=a("VU/8")(S,A,!1,function(e){a("KyM4")},null,null).exports,P={name:"allmovies",data:function(){return{allMoviesObj:{}}},methods:{deleteMovie:function(){var e=this;if(confirm("Are you sure you want to delete?")){console.log("delete movie");var t=new URLSearchParams;t.append("title",event.target.name),r.a.defaults.withCredentials=!0,r.a.post(F.phpPath+"/php/deleteMovie.php",t).then(function(t){console.log(t.data),e.refreshMoviesList()})}},watchMovie:function(){var e=this;console.log("watch movie");var t=new URLSearchParams;t.append("title",event.target.name),r.a.defaults.withCredentials=!0,r.a.post(F.phpPath+"/php/watchMovie.php",t).then(function(t){console.log(t.data),e.refreshMoviesList()})},refreshMoviesList:function(){var e=this;r.a.defaults.withCredentials=!0,r.a.get(F.phpPath+"/php/showAllMovies.php").then(function(t){e.allMoviesObj=t.data})}},mounted:function(){var e=this;r.a.defaults.withCredentials=!0,r.a.get(F.phpPath+"/php/showAllMovies.php").then(function(t){console.log(t.data),e.allMoviesObj=t.data})}},O={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("All Movies")]),e._v(" "),a("div",{attrs:{id:"results"}},e._l(e.allMoviesObj,function(t,n){return a("div",{staticClass:"tile"},["null"!=t.poster_path?a("span",[a("div",{staticClass:"innerTile"},[a("div",{staticClass:"poster"},[a("img",{attrs:{src:t.movie_poster_url,alt:""}})]),e._v(" "),a("div",{staticClass:"resultsText"},[a("h3",[e._v(e._s(t.title))]),e._v(" "),a("p",[e._v(e._s(t.description))]),e._v(" "),""!=t.date_last_watched?a("span",[a("p",[e._v("Last Watched: "+e._s(t.date_last_watched))])]):e._e(),e._v(" "),"null"!=t.times_watched?a("span",[a("p",[e._v("Times Watched: "+e._s(t.times_watched))])]):e._e(),e._v(" "),a("p",[e._v("Media Format: "+e._s(t.format))]),e._v(" "),a("p",{staticClass:"genre"},[e._v("Genre:")]),e._l(t.genre,function(t){return a("li",[e._v(e._s(t))])}),e._v(" "),a("input",{attrs:{type:"button",name:t.title,value:"Watch This Movie"},on:{click:e.watchMovie}}),e._v(" "),a("input",{attrs:{type:"button",name:t.title,value:"Delete From Library"},on:{click:e.deleteMovie}})],2)])]):e._e()])}),0)])},staticRenderFns:[]};var E={components:{"all-movies":a("VU/8")(P,O,!1,function(e){a("hupt")},"data-v-63fb72cc",null).exports,"nav-link":g},name:"browsePage-app",data:function(){return{}},methods:{},beforeCreate:function(){r.a.post(F.phpPath+"/php/checkauth.php").then(function(e){console.log(e.data),"false"===e.data[0]&&(window.location="#/")})}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("Browse Page")]),this._v(" "),t("nav-link"),this._v(" "),t("all-movies")],1)},staticRenderFns:[]};var I=a("VU/8")(E,b,!1,function(e){a("5j/h")},null,null).exports,U={name:"",data:function(){return{}},methods:{},beforeCreate:function(){r.a.defaults.withCredentials=!0,r.a.get(F.phpPath+"/php/sessiondestroy.php").then(function(e){console.log(e.data[0]),window.location="/"})}},z={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var Y=[{path:"/",component:h},{path:"/logout",component:a("VU/8")(U,z,!1,function(e){a("tatT")},null,null).exports},{path:"/home",component:D},{path:"/add",component:k},{path:"/browse",component:I}];a.d(t,"globalStore",function(){return F}),n.a.use(j.a);var R=new j.a({routes:Y}),F=new n.a({data:{phpPath:"http://localhost:8000/web"}});new n.a({el:"#app",render:function(e){return e(y)},router:R})},YJzn:function(e,t){},Zm9E:function(e,t){},bhF5:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTggNjE4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzRkNGQ0ZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPm1vdmllX3JlZWw8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMzA5IiBjeT0iMzA5IiByPSIzMDkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik01NTksMzA5QzU1OSwxNzEuNzksNDQ4LjQ2LDYwLjQyLDMxMS41OCw1OXEtMS4yOSwwLTIuNTgsMHQtMi41OCwwQzIwMy4xOSw2MC4wOCwxMTUsMTIzLjY4LDc3LjgxLDIxMy43NGE5OS4yMyw5OS4yMywwLDAsMC04LjY3LDI0LjYzQTI0OS44OCwyNDkuODgsMCwwLDAsNTksMzA5YzAsMTM4LjA3LDExMS45MywyNTAsMjUwLDI1MGEyNDguODcsMjQ4Ljg3LDAsMCwwLDEzOS43Mi00Mi42NiwxMDAsMTAwLDAsMCwwLDIyLjM5LTE3QTI0OS40MSwyNDkuNDEsMCwwLDAsNTU5LDMwOVpNNDI4LjIyLDQ4MS45M2E2MC4yNSw2MC4yNSwwLDEsMSwxNS4xOC0xMS41N1E0MzYsNDc2LjUzLDQyOC4yMiw0ODEuOTNaTTEwOC4xMywyNDcuNDFxMi40OS04LjE1LDUuNjUtMTYuMDZBNjAsNjAsMCwxLDEsMTA3LDI1OSw2MC42NSw2MC42NSwwLDAsMSwxMDguMTMsMjQ3LjQxWm0xMDEuMzItNzlBOTkuNjMsOTkuNjMsMCwwLDAsMTY3LDE1OWMtMS43LDAtMy40LDAtNS4wOC4xM2EyMTAuMjYsMjEwLjI2LDAsMCwxLDU0Ljg4LTM4LjkxQTk5Ljc1LDk5Ljc1LDAsMCwwLDIwOSwxNTlDMjA5LDE2Mi4xOCwyMDkuMTYsMTY1LjMzLDIwOS40NSwxNjguNDRaTTE0NS44NCwzNTYuNzVhOTkuODQsOTkuODQsMCwwLDAtMjUuNTIsNDQuNjUsMjA3LjgsMjA3LjgsMCwwLDEtMTkuODktNjcuOEE5OS43OSw5OS43OSwwLDAsMCwxNDUuODQsMzU2Ljc1Wk0yMTcsNDg3YTYwLDYwLDAsMSwxLDYwLTYwQTYwLjA3LDYwLjA3LDAsMCwxLDIxNyw0ODdabTMyLTMyOGE2MCw2MCwwLDEsMSw2MCw2MEE2MC4wNyw2MC4wNywwLDAsMSwyNDksMTU5Wk01MTEsMjYyYTYwLDYwLDAsMSwxLTYwLTYwQTYwLjA3LDYwLjA3LDAsMCwxLDUxMSwyNjJabS0zOC44Niw5Ny43NWE5OS42OSw5OS42OSwwLDAsMCw0NS0yMi43NywyMDcuOTIsMjA3LjkyLDAsMCwxLTIwLjQ2LDY2LjQ0QTk5LjgyLDk5LjgyLDAsMCwwLDQ3Mi4xNCwzNTkuNzVaTTQ1OS4yOCwxNjIuMzRjLTIuNzMtLjIyLTUuNDktLjM0LTguMjgtLjM0YTk5LjYyLDk5LjYyLDAsMCwwLTQyLjc5LDkuNkExMDAuNzcsMTAwLjc3LDAsMCwwLDQwOSwxNTlhOTkuNzUsOTkuNzUsMCwwLDAtNy44LTM4Ljc4LDIxMC4zNiwyMTAuMzYsMCwwLDEsNTYuMjksNDAuMjlDNDU4LjEsMTYxLjExLDQ1OC42OSwxNjEuNzMsNDU5LjI4LDE2Mi4zNFpNMjY1LjQ1LDUxNC40OWExMDAuMzcsMTAwLjM3LDAsMCwwLDQyLjYxLTQ2LjExLDEwMC40MywxMDAuNDMsMCwwLDAsNDEuMTgsNDYuNzgsMjEyLjY0LDIxMi42NCwwLDAsMS04My43OS0uNjdaIi8+PC9nPjwvZz48L3N2Zz4="},eLA5:function(e,t){},hupt:function(e,t){},k9c7:function(e,t){},s6lv:function(e,t){},tatT:function(e,t){},xux2:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.eb81e4febcd15ddf269d.js.map