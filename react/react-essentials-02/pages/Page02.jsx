const jsxArr = [
    <p key="0">Ben p</p>,
    <span key="1">Ben span</span>,
    <strong key="2">Ben strong</strong>,
    <em key="3">Ben em</em>,
]


export function Page02() {
    return (
        <section>
            <h2>Listelerdeki jsx elemanlarına unique key prop'ları eklemek</h2>

            {jsxArr}


            <h2>Kullanıcı adları</h2>
            {
                /* [ <p>Burak Deneme</p>, <p>Deneme Test</p>, <p>Test Asd</p> ]  */
                DATA_USERS_NAME.map((userName, index) => <p key={crypto.randomUUID()}>{userName}</p>)
            }


            <h2>Kullanıcı Detaylı Bilgileri</h2>

            {
                DATA_USERS.map((userObj) => <p key={userObj.id}>{userObj.userName}, id:{userObj.id}</p>)
            }

        </section>
    )
}




const DATA_USERS_NAME = ["Burak Deneme", "Deneme Test", "Test Asd"];


const DATA_USERS = [
    {
        id: 0,
        userName: "Burak Deneme",
        profession: "frontend dev",
    },
    {
        id: 2,
        userName: "Burak Deneme",
        profession: "frontend dev",
    },
    {
        id: 4,
        userName: "Burak Deneme",
        profession: "frontend dev",
    },
];