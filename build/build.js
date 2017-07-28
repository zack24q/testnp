var fs = require('fs');
fs.open("test.txt", "w", 0644, function (e, fd) {
    if (e) throw e;
    fs.write(fd, "first fs!", 0, 'utf8', function (e) {
        if (e) throw e;
        fs.closeSync(fd);
    })
});