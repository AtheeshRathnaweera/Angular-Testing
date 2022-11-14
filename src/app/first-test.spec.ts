// creating a new test suit
describe('First Test',()=>{
  let testVariable:any;

  // life cycle method
  // every time a test case runs this method will be executed
  beforeEach(()=>{
    testVariable = {}
  });

  it('should return true if a is true',()=>{
    // arrange
    testVariable.a = false;

    // act
    testVariable.a = true;

    // assert
    expect(testVariable.a).toBe(true);
  })
})

// create another test suit
// describe('User Service',()=>{
//   describe('getUser() method',()=>{
//     it('should return the correct given user',()=>{

//     })
//   })
// })
