export class Player {
        constructor(name, level, exp) {
      this.name = name;
      this.level = level; 
      this.exp = exp;
    }
     levelUp() {
      this.exp = 0;
    if (this.exp >4) {this.level += 1;
      
    }
     
    }
    info() {
      return `${this.name} has reached Level ${this.level} and has ${this.exp -4} EXP`;
    }
   
  
    
    
  }
  