class Student {
    constructor(private name: string, private age: number, private regNo: string) { }

    details(): string {
        return "name:" + this.name + ",age:" + this.age + ",register number:" + this.regNo;
    }

    regNumber(regNo: string) {
        this.regNo = regNo;
    }
}

let secondFunc = () => {
    console.log("Executed from the second function");
    const student = new Student('raj', 21, '1VK12IS019');
    console.log(student.details());
    student.regNumber('1VK12IS020');
    console.log(student.details());
}

export { secondFunc };


