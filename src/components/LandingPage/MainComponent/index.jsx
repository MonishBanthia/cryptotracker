import React from "react"
import "./styles.css"
import Button from "../../Common/Button";
import iphone from "/src/assets/iphone.png"
import gradient from "/src/assets/gradient.png"
import { motion } from "framer-motion"

function MainComponent() {
    return (
        <div className="flex-info">
            <div className="left-component">
                <motion.h1 className="track"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >Track Crypto</motion.h1>

                <motion.h1 className="real"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, delay: 0.5 }}
                >Real Time.</motion.h1>

                <motion.p className="p-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, delay: 1 }}
                >Track Your Crypto with our real time crypto tracker</motion.p>


                <motion.div className="flex-btn"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .5, delay: 1.5 }}
                >
                    <Button text={"Dashboard"} />
                    <Button text={"Share"} outlined={true} />
                </motion.div>
            </div>

            <div className="phone-img">
                <motion.img src={iphone} className="iphone"
                    initial={{ y: -15 }}
                    animate={{ y: 15 }}
                    transition={{
                        type: "smooth"
                        , repeatType: "mirror",
                        duration: 2,
                        repeat: Infinity
                    }}
                />
                <img src={gradient} className="gradient" />
            </div>
        </div>
    )
}

export default MainComponent;