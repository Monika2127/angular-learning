import { greet } from "./greet";


describe('greeting', () => {
    it('should contain the name', () => {
        // this is more generic to that string only, say after we want to add ! or ? or anything, then this code will break
        // expect(greet('mona')).toBe('Welcome Mona');

        // to tackle above problem, use toContain
        expect(greet('mona')).toContain('mona');
    })
})