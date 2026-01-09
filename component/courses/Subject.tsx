import SubjectCard from './SubjectCard'

function subject() {
  return (
    <>
      <div className="bg-white rounded-xl mt-4  p-6  gap-3">

        {/* <img src="/img/icon/book.png" alt="" /> */}

        <div className='flex justify-between items-center '>
          <h6 className='font-semibold'>Popular Subjects</h6>
          <p className='text-blue-600 cursor-pointer' >See All</p>
        </div>
        <SubjectCard />

      </div>

    </>
  )
}

export default subject
