import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {v4 as uuidv4} from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext";

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
      <FeedbackProvider>
      <>
        <Header/>
        
       <Router>

        <div className="container">
        <AboutIconLink/>
       <Routes>
       {/* Home Page */}
       <Route exact path='/' element={
           <>
           <FeedbackForm
            handleAdd={addFeedback}
        />
        <FeedbackStats feedback={feedback}/>
            <FeedbackList
                feedback = {feedback}
                handleDelete={deleteFeedback}
            />
            </>
       }
       
       >
        </Route>
        {/* About Page */}
    <Route path="/about" element={<AboutPage/>}>


    </Route>

        </Routes>
      
        </div>
        </Router>
        </>
        </FeedbackProvider>
    )
}

export default App;