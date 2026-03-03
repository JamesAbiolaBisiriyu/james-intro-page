import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-6"
        >
          Hello, world —
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-foreground text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
        >
          I'm{" "}
          <span className="text-primary">James Abiola Bisiriyu.</span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-xl"
        >
          I craft interfaces where creativity meets clean code. My passion lies
          in understanding user behavior and translating those insights into
          responsive, accessible designs.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-xl mt-4"
        >
          As a frontend developer, my goal is to build the digital spaces of
          tomorrow—ensuring they are not only functional but{" "}
          <span className="text-foreground font-medium">inclusive</span> and{" "}
          <span className="text-foreground font-medium">a joy to navigate</span>.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="origin-left h-px bg-primary/40 mt-12 w-24"
        />
      </div>
    </div>
  );
};

export default Index;
