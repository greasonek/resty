import { useState } from 'react';

const Form = (props) => {
  // const {appState, setAppState} = props;
  const [formData, setFormData] = useState({
    method:'GET',
    url: '',
    body: '',
  }); 
  const handleSubmit = e => {
    e.preventDefault();
    props.handleApiCall(formData);
  }
const handleOnFormChange = (e) => {
  const {name, value} = e.target;
  setFormData({...formData, [name]: value});
}

const handleButtonClick = (e) => {
  setFormData({...formData, method: e.target.id});
}

const handleTextArea = (e) => {
  setFormData({...formData, body: e.target.value});
}
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

    <form onSubmit={handleSubmit} style={{ textAlign: 'center'}}>
      <label >
        <span><b>URL</b>: </span>
        <input 
          data-testid='formInput' 
          name='url' 
          type='text' 
          value={formData.url} 
          onChange={handleOnFormChange}
          style={{
            marginRight: '10px',
            padding: '10px',
            borderRadius: '5px'
        }}/>
        <button 
        data-testid ='goButton' 
        type="submit" 
        onClick={() => {handleButtonClick}} 
        style={{
          background: 'ivory',
          color: 'black',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        >GO!</button>
      </label>
      <label className="methods">
        <button id="get" onClick={handleButtonClick}
        style={{background:'ivory', margin: '5px', borderRadius: '5px'}}>GET</button>
        <button id="post" onClick={handleButtonClick} 
        style={{background:'ivory', margin: '5px', borderRadius: '5px'}}>POST</button>
        <button id="put" onClick={handleButtonClick}
        style={{background:'ivory', margin: '5px', borderRadius: '5px'}}>PUT</button>
        <button id="delete" onClick={handleButtonClick}
        style={{background:'ivory', margin: '5px', borderRadius: '5px'}}>DELETE</button>
      </label>
    {(formData.method === 'post' || formData.method === 'put') && <textarea 
    data-testid='inputText' 
    rows='12' 
    cols='33' 
    value={formData.body} 
    onChange={handleTextArea}
    name='body' 
    style={{
      marginTop: '10px',
      padding: '5px',
      borderRadius: '5px',
      display: 'flex',
    }}/>}
    </form>
    </div>
  </>
    // text area html area
    // make some state to be value of the text area ('body'?)
    // create onChange handler for the text area that updates state
    // can copy setState for form data kinda, change body instead of formData, body might be string? or object?
  )
}



export default Form;