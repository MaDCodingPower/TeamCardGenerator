const Engineer = require('../lib/engineer');

describe('engineer', () => {
    const engineer = new Engineer('Jesse', '69', 'jesseiscool@gmail.com', "jessesdevaney");
    const engineertwo = new Engineer('jaja', 4, '5')
    it('should return Jesse as engineer name', () => {
        expect(engineer.getName).toBe("Jesse");
    });
    it('should return 69 as id number', () => {
        expect(engineer.getId).toBe('69');
        expect(engineertwo.getId).toBe(4);

    });
    it('should return jesseiscool@gmail.com as engineer email', () => {
        expect(engineer.getEmail).toBe('jesseiscool@gmail.com')
    })
    it('should return github as jessesdevaney', () => {
        expect(engineer.getGithub).toBe('jessesdevaney')
    })
    it("should return role as engineer", () => {
        expect(engineer.getRole).toBe('Engineer')
    })


})