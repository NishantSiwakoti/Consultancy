let AllDivs = document.querySelectorAll('.box');
const centerDivs = ()=>{
  let windowH = window.innerHeight;

  AllDivs.forEach((item)=>{
    let top = item.getBoundingClientRect().top;
    if(top<windowH){
      item.classList.add('active');
    }
  })
}
centerDivs();
window.addEventListener('scroll',centerDivs);