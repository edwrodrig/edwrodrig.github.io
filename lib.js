var ANIM={modal_levels:0,fadeIn(elem){if(typeof elem==="string")
elem=document.getElementById(elem);if(elem.style.opacity===null||elem.style.opacity===''||elem.style.opacity==='0'){elem.style.opacity='0';elem.style.transition="opacity 0.5s";requestAnimationFrame(function(){elem.style.display='';requestAnimationFrame(function(){elem.style.opacity='1'})});return!0}
return!1},fadeOut(elem){if(typeof elem==="string")
elem=document.getElementById(elem);if(elem.style.opacity===null||elem.style.opacity===''||elem.style.opacity==='1'){elem.style.transition="opacity 0.5s";elem.style.opacity='0';setTimeout(function(){if(elem.style.opacity==='0')
elem.style.display='none'},500);return!0}
return!1},modalIn(elem){if(typeof elem==="string")
elem=document.getElementById(elem);elem.style.top='0';elem.style.left='0';elem.style.position='fixed';elem.style.width='100%';elem.style.height='100%';if(ANIM.fadeIn(elem)){if(ANIM.modal_levels===0)
document.body.style.overflow='hidden';ANIM.modal_levels++}},modalOut(elem){if(typeof elem==="string")
elem=document.getElementById(elem);if(ANIM.fadeOut(elem)){if(ANIM.modal_levels===1){document.body.style.overflow=null}
ANIM.modal_levels--}},changePage(elem,page_name){if(typeof elem==="string")
elem=document.getElementById(elem);let children=elem.children;for(let i=0;i<children.length;i++){let child=children[i];let current_page_name=child.getAttribute('data-page-name');if(current_page_name===page_name)
ANIM.fadeIn(child);else ANIM.fadeOut(child)}}}