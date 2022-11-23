import {useRef} from 'react'
import ProductImage from './ProductImage/ProductImage'
import ProductName from './ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import './card.css'

// let thumbnailImg = 'asset/img/1/thumbnailImg.jpg'
// undefined
// {thumbnailImg }
// {thumbnailImg: 'asset/img/1/thumbnailImg.jpg'}
// {...thumbnailImg}
// {0: 'a', 1: 's', 2: 's', 3: 'e', 4: 't', 5: '/', 6: 'i', 7: 'm', 8: 'g', 9: '/', 10: '1', 11: '/', 12: 't', 13: 'h', 14: 'u', 15: 'm', 16: 'b', 17: 'n', 18: 'a', 19: 'i', 20: 'l', 21: 'I', 22: 'm', 23: 'g', 24: '.', 25: 'j', 26: 'p', 27: 'g'}
// {...{thumbnailImg}}
// {thumbnailImg: 'asset/img/1/thumbnailImg.jpg'}

export default function Card({productName, price, thumbnailImg}) {
    //https://test.api.weniv.co.kr/asset/img/5/thumbnailImg.jpg
    // console.log(thumbnailImg)
    const likeBtn = useRef()

    function handleLikeBtn(e) {
        console.log(e)
        console.log(e.currentTarget.classList)
        e.currentTarget.classList.toggle('on') //on이 있으면 하트표시됨. 
    }
    
    return (
        <li className='product-item'>
            <div className='product-img'>
                <ProductImage {...{thumbnailImg, productName}}/>
            </div>
            
            {/* 전개를 해서 넘겨줘야 받을 수 있음. */}
            <ProductName {...{productName}}/>
            <button ref={likeBtn} onClick={handleLikeBtn} className='like-btn'></button>
            
            <div className='product-price'>
                <ProductPrice {...{price}}/>
            </div>
        </li>
    )
}