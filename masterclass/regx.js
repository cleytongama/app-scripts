//  let regx = /^cleyton/  /
//  let regx = /^\d{8}\.\d{8}\.\d{8}\.\d{8}$/  
//  let regx = /^(\d{9}\s){3}(\d{8})$/  
//  let result = regx.test("123456789 123456789 123456789 12345678" );
//  console.log(result)
 let regx = /^([\w.(-_)]+)@(\w+)(\.\w{2,3})+$/  
 let result = regx.test("cl.e-y_t on.gama@gmail.com" );
 console.log(result)
