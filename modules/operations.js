const operations = ({num1, num2, operacion}) => {
    const error = {
        error: {
            num1: {
                valor: num1,
                tipo: typeof num1
            },
            num2: {
                valor: num2,
                tipo: typeof num2
            },
            operacion: {
                valor: operacion,
                tipo: typeof operacion
            }
        }
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if(isNaN(a) || isNaN(b)) return error;

    let result = 0;
    switch(operacion) {
        case 'suma': result = a + b;
        break;
        case 'resta': result = a - b;
        break;
        case 'multiplicacion': result = a * b;
        break;
        case 'division': result = a / b;
        break;
    }

    return {num1, num2, operacion, result}
}

export default operations;