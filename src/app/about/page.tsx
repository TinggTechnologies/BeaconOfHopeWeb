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
          alt="Digital services illustration" 
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
          Seamless Digital Services
        </h2>

        <div className="space-y-6">
          <p className='text-black/70 dark:text-white/70 text-lg'>
            At Beacon of Hope Cooperative Ark, we are dedicated to simplifying your everyday digital life. Our platform offers fast, secure, and user-friendly solutions for managing essential services like airtime, data, and cable TV subscriptions.
          </p>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-medium text-black dark:text-white">
              Our platform features:
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Instant airtime and data recharge across all networks</li>
              <li>Easy cable TV subscription renewal (DSTV, GOTV, etc.)</li>
              <li>Real-time notifications for all your transactions</li>
            </ol>

            <h3 className="text-xl font-medium text-black dark:text-white mt-6">
              What you can do:
            </h3>
            <ol className="list-decimal pl-5 space-y-2" start={4}>
              <li>Track your payment history with ease</li>
              <li>Enjoy a simple and intuitive user dashboard</li>
              <li>Get reminders for subscription renewals</li>
              <li>Use biometric login for added security</li>
            </ol>

            <h3 className="text-xl font-medium text-black dark:text-white mt-6">
              Why choose us:
            </h3>
            <ol className="list-decimal pl-5 space-y-2" start={8}>
              <li>24/7 customer support from real people</li>
              <li>Fast and reliable service delivery</li>
              <li>User-friendly experience across all devices</li>
              <li>No hidden charges or complicated processes</li>
            </ol>
          </div>

          <p className='text-black/70 dark:text-white/70 text-lg mt-6'>
            Whether you’re topping up airtime, renewing your TV subscription, or buying data, Beacon of Hope makes it fast, simple, and secure — anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Cook;