import React, {useState} from 'react'
import {connect} from 'react-redux'
import TableBlock from './TableBlock'
import {vpnListSelector} from '../../selectors/selectors'
import {
    addVpnAC,
    removeEmptyVpnsAC,
    putVPNOnServer,
    updateVPNInServer,
    deleteVPNByIdFromServer
} from '../../redux/reducers/table_reducer'

//Side effects component for table
function TableBlockContainer(props) {

    const {
        vpnList,
        addVpnAC,
        removeEmptyVpnsAC,
        putVPNOnServer,
        updateVPNInServer,
        deleteVPNByIdFromServer
    } = props
    const [adding, setAdding] = useState(false)

    function addVpnAction(values) {
        putVPNOnServer(
            values.title,
            values.server,
            values.password,
            values.expDate
        )
            .catch(err => {
                console.log(err)
                alert(err.message)
            })
    }

    function changeVpnAction(id, values) {
        updateVPNInServer(
            id,
            values.title,
            values.server,
            values.password,
            values.expDate
        )
            .catch(err => {
                console.log(err)
                alert(err.message)
            })
    }

    return (
            <TableBlock
                vpnList={vpnList}
                adding={adding}
                setAdding={setAdding}
                addVpnAC={addVpnAC}
                removeEmptyVpnsAC={removeEmptyVpnsAC}
                addVpnAction={addVpnAction}
                changeVpnAction={changeVpnAction}
                deleteVPNByIdFromServer={deleteVPNByIdFromServer}
            />
    )

}



function mapStateToProps(state) {
    return {
        vpnList: vpnListSelector(state)
    }
}

export default connect(mapStateToProps, {

    addVpnAC,
    removeEmptyVpnsAC,
    putVPNOnServer,
    updateVPNInServer,
    deleteVPNByIdFromServer

})(TableBlockContainer)