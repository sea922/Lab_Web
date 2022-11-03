import React from 'react'
import FormGroup from "@mui/material/FormGroup";
import MyTextInput from "./MyTextInput";
import MySelect from './MySelect';


export default function Exercise8() {
  return (
    <FormGroup style={{width: 200, margin: 10}}>
      <MyTextInput></MyTextInput>
      <MySelect></MySelect>
    </FormGroup>
  )
}
