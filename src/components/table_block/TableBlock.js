import React from 'react'
import Row from './row/Row'
import * as style from './table_block_style.module.css'
import * as cellStyle from './row/cell/cell.module.css'
import GeneralActions from './general_actions_block/GeneralActions'


export default function TableBlock(props) {

    const {
        vpnList,
        adding,
        setAdding,
        addVpnAC,
        removeEmptyVpnsAC,
        addVpnAction,
        changeVpnAction,
        deleteVPNByIdFromServer
    } = props


    return (
        <div className={style.table_block_wrapper}>
            <GeneralActions
                adding={adding}
                setAdding={setAdding}
                addVpnAC={() => addVpnAC(null)}
            />
            <div className={style.table + ' table_simulator'}>
                <div className='row_simulator'>
                    <div className={cellStyle.cell + ' cell_simulator'}>Title</div>
                    <div className={cellStyle.cell + ' cell_simulator'}>Server</div>
                    <div className={cellStyle.cell + ' cell_simulator'}>Password</div>
                    <div className={cellStyle.cell + ' cell_simulator'}>Expiration date</div>
                </div>
                {
                    vpnList.map(vpn => <Row
                        vpn={ vpn
                            ? {title: vpn.vpnTitle, server: vpn.vpnServer, password: vpn.vpnPassword, expDate: vpn.vpnExpDate}
                            : null
                        }
                        vpnId={vpn ? vpn.vpnId : null}
                        changeVpnAction={changeVpnAction}
                        removeEmptyVpnsAC={removeEmptyVpnsAC}
                        setAdding={setAdding}
                        addVpnAction={addVpnAction}
                        key={(vpn && vpn.vpnTitle) || 'none'}
                        deleteVPNByIdFromServer={deleteVPNByIdFromServer}
                    />)
                }
            </div>
        </div>
    )
}