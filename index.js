function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(work = 'go to the office'){
return `This Monday, I will ${work}.`;
}
mondayWork();

function wrapAdjective(flair = "*"){ 

  const innerFunction  = function (adj = "special"){
     return `You are ${adj}!`;
    };
   return `${flair}${innerFunction("a hard worker")}${flair}`;
   
}

const result = wrapAdjective();
console.log(wrapAdjective("$"));
console.log(result)

// it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective('*')
//     let emphatic = result("a hard worker")
//     expect(emphatic).to.equal("x *a hard worker*!")
//   });

//   it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective("||")
//     let emphatic = result("a dedicated programmer")
//     expect(emphatic).to.equal("You are ||a dedicated programmer||!")
//   });
// })
// })
