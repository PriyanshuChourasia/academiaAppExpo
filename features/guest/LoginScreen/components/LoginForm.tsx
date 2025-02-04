import React from "react"
import {Formik} from "formik";
import { LoginValidation } from "../hooks/LoginValidation";
import { LoginInitialState } from "../initialState/LoginInitialState";
import ViewContainer from "@/components/ViewContainer";
import { Button,TextInput } from "react-native-paper";
import { LoginStyle } from "../styles/LoginStyle";
import { AppColor } from "@/constants/Colors";
import { useUserAuthentication } from "../services/api_hooks";
import { Text } from "react-native";


const LoginForm = () =>{

    const {mutate} = useUserAuthentication();



    return(
        <>
            <Formik
            
                onSubmit={(values,action)=>{


                    mutate({
                        username:values.username,
                        password:values.password
                    })
                    console.log(values);
                }}
                initialValues={LoginInitialState}
                // validationSchema={LoginValidation}
            >
                {
                    ({handleBlur,handleChange,handleSubmit,values}) =>(
                        <ViewContainer style={LoginStyle.formContainer}>
                            <ViewContainer style={[LoginStyle.form, LoginStyle.shadowProp]}>
                                <TextInput 
                                    mode="outlined"
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    placeholder="Username"
                                    placeholderTextColor={'black'}
                                    style={LoginStyle.textInputStyle}
                                    outlineStyle={LoginStyle.textInputStyleOnFocus}
                                    textColor="black"
                                />
                                {/* {
                                    errors.username && touched.username ?(
                                        <Text>{errors.username}</Text>
                                    ): null
                                } */}
                                <TextInput 
                                    mode="outlined"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    placeholder="Password"
                                    placeholderTextColor={'black'}
                                    style={LoginStyle.textInputStyle}
                                    outlineStyle={LoginStyle.textInputStyleOnFocus}
                                    textColor="black"
                                />
                                <Button rippleColor={AppColor.light.rippleColor} style={LoginStyle.buttonStyle} textColor="white" mode="contained" onPress={()=>handleSubmit()}>
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