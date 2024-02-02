import { useState } from "react";

export const SimpleForm = ({ title = "Form" }) => {
    const [inpVal, setInpVal] = useState("");

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        setInpVal(value);
    }

    return (
        <form>
            <h1>{title}</h1>
            <input type="text" placeholder="Bir şey yazınız"
                onChange={handleChange} />

            Bir şey yazdınız: <strong>{inpVal}</strong>
        </form>
    )
}



