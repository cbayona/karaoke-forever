import React, { PropTypes } from 'react'
import './CoreLayout.scss'
import 'styles/core.scss'
import 'styles/material-ui.scss'

export const CoreLayout = ({ children }) => {
  return (
    <div style={{height: '100%'}}>
      {children}
    </div>
  )
}

export default CoreLayout
