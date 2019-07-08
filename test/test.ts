import leapYear from '../leapyear'

describe('Leap Year',() =>{
    it('says leap year', () =>{
        expect(leapYear(2016)).toEqual('Leap year!');

    })
})