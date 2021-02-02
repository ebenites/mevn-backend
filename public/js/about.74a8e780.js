(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,n,e){var r=e("fc6a"),o=e("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(n){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(r(t))}},"0841":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h1",[t._v("Notas")]),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(n){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")]),t.agregar?e("form",{on:{submit:function(n){return n.preventDefault(),t.agregarNota()}}},[e("h3",{staticClass:"text-center"},[t._v("Agregar nueva Nota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.title,expression:"nota.title"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ingrese un Nombre"},domProps:{value:t.nota.title},on:{input:function(n){n.target.composing||t.$set(t.nota,"title",n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.description,expression:"nota.description"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ingrese una descripcion"},domProps:{value:t.nota.description},on:{input:function(n){n.target.composing||t.$set(t.nota,"description",n.target.value)}}}),e("b-button",{staticClass:"btn-sm btn-block btn-success",attrs:{type:"submit"}},[t._v("Agregar")])],1):e("form",{on:{submit:function(n){return n.preventDefault(),t.editarNota()}}},[e("h3",{staticClass:"text-center"},[t._v("Editar Nota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.title,expression:"notaEditar.title"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ingrese un Nombre"},domProps:{value:t.notaEditar.title},on:{input:function(n){n.target.composing||t.$set(t.notaEditar,"title",n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.description,expression:"notaEditar.description"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ingrese una descripcion"},domProps:{value:t.notaEditar.description},on:{input:function(n){n.target.composing||t.$set(t.notaEditar,"description",n.target.value)}}}),e("b-button",{staticClass:"btn-sm btn-block mb-1 btn-warning",attrs:{type:"submit"}},[t._v("Editar")]),e("b-button",{staticClass:"btn-sm btn-block",on:{click:function(n){t.agregar=!0}}},[t._v("Cancelar")])],1),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.notas,(function(n,r){return e("tr",{key:r},[e("th",{attrs:{scope:"row"}},[t._v(t._s(n._id))]),e("td",[t._v(t._s(n.title))]),e("td",[t._v(t._s(n.description))]),e("td",[t._v(t._s(n.date))]),e("td",[e("b-button",{staticClass:"btn-warning btn-sm mx-2",on:{click:function(e){return t.activarEdicion(n._id)}}},[t._v("Actualizar")]),e("b-button",{staticClass:"btn-danger btn-sm mx-2",on:{click:function(e){return t.eliminarNota(n._id)}}},[t._v("Eliminar")])],1)])})),0)])],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Nombre")]),e("th",{attrs:{scope:"col"}},[t._v("Descripción")]),e("th",{attrs:{scope:"col"}},[t._v("Fecha")]),e("th",{attrs:{scope:"col"}},[t._v("Acciones")])])])}],i=(e("a4d3"),e("e01a"),e("c740"),e("a434"),{data:function(){return{notas:[],mensaje:{color:"success",texto:"Hola"},dismissSecs:5,dismissCountDown:0,nota:{},agregar:!0,notaEditar:{}}},created:function(){this.listarNotas()},methods:{listarNotas:function(){var t=this;this.axios.get("/note").then((function(n){console.log(n.data),t.notas=n.data})).catch((function(t){console.log("error"+t)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},agregarNota:function(){var t=this;this.axios.post("/note",this.nota).then((function(n){t.notas.unshift(n.data),t.nota={},t.showAlert(),t.mensaje.texto="Nota Agregada!",t.mensaje.color="success"})).catch((function(n){t.showAlert(),t.mensaje.color="danger",t.mensaje.texto=n.response.data.error.errors.title.message}))},eliminarNota:function(t){var n=this;this.axios.delete("note/".concat(t)).then((function(t){var e=n.notas.findIndex((function(n){return n._id===t.data._id}));n.notas.splice(e,1),n.showAlert(),n.mensaje.texto="Nota Eliminada!",n.mensaje.color="danger"})).catch((function(t){console.log(t.response)}))},activarEdicion:function(t){var n=this;this.agregar=!1,this.axios.get("note/".concat(t)).then((function(t){n.notaEditar=t.data})).catch((function(t){console.log(t.response)}))},editarNota:function(){var t=this;this.axios.put("note/".concat(this.notaEditar._id),this.notaEditar).then((function(n){var e=t.notas.findIndex((function(n){return n._id===t.notaEditar._id}));t.notas[e].title=t.notaEditar.title,t.notas[e].description=t.notaEditar.description,t.notaEditar={},t.showAlert(),t.mensaje.texto="Nota Actualizada",t.mensaje.color="success"})).catch((function(t){console.log(t)})),this.agregar=!0}}}),a=i,s=e("2877"),c=Object(s["a"])(a,r,o,!1,null,null,null);n["default"]=c.exports},"1dde":function(t,n,e){var r=e("d039"),o=e("b622"),i=e("2d00"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[],e=n.constructor={};return e[a]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"65f0":function(t,n,e){var r=e("861d"),o=e("e8b5"),i=e("b622"),a=i("species");t.exports=function(t,n){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?r(e)&&(e=e[a],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},"746f":function(t,n,e){var r=e("428f"),o=e("5135"),i=e("e538"),a=e("9bf2").f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||a(n,t,{value:i.f(t)})}},8418:function(t,n,e){"use strict";var r=e("c04e"),o=e("9bf2"),i=e("5c6c");t.exports=function(t,n,e){var a=r(n);a in t?o.f(t,a,i(0,e)):t[a]=e}},a434:function(t,n,e){"use strict";var r=e("23e7"),o=e("23cb"),i=e("a691"),a=e("50c4"),s=e("7b0b"),c=e("65f0"),u=e("8418"),f=e("1dde"),l=e("ae40"),d=f("splice"),p=l("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,m=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,n){var e,r,f,l,d,p,g=s(this),y=a(g.length),w=o(t,y),_=arguments.length;if(0===_?e=r=0:1===_?(e=0,r=y-w):(e=_-2,r=m(v(i(n),0),y-w)),y+e-r>h)throw TypeError(b);for(f=c(g,r),l=0;l<r;l++)d=w+l,d in g&&u(f,l,g[d]);if(f.length=r,e<r){for(l=w;l<y-r;l++)d=l+r,p=l+e,d in g?g[p]=g[d]:delete g[p];for(l=y;l>y-r+e;l--)delete g[l-1]}else if(e>r)for(l=y-r;l>w;l--)d=l+r-1,p=l+e-1,d in g?g[p]=g[d]:delete g[p];for(l=0;l<e;l++)g[l+w]=arguments[l+2];return g.length=y-r+e,f}})},a4d3:function(t,n,e){"use strict";var r=e("23e7"),o=e("da84"),i=e("d066"),a=e("c430"),s=e("83ab"),c=e("4930"),u=e("fdbf"),f=e("d039"),l=e("5135"),d=e("e8b5"),p=e("861d"),v=e("825a"),m=e("7b0b"),h=e("fc6a"),b=e("c04e"),g=e("5c6c"),y=e("7c73"),w=e("df75"),_=e("241c"),x=e("057f"),E=e("7418"),S=e("06cf"),C=e("9bf2"),N=e("d1e7"),O=e("9112"),j=e("6eeb"),A=e("5692"),P=e("f772"),k=e("d012"),D=e("90e3"),I=e("b622"),$=e("e538"),J=e("746f"),T=e("d44e"),F=e("69f3"),M=e("b727").forEach,R=P("hidden"),z="Symbol",B="prototype",H=I("toPrimitive"),Q=F.set,W=F.getterFor(z),q=Object[B],G=o.Symbol,K=i("JSON","stringify"),L=S.f,U=C.f,V=x.f,X=N.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),nt=A("symbol-to-string-registry"),et=A("wks"),rt=o.QObject,ot=!rt||!rt[B]||!rt[B].findChild,it=s&&f((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=L(q,n);r&&delete q[n],U(t,n,e),r&&t!==q&&U(q,n,r)}:U,at=function(t,n){var e=Y[t]=y(G[B]);return Q(e,{type:z,tag:t,description:n}),s||(e.description=n),e},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,n,e){t===q&&ct(Z,n,e),v(t);var r=b(n,!0);return v(e),l(Y,r)?(e.enumerable?(l(t,R)&&t[R][r]&&(t[R][r]=!1),e=y(e,{enumerable:g(0,!1)})):(l(t,R)||U(t,R,g(1,{})),t[R][r]=!0),it(t,r,e)):U(t,r,e)},ut=function(t,n){v(t);var e=h(n),r=w(e).concat(vt(e));return M(r,(function(n){s&&!lt.call(e,n)||ct(t,n,e[n])})),t},ft=function(t,n){return void 0===n?y(t):ut(y(t),n)},lt=function(t){var n=b(t,!0),e=X.call(this,n);return!(this===q&&l(Y,n)&&!l(Z,n))&&(!(e||!l(this,n)||!l(Y,n)||l(this,R)&&this[R][n])||e)},dt=function(t,n){var e=h(t),r=b(n,!0);if(e!==q||!l(Y,r)||l(Z,r)){var o=L(e,r);return!o||!l(Y,r)||l(e,R)&&e[R][r]||(o.enumerable=!0),o}},pt=function(t){var n=V(h(t)),e=[];return M(n,(function(t){l(Y,t)||l(k,t)||e.push(t)})),e},vt=function(t){var n=t===q,e=V(n?Z:h(t)),r=[];return M(e,(function(t){!l(Y,t)||n&&!l(q,t)||r.push(Y[t])})),r};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=D(t),e=function(t){this===q&&e.call(Z,t),l(this,R)&&l(this[R],n)&&(this[R][n]=!1),it(this,n,g(1,t))};return s&&ot&&it(q,n,{configurable:!0,set:e}),at(n,t)},j(G[B],"toString",(function(){return W(this).tag})),j(G,"withoutSetter",(function(t){return at(D(t),t)})),N.f=lt,C.f=ct,S.f=dt,_.f=x.f=pt,E.f=vt,$.f=function(t){return at(I(t),t)},s&&(U(G[B],"description",{configurable:!0,get:function(){return W(this).description}}),a||j(q,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),M(w(et),(function(t){J(t)})),r({target:z,stat:!0,forced:!c},{for:function(t){var n=String(t);if(l(tt,n))return tt[n];var e=G(n);return tt[n]=e,nt[e]=n,e},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:f((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(m(t))}}),K){var mt=!c||f((function(){var t=G();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));r({target:"JSON",stat:!0,forced:mt},{stringify:function(t,n,e){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=n,(p(n)||void 0!==t)&&!st(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!st(n))return n}),o[1]=n,K.apply(null,o)}})}G[B][H]||O(G[B],H,G[B].valueOf),T(G,z),k[R]=!0},ae40:function(t,n,e){var r=e("83ab"),o=e("d039"),i=e("5135"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,n){if(i(s,t))return s[t];n||(n={});var e=[][t],u=!!i(n,"ACCESSORS")&&n.ACCESSORS,f=i(n,0)?n[0]:c,l=i(n,1)?n[1]:void 0;return s[t]=!!e&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,f,l)}))}},b727:function(t,n,e){var r=e("0366"),o=e("44ad"),i=e("7b0b"),a=e("50c4"),s=e("65f0"),c=[].push,u=function(t){var n=1==t,e=2==t,u=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(v,m,h,b){for(var g,y,w=i(v),_=o(w),x=r(m,h,3),E=a(_.length),S=0,C=b||s,N=n?C(v,E):e||d?C(v,0):void 0;E>S;S++)if((p||S in _)&&(g=_[S],y=x(g,S,w),t))if(n)N[S]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:c.call(N,g)}else switch(t){case 4:return!1;case 7:c.call(N,g)}return l?-1:u||f?f:N}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c740:function(t,n,e){"use strict";var r=e("23e7"),o=e("b727").findIndex,i=e("44d2"),a=e("ae40"),s="findIndex",c=!0,u=a(s);s in[]&&Array(1)[s]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)},e01a:function(t,n,e){"use strict";var r=e("23e7"),o=e("83ab"),i=e("da84"),a=e("5135"),s=e("861d"),c=e("9bf2").f,u=e("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[n]=!0),n};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var v=p.toString,m="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,n=v.call(t);if(a(l,t))return"";var e=m?n.slice(7,-1):n.replace(h,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,n,e){var r=e("b622");n.f=r},e8b5:function(t,n,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f820:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],i=e("2877"),a={},s=Object(i["a"])(a,r,o,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=about.74a8e780.js.map