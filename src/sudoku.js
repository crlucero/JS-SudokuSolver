

export function validate(arr) {

    var filteredArray = arr.filter(function (item, pos) {
        return arr.indexOf(item) == pos;
    });
    return (arr.length == filteredArray.length);
}

export function validateGame(arr) {
    let isSoduku = true;

    for (let y = 0; y < 81; y = y + 9) {
        if (!validate(arr.slice(y, y + 9))) {
            isSoduku = false;
        }

    }

    let colArr = [];
    for (let e = 0; e < 9; e++) {
        for (let y = e; y < 81; y = y + 9) {
            colArr.push(arr[y]);
        }
        if (!colArr) {
            isSoduku = false;
        }
        colArr = [];
    }
    return isSoduku;
}


