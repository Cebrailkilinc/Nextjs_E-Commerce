import React from 'react'

const Card = () => {
    return (
        <div className="w-72 bg-white shadow rounded">
            <div
                className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                style={{backgroundImage:`url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`}}
            >               
                <div className="flex justify-between">
                    <input type="checkbox" />
                    <button className="text-white hover:text-blue-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </button>
                </div>
                
                <div>
                    <span
                        className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none"
                    >
                        available
                    </span>
                </div>
            </div>
            <div className="p-4 flex flex-col items-center">
                <p className="text-gray-400 font-light text-xs text-center">
                    Hammond robotics
                </p>
                <h1 className="text-gray-800 text-center mt-1 text-[12px] ">Item name</h1>
                <div className='w-full flex items-center justify-between'>
                    <p className="text-center text-orange-400 mt-1 text-2xl">€1299</p>
                    <div className="inline-flex items-center mt-2">
                        <button
                            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-[2px] border-r border-gray-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M20 12H4"
                                />
                            </svg>
                        </button>
                        <div
                            className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-[2px] select-none"
                        >
                            2
                        </div>
                        <button
                            className="bg-white rounded-r  border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-[2px] border-r border-gray-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </button>

                    </div>
                </div>
                <button
                    className="py-2 px-4 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                >
                    Add to order
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </button>
                <div className="flex justify-between w-full mt-2 text-sm">
                    <div className="flex items-center text-gray-500">
                        <input id="input1" type="checkbox" className="mr-2" />
                        <label htmlFor="input1" className="select-none cursor-pointer">Compare</label>
                    </div>
                    <div>
                        <button
                            className="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
                            Add to List
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card