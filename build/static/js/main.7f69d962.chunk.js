(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(29),c=a.n(o),r=(a(37),a(7)),l=a(8),s=a(10),d=a(9),m=a(11),u=a(4),h=a.n(u),g=a(14),p=a(12),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={theList:[]},a.showTheList=function(){return a.state.theList.map((function(e){return i.a.createElement("div",null,i.a.createElement("div",null,"-----------------------------------------------"),i.a.createElement("img",{src:e.dog,width:"200px",alt:e.firstName}),i.a.createElement("h4",null,e.firstName,"  ",e.lastName),i.a.createElement("h6",null,e.location),i.a.createElement("h5",null,e.advice),i.a.createElement("img",{src:e.gif,alt:e._url}),i.a.createElement("div",null,"-----------------------------------------------"))}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://ironrest.herokuapp.com/johnny").then((function(t){console.log(t),e.setState({theList:t.data})}))}},{key:"render",value:function(){return i.a.createElement("div",null,"Friends",this.showTheList())}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={advice:[],gif:null,info:[],dog:[]},a.getAdvice=function(){h.a.get("https://api.adviceslip.com/advice").then((function(e){a.setState({advice:e.data.slip}),console.log(e.data.slip)}))},a.getAxios=function(e,t){h.a.get(e).then((function(e){a.setState({theNameofState:t.data}),console.log(t)}))},a.getGIF=function(){h.a.get("https://api.giphy.com/v1/gifs/random?api_key=TdJwdGZNyu4K69K0Cha5IMjFM4LMz45L&tag=&rating=G&&fixed_width").then((function(e){a.setState({gif:e.data.data.image_url}),console.log(e,e.data.data.url)}))},a.getInfo=function(){h.a.get("https://uinames.com/api/").then((function(e){a.setState({info:e.data}),console.log(a.state.info)}))},a.getDog=function(){h.a.get("https://dog.ceo/api/breeds/image/random").then((function(e){a.setState({dog:e.data}),console.log(a.state.dog)}))},a.getAll=function(){a.getAdvice(),a.getInfo(),a.getDog(),a.getGIF()},a.postProfile=function(){h.a.post("https://ironrest.herokuapp.com/johnny/",{dog:a.state.dog.message,firstName:a.state.info.name,lastName:a.state.info.surname,location:a.state.info.region,advice:a.state.advice.advice,gif:a.state.gif}),window.alert("Friend Added"),a.getAll()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.adviceslip.com/advice").then((function(t){e.setState({advice:t.data.slip}),console.log(t.data.slip),e.getGIF(),e.getInfo(),e.getDog()}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"Home"},i.a.createElement("img",{src:this.state.gif,alt:"thegif"}),i.a.createElement("img",{id:"dog",height:"300px",src:this.state.dog.message,alt:"doggo"}),i.a.createElement("div",{id:"name"},"First name :",this.state.info.name),i.a.createElement("div",{id:"lastname"},"Last name : ",this.state.info.surname),i.a.createElement("div",{id:"region"},"From : ",this.state.info.region),i.a.createElement("div",{id:"advice"}," Advice: ",this.state.advice.advice),i.a.createElement("div",null,i.a.createElement("button",{onClick:this.getAll},"Click Here !!!"),i.a.createElement("button",{onClick:this.postProfile},"Add Friend!!")))}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",null,i.a.createElement("input",{placeholder:"First Name"}),i.a.createElement("input",{placeholder:"Last Name"}),i.a.createElement("input",{placeholder:"Advice"}),i.a.createElement("input",{placeholder:"Image URL"}),i.a.createElement("input",{placeholder:"GIPHY Gif URL"})),"helo")}}]),t}(n.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("nav",{className:"navbar navbar-light"},"Fake friend generator!!",i.a.createElement(g.b,{to:"/list",className:"a",color:"white"},"Friends List "),i.a.createElement(g.b,{to:"/friend"},"Create a Friend"),i.a.createElement(g.b,{to:"/home"}," Friend Generator")),i.a.createElement(p.c,null,i.a.createElement(p.a,{path:"/home",component:v}),i.a.createElement(p.a,{path:"/friend",component:E}),i.a.createElement(p.a,{path:"/list",component:f})))}}]),t}(n.Component);h.a.delete("https://ironrest.herokuapp.com/johnny/5dd6af67aa6dd300172da7bc");Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(60);c.a.render(i.a.createElement(g.a,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7f69d962.chunk.js.map