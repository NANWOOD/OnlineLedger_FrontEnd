(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"336r":function(e,t,a){e.exports={login:"antd-pro-pages-user-login-components-login-index-login",getCaptcha:"antd-pro-pages-user-login-components-login-index-getCaptcha",icon:"antd-pro-pages-user-login-components-login-index-icon",other:"antd-pro-pages-user-login-components-login-index-other",register:"antd-pro-pages-user-login-components-login-index-register",prefixIcon:"antd-pro-pages-user-login-components-login-index-prefixIcon",submit:"antd-pro-pages-user-login-components-login-index-submit"}},"43H7":function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var l=r(a("BMrR"));a("+L6B");var o=r(a("2/Rp"));a("jCWc");var u=r(a("kPKH"));a("5NDa");var i=r(a("5rEg")),s=r(a("jehZ")),d=r(a("Y/ft")),c=r(a("2Taf")),f=r(a("vZ4D")),p=r(a("l4Ni")),m=r(a("ujKo")),g=r(a("MhPg"));a("y8nQ");var h=r(a("Vl3Y")),v=n(a("q1tI")),b=r(a("BGR+")),y=r(a("DQDj")),C=r(a("KcKg")),E=r(a("336r")),M=h.default.Item,w=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,p.default)(this,(0,m.default)(t).call(this,e)),a.interval=void 0,a.onGetCaptcha=function(){var e=a.props.onGetCaptcha,t=e?e():null;!1!==t&&(t instanceof Promise?t.then(a.runGetCaptchaCountDown):a.runGetCaptchaCountDown())},a.getFormItemOptions=function(e){var t=e.onChange,a=e.defaultValue,n=e.customProps,r=void 0===n?{}:n,l=e.rules,o={rules:l||r.rules};return t&&(o.onChange=t),a&&(o.initialValue=a),o},a.runGetCaptchaCountDown=function(){var e=a.props.countDown,t=e||59;a.setState({count:t}),a.interval=window.setInterval(function(){t-=1,a.setState({count:t}),0===t&&clearInterval(a.interval)},1e3)},a.state={count:0},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateActive,a=e.name,n=void 0===a?"":a;t&&t(n)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.count,t=this.props,a=(t.onChange,t.customProps),n=(t.defaultValue,t.rules,t.name),r=t.getCaptchaButtonText,c=t.getCaptchaSecondText,f=(t.updateActive,t.type),p=t.form,m=(t.tabUtil,(0,d.default)(t,["onChange","customProps","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type","form","tabUtil"]));if(!n)return null;if(!p)return null;var g=p.getFieldDecorator,h=this.getFormItemOptions(this.props),y=m||{};if("Captcha"===f){var C=(0,b.default)(y,["onGetCaptcha","countDown"]);return v.default.createElement(M,null,v.default.createElement(l.default,{gutter:8},v.default.createElement(u.default,{span:16},g(n,h)(v.default.createElement(i.default,(0,s.default)({},a,C)))),v.default.createElement(u.default,{span:8},v.default.createElement(o.default,{disabled:!!e,className:E.default.getCaptcha,size:"large",onClick:this.onGetCaptcha},e?"".concat(e," ").concat(c):r))))}return v.default.createElement(M,null,g(n,h)(v.default.createElement(i.default,(0,s.default)({},a,y))))}}]),t}(v.Component);w.defaultProps={getCaptchaButtonText:"captcha",getCaptchaSecondText:"second"};var x={};Object.keys(y.default).forEach(function(e){var t=y.default[e];x[e]=function(a){return v.default.createElement(C.default.Consumer,null,function(n){return v.default.createElement(w,(0,s.default)({customProps:t.props,rules:t.rules},a,{type:e},n,{updateActive:n.updateActive}))})}});var P=x;t.default=P},BrB9:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("y8nQ");var l=r(a("Vl3Y"));a("Znn+");var o=r(a("ZTPi")),u=r(a("p0pE")),i=r(a("gWZ8")),s=r(a("2Taf")),d=r(a("vZ4D")),c=r(a("l4Ni")),f=r(a("ujKo")),p=r(a("MhPg")),m=n(a("q1tI")),g=r(a("TSYQ")),h=r(a("KcKg")),v=r(a("43H7")),b=r(a("KVJp")),y=r(a("W+CG")),C=r(a("336r")),E=function(e){function t(e){var a;return(0,s.default)(this,t),a=(0,c.default)(this,(0,f.default)(t).call(this,e)),a.onSwitch=function(e){a.setState({type:e},function(){var t=a.props.onTabChange;t&&t(e)})},a.getContext=function(){var e=a.props.form,t=a.state.tabs,n=void 0===t?[]:t;return{tabUtil:{addTab:function(e){a.setState({tabs:[].concat((0,i.default)(n),[e])})},removeTab:function(e){a.setState({tabs:n.filter(function(t){return t!==e})})}},form:(0,u.default)({},e),updateActive:function(e){var t=a.state,n=t.type,r=void 0===n?"":n,l=t.active,o=void 0===l?{}:l;o[r]?o[r].push(e):o[r]=[e],a.setState({active:o})}}},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.active,r=void 0===n?{}:n,l=t.type,o=void 0===l?"":l,u=a.props,i=u.form,s=u.onSubmit,d=r[o]||[];i&&i.validateFields(d,{force:!0},function(e,t){s&&s(e,t)})},a.state={type:e.defaultActiveKey,tabs:[],active:{}},a}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.form,a=e.onCreate;a&&a(t)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,n=this.state,r=n.type,u=n.tabs,i=void 0===u?[]:u,s=[],d=[];return m.default.Children.forEach(a,function(e){e&&("LoginTab"===e.type.typeName?s.push(e):d.push(e))}),m.default.createElement(h.default.Provider,{value:this.getContext()},m.default.createElement("div",{className:(0,g.default)(t,C.default.login)},m.default.createElement(l.default,{onSubmit:this.handleSubmit},i.length?m.default.createElement(m.default.Fragment,null,m.default.createElement(o.default,{animated:!1,className:C.default.tabs,activeKey:r,onChange:this.onSwitch},s),d):a)))}}]),t}(m.Component);E.Tab=y.default,E.Submit=b.default,E.defaultProps={className:"",defaultActiveKey:"",onTabChange:function(){},onSubmit:function(){}},Object.keys(v.default).forEach(function(e){E[e]=v.default[e]});var M=l.default.create()(E);t.default=M},DQDj:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r=n(a("CtXQ")),l=n(a("q1tI")),o=n(a("336r")),u={UserName:{props:{size:"large",id:"userName",prefix:l.default.createElement(r.default,{type:"user",className:o.default.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:l.default.createElement(r.default,{type:"lock",className:o.default.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:l.default.createElement(r.default,{type:"mobile",className:o.default.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:l.default.createElement(r.default,{type:"mail",className:o.default.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}};t.default=u},KVJp:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=n(a("2/Rp")),l=n(a("jehZ")),o=n(a("Y/ft"));a("y8nQ");var u=n(a("Vl3Y")),i=n(a("q1tI")),s=n(a("TSYQ")),d=n(a("336r")),c=u.default.Item,f=function(e){var t=e.className,a=(0,o.default)(e,["className"]),n=(0,s.default)(d.default.submit,t);return i.default.createElement(c,null,i.default.createElement(r.default,(0,l.default)({size:"large",className:n,type:"primary",htmlType:"submit"},a)))},p=f;t.default=p},KcKg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("q1tI"),r=(0,n.createContext)({}),l=r;t.default=l},NGMh:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var l=r(a("CtXQ"));a("sRBo");var o=r(a("kaz8"));a("fOrg");var u=r(a("+KLJ")),i=r(a("d6i3")),s=r(a("1l/V")),d=r(a("p0pE")),c=r(a("2Taf")),f=r(a("vZ4D")),p=r(a("l4Ni")),m=r(a("ujKo")),g=r(a("MhPg")),h=a("Y2fQ"),v=n(a("q1tI")),b=r(a("wY1l")),y=a("Hg0r"),C=r(a("BrB9")),E=r(a("d40l")),M=C.default.Tab,w=C.default.UserName,x=C.default.Password,P=C.default.Mobile,N=C.default.Captcha,T=C.default.Submit,S=function(e){function t(){var e,a;(0,c.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=(0,p.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(r))),a.loginForm=void 0,a.state={type:"account",autoLogin:!0},a.changeAutoLogin=function(e){a.setState({autoLogin:e.target.checked})},a.handleSubmit=function(e,t){var n=a.state.type;if(!e){var r=a.props.dispatch;r({type:"login/login",payload:(0,d.default)({},t,{type:n})})}},a.onTabChange=function(e){a.setState({type:e})},a.onGetCaptcha=function(){return new Promise(function(e,t){a.loginForm&&a.loginForm.validateFields(["mobile"],{},function(){var n=(0,s.default)(i.default.mark(function n(r,l){var o,u;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(!r){n.next=4;break}t(r),n.next=15;break;case 4:return o=a.props.dispatch,n.prev=5,n.next=8,o({type:"login/getCaptcha",payload:l.mobile});case 8:u=n.sent,e(!!u),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](5),t(n.t0);case 15:case"end":return n.stop()}},n,null,[[5,12]])}));return function(e,t){return n.apply(this,arguments)}}())})},a.renderMessage=function(e){return v.default.createElement(u.default,{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.userLogin,n=void 0===a?{}:a,r=t.submitting,u=n.status,i=n.type,s=this.state,d=s.type,c=s.autoLogin;return v.default.createElement("div",{className:E.default.main},v.default.createElement(C.default,{defaultActiveKey:d,onTabChange:this.onTabChange,onSubmit:this.handleSubmit,onCreate:function(t){e.loginForm=t}},v.default.createElement(M,{key:"account",tab:(0,h.formatMessage)({id:"user-login.login.tab-login-credentials"})},"error"===u&&"account"===i&&!r&&this.renderMessage((0,h.formatMessage)({id:"user-login.login.message-invalid-credentials"})),v.default.createElement(w,{name:"userName",placeholder:"".concat((0,h.formatMessage)({id:"user-login.login.userName"}),": admin or user"),rules:[{required:!0,message:(0,h.formatMessage)({id:"user-login.userName.required"})}]}),v.default.createElement(x,{name:"password",placeholder:"".concat((0,h.formatMessage)({id:"user-login.login.password"}),": ant.design"),rules:[{required:!0,message:(0,h.formatMessage)({id:"user-login.password.required"})}],onPressEnter:function(t){t.preventDefault(),e.loginForm&&e.loginForm.validateFields(e.handleSubmit)}})),v.default.createElement(M,{key:"mobile",tab:(0,h.formatMessage)({id:"user-login.login.tab-login-mobile"})},"error"===u&&"mobile"===i&&!r&&this.renderMessage((0,h.formatMessage)({id:"user-login.login.message-invalid-verification-code"})),v.default.createElement(P,{name:"mobile",placeholder:(0,h.formatMessage)({id:"user-login.phone-number.placeholder"}),rules:[{required:!0,message:(0,h.formatMessage)({id:"user-login.phone-number.required"})},{pattern:/^1\d{10}$/,message:(0,h.formatMessage)({id:"user-login.phone-number.wrong-format"})}]}),v.default.createElement(N,{name:"captcha",placeholder:(0,h.formatMessage)({id:"user-login.verification-code.placeholder"}),countDown:120,onGetCaptcha:this.onGetCaptcha,getCaptchaButtonText:(0,h.formatMessage)({id:"user-login.form.get-captcha"}),getCaptchaSecondText:(0,h.formatMessage)({id:"user-login.captcha.second"}),rules:[{required:!0,message:(0,h.formatMessage)({id:"user-login.verification-code.required"})}]})),v.default.createElement("div",null,v.default.createElement(o.default,{checked:c,onChange:this.changeAutoLogin},v.default.createElement(h.FormattedMessage,{id:"user-login.login.remember-me"})),v.default.createElement("a",{style:{float:"right"},href:""},v.default.createElement(h.FormattedMessage,{id:"user-login.login.forgot-password"}))),v.default.createElement(T,{loading:r},v.default.createElement(h.FormattedMessage,{id:"user-login.login.login"})),v.default.createElement("div",{className:E.default.other},v.default.createElement(h.FormattedMessage,{id:"user-login.login.sign-in-with"}),v.default.createElement(l.default,{type:"alipay-circle",className:E.default.icon,theme:"outlined"}),v.default.createElement(l.default,{type:"taobao-circle",className:E.default.icon,theme:"outlined"}),v.default.createElement(l.default,{type:"weibo-circle",className:E.default.icon,theme:"outlined"}),v.default.createElement(b.default,{className:E.default.register,to:"/user/register"},v.default.createElement(h.FormattedMessage,{id:"user-login.login.signup"})))))}}]),t}(v.Component),k=(0,y.connect)(function(e){var t=e.login,a=e.loading;return{userLogin:t,submitting:a.effects["login/login"]}})(S);t.default=k},"W+CG":function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("jehZ")),o=r(a("2Taf")),u=r(a("vZ4D")),i=r(a("l4Ni")),s=r(a("ujKo")),d=r(a("MhPg"));a("Znn+");var c=r(a("ZTPi")),f=n(a("q1tI")),p=r(a("KcKg")),m=c.default.TabPane,g=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),h=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,i.default)(this,(0,s.default)(t).call(this,e)),a.uniqueId="",a.uniqueId=g("login-tab-"),a}return(0,d.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.tabUtil;e&&e.addTab(this.uniqueId)}},{key:"render",value:function(){var e=this.props.children;return f.default.createElement(m,this.props,e)}}]),t}(f.Component),v=function(e){return f.default.createElement(p.default.Consumer,null,function(t){return f.default.createElement(h,(0,l.default)({tabUtil:t.tabUtil},e))})};v.typeName="LoginTab";var b=v;t.default=b},d40l:function(e,t,a){e.exports={main:"antd-pro-pages-user-login-style-main",icon:"antd-pro-pages-user-login-style-icon",other:"antd-pro-pages-user-login-style-other",register:"antd-pro-pages-user-login-style-register"}}}]);