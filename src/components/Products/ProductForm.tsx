import React from 'react'
import { useState } from 'react'
import Button from '../../shared/Button'
import Form from '../../shared/Form/Form'
import Input from '../../shared/Input'

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

const ProductForm = () => {
    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return <Form>
        <Input
            onChange={handleInputChange}
            name="name"
            label="Name"
            placeholder="E.g.: Cookie"
            required
        />
        <Input
            onChange={handleInputChange}
            name="price"
            label="Price"
            type="number"
            step="0.01"
            min="0"
            placeholder="E.g.: 1.25"
            required
        />
        <Input
            name="stock"
            onChange={handleInputChange}
            label="Stock"
            type="number"
            min="0"
            placeholder="E.g.: 10"
            required
        />
        <Button>
            Submit
        </Button>
    </Form>
}

export default ProductForm