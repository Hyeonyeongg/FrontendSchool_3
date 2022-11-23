import Card from '../../components/Card/Card'
import Cart from '../../components/Cart/Cart'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'
import { data } from '../../database/data'
import './homePage.css'


export default function HomePage() {
    // console.log(data)
    // const data = null
    //삼항 연산자 안에도 자식 요소가 하나만 들어가야 함.
    return (
        <main className='product'>
        {
            data !== null ? 
                <>
                    <ul className='product-list'>
                        {data.map(item =><Card key={item.id} {...item}/>)}
                    </ul>
                    <Cart/>
                </>
            : <FailLoadData />
        }
        </main>
    )
}