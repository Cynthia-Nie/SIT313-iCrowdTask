import React from 'react';
import { Input } from 'semantic-ui-react'


const InputExample = (props) =>{
    return(
        <div className={props.classname}>
            <label id = {props.labelid}>{props.text}</label>
            <Input id = {props.inputid} type = {props.type} name={props.name} onChange={props.onChange} value={props.value}/>
            <label>{props.text2}</label>
        </div>
    )
}
export default InputExample