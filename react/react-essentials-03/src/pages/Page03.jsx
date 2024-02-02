
import { useState } from "react";

export function Page03() {
    return (
        <section>
            <h1>State içerisindeki objeler</h1>
            <Stage />

            <StageV2 />

            <StageV3 />


            <FormUser />

            <FormUser2 />
            <FormUser3 />
        </section>
    )
}



function Stage() {




    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function handleMouseMove(e) {
        setX(e.clientX);
        setY(e.clientY);
        console.log(e.clientX, e.clientY);
    }

    return (
        <div style={{ border: "2px solid black", backgroundColor: "pink", width: "300px", height: "300px" }}
            onMouseMove={handleMouseMove}
        >
            <div style={
                {
                    width: "24px",
                    height: "24px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    marginLeft: (x - 20) + "px",
                    marginTop: (y - 300) + "px",
                }
            }>


            </div>
        </div>
    )
}


// ***** WRONG METHOD *******

function StageV2() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleMouseMove(e) {
        //do not mutate the object in the state
        position.x = e.clientX;
        position.y = e.clientY;

        setPosition(position);
        console.log(e.clientX, e.clientY);
    }

    return (
        <div style={{ border: "2px solid black", backgroundColor: "pink", width: "300px", height: "300px" }}
            onMouseMove={handleMouseMove}
        >
            <div style={
                {
                    width: "24px",
                    height: "24px",
                    backgroundColor: "blue",
                    borderRadius: "50%",
                    marginLeft: (position.x) + "px",
                    marginTop: (position.y) + "px",
                }
            }>


            </div>
        </div>
    )
}


// ***** RIGHT METHOD *******

function StageV3() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleMouseMove(e) {
        //do not mutate the object in the state - a fresh object is needed
        const newPositionObj = { x: e.clientX, y: e.clientY };

        setPosition(newPositionObj);

        console.log(e.clientX, e.clientY);
    }

    return (
        <div style={{ border: "2px solid black", backgroundColor: "pink", width: "300px", height: "300px" }}
            onMouseMove={handleMouseMove}
        >
            <div style={
                {
                    width: "24px",
                    height: "24px",
                    backgroundColor: "yellow",
                    borderRadius: "50%",
                    marginLeft: (position.x - 20) + "px",
                    marginTop: (position.y - 430) + "px",
                    /*
                    tranform:`translate( ${ position.x - 20 }px, ${ position.y -  430 }px ) `;
                    */
                }
            }>
            </div>
        </div>
    )
}


function FormUser() {
    const [userFirstName, setUserFirstName] = useState("Burak");
    const [userLastName, setUserLastName] = useState("Kuyucaklı");
    const [userEmail, setUserEmail] = useState("asd@gmail.com");
    function handleUserFirstNameChange(e) { setUserFirstName(e.target.value) }
    function handleUserLastNameChange(e) { setUserLastName(e.target.value) }
    function handleUserEmailChange(e) { setUserEmail(e.target.value) }
    return (
        <>
            <h2>Kullanıcı formu</h2>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <input value={userFirstName} type="text" name="userFirstName" id="userFirstName" onChange={handleUserFirstNameChange} />
                <input value={userLastName} type="text" name="userLastName" id="userLastName" onChange={handleUserLastNameChange} />
                <input value={userEmail} type="email" name="userEmail" id="userEmail" onChange={handleUserEmailChange} />
            </form>
            <p>Siz: {userFirstName} {userLastName} {userEmail}</p>
        </>
    )
}


function FormUser2() {
    const [user, setUser] = useState({ firstName: "Burak", lastName: "Kuyucaklı", email: "asd@gmail.com" });

    function handleFirstNameChange(e) {

        const newUser = { ...user, firstName: e.target.value };
        setUser(newUser);
    }
    function handleLastNameChange(e) {
        const newUser = { ...user, lastName: e.target.value };
        setUser(newUser);

    }
    function handleEmailChange(e) {
        const newUser = { ...user, email: e.target.value };
        setUser(newUser);
    }
    
    return (
        <>
            <h2>Kullanıcı formu 2</h2>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <input value={user.firstName} type="text" name="firstName" id="firstName" onChange={handleFirstNameChange} />
                <input value={user.lastName} type="text" name="lastName" id="lastName" onChange={handleLastNameChange} />
                <input value={user.email} type="email" name="email" id="email" onChange={handleEmailChange} />
            </form>
            <p>Siz: {user.firstName} {user.lastName} {user.email}</p>
        </>
    )
}


function FormUser3() {
    const [user, setUser] = useState({ firstName: "Burak", lastName: "Kuyucaklı", email: "asd@gmail.com" });
 
    function handleChange(e) {
        const newUser = { ...user, [e.target.name]: e.target.value };
        setUser(newUser);
    }

    return (
        <>
            <h2>Kullanıcı formu 3</h2>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <input value={user.firstName} type="text" name="firstName" id="firstName" onChange={handleChange} />
                <input value={user.lastName} type="text" name="lastName" id="lastName" onChange={handleChange} />
                <input value={user.email} type="email" name="email" id="email" onChange={handleChange} />
            </form>
            <p>Siz: {user.firstName} {user.lastName} {user.email}</p>
        </>
    )
}