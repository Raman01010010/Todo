import React from 'react'

export const Home = () => {
  return (
    <>
      <div className='text-indigo-800 font-inter text-8xl font-extrabold'>Home</div>
      <div className='flex justify-center m-4'>
        <div className="w-1/2 bg-purple-200 flex rounded-xl border border-indigo-900 border-2 items-center">
          <span className="w-1/3 text-white">sort by</span>
          <div className="w-1/3 bg-purple-500 text-white h-full  ">Date created</div>
          <div className="w-1/3 bg-purple-200 text-white h-full ">Due date</div>
        </div>
        <div className="bg-blue-900 mx-2 rounded-xl item-center p-3 text-white rounded  items-center">
          Create New  </div>
      </div>
      <div style={{ height: '70vh' }} className='flex  justify-center '>
        <div class="grid w-full md:w-3/4 sm:w-full grid-cols-1 ">
          <div class="col-span-2 flex rounded-xl w-full  md:col-span-1 bg-purple-200">

            <div>
              <div style={{ background: "linear-gradient(180deg, rgba(213, 212, 255, 0.65) -1.73%, #F7F7FF 100%)", width: "100vw", height: '60vh' }}

                className="  p-4  rounded-xl  overflow-y-auto">
                <div className='flex text-2xl'>
                  Pending Tasks</div>


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




              </div>
              <div style={{ height: '10vh' }} className="w-full   bg-purple-400 rounded flex items-center justify-between">

                <div className="bg-purple-500 h-full text-white  w-1/2 rounded">Pending</div>
                <div className="bg-purple-300 h-full text-white w-1/2 ounded">Completed</div>
              </div>

            </div>
            <div style={{ background: "linear-gradient(180deg, rgba(213, 212, 255, 0.65) -1.73%, #F7F7FF 100%)" }} class="hidden sm:block col-span-2 md:col-span-1   p-4">
              <div className="text-2xl">Description</div>
              <div className="text-xl text-left">This is a sample descis a sample descriptionis a sample descriptionis a sample descriptionription</div>
              <div className='text-left text-red-500 text-sm'>20-23-2022</div>
              <div className="text-xl text-left">This is a sample descis a sample descriptionis a sample descriptionis a sample descriptionription</div>
              <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
            </div>
          </div>




        </div>
      </div>
    </>
  )
}
