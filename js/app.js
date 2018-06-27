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


  goToSleep(){
    // this.setInterval([2000]);
    this.sleep++
    $('.sleepBtn').text('Sleep:' + this.sleep); 
    

  }

  playTime(){
    // this.setInterval([2000]);  
    this.boredom++
    $('.playBtn').text('Exercise:' + this.boredom);
  }

  hungerIncrease(){
    // if(time % 5 === 0){
      this.hunger++
      $('.foodBtn').text('Hunger:' + this.hunger)

    // } 
  }
  hungerDecrease() {
    this.hunger--

  }

};

const maChao = new MyCharacter('maChao', 0, 0, 0, 0);

// console.log(maChao);

/// CREATE CHARACTER CLASS ///


/// CREATE EVENT LISTENERS FOR EACH BUTTON ///  


$('#playButton').on('click', (e) => {
  
  maChao.playTime();

})

$('#sleepButton').on('click', (e) => {
  
  maChao.goToSleep(); 

})

$('#foodButton').on('click', (e) => {

  maChao.hungerDecrease(); 

})

/// CREATE EVENT LISTENERS FOR EACH BUTTON /// 



const timer = setInterval(() => {
  time++ 
  console.log(time); 
  maChao.hungerIncrease()
  if(time === 10) {
    clearInterval(timer);
  }

  maChao.playTime()
  if(time === 10){
    clearInterval(timer);
  }

  maChao.goToSleep()
  if(time === 10){
    clearInterval(timer);
  }
 
}, 1000); 




















