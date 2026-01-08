import Reminderscard from "./Reminderscard"




function Reminders() {
    return (
        <>
            <div>

                <div className='bg-white text-black mt-2 w-full '>
                    <div className='flex justify-between'>
                        <h1>Reminders</h1>
                        <h6 className='text-blue-600 cursor-pointer'>See All</h6>
                    </div>
                </div>

                <Reminderscard />

            </div>
        </>

    )
}

export default Reminders
