var number = window.prompt(" enter any number of your choice");

function doubleton(n) {
    s = n + 1;
    while (new Set(String(s)).size !== 2) {
        s++;
        if (s == n) {
            window.alert(n + "is a doubletonn value")
        }
    }
    console.log(s);
    return s;
}

doubleton(number);