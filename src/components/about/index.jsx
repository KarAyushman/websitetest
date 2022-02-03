import { motion } from 'framer-motion'

export default function about() {
    return (
      <motion.div 
            exit={{opacity: 0}} 
            animate={{opacity:1}} 
            initial={{opacity:0}}
            transition={{duration:1}}
            >
              <h1>HELLO</h1>  
      </motion.div>
    );
  }