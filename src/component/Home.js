import React, { useState, useEffect } from 'react'
import Create from './Create'
import Detail from './Detail'
import data1 from '../data/data.json'
import Delete from './Delete'
export const Home = () => {


  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Adjust the threshold as needed
  const [data, setData] = React.useState(data1)

  const [showCeate, setShowCreate] = React.useState(false)
  const [showDetail, setShowDetail] = React.useState(false)
  const [confirm, setConfirm] = React.useState(false)
  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768); // Adjust the threshold as needed
  };

  useEffect(() => {
    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const [task1, setTask1] = useState({
    "Head": "",
    "description": "",
    "image": "",
    "startTime": "",
    "endTime": ""
  })

  function createTask() {
    setShowCreate(!showCeate)
    console.log(isDesktop)
  }

  function showDetails(item) {
    if (!isDesktop)
      setShowDetail(!showDetail)
    console.log(item)

    setTask1(item)
  }
  function handleComplete() {
    setData(data1.filter(item => item.isCompleted));
  }

  function handlePending() {
    setData(data1)
  }
  function handleDelete(e) {
    setConfirm(!confirm);
    e.stopPropagation();
    console.log("raman")

  }







  return (
    <>
      <div className='text-indigo-800 font-inter text-5xl font-extrabold'>Home</div>
      <div className='w-full flex flex-col md:flex-row justify-center mb-2'>
        <div className="w-full h-10 mb-2 md:w-1/2 bg-indigo-100 flex rounded-xl border border-indigo-900 border-2 items-center">
          <span className="w-full flex justify-center hidden font-bold  lg:block md:w-1/3 text-purple-800 text-center ">Sort By</span>
          <div className="w-full  flex justify-center hover:bg-cyan-600 text-gray-900 font-bold rounded-tl-lg rounded-bl-lg lg:rounded-none md:w-1/3 bg-indigo-400 text-white h-full  ">Date Created</div>
          <div className="w-full md:w-1/3  text-gray-800 hover:bg-cyan-600 hover:h-full font-bold  flex justify-center text-white rounded-br-lg rounded-tr-lg">Due date</div>
        </div>
        <div onClick={createTask} className="bg-blue-900 hover:bg-blue-500 flex justify-center  md:hidden lg:block lg:mx-2 h-10 rounded-xl item-center p-2 text-white rounded  items-center">
          Create New Task
        </div>
      </div>
      <div style={{ height: '50vh' }} className='flex  justify-center '>
        <div class="grid w-full md:w-full lg:w-3/4 sm:w-full grid-cols-1 ">
          <div style={{ height: '70vh' }} class="col-span-2 flex rounded-xl w-full  md:col-span-1 bg-purple-200">

            <div className='w-full'>
              <div style={{ height: '70vh', background: "linear-gradient(180deg, rgba(213, 212, 255, 0.65) -1.73%, #F7F7FF 100%)" }}

                className="w-full  p-4  rounded-xl  overflow-y-auto">
                <div className='flex justify-between'>
                  <div className='flex text-2xl'>
                    Pending Tasks</div>
                  <div onClick={createTask} className="bg-blue-900 hidden md:block lg:hidden lg:mx-2 h-10 rounded-xl item-center p-3 text-white rounded  items-center">
                    Create New
                  </div>
                </div>



                {data.map(item => {
                  return (<>{
                    item.isCompleted ?
                      <div data-aos="flip-down" onClick={() => showDetails(item)} className="w-full p-4 m-1 bg-green-200  rounded-2xl hover:border hover:bg-gray-200  hover:border-indigo-900  hover:border-2 flex delay-100 items-center justify-between">
                        <span className="text-gray-800">{item.head}</span>
                        <div className="flex">
                          <button onClick={handleDelete} className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Delete</button>
                        </div>
                      </div>
                      :
                      <div data-aos="flip-up" onClick={() => showDetails(item)} className="w-full p-4 m-1 bg-white  rounded-2xl hover:border hover:bg-gray-200  hover:border-indigo-900  hover:border-2 flex delay-100 items-center justify-between">
                        <span className="text-gray-800">{item.head}</span>
                        <div className="flex">
                          <button onClick={handleDelete} className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Delete</button>
                          <button className="bg-lime-200 text-green-800 py-1 px-3 m-1 rounded">Complete</button>
                        </div>
                      </div>}

                  </>)
                })}






              </div>
              <div style={{ height: '10vh' }} className="w-full   bg-purple-400 rounded-bl-2xl rounded-br-2xl flex items-center justify-between">

                <div onClick={handlePending} className="bg-indigo-200 h-full text-black font-inter font-bold hover:bg-gray-400 delay-100 text-2xl text-white flex items-center justify-center h-full  w-1/2 rounded-bl-2xl"><div>Pending</div></div>
                <div onClick={handleComplete} className="bg-purple-50 bg-opacity-90 text-black font-inter hover:bg-gray-400 delay-100 font-bold text-2xl flex items-center justify-center h-full text-white w-1/2 ounded"><div>Completed</div></div>
              </div>

            </div>
            <div style={{ height: '80vh', background: "linear-gradient(180deg, rgba(213, 212, 255, 0.65) -1.73%, #F7F7FF 100%)" }} class="hidden lg:block col-span-2 md:col-span-1 lg:w-1/2   p-4">
              <div className="text-2xl text-left">Description</div>
              <div className="text-xl text-left">{task1.head}</div>
              <div className='text-left text-red-500 text-sm'>{task1.endTime}</div>
              <div className="text-xl text-left">{task1.description}</div>
              <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
            </div>
          </div>




        </div>
      </div>
      {showCeate && <Create set={setShowCreate}/>}
      {showDetail && <Detail set={setShowDetail} task={task1} />}
      {confirm && <Delete set={setConfirm} />}
    </>
  )
}
