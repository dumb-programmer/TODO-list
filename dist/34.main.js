"use strict";(self.webpackChunktodo_list=self.webpackChunktodo_list||[]).push([[34],{286:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var o=n(866),c=n(946),d=n(972);const i=function(e,t){const n=document.querySelector("#content");function c(){r(),(0,o.sE)()[e.index].getTODOs().forEach(((r,l)=>{!function(r,l){const a=document.querySelectorAll("#content>li"),s=a[a.length-1],u=document.createElement("button");u.classList.add("todo-remove-btn"),u.classList.add("icon");const p=document.createElement("button");p.classList.add("edit-btn"),p.classList.add("icon");const m=document.createElement("div");m.classList.add("icons-container"),m.append(p),m.appendChild(u),u.addEventListener("click",(()=>{(0,o.eP)(l,e.index,t),c(e.index)})),p.addEventListener("click",(()=>{!function(r){const l=e.index,a=(0,o.sE)()[l].getTODOs()[+r],s=a.getTitle(),u=a.getDescription(),p=a.getDueDate(),m=a.getPriority(),b=document.createElement("div");b.setAttribute("class","form-container");const E=document.createElement("div");E.setAttribute("class","container");const v=document.createElement("form");v.setAttribute("id","todo-form");const h=document.createElement("div");h.setAttribute("class","flex-container");const y=document.createElement("div");y.setAttribute("class","first");const f=document.createElement("div");f.setAttribute("class","second"),y.innerHTML=`<label for= "title" > Title : <br><input type="text" id="title" value="${s}"></label><br> <label for="description">Description : <br><textarea id="description">${u}</textarea></label><br></br>`,f.innerHTML=`<label for="due">Due Date : <br><input type="date" id="due" value=${p}></label><br> <label for= "priority" > Priority: <br> <select name="priority" id="priority" selected=${m}> <option value="high">High</option> <option value="medium">Medium</option> <option value="low">Low</option> </select> </label>`;const L=f.querySelector("label>#priority");"low"==m?L.selectedIndex=2:"medium"==m&&(L.selectedIndex=1),h.appendChild(y),h.appendChild(f),E.append(h);const g=document.createElement("button");g.textContent="OK",g.classList.add("ok-btn"),g.addEventListener("click",(n=>{n.preventDefault();const l=document.querySelector("#title").value,a=document.querySelector("#description").value,s=document.querySelector("#due").value,u=document.querySelector("#priority").value,p=new d.Z(l,a,s,u);let m=e.index;(0,o.dE)(m,r,p,t),i(),c()}));const C=document.createElement("button");C.textContent="Cancel",C.setAttribute("id","cancel-todo"),C.classList.add("cancel-btn"),C.addEventListener("click",(e=>{e.preventDefault(),i()})),E.appendChild(g),E.appendChild(C),v.appendChild(E),b.appendChild(v);const x=document.createElement("div");x.setAttribute("id","modal-container"),x.appendChild(b),n.appendChild(x)}(l)}));const b=document.createElement("li"),E=document.createElement("p");E.textContent=r.getTitle(),b.classList.add("todo-item"),b.appendChild(E),b.appendChild(m),s.parentNode.insertBefore(b,s)}(r,l),l+=1}))}function i(){const e=document.querySelector("#modal-container");document.querySelector("#content").removeChild(e)}function r(){const e=document.querySelector("#content"),t=document.querySelectorAll("#content>.todo-item");null!=t&&t.forEach((t=>{e.removeChild(t)}))}return{render:function(){c(),document.querySelector("#add-todo").addEventListener("click",(()=>{!function(){const r=(0,o.sE)(),l=document.createElement("div");l.setAttribute("class","form-container");const a=document.createElement("div");a.setAttribute("class","container");const s=document.createElement("form");s.setAttribute("id","todo-form");const u=document.createElement("div");u.setAttribute("class","flex-container");const p=document.createElement("div");p.setAttribute("class","first");const m=document.createElement("div");m.setAttribute("class","second"),p.innerHTML='<label for= "title" > Title : <br><input type="text" id="title"></label><br> <label for="description">Description : <br><textarea id="description"></textarea></label><br></br>',m.innerHTML='<label for="due">Due Date : <br><input type="date" id="due"></label><br> <label for= "priority" > Priority: <br> <select name="priority" id="priority"> <option value="high">High</option> <option value="medium">Medium</option> <option value="low">Low</option> </select> </label>',u.appendChild(p),u.appendChild(m),a.append(u);const b=document.createElement("button");b.textContent="Add",b.classList.add("ok-btn"),b.addEventListener("click",(n=>{n.preventDefault();const l=document.querySelector("#title").value,a=document.querySelector("#description").value,s=document.querySelector("#due").value,u=document.querySelector("#priority").value,p=new d.Z(l,a,s,u);let m=e.index;(0,o.Gw)(m,p,t),i();let b=e.index;r[b].todos.length,c()}));const E=document.createElement("button");E.textContent="Cancel",E.setAttribute("id","cancel-todo"),E.classList.add("cancel-btn"),E.addEventListener("click",(e=>{e.preventDefault(),i()})),a.appendChild(b),a.appendChild(E),s.appendChild(a),l.appendChild(s);const v=document.createElement("div");v.setAttribute("id","modal-container"),v.appendChild(l),n.appendChild(v)}()}))},clearScreen:r,renderTODOs:c,reRender:function(t){e=t,c()}}},r=n.p+"b6c1b3cdde58678e3405.svg";var l=n(466);const a=function(e){let t={index:0,setSelectedProject:function(e){t.index=e,p()}};const n=i(t,e);function d(e){for(let t=1;t<e.length;t++)null!=e[t]&&a(e,t)}function a(n,i){const r=document.createElement("li"),l=document.createElement("button");l.setAttribute("remove-btn-index",i),l.setAttribute("aria-label","delete project"),l.classList.add("project-delete-btn"),l.classList.add("icon");const a=document.createElement("button");a.setAttribute("aria-label","edit project"),a.classList.add("edit-btn"),a.classList.add("icon");const u=document.createElement("div");u.classList.add("icons-container"),u.style.width="3rem",u.appendChild(a),u.appendChild(l),a.addEventListener("click",(t=>{t.stopPropagation();const n=(0,o.sE)();!function(t,n,i,r){i.innerHTML="";const l=document.createElement("input");l.type="text",l.maxLength="30",l.style.marginRight="0.5rem",l.value=n.getName(),l.addEventListener("click",(e=>{e.stopPropagation()}));const a=document.createElement("button");a.setAttribute("id","add-project-btn"),a.classList.add(".ok-btn"),a.textContent="Add",a.addEventListener("click",(n=>{n.stopPropagation();const a=l.value,u=new c.Z(a);(0,o.ji)(t,u,e),i.innerHTML="";const p=document.createElement("p");p.textContent=u.getName(),p.classList.add("project-name"),i.appendChild(p),i.append(r),s(),d((0,o.sE)())}));const u=document.createElement("button");u.classList.add("cancel-btn"),u.textContent="Cancel",u.addEventListener("click",(e=>{e.stopPropagation(),i.innerHTML="";const t=document.createElement("p");t.textContent=n.getName(),t.classList.add("project-name"),i.appendChild(t),i.appendChild(r)})),i.setAttribute("id","project-input"),i.append(l),i.append(a),i.append(u)}(i,n[i],t.target.parentNode.parentNode,u)})),l.addEventListener("click",(t=>{t.stopPropagation();const n=document.querySelector("#projects"),c=t.target.parentNode.parentNode;n.removeChild(c),(0,o.rR)(i,e)}));const m=n[i],b=document.createElement("p");b.style.marginRight="0.9rem",b.textContent=m.getName(),r.append(b),r.append(u),r.style.display="flex";const E=document.getElementById("projects");r.addEventListener("click",(()=>{t.setSelectedProject(i),p()})),E.append(r)}function s(){const e=document.querySelectorAll("#projects>li"),t=document.getElementById("projects");e.forEach((e=>{t.removeChild(e)}))}function u(){const e=document.getElementById("default");if(0===t.index)e.classList.add("highlighted");else{const e=document.querySelector(".highlighted");null!=e&&e.classList.remove("highlighted"),document.querySelectorAll("#projects>li")[t.index-1].classList.add("highlighted")}}function p(){s(),d((0,o.sE)()),u(),n.reRender(t)}return{render:function(){s(),d((0,o.sE)()),function(){const n=document.querySelector("#new-project"),i=document.querySelector("#more"),u=document.querySelector("#default"),m=document.getElementById("projects");n.addEventListener("click",(()=>{const t=document.createElement("li"),n=document.createElement("input");n.maxLength="30",n.style.marginBottom="0.5rem";const d=document.createElement("button");d.setAttribute("id","add-project-btn"),d.classList.add("ok-btn"),d.textContent="Add",d.addEventListener("click",(()=>{const t=n.value,d=new c.Z(t);(0,o.B)(d,e);const i=document.querySelector("#project-input");m.removeChild(i);const r=(0,o.sE)();a(r,r.length-1)}));const i=document.createElement("button");i.setAttribute("id","cancel-project-btn"),i.classList.add("cancel-btn"),i.textContent="Cancel",i.addEventListener("click",(()=>{const e=document.querySelector("#project-input");m.removeChild(e)})),t.setAttribute("id","project-input"),t.append(n),t.append(d),t.append(i),m.append(t)})),i.addEventListener("click",(()=>{const e=document.querySelectorAll("#projects>li"),t=document.querySelector("#more"),n=(0,o.sE)();e.length>0?(t.style.background=`url(${r})`,s()):(t.style.background=`url(${l})`,d(n))})),u.addEventListener("click",(()=>{t.setSelectedProject(0),p()}))}(),u(),n.render()}}}}}]);