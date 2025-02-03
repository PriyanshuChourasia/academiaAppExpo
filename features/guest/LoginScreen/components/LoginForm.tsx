import React from "react"
import {Formik} from "formik";
import { LoginValidation } from "../hooks/LoginValidation";
import { LoginInitialState } from "../initialState/LoginInitialState";
import ViewContainer from "@/components/ViewContainer";
import { Button, TextInput } from "react-native-paper";
import { LoginStyle } from "../styles/LoginStyle";
import { AppColor } from "@/constants/Colors";


const LoginForm = () =>{
    return(
        <>
            <Formik
            
            onSubmit={(values)=>{
                console.log(values);
            }}
            initialValues={LoginInitialState}
            validationSchema={LoginValidation}
            >
                {
                    ({handleBlur,handleChange,handleSubmit,values}) =>(
                        <ViewContainer style={LoginStyle.formContainer}>
                            <ViewContainer style={[LoginStyle.form, LoginStyle.shadowProp]}>
                                <TextInput 
                                mode="outlined"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="Enter Username"
                                placeholderTextColor={'black'}
                                style={LoginStyle.textInputStyle}
                                outlineStyle={LoginStyle.textInputStyleOnFocus}
                                textColor="black"
                                />
                                <TextInput 
                                mode="outlined"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder="Enter Password"
                                placeholderTextColor={'black'}
                                style={LoginStyle.textInputStyle}
                                outlineStyle={LoginStyle.textInputStyleOnFocus}
                                textColor="black"
                                />
                                <Button rippleColor={AppColor.light.rippleColor} style={LoginStyle.buttonStyle} textColor="white" mode="contained" onPress={()=>handleSubmit}>
                                    LogIn
                                </Button>
                            </ViewContainer>
                        </ViewContainer>
                   
                    )
                }
            </Formik>
        </>
    )
}


export default LoginForm;