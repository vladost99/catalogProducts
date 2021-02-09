import * as Yup from 'yup';
export const validate = Yup.object({
    firstName: Yup.string()
        .max(20, 'Максимум 20 символов')
        .required('Заполните поле'),
    phone: Yup.string()
        .matches(/\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/,'Формат +38 (099) 999-99-99')
        .required('Заполните поле'),
    email:  Yup.string()
        .email('Некорректный email')
        .required('Заполните поле'),  
    city: Yup.string()
        .required('Заполните поле')
        .max(14, 'Не больше 14 символов'),
    department: Yup.number()
        .max(99, 'Нету такого отделения')
        .required('Заполните поле'),
    typePayment:  Yup.string()
        .required('Заполните поле'),
});



