import { signal } from '@preact/signals'


export function createCountdown(targetDate: number) {
    const timeLeft = signal(targetDate - Date.now())
    const interval = setInterval(() => {
        timeLeft.value = targetDate - Date.now()
    }, 1000)
    
    const dispose = () => clearInterval(interval)

    return {
        timeLeft, 
        get seconds() { return Math.floor((timeLeft.value / 1000) % 60) },
        get minutes() { return Math.floor((timeLeft.value / 1000 / 60) % 60) },
        get hours()   { return Math.floor((timeLeft.value / (1000 * 60 * 60)) % 24) },
        get days()    { return Math.floor(timeLeft.value / (1000 * 60 * 60 * 24)) },
        dispose
    }
}