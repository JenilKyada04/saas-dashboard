
function Footer() {
  return (
    <div className="flex justify-between items-center bg-white text-gray-500 px-4 py-3 pl-7 pr-10 md:mt-7 md:mb-5 ">
      <h5>&copy;<span className="pl-2">2023 Company name</span></h5>

      <div className="md:flex gap-4 cursor-pointer text-sm ">
        <h5 className="hover:underline" >About</h5>
        <h5 className="hover:underline" >Follow Us</h5>
        <h5 className="hover:underline">Contact Us</h5>
      </div>
      
    </div>
  )
}

export default Footer
