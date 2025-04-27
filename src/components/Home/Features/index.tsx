"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FeaturesData } from '@/app/api/data';
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.2,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Features = () => {
    return (
        <motion.section 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            className="py-20"
        >
            <motion.div 
                className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' 
                id="about-section"
                variants={containerVariants}
            >
                <motion.div className='text-center mb-14' variants={itemVariants}>
                    <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Features</p>
                    <h2 className='text-3xl lg:text-5xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto'>
                        Enjoy a variety of interesting features.
                    </h2>
                </motion.div>

                <motion.div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32' variants={containerVariants}>
                    {FeaturesData.map((items, i) => (
                        <motion.div
                            className="p-8 relative rounded-3xl bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black"
                            key={i}
                            variants={itemVariants}
                        >
                            {/* Image Container */}
                            <div className="work-img-bg rounded-full flex justify-center items-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="flex justify-center items-center w-20 h-20 bg-green-200 rounded-full">
                                    {items.icon}
                                </div>
                            </div>

                            {/* Heading */}
                            <h3 className="text-2xl text-black dark:text-white font-semibold text-center mt-2">
                                {items.heading}
                            </h3>

                            {/* Subheading */}
                            <p className="text-lg font-normal text-black/50 dark:text-white/50 text-center mt-2">
                                {items.subheading}
                            </p>

                            {/* Learn More Link */}
                            <div className="flex items-center justify-center mt-4">
                                <Link
                                    href="/features"
                                    className="text-center text-lg group duration-300 ease-in-out font-medium text-primary overflow-hidden flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0"
                                >
                                    Learn More
                                    <Icon icon="tabler:chevron-right" width="24" height="24" className="text-primary ml-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default Features;
