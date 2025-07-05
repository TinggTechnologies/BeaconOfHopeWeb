"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Cook = () => {
  const router = useRouter();

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative"
      id="cook-section"
    >
      <motion.div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 my-5 space-x-5">
          {/* Image Section */}
          <motion.div
            className="col-span-6 flex justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/cook/cook.svg"
              alt="nothing"
              width={636}
              height={808}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="col-span-6 flex flex-col justify-center"
            variants={containerVariants}
          >
            <motion.p
              className="text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start"
              variants={textVariants}
            >
              About Us
            </motion.p>
            <motion.h2
              className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start"
              variants={textVariants}
            >
              Seamless digital services for your business.
            </motion.h2>
            <motion.p
              className="text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2"
              variants={textVariants}
            >
              At Beacon of Hope, we are committed to transforming digital services by offering seamless, secure, and innovative solutions for everyday needs. Our platform allows users to conveniently recharge airtime, buy data, and pay for cable TV. With real-time notifications and easy tracking of every transaction, users stay informed and in control of their digital activities.
            </motion.p>

            {/* Navigation Button */}
            <motion.button
              onClick={() => router.push("/about")}
              className="text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 mr-6 w-fit border border-primary hover:bg-transparent hover:text-primary"
              variants={buttonVariants}
            >
              Learn more
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Cook;
