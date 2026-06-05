import { duration } from './duration'
import { ease } from './ease'

export const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { delay, duration: duration.reveal, ease: ease.expoOut },
})

export const fadeIn = (delay = 0) => ({
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { delay, duration: duration.reveal, ease: ease.expoOut },
})

export const scaleIn = (delay = 0) => ({
  initial:    { opacity: 0, scale: 0.96 },
  animate:    { opacity: 1, scale: 1 },
  transition: { delay, duration: duration.fast, ease: ease.powerOut },
})
