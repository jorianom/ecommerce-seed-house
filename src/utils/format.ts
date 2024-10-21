
export const formattedNumber = (number: number, digits: number = 0) => {
    return new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: digits,
        maximumFractionDigits: 2,
    }).format(number);
}