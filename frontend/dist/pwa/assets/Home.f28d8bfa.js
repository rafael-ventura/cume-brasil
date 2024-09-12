import{Q as _}from"./ColecaoService.cdf7ac7c.js";import{Q as E,a as f}from"./QPage.deee6677.js";import{V as x}from"./ViaService.8dafdc9c.js";import{a as i}from"./utils.c3e36012.js";import{_ as b,v as C,r as u,o as G,x as I,y,z as c,F as t,B as n,G as h,H as S,I as B}from"./index.a9495b3a.js";import"./axios.c798e365.js";import"./AuthenticateService.c3e240d2.js";var H="/assets/logo.339eb54d.png";class T{async getViasNaUrca(){var s;const{vias:a}=await x.getAllVias();for(const e of a)(s=e.imagem)!=null&&s.url&&(e.imagem.url=i(e.imagem.url));return a.filter(e=>{var r,l;return((l=(r=e.montanha)==null?void 0:r.bairro)==null?void 0:l.toLowerCase())==="leme"})}async getViasDeTerceiroGrau(){var s;const{vias:a}=await x.getAllVias();for(const e of a)(s=e.imagem)!=null&&s.url&&(e.imagem.url=i(e.imagem.url));return a.filter(e=>this.isTerceiroGrau(e.grau))}isTerceiroGrau(a){if(!a)return!1;const s=a.replace(/\s+/g,"").toLowerCase();return["3","3.0","iii","3sup","iii sup","iiisup"].includes(s)}async getViasComExposicaoMenorOuIgualE2(){var s;const{vias:a}=await x.getAllVias();for(const e of a)(s=e.imagem)!=null&&s.url&&(e.imagem.url=i(e.imagem.url));return a.filter(e=>{var r,l;return((r=e.exposicao)==null?void 0:r.toLowerCase())==="e2"||((l=e.exposicao)==null?void 0:l.toLowerCase())==="e1"})}}var V=new T;const g=m=>(S("data-v-a99d04b0"),m=m(),B(),m),j={class:"q-pa-md",style:{"max-width":"700px"}},k=g(()=>t("div",{class:"text-h3 text-center q-mb-md"},"Bem-vindo ao Cumes Brasil",-1)),q=g(()=>t("div",{class:"text-h5 text-center q-mb-md"},"Descubra Sua Pr\xF3xima Aventura",-1)),N={class:"row q-gutter-md justify-center"},Q={class:"col-12 col-md-6 col-lg-4"},U={class:"absolute-bottom text-white text-left"},$=g(()=>t("div",{class:"text-h6"},"Vias na Urca",-1)),A={class:"text-caption"},D={class:"col-12 col-md-6 col-lg-4"},L={class:"absolute-bottom text-white text-left"},F=g(()=>t("div",{class:"text-h6"},"Vias de Terceiro Grau",-1)),M={class:"text-caption"},P={class:"col-12 col-md-6 col-lg-4"},z={class:"absolute-bottom text-white text-left"},O=g(()=>t("div",{class:"text-h6"},"Vias com Exposi\xE7\xE3o at\xE9 E2",-1)),R={class:"text-caption"},J=C({name:"HomePage",__name:"Home",setup(m){const a=u([]),s=u([]),e=u([]),r=u(i("/assets/montanha-default-01.jpg")),l=u(i("/assets/via-default-01.jpg")),w=u(i("/assets/via-default-02.jpg"));G(async()=>{var d,o,v;a.value=await V.getViasNaUrca(),console.log("urcaVias",a.value),s.value=await V.getViasDeTerceiroGrau(),console.log("terceiroGrauVias",s.value),e.value=await V.getViasComExposicaoMenorOuIgualE2(),console.log("exposicaoE2Vias",e.value),a.value.length>0&&((d=a.value[0].imagem)==null?void 0:d.url)&&(r.value=i(a.value[0].imagem.url)),s.value.length>0&&((o=s.value[0].imagem)==null?void 0:o.url)&&(l.value=i(s.value[0].imagem.url)),e.value.length>0&&((v=e.value[0].imagem)==null?void 0:v.url)&&(w.value=i(e.value[0].imagem.url))});function p(d){console.log(`Navigate to: ${d}`)}return(d,o)=>(I(),y(E,{class:"flex flex-center"},{default:c(()=>[t("div",j,[n(_,{src:H,alt:"Cumes Brasil",class:"q-mb-md"}),k,q,t("div",N,[t("div",Q,[n(f,{class:"hover-card",onClick:o[0]||(o[0]=v=>p("leme"))},{default:c(()=>[n(_,{src:r.value,alt:"Vias na Urca"},{default:c(()=>[t("div",U,[$,t("div",A,h(a.value.length)+" vias encontradas",1)])]),_:1},8,["src"])]),_:1})]),t("div",D,[n(f,{class:"hover-card",onClick:o[1]||(o[1]=v=>p("terceiro-grau"))},{default:c(()=>[n(_,{src:l.value,alt:"Vias de Terceiro Grau"},{default:c(()=>[t("div",L,[F,t("div",M,h(s.value.length)+" vias encontradas",1)])]),_:1},8,["src"])]),_:1})]),t("div",P,[n(f,{class:"hover-card",onClick:o[2]||(o[2]=v=>p("exposicao-e2"))},{default:c(()=>[n(_,{src:w.value,alt:"Vias com Exposi\xE7\xE3o at\xE9 E2"},{default:c(()=>[t("div",z,[O,t("div",R,h(e.value.length)+" vias encontradas",1)])]),_:1},8,["src"])]),_:1})])])])]),_:1}))}});var se=b(J,[["__scopeId","data-v-a99d04b0"]]);export{se as default};