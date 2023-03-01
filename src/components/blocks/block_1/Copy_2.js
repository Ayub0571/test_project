import React from 'react';
import * as yup from 'yup'
import {Formik} from 'formik' 
import Cities_1 from './cities_1.json'
import Button from 'react-bootstrap/Button';
import './Block_1.css'
import Block_3 from '../block_3/Block_3';
import { Row, Col, Container } from "react-bootstrap";




function Copy_2(props) {
  
  const validate = yup.object().shape({
    Cities_1: yup.string().typeError('Должно быть сторока').required('Обязательно'),
    password: yup.string().typeError('Должно быть сторока').min(5, "Испольуйте не менее 5 символов").required('Укажите пароль'),
    cofirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совподают').required('Укажите пароль'),
    email: yup.string().email('Неверный E-mail:').required('Укажите E-mail')

  })
  

   

  return (

    <Container>
      <Row>
      
    <div className='div_main_block_1'>

        
         <Formik
          initialValues={{
          Cities_1: '',
          password: '',
          cofirmPassword: '',
          email: ''

         }}
         validateOnBlur
         onSubmit={(values) => { console.log(values) }}
         validationSchema = {validate}
         >
           
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            
            <div className={'form'}>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <p className='p_content'>
                <label htmlFor='Cities_1' >Ваш город</label><br/>
                <select 
                 
                  className={'input_1'}
                type={'text'}
                name={'Cities_1'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Cities_1}
                >
                  <option value="">Search</option>                                              
                  {
                    Cities_1 && Cities_1                               
                     // .sort((a,b) => a.city > b.city ? 1 : -1)  //буквы
                    .sort((a,b) =>  b.population - a.population )  //числа
                    .filter(city_1 => city_1.population >= 50000)                                
                    .map( city_1 => {
                                    
                    return(
                             
                             <option>
                                <strong>{city_1.city}</strong> <br/>                                        
                                {city_1.population}
                            </option>
                    )
      } ) 
    }                 </select>       
    
              </p>
              </Col>
              {touched.Cities_1 && errors.Cities_1 && <p className={'error'}>{errors.Cities_1}</p>}
              <hr/>

              <Col xl={12} lg={12} md={12} sm={12} xs={12}>

              <p className='p_content'>
                <label htmlFor='password' >Пароль</label><br/>
                <input 
                className={'input'}
                type={'password'}
                name={'password'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}

                />
               <p className='p_Cont_p'>
                Ваш новый пароль должен содержать не менее 5 символов
              </p>
              </p>
              
              
              {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>

              <p className='p_content'>
                <label htmlFor='cofirmPassword' >Пароль еще раз</label><br/>
                <input 
                className={'cofirmPassword'}
                type={'password'}
                name={'cofirmPassword'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cofirmPassword}

                />
                <p className='p_Cont_p'>
                Повторите пароль, пожалуйста, это обезопасит нас с вами<br/> на случай обишки
              </p>
              </p>
              

              {touched.cofirmPassword && errors.cofirmPassword && <p className={'error'}>{errors.cofirmPassword}</p>}
              <hr/>
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>

              <p className='p_content'>
                <label htmlFor='email' >Электронная почта</label><br/>
                <input 
                className={'email'}
                type={'email'}
                name={'email'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}

                />
                 <p className='p_Cont_p'>
                Можно Изменить адрес указанный при регистрации
              </p>
              </p>

             
              {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>

              <Block_3/>
              <Button 
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={'submit'}
                variant="success"
              >
                Изменить
              </Button>{' '}

             </Col>
              
            </div>
          )}
                                    
          </Formik>
        
         </div>
         </Row>
         </Container>
      
      
  )
}
export default Copy_2