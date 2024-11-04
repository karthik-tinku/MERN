import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const Experience = () => {
    return (
        <div id="Experience" className="p-10 md:p-24">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
            <div className="flex flex-wrap items-center justify-around">
                <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaHtml5 color="#E34F26" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaCss3 color="#1572B6" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <RiTailwindCssFill color="#61DAFB" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaJs color="#F7DF1E" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaReact color="#61DAFB" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <RiNextjsFill color="#FFFFFF" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaNodeJs color="#689753" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiExpress color="#FFFFFF" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiMongodb color="#4EF007" size={50} />
                    </span>


                </div>
                <div>
                    <div className="flex gap-10 slate-950 bg-opacity-45 mt-4 rounded lg p-4 items-center">
                        
                        <span className="text-white">
                        <h2 className="mb-1">JPMorgan Chase & Co</h2>
                            <h2 className="leading-tight">Software Engineering Virtual Internship</h2>
                            <p className="text-sm leading-tight font-thin">June 2024- July 2024</p>

                            <ul className="text-sm p-2">
                                <li>- Real-Time Stock Price Feed: Developed live 5s updates.</li>
                                <li>- JPMorgan Frameworks Mastery: Built 10k+ LOC app.</li>
                                <li>- Python-JS Integration: Achieved 40% faster processing.</li>
                                <li>- Market Analytics Tools: Enhanced insights for 200+ users.</li>
                            </ul>
                        </span>

                    </div> 

                </div>
            </div>

        </div>
    )
}

export default Experience
