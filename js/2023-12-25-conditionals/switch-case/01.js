let day = 3;

switch (day) {
  case 0: {
    console.log("happy");
    let a = 1; //block scope
    break;
  }
  case 1: {
    console.log("sad");
    break;
  }
  case 2: {
    console.log("angry");
    break;
  }
  case 3: {
    console.log("anxious");
    break;
  }
  case 4: {
    console.log("septical");
    break;
  }
  default:
    throw new Error("Case not found");
}
