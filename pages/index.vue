<template>
  <div>
    

<div @click="start_game" id="start_button">

<p>START</p>

</div>
<div v-if="this.startgame" id="quote_div">
<p >
{{quote.text}}
  </p>
</div>


<div  class="sc__wrapper">
  <!-- scratchcard -->
  <div id="js--sc--container" class="sc__container">
    <!-- background image insert here by scratchcard-js -->
    <!-- canvas generate here -->
  </div>
  <!-- infos -->
  
</div>


 


  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import quotes from '../assets/enterpreneur-quotes.json'
import Shake from 'shake.js'
import db from '../components/firebaseinit'
import {ScratchCard, SCRATCH_TYPE} from 'scratchcard-js'
import mic from '../assets/download.jpeg'

export default {
  name: "my-component",
  data() {
    return {

x:'',
y:'',
z:'',
quote:'',
startgame:false

    };
  },
  mounted() {

//console.log(db)
//generate random math number

var random= Math.floor(Math.random() * Math.floor(324));
this.quote=quotes[random];


  },

  methods: {
    
    start_game: function(){

      
var tempthis=this
var startb= document.getElementById('start_button')

setTimeout(function(){

  startb.style.display='none';
  
 test()
},200)

function test()
{

  tempthis.startgame=true
}

 var shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();
    window.addEventListener('shake', function(){
        
      
      document.getElementById('quote_div').style.display='none';



startanimation()



    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }

    //check if shake is supported or not.
    if(!("ondevicemotion" in window)){alert("Not Supported");}


function startanimation()
{

const scContainer = document.getElementById('js--sc--container')
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  
   imageForwardSrc:mic,
  htmlBackground: '<p class="test"><strong>Hello i am HTML content !</strong></p>',
  clearZoneRadius: 50,
  nPoints: 3,
  pointSize: 1,
  callback: function () {
   


  }
})
 

anime({
  targets: '#js--sc--container',
  translateZ: {
    value: 5,
    duration: 800
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 1.5,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 250 // All properties except 'scale' inherit 250ms delay
});


// Init
sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(2)
    console.log(percent)
  })
}).catch((error) => {
  // image not loaded
  alert(error.message);
});

}
    }



    
  },
}
</script>

<style >


#quote_div{


  	
	margin: auto;
    text-align: center;
    font-family: monospace;
    margin-top: 100%;
    padding: 3% 3%;


}
#start_button{

width: 130px;
	height: 130px;
  background: linear-gradient(to right, #fd746c, #ff9068); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
;
	
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
  	
	margin: auto;

border: linear-gradient(to right, #fd746c, #ff9068);;


border-radius: 50%;
box-shadow: #fd746c 


}

#start_button:active{


transform:scale(0.1);
transition:3s ease
}

#start_button p
{


  text-align: center;
 
  	
	margin-top: 40%;
  font-size: 140%

}

.sc__wrapper {
  
  display: block;
  width: 100%;
  height: 300px;
  max-width: 300px;
  margin: 0 auto;
  position: absolute;
 top: 20%;
  
  
}


.sc__container {
  position: relative;
  overflow: hidden;
  height: 280px;
 width: 100%;
 
}
img{

  background-size: contain
}

.sc__container > img {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.sc__container canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}


.sc__infos {
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  font-weight: bold;
  font-size: 130%;
}
     

</style>