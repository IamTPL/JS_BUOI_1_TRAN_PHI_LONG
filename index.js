function csl(a) {
    console.log(a);
}

// ============================Assignment 1=================================

var pay = 100000;
var days = 30;
var salary = pay * days;

csl(`Bài 1: ${salary} VND`);

// ============================Assignment 2=================================

var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var num3 = Math.floor(Math.random() * 10);
var num4 = Math.floor(Math.random() * 10);
var num5 = Math.floor(Math.random() * 10);

var average = Math.floor((num1 + num2 + num3 + num4 + num5) / 5);

csl(`Bài 2: ${average}`);

// ============================Assignment 3=================================

var usd = 10;
var vnd = usd * 23500;
csl(`Bài 3: 10 USD đổi thành ${vnd} VND`);

// ============================Assignment 4=================================

var length = 20;
var width = 30;
var perimeter = (length + width) * 2;
var area = length * width;

csl(`Bài 4: _Chu vi: ${perimeter}`);
csl(`_Diện tích: ${area}`);

// ============================Assignment 5=================================

var num = 83;

var ones = num % 10;

var tens = Math.floor(num / 10);

csl(`Bài 5: _Số hàng đơn vị của ${num}: ${ones}`);
csl(`_Số hàng chục của ${num}: ${tens}`);
