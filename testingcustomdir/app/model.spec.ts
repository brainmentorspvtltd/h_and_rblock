import { Emp } from "./model";


describe('Model Suite', ()=>{
let emp;
  beforeEach(()=>{
   emp = new Emp(1001,"ram",10000);
  console.log("I Will Call Before It");
})
it('check enter salary must be greater than 9000',()=>{
  //const emp = new Emp(1001,"ram",18888);
  expect(emp.salary).toBeGreaterThan(9000);

});
it('check Salary is Incremented or Not',()=>{
  const updatedSalary = emp.increaseSalary();
  //const emp = new Emp(1001,"ram",18888);

  expect(updatedSalary).toBeGreaterThan(emp.salary);

});

afterEach(()=>{
  console.log("I will call After It");
})
});
