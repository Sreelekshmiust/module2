describe('first test',()=>{
    let data :any;
    let a: number;
    let b: number;
    let str: string;

    beforeEach(()=>{
        console.log('from before');
        data={};
    });
    xit('x test',()=>{});
    it('fail test',()=>{
        fail();
    });
    it('dummy test',()=>{
        pending();
    });
    it('it should return true if flag is true',()=>{
        data.flag = false;
        data.flag = true;
        expect(data.flag).toBe(true);

    });
    it('it should add(10,10) and gives 20',()=>{
        a=10;
        b=10;
        expect(a+b).toBe(20);
    });
});