(this["webpackJsonpprueba-tecnica"]=this["webpackJsonpprueba-tecnica"]||[]).push([[0],{21:function(e,a,c){},36:function(e,a,c){"use strict";c.r(a);var t=c(1),i=c.n(t),n=c(7),r=c.n(n),o=(c(21),c(8)),l=c(2),s=c(16),j=c(12),d=c.p+"static/media/deportivo.ce8cb363.png",u=c.p+"static/media/furgoneta.8942fddf.png",b=c.p+"static/media/Todoterreno.e5b999af.png",p=c(3),O="MOSTRAR_LISTA",h="VALIDAR_ERROR",v="OBTENER_DATOS",m="OCULTAR_FORM",x="MOSTRAR_SPINNER",f="DIAS_RESERVA",g="VALIDAR_FECHAS",N="FILTRAR_COCHES";function _(e){return function(a){a(C()),a(T(e))}}var C=function(){return{type:O}},T=function(e){return{type:v,payload:e}};function y(){return function(e){e(z()),e(S())}}var z=function(){return{type:h}},S=function(){return{type:g}};var A=function(){return{type:m}};var R=function(){return{type:x}};var L=function(e){return{type:f,payload:e}};var E,D=function(e){return{type:N,payload:e}},G=c(0),B=function(){var e=Object(p.b)(),a=function(a){return e(function(e){return function(a){a(D(e))}}(a))},c=function(e){a(e)};return Object(G.jsxs)("div",{className:"container_tipo",children:[Object(G.jsxs)("div",{className:"tipo_card_car",onClick:function(){return c("deportivo")},children:[Object(G.jsx)("p",{children:"Deportivo"}),Object(G.jsx)("img",{className:"tipo_cards_img",src:d,alt:"deportivo"})]}),Object(G.jsxs)("div",{className:"tipo_card_car",onClick:function(){return c("furgoneta")},children:[Object(G.jsx)("p",{children:"Furgoneta"}),Object(G.jsx)("img",{className:"tipo_cards_img",src:u,alt:"furgoneta"})]}),Object(G.jsxs)("div",{className:"tipo_card_car",onClick:function(){return c("todoterreno")},children:[Object(G.jsx)("p",{children:"4x4"}),Object(G.jsx)("img",{className:"tipo_cards_img",src:b,alt:"todoterreno"})]})]})},V=c(9),k=function(e){var a=e.coche,c=Object(p.c)((function(e){return e.coches.diasreserva})),t=a.nombre,i=a.imagen,n=a.precio,r=a.plazas,o=a.motor,l=n*c;return Object(G.jsxs)("div",{className:"card_car",children:[Object(G.jsxs)("div",{className:"datos_card_car",children:[Object(G.jsx)("h4",{children:t}),Object(G.jsx)("li",{children:o}),Object(G.jsxs)("li",{children:[Object(G.jsx)(V.b,{})," ",r," plazas"]}),Object(G.jsx)("li",{children:"Kilometraje"})]}),Object(G.jsx)("img",{className:"img_card",alt:"coche",src:i}),Object(G.jsxs)("div",{className:"precio",children:[Object(G.jsxs)("p",{children:["Precio por ",Object(G.jsx)("span",{children:c})," dias:"]}),Object(G.jsxs)("p",{className:"precios",children:[l,Object(G.jsx)("span",{children:"\u20ac"})]}),Object(G.jsx)("button",{className:"btn btn-small",children:"Reservar"})]})]})},w=function(e){var a=e.busqueda,c=a.provinciasalida,t=a.provinciallegada,i=a.fechasalida,n=a.fechallegada,r=a.horasalida,o=a.horallegada;return Object(G.jsxs)("aside",{className:"container_datos",children:[Object(G.jsxs)("div",{className:"container_itinerario",children:[Object(G.jsx)("p",{children:c}),Object(G.jsx)("p",{children:Object(G.jsx)(V.a,{})}),Object(G.jsx)("p",{children:t})]}),Object(G.jsxs)("div",{className:"container_itinerario",children:[Object(G.jsx)("p",{children:i}),Object(G.jsx)("p",{children:r})]}),Object(G.jsxs)("div",{className:"container_itinerario",children:[Object(G.jsx)("p",{children:n}),Object(G.jsx)("p",{children:o})]})]})},M=function(e){var a=e.busqueda,c=Object(p.c)((function(e){return e.coches.cochesfiltrados}));return Object(G.jsxs)("div",{className:"container_lista",children:[Object(G.jsx)(w,{busqueda:a}),Object(G.jsxs)("div",{className:"container_content",children:[Object(G.jsx)(B,{}),Object(G.jsx)("div",{className:"listado_coches",children:0===c.length?Object(G.jsx)("p",{children:"Escoge un tipo"}):c.map((function(e){return Object(G.jsx)(k,{coche:e},e.id)}))})]})]})},F=c(14),P=c.n(F),I=c(11),H=function(){return Object(G.jsxs)(t.Fragment,{children:[Object(G.jsx)("option",{value:"",children:"Elige Provincia"}),Object(G.jsx)("option",{value:"\xc1lava/Araba",children:"\xc1lava/Araba"}),Object(G.jsx)("option",{value:"Albacete",children:"Albacete"}),Object(G.jsx)("option",{value:"Alicante",children:"Alicante"}),Object(G.jsx)("option",{value:"Almer\xeda",children:"Almer\xeda"}),Object(G.jsx)("option",{value:"Asturias",children:"Asturias"}),Object(G.jsx)("option",{value:"\xc1vila",children:"\xc1vila"}),Object(G.jsx)("option",{value:"Badajoz",children:"Badajoz"}),Object(G.jsx)("option",{value:"Baleares",children:"Baleares"}),Object(G.jsx)("option",{value:"Barcelona",children:"Barcelona"}),Object(G.jsx)("option",{value:"Burgos",children:"Burgos"}),Object(G.jsx)("option",{value:"C\xe1ceres",children:"C\xe1ceres"}),Object(G.jsx)("option",{value:"C\xe1diz",children:"C\xe1diz"}),Object(G.jsx)("option",{value:"Cantabria",children:"Cantabria"}),Object(G.jsx)("option",{value:"Castell\xf3n",children:"Castell\xf3n"}),Object(G.jsx)("option",{value:"Ceuta",children:"Ceuta"}),Object(G.jsx)("option",{value:"Ciudad Real",children:"Ciudad Real"}),Object(G.jsx)("option",{value:"C\xf3rdoba",children:"C\xf3rdoba"}),Object(G.jsx)("option",{value:"Cuenca",children:"Cuenca"}),Object(G.jsx)("option",{value:"Gerona/Girona",children:"Gerona/Girona"}),Object(G.jsx)("option",{value:"Granada",children:"Granada"}),Object(G.jsx)("option",{value:"Guadalajara",children:"Guadalajara"}),Object(G.jsx)("option",{value:"Guip\xfazcoa/Gipuzkoa",children:"Guip\xfazcoa/Gipuzkoa"}),Object(G.jsx)("option",{value:"Huelva",children:"Huelva"}),Object(G.jsx)("option",{value:"Huesca",children:"Huesca"}),Object(G.jsx)("option",{value:"Ja\xe9n",children:"Ja\xe9n"}),Object(G.jsx)("option",{value:"La Coru\xf1a/A Coru\xf1a",children:"La Coru\xf1a/A Coru\xf1a"}),Object(G.jsx)("option",{value:"La Rioja",children:"La Rioja"}),Object(G.jsx)("option",{value:"Las Palmas",children:"Las Palmas"}),Object(G.jsx)("option",{value:"Le\xf3n",children:"Le\xf3n"}),Object(G.jsx)("option",{value:"L\xe9rida/Lleida",children:"L\xe9rida/Lleida"}),Object(G.jsx)("option",{value:"Lugo",children:"Lugo"}),Object(G.jsx)("option",{value:"Madrid",children:"Madrid"}),Object(G.jsx)("option",{value:"M\xe1laga",children:"M\xe1laga"}),Object(G.jsx)("option",{value:"Melilla",children:"Melilla"}),Object(G.jsx)("option",{value:"Murcia",children:"Murcia"}),Object(G.jsx)("option",{value:"Navarra",children:"Navarra"}),Object(G.jsx)("option",{value:"Orense/Ourense",children:"Orense/Ourense"}),Object(G.jsx)("option",{value:"Palencia",children:"Palencia"}),Object(G.jsx)("option",{value:"Pontevedra",children:"Pontevedra"}),Object(G.jsx)("option",{value:"Salamanca",children:"Salamanca"}),Object(G.jsx)("option",{value:"Segovia",children:"Segovia"}),Object(G.jsx)("option",{value:"Sevilla",children:"Sevilla"}),Object(G.jsx)("option",{value:"Soria",children:"Soria"}),Object(G.jsx)("option",{value:"Tarragona",children:"Tarragona"}),Object(G.jsx)("option",{value:"Tenerife",children:"Tenerife"}),Object(G.jsx)("option",{value:"Teruel",children:"Teruel"}),Object(G.jsx)("option",{value:"Toledo",children:"Toledo"}),Object(G.jsx)("option",{value:"Valencia",children:"Valencia"}),Object(G.jsx)("option",{value:"Valladolid",children:"Valladolid"}),Object(G.jsx)("option",{value:"Vizcaya/Bizkaia",children:"Vizcaya/Bizkaia"}),Object(G.jsx)("option",{value:"Zamora",children:"Zamora"}),Object(G.jsx)("option",{value:"Zaragoza",children:"Zaragoza"})]})},q=function(){var e=Object(I.css)(E||(E=Object(j.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),a=Object(t.useState)({provinciasalida:"",provinciallegada:"",fechasalida:"",fechallegada:"",horasalida:"",horallegada:""}),c=Object(s.a)(a,2),i=c[0],n=c[1],r=i.provinciallegada,d=i.provinciasalida,u=i.fechasalida,b=i.fechallegada,O=i.horasalida,h=i.horallegada,v=Object(p.b)(),m=function(){return v((function(e){e(A())}))},x=function(){return v((function(e){e(R())}))},f=function(e){return v(function(e){return function(a){a(L(e))}}(e))},g=Object(p.c)((function(e){return e.coches.lista})),N=Object(p.c)((function(e){return e.coches.error})),C=Object(p.c)((function(e){return e.coches.errorfecha})),T=Object(p.c)((function(e){return e.coches.formulario})),z=Object(p.c)((function(e){return e.coches.loading})),S=function(e){n(Object(l.a)(Object(l.a)({},i),{},Object(o.a)({},e.target.name,e.target.value)))};return Object(G.jsxs)("div",{className:"container",children:[T?Object(G.jsxs)("div",{className:"container_form",children:[Object(G.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==d&&""!==r&&""!==u&&""!==b&&""!==O&&""!==h){var a=new Date(u),c=new Date(b),t=(c.getTime()-a.getTime())/864e5;f(t),a.getTime()>=c.getTime()?v(y()):setTimeout((function(){v(_({provinciasalida:d,provinciallegada:r,fechasalida:u,fechallegada:b,horasalida:O,horallegada:h})),x(),m()}),2e3)}else v(y())},className:"form",children:[Object(G.jsx)("h2",{children:"Haz tu reserva ahora"}),Object(G.jsxs)("div",{className:"form_field",children:[Object(G.jsx)("select",{name:"provinciasalida",value:d,onChange:S,className:"form-control",children:Object(G.jsx)(H,{})}),Object(G.jsx)("select",{onChange:S,name:"provinciallegada",value:r,className:"form-control",children:Object(G.jsx)(H,{})})]}),Object(G.jsxs)("div",{className:"form_field",children:[Object(G.jsxs)("div",{className:"horas",children:[Object(G.jsx)("label",{children:"Fechas"}),Object(G.jsx)("input",{onChange:S,className:"form-control textbox-n",type:"date",name:"fechasalida",value:u})]}),Object(G.jsxs)("div",{className:"horas",children:[Object(G.jsx)("label",{children:"Hora"}),Object(G.jsx)("input",{onChange:S,className:"form-control",type:"time",name:"horasalida",value:O})]})]}),Object(G.jsxs)("div",{className:"form_field",children:[Object(G.jsxs)("div",{className:"horas",children:[Object(G.jsx)("label",{children:"Fechas"}),Object(G.jsx)("input",{onChange:S,className:"form-control",type:"date",name:"fechallegada",value:b})]}),Object(G.jsxs)("div",{className:"horas",children:[Object(G.jsx)("label",{children:"Hora"}),Object(G.jsx)("input",{onChange:S,className:"form-control",type:"time",name:"horallegada",value:h})]})]}),Object(G.jsx)("div",{className:"form_field",children:Object(G.jsx)("button",{onClick:function(){v(_())},type:"submit",className:"btn btn-big",children:"Buscar"})}),C?Object(G.jsx)("p",{className:"error_validate",children:" El formato de la fecha es incorrecto"}):null,N?Object(G.jsx)("p",{className:"error_validate",children:"Es obligatorio rellenar todos los campos"}):null,z?Object(G.jsx)(P.a,{css:e}):null]})," :"]}):null,g?Object(G.jsx)(M,{busqueda:i}):null]})},J=c(6),X=c(15),Z=c.p+"static/media/anette.66cec620.png",U=c.p+"static/media/gtr.9716dc87.png",K=c.p+"static/media/murano.3f0d5155.png",Q=c.p+"static/media/california.c37ed3c1.png",W=c.p+"static/media/qashqai.ad642882.png",Y=c.p+"static/media/tesla.b8dd1940.png",$=c.p+"static/media/bugati.bbaa7617.png",ee={coches:[{id:1,nombre:"Ferrari 488 GTB",imagen:d,precio:100,tipo:"deportivo",plazas:"5",motor:"Gasolina"},{id:2,nombre:"Nissan Murano",imagen:K,precio:50,tipo:"todoterreno",plazas:"5",motor:"Diesel"},{id:3,nombre:"Nissan Skyline GT-R",imagen:U,precio:100,tipo:"deportivo",plazas:"5",motor:"Gasolina"},{id:4,nombre:"Bugatti Veyron",imagen:$,precio:100,tipo:"deportivo",plazas:"5",motor:"Gasolina"},{id:5,nombre:"Volkswagen Tiguan",imagen:b,precio:50,tipo:"todoterreno",plazas:"5",motor:"Diesel"},{id:6,nombre:"Nissan NV200",imagen:u,precio:20,tipo:"furgoneta",plazas:"5",motor:"Diesel"},{id:7,nombre:"Volkswaguen California",imagen:Q,precio:"20",tipo:"furgoneta",plazas:"5",motor:"Diesel"},{id:8,nombre:"Nissan Qashqai",imagen:W,precio:50,tipo:"todoterreno",plazas:"5",motor:"Diesel"},{id:9,nombre:"Nissan NV300",imagen:Z,precio:20,tipo:"furgoneta",plazas:"5",motor:"Diesel"},{id:10,nombre:"Tesla",imagen:Y,precio:80,tipo:"electrico",plazas:"5",motor:"Electrico"}],formulario:!0,datos:[],lista:!1,error:!1,errorfecha:!1,loading:!1,provinciaform:!1,diasreserva:[],cochesfiltrados:[]};var ae=Object(J.b)({coches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v:return Object(l.a)(Object(l.a)({},e),{},{datos:a.payload,loading:!0,lista:!1});case x:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case O:return Object(l.a)(Object(l.a)({},e),{},{lista:!0,error:!1,errorfecha:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{error:!0,lista:!1,loading:!1});case g:return Object(l.a)(Object(l.a)({},e),{},{errorfecha:!0,lista:!1});case m:return Object(l.a)(Object(l.a)({},e),{},{formulario:!1,loading:!1,lista:!0});case f:return Object(l.a)(Object(l.a)({},e),{},{diasreserva:[a.payload]});case N:return Object(l.a)(Object(l.a)({},e),{},{cochesfiltrados:e.coches.filter((function(e){return e.tipo===a.payload}))});default:return e}}}),ce=Object(J.d)(ae,Object(J.c)(Object(J.a)(X.a),"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));var te=function(){return Object(G.jsx)(p.a,{store:ce,children:Object(G.jsx)(q,{})})},ie=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(a){var c=a.getCLS,t=a.getFID,i=a.getFCP,n=a.getLCP,r=a.getTTFB;c(e),t(e),i(e),n(e),r(e)}))};r.a.render(Object(G.jsx)(i.a.StrictMode,{children:Object(G.jsx)(te,{})}),document.getElementById("root")),ie()}},[[36,1,2]]]);
//# sourceMappingURL=main.e86bc551.chunk.js.map