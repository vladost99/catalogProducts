import React from 'react'
import FormProduct from '../../components/formProduct/FormProduct';
function NewProduct() {
    const name = 'Страница добавления товара';
    return (
        <FormProduct namePage={name}/>
    )
}

export default NewProduct;
