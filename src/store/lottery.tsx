import { effect, signal } from '@preact/signals'
import { createCountdown } from '../utils/createCountdown'

const target = createCountdown(new Date('2026-01-10T00:00:00').getTime())
const isToday = signal(false)
const isExpired = signal(false)

effect(() => {
    const tl = target.timeLeft.value
    if (tl <= 0 && tl > -(1000 * 60 * 24)) {
        isToday.value = true
        isExpired.value = false
    } else if (tl < 0) {
        isToday.value = false
        isExpired.value = true
        target.dispose()
    }
})

export const L_1 = { target, isToday, isExpired} as const
