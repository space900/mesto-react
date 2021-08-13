const isGuest = false;

ReactDOM.render((
  <div>
    {isGuest ? (
    <h2>Добро пожаловать!</h2> ) : (
    <h2>Как мы рады, что вы вернулись!</h2>
      )}
  </div>
), document.querySelector('#root'));