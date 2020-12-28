const assert = require('assert');
require('./app')
// console.log(assert)
let departmentSchema = require('./modals/DepartmentModal')
let employeeSchema = require('./modals/EmployeeModal')
let test =0;
test +=1
// describe('Employees', function() {
//     describe('#save()', function() {
     
//       it('should save without error', function(done) {
         
         
//    let saveEmployee={
//     employeeName:`${test}`,
//     employeeCode:test,
//     employeeDepartment:`${test} ${test}`,

//    }
//         var employee = new employeeSchema(saveEmployee);
//         employee.save(function(err) {
//           if (err) done(err);
//           else done();
//         });
//       });
//     });
//   });

//   describe('Department', function() {
//     describe('#save()', function() {
//         let test =0;
//       it('should save without error', function(done) {
         
//           test +=1
//    let savedepartment={
//     departmentName:`${test}`,
//     departmentCode:test,
//     departmentDetails:`${test} ${test}`,

//    }
//         var department = new departmentSchema(savedepartment);
//         department.save(function(err) {
//           if (err) done(err);
//           else done();
//         });
//       });
//     });
//   });
describe('#find()', function() {
    it('responds with matching records', async function() {
      const employees = await employeeSchema.find();

      const employeeCount = await employeeSchema.countDocuments()
      assert.equal(employees.length,employeeCount)
    });
  });

