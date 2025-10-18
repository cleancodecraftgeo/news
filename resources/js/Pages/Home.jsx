import Layout from '@/Layouts/Layout';
import { motion } from 'framer-motion';

export default function Welcome({ad}) {
  return (
   
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4"
        >
          Welcome back <span className="text-blue-600">{ad}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          Build modern web applications with the power of <span className="text-blue-600 font-medium">Laravel</span>, 
          <span className="text-blue-600 font-medium"> React</span> and 
          <span className="text-blue-600 font-medium"> Inertia</span>.  
          Everything you need to get started — fast, elegant, and powerful.
        </motion.p>

        <motion.a
          href="posts"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-colors"
        >
          Get Started
        </motion.a>
      </div>
   
  );
}
