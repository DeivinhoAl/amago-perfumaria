const carousel=document.querySelector('.campaign-carousel');
const slides=[...document.querySelectorAll('.campaign-slide')],dots=[...document.querySelectorAll('[data-slide]')];
const pause=document.querySelector('.carousel-pause'),reduce=matchMedia('(prefers-reduced-motion: reduce)');
let current=0,paused=reduce.matches,hovered=false,focused=false,timer,touchX;
function schedule(){clearInterval(timer);if(!paused&&!hovered&&!focused&&!document.hidden)timer=setInterval(()=>select(current+1,false),7000)}
function select(index,announce=true){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>{const active=i===current;slide.classList.toggle('is-active',active);slide.setAttribute('aria-hidden',String(!active));slide.inert=!active});dots.forEach((dot,i)=>{dot.classList.toggle('active',i===current);dot.setAttribute('aria-pressed',String(i===current))});document.querySelector('#slide-number').textContent=String(current+1).padStart(2,'0');if(announce)document.querySelector('#carousel-announcement').textContent=slides[current].getAttribute('aria-label');schedule()}
function updatePause(){pause.textContent=paused?'▷':'Ⅱ';pause.setAttribute('aria-label',paused?'Ativar alternância automática':'Pausar alternância automática');schedule()}
dots.forEach(dot=>dot.onclick=()=>select(Number(dot.dataset.slide)));
document.querySelector('.carousel-prev').onclick=()=>select(current-1);document.querySelector('.carousel-next').onclick=()=>select(current+1);
pause.onclick=()=>{paused=!paused;updatePause()};
carousel.onmouseenter=()=>{hovered=true;schedule()};carousel.onmouseleave=()=>{hovered=false;schedule()};
carousel.addEventListener('focusin',()=>{focused=true;schedule()});carousel.addEventListener('focusout',e=>{if(!carousel.contains(e.relatedTarget)){focused=false;schedule()}});
carousel.onkeydown=e=>{if(e.key==='ArrowLeft'){e.preventDefault();select(current-1)}if(e.key==='ArrowRight'){e.preventDefault();select(current+1)}};
carousel.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].screenX},{passive:true});carousel.addEventListener('touchend',e=>{const delta=e.changedTouches[0].screenX-touchX;if(Math.abs(delta)>60)select(current+(delta<0?1:-1))},{passive:true});
document.addEventListener('visibilitychange',schedule);reduce.addEventListener('change',e=>{if(e.matches){paused=true;updatePause()}});window.addEventListener('pagehide',()=>clearInterval(timer));updatePause();
