// Importing necessary dependencies from React
import React, { useState, useEffect } from 'react';

// Importing components from local files
import Create from './Create';
import Detail from './Detail';
import data1 from '../data/data.json';
import Delete from './Delete';

// Functional component named Home
export const Home = () => {

  // State to track whether the window width is greater than 768 pixels
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // State to manage task data
  const [data, setData] = React.useState(data1);

  // State for managing visibility of create task modal
  const [showCeate, setShowCreate] = React.useState(false);

  // State for managing visibility of task detail modal
  const [showDetail, setShowDetail] = React.useState(false);

  // State for managing visibility of delete confirmation modal
  const [confirm, setConfirm] = React.useState(false);

  // Function to handle window resize and update isDesktop state
  const handleResize = () => {
    setIsDesktop(window.innerWidth > 1080);
  };

  // Effect hook to add and remove resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // State to manage details of a specific task
  const [task1, setTask1] = useState({
    "Head": "",
    "description": "",
    "image": "",
    "startTime": "",
    "endTime": ""
  });

  // Function to toggle the visibility of create task modal
  function createTask() {
    setShowCreate(!showCeate);
    console.log(isDesktop);
  }

  // Function to show details of a specific task
  function showDetails(item) {
    if (!isDesktop)
      setShowDetail(!showDetail);
    console.log(item);

    setTask1(item);
  }

  // Function to handle completion of tasks
  function handleComplete() {
    setData(data1.filter(item => item.isCompleted));
  }

  // Function to handle displaying pending tasks
  function handlePending() {
    setData(data1);
  }

  // Function to handle task deletion
  function handleDelete(e) {
    setConfirm(!confirm);
    e.stopPropagation();
    console.log("raman");
  }

  // JSX rendering for the Home component
  return (
    <>
      {/* Header */}
      <div className='text-indigo-800 font-inter text-5xl font-extrabold'>Home</div>

      {/* Sort and create task buttons */}
      <div className='w-full flex flex-col md:flex-row justify-center mb-2'>
        {/* Sorting options */}
        <div className="w-full h-10 mb-2 md:w-1/2 bg-indigo-100 flex rounded-xl border border-indigo-900 border-2 items-center">
          {/* Sort by label */}
          <span className="w-full flex justify-center hidden font-bold lg:block md:w-1/3 text-purple-800 text-center ">Sort By</span>

          {/* Date Created button */}
          <div className="w-full flex justify-center hover:bg-cyan-600 text-gray-900 font-bold rounded-tl-lg rounded-bl-lg lg:rounded-none md:w-1/3 bg-indigo-400 text-white h-full  ">Date Created</div>

          {/* Due Date button */}
          <div className="w-full md:w-1/3  text-gray-800 hover:bg-cyan-600 hover:h-full font-bold  flex justify-center text-white rounded-br-lg rounded-tr-lg">Due date</div>
        </div>

        {/* Create New Task button (visible on mobile and hidden on larger screens) */}
        <div onClick={createTask} className="bg-blue-900 hover:bg-blue-500 flex justify-center  md:hidden lg:block lg:mx-2 h-10 rounded-xl item-center p-2 text-white rounded  items-center">
          Create New Task
        </div>
      </div>

      {/* Task list and details */}
      <div style={{ height: '50vh' }} className='flex justify-center '>
        <div class="grid w-full md:w-full lg:w-3/4 sm:w-full grid-cols-1 ">
          {/* Task List */}
          <div style={{ height: '70vh' }} class="col-span-2 flex rounded-xl w-full  md:col-span-1 bg-purple-200">
            <div className='w-full'>
              <div style={{ height: '70vh', background: "linear-gradient(180deg, rgba(213, 212, 255, 0.65) -1.73%, #F7F7FF 100%)" }} className="w-full  p-4  rounded-xl  overflow-y-auto">
                <div className='flex justify-between'>
                  <div className='flex text-2xl'>
                    Pending Tasks
                  </div>

                  {/* Create New Task button (visible on larger screens) */}
                  <div onClick={createTask} className="bg-blue-900 hidden md:block lg:hidden lg:mx-2 h-10 rounded-xl item-center p-3 text-white rounded  items-center">
                    Create New
                  </div>
                </div>

                {/* Task items */}
                {data.map(item => {
                  return (
                    <>
                      {
                        item.isCompleted ?
                          // Completed Task
                          <div data-aos="flip-down" onClick={() => showDetails(item)} className="w-full p-4 m-1 bg-green-200  rounded-2xl hover:border hover:bg-gray-200  hover:border-indigo-900  hover:border-2 flex delay-100 items-center justify-between">
                            <span className="text-gray-800">{item.head}</span>
                            <div className="flex">
                              <button onClick={handleDelete} className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Delete</button>
                            </div>
                          </div>
                          :
                          // Pending Task
                          <div data-aos="flip-up" onClick={() => showDetails(item)} className="w-full p-4 m-1 bg-white  rounded-2xl hover:border hover:bg-gray-200  hover:border-indigo-900  hover:border-2 flex delay-100 items-center justify-between">
                            <span className="text-gray-800">{item.head}</span>
                            <div className="flex">
                              <button onClick={handleDelete} className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Delete</button>
                              <button className="bg-lime-200 text-green-800 py-1 px-3 m-1 rounded">Complete</button>
                            </div>
                          </div>
                      }
                    </>
                  );
                })}
              </div>

              {/* Pending and Completed buttons */}
              <div style={{ height: '10vh' }} className="w-full   bg-purple-400 rounded-bl-2xl rounded-br-2xl flex items-center justify-between">
                {/* Pending button */}
                <div onClick={handlePending} className="bg-indigo-200 h-full text-black font-inter font-bold hover:bg-gray-400 delay-100 text-2xl text-white flex items-center justify-center h-full  w-1/2 rounded-bl-2xl"><div>Pending</div></div>

                {/* Completed button */}
                <div onClick={handleComplete} className="bg-purple-50 bg-opacity-90 text-black font-inter hover:bg-gray-400 delay-100 font-bold text-2xl flex items-center justify-center h-full text-white w-1/2 ounded"><div>Completed</div></div>
              </div>
            </div>

            {/* Task details (visible on larger screens) */}
            <div style={{ height: '80vh', background: "linear-gradient(180deg, rgba(213, 212, 255, 0.65) -1.73%, #F7F7FF 100%)" }} class="hidden lg:block col-span-2 md:col-span-1 lg:w-1/2   p-4">
              <div className="text-2xl text-left">Description</div>
              <div className="text-xl text-left">{task1.head}</div>
              <div className='text-left text-red-500 text-sm'>{task1.endTime}</div>
              <div className="text-xl text-left">{task1.description}</div>
              <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=600" alt="task-preview"></img>
            </div>
          </div>
        </div>
      </div>

      {/* Modal components */}
      {showCeate && <Create set={setShowCreate}/>}
      {showDetail && <Detail set={setShowDetail} task={task1} />}
      {confirm && <Delete set={setConfirm} />}
    </>
  );
};
