import React, {useState} from 'react'
import Cell from './cell/Cell'
import RowForm from '../row_form/RowForm'
import * as style from './row_style.module.css'

export default function Row(props) {
    const {
        vpn,
        removeEmptyVpnsAC,
        setAdding,
        addVpnAction,
        changeVpnAction,
        vpnId,
        deleteVPNByIdFromServer
    } = props
    const [changing, setChanging] = useState(false)

    let renderedVPN = vpn
        ? vpn
        : {
            title: '',
            server: '',
            password: '',
            expDate: ''
        }

    let exitFormAction = vpn
        ? () => setChanging(false)
        : () => {
            removeEmptyVpnsAC()
            setAdding(false)
        }

    let submitFormAction = vpn
        ? (values) => {
            changeVpnAction(vpnId, values)
            setChanging(false)
        }
        : (values) => {
            addVpnAction(values)
            setAdding(false)
        }

    if(vpn === null && !changing) {
        setChanging(true)
    }

    if(changing)
        return <RowForm
            initialValues={renderedVPN}
            exitAction={exitFormAction}
            onSubmitAction={submitFormAction}
        />
    else
        return (
            <div className={'row_simulator'}>
                {
                    Object.values(vpnPassHide(renderedVPN)).map((vpnValue, key) => <Cell
                        vpnValue={vpnValue}
                        key={key}
                    />)
                }
                <div className={'cell_simulator'}>
                    <div className={style.row_action}>
                        <button
                            className={style.edit_btn}
                            onClick={() => setChanging(true)}
                        >&#9998;</button>
                        <button
                            className={style.delete_btn}
                            onClick={() => deleteVPNByIdFromServer(vpnId)}
                        >&#128465;</button>
                    </div>
                </div>
            </div>
        )
}

function vpnPassHide(vpn) {
    const newVpn = {...vpn}

    newVpn.password = '*'.repeat(newVpn.password.length)

    return newVpn
}