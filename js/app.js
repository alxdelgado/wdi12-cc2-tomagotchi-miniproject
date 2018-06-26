console.log('JS is working'); 

//// Global Scope ////







/// Create pet class /// 

class MyPet {
  constructor (name, sleepiness, boredom, hunger, age){
    this.name = name;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
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

  boredomDecrease(){
    // this.setInterval([2000]); 
    console.log(this.boredom); 
    // this.boredom--
    // if(this.boredom === 0){
    //   window.alert('deceased');
    // }
  }

  hungerDecrease(){
    // this.setInterval([2000]);
    console.log(this.hunger);
    // this.hunger--
    // if (this.hunger === 0){
    //   window.alert('deceased');
    } 

  

};

const blueGlaucus = new MyPet('blueGlaucus', 10, 10, 10, 0);

console.log(blueGlaucus);

/// Create pet class ///


/// Create event listeners for buttons /// 

$('.playButton').on('click', () => {
  if ('clicked', )

})






























