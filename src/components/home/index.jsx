import './index.css';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import Typewriter from 'typewriter-effect';
import Logo from './picture.png'

const index = () => {

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };

      const particlesLoaded = (container) => {
        console.log(container);
      };
    
    return (
        <motion.div
            exit={{opacity: 1}}
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            transition={{duration:1}}
            >
                <div className="main">
                    <section className="splash-container">
                        <div className="splash-particles">
                        <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                            color: {
                                value: "transparent",
                            },
                            },
                            fpsLimit: 60,
                            fullscreen: {
                                enable: false,
                                zIndex: -1,
                            },
                            interactivity: {
                            events: {
                                onClick: {
                                enable: true,
                                mode: "push",
                                },
                                onHover: {
                                enable: true,
                                mode: "grab",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.3,
                                size: 30,
                                },
                                push: {
                                quantity: 4,
                                },
                                repulse: {
                                distance: 200,
                                duration: 0.4,
                                },
                            },
                            },
                            particles: {
                            color: {
                                value: "#00ffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.8,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: true,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                enable: true,
                                value_area: 800,
                                },
                                value: 50,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                            },
                            detectRetina: true,
                        }}
                        />
                        </div>
                        <div className="text-container">
                            <h1 className="splash-title">Hello World!</h1>
                            <h1 className="sp1">I'm Ayushman.</h1>
                            <div>
                                <h2 className="sp2 ib">and I'm </h2>
                                <h2 className="sp3 ib"><Typewriter
                                options={{
                                    strings: ['an Ardent Learner.', 'an Avid Reader.', 'a Technology Enthusiast.', 'a Space Aficionado.', 'a Fervent Programmer.', 'an Unstinting Altruist.', 'a Human Being'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                }}
                                /></h2>
                            </div>
                        </div>
                        {/* <img className="picture" src={Logo} width="450" height="650" alt=""/> */}
                    </section>
                    <section className="panel1 rc1">
                        <div>
                            <h1 className="ib info-title dim">Who Am <h1 className="ib cy info-title">I</h1>?</h1>
                            <p className="info-des">A creative and observant person with a considerable zest for learning and exploring.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at laudantium eligendi. Nulla qui, id possimus, laudantium unde distinctio iste dolorem animi vitae recusandae tempore sequi excepturi? Culpa, fugit non.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolores error fugit? Sequi, atque. Vel officia dolorum aperiam ut nemo quidem laboriosam ea iusto, voluptas libero nostrum ducimus harum laudantium!</p>
                        </div>
                    </section>
                </div>
        </motion.div>
    )
}

export default index
