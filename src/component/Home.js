import React,{useState} from 'react'
import Create from './Create'
import Detail from './Detail'

export const Home = () => {
  const [showCeate,setShowCreate]=React.useState(0)
  const [showDetail,setShowDetail]=React.useState(0)
function createTask(){
  setShowCreate(!showCeate)
}

function showDetails(){
  setShowDetail(!showDetail)
}



  return (
    <>
      <div className='text-indigo-800 font-inter text-5xl font-extrabold'>Home</div>
      <div className='w-full flex flex-col md:flex-row justify-center mb-2'>
        <div className="w-full h-10 mb-2 md:w-1/2 bg-purple-200 flex rounded-xl border border-indigo-900 border-2 items-center">
          <span className="w-full  hidden lg:block md:w-1/3 text-white text-center md:text-left">sort by</span>
          <div className="w-full  rounded-tl-lg rounded-bl-lg lg:rounded-none md:w-1/3 bg-purple-500 text-white h-full  ">Date created</div>
          <div className="w-full md:w-1/3 bg-purple-200 text-white h-full rounded-lg">Due date</div>
        </div>
        <div onClick={createTask} className="bg-blue-900  md:hidden lg:block lg:mx-2 h-10 rounded-xl item-center p-3 text-white rounded  items-center">
          Create New
        </div>
      </div>
      <div style={{ height: '50vh' }} className='flex  justify-center '>
        <div class="grid w-full md:w-full lg:w-3/4 sm:w-full grid-cols-1 ">
          <div style={{height:'70vh'}}class="col-span-2 flex rounded-xl w-full  md:col-span-1 bg-purple-200">

            <div className='w-full'>
              <div  style={{height:'70vh', background: "linear-gradient(180deg, rgba(213, 212, 255, 0.65) -1.73%, #F7F7FF 100%)" }}

                className="w-full  p-4  rounded-xl  overflow-y-auto">
              <div className='flex justify-between'>
                <div className='flex text-2xl'>
                  Pending Tasks</div>
                  <div className="bg-blue-900 hidden md:block lg:hidden lg:mx-2 h-10 rounded-xl item-center p-3 text-white rounded  items-center">
          Create New
        </div>
        </div>
                <div onClick={showDetails} className="w-full p-4 m-1 bg-white  rounded flex items-center justify-between">
                  <span className="text-gray-800">Sort by</span>
                  <div className="flex">
                    <button className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Deleted</button>
                    <button className="bg-lime-200 text-green-800 py-1 px-3 m-1 rounded">Complete</button>
                  </div>
                </div>



                <div className="w-full p-4 m-1 bg-white  rounded flex items-center justify-between">
                  <span className="text-gray-800">Sort by</span>
                  <div className="flex">
                    <button className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Deleted</button>
                    <button className="bg-lime-200 text-green-800 py-1 px-3 m-1 rounded">Complete</button>
                  </div>
                </div>




                <div className="w-full p-4 m-1 bg-white  rounded flex items-center justify-between">
                  <span className="text-gray-800">Sort by</span>
                  <div className="flex">
                    <button className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Deleted</button>
                    <button className="bg-lime-200 text-green-800 py-1 px-3 m-1 rounded">Complete</button>
                  </div>
                </div>

<div className="w-full p-4 m-1 bg-white  rounded flex items-center justify-between">
  <span className="text-gray-800">Sort by</span>
  <div className="flex">
    <button className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Deleted</button>
    <button className="bg-lime-200 text-green-800 py-1 px-3 m-1 rounded">Complete</button>
  </div>
</div>
                <div className="w-full p-4 m-1 bg-white  rounded flex items-center justify-between">
                  <span className="text-gray-800">Sort by</span>
                  <div className="flex">
                    <button className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Deleted</button>
                    <button className="bg-lime-200 text-green-800 py-1 px-3 m-1 rounded">Complete</button>
                  </div>
                </div>
                <div className="w-full p-4 m-1 bg-white  rounded flex items-center justify-between">
                  <span className="text-gray-800">Sort by</span>
                  <div className="flex">
                    <button className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Deleted</button>
                    <button className="bg-lime-200 text-green-800 py-1 px-3 m-1 rounded">Complete</button>
                  </div>
                </div><div className="w-full p-4 m-1 bg-white  rounded flex items-center justify-between">
                  <span className="text-gray-800">Sort by</span>
                  <div className="flex">
                    <button className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Deleted</button>
                    <button className="bg-lime-200 text-green-800 py-1 px-3 m-1 rounded">Complete</button>
                  </div>
                </div>
                <div className="w-full p-4 m-1 bg-white  rounded flex items-center justify-between">
                  <span className="text-gray-800">Sort by</span>
                  <div className="flex">
                    <button className="bg-red-200 text-red-900 py-1 px-3 m-1 rounded">Deleted</button>
                    <button className="bg-lime-200 text-green-800 py-1 px-3 m-1 rounded">Complete</button>
                  </div>
                </div>




              </div>
              <div style={{ height: '10vh' }} className="w-full   bg-purple-400 rounded flex items-center justify-between">

                <div className="bg-purple-500 h-full text-white  w-1/2 rounded">Pending</div>
                <div className="bg-purple-300 h-full text-white w-1/2 ounded">Completed</div>
              </div>

            </div>
            <div style={{ height:'80vh' ,background: "linear-gradient(180deg, rgba(213, 212, 255, 0.65) -1.73%, #F7F7FF 100%)" }} class="hidden lg:block col-span-2 md:col-span-1 lg:w-1/2   p-4">
              <div className="text-2xl text-left">Description</div>
              <div className="text-xl text-left">This is a sample descis a sample descriptionis a sample descriptionis a sample descriptionription</div>
              <div className='text-left text-red-500 text-sm'>20-23-2022</div>
              <div className="text-xl text-left">This is a sample descis a sample descriptionis a sample descriptionis a sample descriptionription</div>
              <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
            </div>
          </div>




        </div>
      </div>
      {showCeate&&<Create/>}
      {showDetail&&<Detail/>}
    </>
  )
}
