// // TODO: include your scss file here
import './styles/main.scss'
import './styles/form.scss'
import './styles/header.scss'
import handleSubmit from './js/formHandler'
window.addEventListener('load',()=>{
  let form =document.querySelector('#form');
  let input =document.querySelector('#articleUrl');
  let agreement=document.querySelector('#agreement');
  let subjectivity=document.querySelector("#subjectivity");
  let confidence=document.querySelector("#confidence");
  let irony=document.querySelector("#irony");
  let scoreTag=document.querySelector("#score_tag");
  console.log(input.value)
  form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    try {
        let response = await handleSubmit(input.value)        
        agreement.innerHTML = `Polarity: ${response.score_tag}`;
        subjectivity.innerHTML = `Agreement: ${response.agreement}`;
        confidence.innerHTML = `Subjectivity: ${response.subjectivity}`;
        irony.innerHTML = `Confidence: ${response.confidence}`;
        scoreTag.innerHTML = `Irony: ${response.irony}`;


    } catch (error) {
      console.log(error)
      alert('Error..could be invalid URL, please try with a valid URL.')
    }
  })

})