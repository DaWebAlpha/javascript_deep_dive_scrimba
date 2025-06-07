const preferDarkMode = true;


if(preferDarkMode){
    console.log('Dark Mode activated');
    document.body.style.backgroundColor = 'black';
}else{
    console.log('Not Dark Mode');
    document.body.style.background = 'ghostWhite';
}


const colorMode = 'dark';

if (colorMode === 'solarized') {
   console.log('solarized mode set!'); 
   document.body.style.background = 'palegoldenrod';
} else if (colorMode === 'dark') {
  console.log('dark mode set!');  
  document.body.style.background = 'black';
} else {    
  console.log('light mode set!');
  document.body.style.background = 'ghostwhite';
}


const colorMode1 = 'dark';

switch (colorMode1) {
  case "solarized":
   console.log('solarized mode set!'); 
   document.body.style.background = 'palegoldenrod';
    break;
  case 'dark':
    console.log('dark mode set!');  
    document.body.style.background = 'black';
    break;
  default:  
    console.log('light mode set!');
    document.body.style.background = 'ghostwhite';
}