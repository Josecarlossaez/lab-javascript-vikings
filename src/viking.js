// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health
        this.strength = strength

    }
    attack = ()=>{
return this.strength
    }
    receiveDamage = (thedamage)=> {
   this.health = this.health - thedamage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health, strength) {
        super(health,strength) 
        this.name = name
        this.health = health
        this.strength = strength
        
}
attack = ()=>{
    return this.strength
}
receiveDamage = (thedamage)=> {
   this.health = this.health - thedamage
   if(this.health > 0){
    return `${this.name} has received ${thedamage} points of damage`
  }
  else  {
    return `${this.name} has died in act of combat`
  }
   
     }
     battleCry = () => {
   return "Odin Owns You All!"
     }
}
// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
 super(health, strength)
 
}
receiveDamage = (thedamage) => { 
this.health = this.health - thedamage
 if (this.health > 0 ){
    return `A Saxon has received ${thedamage} points of damage`
 }
  else {
    return "A Saxon has died in combat"
  }
}
}
// War
class War {
    constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
    }
    addViking = (Viking) =>{
  this.vikingArmy.push(Viking)
    }
    addSaxon = (Saxon) =>{
this.saxonArmy.push(Saxon)
    }
    vikingAttack = () =>{
        let vikingQty = Viking.length;
        let randomVik= Math.random( ) * vikingQty
        let vikingInt = Math.floor (randomVik);

        let saxonQty = Saxon.length
        let randomSax= Math.random() * saxonQty
        let saxonInt = Math.floor(randomSax)


        Saxon[saxonInt].receiveDamage(Viking[vikingInt].attack())
         
      }
    
    saxontAttack = () =>{

    }
    showStatus = () =>{
      if (Saxon === 0){
        return "Vikings have won the war of the century!"   
      } 
      else if(Viking === 0){
        return "Saxons have fought for their lives and survived another day..."
    
      }else return "Vikings and Saxons are still in the thick of battle."
    }
}

