import * as Yup from 'yup';
export const validate = Yup.object({
    title: Yup.string()
        .min(20,'Заголовок должен иметь минимум 20 и 60 символов')
        .max(60,'Заголовок должен иметь минимум 20 и 60 символов')
        .required('Пожалуйста заполните поле'),
    description: Yup.string()
        .max(320,'Описание должно иметь до 320 символов'),      
    price: Yup.number()
        .positive('Число должно быть положительным')
        .required('Заполните поле')
        .max(99999999.99,'максимальное число 99999999.99'),
    endDatePercent: Yup.date()
        .min(new Date(new Date().getTime() + (24 * 60 * 60 * 1000)),'Дата повинна бути більше текущої'),
    imageUrl: Yup.string()
        .required('Загрузите фото'),
    imageWidth: Yup.number()
        .max(4000,'Висота і Ширина мін 200 макс 4000px ')
        .min(200, 'Висота і Ширина мін 200 макс 4000px '),
    imageHeight: Yup.number()
        .max(4000,'Висота і Ширина мін 200 макс 4000px ')
        .min(200, 'Висота і Ширина мін 200 макс 4000px ') 
});