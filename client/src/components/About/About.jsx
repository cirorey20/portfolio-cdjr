import React, {Fragment} from "react";

const About = () => {

    return (
        <Fragment>
            <div 
            className="
                mt-10
                grid place-content-center 
                text-3xl"
            >
                About Me
            </div>

            <div //contenedor padre principal
                className="parentContainer"
            >
                <div //contenedos padre de datos y sobre mi
                    className="dataAboutContainer"
                >
                        {/* contenedor de Datos */}
                        <div 
                            className="dataContainer"
                        > 
                            <img 
                                className="avatarImg"
                                src="https://flowbite.com/docs/images/logo.svg" 
                                alt="me" 
                            />
                            <table className="table-auto m-5 ">
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 pr-10">
                                            Name:
                                        </td>
                                        <td className="bg-red-400 pl-10">
                                            Ciro Rey
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 pr-10">
                                            Lugar:
                                        </td>
                                        <td className="bg-red-400 pl-10">
                                            Buenos Aires, Argentina
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 pr-10">
                                            Email:
                                        </td>
                                        <td className="bg-red-400 pl-10">
                                            cirolakjsdas@asd.com
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 pr-10">
                                            Web:
                                        </td>
                                        <td className="bg-red-400 pl-10">
                                            asdasd.com
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* contenedor de Sobre mi */}
                        <div className="bg-red-300 basis-1/2">
                            <div className="grid place-content-center ">Hello</div>
                            <div className="grid place-content-center ">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quod similique quidem porro a, alias facere tenetur, doloribus et dolore, enim velit quo culpa odit sapiente illo aperiam veritatis ipsum!
                                Nulla, quod consectetur officia odio aut, nesciunt quasi facere iusto ipsum vitae explicabo culpa deleniti laudantium deserunt vel, nihil voluptate quidem quisquam voluptatum! Numquam voluptatibus ad.
                            </div>
                            <div className="grid place-content-center mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quod similique quidem porro a, alias facere tenetur, doloribus et dolore, enim velit quo culpa odit sapiente illo aperiam veritatis ipsum!
                                Nulla, quod consectetur officia odio aut, nesciunt quasi facere iusto ipsum vitae explicabo culpa deleniti laudantium deserunt vel, nihil voluptate quidem quisquam voluptatum! Numquam voluptatibus ad.
                            </div>

                        </div>
                </div>


            </div>
            
        </Fragment>
    )
}

export default About;