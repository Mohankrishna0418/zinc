import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    link: string;
    Icon?: React.ComponentType;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full dark:bg-violet-300/[0.5] block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: {
                    duration: 0.25,
                    ease: [0.4, 0, 1, 1],
                  },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: hoveredIndex === idx ? -5 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center gap-2"
            >
              {item.Icon && (
                <div className="w-12 h-12 flex items-center justify-center">
                  <item.Icon />
                </div>
              )}
              <CardTitle>{item.title}</CardTitle>
            </motion.div>
          </Card>
        </motion.a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full w-full p-4 overflow-hidden bg-foreground/5 border dark:border-foreground/30 group-hover:border-foreground/20 relative z-50 transition-colors duration-1200",
        className
      )}
    >
      <div className="relative z-50">
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-sm font-medium transition-colors duration-300",
        className
      )}
    >
      {children}
    </h4>
  );
};