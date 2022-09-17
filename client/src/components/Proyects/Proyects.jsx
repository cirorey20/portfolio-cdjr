import React, {Fragment} from "react";

const Proyects = () => {

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
                            <div className="cardResponsive ease-in duration-300"
                            >
                                CAR 1
                            </div>
                            <div 
                                className="cardResponsive"
                            >
                                CAR 2
                            </div>
                            <div 
                                className="cardResponsive"
                            >
                                CAR 3
                            </div>
                            <div 
                                className="cardResponsive"
                            >
                                CAR 4
                            </div>
                            
                        </div>
                </div>


            </div>
            
        </Fragment>
    )
}

export default Proyects;