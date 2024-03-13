import React from 'react'

const data = [
    {img:"/dashboard.png", text:"Dashboards"},
    {img:"/addJobs.png", text:"Add Jobs"},
    {img:"/liveJobs.png", text:"Live Jobs"},
    {img:"/team.png", text:"Team"},
    {img:"/credits.png", text:"Credits"},
    {img:"/vendor.png", text:"Vendors"},
    {img:"/integration.png", text:"Integration"},
    {img:"/aiScreening.png", text:"AI Screening"}
];

const data2 = [
    {img:"/help.png", text:"Help & Support"},
    {img:"/setting.png", text:"Settings"}
];


const MenuBar = () => {
  return (
    <div>
        <nav className ='w-[15vw] bg-black h-screen flex gap-8 flex-col py-8'>

            <div className='flex items-center justify-center  gap-2 text-[24px]'>
                <img src='/Vector 3.png'/>
                <span className='text-white'>REWORK AI</span>
            </div>
            
            <div className='flex flex-col gap-6 text-[15px] w-full justify-center items-center'>
                {data.map((value) => {
                    return <div key={value.text} className='flex gap-3 opacity-45 w-[50%]'>
                        <img src={value.img} />
                        <div className='text-white text-[15px]'>{value.text}</div>
                    </div>
                })}
                <hr className='opacity-45'/>
                {data2.map((value) => {
                    return <div key={value.text} className='flex gap-3 opacity-45 w-[50%]'>
                        <img src={value.img} />
                        <div className='text-white text-[15px]'>{value.text}</div>
                    </div>
                })}
                <div className='flex gap-3 w-[50%]'>
                    <img src='/logout.png'/>
                    <span className='text-[#FF0000]'>Logout</span>
                </div>
            </div>


        </nav>
    </div>
  )
}

export default MenuBar