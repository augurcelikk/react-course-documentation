export function Login({ logUserIn }) {

    function handleSubmit(e) {
        e.preventDefault();
        
        logUserIn();

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="password" />

            <button type="submit">Giriş yap</button>
        </form>
    )
}