const fs = require('fs');
fs.readFileSync('./index.txt','utf-8', (err, data) => {
    if (err) {
        document.querySelector('#kq').innerHTML = "Error!";
    } else {
        document.querySelector('#kq').innerHTML = data;
    }
});
