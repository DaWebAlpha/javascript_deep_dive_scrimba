//CREATING AND MODIFYING HTML ELEMENTS
const newPost = document.createElement('div');
newPost.textContent = "New post";


//document.body.append(newPost);
document.body.prepend(newPost)