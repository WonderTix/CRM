/* eslint-disable react/react-in-jsx-scope */
import Navigation from '../Navigation';
import Tasks from './Tasks';


const TasksMain=() =>{
  return (
    <div className='flex flex-row  '>
      <Tasks/>
      <Navigation icon={undefined}/>
    </div>
  );
};

export default TasksMain;