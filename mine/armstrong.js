function isArmstrongNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        return false;
    }

    const digits = String(number).length;
    let remaining = number;
    let sum = 0;

    while (remaining > 0) {
        const digit = remaining % 10;
        sum += digit ** digits;
        remaining = Math.floor(remaining / 10);
    }

    return sum === number;
}

const number = 153;
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}