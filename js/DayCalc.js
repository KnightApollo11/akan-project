function dayCalc() {
    var year = parseFloat(document.getElementById("year").value);
    var month = parseFloat(document.getElementById("month").value);
    var day = parseFloat(document.getElementById("day").value);

    var century = parseFloat(year / 100) + 1;

    var birthday = Math.round(
        (((century / 4) - 2 * century - 1) + (5 * (year / 4)) + (26 * (month + 1) / 10) + day) % 7
    );

    var gender = document.getElementById("gender").value;

    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (year < 0 || year === null || year === undefined) {
        alert("Invalid Year!");
    } else {
        if (birthday === 0 && gender === "male") {
            document.getElementById("display").innerHTML = male[0];
        }
        if (birthday === 1 && gender === "male") {
            document.getElementById("display").innerHTML = male[1];
        }
        if (birthday === 2 && gender === "male") {
            document.getElementById("display").innerHTML = male[2];
        }
        if (birthday === 3 && gender === "male") {
            document.getElementById("display").innerHTML = male[3];
        }
        if (birthday === 4 && gender === "male") {
            document.getElementById("display").innerHTML = male[4];
        }
        if (birthday === 5 && gender === "male") {
            document.getElementById("display").innerHTML = male[5];
        }
        if (birthday === 6 && gender === "male") {
            document.getElementById("display").innerHTML = male[6];
        }
        if (birthday === 0 && gender === "female") {
            document.getElementById("display").innerHTML = female[0];
        }
        if (birthday === 1 && gender === "female") {
            document.getElementById("display").innerHTML = female[1];
        }
        if (birthday === 2 && gender === "female") {
            document.getElementById("display").innerHTML = female[2];
        }
        if (birthday === 3 && gender === "female") {
            document.getElementById("display").innerHTML = female[3];
        }
        if (birthday === 4 && gender === "female") {
            document.getElementById("display").innerHTML = female[4];
        }
        if (birthday === 5 && gender === "female") {
            document.getElementById("display").innerHTML = female[5];
        }
        if (birthday === 6 && gender === "female") {
            document.getElementById("display").innerHTML = female[6];
        }
    }
}
