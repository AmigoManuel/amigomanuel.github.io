import{S as e,C as t,P as o,W as n,R as s,a,H as i,b as r,c,G as d,A as p,d as l,e as m,f as h,g as w}from"./three.9268a0f1.js";import{T as u,u as f}from"./@tweenjs.0a10ef3b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const y=new e;y.background=new t(1247506);const g=new o(75,window.innerWidth/window.innerHeight,1,5e3);g.position.set(-4.382,4.474,11.305),g.rotation.set(-.377,-.346,-.133);const b=new n({canvas:document.querySelector("#bg")});b.toneMapping=s,b.toneMappingExposure=2.3,b.shadowMap.enabled=!0,b.shadowMap.type=a,b.setPixelRatio(window.devicePixelRatio),b.setSize(window.innerWidth,window.innerHeight);const v=new i(16737322,526368,2);v.position.set(0,5,5),y.add(v);const z=new r(16777215,10,17,.4);z.position.set(5,7,-14),z.castShadow=!0,z.shadow.camera.near=2,z.shadow.camera.far=10,y.add(z);const x=new c(16774184,10,2);x.position.set(0,4.3,2),y.add(x);const k=new r(16774184,7,15,.7);k.castShadow=!0,y.add(k),k.position.set(0,4.3,1.4),k.target.position.set(0,0,2.4),k.target.lookAt(0,0,2.4);const S=new c(16774184,10,2);S.position.set(-2,2.4,2.1),y.add(S);const M=new r(16774184,7,7,.7);M.castShadow=!0,y.add(M),M.position.set(-2,2.4,2.1),M.target.position.set(-2,0,3),M.target.lookAt(-2,0,3);const E=new c(16774184,10,2);E.position.set(0,4.3,-2),y.add(E);const L=new c(16774184,10,2);L.position.set(-2,2.4,-2.1),y.add(L);const H=e=>{document.getElementById("dummy").remove();let t=document.createElement("div");t.id="dummy",t.innerHTML+=e,document.getElementsByTagName("div")[0].appendChild(t)},A=(e,t,o,n)=>{const s={x:e.position.x,y:e.position.y,z:e.position.z},a={x:e.rotation.x,y:e.rotation.y,z:e.rotation.z};new u(s).to(t).onUpdate((()=>e.position.set(s.x,s.y,s.z))).onStart((()=>H(" "))).onComplete((()=>H(n))).start(),new u(a).to(o).onUpdate((()=>e.rotation.set(a.x,a.y,a.z))).start()},P=[{path:"/place/scene.gltf",pos:[0,0,0],rot:[0,0,0],wei:1},{path:"/sunflower/scene.gltf",pos:[4,-1.3,3],rot:[0,-.7,-.2],wei:.5},{path:"/squash/scene.gltf",pos:[1,-.5,5.5],rot:[-.3,-.8,-.6],wei:.45},{path:"/snowpea/scene.gltf",pos:[2,-1,4],rot:[0,-1.4,-.3],wei:.45},{path:"/peashooter/scene.gltf",pos:[.5,-.2,3],rot:[.2,-.5,0],wei:.4},{path:"/zombie/scene.gltf",pos:[-3,-.86,4],rot:[0,1,.65],wei:.5},{path:"/zombie/scene.gltf",pos:[-3,-1.4,5],rot:[.5,1.7,0],wei:.5},{path:"/shrek/scene.gltf",pos:[-1.4,.2,-3.4],rot:[0,1.7,0],wei:.001},{path:"/kingboo/scene.gltf",name:"boo",t:0,pos:[0,2,-4],rot:[0,1,0],wei:.002},{path:"/mcmutant/scene.gltf",pos:[-2.5,-.2,3],rot:[.2,-2.5,0],wei:.5,anim:2},{path:"/banana/scene.gltf",pos:[1,.3,-3.4],rot:[0,2.9,0],wei:.01,anim:1},{path:"/cube/scene.gltf",pos:[-.2,.5,-3.6],rot:[0,0,0],wei:.0017,anim:1},{path:"/cake/scene.gltf",pos:[-.2,1,-3.2],rot:[0,0,0],wei:.3,anim:1},{path:"/popcat/scene.gltf",pos:[3.7,0,0],rot:[0,1.2,0],wei:.07,anim:0},{path:"/stormtrooper/scene.gltf",pos:[3,-1.6,4.5],rot:[0,0,-.3],wei:.45},{path:"/bart/scene.gltf",pos:[-1,.2,-4.5],rot:[0,1.7,0],wei:.5},{path:"/pikachu/scene.gltf",pos:[0,.2,-4.5],rot:[0,3,0],wei:.15},{path:"/crewmate/scene.gltf",name:"crewmate",pos:[3.2,.28,0],rot:[0,3,0],wei:.0025,anim:0},{path:"/masterchief/scene.gltf",pos:[4.2,-2,5],rot:[0,0,-.3],wei:.4,anim:2}],j={cords:{x:-.494,y:-.803,z:8.522},rots:{x:.094,y:-.058,z:.005}},N={cords:{x:-3.801,y:-.69,z:7.654},rots:{x:.09,y:-.459,z:.04}},q={cords:{x:-2.271,y:-.132,z:5.878},rots:{x:.023,y:-.369,z:.008}},C={cords:{x:-2.381,y:3.37,z:5.323},rots:{x:-1.008,y:-.972,z:-.919}},O={cords:{x:6.307,y:-.416,z:7.092},rots:{x:.059,y:.726,z:-.039}},T={cords:{x:5.959,y:.285,z:-.509},rots:{x:-2.631,y:1.473,z:2.633}},B={cords:{x:-.413,y:5.264,z:-6.755},rots:{x:-2.48,y:-.048,z:-3.104}},I={cords:{x:-1.125,y:12.875,z:.026},rots:{x:-1.569,y:-.087,z:-1.548}},R={cords:{x:-4.382,y:4.474,z:11.305},rots:{x:-.377,y:-.346,z:-.133}},W={content1:'<div class="center">\n        <h2>Hola humana/o!</h2>\n        <p>Se te invita cordialmente a la celebración de mi cumple este día 31 de Octubre</p>\n      </div>',content2:'<div class="center">\n        <h1>Será el evento del año</h1>\n      </div>',content3:'<div class="center">\n  <p>Y debes asistir debidamente disfrazada/o (a libre elección, no necesariamente de terror)</p>\n  </div>',content4:'<div class="center">\n  <p>recuerda traer tu pase de movilidad debidamente habilitado y cumplir con los protocolos establecidos por las autoridades</p>\n      </div>',content5:'<div class="center">\n  <p>La celebración será en la casita de Hualpen</p>\n      </div>',content6:'<div class="center">\n        <h2>Y recuerda mostrar respeto ante las bendiciones!</h2>\n        <p>pintas y tin</p>\n      </div>',content7:'<div class="center">\n        <h2>Habrá pastel!</h2>\n        <p>juegos, silla musical, pirotecnia y mucho más :D</p>\n      </div>',content8:'<div class="center">\n        <h2>Creado con ThreeJS sobre ViteJS!</h2>\n        <h2>Modelos de <a href="sketchfab.com">sketchfab.com</a></h2>\n      </div>',content9:'<div class="center">\n        <h2>Invitación al cumple de NEL</h2>\n        <p></p>\n      </div>'},D=[],J=(e,t)=>{switch(t){case 2:A(e,j.cords,j.rots,W.content1);break;case 3:A(e,N.cords,N.rots,W.content2);break;case 4:A(e,q.cords,q.rots,W.content3);break;case 5:A(e,C.cords,C.rots,W.content4);break;case 6:A(e,O.cords,O.rots,W.content5);break;case 7:A(e,T.cords,T.rots,W.content6);break;case 8:A(e,B.cords,B.rots,W.content7);break;case 9:A(e,I.cords,I.rots,W.content8);break;default:A(e,R.cords,R.rots,W.content9)}};var U=new l,Y=new h(new m);const F=new w,G=(K=y,P.forEach((e=>{const t=((e,t,[o,n,s],a,[i,r,c],l)=>{const m=new d,h=new Object;return null==l&&(l=0),m.load(e,(e=>{const d=e.scene,m=e.animations;d.position.set(o,n,s),d.rotation.set(i,r,c),d.traverse((e=>{e.isMesh&&(e.scale.set(1,1,1),e.castShadow=!0,e.receiveShadow=!0,e.material.map&&(e.material.map.anisotropy=16))})),d.scale.set(a,a,a),t.add(d);const w=new p(d);w.clipAction(m[l]).play(),h.model=d,h.mixer=w,h.initialPos={x:o,y:n,z:s}})),h})("./models"+e.path,K,e.pos,e.wei,e.rot,e.anim);e.name&&(t.name=e.name),null!=e.t&&(t.t=e.t),D.push(t)})),D);var K;let V=1;J(g,V);let Q=1;document.onmousedown=()=>{9==V&&(V=0),V+=1,J(g,V),Q&&(Y.crossOrigin="anonymous",U.load("./sounds/gruntilda.ogg",(function(e){Y.setBuffer(e),Y.setLoop(!0),Y.play()})),Q=0)};let X=1;const Z=e=>{requestAnimationFrame(Z);var t=F.getDelta();G.forEach((e=>{e.mixer&&e.mixer.update(t),"boo"===e.name&&(e.t+=.001,e.model.position.x+=.005*Math.cos(e.t)+0,e.model.position.z+=.005*Math.sin(e.t)+0,e.model.rotation.y-=.001*Math.sin(e.t)+0),"crewmate"===e.name&&(Math.abs(e.model.position.z)-Math.abs(e.initialPos.z)>1&&(X*=-1,e.model.rotation.y=-1==X?3:6),e.model.position.z+=.01*X)})),b.render(y,g),f(e)};Z();
