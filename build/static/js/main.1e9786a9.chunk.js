(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){e.exports=a(421)},219:function(e,t,a){},220:function(e,t,a){},393:function(e,t,a){},394:function(e,t,a){},395:function(e,t,a){},396:function(e,t,a){},397:function(e,t,a){},421:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(18),s=a.n(i),l=(a(219),a(25)),r=a(26),c=a(29),u=a(27),d=a(30),m=(a(220),a(63)),g=a(41),p=a.n(g),h=a(28),E=a.n(h),f=a(40),k=a.n(f),w=a(16),v=a.n(w),S=a(20),C=a.n(S),b=a(17),y=a.n(b),j=a(64),L=a.n(j),O=a(31),P=a.n(O),T=a(23),x=a.n(T),N=a(6),M=a.n(N),R=a(21),D=a.n(R),z=a(32);var W=M()(function(e){return{main:Object(m.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes,a=Object.assign(R.messageMap,{isRequired:"Pole jest wymagane",isError:"B\u0142\u0119dny login lub has\u0142o"});return o.a.createElement("main",{className:t.main},o.a.createElement(k.a,null),o.a.createElement(P.a,{className:t.paper},o.a.createElement(p.a,{className:t.avatar},o.a.createElement(L.a,null)),o.a.createElement(x.a,{component:"h1",variant:"h5"},"Log in"),o.a.createElement(D.a,{className:t.form,onSubmit:e.handleLoginSubmit,validation:{messageMap:a}},o.a.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0},o.a.createElement(y.a,{htmlFor:"email"},"Email Address or Login"),o.a.createElement(C.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0,value:""})),o.a.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0},o.a.createElement(y.a,{htmlFor:"password"},"Password"),o.a.createElement(C.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",value:""})),e.loginError?o.a.createElement(z.a,{margin:"dense",error:!0},"B\u0142\u0119dny login lub has\u0142o"):null,o.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Log in")),o.a.createElement(x.a,{className:t.submit,component:"h6"},"First time?"),o.a.createElement(E.a,{onClick:e.handleOnClickRegister,fullWidth:!0,variant:"contained",color:"primary"},"Register")))}),I=a(50);var A=M()(function(e){return{main:Object(m.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:.5*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes,a=Object(n.useState)({login:"",email:"",password:"",password2:""}),i=Object(I.a)(a,2),s=i[0],l=i[1],r=Object(n.useState)({customValidations:{}}),c=Object(I.a)(r,2),u=c[0],d=c[1];R.validators.isLogin=function(e){return e.length>3&&e.length<20},R.validators.isPassword=function(e){var t=new RegExp(/[0-9]+/),a=new RegExp(/[A-Z]+/),n=new RegExp(/[a-z]+/);return s.password!==s.password2?d({customValidations:{password2:[{message:"Has\u0142a musz\u0105 by\u0107 identyczne, spr\xf3buj jeszcze raz"}]}}):d({customValidations:{}}),!!t.test(e)&&!!a.test(e)&&!!n.test(e)&&!(e.length<8||e.length>20)},R.validators.isPassword2=function(e){return s.password!==s.password2?(d({customValidations:{password2:[{message:"Has\u0142a musz\u0105 by\u0107 identyczne, spr\xf3buj jeszcze raz"}]}}),!1):(d({customValidations:{}}),!0)};var m=Object.assign(R.messageMap,{isLogin:"Login musi posiada\u0107 od 3 do 20 znak\xf3w!",isEmail:"To nie jest adres e-mail!",isPassword:"Has\u0142o musi posiada\u0107 od 8 do 20 znak\xf3w, przynajmniej 1 cyfr\u0119 i jedn\u0105 du\u017c\u0105 liter\u0119!",isPassword2:"Podaj ponownie poprawne has\u0142o!"});return o.a.createElement("main",{className:t.main},o.a.createElement(k.a,null),o.a.createElement(P.a,{className:t.paper},o.a.createElement(p.a,{className:t.avatar},o.a.createElement(L.a,null)),o.a.createElement(x.a,{component:"h1",variant:"h5"},"Register"),o.a.createElement(D.a,{className:t.form,onSubmit:e.handleRegisterSubmit,validation:{messageMap:m,validators:R.validators},onValuesChange:function(e){var t=e.login,a=e.email,n=e.password,o=e.password2;l({login:t,email:a,password:n,password2:o})},validations:u.customValidations},o.a.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,"data-validators":"isLogin"},o.a.createElement(y.a,{htmlFor:"login"},"Enter Login"),o.a.createElement(C.a,{id:"login",name:"login",autoComplete:"login",autoFocus:!0,value:s.login})),o.a.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,"data-validators":"isPassword"},o.a.createElement(y.a,{htmlFor:"password"},"Password"),o.a.createElement(C.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",value:s.password})),o.a.createElement(v.a,{margin:"normal",fullWidth:!0,"data-validators":"isPassword2"},o.a.createElement(y.a,{htmlFor:"password2"},"Re-enter Password"),o.a.createElement(C.a,{name:"password2",type:"password",id:"password2",value:s.password2})),o.a.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,"data-validators":"isEmail"},o.a.createElement(y.a,{htmlFor:"email"},"Email Address"),o.a.createElement(C.a,{id:"email",name:"email",autoComplete:"email",value:s.email})),e.doesLoginExist?o.a.createElement(z.a,{margin:"dense",error:!0},"Podany Login ju\u017c istnieje!"):null,e.doesEmailExist?o.a.createElement(z.a,{margin:"dense",error:!0},"Podany Email ju\u017c istnieje!"):null,o.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Send")),o.a.createElement(x.a,{className:t.submit,component:"h6"},"Already had account?"),o.a.createElement(E.a,{onClick:e.handleOnClickLogin,fullWidth:!0,variant:"contained",color:"primary"},"Login")))});var B=function(e){return o.a.createElement("div",{className:"loginscreen"},e.loginPage?o.a.createElement(W,{loginError:e.loginError,handleOnClickRegister:e.handleOnClickRegister,handleLoginSubmit:e.handleLoginSubmit}):o.a.createElement(A,{doesLoginExist:e.doesLoginExist,doesEmailExist:e.doesEmailExist,handleRegisterSubmit:e.handleRegisterSubmit,handleOnClickLogin:e.handleOnClickLogin}))};a(393);var H=function(e){return o.a.createElement("button",{className:"BtnStart",onClick:e.handleStartClick},o.a.createElement("span",null,"Start"))};a(394);var J=function(e){return o.a.createElement("button",{className:"BtnPause",onClick:e.handlePauseClick},o.a.createElement("span",null,"Pause"))};a(395);var V=function(e){return o.a.createElement("button",{className:"BtnStop",onClick:e.handleStopClick},o.a.createElement("span",null,"Stop"))},F=(a(396),a(135)),q=a.n(F),_=(n.Component,function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"getSeconds",value:function(){return("0"+this.props.secondsElapsed%60).slice(-2)}},{key:"getMinutes",value:function(){return this.props.secondsElapsed/3600<0?("0"+Math.floor(this.props.secondsElapsed/60)).slice(-2):("0"+Math.floor(this.props.secondsElapsed%3600/60)).slice(-2)}},{key:"getHours",value:function(){return("0"+Math.floor(this.props.secondsElapsed/3600)).slice(-2)}},{key:"render",value:function(){return o.a.createElement("div",{className:"ClockWrapper"},o.a.createElement("h1",null,this.getHours(),":",this.getMinutes(),":",this.getSeconds()),o.a.createElement("div",{className:"BtnWrapper"},this.props.isPaused?o.a.createElement(H,{handleStartClick:this.props.handleStartClick}):o.a.createElement(J,{handlePauseClick:this.props.handlePauseClick}),o.a.createElement(V,{handleStopClick:this.props.handleStopClick})))}}]),t}(n.Component));a(397);var Z=function(){return"https://pmotak.vot.pl/api/"},$=Z(),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSort=function(e,t){var n=a.state.data;a.state.sortAsc?(n.sort(function(e,a){return e[t]===a[t]?0:e[t]>a[t]?1:-1}),a.setState({data:n,sortAsc:!1})):(n.sort(function(e,a){return e[t]===a[t]?0:e[t]<a[t]?1:-1}),a.setState({data:n,sortAsc:!0}))},a.state={data:[],dateOptions:{year:"numeric",month:"long",day:"2-digit",hour:"numeric",minute:"numeric"},limit:10,offset:0,sortAsc:!0,page:1,showLogsError:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"fetchData",value:function(e,t){var a=this;fetch($+"show_logs_page.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({limit:e,offset:t,jwt:this.props.jwtToken})}).then(function(e){return 200===e.status?(a.setState({showLogsError:!1}),e.json()):401===e.status?(a.setState({showLogsError:!0}),""):void 0}).then(function(e){var t=e.data,n=[];console.log(t),t.map(function(e){var t=new Date(e.start.replace(" ","T")+"Z"),a=(new Date(e.stop.replace(" ","T")+"Z")-t)/1e3;console.log(a);var o=Math.floor(a/3600);console.log(o),a-=3600*o;var i=Math.floor(a/60);console.log(i);var s=a-=60*i;console.log(s);var l=("0"+o).slice(-2)+":"+("0"+i).slice(-2)+":"+("0"+s).slice(-2),r={id:e.id,user_id:e.user_id,start:t,logDuration:l,logDurationValue:a};return n.push(r),n}),a.setState({data:n})}).catch(function(e){return console.log("Auth failed: "+e.message)})}},{key:"componentDidMount",value:function(){this.fetchData(this.state.limit,this.state.offset)}},{key:"render",value:function(){var e=this,t=this.state.data;return o.a.createElement("div",{className:"historyWrapper"},o.a.createElement("h2",null,"Historia Log\xf3w: "),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{onClick:function(t){return e.onSort(t,"start")}},"Rozpocz\u0119cie pracy"),o.a.createElement("th",{onClick:function(t){return e.onSort(t,"logDurationValue")}},"Czas trwania"))),o.a.createElement("tbody",null,t.map(function(t,a){return o.a.createElement("tr",{key:a,"data-item":t},o.a.createElement("td",{"data-title":"logStart"},t.start.toLocaleDateString("pl-PL",e.state.dateOptions)),o.a.createElement("td",{"data-title":"logDurationValue"},t.logDuration))}))),o.a.createElement("div",{className:"paginationBtnsWrapper"}))}}]),t}(n.Component),K=a(62),Q=a.n(K),U=a(33),X=a.n(U),Y=a(136),ee=a.n(Y);var te=function(e){var t=o.a.useState(null),a=Object(I.a)(t,2),n=a[0],i=a[1];function s(){i(null)}return o.a.createElement("div",null,o.a.createElement(z.b,{"aria-label":"More","aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},o.a.createElement(ee.a,null)),o.a.createElement(Q.a,{id:"simple-menu",anchorEl:n,open:Boolean(n),onClose:s},o.a.createElement(X.a,{onClick:s},"My account"),o.a.createElement(X.a,{onClick:function(){s(),e.handleMenuClockClick()}},"Log Timer"),o.a.createElement(X.a,{onClick:function(){s(),e.handleMenuHistoryClick()}},"History"),o.a.createElement(X.a,{onClick:function(){s(),e.handleMenuLogOutClick()}},"Logout")))},ae=Z(),ne=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleOnClickRegister=function(){console.log("register cliced"),a.setState({loginPage:!1,loginError:!1})},a.handleOnClickLogin=function(){console.log("login cliced"),a.setState({loginPage:!0})},a.handleLoginSubmit=function(e){new Response;fetch(ae+"login.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({login:e.email,password:e.password})}).then(function(e){return 200!==e.status&&a.setState({loginError:!0}),e.json()}).then(function(e){if("Login failed."===e.message)return null;a.setState({jwtToken:e.jwt,loginError:!1}),e.jwt&&(localStorage.setItem("jwtToken",JSON.stringify(a.state.jwtToken)),a.setState({isLoggedIn:!0,clockPage:!0,loginError:!1}))}).catch(function(e){return console.log(e)})},a.handleRegisterSubmit=function(e){console.log(e.login,e.email,e.password),fetch(ae+"create_user.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({login:e.login,email:e.email,password:e.password})}).then(function(e){return 401===e.status?(a.setState({doesLoginExist:!0,doesEmailExist:!1}),e.json()):402===e.status?(a.setState({doesEmailExist:!0,doesLoginExist:!1}),e.json()):403===e.status?(a.setState({doesLoginExist:!0,doesEmailExist:!0}),e.json()):(a.setState({doesLoginExist:!1,doesEmailExist:!1,loginPage:!0}),e.json())}).catch(function(e){return console.log("Auth failed: "+e.message)})},a.handleStartClick=function(){if(console.log("Start Clicked"),0===a.state.secondsElapsed){var e=new Date;a.setState({startDateTime:e})}a.setState({isPaused:!1}),a.incrementer=setInterval(function(){a.setState({secondsElapsed:a.state.secondsElapsed+1})},1e3)},a.handlePauseClick=function(){console.log("Pause Clicked"),a.setState({isPaused:!0}),clearInterval(a.incrementer)},a.handleStopClick=function(){console.log("Stop Clicked"),a.setState({isPaused:!0}),clearInterval(a.incrementer),a.saveLog(),a.setState({startDateTime:"",secondsElapsed:0})},a.saveLog=function(){var e=new Date(a.state.startDateTime),t=new Date(a.state.startDateTime);t.setSeconds(t.getSeconds()+1*a.state.secondsElapsed),console.log("log saved "+e+" "+t);var n=e.toJSON().slice(0,19).replace("T"," "),o=t.toJSON().slice(0,19).replace("T"," ");fetch(ae+"create_log.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({start:n,stop:o,jwt:a.state.jwtToken})}).then(function(e){return e.json()}).then(function(e){console.log("Log created "+e)}).catch(function(e){return console.log("Auth failed: "+e.message)})},a.handleMenuLogOutClick=function(){console.log("logged out"),localStorage.removeItem("jwtToken"),a.setState({jwtToken:"",isLoggedIn:!1,clockPage:!0})},a.handleMenuHistoryClick=function(){a.setState({historyPage:!0,clockPage:!1})},a.handleMenuClockClick=function(){a.setState({historyPage:!1,clockPage:!0})},a.state={isLoggedIn:!1,loginPage:!0,clockPage:!1,historyPage:!1,jwtToken:"",userLoginName:"",startDateTime:"",secondsElapsed:0,isPaused:!0,loginError:!1,doesLoginExist:!1,doesEmailExist:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("jwtToken")&&this.setState({jwtToken:JSON.parse(localStorage.getItem("jwtToken")),isLoggedIn:!0,clockPage:!0})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"}," ",this.state.isLoggedIn?o.a.createElement("div",{className:"menuBtn"}," ",o.a.createElement(te,{handleMenuLogOutClick:this.handleMenuLogOutClick,handleMenuHistoryClick:this.handleMenuHistoryClick,handleMenuClockClick:this.handleMenuClockClick})):null," ",this.state.isLoggedIn?this.state.clockPage?o.a.createElement(_,{secondsElapsed:this.state.secondsElapsed,handleStartClick:this.handleStartClick,handlePauseClick:this.handlePauseClick,handleStopClick:this.handleStopClick,isPaused:this.state.isPaused}):this.state.historyPage?o.a.createElement(G,{jwtToken:this.state.jwtToken}):o.a.createElement("div",null," Sth gone totaly wrong "):o.a.createElement(B,{loginPage:this.state.loginPage,loginError:this.state.loginError,doesLoginExist:this.state.doesLoginExist,doesEmailExist:this.state.doesEmailExist,handleOnClickRegister:this.handleOnClickRegister,handleOnClickLogin:this.handleOnClickLogin,handleLoginSubmit:this.handleLoginSubmit,handleRegisterSubmit:this.handleRegisterSubmit})," ")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[214,1,2]]]);
//# sourceMappingURL=main.1e9786a9.chunk.js.map