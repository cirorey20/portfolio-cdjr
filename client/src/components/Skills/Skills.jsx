import React, {Fragment} from "react";

const Skills = () => {

    return (
        <Fragment>
            <div 
            className="
                mt-24
                grid place-content-center 
                text-3xl"
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
                                        <td className="bg-red-100 pr-5">
                                            IMG:
                                        </td>
                                        <td className="bg-red-400">
                                            HTML 5
                                        </td>
                                        <td className="bg-red-400 pl-10">
                                            Intermedio
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 ">
                                            IMG
                                        </td>
                                        <td className="bg-red-400 pl-10">
                                            PHP
                                        </td>
                                        <td className="bg-red-400 pl-10">
                                            Avanzado
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 pr-10">
                                            IMG
                                        </td>
                                        <td className="bg-red-400 pl-10">
                                            React
                                        </td>
                                        <td className="bg-red-400 pl-10">
                                            Intermedio
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 pr-10">
                                            IMG
                                        </td>
                                        <td className="bg-red-400 pl-10">
                                            Javascript
                                        </td>
                                        <td className="bg-red-400 pl-10">
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