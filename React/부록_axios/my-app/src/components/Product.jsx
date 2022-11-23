import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Product() {
    useEffect(()=>{
        // - HTTP 메서드 지원
        // - axios.get(url, conf)
        // - axios.delete(url, conf)
        // - axios.post(url, data, conf)
        // - axios.put(url, data, conf)
        // - axios.patch(url, data, conf)
        
        //axios
        axios.get('http://test.api.weniv.co.kr/mall')
            .then(res=>{
                console.log('axios')
                console.log(res) //Object 출력
                console.log(res.data) //Object의 data에 바로 데이터가 들어있음.
            })

        //fetch
        fetch('http://test.api.weniv.co.kr/mall')
            .then(res => {
                console.log('fetch')
                console.log(res)
                // console.log(res.json()) // pending됩니다.
                return res.json() //.json을 사용해서 body부분을 추출해야함.
            })
            .then(data => {
                console.log(data)
            })
    }, []) //최초 한번만 실행
    
    return (
        <div>Product</div>
    )
}
