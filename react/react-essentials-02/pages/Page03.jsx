export function Page03() {
    return (
        <section>
            <h2>Komponentlerin pür-saf-arı-duru olması - Keeping components pure.</h2>
            <p>Pure function'lar aynı argümanla çağrıldıkları her seferde aynı sonucu verirler. Pure function'lar sadece kendi işlerine bakarlar, çağrılmalarından önceki değerleri değiştirmeye çalışmazlar...
            </p>
            <RecipeTeaLatte />
            <RecipeTeaLatte />
            <RecipeTeaLatte />
            <RecipeTeaLatte />
            <RecipeTeaLatte />
            <RecipeTeaLatte />
            <RecipeTeaLatte />
            <RecipeTeaLatte />


            <Gathering />


            <FamilyGathering />

        </section>
    )
}


// Functional Programming - Bir fonksiyonun pure olması

// y = 2x;  ->   x:2  -> y:4, x:3 -> y:6


// A PURE FUNCTION
function double(num) {
    return 2 * num;
}

double(3); // 6 

// A PURE FUNCTIONAL COMPONENT 
function RecipeTeaLatte() {
    return (

        <div>
            <h2>4 kişilik Sütlü Çay</h2>
            <ul>
                <li>2 çorba kaşığı çay</li>
                <li>1 tatlı kaşığı süt</li>
                <li>6 su bardağı su</li>
            </ul>
        </div>

    )
}

// AN IMPURE FUNCTION

let count = 0;

export function testImpureFunc() {
    count++; //changes a variable value that is defined outside

    return count;
}

console.log(testImpureFunc());
console.log(testImpureFunc());
console.log(testImpureFunc());
console.log(testImpureFunc());




let guestCount = 0;

// AN IMPURE FUNCTIONAL COMPONENT
function Cup() {

    guestCount++;

    return (
        <li>Ben {guestCount}. misafir için bir bardağım.</li>
    )
}


function PureCup(props) {
    console.log("I am from Purecup");
    return (
        <li>Ben {props.guest}. misafir için bir bardağım. A Pure function</li>
    )
}


function Gathering() {

    return (
        <>
            <h2>Şirket Toplantısı</h2>
            <ul>
                <Cup />
                <Cup />
                <Cup />

                <PureCup guest="1" />
                <PureCup guest="2" />

            </ul>
        </>
    )
}



function FamilyGathering() {
    let cups = [];

    for( let i = 1; i<20; i++){
        cups.push(  <PureCup key={i} guest={i}/>  );
    }

    return (
        <>
            <h2>Aile Toplantısı</h2>
            <ul>
                {cups }

            </ul>
        </>
    )
}



function calculateTotal(){

    //statetement1
    //statetement1...
    //connect to server and send data  -> sideEffect
    //fetching data from an api -> sideEffect
    //dom operations -> sideEffect

    // oluşacak ya etkileri handler function'lar içerisinde yapmak uygundur...

    //submit butonu tıklandığında form datasını server'a gönder 

    


}









