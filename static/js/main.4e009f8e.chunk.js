(this.webpackJsonpschedularizer=this.webpackJsonpschedularizer||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s.n(n),r=s(19),o=s.n(r),i=(s(30),s(8)),l=s(4),u=(s(31),s(9)),d=s(2);s.p;var j=function(e){var t=e.tasks,s=e.setTasks,n=e.setEditingState,c=e.setEditID,r=e.setCurrentTaskValue,o=e.showAlert,i=e.listURL,l=e.setShowCongratsRain,u=e.theme,d=[];return d="My_Day"!==i?t.filter((function(e){return e.listSource===i})):t,t.length>0?Object(a.jsx)("div",{className:"toDoListContainer",children:d.map((function(e){var i=e.id,d=e.name;return Object(a.jsxs)("div",{className:"taskContainer",id:i,draggable:"true",onDragStart:function(e){e.dataTransfer.setData("taskID",i),e.currentTarget.style.color="#fff",e.currentTarget.querySelectorAll("button").forEach((function(e){return e.style.color="#fff"})),e.currentTarget.style.borderColor="#fff"},onDragEnd:function(e){e.currentTarget.style.color="#000",e.currentTarget.querySelectorAll("button").forEach((function(e){e.style.color="dark-pro"!==u?"#000":"#adff2f"})),e.currentTarget.style.borderColor="dark-pro"!==u?"#000":"#adff2f"},onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var a=e.dataTransfer.getData("taskID"),n=t.find((function(e){return e.id===a}));s(t.map((function(e){return i===e.id?n:a===e.id?t.find((function(e){return e.id===i})):e})))},onMouseEnter:function(e){e.currentTarget.querySelectorAll("button").forEach((function(e){e.style.opacity="100%"})),e.currentTarget.querySelector(".taskContent").style.transform="translateX(0)"},onMouseLeave:function(e){e.currentTarget.querySelectorAll("button").forEach((function(e){e.style.opacity="0%"})),e.currentTarget.querySelector(".taskContent").style.transform="translateX(-20px)"},children:[Object(a.jsx)("button",{className:"completeTaskButton",onClick:function(){s(t.filter((function(e){return e.id!==i}))),n(!1),r(""),l(!0),o(!0,"Task complete!","success")},children:Object(a.jsx)("ion-icon",{name:"checkmark-outline"})}),Object(a.jsx)("div",{className:"taskContent",children:d}),Object(a.jsxs)("div",{className:"taskEditOptions",children:[Object(a.jsx)("button",{className:"deleteTaskButton",onClick:function(){s(t.filter((function(e){return e.id!==i}))),n(!1),r(""),o(!0,"Task deleted","warning")},children:Object(a.jsx)("ion-icon",{name:"trash-outline"})}),Object(a.jsx)("button",{className:"editTaskButton",onClick:function(){n(!0),c(i),r(d)},children:Object(a.jsx)("ion-icon",{name:"create-outline"})})]})]},i)}))}):Object(a.jsx)("div",{className:"noTasksMessage",children:"No Tasks Yet"})};var m=Object(d.f)((function(e){var t=e.match.params.id,s=Object(n.useState)(!1),c=Object(l.a)(s,2),r=c[0],o=c[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),m=d[0],b=d[1],h=Object(n.useState)(""),f=Object(l.a)(h,2),O=f[0],p=f[1],k=Object(n.useState)({show:!1,message:"Hello world!",type:"warning"}),v=Object(l.a)(k,2),x=v[0],g=v[1],T=Object(n.useState)(!1),N=Object(l.a)(T,2),y=N[0],C=N[1];Object(n.useEffect)((function(){document.querySelector(".toDoListAppContainer").focus()}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){w()}),1e3);return function(){return clearTimeout(e)}}),[x]);var w=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";g({show:e,message:t,type:s})};return Object(a.jsxs)("div",{className:"toDoListAppContainer",children:[Object(a.jsx)("div",{className:"taskListNameInTasksList",children:t.replace("_"," ")}),x.show?Object(a.jsx)("div",{className:"alertMessage alert-type-".concat(x.type),children:x.message}):null,Object(a.jsx)(j,{tasks:e.tasks,setEditingState:o,setEditID:b,setCurrentTaskValue:p,setTasks:e.setTasks,showAlert:w,listURL:t,setShowCongratsRain:e.setShowCongratsRain,theme:e.theme}),Object(a.jsxs)("div",{className:"tasksControlArea",style:{gridTemplateColumns:"".concat(e.tasks.filter((function(e){return e.listSource===t})).length>0?"5fr 1.5fr":"100%")},children:[Object(a.jsxs)("form",{className:"listInputForm",onSubmit:function(s){s.preventDefault();var a=s.currentTarget.listInput.value.trimStart().trimEnd(),n={};a||r?a&&!r?(n={id:(new Date).getTime().toString(),name:a,listSource:t,completed:!1},console.log(n),"before"===e.newTaskLocation?e.setTasks([n].concat(Object(i.a)(e.tasks))):"after"===e.newTaskLocation&&e.setTasks([].concat(Object(i.a)(e.tasks),[n])),p(""),w(!0,"Task added!","success")):a&&r?(e.setTasks(e.tasks.map((function(e){return e.id===m&&(e.name=a),e}))),o(!1),b(""),p(""),w(!0,"Task edited","success")):!a&&r&&(e.setTasks(e.tasks.filter((function(e){return e.id!==m}))),w(!0,"Task deleted","warning")):(p(""),w(!0,"No value entered","warning")),s.currentTarget.listInput.value=""},children:[Object(a.jsxs)("div",{className:"taskInputArea",children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter task here...",name:"listInput",id:"listInput",autoComplete:"off",value:O,onChange:function(e){return p(e.currentTarget.value)},onFocus:function(){return C(!0)},onBlur:function(){return C(!1)}}),Object(a.jsx)("div",{className:"inputFocusUnderline",style:{width:"".concat(y?"100%":"0")}})]}),Object(a.jsx)("button",{type:"submit",children:r?"Edit":"Create"})]}),e.tasks.filter((function(e){return e.listSource===t})).length>0?Object(a.jsx)("button",{className:"clearTasksButton",type:"button",onClick:function(){e.setTasks([]),o(!1),p(""),w(!0,"Tasks cleared","warning")},children:"Clear Tasks"}):null]})]})})),b=s(21),h=s(22),f=s(24),O=s(23),p=function(e){Object(f.a)(s,e);var t=Object(O.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("div",{className:"appName",children:"Schedularizer"}),Object(a.jsxs)("nav",{children:[Object(a.jsx)(u.b,{to:"/schedularizer",children:"Home"}),Object(a.jsx)(u.b,{to:"/schedularizer/about",children:"About"})]}),Object(a.jsxs)("div",{className:"linkOpenMenuBar",children:[Object(a.jsx)("div",{className:"linkOpenMenuBarLine"}),Object(a.jsx)("div",{className:"linkOpenMenuBarLine"}),Object(a.jsx)("div",{className:"linkOpenMenuBarLine"})]})]})}}]),s}(n.Component);var k=function(e){var t=e.taskLists,s=e.setTaskLists,n=e.showModal;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:"newTaskListCreateLabel",children:"New Task List Name"}),Object(a.jsxs)("form",{className:"newTaskListCreateForm",onSubmit:function(e){e.preventDefault();var a={name:e.currentTarget.newTaskListCreateInput.value.trimStart().trimEnd()};a.url=a.name.replace(" ","_"),console.log(a),a&&(s([].concat(Object(i.a)(t),[a])),n(!1,null))},children:[Object(a.jsx)("input",{type:"text",id:"newTaskListCreateInput",name:"newTaskListCreateInput",autoComplete:"off"}),Object(a.jsx)("button",{type:"submit",className:"newTaskListCreateSubmitButton",children:"Create"})]})]})};var v=function(e){var t=e.taskLists,s=e.setTaskLists,n=e.showModal,c=e.setTasks,r=e.tasks;return Object(a.jsxs)("div",{className:"taskLists",children:[t.map((function(e,n){return Object(a.jsxs)(u.b,{to:"/schedularizer/tasks/".concat(e.url),className:"taskListOpenLink",children:[Object(a.jsx)("div",{className:"taskListName",children:e.name}),Object(a.jsx)("div",{className:"additionalTaskListInformation",children:"My Day"===e.name?"All Tasks":""}),"My Day"!==e.name?Object(a.jsx)("button",{className:"deleteTaskListButton",type:"button",onClick:function(a){a.preventDefault(),s(t.filter((function(t){return t.name!==e.name}))),c(r.filter((function(t){return t.listSource!==e.url})))},children:Object(a.jsx)("ion-icon",{name:"trash-outline"})}):null]},n)})),Object(a.jsx)("button",{className:"createTaskListButton",onClick:function(){n(!0,Object(a.jsx)(k,{taskLists:t,setTaskLists:s,showModal:n}))},children:"+"})]})};var x=function(e){var t=e.children,s=e.show,n=e.setModalProps;return Object(a.jsx)("div",{className:"modalOuterCover",style:s?{opacity:"100%",pointerEvents:"all"}:{},children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"modalCloseButton",onClick:function(){n(!1,"")},children:"\xd7"}),Object(a.jsx)("div",{className:"modalContent",children:t})]})})},g={primaryColors:[{name:"yellow"},{name:"green"},{name:"red"},{name:"purple"}],proColors:[{name:"dark-pro"}]},T=["before","after"];var N=function(e){var t=e.setTheme,s=e.setNewTaskLocation,n=e.newTaskLocation;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"themeColorCustomize",children:[Object(a.jsx)("div",{className:"customizeLabel themeColorCustomizeLabel",children:"Theme Colour"}),Object(a.jsxs)("div",{className:"themeColorCustomiseColors",children:[Object(a.jsx)("div",{className:"proColorsLabel",children:"Pro Colors"}),Object(a.jsx)("div",{className:"proColorsCustomize",children:g.proColors.map((function(e,s){var n=e.name;return Object(a.jsx)("div",{className:"customizeColorName",style:{backgroundColor:"".concat("dark-pro"===n?"#282828":"#fefefe"),color:"dark-pro"===n?"#fff":"#282828"},onClick:function(e){"dark-pro"===n&&(document.querySelectorAll(".customizeColorName").forEach((function(e){return e.style.fontWeight="500"})),e.currentTarget.style.fontWeight="700",t(n))},children:n.replace("-"," ")},s)}))}),Object(a.jsx)("div",{className:"primaryColorsLabel",children:"Primary Colors"}),Object(a.jsx)("div",{className:"primaryColorsCustomize",children:g.primaryColors.map((function(e,s){var n=e.name;return Object(a.jsx)("div",{className:"customizeColorName",style:{backgroundColor:n},onClick:function(e){document.querySelectorAll(".customizeColorName").forEach((function(e){return e.style.fontWeight="500"})),e.currentTarget.style.fontWeight="700",t(e.currentTarget.textContent)},children:n},s)}))})]})]}),Object(a.jsxs)("div",{className:"setNewTaskLocation",children:[Object(a.jsx)("div",{className:"customizeLabel setNewTaskLocationLabel",children:"New Task Location"}),Object(a.jsx)("div",{className:"newTaskLocationsSelect",children:T.map((function(e,t){return Object(a.jsx)("div",{className:"newTaskLocationSelectOption",style:n===e?{fontWeight:"bold"}:{},onClick:function(){return s(e)},children:e},t)}))})]})]})};var y=function(e){var t=e.showCongratsRain,s=Object(n.useState)([]),c=Object(l.a)(s,2),r=c[0],o=c[1];return Object(n.useEffect)((function(){t&&setTimeout((function(){!function(e,t){var s=["\ud83d\udc4f","\u2764","\ud83d\ude0a","\u270c","\ud83c\udf89","\ud83c\udf8a","\u2728","\ud83c\udf88"],n=Object(a.jsx)("div",{className:"rainElement",style:{left:"".concat(Math.floor(97*Math.random()),"vw"),animationDuration:"".concat(Math.floor(5*Math.random())+2,"s")},children:s[Math.floor(Math.random()*s.length)]});t([].concat(Object(i.a)(e),[n]))}(r,o)}),[300])}),[r,t]),Object(a.jsx)("div",{className:"congratsRain",children:r.map((function(e){return e}))})},C=s.p+"static/media/logoSrc.5d6913ac.png";var w=function(){return Object(a.jsxs)("section",{className:"aboutUsSection",children:[Object(a.jsxs)("h1",{className:"sectionHeading",children:[Object(a.jsx)("div",{className:"aboutUsHeadingText",children:"About Us"}),Object(a.jsx)("div",{className:"sectionHeadingUnderline"})]}),Object(a.jsxs)("div",{className:"aboutUsContent",children:[Object(a.jsx)("div",{className:"aboutUsContentLogoImg",children:Object(a.jsx)("img",{src:C,alt:"Logo",draggable:"false"})}),Object(a.jsxs)("div",{className:"aboutUsContentText",children:[Object(a.jsx)("p",{children:'Schedularizer is a simple Application made using React. It helps you to maintain tasks and, in our words, "schedularize" your day. This helps you to maintain different lists of tasks and helps you in organisation.'}),Object(a.jsx)("p",{children:"It is simple, yet, provides the user with a user-friendly interface. This web app is under development, so features will be added. One of the main features of this app is the emoji rain which appears when you complete a task, which helps you to improve your mood and instills a feel of success when a task is completed."})]})]}),Object(a.jsxs)("div",{className:"featuresSection",children:[Object(a.jsxs)("div",{className:"sectionSubHeading",children:[Object(a.jsx)("div",{className:"aboutUsSubHeadingText",children:"Features"}),Object(a.jsx)("div",{className:"sectionHeadingUnderline"})]}),Object(a.jsxs)("div",{className:"featuresContainer",children:[Object(a.jsxs)("article",{className:"feature",children:[Object(a.jsx)("div",{className:"featureHeading",children:"The best companion for your busy life!"}),Object(a.jsx)("p",{className:"featureContent",children:"Our application will help you do your tasks on time, when you have a lot of tasks, and remembering all them is difficult."})]}),Object(a.jsxs)("article",{className:"feature",children:[Object(a.jsx)("div",{className:"featureHeading",children:"Decent GUI to improve mood."}),Object(a.jsx)("p",{className:"featureContent",children:"A nice GUI which will win your heart. You can customize it with your favourite colour using the cutomize button, as you have to see this everyday."})]}),Object(a.jsxs)("article",{className:"feature",children:[Object(a.jsx)("div",{className:"featureHeading",children:"Easy and Quick Interface."}),Object(a.jsx)("p",{className:"featureContent",children:"The application is very simple to use and does not need any manual. So, go ahead and use our app, as soon as possible."})]})]})]})]})},S=function(e){var t=localStorage.getItem(e);return t||null};var L=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("Tasks"))||[]),t=Object(l.a)(e,2),s=t[0],c=t[1],r=Object(n.useState)(JSON.parse(S("TaskLists"))||[{name:"My Day",url:"My_Day"}]),o=Object(l.a)(r,2),j=o[0],b=o[1],h=Object(n.useState)({show:!1,children:null}),f=Object(l.a)(h,2),O=f[0],k=f[1],g=Object(n.useState)(!1),T=Object(l.a)(g,2),C=T[0],L=T[1],D=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;k({show:e,children:t})},E=Object(n.useState)(S("Theme")||"yellow"),I=Object(l.a)(E,2),M=I[0],z=I[1],A=Object(n.useState)("after"),B=Object(l.a)(A,2),U=B[0],F=B[1];return Object(n.useEffect)((function(){localStorage.setItem("Theme",M)}),[M]),Object(n.useEffect)((function(){localStorage.setItem("TaskLists",JSON.stringify(j))}),[j]),Object(n.useEffect)((function(){localStorage.setItem("Tasks",JSON.stringify(Object(i.a)(s)))}),[s]),Object(n.useEffect)((function(){var e=setTimeout((function(){L(!1)}),[3500]);return function(){return clearTimeout(e)}}),[C]),Object(a.jsxs)("div",{className:"App ".concat(M),children:[Object(a.jsx)(x,{show:O.show,setModalProps:k,children:O.children}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)(p,{}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/schedularizer",render:function(){return Object(a.jsx)(v,{taskLists:j,setTaskLists:b,showModal:D,setTasks:c,tasks:s})},exact:!0}),Object(a.jsx)(d.a,{path:"/schedularizer/tasks/:id",render:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y,{showCongratsRain:C}),Object(a.jsx)(m,{newTaskLocation:U,tasks:s,setTasks:c,setShowCongratsRain:L,theme:M})]})},exact:!0}),Object(a.jsx)(d.a,{path:"/schedularizer/about",component:w})]})]}),Object(a.jsx)("button",{className:"customizeDialogueBoxOpenButton",onClick:function(){return D(!0,Object(a.jsx)(N,{setTheme:z,setNewTaskLocation:F,newTaskLocation:U}))},children:"Customize"})]})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),D()}},[[37,1,2]]]);
//# sourceMappingURL=main.4e009f8e.chunk.js.map