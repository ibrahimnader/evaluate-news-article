import { validateUrl, post } from "./helpers";

const handleSubmit= (val)=>{
    
    let isUrl = validateUrl(val);
    if (isUrl) {
      return  post(val);
    } else {
        alert('The Url you entered is not valid, try again with a valid one')
    }
  }
  export default handleSubmit
