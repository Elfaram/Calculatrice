import './style.css';

const Input = ({ text, resultat }) => {
  return (
    <div className='input-wrap'>
      <div className='resultat'>
        <h1>{resultat}</h1>
      </div>
      <div className='text'>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Input;
