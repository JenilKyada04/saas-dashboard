import Topteacherscard from "./Topteacherscard"

function Topteachers() {
  return (
    <div>
      <>
            <div>

                <div className='bg-white text-black mt-4  mr-5  '>
                    <div className='  flex  justify-between  '>
                        <h1 className="font-semibold  left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-md" ><span className="pl-5 ">Teachers</span></h1>
                        <h6 className='text-blue-600 cursor-pointer'>See All</h6>
                    </div>
                </div>
                <div className='mt-5'>
                  <Topteacherscard />
                </div>

            </div>
        </>
    </div>
  )
}

export default Topteachers
