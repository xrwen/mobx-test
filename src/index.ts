import { observable, computed } from "mobx"

class Test {
    @observable A = 0;

    @computed get B() {
        return this.A + 10;
    }

    @computed get C() {
        return this.B + 20;
    }
}

var test = new Test();

console.log("C = " + test.C);
console.log("Set A = 100");
test.A = 100;
console.log("C = " + test.C);
