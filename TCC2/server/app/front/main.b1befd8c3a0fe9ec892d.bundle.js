webpackJsonp([0,3],{365:function(t,e,n){"use strict";var r=n(0),a=n(82),o=n(111),i=n(70);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e,n,r){var a=this;this.http=t,this.router=e,this.route=n,this.service=r,this.contabilidade={},this.tipoAcao="Cadastrar";var o=this;this.route=n,this.route.params.subscribe(function(t){var e=t.id;void 0!=e&&(a.tipoAcao="Editar",a.buscaContabilidadeEditavel(e).subscribe(function(t){return o.contabilidade=t.json()},function(t){return console.log(t)}))}),this.http=t}return t.prototype.ngOnInit=function(){},t.prototype.salvar=function(t){var e=this;this.service.salvar(this.contabilidade,"contabilidade").subscribe(function(){e.router.navigate(["/contabilidade"])},function(t){return console.log(t)})},t.prototype.buscaContabilidadeEditavel=function(t){return this.service.editar(t,"contabilidade/")},t=s([n.i(r._2)({selector:"app-cadastrocontabilidade",template:n(895),styles:[n(887)]}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.c&&a.c)&&e||Object,"function"==typeof(l="undefined"!=typeof o.a&&o.a)&&l||Object,"function"==typeof(d="undefined"!=typeof o.c&&o.c)&&d||Object,"function"==typeof(f="undefined"!=typeof i.a&&i.a)&&f||Object])],t);var e,l,d,f}()},366:function(t,e,n){"use strict";var r=n(0),a=n(82),o=n(70),i=n(111);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e,n,r){var a=this;this.http=t,this.router=e,this.route=n,this.service=r,this.empresa={},this.tipoAcao="Cadastrar";var o=this;this.route=n,this.route.params.subscribe(function(t){var e=t.id;void 0!=e&&(a.tipoAcao="Editar",a.buscaEmpresaEditavel(e).subscribe(function(t){return o.empresa=t.json()},function(t){return console.log(t)}))}),this.http=t}return t.prototype.ngOnInit=function(){},t.prototype.salvar=function(t){var e=this;this.service.salvar(this.empresa,"empresa").subscribe(function(){e.router.navigate(["/empresa"])},function(t){return console.log(t)})},t.prototype.buscaEmpresaEditavel=function(t){return this.service.editar(t,"empresa/")},t=s([n.i(r._2)({selector:"app-cadastroempresa",template:n(896),styles:[n(888)]}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.c&&a.c)&&e||Object,"function"==typeof(l="undefined"!=typeof i.a&&i.a)&&l||Object,"function"==typeof(d="undefined"!=typeof i.c&&i.c)&&d||Object,"function"==typeof(f="undefined"!=typeof o.a&&o.a)&&f||Object])],t);var e,l,d,f}()},367:function(t,e,n){"use strict";var r=n(0),a=n(70);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.service=t,this.contabilidades=[]}return t.prototype.ngOnInit=function(){var t=this;this.service.getContabilidades().subscribe(function(e){t.contabilidades=e})},t.prototype.remove=function(t){var e="contabilidade/",n=this;this.service.remove(t,e).subscribe(function(){n.contabilidades=n.contabilidades.filter(function(e){return e._id!=t._id})})},t=o([n.i(r._2)({selector:"app-contabilidade",template:n(897),styles:[n(889)]}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object])],t);var e}()},368:function(t,e,n){"use strict";var r=n(0),a=n(70);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.service=t,this.empresas=[]}return t.prototype.ngOnInit=function(){var t=this;this.service.getEmpresas().subscribe(function(e){t.empresas=e})},t.prototype.remove=function(t){var e="empresa/",n=this;this.service.remove(t,e).subscribe(function(){n.empresas=n.empresas.filter(function(e){return e._id!=t._id})})},t=o([n.i(r._2)({selector:"app-empresa",template:n(898),styles:[n(890)]}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object])],t);var e}()},369:function(t,e,n){"use strict";var r=n(0),a=n(111),o=n(70);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.router=t,this.service=e,this.Erro=!1,this.usuario={email:"",senha:""}}return t.prototype.ngOnInit=function(){},t.prototype.autenticar=function(t){var e=this;t.preventDefault();var n={email:this.usuario.email,senha:this.usuario.senha};this.service.login(n).subscribe(function(t){e.service.redirect(t.tipo)},function(t){e.Erro=!0,e.usuario.email="",e.usuario.senha="",console.log(t)})},t=i([n.i(r._2)({selector:"app-login",template:n(900),styles:[n(892)]}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object,"function"==typeof(c="undefined"!=typeof o.a&&o.a)&&c||Object])],t);var e,c}()},585:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=585},586:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(709),n(672)),a=n(0),o=n(708),i=n(704);o.a.production&&n.i(a.a)(),n.i(r.a)().bootstrapModule(i.a)},70:function(t,e,n){"use strict";var r=n(0),a=n(82),o=n(111);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.http=t,this.router=e,this.URL="http://ponto.ykt.com.br/",this.token=localStorage.getItem("__token")}return t.prototype.sair=function(){localStorage.clear()},t.prototype.login=function(t){var e=this;return localStorage.clear(),this.http.post(this.URL+"autenticar",t).map(function(t){return e.token=t.headers.get("x-access-token"),localStorage.setItem("__token",e.token),t.json()})},t.prototype.doGet=function(t){var e=new a.b;return e.append("x-access-token",this.token),this.http.get(this.URL+t,{headers:e}).map(function(t){return t.json()})},t.prototype.getContabilidades=function(){return this.doGet("contabilidade")},t.prototype.getEmpresas=function(){return this.doGet("empresa")},t.prototype.remove=function(t,e){var n=new a.b;n.append("x-access-token",this.token);var r=this.http.delete(this.URL+e+t._id,{headers:n});return r},t.prototype.salvar=function(t,e){event.preventDefault();var n=new a.b;n.append("Content-Type","application/json"),n.append("x-access-token",this.token);var r="post";return t._id&&(r="put"),this.http[r](this.URL+e,JSON.stringify(t),{headers:n})},t.prototype.editar=function(t,e){var n=new a.b;return n.append("Content-Type","application/json"),n.append("x-access-token",this.token),this.http.get(this.URL+e+t.toString(),{headers:n})},t.prototype.redirect=function(t){switch(t){case 1:this.router.navigate(["/contabilidade"]);break;case 2:this.router.navigate(["/empresa"]);break;case 3:this.router.navigate(["/colaborador"]);break;case 4:this.router.navigate(["/ponto"]);break;default:this.router.navigate(["/login"])}},t=i([n.i(r.e)(),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.c&&a.c)&&e||Object,"function"==typeof(c="undefined"!=typeof o.a&&o.a)&&c||Object])],t);var e,c}()},702:function(t,e,n){"use strict";var r=n(367),a=n(365),o=n(368),i=n(366),s=n(369),c=n(0),l=n(111);n.d(e,"a",function(){return u});var d=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=[{path:"contabilidade",component:r.a},{path:"cadastrocontabilidade",component:a.a},{path:"cadastrocontabilidade/:id",component:a.a},{path:"login",component:s.a},{path:"empresa",component:o.a},{path:"cadastroempresa",component:i.a},{path:"cadastroempresa/:id",component:i.a}],u=function(){function t(){}return t=d([n.i(c.b)({imports:[l.b.forRoot(p)],exports:[l.b],providers:[]}),f("design:paramtypes",[])],t)}()},703:function(t,e,n){"use strict";var r=n(0),a=n(82);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){}return t.prototype.ngOnInit=function(){},t=o([n.i(r._2)({selector:"app-root",template:n(894),styles:[n(886)]}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.c&&a.c)&&e||Object])],t);var e}()},704:function(t,e,n){"use strict";var r=n(157),a=n(0),o=n(17),i=n(26),s=n(82),c=n(702),l=n(367),d=n(365),f=n(869),p=n(703),u=n(705),h=n(369),v=n(707),m=n(70),b=n(706),y=n(368),j=n(366);n.d(e,"a",function(){return _});var g=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},R=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(){function t(){}return t=g([n.i(a.b)({declarations:[p.a,d.a,l.a,u.a,h.a,v.a,b.a,y.a,j.a],imports:[r.a,i.a,s.a,f.a.forRoot(),c.a],providers:[m.a,{provide:o.a,useClass:o.b}],bootstrap:[p.a]}),R("design:paramtypes",[])],t)}()},705:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return i});var a=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.transform=function(t,e){return t.filter(function(t){return t.nome.toLowerCase().includes(e.toLowerCase())})},t=a([n.i(r.d)({name:"contabilidadePipe"}),o("design:paramtypes",[])],t)}()},706:function(t,e,n){"use strict";var r=n(0),a=n(70);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.service=t}return t.prototype.ngOnInit=function(){},t.prototype.sair=function(t){this.service.sair()},t=o([n.i(r._2)({selector:"app-header",template:n(899),styles:[n(891)]}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object])],t);var e}()},707:function(t,e,n){"use strict";var r=n(0),a=n(82);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.http=t}return t.prototype.ngOnInit=function(){},t=o([n.i(r._2)({selector:"app-usuario",template:n(901),styles:[n(893)]}),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.c&&a.c)&&e||Object])],t);var e}()},708:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0}},709:function(t,e,n){"use strict";var r=n(723),a=(n.n(r),n(716)),o=(n.n(a),n(712)),i=(n.n(o),n(718)),s=(n.n(i),n(717)),c=(n.n(s),n(715)),l=(n.n(c),n(714)),d=(n.n(l),n(722)),f=(n.n(d),n(711)),p=(n.n(f),n(710)),u=(n.n(p),n(720)),h=(n.n(u),n(713)),v=(n.n(h),n(721)),m=(n.n(v),n(719)),b=(n.n(m),n(724)),y=(n.n(b),n(933));n.n(y)},861:function(t,e,n){function r(t){return n(a(t))}function a(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./af":409,"./af.js":409,"./ar":415,"./ar-dz":410,"./ar-dz.js":410,"./ar-ly":411,"./ar-ly.js":411,"./ar-ma":412,"./ar-ma.js":412,"./ar-sa":413,"./ar-sa.js":413,"./ar-tn":414,"./ar-tn.js":414,"./ar.js":415,"./az":416,"./az.js":416,"./be":417,"./be.js":417,"./bg":418,"./bg.js":418,"./bn":419,"./bn.js":419,"./bo":420,"./bo.js":420,"./br":421,"./br.js":421,"./bs":422,"./bs.js":422,"./ca":423,"./ca.js":423,"./cs":424,"./cs.js":424,"./cv":425,"./cv.js":425,"./cy":426,"./cy.js":426,"./da":427,"./da.js":427,"./de":429,"./de-at":428,"./de-at.js":428,"./de.js":429,"./dv":430,"./dv.js":430,"./el":431,"./el.js":431,"./en-au":432,"./en-au.js":432,"./en-ca":433,"./en-ca.js":433,"./en-gb":434,"./en-gb.js":434,"./en-ie":435,"./en-ie.js":435,"./en-nz":436,"./en-nz.js":436,"./eo":437,"./eo.js":437,"./es":439,"./es-do":438,"./es-do.js":438,"./es.js":439,"./et":440,"./et.js":440,"./eu":441,"./eu.js":441,"./fa":442,"./fa.js":442,"./fi":443,"./fi.js":443,"./fo":444,"./fo.js":444,"./fr":447,"./fr-ca":445,"./fr-ca.js":445,"./fr-ch":446,"./fr-ch.js":446,"./fr.js":447,"./fy":448,"./fy.js":448,"./gd":449,"./gd.js":449,"./gl":450,"./gl.js":450,"./he":451,"./he.js":451,"./hi":452,"./hi.js":452,"./hr":453,"./hr.js":453,"./hu":454,"./hu.js":454,"./hy-am":455,"./hy-am.js":455,"./id":456,"./id.js":456,"./is":457,"./is.js":457,"./it":458,"./it.js":458,"./ja":459,"./ja.js":459,"./jv":460,"./jv.js":460,"./ka":461,"./ka.js":461,"./kk":462,"./kk.js":462,"./km":463,"./km.js":463,"./ko":464,"./ko.js":464,"./ky":465,"./ky.js":465,"./lb":466,"./lb.js":466,"./lo":467,"./lo.js":467,"./lt":468,"./lt.js":468,"./lv":469,"./lv.js":469,"./me":470,"./me.js":470,"./mi":471,"./mi.js":471,"./mk":472,"./mk.js":472,"./ml":473,"./ml.js":473,"./mr":474,"./mr.js":474,"./ms":476,"./ms-my":475,"./ms-my.js":475,"./ms.js":476,"./my":477,"./my.js":477,"./nb":478,"./nb.js":478,"./ne":479,"./ne.js":479,"./nl":481,"./nl-be":480,"./nl-be.js":480,"./nl.js":481,"./nn":482,"./nn.js":482,"./pa-in":483,"./pa-in.js":483,"./pl":484,"./pl.js":484,"./pt":486,"./pt-br":485,"./pt-br.js":485,"./pt.js":486,"./ro":487,"./ro.js":487,"./ru":488,"./ru.js":488,"./se":489,"./se.js":489,"./si":490,"./si.js":490,"./sk":491,"./sk.js":491,"./sl":492,"./sl.js":492,"./sq":493,"./sq.js":493,"./sr":495,"./sr-cyrl":494,"./sr-cyrl.js":494,"./sr.js":495,"./ss":496,"./ss.js":496,"./sv":497,"./sv.js":497,"./sw":498,"./sw.js":498,"./ta":499,"./ta.js":499,"./te":500,"./te.js":500,"./tet":501,"./tet.js":501,"./th":502,"./th.js":502,"./tl-ph":503,"./tl-ph.js":503,"./tlh":504,"./tlh.js":504,"./tr":505,"./tr.js":505,"./tzl":506,"./tzl.js":506,"./tzm":508,"./tzm-latn":507,"./tzm-latn.js":507,"./tzm.js":508,"./uk":509,"./uk.js":509,"./uz":510,"./uz.js":510,"./vi":511,"./vi.js":511,"./x-pseudo":512,"./x-pseudo.js":512,"./yo":513,"./yo.js":513,"./zh-cn":514,"./zh-cn.js":514,"./zh-hk":515,"./zh-hk.js":515,"./zh-tw":516,"./zh-tw.js":516};r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=861},886:function(t,e){t.exports="\r\n"},887:function(t,e){t.exports=""},888:function(t,e){t.exports=""},889:function(t,e){t.exports=".barra{\r\n    margin:10px;\r\n}"},890:function(t,e){t.exports=".barra{\r\n    margin:10px;\r\n}"},891:function(t,e){t.exports=".header{\r\n    padding-bottom:10px;\r\n}"},892:function(t,e){t.exports=".filho{\r\n    display:table-cell;\r\n    vertical-align:middle;\r\n}\r\n\r\n.list-jogadores > .table{\r\n    margin-bottom:0;\r\n}\r\n.pai{\r\n    margin:auto;\r\n    height:100vh;\r\n    display:table;\r\n}\r\n\r\n.pai.loading{\r\n    height:85vh;\r\n}\r\n\r\n.row.list-jogadores{\r\n    border:2px solid #e4e4e4;\r\n    margin-top:30px;\r\n}\r\n\r\n"},893:function(t,e){t.exports=""},894:function(t,e){t.exports="\r\n<router-outlet></router-outlet>\r\n"},895:function(t,e){t.exports='\r\n<div class="container">\r\n  <h1>{{tipoAcao}} Contabilidade</h1>\r\n  <form class="row" (submit)="salvar($event)" >\r\n    <div class="col-md-6">\r\n\r\n      <div class="form-group">\r\n        <label>Contabilidade</label>\r\n        <input name="nome" [(ngModel)] = "contabilidade.nome" class="form-control" autocomplete="off" required>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label>E-mail</label>\r\n        <input name="email" [(ngModel)] = "contabilidade.email" class="form-control" autocomplete="off" required>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label>Senha</label>\r\n        <input name="senha" [(ngModel)] = "contabilidade.senha" class="form-control" autocomplete="off" required>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label>Telefone</label>\r\n        <input name="telefone" [(ngModel)] = "contabilidade.telefone" class="form-control" autocomplete="off" required>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="col-md-12">\r\n          <input type="submit" class="btn btn-primary pull-right" value="Salvar"  />\r\n          <div class="btn btn-primary pull-left" routerLink="/contabilidade">Voltar</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>'},896:function(t,e){t.exports='\r\n<div class="container">\r\n  <h1>{{tipoAcao}} Empresa</h1>\r\n  <form class="row" (submit)="salvar($event)" >\r\n    <div class="col-md-6">\r\n\r\n      <div class="form-group">\r\n        <label>Empresa</label>\r\n        <input name="nome" [(ngModel)] = "empresa.nome" class="form-control" autocomplete="off" required>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label>E-mail</label>\r\n        <input name="email" [(ngModel)] = "empresa.email" class="form-control" autocomplete="off" required>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label>Senha</label>\r\n        <input name="senha" [(ngModel)] = "empresa.senha" class="form-control" autocomplete="off" required>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label>Telefone</label>\r\n        <input name="telefone" [(ngModel)] = "empresa.telefone" class="form-control" autocomplete="off" required>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label>Contabilidade</label>\r\n        <input name="contabilidade" [(ngModel)] = "empresa.contabilidade" class="form-control" autocomplete="off" required>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="col-md-12">\r\n          <input type="submit" class="btn btn-primary pull-right" value="Salvar"  />\r\n          <div class="btn btn-primary pull-left" routerLink="/empresa">Voltar</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>'},897:function(t,e){t.exports='<app-header> </app-header>\r\n<div class="container">\r\n    <div class="jumbotron" style="text-align: center">\r\n<h1>QR-Ponto</h1>\r\n<p>Listagem de Contabilidades</p>\r\n</div>\r\n<div class="row">\r\n    <div class="col-md-12">\r\n        <form>\r\n            <div class="input-group">\r\n                <span class="input-group-btn">\r\n                        <a routerLink="/cadastrocontabilidade" class="btn btn-primary pull-right">Nova Contabilidade</a>\r\n                    </span>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class="row barra" >\r\n<input #textoProcurado (keyup)="0" class="form-control" placeholder="Buscar por contabilidade">\r\n</div>\r\n</div>\r\n<div class="container">\r\n    <div class="row">\r\n        <table class="table table-striped">\r\n            <thead>\r\n                <tr>\r\n                    <th>Contabilidade</th>\r\n                    <th>E-mail</th>\r\n                    <th>Telefone</th>\r\n                    <th>Senha</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor="let c of contabilidades | contabilidadePipe: textoProcurado.value">\r\n                    <td>{{c.nome}}</td>\r\n                    <td>{{c.email}}</td>\r\n                    <td>{{c.telefone}}</td>\r\n                    <td>{{c.senha}}</td>\r\n                    <td>\r\n                        <div class="btn btn-primary btn-xs" [routerLink]="[\'/cadastrocontabilidade/\', c._id]">\r\n                            <span class="glyphicon glyphicon-pencil"></span>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                       <div class="btn btn-danger btn-xs" (click)="remove(c)">\r\n                           <span class="glyphicon glyphicon-trash"></span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>'},898:function(t,e){t.exports='\r\n<app-header> </app-header>\r\n\r\n<div class="container">\r\n    <div class="jumbotron" style="text-align: center">\r\n        <h1>QR-Ponto</h1>\r\n        <p>Listagem de Empresas</p>\r\n    </div>\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <form>\r\n                <div class="input-group">\r\n                    <span class="input-group-btn">\r\n                        <a routerLink="/cadastroempresa" class="btn btn-primary pull-right">Nova Empresa</a>\r\n                    </span>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class="row barra">\r\n        <input #textoProcurado (keyup)="0" class="form-control" placeholder="Buscar por empresa">\r\n    </div>\r\n</div>\r\n<div class="container">\r\n    <div class="row">\r\n        <table class="table table-striped">\r\n            <thead>\r\n                <tr>\r\n                    <th>Empresa</th>\r\n                    <th>E-mail</th>\r\n                    <th>Telefone</th>\r\n                    <th>Senha</th>\r\n                    <th>Contabilidade</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor="let c of empresas">\r\n                    <td>{{c.nome}}</td>\r\n                    <td>{{c.email}}</td>\r\n                    <td>{{c.telefone}}</td>\r\n                    <td>{{c.senha}}</td>\r\n                    <td>{{c.contabilidade}}</td>\r\n                    <td>\r\n                        <div class="btn btn-primary btn-xs" [routerLink]="[\'/cadastroempresa/\', c._id]">\r\n                            <span class="glyphicon glyphicon-pencil"></span>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class="btn btn-danger btn-xs" (click)="remove(c)">\r\n                            <span class="glyphicon glyphicon-trash"></span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>'},899:function(t,e){t.exports='<div class="header">\r\n    <ul class="nav nav-pills">\r\n        <li role="presentation"> <a routerLink="/contabilidade" routerLinkActive="active">Contabilidades</a></li>\r\n        <li role="presentation"> <a routerLink="/empresa" routerLinkActive="active">Empresas</a></li>\r\n        <li role="presentation" class="pull-right"> <a routerLink="/login" (submit)="sair($event)">Sair</a></li>\r\n    </ul>\r\n</div>'},900:function(t,e){t.exports='<div class="pai">\r\n  <div class="filho">\r\n    <div class="container">\r\n      <div class="row vertical-align">\r\n        <div class="col-md-4 col-md-offset-4">\r\n          <div class="panel panel-default">\r\n            <div class="panel-heading">\r\n              <h3 class="panel-title">Entrar</h3>\r\n            </div>\r\n            <div class="panel-body">\r\n        \r\n               <div [hidden]="!Erro" class="alert alert-danger">\r\n                <strong>Erro!</strong> "Usuário e/ou senha incorreta".\r\n              </div>\r\n\r\n              <form accept-charset="UTF-8" (submit)="autenticar($event)">\r\n                <fieldset>\r\n                  <div class="form-group">\r\n                    <input class="form-control" [(ngModel)] = "usuario.email" placeholder="E-mail" name="email" type="text" required>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <input class="form-control" [(ngModel)]="usuario.senha" placeholder="Senha" type="password" value="" name="senha" required>\r\n                  </div>\r\n                  <input type="submit" class="btn btn-primary pull-right" value="Entrar" />\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>'},901:function(t,e){t.exports="<p>\r\n  usuario works!\r\n</p>\r\n"},934:function(t,e,n){t.exports=n(586)}},[934]);