import { useState } from "react";

import {v4 as uuidv4} from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
function App(){

    const [feedback, setFeedback] = useState(FeedbackData)
    
    function deleteFeedback(id){
        setFeedback(feedback.filter((item)=>item.id !== id))

    }

    function addFeedback(newFeedback){
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    
    return (
        <>
        <Header/>
        <FeedbackForm
            handleAdd={addFeedback}
        />
        <div className="container">
        <FeedbackStats feedback={feedback}/>
            <FeedbackList
                feedback = {feedback}
                handleDelete={deleteFeedback}
            />
        </div>
        </>
    )
}

export default App;