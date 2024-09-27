import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

// Komponen terpisah untuk input radio
const RadioOption = ({ id, name, value, label, onChangeHandler }) => (
  <li>
    <input type='radio' onChange={onChangeHandler} id={id} name={name} value={value} className='peer hidden' required />
    <label
      htmlFor={id}
      className='inline-flex w-full cursor-pointer items-center justify-between rounded bg-secondary p-2 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
    >
      <div className='w-full text-center'>
        <h2>{label}</h2>
      </div>
    </label>
  </li>
);

const Target = () => {
  const { handler } = useContext(GlobalContext);
  const { onChangeHandler } = handler;

  return (
    <div>
      <h3 className='mb-2 text-xl font-medium'>Target</h3>
      <div className='mb-5'>
        <ul className='grid w-full gap-2 md:grid-cols-3'>
          <RadioOption
            id='beratBadan'
            name='target'
            value='beratBadan'
            label='Menurunkan berat badan'
            onChangeHandler={onChangeHandler}
          />
          <RadioOption
            id='masaOtot'
            name='target'
            value='masaOtot'
            label='Meningkatkan massa otot'
            onChangeHandler={onChangeHandler}
          />
          <RadioOption
            id='atlit'
            name='target'
            value='atlit'
            label='Aktivitas Tinggi'
            onChangeHandler={onChangeHandler}
          />
        </ul>
      </div>
    </div>
  );
};

export default Target;
