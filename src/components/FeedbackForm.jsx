import React, {useState} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {
 
    const[text,setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const [message, setMessage] = useState("")
   
    function handleInputText(event){
        if (text === ""){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== "" && text.trim().length <= 10){
            setMessage("Text must be at least 10 Characters")
            setBtnDisabled(true)
        }else{
            setMessage(null);
            setBtnDisabled(false)
        }
        const newValue = event.target.value;
        setText(newValue)

    }

    function handleSubmit(e){
        e.preventDefault()
        if(text.trim().length> 10){
            const newFeedback ={
                text,
                rating,
            }

           handleAdd(newFeedback)
           setText("")
        }
    }
 
    return (
   <Card>
       <form onSubmit={handleSubmit}>
           <h2>
               How would you rate our service with us?
           </h2>
           <RatingSelect
               select={(rating)=>setRating(rating)}

           />
           <div className='input-group'>
               <input onChange={handleInputText} type="text" placeholder='Write a review' value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
           </div>
           {message && <div className='message'>{message}</div>}
       </form>
   </Card>
  )
}

export default FeedbackForm