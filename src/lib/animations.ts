import { Variants } from 'framer-motion';

export const easings = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  spring: [0.34, 1.56, 0.64, 1],
  soft: [0.25, 0.46, 0.45, 0.94],
  sharp: [0.4, 0, 0.2, 1]
} as const;

export const durations = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  slower: 0.6
} as const;

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 24
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth
    }
  }
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.soft
    }
  }
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth
    }
  }
};

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -40
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth
    }
  }
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth
    }
  }
};

export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: durations.fast,
    ease: easings.soft
  }
};

export const tapScale = {
  scale: 0.98,
  transition: {
    duration: durations.fast,
    ease: easings.sharp
  }
};

export const hoverLift = {
  y: -4,
  transition: {
    duration: durations.normal,
    ease: easings.smooth
  }
};
