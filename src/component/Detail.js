import React, { useState } from 'react';

const Detail = (props) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        props.set(false)
    };


const task=props.task








    return (
        <>
            {isOpen && (
                <div data-aos="flip-right" className="bg-opacity-30 backdrop-blur-md p-4 rounded-lg bg-gray-200 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80">
                    <div className="bg-white w-full lg:w-1/4 rounded-lg">
                        

                        <div style={{ height: '90vh', background: "linear-gradient(180deg, rgba(213, 212, 255, 0.65) -1.73%, #F7F7FF 100%)" }} className="rounded-xl overflow-y-auto  p-8">
                        <div className="flex justify-end">
                            <div onClick={handleClose} className='text-2xl'>X</div>
                        </div>
                            <div className="text-2xl text-left">Description</div>
                            <div className="text-xl text-left">{task.head}</div>
                            <div className='text-left text-red-500 text-sm'>{task.endTime}</div>
                            <div className="text-xl text-left">{task.description}</div>
                            <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Detail;
