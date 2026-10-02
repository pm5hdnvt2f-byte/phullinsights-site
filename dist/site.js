for(const b of document.querySelectorAll('.theme-toggle'))b.addEventListener('click',()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;localStorage.setItem('phull-theme',t)});const mb=document.querySelector('.nav-mobile-btn'),mm=document.querySelector('#mobile-menu');if(mb&&mm)mb.addEventListener('click',()=>{const o=mb.getAttribute('aria-expanded')==='true';mb.setAttribute('aria-expanded',String(!o));mm.hidden=o});const filters=[...document.querySelectorAll('.filter-row a')],cards=[...document.querySelectorAll('.article-index-card')];if(filters.length&&cards.length){const match={all:()=>true,'supply-chain':t=>t.includes('case'),leadership:t=>t.includes('leadership'),sustainability:t=>t.includes('sustainability'),governance:t=>t.includes('governance'),cases:t=>t.includes('case')};for(const link of filters)link.addEventListener('click',event=>{event.preventDefault();const key=link.hash.slice(1)||'all',test=match[key]||match.all;for(const item of filters)item.setAttribute('aria-current',String(item===link));for(const card of cards){const category=(card.querySelector('.article-card-meta span')?.textContent||'').toLowerCase();card.hidden=!test(category)}});filters[0].setAttribute('aria-current','true')}

const contactForm=document.querySelector('#preview-contact-form');
if(contactForm){
  contactForm.addEventListener('submit',async event=>{
    event.preventDefault();
    const status=document.querySelector('#form-status');
    const submitButton=contactForm.querySelector('button[type="submit"]');
    const accessKey=contactForm.querySelector('[name="access_key"]')?.value;
    const setStatus=(message,state)=>{if(!status)return;status.textContent=message;status.dataset.state=state||''};
    if(!accessKey||accessKey==='YOUR_ACCESS_KEY'){
      setStatus('The form is temporarily unavailable. Please use the direct email link instead.','error');
      return;
    }
    setStatus('Sending your message…','');
    if(submitButton)submitButton.disabled=true;
    contactForm.setAttribute('aria-busy','true');
    try{
      const response=await fetch('https://api.web3forms.com/submit',{method:'POST',body:new FormData(contactForm),headers:{Accept:'application/json'}});
      const data=await response.json();
      if(response.ok&&data.success){
        setStatus('Thank you. Your message has been sent and I will reply personally.','success');
        contactForm.reset();
      }else{
        setStatus('The message could not be sent. Please use the direct email link instead.','error');
      }
    }catch(error){
      setStatus('The message could not be sent. Please use the direct email link instead.','error');
    }finally{
      if(submitButton)submitButton.disabled=false;
      contactForm.removeAttribute('aria-busy');
    }
  });
}
