<template>
  <div>
    

<div v-if="this.startgame==false" @click="start_game" id="start_button">

<p>START</p>

</div>
<div v-if="this.startgame" id="quote_div">
<p >
{{quote.text}}
  </p>
<div v-if="this.startgame" style="margin-top:40%">
  <h1 style="font-family:fantasy">Today's Topic</h1>
  <p id="today_topic" >
  
{{today_topic}}
  </p>
  </div>
</div>


 


  </div>
</template>

<script>

import quotes from '../assets/enterpreneur-quotes.json'



export default {
  name: "my-component",
  data() {
    return {

x:'',
y:'',
z:'',
quote:'',
startgame:false,

today_topic:'',
topic:[

"Is poverty a state of mind?",
"Capitalism is the best economic and political system",
'Real learning starts outside the classroom',
'Why students should find a way to pay for college themselves',
'Tinder is the new form of speed dating',
'Wisdom vs. Intelligence: what’s more important?',
'Mobile phones have reduced human interaction',
'A little bit of sense of humor goes a long way in resolving conflicts',
'Children should be encouraged to take up extra-curricular activities',
'Maintaining work-life balance is important',
'Should offices allow smoke breaks?',
'To be a good leader, you must think like a good leader',
'Review the last book you read',
'Children grow up to become their parents',
'Everybody should get a taste of the country life',
'Why parents should limit screen time as much as possible',
'Students should be encouraged to volunteer',
'Exercising is important for staying healthy',
'Should smoking be allowed in public',
'Uniforms restrict creativity',
'Companies should look for ways to conserve the environment',
'Soft skills that will give you an edge in the recruitment process',
'Public speaking is a skill that can be honed',
'My personal mission statement is…',
'Teenagers should be discouraged from smoking since the very beginning',
'Does technology live up to its promise?',
'Something I wish I knew when I was younger',
'Parents should allot curfews for their kids',
'Branding is a key marketing tool',
'Positive branding is key to an organization’s success',
'Advertising is a form of art',
'What moral issue best defines you?',
'What is the most significant effect of the internet?',
'Describe your worst experience.',
'Discuss the most memorable event in your life.',
'Is capitalism the best political and economic system? Defend your choice.',
'Is knowledge more important than wisdom?',
'Is a glass half full or half empty? Explain your choice.',
'Why are humans so fascinated with understanding the universe?',
'Does technology live up to its promise?',
'Ghosts Id like to meet.',
'Bottles versus cans?',
'Real or fake Christmas trees?',
'peer to peer technology',
'Motorcycle helmets',
'The assassination of a dictator can / cannot be justified',
'Curfews',
'Alien abductions',
'The worst/best book you ever read',
'All-time favorite movie',
'Your first memory',
'The best things in life are free',
'Clothes make the man/woman',
'Happy drugs (Prozac, Zoloft, etc.)',
'Good versus evil',
'Your favorite sound',
'Your least favorite sound',
'Exams are/are not proper forms of assessment',
'Why its important to meditate',
'What earns your gratefulness?',
'Speed dating',
'Your favorite relative',
'Your favorite holiday',
'Internet affairs',
'The greatest gift we can give others is?',
'If I were invisible for a day…',
'What I would do if I knew I could not fail',
'The most successful person I know',
'Good grades matter',
'Everyone should be a volunteer',
'Hybrid animals',
'What is my biggest concern for the future',
'Should real wealth be measured in money',
'Is conservation the key to survival',
'Does real love differs from romantic movies',
'Do plants have feelings',
'Why junk food is so popular',
'Is it okay to forgive everyone',
'Is the world too small these days',
'How did our communication change over the decade',
'What do I want to do when I grow up',
'Are goals good for you',
'How to achieve your goals',
'What was the most important lesson of my life so far',
'Why intelligence is not enough',
'What would I do if I ruled the world',
'How color affects our feelings',
'Why team sports are good',
'Why its so good to laugh',
'Only fools part with money easily',
'Is discipline a dirty world',
'Is poverty a state of mind',
'what makes an ideal hero',
'Do children learn what they live with',
'Who can be called an average person',
'Is being young really that great',
'Could lying be a good idea in some situations',
'What human qualities do we need more',
'Whos the person that influenced your life the most',
'What is more important - how do we look or who we are on the inside',
'Fashion victims Im familiar with',
'Are pets a good option for people who dont have children',
'Which season is the best for me',
'How do media affect our thinking',
'Is advertising that targets children immoral',
'Real learning happens outside the classroom',
'Do we buy too many things',
'Does true wisdom always come from experience',
'Why is a sense of humor important',
'Do uniforms stifle individuality',
'How does society affect our lives',
'Why being polite is good for you',
'Should children watch television',
'How art changes our lives',
'Is it possible for all nations to live in peace',
'Simple ways to take care of the environment',
'Are ads and marketing bad for us',
'Why people expect high school graduates to go college immediately',
'When is the best time to travel',
'Why budgeting is so important',
'Should we study pop-culture in schools'

]

    };
  },
  mounted() {

//console.log(db)
//generate random math number

var random= Math.floor(Math.random() * Math.floor(324));
this.quote=quotes[random];


var random_topic=Math.floor(Math.random()*Math.floor(this.topic.length))

this.today_topic=this.topic[random_topic];




  },

  methods: {
    
    start_game: function(){

      
var tempthis=this


setTimeout(function(){



  
 test()
},200)

function test()
{

  tempthis.startgame=true
}


 
//startanimation()
function startanimation()
{


 

anime({
  targets: '#today_topic',
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




}
    }



    
  },
}
</script>

<style >

#today_topic{


 margin-top: 10%;
  font-size: 150%;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
 
  background: -webkit-linear-gradient(rgb(46, 45, 45), rgb(200, 106, 51));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}



#quote_div{


  	
	margin: auto;
    text-align: center;
    font-family: monospace;
    margin-top: 40%;
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