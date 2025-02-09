import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { PhoneCallIcon, HomeIcon, MailIcon } from 'lucide-react';
const Cvmodel = ({ img, cvData, resumeRef, downloadPDF }) => {
    return (
        <div className=" bg-gray-50  h-[100vh] border-t-2  border-2 border-slate-500   overflow-y-scroll scrollbar-none  " style={{
            WebkitOverflowScrolling: 'touch', // For smooth scrolling on iOS
            scrollbarWidth: 'none', // Firefox
        }}>

            <div
                // Reference to the resume content
                className="shadow-md   flex p-[10px]  " ref={resumeRef}  >

                {/* Header */}
                <div className='flex flex-col bg-slate-300  p-[10px] gap-3 w-[40%]'>
                    <Avatar className='min-w-[230px]  min-h-[230px]'>
                        <AvatarImage src={img} alt="User Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-2xl font-bold  pb-2 ">Contact</h1>
                        <div className='flex  items-center  gap-2'>
                            <MailIcon className='w-4 h-4' />
                            <p className="text-lg mb-1 leading-[1.5]">{cvData.email}</p>
                        </div>
                        <div className='flex  items-center  gap-2'>
                            <PhoneCallIcon className='w-4  h-4' />

                            <p className="text-lg mb-1 leading-[1.5]">{cvData.phone}</p>
                        </div>
                        <div className='flex  items-center gap-2'>
                            <HomeIcon className='w-4 h-4 ' />
                            <p className="text-lg mb-1 leading-[1.5]">{cvData.address}</p>
                        </div>
                    </div>
                    {/* Skills Section */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">Skills</h2>
                        <ul className="list-none ml-6 ">
                            {cvData.skills.map((skill, index) => (
                                <li key={index} className="text-lg">{skill}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Education Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-2">Education</h2>
                        <ul className=" ml-6 list-none">
                            {cvData.education.map((edu, index) => (
                                <li key={index} className="text-lg  ">
                                    <strong>{edu.degree}</strong>
                                    <div className="">
                                        {edu.institution} ({edu.year})
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col  h-[100%] w-[60%]  '>
                    <h1 className='font-bold text-black pl-5  text-[50px]'>{cvData.name}</h1>
                    <h1 className=' text-slate-600 pl-5  text-[30px]'>{cvData.profession}</h1>
                    <div className="h-[4px] ml-4 w-[400px] mt-4 bg-slate-300"></div>
                    <h1 className='  pl-5 mt-4 font-bold  text-[25px]'>About me</h1>
                    <p className='ml-5  w-[400px]'>{cvData.description}</p>
                    <h1 className='  pl-5 mt-4 font-bold  text-[25px]'>Experience</h1>
                    <div>
                        <ul className=" ml-6 list-none list-outside">
                            {cvData.experience.map((edu, index) => (
                                <li key={index} className="text-lg   ">
                                    <strong>{edu.institution}</strong>
                                    <div className="text-slate-500">
                                        {edu.time}
                                    </div >
                                    <div className="text-[17px]">
                                        - {edu.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h1 className='  pl-5 mt-4 font-bold  text-[25px]'>Certification</h1>
                    <div>
                        <ul className=" ml-6 list-none list-outside g">
                            {cvData.certification.map((edu, index) => (
                                <li key={index} className="text-lg mb-2   ">
                                    <strong>- {edu.description}</strong> from <strong>({edu.institution})</strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h1 className='  pl-5 mt-4 font-bold  text-[25px]'>Projects</h1>
                    <div>
                        <ul className=" ml-6 list-none list-outside">
                            {cvData.projects.map((edu, index) => (
                                <li key={index} className="text-lg   ">
                                    <strong>- {edu.project}</strong>
                                    <div className=" text-[15px] w-[400px]">
                                        - {edu.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Download PDF Button */}
            <button
                onClick={downloadPDF}
                className="bg-blue-500 text-white py-2 px-6 fixed bottom-6 right-6 rounded mt-6 hover:bg-blue-600"
            >
                Download PDF
            </button>



        </div>

    )
}

export default Cvmodel