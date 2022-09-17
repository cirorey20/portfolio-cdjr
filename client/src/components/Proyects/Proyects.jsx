import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getPots} from '../../redux/actions/index';

const Proyects = () => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts)

    useEffect(()=>{
        dispatch(getPots());
        console.log(posts);
    }, [dispatch])

    return (
        <Fragment>
            <div 
            className="titleSections">Proyects</div>

            <div //contenedor padre principal
                className="parentContainer"
            >
                <div //contenedos padre de datos y sobre mi
                    className="
                        
                        p-5
                        
                    "
                >
                        {/* contenedor de Datos */}
                        <div 
                            className="cardContainer"
                        > 
                        {
                            posts?.map((item,index)=>{
                                return(
                                    <div key={index} className=" ease-in duration-300"
                                    >
                                        <img 
                                            className="w-[60vw] md:w-[70vw] lg:w-[70vw] hoverTrans" 
                                            src={item.images[0]} alt="" 
                                        />
                                    </div>        
                                )
                            })
                        }
                            <div className=" ease-in duration-300">
                                <img 
                                    className="w-[60vw] md:w-[70vw] lg:w-[70vw] hoverTrans" 
                                    src={'https://media-exp1.licdn.com/dms/image/C4D2DAQFjNVniktW8tQ/profile-treasury-image-shrink_800_800/0/1657223980443?e=1664046000&v=beta&t=y6BrPClUQh7OIc2ANRdWqgF7lHf6zyB-6A8tpvq208A'} 
                                    alt="" 
                                />
                            </div>   
                            
                        </div>
                </div>


            </div>
            
        </Fragment>
    )
}

export default Proyects;