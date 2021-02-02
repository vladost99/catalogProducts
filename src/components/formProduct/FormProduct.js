import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {AiOutlineCloudUpload} from "react-icons/ai";
import TextField from '@material-ui/core/TextField';
import {  FormInputPercent, FormLabel,FormName,SectionWrapper,Form,FormImage,FormControl,ErrorText,FormUploadImage,FormInputCheck,WrapperUpload,UploadLabel,UploadName} from './FormProductElements';
import { addProduct, editProduct} from '../../Services/Firebase/firebaseFirestore';
import {uploadImage,downloadImage} from '../../Services/Firebase/firebaseStorage';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Preloader from '../preloader/Preloader';
import {useDispatch,useSelector} from 'react-redux';
import {loading, loaded} from '../../redux/actions/productAction';
import { Button } from '../Button';

function FormProduct(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [image,SetImage] = useState(null); // для загрузки фото

    const isLoading = useSelector(({product}) => product.isLoading);
    const {
        editPage,
        namePage,
        title,
        description,
        price,
        percent,
        endDatePercent,
        isDiscount,
        id,
        imageUrl,
        imageName,
        imageWidth,
        imageHeight
    } =  props;

    const button = editPage ? <Button type="submit">Оновити товар</Button> : <Button type="submit">Добавить товар</Button>
   


    const changeImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            
            const reader = new FileReader();
            formik.setFieldValue(event.target.name,file.name);
            SetImage(file);
            
            reader.addEventListener('load', () => {
               formik.setFieldValue('imageUrl', reader.result);
               const img =  new Image();
               img.src = reader.result;
               img.onload = () => {
                    //console.log('height ',img.height,' imageWidth ',img.width );
                    formik.setFieldValue('imageHeight', img.height);
                    formik.setFieldValue('imageWidth', img.width);
                }
            });

            reader.readAsDataURL(file);
        } 
    }


    const changeDiscount = (e) => {
       // const date = new Date().toISOString().substring(0, 10);
         formik.handleChange(e);
        
       if (!formik.values.isDiscount) {
            formik.setFieldValue('percent', '50');
       } else {
            formik.setFieldValue('percent', '');
            formik.setFieldValue('endDatePercent', '');
       }
    } 

    const  submitAdd = (values) => {
        dispatch(loading());
        uploadImage(image).on(
            "state_changed",
             snapshot => {
                 const progress = Math.round(
                    ( snapshot.bytesTransferred / snapshot.totalBytes) * 100
                 );
                 //console.log(progress,'%');
             },
             error => console.log(error),
             () => {
                    downloadImage(image.name)
                    .then(url => {
                        addProduct({...values,imageUrl: url});
                        dispatch(loaded());
                        history.push('/');
                    });
                    
             }
        );
    }

    const submitEdit = (values) => {
        dispatch(loading());
        if (image) {
            uploadImage(image).on(
                "state_changed",
                 snapshot => {
                     const progress = Math.round(
                        ( snapshot.bytesTransferred / snapshot.totalBytes) * 100
                     );
                     //console.log(progress,'%');
                 },
                 error => {console.log('eror',error)},
                 () => {
                    downloadImage(image.name)
                        .then(url => {
                            editProduct(id,{...values,imageUrl: url});
                            dispatch(loaded());
                            history.push('/');
                        });
                 }
            );
        } else {
            editProduct(id,{...values});
            dispatch(loaded());
            history.push('/');
        }
    }

    const validate = Yup.object({
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
    

    const formik = useFormik({
        initialValues: {
            title: editPage ? title : '',
            description: editPage ? description :  '',
            price: editPage ? price : '',
            percent: editPage ?  percent : '',
            endDatePercent: editPage ? endDatePercent : '',
            isDiscount: editPage ? isDiscount : false,
            imageName:  editPage ? imageName : '',
            imageUrl: editPage ? imageUrl : undefined,
            imageWidth: editPage ? imageWidth : 0,
            imageHeight: editPage ? imageHeight : 0,
        },
        validationSchema: validate,
        onSubmit: values => { 
            editPage ? submitEdit(values) : submitAdd(values) 
        },
      });




    return (
        <SectionWrapper>
            <Form onSubmit={formik.handleSubmit}>
                <FormName>{namePage}</FormName>
                <FormControl>
                    <FormLabel>Заголовок(Обязательно)</FormLabel>
                    <TextField
                    id="title"
                    name="title"
                    color="primary"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    />
                    {formik.touched.title && formik.errors.title &&<ErrorText>{formik.errors.title}</ErrorText>}
                </FormControl>
                <FormControl>
                    <FormLabel>Описание(Необезательно)</FormLabel>
                    <TextField
                    multiline
                    rows={4}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    id="description"
                    name="description"
                    color="primary"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    />
                   {formik.touched.description && formik.errors.description &&<ErrorText>{formik.errors.description}</ErrorText>}
                </FormControl>
                <FormControl>
                    <FormLabel>Цена(Обязательно)</FormLabel>
                    <TextField
                     id="price"
                     name="price"
                     color="primary"
                     error={formik.touched.price && Boolean(formik.errors.price)}
                     onChange={formik.handleChange}
                     value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price &&<ErrorText>{formik.errors.price}</ErrorText>}
                </FormControl>
                <FormControl>
                   
                    <FormLabel>
                    <FormInputCheck
                     id="isDiscount"
                     name="isDiscount"
                     checked={formik.values.isDiscount}
                     onChange={changeDiscount}
                     value={formik.values.isDiscount}
                    />
                    Процент скидки {formik.values.isDiscount && `${formik.values.percent}%`}</FormLabel>
                    <FormInputPercent
                    disabled={!formik.values.isDiscount}
                    id="percent"
                    name="percent"
                    onChange={formik.handleChange}
                    value={formik.values.percent}
                    />
                    <TextField
                    type="datetime-local"
                    id="endDatePercent"
                    name="endDatePercent"
                    color="primary"
                    required={formik.values.isDiscount}
                    disabled={!formik.values.isDiscount}
                    onChange={formik.handleChange}
                    value={formik.values.isDiscount && formik.values.endDatePercent}
                    />
                    {formik.touched.endDatePercent && formik.errors.endDatePercent ? (
                            <ErrorText>{formik.errors.endDatePercent}</ErrorText>
                    ) : null
                    }
                </FormControl>
                <FormControl>
                    <FormLabel>Фото(Обязательно)</FormLabel>
                    <WrapperUpload>
                        <UploadLabel htmlFor="imageName">
                            <UploadName>Загрузить файл <AiOutlineCloudUpload size="2em"/></UploadName>   
                            <FormUploadImage
                            type="file"
                            id="imageName"
                            name="imageName"
                            onChange={changeImage}
                            />
                        </UploadLabel>
                    </WrapperUpload>
                    <FormImage  src={formik.values.imageUrl} />
                    {formik.touched.imageName && formik.errors.imageUrl ? (
                            <ErrorText>{formik.errors.imageUrl}</ErrorText>
                    ) : null}
                    { formik.touched.imageName && <ErrorText>{formik.errors.imageWidth || formik.errors.imageHeight}</ErrorText>}
                </FormControl>
                {isLoading && <Preloader form={true}/>}
                {button}
            </Form>
        </SectionWrapper>
    )
}

export default FormProduct;
