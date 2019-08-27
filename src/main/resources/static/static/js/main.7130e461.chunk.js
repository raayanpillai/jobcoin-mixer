(window["webpackJsonpjobcoin-mixer-webapp"]=window["webpackJsonpjobcoin-mixer-webapp"]||[]).push([[0],{199:function(e,t,a){e.exports=a(400)},204:function(e,t,a){},206:function(e,t,a){},400:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(10),o=a.n(s),i=(a(204),a(205),a(23)),l=a(24),c=a(26),d=a(25),u=a(27),m=(a(206),a(74)),p=a(110),h=a(405),f=a(47),b=a(407),E=a(42),y=a(55),v=a(21),g=a(45),A=a(8),w=a(108),j=a(138),k=a.n(j),S=a(402),O=a(403),F=function(e,t){if(200===e.status)S.a.success(t||"Operation Success");else{var a=null;if("string"===typeof e.data.error)a=e.data.error;else{var r=e.data.error;a=Object.keys(r).flatMap(function(e){var t=Array.of(r[e]).join(", ");return n.createElement("div",null,n.createElement(E.a,null,e)," ",t)})}422===e.status?O.a.warning({message:e.statusText+" "+e.status,description:a}):O.a.error({message:e.statusText+" "+e.status,description:a})}},x=function(e){return new Promise(function(t,a){k.a.get("".concat(e),{headers:T}).then(function(e){return t(e)}).catch(function(e){return a(e)})})},C=function(e,t){return new Promise(function(a,n){k.a.post("".concat(e),t,{headers:T}).then(function(e){return a(e)}).catch(function(e){return n(e)})})},T={headers:{Accept:"application/json","Content-Type":"application/json"}},I=a(83),D=a(107),M=a(111),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onChangeFromAddress=function(e){var t=e.target.value;a.setState({fromAddress:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({fromAddress:"",canSubmit:!1})}},{key:"render",value:function(){return this.state&&r.a.createElement(n.Fragment,null,r.a.createElement(M.a,{title:"",value:this.props.deadline,onFinish:this.props.countdownFinished}),r.a.createElement("span",null,"Time remaining to transfer ",r.a.createElement(E.a,{color:"green"},this.props.amount),"to ",r.a.createElement(E.a,{color:"magenta"},this.props.depositAddress)),r.a.createElement(D.a,{trigger:"focus",title:"Enter your address",placement:"topLeft"},this.props.allowAutoTransfer&&r.a.createElement(g.a,Object.assign({style:{width:200,display:"inline"},size:"small"},this.props,{onChange:this.onChangeFromAddress,placeholder:"Your address"}))),r.a.createElement("br",null),r.a.createElement("br",null),this.props.allowAutoTransfer&&r.a.createElement("div",null,"Transfer ",r.a.createElement(E.a,{color:"green"},this.props.amount),"from ",r.a.createElement(E.a,{color:"purple"},this.state&&this.state.fromAddress||"Your Address"),"to ",r.a.createElement(E.a,{color:"magenta"},this.props.depositAddress),r.a.createElement(y.a,{type:"danger",size:"small",disabled:this.props.deadline<=0||this.state&&this.state.fromAddress.length<=0,onClick:this.props.handleAutoTransfer(this.state.fromAddress)},"Confirm Transfer"))||r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{type:"primary",size:"small",onClick:this.props.fundsTransferred},"I Transferred My Funds",r.a.createElement(A.a,{type:"swap"}))))}}]),t}(r.a.Component),P=0,R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).restart=function(){a.setState({buttonClicked:!1,deadline:0,step:0,stepStatus:"process"})},a.remove=function(e){var t=a.props.form,n=t.getFieldValue("keys");1!==n.length&&t.setFieldsValue({keys:n.filter(function(t){return t!==e})})},a.add=function(){var e=a.props.form,t=e.getFieldValue("keys").concat(P++);e.setFieldsValue({keys:t})},a.countdownFinished=function(){a.setState({step:1,stepStatus:"error"})},a.fundTransferred=function(){a.setState({step:2,stepStatus:"process"})},a.handleAutoTransfer=function(e){return function(){var t={fromAddress:e,toAddress:a.state.mixResponse.depositAddress,amount:a.state.mixAmount};C("api/jobcoin/transactions",t).then(function(e){F(e),a.props.form.resetFields(),a.fundTransferred()}).catch(function(e){var t=e.response;console.log(t),F(t),a.setState({stepStatus:"error"})})}},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(e)a.setState({buttonClicked:!0});else{var n=t.keys,r=t.names,s=n.map(function(e){return r[e]}),o=t.amount;C("api/mixer/mix",{amount:o,destinations:s}).then(function(e){var t=e;F(t);var n=t.data;a.props.form.resetFields(),a.setState({mixResponse:n,step:1,mixAmount:o,stepStatus:"process",deadline:Date.now()+6e4})}).catch(function(e){var t=e.response;console.log(t),F(t),a.setState({stepStatus:"error"})})}})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.add(),this.setState({buttonClicked:!1,deadline:0,step:0,stepStatus:"process"})}},{key:"render",value:function(){var e=this,t=this.props.form,a=t.getFieldDecorator,s=t.getFieldValue,o={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},i={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}};a("keys",{initialValue:[]});var l=s("keys"),c=l.map(function(t,n){return r.a.createElement(v.a.Item,Object.assign({},0===n?o:i,{label:0===n?"Deposit Address":"",required:!0,key:t}),a("names[".concat(t,"]"),{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Fill in or delete deposit address!"}]})(r.a.createElement(g.a,{placeholder:"Address",style:{width:"60%",marginRight:8}})),l.length>1?r.a.createElement(A.a,{className:"dynamic-delete-button",type:"minus-circle-o",onClick:function(){return e.remove(t)}}):null)});return r.a.createElement(n.Fragment,null,this.state&&0===this.state.step&&r.a.createElement(v.a,{onSubmit:this.handleSubmit},c,r.a.createElement(v.a.Item,i,r.a.createElement(y.a,{type:"dashed",onClick:this.add,style:{width:"60%"}},r.a.createElement(A.a,{type:"plus"})," Add field")),r.a.createElement(v.a.Item,{labelCol:{span:4},wrapperCol:{span:12},label:"Amount",required:!0},a("amount",{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Amount is required!"}]})(r.a.createElement(w.a,{min:0,step:.001,style:{width:"100%"},placeholder:"Amount"}))),r.a.createElement(v.a.Item,i,r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit"))),this.state&&r.a.createElement(I.a,{current:this.state.step,status:this.state.stepStatus,direction:"vertical"},r.a.createElement(I.a.Step,{title:"Submit",description:"Ask the mixer mix your funds"}),r.a.createElement(I.a.Step,{title:"Move Funds",description:(0===this.state.step?"Transfer from your wallet to the generated deposit address":1===this.state.step&&"error"!==this.state.stepStatus?r.a.createElement(q,{amount:this.state.mixAmount,depositAddress:this.state.mixResponse.depositAddress,countdownFinished:this.countdownFinished,allowAutoTransfer:!1,handleAutoTransfer:this.handleAutoTransfer,fundsTransferred:this.fundTransferred,deadline:this.state.deadline}):"Mixer did not receive funds, mix abandoned")||2===this.state.step&&"Funds transferred to ".concat(this.state.mixResponse.depositAddress)}),r.a.createElement(I.a.Step,{title:"Wait Till Mixed",description:"The mixer will distribute your funds within 100 seconds."})),this.state&&(2===this.state.step||"error"===this.state.stepStatus)&&r.a.createElement(y.a,{type:"primary",size:"small",onClick:this.restart},"Restart",r.a.createElement(A.a,{type:"redo"})))}}]),t}(r.a.Component),z=v.a.create({name:"post_mix"})(R),N=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{title:"Mixer",subTitle:"Submit a Mix",tags:[r.a.createElement(E.a,{color:"geekblue"},"Mixer")]},r.a.createElement(z,null))}}]),t}(n.Component),J=a(406),V=a(404),_=a(140),B=a(196),H=a(197);function K(e,t){return null===e?r.a.createElement("span",null,r.a.createElement(E.a,null,"Jobcoin")):e===t?r.a.createElement("span",null,e,r.a.createElement(H.a,{color:"cyan",text:"",offset:[5,0]})):r.a.createElement("span",null,e)}var W=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.highlightName?this.props.highlightName:"",t=[{title:"From",dataIndex:"fromAddress",key:"fromAddress",width:"30%",render:function(t){return K(t,e)}},{title:"To",dataIndex:"toAddress",key:"toAddress",width:"30%",render:function(t){return K(t,e)}},{title:"Amount",dataIndex:"amount",key:"amount",width:"10%"},{title:"Date",dataIndex:"timestamp",key:"timestamp",render:function(e){return r.a.createElement(D.a,{title:e},r.a.createElement("span",null,"Hover"))}}];return r.a.createElement(B.a,{bordered:!1,dataSource:this.props.dataSource,columns:t,pagination:{pageSize:5}})}}]),t}(r.a.Component);var Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){var n=t.address;x("api/jobcoin/addresses/".concat(n)).then(function(e){var t=e;F(t,"Retrieved Address Info");var r=t.data;a.setState({addressInfo:r,address:n})})}})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields(),this.state={}}},{key:"render",value:function(){var e,t=this.props.form,a=t.getFieldDecorator,s=t.getFieldsError,o=t.getFieldError,i=(0,t.isFieldTouched)("address")&&o("address");return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{layout:"horizontal",onSubmit:this.handleSubmit},r.a.createElement(v.a.Item,{labelCol:{span:4},wrapperCol:{span:12},label:"Address",validateStatus:i?"error":"",help:i||""},a("address",{rules:[{required:!0,message:"Address required!"}]})(r.a.createElement(g.a,{prefix:r.a.createElement(A.a,{type:"wallet",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Address"}))),r.a.createElement(v.a.Item,{wrapperCol:{span:12,offset:4}},r.a.createElement(y.a,{type:"primary",htmlType:"submit",disabled:(e=s(),Object.keys(e).some(function(t){return e[t]}))},"Get Info"))),this.state&&this.state.addressInfo&&r.a.createElement(n.Fragment,null,r.a.createElement("br",null),r.a.createElement(p.a,{gutter:16},r.a.createElement(m.a,{span:18},r.a.createElement(V.a,{title:"Balance",value:this.state.addressInfo.balance,precision:6,prefix:r.a.createElement(A.a,{type:"dollar",theme:"twoTone"})})),r.a.createElement(m.a,{span:6},r.a.createElement(V.a,{title:"Transactions",value:this.state.addressInfo.transactions.length}))),r.a.createElement("br",null),r.a.createElement(_.a,{bordered:!1,defaultActiveKey:[]},r.a.createElement(_.a.Panel,{header:"Transactions",key:"1"},r.a.createElement(W,{highlightName:this.state.address,dataSource:this.state.addressInfo.transactions})))))}}]),t}(r.a.Component),G=v.a.create({name:"get_address_info"})(Y),L=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.form.validateFields(),x("api/jobcoin/transactions").then(function(t){var a=t.data;e.setState({transactions:a})})}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,this.state&&this.state.transactions&&r.a.createElement(W,{dataSource:this.state.transactions}))}}]),t}(r.a.Component),$=v.a.create({name:"get_all_tranasctions"})(L);var Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){console.log("Received values of form: ",t);var n=t.fromAddress,r=t.toAddress,s=t.amount;C("api/jobcoin/transactions",{fromAddress:n,toAddress:r,amount:s}).then(function(e){F(e),a.props.form.resetFields()}).catch(function(e){var t=e.response;console.log(t),F(t)})}})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,t=this.props.form,a=t.getFieldDecorator,s=t.getFieldsError,o=t.getFieldError,i=t.isFieldTouched,l=i("fromAddress")&&o("fromAddress"),c=i("toAddress")&&o("toAddress"),d=i("amount")&&o("amount");return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{onSubmit:this.handleSubmit,layout:"horizontal"},r.a.createElement(v.a.Item,{labelCol:{span:4},wrapperCol:{span:12},label:"From",validateStatus:l?"error":"",help:l||""},a("fromAddress",{rules:[{required:!0,message:"From Address Required"}]})(r.a.createElement(g.a,{prefix:r.a.createElement(A.a,{type:"swap-left",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"From Address"}))),r.a.createElement(v.a.Item,{labelCol:{span:4},wrapperCol:{span:12},label:"To",validateStatus:c?"error":"",help:c||""},a("toAddress",{rules:[{required:!0,message:"To Address Required"}]})(r.a.createElement(g.a,{prefix:r.a.createElement(A.a,{type:"swap-right",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"To Address"}))),r.a.createElement(v.a.Item,{labelCol:{span:4},wrapperCol:{span:12},label:"Amount",validateStatus:d?"error":"",help:d||""},a("amount",{rules:[{required:!0,message:"Amount Required!"}]})(r.a.createElement(w.a,{min:0,step:.001,style:{width:"100%"},placeholder:"Amount"}))),r.a.createElement(v.a.Item,{wrapperCol:{span:12,offset:4}},r.a.createElement(y.a,{type:"primary",htmlType:"submit",disabled:(e=s(),Object.keys(e).some(function(t){return e[t]}))},"Send"))))}}]),t}(r.a.Component),U=v.a.create({name:"post_mix"})(Q),X=J.a.TabPane,Z=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.state={activePane:"info"}}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{title:"Jobcoin",subTitle:"Send and Check Jobcoins",tags:[r.a.createElement(E.a,{key:"1",color:"green"},"Jobcoin API"),r.a.createElement(E.a,{key:"2",color:"magenta"},"Passthrough")]},r.a.createElement(J.a,{defaultActiveKey:"1",onChange:function(t){return e.setState({activePane:t})}},r.a.createElement(X,{tab:"New Transaction",key:"new"}),r.a.createElement(X,{tab:"Address Info",key:"info"}),r.a.createElement(X,{tab:"All Transactions",key:"all"})),this.state?"info"===this.state.activePane&&r.a.createElement(G,null)||"all"===this.state.activePane&&r.a.createElement($,null)||"new"===this.state.activePane&&r.a.createElement(U,null):r.a.createElement(U,null))}}]),t}(r.a.Component),ee=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{className:"layout"},r.a.createElement(h.a.Header,{style:{zIndex:1,width:"100%"}},r.a.createElement("div",{className:"logo"}),r.a.createElement(f.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px"}},r.a.createElement(f.a.Item,{key:"1"},"Jobcoin Mixer"))),r.a.createElement(h.a.Content,{style:{padding:"50px 50px 0px 50px"}},r.a.createElement(p.a,{gutter:16},r.a.createElement(m.a,{span:12},r.a.createElement(Z,null)),r.a.createElement(m.a,{span:12},r.a.createElement(N,null)))),r.a.createElement(h.a.Footer,{style:{textAlign:"center"}},"Raayan Pillai \xa9 2019")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[199,1,2]]]);
//# sourceMappingURL=main.7130e461.chunk.js.map