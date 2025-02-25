'use client'
import React from 'react'
import Link from 'next/link'
import { Button, Checkbox, Form, Input, Typography, FormProps } from 'antd'
import { IFormFields } from './types'
import { Links } from '@/helpers/constants'

const FormAuthLogin = () => {
    const onFinish: FormProps<IFormFields>['onFinish'] = values => {
        console.log('Success:', values)
    }

    const onFinishFailed: FormProps<IFormFields>['onFinishFailed'] = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    return (
        <Form
            name='login'
            layout='vertical'
            className='mt-12 md:mt-20'
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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

            <Form.Item<IFormFields['password']>
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
                className='justify-self-center w-full'
            >
                <Input.Password size='large' />
            </Form.Item>

            <div className='flex justify-between w-full justify-self-center'>
                <Form.Item<IFormFields['remember']> name='remember' valuePropName='checked' label={null} className='justify-self-start'>
                    <Checkbox>Lembrar-me</Checkbox>
                </Form.Item>
                <Typography.Paragraph>
                    <Link className='leading-[2.25]' href={Links.RECOVER_PASSWORD}>
                        Recuperar senha
                    </Link>
                </Typography.Paragraph>
            </div>

            <Form.Item label={null} className='justify-self-center w-full'>
                <Button type='primary' htmlType='submit' block size='large' shape='round'>
                    Entrar
                </Button>
            </Form.Item>

            <Typography.Paragraph className='text-center'>
                Ainda não tem uma conta. <Link href={Links.REGISTER}>Registe-se.</Link>
            </Typography.Paragraph>
        </Form>
    )
}

export default FormAuthLogin
