import React, {Fragment} from "react";

const Contact = () => {

    return (
        <Fragment>
            <div 
            className="titleSections"
            >
                Contact me
            </div>

            <div className="parentContainer pt-5">
                <div className="pt-5">
                        {/* contenedor de Form */}
                        <div className="contactContainer"> 
                            <div className="formContainer">
                                <div className="mb-6">
                                    <label htmlFor="base-input" className="labelContact">Subject</label>
                                    <input type="text" id="base-input" className="inputContact"/>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="base-input" className="labelContact">Email</label>
                                    <input type="text" id="base-input" className="inputContact"/>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="labelContact">Your message</label>
                                    <textarea id="message" rows="4" className="texTareaContact" placeholder="Leave a comment..."></textarea>
                                </div>
                                <div className="btnContainer">

                                    <button type="submit" className="btnContact bg-blue-700">Send</button>
                                </div>
                            </div>
                            
                        </div>
                </div>


            </div>
            
        </Fragment>
    )
}

export default Contact;