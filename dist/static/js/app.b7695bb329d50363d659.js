webpackJsonp([1],{"3+Qm":function(n,e){},"8t2x":function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("7+uW"),o={render:function(){var n=this.$createElement,e=this._self._c||n;return e("header",[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t("bhF5")}}),this._v(" "),e("h1",[this._v(this._s(this.appName))])])])},staticRenderFns:[]};var a=t("VU/8")({data:function(){return{appName:"My Movie Database"}}},o,!1,function(n){t("yFJA")},"data-v-3afa5e5e",null).exports,i=t("mtWM"),u=t.n(i),r={name:"loginComp_app",data:function(){return{logon_username:"",logon_password:""}},methods:{validateLogon:function(){console.log("login attempted"),console.log(f.phpPath),u.a.get(f.phpPath+"/php/checkUser.php").then(function(n){console.log(n.data)})}}},p={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"loginContainer"},[n._m(0),n._v(" "),t("div",{staticClass:"loginInput"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.logon_username,expression:"logon_username"}],attrs:{type:"text",name:"logon_username",value:"",placeholder:"User Name..."},domProps:{value:n.logon_username},on:{input:function(e){e.target.composing||(n.logon_username=e.target.value)}}}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.logon_password,expression:"logon_password"}],attrs:{type:"password",name:"logon_password",value:"",placeholder:"Password..."},domProps:{value:n.logon_password},on:{input:function(e){e.target.composing||(n.logon_password=e.target.value)}}}),n._v(" "),t("input",{attrs:{type:"button",name:"submit",value:"Login"},on:{click:n.validateLogon}}),n._v(" "),t("p",[n._v("Or")]),n._v(" "),t("input",{attrs:{type:"button",name:"signup",value:"Sign up"},on:{click:function(e){return n.$emit("swapLogin")}}})])])])},staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"loginHeader"},[e("h3",[this._v("Please Sign in:")])])}]};var l={name:"app",data:function(){return{signup_username:"",signup_password:"",signup_vPassword:"",signup_email:""}},methods:{validateSignup:function(){console.log("user signup")}}},c={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"loginContainer"},[n._m(0),n._v(" "),t("div",{staticClass:"signupInput"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.signup_username,expression:"signup_username"}],attrs:{type:"text",name:"signup_username",value:"",placeholder:"User Name..."},domProps:{value:n.signup_username},on:{input:function(e){e.target.composing||(n.signup_username=e.target.value)}}}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.signup_password,expression:"signup_password"}],attrs:{type:"password",name:"signup_password",value:"",placeholder:"Password..."},domProps:{value:n.signup_password},on:{input:function(e){e.target.composing||(n.signup_password=e.target.value)}}}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.signup_vPassword,expression:"signup_vPassword"}],attrs:{type:"password",name:"signup_vPassword",value:"",placeholder:"Verify Password..."},domProps:{value:n.signup_vPassword},on:{input:function(e){e.target.composing||(n.signup_vPassword=e.target.value)}}}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.signup_email,expression:"signup_email"}],attrs:{type:"email",name:"signup_email",value:"",placeholder:"Enter Email..."},domProps:{value:n.signup_email},on:{input:function(e){e.target.composing||(n.signup_email=e.target.value)}}}),n._v(" "),t("input",{attrs:{type:"button",name:"signup",value:"Sign up"},on:{click:n.validateSignup}}),n._v(" "),t("p",[n._v("Or, already have an account?")]),n._v(" "),t("input",{attrs:{type:"button",name:"submit",value:"Go to Login"},on:{click:function(e){return n.$emit("swapLogin")}}})])])])},staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"signupHeader"},[e("h3",[this._v("Enter your Information:")])])}]};var w={components:{"app-login":t("VU/8")(r,p,!1,function(n){t("UTew")},null,null).exports,"app-signup":t("VU/8")(l,c,!1,function(n){t("Rar/")},null,null).exports},name:"loginPage_app",data:function(){return{component:"app-login"}},methods:{swapLoginComponent:function(){"app-login"===this.component?this.component="app-signup":this.component="app-login"}},updateComponent:function(n){console.log(n)}},M={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e(this.component,{tag:"component",on:{swapLogin:this.swapLoginComponent}})],1)},staticRenderFns:[]};var d=t("VU/8")(w,M,!1,function(n){t("xux2")},null,null).exports,m={name:"homeComp_app",data:function(){return{}},methods:{addMovies:function(){console.log("add Movies clicked")},browseMovies:function(){console.log("browse movies clicked")}}},L={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("h1",[this._v("Home Page")]),this._v(" "),e("a",{on:{click:this.addMovies}},[this._v("Add Movies")]),this._v(" "),e("a",{on:{click:this.browseMovies}},[this._v("Browse Movies")])])},staticRenderFns:[]};var v={components:{"app-home":t("VU/8")(m,L,!1,function(n){t("lQLn")},null,null).exports},name:"homePage_app",data:function(){return{component:"app-home"}},methods:{swapLoginComponent:function(){"app-login"===this.component?this.component="app-signup":this.component="app-login"}}},g={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e(this.component,{tag:"component",on:{swapLogin:this.swapLoginComponent}})],1)},staticRenderFns:[]};var D=t("VU/8")(v,g,!1,function(n){t("8t2x")},null,null).exports,h={components:{"app-header":a,"app-login":d,"app-home":D},name:"main_app",data:function(){return{main_component:"app-login"}},methods:{updateComponent:function(n){this.main_component=n}}},N={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var _=t("VU/8")(h,N,!1,function(n){t("jwTt")},null,null).exports,j=t("/ocq"),x={name:"addPage_app",data:function(){return{}},methods:{addMovies:function(){console.log("add Movies clicked")},browseMovies:function(){console.log("browse movies clicked")}}},y={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("h1",[this._v("Home Page")]),this._v(" "),e("a",{on:{click:this.addMovies}},[this._v("Add Movies")]),this._v(" "),e("a",{on:{click:this.browseMovies}},[this._v("Browse Movies")])])},staticRenderFns:[]};var T=[{path:"/",component:d},{path:"/home",component:D},{path:"/add",component:t("VU/8")(x,y,!1,function(n){t("3+Qm")},null,null).exports}];t.d(e,"globalStore",function(){return f}),s.a.use(j.a);var C=new j.a({routes:T}),f=new s.a({data:{phpPath:"http://localhost:8000"}});new s.a({el:"#app",render:function(n){return n(_)},router:C})},"Rar/":function(n,e){},UTew:function(n,e){},bhF5:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTggNjE4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzRkNGQ0ZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPm1vdmllX3JlZWw8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMzA5IiBjeT0iMzA5IiByPSIzMDkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik01NTksMzA5QzU1OSwxNzEuNzksNDQ4LjQ2LDYwLjQyLDMxMS41OCw1OXEtMS4yOSwwLTIuNTgsMHQtMi41OCwwQzIwMy4xOSw2MC4wOCwxMTUsMTIzLjY4LDc3LjgxLDIxMy43NGE5OS4yMyw5OS4yMywwLDAsMC04LjY3LDI0LjYzQTI0OS44OCwyNDkuODgsMCwwLDAsNTksMzA5YzAsMTM4LjA3LDExMS45MywyNTAsMjUwLDI1MGEyNDguODcsMjQ4Ljg3LDAsMCwwLDEzOS43Mi00Mi42NiwxMDAsMTAwLDAsMCwwLDIyLjM5LTE3QTI0OS40MSwyNDkuNDEsMCwwLDAsNTU5LDMwOVpNNDI4LjIyLDQ4MS45M2E2MC4yNSw2MC4yNSwwLDEsMSwxNS4xOC0xMS41N1E0MzYsNDc2LjUzLDQyOC4yMiw0ODEuOTNaTTEwOC4xMywyNDcuNDFxMi40OS04LjE1LDUuNjUtMTYuMDZBNjAsNjAsMCwxLDEsMTA3LDI1OSw2MC42NSw2MC42NSwwLDAsMSwxMDguMTMsMjQ3LjQxWm0xMDEuMzItNzlBOTkuNjMsOTkuNjMsMCwwLDAsMTY3LDE1OWMtMS43LDAtMy40LDAtNS4wOC4xM2EyMTAuMjYsMjEwLjI2LDAsMCwxLDU0Ljg4LTM4LjkxQTk5Ljc1LDk5Ljc1LDAsMCwwLDIwOSwxNTlDMjA5LDE2Mi4xOCwyMDkuMTYsMTY1LjMzLDIwOS40NSwxNjguNDRaTTE0NS44NCwzNTYuNzVhOTkuODQsOTkuODQsMCwwLDAtMjUuNTIsNDQuNjUsMjA3LjgsMjA3LjgsMCwwLDEtMTkuODktNjcuOEE5OS43OSw5OS43OSwwLDAsMCwxNDUuODQsMzU2Ljc1Wk0yMTcsNDg3YTYwLDYwLDAsMSwxLDYwLTYwQTYwLjA3LDYwLjA3LDAsMCwxLDIxNyw0ODdabTMyLTMyOGE2MCw2MCwwLDEsMSw2MCw2MEE2MC4wNyw2MC4wNywwLDAsMSwyNDksMTU5Wk01MTEsMjYyYTYwLDYwLDAsMSwxLTYwLTYwQTYwLjA3LDYwLjA3LDAsMCwxLDUxMSwyNjJabS0zOC44Niw5Ny43NWE5OS42OSw5OS42OSwwLDAsMCw0NS0yMi43NywyMDcuOTIsMjA3LjkyLDAsMCwxLTIwLjQ2LDY2LjQ0QTk5LjgyLDk5LjgyLDAsMCwwLDQ3Mi4xNCwzNTkuNzVaTTQ1OS4yOCwxNjIuMzRjLTIuNzMtLjIyLTUuNDktLjM0LTguMjgtLjM0YTk5LjYyLDk5LjYyLDAsMCwwLTQyLjc5LDkuNkExMDAuNzcsMTAwLjc3LDAsMCwwLDQwOSwxNTlhOTkuNzUsOTkuNzUsMCwwLDAtNy44LTM4Ljc4LDIxMC4zNiwyMTAuMzYsMCwwLDEsNTYuMjksNDAuMjlDNDU4LjEsMTYxLjExLDQ1OC42OSwxNjEuNzMsNDU5LjI4LDE2Mi4zNFpNMjY1LjQ1LDUxNC40OWExMDAuMzcsMTAwLjM3LDAsMCwwLDQyLjYxLTQ2LjExLDEwMC40MywxMDAuNDMsMCwwLDAsNDEuMTgsNDYuNzgsMjEyLjY0LDIxMi42NCwwLDAsMS04My43OS0uNjdaIi8+PC9nPjwvZz48L3N2Zz4="},jwTt:function(n,e){},lQLn:function(n,e){},xux2:function(n,e){},yFJA:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.b7695bb329d50363d659.js.map