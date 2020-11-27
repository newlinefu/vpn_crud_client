import React, {useEffect} from 'react'
import TableBlockContainer from './components/table_block/TableBlockContainer'
import {initSelector} from './selectors/selectors'
import {toInitApp} from './redux/reducers/init_reducer'
import {connect} from 'react-redux'

function App(props) {
  const {isInit, toInitApp} = props

  useEffect(() => {
    toInitApp()
        .catch(err => {
          console.log(err)
          alert(err.message)
        })
  })

  if(!isInit)
    return <div>...Loading...</div>

  return <TableBlockContainer/>
}

function mapStateToProps(state) {
  return {
      isInit: initSelector(state)
  }
}

export default connect(mapStateToProps, {
  toInitApp
})(App)
