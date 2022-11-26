import React, { useEffect, useState } from "react";
import "./toaster.css";

const Toaster = ({ show, setShow, type, postion, handleClose }) => {


    return (
        <>
            {show.map((content) => {
                return (
                    <div>
                        <div className="mtop">
                            <div className="toaster"
                                style={postion === "t-left" ? {
                                    marginLeft: "10px",
                                    // marginTop: postion === "b"

                                } : postion === "b-left" ? {
                                    marginLeft: "10px",
                                    marginTop: "40%"
                                } : postion === "b-right" ? {
                                    marginTop: "40%",
                                    marginLeft: "77%"
                                } : {}}
                            >
                                <div className="mainDiv"
                                    style={{ background: type === "error" ? "red" : "green" }}
                                >
                                    <div className="cross">

                                        <button onClick={() => handleClose(content)}>X</button>
                                    </div>
                                    {content.content}
                                </div>
                            </div>
                        </div>

                    </div>
                )

            })

            }
        </>
    )
    // export { toast };
}

export default Toaster;