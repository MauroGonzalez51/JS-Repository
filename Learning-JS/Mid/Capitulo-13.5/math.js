const secretNumber = 30;

const add = (...args) => {
    return args.reduce((acc, val) => {
        return acc + val;
    }, 0);
};

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const divide = (a, b) => a / b;

class Math {
    static double(x) {
        return x * x
    }
}

export { add, sub, mul, divide, Math };

export default add;