import React from 'react';
import InputExample from './Input'

import './DecisionTask.css'

const DecisionTask = (props) => {
    return(
    <div>
        <div className='title3'>
            <h2>Setting up your Task</h2>
        </div>
        <div className='Decision'>
            <InputExample inputid='decision' text='Please set up your task question' type='text' onChange={props.DecisionTask} name='TaskQuestion'/>
            <InputExample  type='radio' text2='Yes' name = 'Judgement' onChange={props.YesDecision} value='Yes'/>
            <InputExample  type='radio' text2='No' name = 'Judgement' onChange={props.NoDecision} value='No'/>
        </div>
        </div>
    )
}

export default DecisionTask