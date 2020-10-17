import React from 'react';
import InputExample from './Input'
import './ChoiceTask.css'

const ChoiceTask = (props) => {
    return(
    <div>
        <div className='title3'>
            <h2>Setting up your Task</h2>
        </div>
        <div className='SetChoice'>
            <InputExample  classname='option' inputid='questioninput' text='Please set up your task question' type='text' name='TaskQuestion' onChange={props.ChoiceTask}/>
            <InputExample inputid='oneinput' labelid = 'one' classname='option' text='Option one' type='text' name='OptionOne' onChange={props.OptionOne}/>
            <InputExample inputid='twoinput' labelid = 'two' classname='option' text='Option Two' type='text'  name='OptionTwo' onChange={props.OptionTwo}/>
            <InputExample inputid='threeinput' labelid = 'three' classname='option' text='Option three' type='text'  name='OptionThree' onChange={props.OptionThree}/>
        </div>
        </div>
    )
}

export default ChoiceTask