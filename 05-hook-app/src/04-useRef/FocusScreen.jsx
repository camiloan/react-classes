import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();
  // console.log(inputRef);
  const onClick = () => {
    // console.log(inputRef)
    // document.querySelector('input').select();
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className='form-control'
        type='text'
        placeholder='Ingrese su nombre'
      />
      <button className='btn btn-primary mt-2' onClick={onClick}>
        Set focus
      </button>
    </>
  );
};
