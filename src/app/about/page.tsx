"use client";
import Image from 'next/image';

const Cook = () => {
    return (
        <section className='relative py-12 lg:py-20' id="cook-section">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
                    <div className='lg:col-span-6 flex justify-center lg:justify-start'>
                        <Image 
                            src="/images/cook/cook.svg" 
                            alt="Digital banking illustration" 
                            width={636} 
                            height={808}
                            className="w-full max-w-lg lg:max-w-none"
                        />
                    </div>
                    
                    <div className='lg:col-span-6 flex flex-col justify-center'>
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
                            About Us
                        </p>
                        
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-6">
                            Seamless banking for your business
                        </h2>
                        
                        <div className="space-y-6">
                            <p className='text-black/70 dark:text-white/70 text-lg'>
                                At Beacon of Hope, we are committed to revolutionizing digital banking by providing seamless, secure, and innovative financial solutions tailored to meet the needs of individuals and businesses.
                            </p>
                            
                            <div className="prose dark:prose-invert max-w-none">
                                <h3 className="text-xl font-medium text-black dark:text-white">
                                    Our platform features:
                                </h3>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>Real-time tracking of deposits, withdrawals, and balances</li>
                                    <li>Intuitive dashboards with comprehensive financial analytics</li>
                                    <li>Instant credit/debit alerts via SMS, email, and push notifications</li>
                                </ol>
                                
                                <h3 className="text-xl font-medium text-black dark:text-white mt-6">
                                    Advanced banking tools:
                                </h3>
                                <ol className="list-decimal pl-5 space-y-2" start={4}>
                                    <li>Smart Savings Tools with automated round-ups</li>
                                    <li>Goal-based savings plans</li>
                                    <li>Business banking solutions (invoicing, payroll, cash flow forecasting)</li>
                                    <li>Biometric security (fingerprint and facial recognition)</li>
                                </ol>
                                
                                <h3 className="text-xl font-medium text-black dark:text-white mt-6">
                                    Why choose us:
                                </h3>
                                <ol className="list-decimal pl-5 space-y-2" start={8}>
                                    <li>24/7 customer support with real representatives</li>
                                    <li>Instant peer-to-peer transfers with social payment features</li>
                                    <li>Customizable financial dashboards and reporting</li>
                                    <li>Seamless integration with accounting software and e-commerce platforms</li>
                                </ol>
                            </div>
                            
                            <p className='text-black/70 dark:text-white/70 text-lg mt-6'>
                                Whether you're an individual looking to grow your savings or a business needing efficient financial management tools, Beacon of Hope provides the digital banking experience of the future — accessible, transparent, and designed to help you achieve your financial goals with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cook;