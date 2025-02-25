'use client'
import React from 'react'
import { Button, Form, Input } from 'antd'
import { IFormFields } from './types'
import FormAuthFooter from '../Footer'

const FormAuthRecoverPassword = () => {
    return (
        <Form
            name='recover-password'
            layout='vertical'
            className='mt-12 md:mt-20'
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete='off'
        >
            <Form.Item<IFormFields['email']>
                label='Email'
                name='email'
                rules={[{ required: true, message: 'Please input your email!' }]}
                className='justify-self-center w-full'
            >
                <Input className='max-w-full' size='large' />
            </Form.Item>

            <Form.Item label={null} className='justify-self-center w-full'>
                <Button type='primary' htmlType='submit' block size='large' shape='round'>
                    Recuperar senha
                </Button>
            </Form.Item>

            <FormAuthFooter message='' link='' />
        </Form>
    )
}

export default FormAuthRecoverPassword
