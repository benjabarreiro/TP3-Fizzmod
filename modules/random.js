const random = () => {
    const objRandom = {}
    for(let i=1; i<=10000; i++) {
        let random = Math.floor(Math.random() * 20) + 1;
        (objRandom[random] > 0) ? objRandom[random]++ : objRandom[random] = 1;
    }
    return objRandom;
};

export default random;