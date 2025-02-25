import React from 'react'
import { IFormWrapper } from './types'

const FormWrapper = ({ children }: IFormWrapper) => {
    return <div className='md:shadow-lg px-8 md:px-20 py-10 rounded-lg w-full md:w-[60vw] lg:w-[40vw] md:bg-white'>{children}</div>
}

export default FormWrapper
