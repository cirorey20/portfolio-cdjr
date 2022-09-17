import React, {Fragment} from "react";

const Contact = () => {

    return (
        <Fragment>
            <div 
            className="
                mt-24
                grid place-content-center 
                text-3xl"
            >
                Contact
            </div>

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
                            className="
                                bg-blue-300
                                
                                grid 
                                grid-cols-1 
                                md:grid-cols-1 
                                lg:grid-cols-3
                                gap-4
                                
                                
                                place-items-center

                            "
                        > 
                            <div className="
                                    bg-red-100 
                                    w-[65vw]
                                    md:w-[46vw]
                                    lg:w-[17vw]

                                    h-[25vw]
                                    md:h-[25vw]
                                    lg:h-[10vw]
                                "
                            >
                                FORM
                            </div>
                            
                        </div>
                </div>


            </div>
            
        </Fragment>
    )
}

export default Contact;