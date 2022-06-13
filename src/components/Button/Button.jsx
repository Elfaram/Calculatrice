import './style.css';

const Button = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className='button-wrap'
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default Button;
