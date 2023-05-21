function show(obj) {
    if (Array.isArray(obj)) {
        var html = '';
        html = html + '<table border="1">';
        html = html + '<tr>';
        for (var i = 0; i < obj.length; i++) {
            html = html + '<td>' + obj[i] + '</td>';
        }
        html = html + '</tr>';
        html = html + '</table>';
        //html = html + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', html);
    } else {
        var string = JSON.stringify(obj);
        string = string + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', string);
    }
}

function createSequentialNumbers(array, n) {
    for (var i = 0; i < n; i++) {
        array.push(i + 1);
    }
}

function createRandomNumbers(array, n) {
    for (var i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * n));
    }
}

function createOrderedRandomNumbers(numbers, n) {
    var count = 0;
    for (var i = 1; ; i++) {
        if (Math.floor(Math.random() * 3) == 0) {
            numbers.push(i);
            count++;
            if (count >= n) {
                break;
            }
        }
    }
}

function mistakebinarysearch(array, target) {
    var nowarray = array
    var x = 1
    var newarray = []
    var answer = -1
    while (nowarray.length != 1) {
        var mid = Math.round(nowarray.length / 2)
        var newlen = nowarray.length - mid
        console.log(nowarray)
        if (target > nowarray[mid]) {
            for (var i = 0; i < nowarray.length - mid; i++) {
                newarray.push(nowarray[i + mid])
            }
        } else if (target < nowarray[mid]) {
            for (var i = 0; i < mid; i++) {
                newarray.push(nowarray[i])
            }
        } else {
            answer = mid;
            break
        }
        nowarray = newarray
        newarray = []
        x = x + 1
    }
    var html = ''
    if (answer == - 1) {
        html = html + '<table border="1"><tr>'
        html = html + '<td>表の中にありません</td>'
        html = html + '</tr></table>'
    } else {
        html = html + '<table border="1"><tr>'
        html = html + '<td>' + answer + '</td>'
        html = html + '</tr></table>'
    }
    document.getElementById('ans').innerHTML = html
}

function binarysearch(array, target) {
    var mid = Math.round(array.length / 2)
    var max = array.length
    var min = 0
    var n = 2
    var answer = -1
    if (array[min] == target) {
        answer = min
    } else {
        while (max - min > 1) {
            if (target > array[mid]) {
                min = mid
                mid = Math.round(mid + (array.length / 2 ** n))
                n = n + 1
            } else if (target < array[mid]) {
                max = mid
                mid = Math.round(mid - (array.length / 2 ** n))
                n = n + 1
            } else {
                answer = mid
                break
            }
        }
    }
    var html = ''
    if (answer == - 1) {
        html = html + '<table border="1"><tr>'
        html = html + '<td>表の中にありません</td>'
        html = html + '</tr></table>'
    } else {
        html = html + '<table border="1"><tr>'
        html = html + '<td>' + answer + '</td>'
        html = html + '</tr></table>'
    }
    document.getElementById('ans').innerHTML = html
}