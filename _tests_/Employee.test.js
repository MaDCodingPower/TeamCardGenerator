const Employee = require('../lib/employee');

describe('employee', () => {
    const employeeTest = new Employee('Jesse', '69', 'jesseiscool@gmail.com');
    const employeeTestTwo = new Employee('jaja', 4, 'lkjasdflkjasdflkasjdflkjasdf')
    it('should return Jesse as employee name', () => {
        expect(employeeTest.getName).toBe("Jesse");
    });
    it('should return 69 as id number', () => {
        
        expect(employeeTest.getId).toBe('69');
        expect(employeeTestTwo.getId).toBe(4);

    });
    it('should return jesseiscool@gmail.com as employee email', () => {
        expect(employeeTest.getEmail).toBe('jesseiscool@gmail.com')
    })


})