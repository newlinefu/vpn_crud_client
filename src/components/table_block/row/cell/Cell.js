import React from 'react'
import * as style from './cell.module.css'

export default function Cell(props) {

    const { vpnValue } = props

    return (
        <div className={style.cell + ' cell_simulator'}>
            {vpnValue}
        </div>
    )
}