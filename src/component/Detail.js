import React, { useState } from 'react';

const Detail = (props) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };











    return (
        <>
            {isOpen && (
                <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80">
                    <div className="bg-white w-1/4 rounded-lg">
                        <div className="flex justify-end">
                            <div onClick={handleClose} className=''>Close</div>
                        </div>

                        <div style={{ height: '80vh', background: "linear-gradient(180deg, rgba(213, 212, 255, 0.65) -1.73%, #F7F7FF 100%)" }} class="  p-4">
                            <div className="text-2xl text-left">Description</div>
                            <div className="text-xl text-left">This is a sample descis a sample descriptionis a sample descriptionis a sample descriptionription</div>
                            <div className='text-left text-red-500 text-sm'>20-23-2022</div>
                            <div className="text-xl text-left">This is a sample descis a sample descriptionis a sample descriptionis a sample descriptionription</div>
                            <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Detail;
