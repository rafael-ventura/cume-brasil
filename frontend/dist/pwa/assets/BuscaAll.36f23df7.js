import{u as me,b as ge,a as J,Q as ye}from"./QPage.deee6677.js";import{v as B,r as V,o as ee,x as d,M as g,F as x,B as a,N as D,Q as _,O as I,_ as N,c as te,R as fe,a as m,w as be,h as w,g as pe,S as Y,U as he,V as _e,u as Ie,z as F,A as G,G as A,W as xe,X as Se,Y as z,Z as R,y as X,H as le,I as ae,$ as Ce}from"./index.a9495b3a.js";import{Q as U,a as ne}from"./QCardSection.4cae44bf.js";import{Q as Z,b as Ve}from"./QSelect.5b1fffa2.js";import{Q as ke}from"./QSeparator.6f3c39a3.js";import{api as j}from"./axios.c798e365.js";import{f as se}from"./utils.c3e36012.js";import"./QDialog.1bcc0740.js";import"./scroll.3728f98d.js";class Ee{async getById(u){try{return(await j.get(`/montanhas/${u}`)).data}catch(n){throw new Error(n.response.data.error||"Erro desconhecido ao buscar montanha")}}async getAll(){try{return(await j.get("/montanhas")).data}catch(u){throw new Error(u.response.data.error||"Erro desconhecido ao buscar montanha")}}async getAllName(){try{return console.log("requiesting all Montanha names"),(await j.get("/montanhas")).data.map(n=>n.nome)}catch(u){throw new Error(u.response.data.error||"Erro desconhecido ao buscar montanha")}}}var $e=new Ee;const qe={class:"margem"},Be={class:"row q-col-gutter-sm q-gutter-md justify-center"},we={key:0,class:"q-pt-lg"},Fe={key:1,class:"q-pt-lg"},Pe={key:2,class:"q-pt-lg"},Me={key:3,class:"q-pt-lg row q-col-gutter-sm q-gutter-md justify-center"},Qe={key:4,class:"q-pt-lg"},De={key:5,class:"buttons"},Ae=B({__name:"SearchFilters",emits:["applyFilters"],setup(e,{emit:u}){const n=u,o=V(!1),s=V({searchQuery:"",selectedMountain:null,selectedDifficulty:null,selectedExtension:null,selectedCrux:null,page:1,itemsPerPage:10}),l=V({searchQuery:!1,selectedMountain:!1,selectedDifficulty:!1,selectedExtension:!1,selectedCrux:!1}),t=V({searchQuery:!1,selectedMountain:!1,selectedDifficulty:!1,selectedExtension:!1,selectedCrux:!1}),S=["I","Isup","II","III","IV","V","A1","A2","A3","IIsup","IIIsup","IVsup","Vsup","VIIb","VI","VIsup","VIIa","VIIIa/b","VIIIb","VIIc","VIIIb/c","VIIIc","IXa","III (A1/VIIIa)","VIIb/c","Xa","VII(3)","VII","V(2)","VIII","VIIIa"],h=V([]),T=V({"Menor que 50 metros":[0,50],"Entre 50 e 100 metros":[50,100],"Entre 100 e 200 metros":[100,200],"Entre 200 e 300 metros":[200,300],"Mais de 300 metros":[300,1/0]});ee(async()=>{try{h.value=await $e.getAllName()}catch(y){console.error("Error getting mountains:",y)}});const E=()=>{s.value={searchQuery:"",selectedMountain:null,selectedDifficulty:null,selectedExtension:null,selectedCrux:null,page:1,itemsPerPage:10},Object.keys(t.value).forEach(y=>{t.value[y]=!1}),Object.keys(l.value).forEach(y=>{l.value[y]=!1}),o.value=!1,n("applyFilters",s.value)},b=()=>{n("applyFilters",s.value)},f=y=>{y==="selectedExtension"?o.value=!o.value:l.value[y]=!l.value[y],t.value[y]=!t.value[y]},p=y=>{s.value.selectedExtensionCategory=T.value[y],b()};return(y,c)=>(d(),g("div",qe,[x("div",Be,[a(_,{class:D({active:t.value.searchQuery}),rounded:"",icon:"search",size:"md",onClick:c[0]||(c[0]=v=>f("searchQuery")),label:"Nome da Via"},null,8,["class"]),a(_,{class:D({active:t.value.selectedMountain}),rounded:"",icon:"terrain",size:"md",onClick:c[1]||(c[1]=v=>f("selectedMountain")),label:"Montanha"},null,8,["class"]),a(_,{class:D({active:t.value.selectedDifficulty}),rounded:"",icon:"signal_cellular_alt",size:"md",onClick:c[2]||(c[2]=v=>f("selectedDifficulty")),label:"Grau"},null,8,["class"]),a(_,{class:D({active:t.value.selectedExtension}),rounded:"",icon:"height",size:"md",onClick:c[3]||(c[3]=v=>f("selectedExtension")),label:"Extens\xE3o"},null,8,["class"]),a(_,{class:D({active:t.value.selectedCrux}),rounded:"",icon:"trending_up",size:"md",onClick:c[4]||(c[4]=v=>f("selectedCrux")),label:"Crux"},null,8,["class"])]),l.value.searchQuery?(d(),g("div",we,[a(U,{modelValue:s.value.searchQuery,"onUpdate:modelValue":c[5]||(c[5]=v=>s.value.searchQuery=v),label:"Buscar via por nome",debounce:"300",outlined:""},null,8,["modelValue"])])):I("",!0),l.value.selectedMountain?(d(),g("div",Fe,[a(Z,{modelValue:s.value.selectedMountain,"onUpdate:modelValue":c[6]||(c[6]=v=>s.value.selectedMountain=v),options:h.value,"option-label":"name","option-value":"id",label:"Montanha",outlined:""},null,8,["modelValue","options"])])):I("",!0),l.value.selectedDifficulty?(d(),g("div",Pe,[a(Z,{modelValue:s.value.selectedDifficulty,"onUpdate:modelValue":c[7]||(c[7]=v=>s.value.selectedDifficulty=v),options:S,label:"Grau",outlined:""},null,8,["modelValue"])])):I("",!0),o.value?(d(),g("div",Me,[a(_,{class:"q-pr-md",onClick:c[8]||(c[8]=v=>p("Menor que 50 metros")),label:"Menor que 50 metros"}),a(_,{class:"q-pr-md",onClick:c[9]||(c[9]=v=>p("Entre 50 e 100 metros")),label:"Entre 50 e 100 metros"}),a(_,{class:"q-pr-md",onClick:c[10]||(c[10]=v=>p("Entre 100 e 200 metros")),label:"Entre 100 e 200 metros"}),a(_,{class:"q-pr-md",onClick:c[11]||(c[11]=v=>p("Entre 200 e 300 metros")),label:"Entre 200 e 300 metros"}),a(_,{class:"q-pr-md",onClick:c[12]||(c[12]=v=>p("Mais de 300 metros")),label:"Mais de 300 metros"})])):I("",!0),l.value.selectedCrux?(d(),g("div",Qe,[a(U,{modelValue:s.value.selectedCrux,"onUpdate:modelValue":c[13]||(c[13]=v=>s.value.selectedCrux=v),label:"Crux",debounce:"300",outlined:""},null,8,["modelValue"])])):I("",!0),Object.values(l.value).some(v=>v)||o.value?(d(),g("div",De,[a(_,{class:"right-margem",label:"Limpar",color:"secondary",onClick:E}),a(_,{label:"Buscar",color:"primary",onClick:b})])):I("",!0),a(ke,{spaced:""})]))}});var Ne=N(Ae,[["__scopeId","data-v-716ccfc8"]]);function O(e,u){return[!0,!1].includes(e)?e:u}var Te=te({name:"QPagination",props:{...me,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||fe.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:u}){const{proxy:n}=pe(),{$q:o}=n,s=ge(e,o),l=m(()=>parseInt(e.min,10)),t=m(()=>parseInt(e.max,10)),S=m(()=>parseInt(e.maxPages,10)),h=m(()=>y.value+" / "+t.value),T=m(()=>O(e.boundaryLinks,e.input)),E=m(()=>O(e.boundaryNumbers,!e.input)),b=m(()=>O(e.directionLinks,e.input)),f=m(()=>O(e.ellipses,!e.input)),p=V(null),y=m({get:()=>e.modelValue,set:i=>{if(i=parseInt(i,10),e.disable||isNaN(i))return;const r=Ve(i,l.value,t.value);e.modelValue!==r&&u("update:modelValue",r)}});be(()=>`${l.value}|${t.value}`,()=>{y.value=e.modelValue});const c=m(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),v=m(()=>e.gutter in Y?`${Y[e.gutter]}px`:e.gutter||null),oe=m(()=>v.value!==null?`--q-pagination-gutter-parent:-${v.value};--q-pagination-gutter-child:${v.value}`:null),L=m(()=>{const i=[e.iconFirst||o.iconSet.pagination.first,e.iconPrev||o.iconSet.pagination.prev,e.iconNext||o.iconSet.pagination.next,e.iconLast||o.iconSet.pagination.last];return o.lang.rtl===!0?i.reverse():i}),ie=m(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),K=m(()=>he(e,"flat")),re=m(()=>({[K.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),ue=m(()=>{const i={[K.value]:!1};return e.activeDesign!==""&&(i[e.activeDesign]=!0),i}),ce=m(()=>({...ue.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),P=m(()=>{let i=Math.max(S.value,1+(f.value?2:0)+(E.value?2:0));const r={pgFrom:l.value,pgTo:t.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(t.value).length)}em`}};return S.value&&i<t.value-l.value+1&&(i=1+Math.floor(i/2)*2,r.pgFrom=Math.max(l.value,Math.min(t.value-i+1,e.modelValue-Math.floor(i/2))),r.pgTo=Math.min(t.value,r.pgFrom+i-1),E.value&&(r.boundaryStart=!0,r.pgFrom++),f.value&&r.pgFrom>l.value+(E.value?1:0)&&(r.ellipsesStart=!0,r.pgFrom++),E.value&&(r.boundaryEnd=!0,r.pgTo--),f.value&&r.pgTo<t.value-(E.value?1:0)&&(r.ellipsesEnd=!0,r.pgTo--)),r});function W(i){y.value=i}function de(i){y.value=y.value+i}const ve=m(()=>{function i(){y.value=p.value,p.value=null}return{"onUpdate:modelValue":r=>{p.value=r},onKeyup:r=>{_e(r,13)===!0&&i()},onBlur:i}});function $(i,r,M){const q={"aria-label":r,"aria-current":"false",...re.value,...i};return M===!0&&Object.assign(q,{"aria-current":"true",...ce.value}),r!==void 0&&(e.toFn!==void 0?q.to=e.toFn(r):q.onClick=()=>{W(r)}),w(_,q)}return Object.assign(n,{set:W,setByOffset:de}),()=>{const i=[],r=[];let M;if(T.value===!0&&(i.push($({key:"bls",disable:e.disable||e.modelValue<=l.value,icon:L.value[0]},l.value)),r.unshift($({key:"ble",disable:e.disable||e.modelValue>=t.value,icon:L.value[3]},t.value))),b.value===!0&&(i.push($({key:"bdp",disable:e.disable||e.modelValue<=l.value,icon:L.value[1]},e.modelValue-1)),r.unshift($({key:"bdn",disable:e.disable||e.modelValue>=t.value,icon:L.value[2]},e.modelValue+1))),e.input!==!0){M=[];const{pgFrom:q,pgTo:H,marginalStyle:Q}=P.value;if(P.value.boundaryStart===!0){const k=l.value===e.modelValue;i.push($({key:"bns",style:Q,disable:e.disable,label:l.value},l.value,k))}if(P.value.boundaryEnd===!0){const k=t.value===e.modelValue;r.unshift($({key:"bne",style:Q,disable:e.disable,label:t.value},t.value,k))}P.value.ellipsesStart===!0&&i.push($({key:"bes",style:Q,disable:e.disable,label:"\u2026",ripple:!1},q-1)),P.value.ellipsesEnd===!0&&r.unshift($({key:"bee",style:Q,disable:e.disable,label:"\u2026",ripple:!1},H+1));for(let k=q;k<=H;k++)M.push($({key:`bpg${k}`,style:Q,disable:e.disable,label:k},k,k===e.modelValue))}return w("div",{class:c.value,...ie.value},[w("div",{class:"q-pagination__content row no-wrap items-center",style:oe.value},[...i,e.input===!0?w(U,{class:"inline",style:{width:`${h.value.length/1.5}em`},type:"number",dense:!0,value:p.value,disable:e.disable,dark:s.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:h.value,min:l.value,max:t.value,...ve.value}):w("div",{class:"q-pagination__middle row justify-center"},M),...r])])}}});class Le{async search(u){try{console.log("Search request received: ",u);const o=(await j.post("/search",u)).data;return u.entityType==="Via"&&(o.items=o.items.map(s=>se(s))),o}catch(n){throw console.error("API error: ",n),n}}}var Oe=new Le;const je=["top","middle","bottom"];var C=te({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>je.includes(e)}},setup(e,{slots:u}){const n=m(()=>e.align!==void 0?{verticalAlign:e.align}:null),o=m(()=>{const s=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(s!==void 0?` text-${s}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>w("div",{class:o.value,style:n.value,role:"status","aria-label":e.label},Ie(u.default,e.label!==void 0?[e.label]:[]))}});const ze={key:0},Re=["src"],Ue={class:"via-info"},Ge={class:"text-h6"},Xe={class:"text-subtitle1"},Ke=B({__name:"ColecaoCard",props:{via:{}},emits:["click"],setup(e,{emit:u}){const n=G(),o=e,s=u,l=()=>{s("click"),o.via&&n.push(`/vias/${o.via.id}`)};return(t,S)=>t.via?(d(),g("div",ze,[a(J,{class:"via-card",onClick:l},{default:F(()=>[a(ne,null,{default:F(()=>[x("img",{src:t.via.imagem.url,class:"via-image",alt:"via image"},null,8,Re),x("div",Ue,[x("div",Ge,A(t.via.nome),1),x("div",Xe,A(t.via.montanha.nome),1),a(C,{color:"primary",label:"Grau: "+t.via.grau},null,8,["label"]),a(C,{color:"secondary",label:"Crux: "+t.via.crux,class:"q-ml-sm"},null,8,["label"]),a(C,{color:"info",label:"Artificial: "+t.via.artificial,class:"q-ml-sm"},null,8,["label"]),a(C,{color:"accent",label:"Dura\xE7\xE3o: "+t.via.duracao,class:"q-ml-sm"},null,8,["label"]),a(C,{color:"warning",label:"Exposi\xE7\xE3o: "+t.via.exposicao,class:"q-ml-sm"},null,8,["label"]),a(C,{color:"info",label:"Extens\xE3o: "+t.via.extensao+"m",class:"q-mt-sm"},null,8,["label"])])]),_:1})]),_:1})])):I("",!0)}});var We=N(Ke,[["__scopeId","data-v-0544ef1d"]]);const He={key:0},Ye={key:0},Ze=["src"],Je={class:"card-info"},et={class:"text-h6"},tt={class:"text-subtitle1"},lt=B({__name:"ViaCard",props:{via:{}},emits:["click"],setup(e,{emit:u}){const n=e,o=u,s=()=>{n.via.nome&&o("click")};return(l,t)=>l.via?(d(),g("div",He,[a(J,{class:"card-item",onClick:s},{default:F(()=>[a(ne,null,{default:F(()=>[l.via.imagem?(d(),g("div",Ye,[x("img",{src:l.via.imagem.url,class:"card-image",alt:"via image"},null,8,Ze)])):I("",!0),x("div",Je,[x("div",et,A(l.via.nome),1),x("div",tt,[a(xe,{name:"terrain"}),Se(" "+A(l.via.montanha.nome),1)]),a(C,{color:"primary",label:"Grau: "+l.via.grau},null,8,["label"]),a(C,{color:"secondary",label:"Crux: "+l.via.crux,class:"q-ml-sm"},null,8,["label"]),a(C,{color:"info",label:"Artificial: "+l.via.artificial,class:"q-ml-sm"},null,8,["label"]),a(C,{color:"accent",label:"Dura\xE7\xE3o: "+l.via.duracao,class:"q-ml-sm"},null,8,["label"]),a(C,{color:"warning",label:"Exposi\xE7\xE3o: "+l.via.exposicao,class:"q-ml-sm"},null,8,["label"]),a(C,{color:"info",label:"Extens\xE3o: "+l.via.extensao+"m",class:"q-mt-sm"},null,8,["label"])])]),_:1})]),_:1})])):I("",!0)}});const at={class:"via-list"},nt=B({__name:"ViaLista",props:{vias:{}},setup(e){const u=e,n=G(),o=s=>{n.push(`/vias/${s.id}`)};return(s,l)=>(d(),g("div",at,[(d(!0),g(z,null,R(u.vias,t=>(d(),X(lt,{key:t.id,via:t,onClick:S=>o(t)},null,8,["via","onClick"]))),128))]))}});var st=N(nt,[["__scopeId","data-v-b205f912"]]);const ot=e=>(le("data-v-4f26e3f6"),e=e(),ae(),e),it={key:0},rt={key:1},ut={key:0},ct={key:0},dt=ot(()=>x("p",null,"No results found.",-1)),vt=[dt],mt={key:1},gt=B({__name:"SearchResults",props:{results:{},entityType:{},totalItems:{}},emits:["select"],setup(e,{emit:u}){return(n,o)=>(d(),g("div",null,[n.entityType==="via"?(d(),g("div",it,[a(st,{vias:n.results},null,8,["vias"])])):n.entityType==="colecao"?(d(),g("div",rt,[(d(!0),g(z,null,R(n.results,s=>(d(),g("div",{key:s.id},[s.vias?(d(),g("div",ut,[(d(!0),g(z,null,R(s.vias,l=>(d(),X(We,{key:l.id,via:l},null,8,["via"]))),128))])):I("",!0)]))),128)),n.results&&n.results.length===0?(d(),g("div",ct,vt)):I("",!0),n.totalItems!==void 0?(d(),g("div",mt,[x("p",null,"Total Items Found: "+A(n.totalItems),1)])):I("",!0)])):I("",!0)]))}});var yt=N(gt,[["__scopeId","data-v-4f26e3f6"]]);const ft=e=>(le("data-v-68776b45"),e=e(),ae(),e),bt=ft(()=>x("div",{class:"search-header"},[x("h2",null,"Busca")],-1)),pt=B({__name:"SearchEntity",props:{entity:{}},emits:["select","update-results"],setup(e,{expose:u,emit:n}){const o=e,s=n,l=V({searchQuery:"",selectedMountain:null,selectedDifficulty:null,selectedExtensionCategory:null,selectedCrux:null,page:1,itemsPerPage:10}),t=V([]),S=V(1);ee(()=>{h()});const h=async()=>{try{const b={...l.value,entityType:o.entity},f=await Oe.search(b);o.entity==="via"&&(f.items=f.items.map(p=>se(p))),t.value=f.items,S.value=f.totalPages,console.log("Search results:",t.value),s("update-results",t.value)}catch(b){console.error("Error searching entities:",b)}};u({handleApplyFilters:b=>{l.value={...l.value,...b,page:1},h()}});const E=b=>{console.log("Item selecionado:",b),s("select",b)};return(b,f)=>(d(),g("div",null,[bt,Ce(b.$slots,"filters",{filters:l.value},void 0,!0),a(yt,{results:t.value,entityType:o.entity,onSelect:E},null,8,["results","entityType"]),a(Te,{modelValue:l.value.page,"onUpdate:modelValue":[f[0]||(f[0]=p=>l.value.page=p),h],max:S.value},null,8,["modelValue","max"])]))}});var ht=N(pt,[["__scopeId","data-v-68776b45"]]);const qt=B({__name:"BuscaAll",setup(e){const u=G(),n=V(),o=t=>{n.value&&n.value.handleApplyFilters?n.value.handleApplyFilters(t):console.error("SearchEntity ref not found or handleApplyFilters not defined")},s=t=>{console.log("Search results updated:",t)},l=t=>{u.push(`/vias/${t}`)};return(t,S)=>(d(),X(ye,null,{default:F(()=>[a(ht,{ref_key:"searchEntityRef",ref:n,entity:"via",onSelect:S[0]||(S[0]=h=>l(h.id)),onUpdateResults:s},{filters:F(({filters:h})=>[a(Ne,{filters:h,onApplyFilters:o},null,8,["filters"])]),_:1},512)]),_:1}))}});export{qt as default};