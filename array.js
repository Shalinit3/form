var fruits = ['Apple', 'Banana'];
var newLength = fruits.push( 'Orange' );

function printFruits() {
    fruits.forEach( function( element ) {
        console.log( element );
        //console.log(this);
    });
}

function upperCase() {
    const fruit = fruits.map(function up(x) {
        return x.toUpperCase();
    });
    console.log( fruit );
}

function deleteFront() {
    fruits.shift();
    printFruits();
}

function deleteEnd() {
    fruits.pop();
    printFruits();
}

function addFront() {
    fruits.unshift( 'strawberry' );
    printFruits();
}

function addEnd() {
    fruits.push( 'mango' );
    printFruits();
}

function formString() {
    var str = fruits.join();
    console.log( str );
} 

function testLet() {
    var num = 10;
    console.log( num );
    {
       // let num = 20;
       // console.log ( num );
        {
            var num = 30;
            console.log( num );
        }
    }
}

function testConst() {
    const num = 10;
    console.log( num );
    num ++;
    console.log( num );
}

function testHoisting() {
    for(var i = 0; i < 2; i++) {
        console.log( i );
    }
    console.log ( i );
}

