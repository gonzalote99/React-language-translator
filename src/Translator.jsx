import React, {useState} from 'react';
import copy from 'copy-to-clipboard';


function Translator() {
const [inputText, setInputText] = useState('');
const [translatedText, setTranslatedText] = useState('');

const handleInput = (e) => {
  setInputText(e.target.value);
}  

  const copyToClipboard = () => {
    copy(translatedText);
    alert(`translated copy"${translatedText}"`);
  }

  const handleoutput = () => {
    let inputCode = document.querySelector('#input-language-code').value;
    let outputCode = document.querySelector('#output-language-code').value;


    fetch('https://libretranslate.de/translate', {
      method: 'POST',
      body: JSON.stringify({
      q: inputText,
      source: inputCode,
      target: outputCode,
      format: 'text',
        }),
      headers: {"Content-Type" : "application/json"},
    })
    .then((res) => {
      return res.json();
    })

    .then((res) => {
      setTranslatedText(res.translatedText);
      console.log(res.translatedText);
    })
    .catch((err) => {
      setTranslatedText('');
      console.log('error', err);
    });
    

    
  };

  
  return(
    <>
    <h1 className='translator-heading'>language translator</h1>
      <div className='translator-container'>
      <div className='translator-input-container'>
      <div className='translator-input'>
      <span>translate from</span>
        <select name='' id='input-language-code'>
          <option value="en" selected>English</option>
          <option value="ar">Arabic</option>
          <option value="az">Azerbaijani</option>
          <option value="zh">Chinese</option>
          <option value="cs">Czech</option>
          <option value="nl">Dutch</option>
          <option value="eo">Esperanto</option>
          <option value="fi">Finnish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="el">Greek</option>
          <option value="hi">Hindi</option>
          <option value="hu">Hungarian</option>
          <option value="id">Indonesian</option>
          <option value="ga">Irish</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="fa">Persian</option>
          <option value="pl">Polish</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="sk">Slovak</option>
          <option value="es">Spanish</option>
          <option value="sv">Swedish</option>
          <option value="tr">Turkish</option>
          <option value="uk">Ukranian</option>
          <option value="vi">Vietnamese</option>
        </select>
      </div>
        <div className='translator-input'>
        <span>translate to</span>
          <select name='' id='output-language-code'>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="az">Azerbaijani</option>
            <option value="zh">Chinese</option>
            <option value="cs">Czech</option>
            <option value="nl">Dutch</option>
            <option value="eo">Esperanto</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="el">Greek</option>
            <option value="hi" selected>Hindi</option>
            <option value="hu">Hungarian</option>
            <option value="id">Indonesian</option>
            <option value="ga">Irish</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="fa">Persian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="sk">Slovak</option>
            <option value="es">Spanish</option>
            <option value="sv">Swedish</option>
            <option value="tr">Turkish</option>
            <option value="uk">Ukranian</option>
            <option value="vi">Vietnamese</option>
          </select>
        </div>
      </div>
        <div className='translator-box-container'>
        <textarea
           name=''
           id=''
          cols='30'
          rows='10'
          placeholder='enter text'
          value={inputText}
          onChange={(e) => handleInput(e)}
          ></textarea>
          <textarea
             name=''
             id=''
            cols='30'
            rows='10'
            placeholder='translated text'
            value={inputText?translatedText:''}
            onChange={() => ''}
            ></textarea>
        </div>
        <button className='translator-button' onClick={() => handleoutput()}>translate</button>
        <button onClick={() => copyToClipboard()}>copy translated text</button>
      </div>
    </>
  )
}

export default Translator;