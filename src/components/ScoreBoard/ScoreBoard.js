import './ScoreBoard.css';

const ScoreBoard = ({scoreX, scoreO}) => (
    <div className="score-board">
        <div>Jugador X:{scoreX}</div>
        <div>Jugador O:{scoreO}</div>
    </div>
)

export default ScoreBoard;