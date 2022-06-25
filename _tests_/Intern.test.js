const Intern = require('../lib/intern');

describe('intern', () => {
    const intern = new Intern('Jesse', '69', 'jesseiscool@gmail.com', "purdue");
    const interntwo = new Intern('jaja', 4, 'westfield')
    it('should return Jesse as Intern name', () => {
        expect(intern.getName).toBe("Jesse");
    });
    it('should return 69 as id number', () => {
        expect(intern.getId).toBe('69');
        expect(interntwo.getId).toBe(4);

    });
    it('should return jesseiscool@gmail.com as intern email', () => {
        expect(intern.getEmail).toBe('jesseiscool@gmail.com')
    })
    it('should return github as jessesdevaney', () => {
        expect(intern.getSchool).toBe('jessesdevaney')
    })
    it('should return role as intern', () => {
        expect(intern.getRole).toBe('Intern')
    })


})