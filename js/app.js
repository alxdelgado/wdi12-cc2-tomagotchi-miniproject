console.log('JS is working'); 

//// Global Scope ////







/// CREATE CHARACTER CLASS /// 

class MyCharacter {
  constructor (name, sleepiness, play, hunger, age){
    this.name = name;
    this.sleepiness = sleepiness;
    this.play = play;
    this.hunger = hunger;
    this.age = age;
  }
  
  ageIncrease(){
    // this.setInterval([2000]);
    console.log(this.age); 
    this.age++
    if(this.age === 10){
      console.log('deceased');
      this.updateDisplayAgeVal(); 

    }

  }

  name(){
    // this.setInterval([2000]);
    console.log(this.name); 
  }

  sleepinessDecrease(){
    // this.setInterval([2000]);
    console.log(this.sleepiness);
    // this.sleepiness--
    // if(this.sleepiness === 0){
    //   window.alert('deceased');
    // } 

  }

  playIncrease(){
    // this.setInterval([2000]); 
    console.log(this.play); 
    // this.boredom--
    // if(this.boredom === 0){
    //   window.alert('deceased');
    // }
  }

  hungerIncrease(){
    // this.setInterval([2000]);
    console.log(this.hunger);
    // this.hunger--
    // if (this.hunger === 0){
    //   window.alert('deceased');
    } 

  

};

const maChao = new MyCharacter('maChao', 0, 0, 0, 0);

// console.log(maChao);

/// CREATE CHARACTER CLASS ///


/// CREATE EVENT LISTENERS FOR EACH BUTTON ///  

$('#playButton').on('click', () => {
  
  maChao.playIncrease();

})

$('#sleepButton').on('click', () => {
  
  maChao.sleepinessDecrease(); 

})

$('#foodButton').on('click', () => {

  maChao.hungerIncrease();


})

/// CREATE EVENT LISTENERS FOR EACH BUTTON /// 
























