(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e,t,a){e.exports=a(450)},228:function(e,t,a){},229:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){},450:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(19),s=a.n(o),r=(a(228),a(21)),l=a(22),c=a(24),u=a(23),m=a(25),d=(a(229),a(65)),g=a(44),p=a.n(g),h=a(32),E=a.n(h),f=a(43),v=a.n(f),w=a(17),k=a.n(w),b=a(26),C=a.n(b),S=a(18),j=a.n(S),L=a(66),y=a.n(L),O=a(34),P=a.n(O),N=a(30),x=a.n(N),T=a(6),M=a.n(T),R=a(28),z=a.n(R),D=a(35);var W=M()(function(e){return{main:Object(d.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes,a=Object.assign(R.messageMap,{isRequired:"Pole jest wymagane",isError:"B\u0142\u0119dny login lub has\u0142o"});return i.a.createElement("main",{className:t.main},i.a.createElement(v.a,null),i.a.createElement(P.a,{className:t.paper},i.a.createElement(p.a,{className:t.avatar},i.a.createElement(y.a,null)),i.a.createElement(x.a,{component:"h1",variant:"h5"},"Log in"),i.a.createElement(z.a,{className:t.form,onSubmit:e.handleLoginSubmit,validation:{messageMap:a}},i.a.createElement(k.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(j.a,{htmlFor:"email"},"Email Address or Login"),i.a.createElement(C.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0,value:""})),i.a.createElement(k.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(j.a,{htmlFor:"password"},"Password"),i.a.createElement(C.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",value:""})),e.loginError?i.a.createElement(D.a,{margin:"dense",error:!0},"B\u0142\u0119dny login lub has\u0142o"):null,i.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Log in")),i.a.createElement(x.a,{className:t.submit,component:"h6"},"First time?"),i.a.createElement(E.a,{onClick:e.handleOnClickRegister,fullWidth:!0,variant:"contained",color:"primary"},"Register")))}),I=a(33);var B=M()(function(e){return{main:Object(d.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:.5*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes,a=Object(n.useState)({login:"",email:"",password:"",password2:""}),o=Object(I.a)(a,2),s=o[0],r=o[1],l=Object(n.useState)({customValidations:{}}),c=Object(I.a)(l,2),u=c[0],m=c[1];R.validators.isLogin=function(e){return e.length>3&&e.length<20},R.validators.isPassword=function(e){var t=new RegExp(/[0-9]+/),a=new RegExp(/[A-Z]+/),n=new RegExp(/[a-z]+/);return s.password!==s.password2?m({customValidations:{password2:[{message:"Has\u0142a musz\u0105 by\u0107 identyczne, spr\xf3buj jeszcze raz"}]}}):m({customValidations:{}}),!!t.test(e)&&!!a.test(e)&&!!n.test(e)&&!(e.length<8||e.length>20)},R.validators.isPassword2=function(e){return s.password!==s.password2?(m({customValidations:{password2:[{message:"Has\u0142a musz\u0105 by\u0107 identyczne, spr\xf3buj jeszcze raz"}]}}),!1):(m({customValidations:{}}),!0)};var d=Object.assign(R.messageMap,{isLogin:"Login musi posiada\u0107 od 3 do 20 znak\xf3w!",isEmail:"To nie jest adres e-mail!",isPassword:"Has\u0142o musi posiada\u0107 od 8 do 20 znak\xf3w, przynajmniej 1 cyfr\u0119 i jedn\u0105 du\u017c\u0105 liter\u0119!",isPassword2:"Podaj ponownie poprawne has\u0142o!"});return i.a.createElement("main",{className:t.main},i.a.createElement(v.a,null),i.a.createElement(P.a,{className:t.paper},i.a.createElement(p.a,{className:t.avatar},i.a.createElement(y.a,null)),i.a.createElement(x.a,{component:"h1",variant:"h5"},"Register"),i.a.createElement(z.a,{className:t.form,onSubmit:e.handleRegisterSubmit,validation:{messageMap:d,validators:R.validators},onValuesChange:function(e){var t=e.login,a=e.email,n=e.password,i=e.password2;r({login:t,email:a,password:n,password2:i})},validations:u.customValidations},i.a.createElement(k.a,{margin:"normal",required:!0,fullWidth:!0,"data-validators":"isLogin"},i.a.createElement(j.a,{htmlFor:"login"},"Enter Login"),i.a.createElement(C.a,{id:"login",name:"login",autoComplete:"login",autoFocus:!0,value:s.login})),i.a.createElement(k.a,{margin:"normal",required:!0,fullWidth:!0,"data-validators":"isPassword"},i.a.createElement(j.a,{htmlFor:"password"},"Password"),i.a.createElement(C.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",value:s.password})),i.a.createElement(k.a,{margin:"normal",fullWidth:!0,"data-validators":"isPassword2"},i.a.createElement(j.a,{htmlFor:"password2"},"Re-enter Password"),i.a.createElement(C.a,{name:"password2",type:"password",id:"password2",value:s.password2})),i.a.createElement(k.a,{margin:"normal",required:!0,fullWidth:!0,"data-validators":"isEmail"},i.a.createElement(j.a,{htmlFor:"email"},"Email Address"),i.a.createElement(C.a,{id:"email",name:"email",autoComplete:"email",value:s.email})),e.doesLoginExist?i.a.createElement(D.a,{margin:"dense",error:!0},"Podany Login ju\u017c istnieje!"):null,e.doesEmailExist?i.a.createElement(D.a,{margin:"dense",error:!0},"Podany Email ju\u017c istnieje!"):null,i.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Send")),i.a.createElement(x.a,{className:t.submit,component:"h6"},"Already had account?"),i.a.createElement(E.a,{onClick:e.handleOnClickLogin,fullWidth:!0,variant:"contained",color:"primary"},"Login")))}),_=a(27),V=a.n(_);var F=function(){return"https://pmotak.vot.pl/api/"},H=V.a.create({baseURL:F(),timeout:1e3,headers:{"Content-type":"application/json"}});V.a.interceptors.response.use(function(e){return e},function(e){return 401===e.status?q.logout():null});var q={authenticated:function(){return localStorage.getItem("token")},login:function(e){var t=e.login,a=e.password;return H.post("login.php",{login:t,password:a}).then(function(e){var t=e.data,a=t.jwt,n=t.user;localStorage.setItem("profile",JSON.stringify(n)),localStorage.setItem("token",a),V.a.interceptors.request.use(function(e){return e.headers.authorization="Bearer ".concat(a),e})})},logout:function(){localStorage.removeItem("profile"),localStorage.removeItem("token"),V.a.interceptors.request.use(function(e){return delete e.headers.authorization,e})}};V.a.interceptors.response.use(function(e){return e.status},function(e){console.log(e.status)});var A={Register:function(e){var t=e.login,a=e.email,n=e.password;return H.post("create_user.php",{login:t,email:a,password:n})}},J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleOnClickRegister=function(){a.setState({loginPage:!1,loginError:!1})},a.handleOnClickLogin=function(){a.setState({loginPage:!0})},a.handleLoginSubmit=function(e){var t={login:e.email,password:e.password};q.login(t).then(function(){a.setState({loginError:!1}),a.props.handleLogin()}).catch(function(){return a.setState({loginError:!0})})},a.handleRegisterSubmit=function(e){A.Register(e).then(function(e){return a.setState({doesLoginExist:!1,doesEmailExist:!1,loginPage:!0}),e.data.message}).catch(function(e){var t=e.response;return 401===t.status?(a.setState({doesLoginExist:!0,doesEmailExist:!1}),t.data.message):402===t.status?(a.setState({doesEmailExist:!0,doesLoginExist:!1}),t.data.message):403===t.status?(a.setState({doesLoginExist:!0,doesEmailExist:!0}),t.data.message):void 0})},a.state={loginPage:!0,loginError:!1,doesLoginExist:!1,doesEmailExist:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"loginscreen"},this.state.loginPage?i.a.createElement(W,{loginError:this.state.loginError,handleOnClickRegister:this.handleOnClickRegister,handleLoginSubmit:this.handleLoginSubmit}):i.a.createElement(B,{doesLoginExist:this.state.doesLoginExist,doesEmailExist:this.state.doesEmailExist,handleRegisterSubmit:this.handleRegisterSubmit,handleOnClickLogin:this.handleOnClickLogin}))}}]),t}(n.Component);a(421);var Z=function(e){return i.a.createElement("button",{className:"BtnStart",onClick:e.handleStartClick},i.a.createElement("span",null,"Start"))};a(422);var U=function(e){return i.a.createElement("button",{className:"BtnPause",onClick:e.handlePauseClick},i.a.createElement("span",null,"Pause"))};a(423);var $=function(e){return i.a.createElement("button",{className:"BtnStop",onClick:e.handleStopClick},i.a.createElement("span",null,"Stop"))},G=(a(424),a(143)),K=a.n(G),Q=(n.Component,function(e){return("0"+e%60).slice(-2)}),X=function(e){return e/3600<0?("0"+Math.floor(e/60)).slice(-2):("0"+Math.floor(e%3600/60)).slice(-2)},Y=function(e){return("0"+Math.floor(e/3600)).slice(-2)};var ee=function(e){return i.a.createElement("h1",null,Y(e.secondsElapsed),":",X(e.secondsElapsed),":",Q(e.secondsElapsed))};V.a.interceptors.response.use(function(e){return e},function(e){return e});var te={create_log:function(e){var t=e.start,a=e.stop,n=e.jwt;return H.post("create_log.php",{start:t,stop:a,jwt:n}).then(function(e){return console.log(e.data.message)}).catch(function(e){return console.log("Auth failed: "+e.message)})},show_logs_page:function(e){var t=e.limit,a=e.offset,n=e.jwt;return H.post("show_logs_page.php",{limit:t,offset:a,jwt:n})}},ae=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleStartClick=function(){if(console.log("Start Clicked"),0===a.state.secondsElapsed){var e=new Date;a.setState({startDateTime:e})}a.setState({isPaused:!1}),a.incrementer=setInterval(function(){a.setState({secondsElapsed:a.state.secondsElapsed+1})},1e3)},a.handlePauseClick=function(){console.log("Pause Clicked"),a.setState({isPaused:!0}),clearInterval(a.incrementer)},a.handleStopClick=function(){console.log("Stop Clicked"),a.setState({isPaused:!0}),clearInterval(a.incrementer),a.saveLog(),a.setState({startDateTime:"",secondsElapsed:0})},a.saveLog=function(){var e=new Date(a.state.startDateTime),t=new Date(a.state.startDateTime);t.setSeconds(t.getSeconds()+1*a.state.secondsElapsed),console.log("log saved "+e+" "+t);var n={start:e.toJSON().slice(0,19).replace("T"," "),stop:t.toJSON().slice(0,19).replace("T"," "),jwt:q.authenticated()};n.jwt&&te.create_log(n)},a.state={startDateTime:"",secondsElapsed:0,isPaused:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ClockWrapper"},i.a.createElement(ee,{secondsElapsed:this.state.secondsElapsed}),i.a.createElement("div",{className:"BtnWrapper"},this.state.isPaused?i.a.createElement(Z,{handleStartClick:this.handleStartClick}):i.a.createElement(U,{handlePauseClick:this.handlePauseClick}),i.a.createElement($,{handleStopClick:this.handleStopClick})))}}]),t}(n.Component);a(425);var ne=function(e){return e.map(function(e){var t=new Date(e.start.replace(" ","T")+"Z"),a=(new Date(e.stop.replace(" ","T")+"Z")-t)/1e3,n=Math.floor(a/3600);a-=3600*n;var i=Math.floor(a/60),o=a-=60*i,s=("0"+n).slice(-2)+":"+("0"+i).slice(-2)+":"+("0"+o).slice(-2);return{id:e.id,user_id:e.user_id,start:t,logDuration:s,logDurationValue:a}})},ie=a(144),oe=(a(426),function(e){var t=e.limit,a=e.offset,o=e.dateOptions,s={limit:t,offset:a,jwt:q.authenticated()},r=function(e){var t=e.data;return ne(t.data)},l=Object(n.useState)(!0),c=Object(I.a)(l,2),u=c[0],m=c[1],d=Object(ie.a)(function(){return te.show_logs_page(s).then(r)},[]),g=d.isLoading,p=d.data,h=void 0===p?[]:p,E=Object(n.useState)([]),f=Object(I.a)(E,2),v=f[0],w=f[1];Object(n.useEffect)(function(){w(h)},[h]);var k=function(e,t){u?(v.sort(function(e,a){return e[t]===a[t]?0:e[t]>a[t]?1:-1}),w(v),m(!1)):(v.sort(function(e,a){return e[t]===a[t]?0:e[t]<a[t]?1:-1}),w(v),m(!0))};return i.a.createElement("div",null,g?i.a.createElement("div",null,"Loading..."):i.a.createElement("div",{className:"tableWrapper"},i.a.createElement("table",{className:"logTable"},i.a.createElement("thead",{className:"logThead"},i.a.createElement("tr",{className:"logTr"},i.a.createElement("th",{className:"logTh",onClick:function(e){return k(0,"start")}},"Rozpocz\u0119cie pracy"),i.a.createElement("th",{className:"logTh",onClick:function(e){return k(0,"logDurationValue")}},"Czas trwania"))),i.a.createElement("tbody",{className:"logTbody"},v.map(function(e,t){return i.a.createElement("tr",{className:"logTr",key:t,"data-item":e},i.a.createElement("td",{className:"logTd","data-title":"logStart"},e.start.toLocaleDateString("pl-PL",o)),i.a.createElement("td",{className:"logTd","data-title":"logDurationValue"},e.logDuration))})))))}),se=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={dateOptions:{year:"numeric",month:"long",day:"2-digit",hour:"numeric",minute:"numeric"},limit:10,offset:0,page:1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"historyWrapper"},i.a.createElement("h2",null,"Historia Log\xf3w: "),i.a.createElement(oe,{limit:this.state.limit,offset:this.state.offset,dateOptions:this.state.dateOptions}),i.a.createElement("div",{className:"paginationBtnsWrapper"}))}}]),t}(n.Component),re=a(64),le=a.n(re),ce=a(36),ue=a.n(ce),me=a(145),de=a.n(me);var ge=function(e){var t=i.a.useState(null),a=Object(I.a)(t,2),n=a[0],o=a[1];function s(){o(null)}return i.a.createElement("div",null,i.a.createElement(D.b,{"aria-label":"More","aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},i.a.createElement(de.a,null)),i.a.createElement(le.a,{id:"simple-menu",anchorEl:n,open:Boolean(n),onClose:s},i.a.createElement(ue.a,{onClick:s},"My account"),i.a.createElement(ue.a,{onClick:function(){s(),e.handleMenuClockClick()}},"Log Timer"),i.a.createElement(ue.a,{onClick:function(){s(),e.handleMenuHistoryClick()}},"History"),i.a.createElement(ue.a,{onClick:function(){s(),e.handleMenuLogOutClick()}},"Logout")))},pe=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleLogin=function(){a.setState({isLoggedIn:!0,clockPage:!0})},a.handleMenuLogOutClick=function(){q.logout(),a.setState({isLoggedIn:!1,clockPage:!0})},a.handleMenuHistoryClick=function(){a.setState({historyPage:!0,clockPage:!1})},a.handleMenuClockClick=function(){a.setState({historyPage:!1,clockPage:!0})},a.state={isLoggedIn:!1,loginPage:!0,clockPage:!1,historyPage:!1,userLoginName:"",loginError:!1,doesLoginExist:!1,doesEmailExist:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){q.authenticated()&&this.setState({isLoggedIn:!0,clockPage:!0})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"}," ",this.state.isLoggedIn?i.a.createElement("div",{className:"menuBtn"}," ",i.a.createElement(ge,{handleMenuLogOutClick:this.handleMenuLogOutClick,handleMenuHistoryClick:this.handleMenuHistoryClick,handleMenuClockClick:this.handleMenuClockClick})):null," ",this.state.isLoggedIn?this.state.clockPage?i.a.createElement(ae,null):this.state.historyPage?i.a.createElement(se,null):i.a.createElement("div",null," Sth gone totaly wrong "):i.a.createElement(J,{handleLogin:this.handleLogin}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[223,1,2]]]);
//# sourceMappingURL=main.cf956949.chunk.js.map