import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Logo from '../assets/zoi_logo_.png'
import { Typography,Modal,Box, TextField } from '@mui/material'

import ZTextFiled from '../components/textfield/textfield' 
import ZButton from '../components/button/button' 



export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      open:false,
      stepper:0,
      email:'',
      femail:'',
      password:'',
      newPassword:'',
      confirmPassword:'',
      otp:''
    }
    this.setOpen = this.setOpen.bind(this)
    this.setStepper = this.setStepper.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.setConfirm = this.setConfirm.bind(this)
    this.setNewPassword = this.setNewPassword.bind(this)
    this.setOtp = this.setOtp.bind(this)
    this.setfEmail = this.setfEmail.bind(this)
  }
  setfEmail(arg){
      this.setState({femail:arg})
  }
  setOpen(){
    this.setState({open:true})
  }
  setEmail(arg){
    this.setState({email:arg})
  }
  setPassword(arg){
    this.setState({password:arg})
  }
  setNewPassword(arg){
    this.setState({newPassword:arg})
  }
  setConfirm(arg){
    this.setState({confirmPassword:arg})
  }
  setOtp(arg){
    this.setState({otp:arg})
  }
  
  setStepper(arg){
    this.setState({open:false})
    this.setState({stepper:arg})
  }
   render() {

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    let cardStyle = {
      width:400
      
    }
    const logoStyle = {
      width:50,
      height:50
    }

    const handleClose = ()=>{
      this.setState({open:!this.state.open})
    }

    return (
      <Grid 
        minHeight={"100vh"}
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
            <Grid item >
                <Card variant='outlined'  sx={cardStyle}>
                    <CardContent>
                        <Grid 
                          container
                          justifyContent={"center"}
                          alignItems={"center"}
                          spacing={2}
                        >
                              <Grid item 
                                style={{
                                  width:"50px",
                                  overflow:'hidden',
                                }}
                              >
                                    <img 
                                      src={Logo} 
                                      style={{
                                        width:"100%"
                                      }}
                                    />
                                </Grid>
                                <Grid item >
                                    <Typography
                                      variant='h6'
                                      sx={{
                                        fontWeight:'900'
                                      }}
                                    >
                                      ZOI SUPPORT
                                    </Typography>
                                </Grid>
                        </Grid>
                        <Grid 
                          container 
                          direction={"column"} 
                          justifyContent={"center"} 
                          alignItems={"center"} 
                        >
                            <Typography variant='h5' mt={2} sx={{fontWeight:'700'}} >Login</Typography>
                        </Grid>
                        <Grid container
                          direction={"column"}
                        >
                            <ZTextFiled
                              label="Email"
                              type="email"
                              isRequired={true}
                              setValue={this.setEmail}
                            />
                            <ZTextFiled 
                              label="Password"
                              isRequired={true}
                              type="password"
                              setValue = {this.setPassword}
                            />
                        </Grid>
                        <Grid 
                          container 
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          direction={"row"}
                        >
                          <ZButton
                            label={"Forgot password?"}
                            size={"small"}
                            onEvent={this.setOpen}
                            disabled={this.state.email.length==0}
                          />
                          <ZButton 
                            variant={"contained"}
                            label={"Login"}
                            size={"large"}
                            disabled={this.state.email.length==0 || this.state.password.length==0 }

                          />
                        </Grid>
                        <Modal
                            open={this.state.open}
                            onClose={handleClose}
                          >
                            
                            <Box sx={style}>
                              <Grid container alignItems={"center"}  direction={"column"} >
                                  <Typography variant='h6' > Forgot Password </Typography>
                              </Grid>
                              <Grid>
                                <ZTextFiled 
                                      type="email"
                                      label="Enter your email"
                                      defaultValue = {this.state.email}
                                      disabled={true}
                                    />
                              </Grid>
                              <Grid container direction={"column"} alignItems={"end"} >
                                  <ZButton
                                    label="Next"  
                                    variant="contained"
                                    onEvent = {this.setStepper}
                                    argValue ={1}
                                  />
                              </Grid>
                          </Box></Modal> 
                           <Modal
                           open={this.state.stepper==1}
                           onClose={handleClose}
                           aria-labelledby="modal-modal-title"
                           aria-describedby="modal-modal-description"
                         >
                          <Box sx={style}>
                          <Grid container alignItems={"center"}  direction={"column"} >
                              <Typography variant='h6' > Forgot Password </Typography>
                          </Grid>
                          <Grid>
                            <ZTextFiled 
                                  type="otp"
                                  label="Enter 6 digit OTP"
                                  setValue={this.setOtp}
                                />
                          </Grid>
                          <Grid container direction={"column"} alignItems={"end"} >
                              <ZButton
                                label="Next"  
                                variant="contained"
                                onEvent = {this.setStepper}
                                argValue ={2}
                                disabled={this.state.otp.length==0}
                              />
                          </Grid>
                      </Box></Modal>
                      <Modal
                           open={this.state.stepper==2}
                           onClose={handleClose}
                           aria-labelledby="modal-modal-title"
                           aria-describedby="modal-modal-description"
                         >
                      <Box sx={style}>
                          <Grid container alignItems={"center"}  direction={"column"} >
                              <Typography variant='h6' > Forgot Password </Typography>
                          </Grid>
                          <Grid>
                            <ZTextFiled 
                                  type="password"
                                  label="New password"
                                  setValue={this.setNewPassword}
                                />
                              <ZTextFiled 
                                  type="confirmpassword"
                                  label="Confirm password"
                                  setValue={this.setConfirm}
                                altpassword={this.state.newPassword}
                                />
                          </Grid>
                          <Grid container direction={"column"} alignItems={"end"} >
                              <ZButton
                                label="Next"  
                                variant="contained"
                                onEvent = {this.setStepper}
                                argValue ={3}
                                disabled={ this.state.newPassword.length==0 || this.state.confirmPassword.length==0 }
                              />
                          </Grid>
                      </Box>        
                    </Modal>
                    </CardContent>
                </Card>      
            </Grid>
      </Grid>
    )
  }
}




