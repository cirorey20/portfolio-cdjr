import React, {Fragment} from "react";

const Skills = ({skillsTech}) => {

    return (
        <Fragment>
            <div 
            className="titleSections">Skills</div>

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
                                {
                                    skillsTech?.map((item, index)=>{
                                        return (
                                            <tbody key={index} className="">
                                                <tr className=" ">
                                                    <td className="pr-5">
                                                        <img className="w-[7vw] h-[7vw] p-3 ml-[2vw] rounded-full"
                                                             src={item.img} 
                                                             alt="Rounded avatar"
                                                        />
                                                    </td>
                                                    <td className=" font-medium text-2xl">
                                                        {item.name}
                                                    </td>
                                                    <td className="pl-10 font-medium text-2xl">
                                                        {item.level}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                              
                            </table>
                        </div>
                </div>


            </div>
            
        </Fragment>
    )
}

export default Skills;