import React from 'react'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'

export default function Contets({listName}) {
    if (listName === 'one') {
        return (
            <One/>
        )
    } else if (listName === 'two') {
        return (
            <Two/>
        )
    } else if (listName === 'three') {
        return (
            <Three/>
        )
    } else if (listName === 'four') {
        return (
            <Four/>
        )
    } else if (listName === 'five') {
        return (
            <Five/>
        )
    } return (
        <div>404 페이지를 찾을 수 없습니다.</div>
    )
}
