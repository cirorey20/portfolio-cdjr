import React, {Fragment, useEffect} from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { getPots } from '../../redux/actions/index';

const About = () => {

    // const dispatch = useDispatch();
    // const allPosts = useSelector( ( state ) => state.posts);

    // useEffect(()=>{
    //     dispatch(getPots());
    //     console.log("HOlaaa", allPosts);
    // }, [dispatch])

    return (
        <Fragment>
            <div 
            className="
                mt-20
                grid place-content-center 
                text-3xl
            "
            >

                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-blue-400">
                        Ciro Rey <br />
                    </span>
                    FullStack Developer.
                </h1>


            </div>

            <div //contenedor padre principal
                className="parentContainer mb-[10vw]"
            >
                <div //contenedos padre de datos y sobre mi
                    className="dataAboutContainer"
                >
                        {/* contenedor de Datos */}
                        <div 
                            className="dataContainer"
                        > 
                            <img 
                                className="avatarImg rounded-full"
                                src="https://avatars.githubusercontent.com/u/74796071?v=4" 
                                alt="me" 
                            />
                            <table className="table-auto m-5 ">
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 pr-10 font-mono">
                                            Name:
                                        </td>
                                        <td className="bg-red-200 pl-10 font-mono text-gray-700">
                                            Ciro Rey
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 pr-10 font-mono">
                                            Lugar:
                                        </td>
                                        <td className="pl-10 font-mono text-gray-700">
                                            B.A, Argentina
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 pr-10 font-mono">
                                            Email:
                                        </td>
                                        <td className="bg-red-200 pl-10 font-mono text-gray-700">
                                            cirolakjsdas@asd.com
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="">
                                    <tr className=" ">
                                        <td className="bg-red-100 pr-10 font-mono">
                                            Web:
                                        </td>
                                        <td className=" pl-10 font-mono text-gray-700">
                                            asdasd.com
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* contenedor de Sobre mi */}
                        <div className="basis-1/2">
                            <div className="grid place-content-center text-2xl">Hello</div>
                            <div className="grid place-content-center font-serif text-lg text-center indent-8">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quod similique quidem porro a, alias facere tenetur, doloribus et dolore, enim velit quo culpa odit sapiente illo aperiam veritatis ipsum!
                                Nulla, quod consectetur officia odio aut, nesciunt quasi facere iusto ipsum vitae explicabo culpa deleniti laudantium deserunt vel, nihil voluptate quidem quisquam voluptatum! Numquam voluptatibus ad.
                            </div>
                            <div className="grid place-content-center mt-5 font-serif text-lg text-center indent-8">
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