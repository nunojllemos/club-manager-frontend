import { Button, Form, Input } from 'antd'
import React from 'react'
import { IFormFields } from './types'

const NewUserForm = () => {
    return (
        <Form name='register-user' layout='vertical' className='mt-8' wrapperCol={{ span: 16 }} initialValues={{ remember: true }} autoComplete='off'>
            <Form.Item<IFormFields>
                label='Email'
                name='email'
                rules={[{ required: true, message: 'Please input your email!' }]}
                className='justify-self-center w-full'
            >
                <Input className='max-w-full' size='large' />
            </Form.Item>

            <Form.Item label={null} className='justify-self-center w-full'>
                <Button type='primary' htmlType='submit' block size='large' shape='round'>
                    Criar conta
                </Button>
            </Form.Item>
        </Form>
    )
}

export default NewUserForm
