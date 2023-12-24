import React, { useState } from 'react';

const Create = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };









    const NewTaskComponent = () => {
        const [task, setTask] = useState({
            title: '',
            description: '',
            dueDate: '2023-11-15',
            image: null,
        });

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setTask({ ...task, [name]: value });
        };

        const handleImageChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setTask({ ...task, image: reader.result });
                };
                reader.readAsDataURL(file);
            }
        };

        const handleSave = () => {
            // Logic to save the task
            console.log('Task saved:', task);
        };

        const handleClose = () => {
            setIsOpen(false);
        };

        return (
            <div className="w-full max-w-md mx-auto rounded-lg">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg text-left text-blue-800 font-bold mb-3">New Task</h2>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className=" hover:bg-blue-200 hover:border-2 hover:border-solid hover:border-blue-800 hover:text-blue-800 w-full p-2 mb-3 bg-indigo-200 border rounded border-gray-300 rounded-xl"
                        onChange={handleInputChange}
                    />
                    <textarea

                        name="description"
                        placeholder="Description..."
                        style={{ height: '40vh' }}
                        className=" hover:bg-blue-200 hover:border-2 hover:border-solid hover:border-blue-800 hover:text-blue-800 w-full bg-indigo-200  p-2 mb-3 border rounded border-gray-300 rounded-xl"
                        onChange={handleInputChange}
                    />
                    <div className="flex h-10 bg-indigo-200 items-center justify-between mb-3 rounded-xl">
                        <span className="p-3">Due on: {task.dueDate}</span>
                        <div className="bg-indigo-600 w-1/3 text-sm text-white px-3 h-full py-1 rounded-tr-xl hover:bg-blue-200 hover:border-2 hover:border-solid hover:border-blue-500 hover:text-blue-800 rounded-br-xl">Change</div>
                    </div>
                    <div className="flex items-center flex bg-indigo-200 h-10 justify-between mb-3 rounded-xl">
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="image-input"
                        />
                        <label htmlFor="image-input" className="cursor-pointer flex justify-between h-full w-full">
                            <span className="p-3">Preview:</span>
                            <div className="bg-indigo-600 hover:bg-blue-200 hover:border-2 hover:border-solid hover:border-blue-500 hover:text-blue-800 w-1/3 text-sm text-white px-3 h-full py-1 rounded-tr-xl rounded-br-xl">
                                Add Image
                            </div>
                        </label>
                    </div>
                    {task.image && (
                        <div className="mb-3">
                            <img src={task.image} alt="Preview" className="w-full h-32 object-cover rounded-xl" />
                        </div>
                    )}
                    <div className="flex items-center justify-between">
                        <div onClick={handleClose} className="h-12 w-full hover:text-white hover:bg-blue-800 hover:border-2 hover:border-solid hover:border-blue-500 text-black px-3 py-1 rounded-lg cursor-pointer flex items-center justify-center h-full">
                            <div className='text-center'> Cancel</div>
                        </div>
                        <div
                            className="bg-indigo-600 h-12 w-full hover:bg-blue-200 hover:border-2 hover:border-solid hover:border-blue-500 text-white px-3 py-1 rounded-lg cursor-pointer"
                            onClick={handleSave}
                        >
                            Save
                        </div>
                    </div>
                </div>
            </div>
        );
    };





    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80">
                    <div className="bg-white  rounded-lg">
                        <div className="flex justify-end">

                        </div>
                        <NewTaskComponent />
                    </div>
                </div>
            )}
        </>
    );
};

export default Create;
