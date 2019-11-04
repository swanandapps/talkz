<template>
  <div>
    

<div @click="start_game" id="start_button">

<p>START</p>

<div>
<h1>
{{text}}
  </h1>
</div>


<div class="sc__wrapper">
  <!-- scratchcard -->
  <div id="js--sc--container" class="sc__container">
    <!-- background image insert here by scratchcard-js -->
    <!-- canvas generate here -->
  </div>
  <!-- infos -->
  
</div>

</div>
 


  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import Shake from 'shake.js'
import db from '../components/firebaseinit'
import {ScratchCard, SCRATCH_TYPE} from 'scratchcard-js'
import img1 from '../assets/PACT.jpeg'
import img2 from '../assets/1.png'
export default {
  name: "my-component",
  data() {
    return {

x:'',
y:'',
z:'',
text:''

    };
  },
  mounted() {

//console.log(db)

this.text=window.ondevicemotion


const scContainer = document.getElementById('js--sc--container')
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: img1,
  
  htmlBackground: '<p class="test"><strong>Hello i am HTML content !</strong></p>',
  clearZoneRadius: 35,
  nPoints: 3,
  pointSize: 1,
  callback: function () {
   


  }
})
 
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


  },

  methods: {
    
    start_game: function(){


 var shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();
    window.addEventListener('shake', function(){
        alert("Shaked");
    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }

    //check if shake is supported or not.
    if(!("ondevicemotion" in window)){alert("Not Supported");}


    }
  },
}
</script>

<style >

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


border-radius: 50%


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
  
}


.sc__container {
  position: relative;
  overflow: hidden;
  max-height: 300px;
  max-width: 300px;
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