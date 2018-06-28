console.log('JS is working'); 

//// GLOBAL SCOPE ////


let time = 0;
window.alert('Enter Name');



//// GLOBAL SCOPE ////

/// CREATE CHARACTER CLASS /// 

class MyCharacter {
  constructor (name, sleep, boredom, hunger, age){
    this.name = name;
    this.sleep = sleep;
    this.boredom = boredom;
    this.hunger = hunger;
    this.age = age;
    this.morphed = false;


  }
  
  // ageIncrease(){
  //   // this.setInterval([2000]);
  //   console.log(this.age); 
  //   if(time % 5 === 0){
  //     this.age++
    
  //   }

  // }


  getSleepier(){
    // this.setInterval([2000]);
    this.sleep++
    $('.sleepBtn').text(' Sleep: ' + this.sleep); 
    
  }

  getSleepierDecrease(){
    this.sleep--
    $('.sleepBtn').text(' Sleep: ' + this.sleep);
  }

  getMoreBored(){
    // this.setInterval([2000]);  
    this.boredom++
    $('.playBtn').text(' Bored: ' + this.boredom);
  }

  getMoreBoredDecrease (){
    this.boredom--
    $('.playBtn').text(' Bored: ' + this.boredom);
  }

  hungerIncrease(){
    // if(time % 5 === 0){
      this.hunger++
      $('.foodBtn').text(' Hunger: ' + this.hunger);

    // } 
  }
  hungerDecrease() {
    this.hunger--
    $('.foodBtn').text(' Hunger: ' + this.hunger);

  }

  renderCharacter(){
    $('ul').append('<li> ' + this.name + '</li>'); 
  }

};


/// CREATE CHARACTER CLASS ///

/// CREATE FORM/INPUT BOX /// 

const newCharacter = new MyCharacter('name', 0, 0, 0, 0); 

$('#bojackHorseman').on('submit', (e) => {
  e.preventDefault(); 

  const characterName = $('#changename-input').val();
  
  newCharacter.name = characterName; 
  
  
  console.log(MyCharacter);  
  newCharacter.renderCharacter(); 
  startGame();


})


/// CREATE FORM/INPUT BOX ///




/// CREATE EVENT LISTENERS FOR EACH BUTTON ///  

// this is the event listener for the play button. //
$('#playButton').on('click', (e) => {



  // calling playTime increase the amount of 'Exercise' // 
  newCharacter.getMoreBoredDecrease();

})

// this is the event listener for the sleep button. //
$('#sleepButton').on('click', (e) => {

  
  // calling 'goToSleep' increases the amount of sleep time. // 
  newCharacter.getSleepierDecrease(); 

})

// this is the event listener for the food button. //
$('#foodButton').on('click', (e) => {

   

  newCharacter.hungerDecrease(); 

})

/// CREATE EVENT LISTENERS FOR EACH BUTTON /// 

let morphed = false;

/// SET INTERVAL TIMER ///  
const startGame = () => {
  const timer = setInterval(() => {
  time++;
    console.log(time); 
    
    newCharacter.hungerIncrease();
    newCharacter.getMoreBored();
    newCharacter.getSleepier();

    // test for death
    if (newCharacter.hunger >= 10 || newCharacter.sleep >= 10 || newCharacter.boredom >= 10) {
      clearInterval(timer);
      $('img').attr('src', 'https://media.giphy.com/media/Fpd4KfGP8VOAE/giphy.gif');
      window.alert(newCharacter.name + ' is dead! ');
    } 

    // aging check
    if (time >= 5 && !newCharacter.morphed) { 
      // console.log("hey")
      // creating text on the page that he has turned 5 years old //
      const $h2 = $('<h2/>');
      $h2.text(newCharacter.name + ' has turned 5 years old! '); 
      $('#message').append($h2)
      newCharacter.morphed = true; 
      
      console.log(newCharacter.name + ' has turned 5 years old! ');
    }
   
  }, 200); 

} // startGame()














