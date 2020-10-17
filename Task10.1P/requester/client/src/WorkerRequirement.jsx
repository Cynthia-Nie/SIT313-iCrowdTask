import React from 'react';
import InputExample from './Input'
import './WorkerRequirement.css'


const WorkerRequirement = (props) => {
    return(
        <div>
            <div className="title4">
            <h2>Worker Requirement</h2>
            </div>
            <div className="Master">
            <p>Require Master Workers</p>
            </div>
            <div className="require">
            <span> 
            <InputExample classname='Require'  type='radio' name='isRequire'  text2='Yes' value='Yes' onChange={props.Require}/>
            <InputExample classname='Require'  type='radio' name='isRequire'   text2='No' value='No' onChange={props.Require}/>
            </span> 
        </div>
            <div>
                <InputExample inputid='rewardinput' classname='text' text='Reward per response' type='text' name='Reward' onChange={props.Reward}/>
                <br></br>
                <InputExample inputid='numberinput' labelid='number' classname='text' text='Number of workers' type='text' name='Numbers' onChange={props.Numbers}/>
            </div>
        </div>
    )
}

export default WorkerRequirement;