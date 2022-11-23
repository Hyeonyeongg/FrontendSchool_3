import React from 'react'
import './productName.css'

export default function ProductName({productName}) {
    //sl-ellipsis은 한줄 말줄임.
    return (
        <strong className='product-name sl-ellipsis'>{productName}</strong>
    )
}