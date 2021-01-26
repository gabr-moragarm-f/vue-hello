var app = new Vue({
 el: '#root',
 data:{
   message: prompt('Inserisci il titolo'),
   titleColor:'black',
   img: 'https://i.pinimg.com/originals/ca/ed/ac/caedac95f81b01f1e226ea19b282dc04.jpg'
 }
});

Vue.config.devtools = true;
