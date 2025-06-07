//ADDEVENTLISTENER

const post = document.querySelector('.post');


//CHECK EVENT TYPE
post.addEventListener('click', (event) =>{
    console.log(event);
})

post.addEventListener('click', (event) =>{
    console.log(event.target);
})

