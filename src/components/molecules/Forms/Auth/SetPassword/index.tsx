'use client'
import React from 'react'
import { Button, Form, Input } from 'antd'
import { IFormFields } from './types'
import FormAuthFooter from '../Footer'

const FormAuthSetPassword = () => {
    return (
        <Form
            name='recover-password'
            layout='vertical'
            className='mt-12 md:mt-20'
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete='off'
        >
            <Form.Item<IFormFields['oldPassword']>
                label='Nova password'
                name='new_password'
                rules={[{ required: true, message: 'Please input your password!' }]}
                className='justify-self-center w-full'
            >
                <Input.Password size='large' />
            </Form.Item>

            <Form.Item<IFormFields['oldPassword']>
                label='Repetir password'
                name='repeat_password'
                rules={[{ required: true, message: 'Please input your password!' }]}
                className='justify-self-center w-full'
            >
                <Input.Password size='large' />
            </Form.Item>

            <Form.Item label={null} className='justify-self-center w-full'>
                <Button type='primary' htmlType='submit' block size='large' shape='round'>
                    Alterar senha
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormAuthSetPassword
