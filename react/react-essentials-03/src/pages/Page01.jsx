import { BasicButton, Button } from "../components/Buttons";

import { SimpleForm } from "../components/Forms";

import { ProductSlider } from "../components/ProductSlider";

import { FormMessage } from "../components/FormMessage";

export function Page01() {
    return (
        <section>
            <h1>Bir komponentin hafızası</h1>
            <BasicButton />
            <Button />
            <SimpleForm title="Form 01" />
            <ProductSlider />

            <FormMessage />
        </section>
    )
}