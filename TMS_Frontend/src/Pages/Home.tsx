import { FaBus, FaRegCalendarAlt } from "react-icons/fa"

export function Home() {



    return (
        <>
            <div className="flex justify-center items-center w-[100%] h-[90vh]" >
                <div className=" h-[350px] w-[70%] flex bg-gray-200 border-gray-500 rounded-md shadow-lg  ">
                    <div className="flex-col w-[600px]">

                        <div className="flex gap-3 mx-11 mt-25 ">
                            <FaBus size={40} />
                            <input className="text-base rounded-lg border border-gray-300 w-full " type="text" placeholder="From" />
                        </div>


                        <div className="flex gap-3 mt-4 mx-11">
                            <FaBus size={40} />
                            <input className="text-base rounded-lg border border-gray-300 w-full" type="text" placeholder="To" />
                        </div>

                    </div>




                    <div className="w-full  flex justify-center items-center">

                  

                        <div className="" >
                        <FaRegCalendarAlt className="inline" size={40} />

                        <label htmlFor="journeydate" className="text-xl mx-10 mt-3">Journey Date</label>

                     <input className= "h-10 text-base block mt-3 rounded-lg border border-gray-300 w-[500px]" type="date" id="journeydate" placeholder="To" />
                     <button type="button" className=" mt-3 w-100 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show Buses</button>

                        </div>

                  

                </div>



                </div>


                











            </div>

        </>
    )
}