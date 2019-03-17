function increment() {
    let counter = 0;

    // let counter
    // counter = counter + 1;

    function innerIncrement() {
        return counter = counter + 1;
    }

    return innerIncrement;
}

window.onload = function () {
    let outer = increment();
    let innerResult = 0;

    for (let i = 0; i < 100; i++) {

        //outer = function innerIncrement() {
        //         return counter = counter + 1;
        //     }

        //outer() = 100
        innerResult = outer();
    }

    alert(innerResult);

    // let inner1 = outer(); //outer() -> inner call
    // let inner2 = outer(); //outer() -> inner call
    // let inner3 = outer(); //outer() -> inner call
    // let inner4 = outer(); //outer() -> inner call
    // let inner5 = outer(); //outer() -> inner call

    // let lastResult = incrementFunction();
};

/*
class Outer {

    private Integer counter = 0;

    class Inner {
        Inner() {
            counter = counter += 1;
        }
    }

    public Integer getCounter() {
        return counter;
    }
}


Outer outer = new Outer();
outer.getCounter(); //outer

Inner i1 = outer.new Inner(); //blah-blah-blah
Inner i2 = outer.new Inner(); //blah-blah-blah
Inner i3 = outer.new Inner(); //blah-blah-blah
Inner i4 = outer.new Inner(); //blah-blah-blah

 */


