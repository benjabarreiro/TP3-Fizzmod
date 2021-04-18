import fs from 'fs';

const info = async () => {
    let infoObj = {
        contenidoStr: '',
        contenidoObj: {},
        size: 0
    };
    try{
        infoObj.contenidoStr = await fs.promises.readFile('package.json', 'utf-8');
        infoObj.contenidoObj = JSON.parse(infoObj.contenidoStr);
        infoObj.size = infoObj.contenidoStr.length;
        console.log('\n------------------------------------\n');
        console.log('Info: ', infoObj);
        console.log('\n------------------------------------\n');
        await fs.promises.writeFile('info.txt', JSON.stringify(infoObj, null, 2));
    }
    catch(error){
        console.log('\n------------------------------------\n');
        console.log(`ERROR => ${error}`);
        console.log('\n------------------------------------\n');
    };
    return infoObj;
};

export default info;