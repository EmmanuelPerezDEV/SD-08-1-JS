export class Player {
        constructor(name, level) {
      this.name = name;
      this.level = level; 
    }
     levelUp() {
      this.level += 1;
    }
    info() {
      return `${this.name} has reached Level ${this.level}`;
    }
   
  
    
    
  }