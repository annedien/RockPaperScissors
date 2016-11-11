

const Game = ({
    score,
    username,
    turn,
    choices
}) => {
    const checkWinner = (yourPick, opponentPick) => {
        if (yourPick === 'rock' && opponentPick === 'scissors') {
            store.dispatch(youWin());

        } else if (yourPick === 'rock' && opponentPick === 'paper') {
            store.dispatch(opponentWin());

        } else if (yourPick === 'rock' && opponentPick === 'rock') {
            // nothing happens

        } else if (yourPick === 'paper' && opponentPick === 'scissors') {
            store.dispatch(opponentWin());

        } else if (yourPick === 'paper' && opponentPick === 'paper') {
            // nothing happens

        } else if (yourPick === 'paper' && opponentPick === 'rock') {
            store.dispatch(youWin());

        } else if (yourPick === 'scissors' && opponentPick === 'scissors') {
            // nothing happens

        } else if (yourPick === 'scissors' && opponentPick === 'paper') {
            store.dispatch(youWin());

        } else if (yourPick === 'scissors' && opponentPick === 'rock') {
            store.dispatch(opponentWin());
        }
    }
    return (
        <section className={choices}>
          <Game turn={turn} onSelect={(choice) => {
            store.dispatch(setyourChoice(choice));
            store.dispatch(opponentTurn());
          }} />
          <Score score={score} username={username} />
          <ComputerBoard turn={turn} onSelect={(weapon) => {
            store.dispatch(playerTurn());
            store.dispatch(setComputerWeapon(weapon));
            checkWinner(store.getState().weapons.player, store.getState().weapons.computer);
          }}  />
        </section>
    )
};
