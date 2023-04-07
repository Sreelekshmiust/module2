class Employee1{
    private fname: string;
    private mname!: string;
    private lname: string;

    constructor(fname: string,mname: string,lname: string){
        this.fname=fname;
        this.mname=mname;
        this.lname=lname;
    }
    getMname():string{
        return this.mname;
    }
}
let e1 = new Employee1('a','b','c');
console.log(e1.getMname());