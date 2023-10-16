import { getCurrencies } from "./getCurrencies"


describe('get Currency', () => {
    it('should return the supproted currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');

    })
})