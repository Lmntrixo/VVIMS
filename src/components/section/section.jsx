import React from 'react'
import Subheader from '../subheader'
import CardSection from '../cardSection'
import StatSection from '../statSection'
import RecentloggedSection from '../recentloggedSection'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Section() {


    const AnimatedElement = ({ children }) => {
        const controls = useAnimation();
        const [ref, inView] = useInView();
      
        // Déclencher l'animation lorsque l'élément est visible
        React.useEffect(() => {
          if (inView) {
            controls.start('visible');
          }
        }, [controls, inView]);
      
        return (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        );
      };
      
  return (
    <div className='ml-6 pl-12 max-w-md md:w-full lg:max-w-screen-xl bg-gray-100 mt-14 pb-5 pt-2 pr-6 md:ml-6 md:pl-5  
    md:bg-gray-100 md:mt-14 md:pb-5 md:pt-2 md:pr-2 md:max-w-4xl   sm:bg-gray-100 sm:mt-14 sm:pb-5 sm:pt-2 sm:pr-20 sm:max-w-2xl  lg:ml-64 lg:pl-12  
    lg:bg-gray-100 lg:mt-14 lg:pb-5 lg:pt-2 lg:pr-16 lg: '>
       
       <Subheader/>
       <AnimatedElement>
        <CardSection/>
        <StatSection/>
        <RecentloggedSection/>
        </AnimatedElement>
        
        <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
        />
    </div>
  )
}

export default Section