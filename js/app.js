console.log('JS is working'); 

//// Global Scope ////


let time = 0;




/// CREATE CHARACTER CLASS /// 

class MyCharacter {
  constructor (name, sleep, boredom, hunger, age){
    this.name = name;
    this.sleep = sleep;
    this.boredom = boredom;
    this.hunger = hunger;
    this.age = age;
  }
  
  ageIncrease(){
    // this.setInterval([2000]);
    console.log(this.age); 
    if(time % 5 === 0){
      this.age++
    
    }

  }


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

const boJack = new MyCharacter('Bojack', 0, 0, 0, 0);

// console.log(maChao);

/// CREATE CHARACTER CLASS ///

/// CREATE FORM/INPUT BOX /// 

$('form').on('submit', (e) => {

  e.preventDefault(); 
  const newCharacter = $('#changename-input').val(); 
  boJack.renderCharacter(); 


})


/// CREATE FORM/INPUT BOX ///




/// CREATE EVENT LISTENERS FOR EACH BUTTON ///  

// this is the event listener for the play button. //
$('#playButton').on('click', (e) => {

  // display picture of bojack running // 
  
  

  // calling playTime increase the amount of 'Exercise' // 
  boJack.getMoreBoredDecrease();

})

// this is the event listener for the sleep button. //
$('#sleepButton').on('click', (e) => {

  // display picture of bojack sleeping // 
  
  // calling 'goToSleep' increases the amount of sleep time. // 
  boJack.getSleepierDecrease(); 

})

// this is the event listener for the food button. //
$('#foodButton').on('click', (e) => {

  // display picture of bojack hungry // 

  boJack.hungerDecrease(); 

})

/// CREATE EVENT LISTENERS FOR EACH BUTTON /// 



/// SET INTERVAL TIMER ///  

const timer = setInterval(() => {
  time++;
  console.log(time); 
  
  boJack.hungerIncrease();
  boJack.getMoreBored();
  boJack.getSleepier();

  if (boJack.hunger >= 10 || boJack.sleep >= 10 || boJack.boredom >= 10){


    clearInterval(timer);

    window.alert('Bojack has died!') 

    

  }




  // instead of time, check for hunger >=10, then he's dead (which means tell user and stop timer)
  // if(time === 10) { 
  //   clearInterval(timer);
        // tell user he's dead
  // }

  // 
  // if(time === 10){
  //   clearInterval(timer);
  // }

  // if(time === 10){
  //   clearInterval(timer);
  // }


 
}, 2000); 

/// SET INTERVAL TIMER /// 


















