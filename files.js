const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString())
// })

// console.log('last line');

// writing file
// fs.writeFile('./docs/blog2.txt', 'hello world to blog2', (()=>{
//     console.log('file was written');
// }))

//rename or move file
// const oldPath = './docs/blog1.txt';
// const newPath = './docs2/moved_blog1.txt';
// fs.rename(oldPath,newPath,((err)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log('file is moved');
// }))

// file Statistics

// const oldPath = './docs/blog2.txt';
// const newPath = './docs2/moved_blog1.txt';

// fs.stat(oldPath,(err,stats) =>{
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File Information:');
//         console.log('File Size (in bytes):', stats.size);
//         console.log('Is Directory:', stats.isDirectory());
//         console.log('Is File:', stats.isFile());
//         console.log('File Permissions (Octal):', stats.mode);
//         console.log('Last Access Time:', stats.atime);
//         console.log('Last Modified Time:', stats.mtime);
//         console.log('Created Time:', stats.ctime);
//     }
// });

// directories
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) =>{
//         if (err){
//             console.log(err);
//         }
//         console.log('folder created')
//     })
// } else {
//     console.log('folder already exists')
// };

// delete files

if (fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt', (err)=>{
        if (err){
            console.log(err);
        } else {
            console.log('file deleted');
        }
    });
} else {
    console.log('file does not exist')
};