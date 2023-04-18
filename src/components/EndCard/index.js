import './index.css'

const ScoreCard = props => {
  const {score, restartTheGame} = props

  const onClickRestart = () => {
    restartTheGame()
  }

  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="your-score-para">Your Score</p>
      <h1 className="score">{score}</h1>
      <button type="button" className="reset-button" onClick={onClickRestart}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
        />
        <p className="play-again">PLAY AGAIN </p>
      </button>
    </div>
  )
}

export default ScoreCard
