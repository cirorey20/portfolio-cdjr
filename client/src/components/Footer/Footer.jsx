import React, {Fragment} from "react";

const Footer = () => {

    return (
        <Fragment>
            <div 
            className="
                mt-40
                grid place-content-center 
                text-3xl"
            >
            </div>

            <div //contenedor padre principal
                className="
                    bg-blue-900 
                    

                    w-[100%]
                    h-[15vh]
                "
            >
                <div //contenedos padre de datos y sobre mi
                    className="
                        
                        p-5
                        
                    "
                >
                        {/* contenedor de Datos */}
                        <div 
                            className="
                                bg-blue-300
                                


                                grid 
                                grid-cols-1 
                                gap-4
                                place-items-center

                            "
                        > 
                            
                        </div>
                </div>


            </div>
            
        </Fragment>
    )
}

export default Footer;