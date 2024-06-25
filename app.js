// import './styles'
//
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
//
//
//
// app.get('/',(req, res) => {
//     res.send('Hello World!')
// })
//
// app.listen(PORT, ()=>{
//     console.log(`Server has been working in http://localhost:${PORT}`)
// })

let array = [21,71,94,13,41,54,35,78,55,88,{value:41,}.value]

const selectedSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
};
console.log(array)
selectedSort(array)
console.log(array)
