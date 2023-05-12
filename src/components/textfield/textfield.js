import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
export default function ZTextField(props) {
   
    const [value,setValue] = useState()
    const [isError,setError] = useState(false)
    const [errorMsg,setErrorMsg] = useState()

    const emailValidation = (e) =>{
        let regExp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
        setValue(e.target.value)
        console.log(e.target.value)
        if(!regExp.test(e.target.value)){
            setError(true)
            setErrorMsg("Enter valid email")
        }
        else{
            setError(false)
            setErrorMsg("")
            props.setValue(e.target.value)
        }
    }

    const passwordValidation = (e)=>{
        if(e.target.value.length<6){
            setError(true)
            setErrorMsg('Password should be 6 letters or more')
        }
        else{
            setError(false)
            setErrorMsg("")
            props.setValue(e.target.value)
        }
    }

    const cpasswordValidation = (e)=>{
        if(e.target.value != props.altpassword ){
            setError(true)
            setErrorMsg('Password should be same')
        }
        else{
            setError(false)
            setErrorMsg("")
            props.setValue(e.target.value)
        }
    }


    const otpvalidation = (e)=>{
        if(e.target.value.length!==6){
            setError(true)
            setErrorMsg('Enter valid OTP')
        }
        else{
            setError(false)
            setErrorMsg("")
            props.setValue(e.target.value)
        }
    }

  return (
        <Box sx={{width:'100%'}} my={2} >
             <TextField
                fullWidth
                disabled={props.disabled}
                variant='outlined'
                defaultValue={props.defaultValue}
                label={props.label}
                error= {isError } 
                helperText={errorMsg}
                required={props.isRequired}
                type={props.type=="password" || props.type=="confirmpassword" ?"password":''}
                onChange ={props.type=="email"? 
                (e)=>emailValidation(e): props.type=="password"?
                (e)=>passwordValidation(e):props.type=="otp"?
                (e)=>otpvalidation(e):props.type=="confirmpassword"? 
                (e)=>cpasswordValidation(e):null
            }
             />
        </Box>    
  )
}
