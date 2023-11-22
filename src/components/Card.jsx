import { useState } from "react";
import Question from "./Questions";
import './Card.css'
import Result from "./result";
function Card (){
    const [ques,setQues]=useState(0);
    const [clickedOption, setClickedOption]=useState(0);
    const[score,setScore]=useState(0);
    const[end,setEnd]=useState(false)

    const nextQuestion=()=>{ 
        checkScore();
        if(ques<Question.length-1){
            setQues(ques+1);
        }
        else{
            setEnd(true)
        }
    }
    const click=(i)=>{
        setClickedOption(i);
    }
    const checkScore = () => {
        console.log("clicked option is" ,clickedOption)
        console.log("the answer is", Question[ques].ans)
        console.log("the score is ",score)
        console.log(Question[ques].ans)
        if (clickedOption === Question[ques].ans && clickedOption !== null) {
            setScore(score + 1);
        }
    };
    return(
        <>
        {end?(
                <Result score={score} total={Question.length}></Result>
            ):(
                <div className="gameBox">
            <div className="questionSection">
                <div>{Question[ques].qn.map((qn) =>{
                    return(
                        <>
                            <ul>
                                <li>{qn}</li>
                            </ul>
                            
                        </>
                    )
                }
                )}</div>
            </div>
            <div className="optionSection">
                    {Question[ques].option.map((option,i) => {
                        return(
                            <>
                                <button onClick={()=>click(i+1)}>{option}</button>
                            </>
                        )
                    }
                    )}
                    
            </div>
            <div className="done">
                    <button onClick={()=>nextQuestion()}>Next</button>
                    </div>
            </div>
            )
        }
        </>
    )
}
export default Card;