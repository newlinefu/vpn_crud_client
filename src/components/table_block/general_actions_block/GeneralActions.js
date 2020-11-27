import React from 'react'
import * as style from './general_actions.module.css'

export default function GeneralActions(props) {
    const { adding, setAdding, addVpnAC } = props

    return (
        <div className={style.wrapper}>
            {
                adding
                ||
                <button
                    className={style.add_row_btn}
                    onClick={() => {
                        setAdding(true)
                        addVpnAC(null)
                    }}
                >+</button>
            }
        </div>
    )
}