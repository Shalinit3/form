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

function testArrow() {
    var sum = (x , y)=> {
       return (x + y);
    } 
    console.log( sum(20 ,30) );
}

function testCallBack() {
    var studentRecord = { name: 'Shalini' , age: '66' , city: 'Ghaziabad' , state: 'UP' , phone: '9716532042' }

    function showStudentDetails( student ) {
        console.log("Name : " + student.name + "\tAge : " + student.age + "\tCity : " + student.city + "\tState: "
         + student.state + "\tPhone : " + student.phone);
    }

    function callback() {
        console.log ( '5 times printing done.' );
    }

    function changeAge() {
        studentRecord.age = '21';
        console.log("Age Changed");
    }

    function printFiveTimes(student , callback ) {
        for(i = 0; i < 5 ; i++) {
            console.log( showStudentDetails(studentRecord) );
        }
        setTimeout(function() {
            callback();
        }, 2000)
        
    }

    console.log( showStudentDetails(studentRecord) );
    console.log( printFiveTimes (studentRecord , callback) );
    console.log( changeAge() );
    
}

