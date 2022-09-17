import React, {Fragment} from "react";

const Skills = () => {

    return (
        <Fragment>
            <div 
            className="
                mt-24
                grid place-content-center 
                text-blue-600 dark:text-blue-500
                font-medium
                text-4xl
            "
            >
                Skills
            </div>

            <div //contenedor padre principal
                className="parentContainer"
            >
                <div //contenedor skills
                    className="skillsContainer"
                >
                        {/* contenedor de Datos */}
                        <div 
                            className="skillsContainerSecondary"
                        > 
                            <table className="table-auto m-5 ">
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="pr-5">
                                            <img className="w-[7vw] h-[7vw] p-3 ml-[2vw] rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"/>
                                        </td>
                                        <td className=" font-medium text-2xl">
                                            HTML 5
                                        </td>
                                        <td className="pl-10 font-medium text-2xl">
                                            Intermedio
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className=" ">
                                            <img className="w-[7vw] h-[7vw] p-3 ml-[2vw] rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"/>
                                        </td>
                                        <td className="font-medium text-2xl">
                                            PHP
                                        </td>
                                        <td className=" pl-10 font-medium text-2xl">
                                            Avanzado
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="pr-10">
                                            <img className="w-[7vw] h-[7vw] p-3 ml-[2vw] rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"/>
                                        </td>
                                        <td className="font-medium text-2xl">
                                            React
                                        </td>
                                        <td className="pl-10 font-medium text-2xl">
                                            Intermedio
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className=" pr-10">
                                            <img className="w-[7vw] h-[7vw] p-3 ml-[2vw] rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"/>
                                        </td>
                                        <td className=" font-medium text-2xl">
                                            Javascript
                                        </td>
                                        <td className=" pl-10 font-medium text-2xl">
                                            Basico
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>


            </div>
            
        </Fragment>
    )
}

export default Skills;