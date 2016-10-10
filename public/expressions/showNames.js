var fs = require("fs")

fs.readdir(__dirname, function (err, files) {
    if(err) {
        console.log(err);
    } else {
        var result = [],
            reg    = /^(\d+)_(.+)\.gif$/;
        
        files.pop();        
        
        result = files.sort(function (obj1,obj2) {
            var order1 = parseInt(obj1.match(reg)[1]),
                order2 = parseInt(obj2.match(reg)[1])

            return order1 - order2;
        })


        var newArr = [];
        result.forEach((value, idx) => {
            newArr.push({
                faceName: value.match(reg)[2],
                faceUrl: `\/${value}`
            })
        })

        console.log(newArr);
    }
})