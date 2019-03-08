const fs = require('fs');
const colors = require('colors');

let createFile = ( base, limit ) => {

    return new Promise( ( resolve, reject ) => {
        let data = '';
        for(let i = 1 ; i <= limit; i++){
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`./multiplication-table/table-from-${ base }-to-${ limit }.txt`, data, ( err ) => {
            if( err ) reject( err );
            else resolve(`table-from-${ base }-to-${ limit }.txt`);
        });
    });

}

let showTable = ( base, limit ) => {
    console.log(colors.yellow(`================= TABLE ${base} ================= `));
    for(let i = 1; i <= limit; i++){
        console.log( colors.green(`\t\t${ base } * ${ i } = ${ base * i }`) );
    }
}


module.exports = {
    createFile,
    showTable
}