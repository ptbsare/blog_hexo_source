var G=Object.defineProperty;var d=(e,t)=>{for(var n in t)G(e,n,{get:t[n],enumerable:!0})};var h=typeof window>"u"&&typeof globalThis.WebSocketPair>"u";typeof Deno>"u"&&(self.Deno={args:[],build:{arch:"x86_64"},env:{get(){}}});var x=new Map,y=0;function f(e){self.postMessage(e)}h&&(globalThis.syscall=async(e,...t)=>await new Promise((n,o)=>{y++,x.set(y,{resolve:n,reject:o}),f({type:"sys",id:y,name:e,args:t})}));function v(e,t){h&&(self.addEventListener("message",n=>{(async()=>{let o=n.data;switch(o.type){case"inv":{let a=e[o.name];if(!a)throw new Error(`Function not loaded: ${o.name}`);try{let s=await Promise.resolve(a(...o.args||[]));f({type:"invr",id:o.id,result:s})}catch(s){console.error("An exception was thrown as a result of invoking function",o.name,"error:",s.message),f({type:"invr",id:o.id,error:s.message})}}break;case"sysr":{let a=o.id,s=x.get(a);if(!s)throw Error("Invalid request id");x.delete(a),o.error?s.reject(new Error(o.error)):s.resolve(o.result)}break}})().catch(console.error)}),f({type:"manifest",manifest:t}))}function O(e){let t=atob(e),n=t.length,o=new Uint8Array(n);for(let a=0;a<n;a++)o[a]=t.charCodeAt(a);return o}function A(e){typeof e=="string"&&(e=new TextEncoder().encode(e));let t="",n=e.byteLength;for(let o=0;o<n;o++)t+=String.fromCharCode(e[o]);return btoa(t)}async function R(e,t){if(typeof e!="string"){let n=new Uint8Array(await e.arrayBuffer()),o=n.length>0?A(n):void 0;t={method:e.method,headers:Object.fromEntries(e.headers.entries()),base64Body:o},e=e.url}return syscall("sandboxFetch.fetch",e,t)}globalThis.nativeFetch=globalThis.fetch;function q(){globalThis.fetch=async function(e,t){let n=t&&t.body?A(new Uint8Array(await new Response(t.body).arrayBuffer())):void 0,o=await R(e,t&&{method:t.method,headers:t.headers,base64Body:n});return new Response(o.base64Body?O(o.base64Body):null,{status:o.status,headers:o.headers})}}h&&q();function P(e,t){if(t(e))return[e];let n=[];if(e.children)for(let o of e.children)n=[...n,...P(o,t)];return n}function m(e,t){return P(e,n=>n.type===t)[0]}function w(e,t){P(e,t)}var i={};d(i,{confirm:()=>he,copyToClipboard:()=>De,dispatch:()=>ye,downloadFile:()=>se,filterBox:()=>le,flashNotification:()=>ce,fold:()=>ve,foldAll:()=>Se,getCurrentPage:()=>$,getCursor:()=>V,getSelection:()=>_,getText:()=>j,getUiOption:()=>Pe,goHistory:()=>ie,hidePanel:()=>de,insertAtCursor:()=>ge,insertAtPos:()=>pe,moveCursor:()=>me,navigate:()=>X,openCommandPalette:()=>ee,openPageNavigator:()=>Z,openSearchPanel:()=>Ue,openUrl:()=>oe,prompt:()=>xe,redo:()=>Me,reloadPage:()=>te,reloadSettingsAndCommands:()=>ne,reloadUI:()=>re,replaceRange:()=>fe,save:()=>J,setPage:()=>Y,setSelection:()=>z,setText:()=>Q,setUiOption:()=>we,showPanel:()=>ue,toggleFold:()=>Te,undo:()=>Fe,unfold:()=>Ae,unfoldAll:()=>Ce,uploadFile:()=>ae,vimEx:()=>be});typeof self>"u"&&(self={syscall:()=>{throw new Error("Not implemented here")}});var r=globalThis.syscall;function $(){return r("editor.getCurrentPage")}function Y(e){return r("editor.setPage",e)}function j(){return r("editor.getText")}function Q(e){return r("editor.setText",e)}function V(){return r("editor.getCursor")}function _(){return r("editor.getSelection")}function z(e,t){return r("editor.setSelection",e,t)}function J(){return r("editor.save")}function X(e,t=!1,n=!1){return r("editor.navigate",e,t,n)}function Z(e="page"){return r("editor.openPageNavigator",e)}function ee(){return r("editor.openCommandPalette")}function te(){return r("editor.reloadPage")}function re(){return r("editor.reloadUI")}function ne(){return r("editor.reloadSettingsAndCommands")}function oe(e,t=!1){return r("editor.openUrl",e,t)}function ie(e){return r("editor.goHistory",e)}function se(e,t){return r("editor.downloadFile",e,t)}function ae(e,t){return r("editor.uploadFile",e,t)}function ce(e,t="info"){return r("editor.flashNotification",e,t)}function le(e,t,n="",o=""){return r("editor.filterBox",e,t,n,o)}function ue(e,t,n,o=""){return r("editor.showPanel",e,t,n,o)}function de(e){return r("editor.hidePanel",e)}function pe(e,t){return r("editor.insertAtPos",e,t)}function fe(e,t,n){return r("editor.replaceRange",e,t,n)}function me(e,t=!1){return r("editor.moveCursor",e,t)}function ge(e){return r("editor.insertAtCursor",e)}function ye(e){return r("editor.dispatch",e)}function xe(e,t=""){return r("editor.prompt",e,t)}function he(e){return r("editor.confirm",e)}function Pe(e){return r("editor.getUiOption",e)}function we(e,t){return r("editor.setUiOption",e,t)}function be(e){return r("editor.vimEx",e)}function ve(){return r("editor.fold")}function Ae(){return r("editor.unfold")}function Te(){return r("editor.toggleFold")}function Se(){return r("editor.foldAll")}function Ce(){return r("editor.unfoldAll")}function Fe(){return r("editor.undo")}function Me(){return r("editor.redo")}function Ue(){return r("editor.openSearchPanel")}function De(e){return r("editor.copyToClipboard",e)}var g={};d(g,{parseMarkdown:()=>Ne});function Ne(e){return r("markdown.parseMarkdown",e)}var l={};d(l,{deleteAttachment:()=>Re,deleteFile:()=>Qe,deletePage:()=>Ie,getAttachmentMeta:()=>Le,getFileMeta:()=>Ye,getPageMeta:()=>Ee,listAttachments:()=>Be,listFiles:()=>qe,listPages:()=>ke,listPlugs:()=>We,readAttachment:()=>Ge,readFile:()=>$e,readPage:()=>Ke,writeAttachment:()=>Oe,writeFile:()=>je,writePage:()=>He});function ke(e=!1){return r("space.listPages",e)}function Ee(e){return r("space.getPageMeta",e)}function Ke(e){return r("space.readPage",e)}function He(e,t){return r("space.writePage",e,t)}function Ie(e){return r("space.deletePage",e)}function We(){return r("space.listPlugs")}function Be(){return r("space.listAttachments")}function Le(e){return r("space.getAttachmentMeta",e)}function Ge(e){return r("space.readAttachment",e)}function Oe(e,t){return r("space.writeAttachment",e,t)}function Re(e){return r("space.deleteAttachment",e)}function qe(){return r("space.listFiles")}function $e(e){return r("space.readFile",e)}function Ye(e){return r("space.getFileMeta",e)}function je(e,t){return r("space.writeFile",e,t)}function Qe(e){return r("space.deleteFile",e)}var c={};d(c,{run:()=>nt});function nt(e,t){return r("shell.run",e,t)}var p={};d(p,{parse:()=>ot,stringify:()=>it});function ot(e){return r("yaml.parse",e)}function it(e){return r("yaml.stringify",e)}async function ct(e,t){let n=await l.readPage(e),o=await g.parseMarkdown(n),a;return w(o,s=>{if(s.type!=="FencedCode")return!1;let u=m(s,"CodeInfo");if(t&&!u||t&&!t.includes(u.children[0].text))return!1;let b=m(s,"CodeText");return b?(a=b.children[0].text,!0):!1}),a}async function T(e,t=["yaml"]){let n=await ct(e,t);if(n!==void 0)try{return p.parse(n)}catch(o){throw console.error("YAML Page parser error",o),new Error(`YAML Error: ${o.message}`)}}var lt="SETTINGS";async function S(e,t){try{let o=(await T(lt,["yaml"])||{})[e];return o===void 0?t:o}catch(n){if(n.message==="Not found")return t;throw n}}function F(e,t,n=!1){if(C(e)&&!C(t)){let o=e.split("/")[0];return n&&(o=ut(o)),`${o}/${t}`}else return t}function ut(e){return e.startsWith("!")&&(e=e.substring(1),e.startsWith("localhost")?e="http://"+e:e="https://"+e),e}function C(e){return e.startsWith("!")}var dt=100;async function pt(e){let t=await S("maximumAttachmentSize",dt);if(typeof t!="number"&&await i.flashNotification("The setting 'maximumAttachmentSize' must be a number","error"),e.content.length>t*1024*1024){i.flashNotification(`Attachment is too large, maximum is ${t}MiB`,"error");return}let n=await i.prompt("File name for pasted attachment",e.name);if(!n)return;n=n.split(" ").join("-");let o=F(await i.getCurrentPage(),await i.getCurrentPage()+"/"+n);await l.writeAttachment(o,e.content);let a="",s="";if(a==="wikilink")s=`[[${o}]]`;else{let u=await i.getCurrentPage();u=u.split(" ").join("-"),s=`[${n}](${u.split("/").pop()+"/"+n})`}e.contentType.startsWith("image/")&&(s="!"+s),i.insertAtCursor(s)}async function M(e,t,n){let o=await i.uploadFile(t,n);await pt(o)}async function U(){console.log("npm install");try{let{code:e}=await c.run("npm",["install"]);console.log(e)}catch{}console.log("Npm Install Done!"),await i.flashNotification("Npm Install Done! ")}async function D(){console.log("hexo init");try{let{code:e}=await c.run("hexo",["init"]);console.log(e)}catch{}console.log("Hexo Init Done!"),await i.flashNotification("Hexo Init Done.")}async function N(){console.log("hexo new");let e=await i.prompt("New article layout(void to default layout):"),t=await i.prompt("New article title:");if(t){try{let{code:n}=await c.run("hexo",["new",e,t]);console.log(n)}catch{}console.log("Hexo New Done!"),await i.flashNotification("Hexo New Done!")}}async function k(){console.log("hexo generate");try{let{code:e}=await c.run("hexo",["generate"]);console.log(e)}catch{}console.log("Hexo Generate Done!"),await i.flashNotification("Hexo Generate Done!")}async function E(){console.log("hexo clean");try{let{code:e}=await c.run("hexo",["clean"]);console.log(e)}catch{}console.log("Hexo Clean Done!"),await i.flashNotification("Hexo Clean Done!")}async function K(){console.log("hexo server");try{let{code:e}=await c.run("hexo",["server","&"]);console.log(e)}catch{}console.log("Hexo Server Done!"),await i.flashNotification("Hexo Server Done!")}async function H(){console.log("hexo deploy");try{let{code:e}=await c.run("hexo",["deploy"]);console.log(e)}catch{}console.log("Hexo Deploy Done!"),await i.flashNotification("Hexo Deploy Done!")}async function I(){console.log("hexo generate && hexo deploy");try{let{code1:e}=await c.run("hexo",["generate"]);console.log(e);let{code2:t}=await c.run("hexo",["deploy"]);console.log(t)}catch{}console.log("Hexo Generate and Deploy Done!"),await i.flashNotification("Hexo Generate and Deploy Done!")}async function W(){console.log("kill `pidof hexo`");try{let{code:e}=await c.run("kill",["$(pidof hexo)"]);console.log(e)}catch{}console.log("Hexo Stop Server Done!"),await i.flashNotification("Hexo Stop Server Done!")}var B={uploadFile:M,npmInstall:U,init:D,newArticle:N,generate:k,clean:E,server:K,deploy:H,generateDeploy:I,stopServer:W},L={name:"hexo",requiredPermissions:["shell"],functions:{uploadFile:{path:"hexo.ts:uploadFile",command:{name:"Hexo: Upload File"}},npmInstall:{path:"hexo.ts:npmInstall",command:{name:"Hexo: npmInstall"}},init:{path:"hexo.ts:init",command:{name:"Hexo: Init"}},newArticle:{path:"hexo.ts:newArticle",command:{name:"Hexo: New"}},generate:{path:"hexo.ts:generate",command:{name:"Hexo: Generate"}},clean:{path:"hexo.ts:clean",command:{name:"Hexo: Clean"}},server:{path:"hexo.ts:server",command:{name:"Hexo: Server"}},deploy:{path:"hexo.ts:deploy",command:{name:"Hexo: Deploy"}},generateDeploy:{path:"hexo.ts:generateDeploy",command:{name:"Hexo: Generate and Deploy"}},stopServer:{path:"hexo.ts:stopServer",command:{name:"Hexo: Stop Server"}}},assets:{}},cr={manifest:L,functionMapping:B};v(B,L);export{cr as plug};
