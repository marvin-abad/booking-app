
export default function Hero() {
  return (
    <div><div className="home relative">
    <div className="hero h-[500px] flex items-center m-auto">
         <div className="heroText w-[50%] flex justify-center px-8">
                <h1 className="title text-8xl">
                      Giving the best experience just for you
                </h1>
         </div>
         <div className="list-button w-[50%]">
               <ul className="list-none">
                      <li className="border-b w-[30%] pb-2 text-[20px] hover:text-[24px] hover:text-amber-950 duration-200">
                            <a href="">Book a Hotel Services</a>
                      </li>
                      <li className="border-b w-[30%] mt-4 pb-2 text-[20px] hover:text-[24px] hover:text-amber-950 duration-200">
                            <a href="">Book a Room Services</a>
                      </li>
                      <li className="border-b w-[30%] mt-4 pb-2 text-[20px] hover:text-[24px] hover:text-amber-950 duration-200">
                            <a href="">View Services</a>
                      </li>
               </ul>
         </div>
    </div>
    <div className="heroImage h-[600px] bg-amber-950">
          <img className="w-full h-[400px] object-cover" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVsfGVufDB8fDB8fHww" alt="" />
          <h2 className="text w-[20%] p-12 text-white">
                We are Omah. The most comportable temporary residence for you. All convience in one place are available here.
          </h2>
    </div>
  </div></div>
  )
}
