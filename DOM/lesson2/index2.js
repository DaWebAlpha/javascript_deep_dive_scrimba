// Multiple Node SELECTION
const el = document.querySelectorAll('a');

console.log(el);

el.forEach((val)=>{
    console.log(val);
})

links.forEach(link => {
  if (link.matches('a[href="/login"]')) {
    const loginLink = link;
    console.log(loginLink);  
  }
})