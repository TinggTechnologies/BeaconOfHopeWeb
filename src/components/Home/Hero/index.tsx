"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section 
            id="home-section" 
            className='bg-gray-50 dark:bg-gray-700'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6'>
                        <h1 className="text-4xl lg:text-6xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                            Join Beacon of Hope Cooperative Ark Today!
                        </h1>
                        <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                        Seamless Bill Payments – All in One App!
                        <br /> Recharge airtime, buy data, and pay for cable TV effortlessly anytime, anywhere.
                        </p>
                        <div className='md:flex gap-3 align-center justify-center lg:justify-start'>
                            <div className="flex items-center justify-start gap-2 rounded-full py-5 px-6 bg-primary hover:text-primary lg:px-17 border border-primary hover:bg-transparent w-full md:w-auto">
                                <Image 
                                    src="/images/googleplay.jpg" 
                                    alt="nothing" 
                                    width={30} 
                                    height={30} 
                                    style={{ borderRadius: '50%' }} 
                                />
                                <Link href="https://play.google.com/store/apps?hl=en" target="_blank" className="text-xl font-medium text-white text-center">
                                    Download on Android
                                </Link>
                            </div>
                            <div className="flex items-center justify-start gap-2 border w-full md:w-auto mt-5 md:mt-0 border-primary rounded-full text-xl font-medium py-5 px-10 text-primary hover:text-white hover:bg-primary">
                                <Image 
                                    src="/images/applestore.png" 
                                    alt="nothing" 
                                    width={30} 
                                    height={30} 
                                    style={{ borderRadius: '50%' }} 
                                />
                                <Link target="_blank" href='https://www.apple.com/app-store/'>Download on IOS</Link>
                            </div>
                        </div>
                    </div>
                    <motion.div 
                        className='col-span-6 flex justify-center relative'
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Image src="/images/hero/banner-image.png" alt="nothing" width={1000} height={805} />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
