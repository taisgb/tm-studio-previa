const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav-links');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e))}if(window.lucide)window.lucide.createIcons();

// Feed remoto opcional. Mantém acesso ao perfil caso não esteja configurado.
(function(){
 const id=window.TM_INSTAGRAM?.elfsightWidgetId?.trim();
 const mount=document.getElementById('instagram-widget');
 const fallback=document.getElementById('instagram-fallback');
 if(!id || !/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(id) || !mount || !fallback) return;
 const widget=document.createElement('div');
 widget.className='elfsight-app-'+id;
 widget.setAttribute('data-elfsight-app-lazy','');
 mount.append(widget);mount.hidden=false;
 const loader=document.createElement('script');loader.src='https://elfsightcdn.com/platform.js';loader.async=true;
 const observer=new ResizeObserver(()=>{if(widget.getBoundingClientRect().height>80){fallback.hidden=true;observer.disconnect();}});observer.observe(widget);
 loader.onerror=()=>{observer.disconnect();mount.hidden=true;fallback.hidden=false;};
 document.head.append(loader);
})();
