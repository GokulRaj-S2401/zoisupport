import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export default function ZButton(props) {
  return (
        <Button
        variant={props.variant}
        disableElevation
        size={props.size}
        onClick={()=>props.onEvent(props.argValue)}
        disabled={props.disabled}
        >
            {props.label}
        </Button>
  )
}
