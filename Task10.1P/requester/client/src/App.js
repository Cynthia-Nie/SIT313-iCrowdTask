import React, {useState} from 'react';
import NavBar from './NavBar';
import DescriptionTask from './DescriptionTask';
import SettingTask from './SettingTask';
import WorkerRequirement from './WorkerRequirement';
import InputExample from './Input';
import ChoiceTask from './ChoiceTask';
import DecisionTask from './DecisionTask';
import SentenceTask from './SentenceTask';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Home.css';
import './NavBar.css';



function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [isValue,setValue] = useState('')
  const[contact,setInput] = useState({
    TaskType: '',
    TaskTitle:'',
    TaskDescription:'',
    ExpiryDate:'',
    TaskQuestion:'',
    OptionOne:'',
    OptionTwo:'',
    OptionThree:'',
    Judgement:'',
    isRequire:'',
    Reward:'',
    Numbers:''
  })


  const ChoiceChange = (e) =>{
    setValue('Choice')
    setInput((PreValue)=>{
      return{
        TaskType: 'Choice',
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate:PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    })
  }

  const DecisionChange = (e) =>{
    setValue('Decision')
    setInput((PreValue)=>{
      return{
        TaskType: 'Decision',
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate:PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    })
  }
  
  const SentenceChange = (e) =>{
    setValue('Sentence')
    setInput((PreValue)=>{
      return{
        TaskType: 'Sentence',
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate:PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    })
  }

  const InputChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInput((PreValue) => {
      if(name === 'TaskTitle'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: value,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate:PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
      else if(name === 'TaskDescription'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: value,
        ExpiryDate:PreValue.ExpiryDate,
        TaskQuestion:PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'ExpiryDate'){
      console.log(contact.ExpiryDate)
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: value,
        TaskQuestion:PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }  
    }
    else if(name ==='TaskQuestion'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: value,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'OptionOne'){
      return{
        TaskType: PreValue.TaskType,
      TaskTitle: PreValue.TaskTitle,
      TaskDescription: PreValue.TaskDescription,
      ExpiryDate: PreValue.ExpiryDate,
      TaskQuestion: PreValue.TaskQuestion,
      OptionOne:value,
      OptionTwo: PreValue.OptionTwo,
      OptionThree:PreValue.OptionThree,
      Judgement:PreValue.Judgement,
      isRequire:PreValue.isRequire,
      Reward:PreValue.Reward,
      Numbers:PreValue.Numbers
      }
    }
    else if(name === 'OptionTwo'){
      return{
        TaskType: PreValue.TaskType,
      TaskTitle: PreValue.TaskTitle,
      TaskDescription: PreValue.TaskDescription,
      ExpiryDate: PreValue.ExpiryDate,
      TaskQuestion: PreValue.TaskQuestion,
      OptionOne:PreValue.OptionOne,
      OptionTwo:value,
      OptionThree:PreValue.OptionThree,
      Judgement:PreValue.Judgement,
      isRequire:PreValue.isRequire,
      Reward:PreValue.Reward,
      Numbers:PreValue.Numbers
      }
    }
    else if(name === 'OptionThree'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo:PreValue.OptionTwo,
        OptionThree:value,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'Judgement'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo:PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:value,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'isRequire'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo:PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:value,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'Reward'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo:PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:value,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'Numbers'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo:PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:value
      }
    }
    })
  }

  const handleSubmit = () =>{
    setShow(true)
    fetch('http://localhost:8000/register',{
      method :'post',
      headers :{'Content-Type':'application/json'},
      body :JSON.stringify({
        TaskType: contact.TaskType,
        TaskTitle : contact.TaskTitle,
        TaskDescription:contact.TaskDescription,
        ExpiryDate:contact.ExpiryDate,
        TaskQuestion:contact.TaskQuestion,
        OptionOne:contact.OptionOne,
        OptionTwo:contact.OptionTwo,
        OptionThree:contact.OptionThree,
        Judgement:contact.Judgement,
        isRequire:contact.isRequire,
        Reward:contact.Reward,
        Numbers:contact.Numbers
      })
    })
    .then(response =>response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log("Error"+err)
    })
  }

  return(
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/superhero/bootstrap.min.css" integrity="sha384-HnTY+mLT0stQlOwD3wcAzSVAZbrBp141qwfR4WfTqVQKSgmcgzk+oP0ieIyrxiFO" crossOrigin="anonymous"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
    <div className ='home'>
      <NavBar/>
        <div className='title'>
        <h2>Select Task Type</h2>
        </div>
        <div className='Select'>
        <span> 
              <InputExample classname='type' id='Choice' type='radio' name='Type' onChange={ChoiceChange} value={isValue} text2='Choice Task'/>
              <InputExample classname='type' id='Decision' type='radio' name='Type'  onChange={DecisionChange} value={isValue} text2='Decision-Making Task'/>
              <InputExample classname='type' id='Sentence' type='radio' name='Type'  onChange={SentenceChange} value={isValue} text2='Sentence-Level Task'/>
          </span> 
          </div>
        <DescriptionTask TitleChange={InputChange} DescriptionChange={InputChange} DateChange={InputChange}/>
        {isValue === 'Choice' && isValue !== 'Decision' && isValue !== 'Sentence' ?<ChoiceTask ChoiceTask={InputChange} OptionOne={InputChange} OptionTwo={InputChange} OptionThree={InputChange}/>:<div></div>}
        {isValue === 'Decision' && isValue !== 'Choice' && isValue !== 'Sentence'?<DecisionTask DecisionTask={InputChange} YesDecision={InputChange} NoDecision={InputChange}/>:<div></div>}
        {isValue === 'Sentence' && isValue !== 'Decision' && isValue !== 'Choice'  ?<SentenceTask SentenceTask={InputChange}/>:<div></div>}
        {isValue !== 'Sentence' && isValue !== 'Decision' && isValue !== 'Choice' ?<SettingTask/>:<div></div>}
        <WorkerRequirement Require={InputChange} Reward={InputChange} Numbers={InputChange}/>
        <div>
        <Button variant="primary" onClick={handleSubmit} id='SubmitButton'>Save</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Register successfully!!!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>OK</Button>
        </Modal.Footer>
      </Modal>
        </div>
        </div>
        </div>
  );
}

export default App;
