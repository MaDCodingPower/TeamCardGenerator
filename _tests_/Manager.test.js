const Manager = require('../lib/manager');

describe('manager', () => {
    const manager = new Manager('Jesse', '69', 'jesseiscool@gmail.com', 5);
    const managertwo = new Manager('jaja', 4, '5')
    it('should return Jesse as manager name', () => {
        expect(manager.getName).toBe("Jesse");
    });
    it('should return 69 as id number', () => {
        expect(manager.getId).toBe('69');
        expect(managertwo.getId).toBe(4);

    });
    it('should return jesseiscool@gmail.com as manager email', () => {
        expect(manager.getEmail).toBe('jesseiscool@gmail.com')
    })
    it('should return office number as 5', () => {
        expect(manager.getOfficeNumber).toBe('5')
    })
    it('should return new job title updated as manager', () => {
        expect(manager.getRole).toBe('manager');
    })

})