"use client"
import Image from 'next/image';


const Cook = () => {

    return (
        <section className='relative' id="cook-section">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
               
                <div className='grid grid-cols-1 lg:grid-cols-12 my-5 space-x-5'>
                    <div className='col-span-6 flex justify-start'>
                        <Image src="/images/cook/cook.svg" alt="nothing" width={636} height={808} />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start'>About Us</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
                        Seamless banking for your business.
                        </h2>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2'>At Beacon of Hope, we are committed to revolutionizing digital banking by providing seamless, secure, and innovative financial solutions tailored to meet the needs of individuals and businesses. Our platform enables users to effortlessly manage their savings and wallets, offering real-time tracking of deposits, withdrawals, and balances. Customers receive instant credit and debit alerts, ensuring they stay updated with every transaction for better financial awareness.</p>
                        
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Cook;
