import './Result.css'
function Result(props){
    return(
        <div className="scoreBoard">
            <div className="scoreTitle">Score Board</div>
            <div className="score">
                <div>Total Score={props.score} </div>
                <div>Total Question={props.total}</div>
            </div>
        </div>
    )
}
export default Result