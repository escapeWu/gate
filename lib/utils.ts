import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const rafThrottle = (fn: Function) => {
  let locked = false
  return function(...args: any[]) {
    if (locked) {
      return
    }
    window.requestAnimationFrame(() => {
      locked = true
      // @ts-ignore
      fn.apply(this, args);
      locked = false
    })
  }
}