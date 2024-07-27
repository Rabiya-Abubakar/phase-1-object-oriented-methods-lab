function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  BoardMember.prototype.veto = function() {
    return "No, I must disagree";
  };
  
  BoardMember.prototype.approve = function() {
    return "You can do that!";
  };
  
  BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
  };
  
  BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
  };
  
  BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
  
  // Example usage:
  const boardMember1 = new BoardMember("Alice", "California", "Law");
  console.log(boardMember1.sayHi()); // Hi, my name is Alice. I am from California, and I was trained in Law.
  console.log(boardMember1.veto()); // No, I must disagree
  console.log(boardMember1.approve()); // You can do that!
  console.log(boardMember1.doCharity()); // I like to help people.
  console.log(boardMember1.releasePressStatement()); // You will see great things from Scuber.
  

