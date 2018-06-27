module.exports = function Connect4() {
  this.board = Array(7).fill([]).map(() => Array(6).fill(null));
  this.player = 'Player 1';
}

Connect4.prototype.play = function(col) {
  let row = this.board[col].indexOf(null);
  if (row != -1) {
    let disc = {
      player: this.player,
      col: col,
      row: row,
    };
    this.board[col][row] = disc;
    return this.checkForWinner(disc) || this.toggleTurn();
  } else return 'Column full!';
};

Connect4.prototype.toggleTurn = function() {
  let currentPlayer = this.player;
  this.player = this.player === 'Player 1' ? 'Player 2' : 'Player 1';
  return `${currentPlayer} has a turn`;
}

Connect4.prototype.checkForWinner = function(disc) {
  return this.axisCheck(disc, 'y = x') ||
    this.axisCheck(disc, 'x-axis') ||
    this.axisCheck(disc, 'y = -x') ||
    this.axisCheck(disc, 'y-axis');
}


Connect4.prototype.axisCheck = function(disc, axis) {
  let fwd;
  let bwd;
  switch (axis) {
    case 'y = x':
      {
        fwd = this.chain([], disc, 1, 1);
        bwd = this.chain([], disc, -1, -1);
      }
      break;
    case 'x-axis':
      {
        fwd = this.chain([], disc, 1, 0);
        bwd = this.chain([], disc, -1, 0);
      }
      break;
    case 'y = -x':
      {
        fwd = this.chain([], disc, 1, -1);
        bwd = this.chain([], disc, -1, 1);
      }
      break;
    case 'y-axis':
      {
        bwd = this.chain([], disc, 0, -1);
      }
      break;
  }
  let elementLine = (fwd) ? bwd.concat(disc).concat(fwd) : [disc].concat(bwd);
  if (elementLine.length === 4) {
    this.play = () => `Game has finished!`;
    return `${disc.player} wins!`
  } else return null;
}

Connect4.prototype.chain = function(store, {player, col, row}, x, y) {
  if (col + x > 6 || col + x < 0 || row + y > 5 || row + y < 0)
    return store;
  let disc = this.board[col][row];
  let nextDisc = this.board[col + x][row + y];
  if (!nextDisc || nextDisc.player != player)
    return store;
  else {
    store.push(nextDisc);
    return store.length === 3 ? store : this.chain(store, nextDisc, x, y);
  }
}