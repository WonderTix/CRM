/* eslint-disable react/react-in-jsx-scope */
import Dashboard from './Dashboard';
import Navigation from './Navigation';


const Dashmain=() =>{
  return (
    <div className='flex flex-row  '>
      <Dashboard/>
      <Navigation icon={undefined}/>
    </div>
  );
};

export default Dashmain;