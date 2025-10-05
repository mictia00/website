import './Lottery.css'
import { L_1 } from '../store/lottery'
import { useEffect, useRef, useState } from 'preact/hooks'

import i0 from '../assets/G6 (2024)-picture/G6 (2024)-01.png'
import i1 from '../assets/G6 (2024)-picture/G6 (2024)-03.png'
import i2 from '../assets/G6 (2024)-picture/G6 (2024)-05.png'
import i3 from '../assets/G6 (2024)-picture/G6 (2024)-07.png'
import i4 from '../assets/G6 (2024)-picture/G6 (2024)-09.png'
import i5 from '../assets/G6 (2024)-picture/G6 (2024)-11.png'
import i6 from '../assets/G6 (2024)-picture/G6 (2024)-13.png'
import i7 from '../assets/G6 (2024)-picture/G6 (2024)-15.png'
import i8 from '../assets/G6 (2024)-picture/G6 (2024)-17.png'
import i9 from '../assets/G6 (2024)-picture/G6 (2024)-19.png'



const FAQList: {q: string, a: string | string[]}[] = [
    {
        q: '¿Porque estoy haciendo el sorteo?',
        a: 'Por vísperas de navidad y 6to aniversario del canal sorteare la Laptop Gamer GIGABYTE G6 edición 2024'
    },
    {
        q: '¿Cuales son los requisitos para participar?',
        a: 'El único requisito es canjear un boleto para el sorteo utilizando los puntos del canal (De Twitch) llamados "MichiCoins".'
    },
    {
        q: '¿Cuantos boletos puedo canjear?',
        a: 'Máximo 2 boletos por persona.'
    },
    {
        q: '¿Cuantos MichiCoins necesito para comprar un boleto?',
        a: 'El costo del boleto es de 100K MichiCoins.'
    },
    {
        q: '¿Como consigo MichiCoins?',
        a: [
            'Estos puntos se pueden obtener TOTALMENTE GRATIS de las siguientes formas:',
            '',
            ' +10 · Ver mi directo durante 5 minutos',
            ' +50 · Reclamar bonificaciones especiales',
            '+250 · Participar de una raid',
            '+300 · Seguir mi canal',
            '',
            'Se pueden conseguir michicoins extra donando al canal:',
            '',
            '+350 · Primer Cheer (donacion de bits, mensualmente)',
            '+500 · Primer regalo de una subscripcion (mensualmente)',
            '',
            'Estar subscripto a mi canal multiplican los puntos obtenidos de los anteriores nombrados',
            '· Nivel 1: x1.2',
            '· Nivel 2: x1.4',
            '· Nivel 3: x2.0'
        ]
    },
    {
        q: '¿Como funcionan los envios?',
        a: 'La compra de la PC sera realizada directamente desde la pagina web de preferencia utilizando tu dirreccion (Si eres de latinoamerica y por diversos motivos no hay envios directos, puedes crearte un casillero de "P. O. BOX" a tu comodidad). Si en el momento de realizar la compra no hay stock en amazon o en la pagina web, el premio se te dara vía paypal (900 USD).'
    },
    {
        q: '¿Donde puedo ver la lista de participantes?',
        a: 'Estare dando una lista de Excel por redes sociales con todos los participantes en el orden de su canjee de boletos, alli podras checar que estés en la lista.'
    },
    {
        q: '¿Que hacer si no aparezco en la lista de participantes?',
        a: 'Consulta con los moderadores del canal (por discord) y envia capturas de tu canjee del boleto.'
    },
    {
        q: '¿Que dia se realizará el sorteo?',
        a: 'El sorteo se realizará el 10 de enero de 2026 en directo por Twitch. Si por cosas de la vida no puedo realizarlo, o si a muchas personas se les complica comprar una entrada, se hara a finales de ENERO del 2026.'
    }
]

const images = [i0, i1, i2, i3, i4, i5, i6, i7, i8, i9]

function Countdown() {
    return (
        <section className='countdown glass-card'>
            <p>Viernes 10/01 · En Twitch</p>

            {L_1.isExpired.value
            ? (
                <p className='message'>
                    ¡El sorteo ha terminado! Entérate del ganador en nuestro {' '}
                    <a href='https://discord.gg/hfkHafMrRj' target='_blank' rel='noopener noreferrer'>
                        Discord
                    </a> 
                </p>
            ) 
            : (L_1.isToday.value 
                ? (
                    <p className='today-message message'>¡Es Hoy! ¡Mucha Suerte!</p>
                ) : (
                    <div>
                        <div>
                            <span>{L_1.target.days}</span>
                            <span>Días</span>
                        </div>
                        <div>
                            <span>{L_1.target.hours}</span>
                            <span>Horas</span>
                        </div>
                        <div>
                            <span>{L_1.target.minutes}</span>
                            <span>Minutos</span>
                        </div>
                        <div>
                            <span>{L_1.target.seconds}</span>
                            <span>Segundos</span>
                        </div>
                    </div>
                )
            )}
        </section>
    )
}

function Gallery() {
    const [isOpen, setIsOpen] = useState(false)
    const [current, setCurrent] = useState(0)
    const [touchStartX, setTouchStartX] = useState<number | null>(null)
    const closeBtnRef = useRef<any>(null)

    const openModal = (index: number) => {
        setCurrent(index)
        setIsOpen(true)
    }

    const closeModal = () => setIsOpen(false)
    const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
    const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

    useEffect(() => {
        if (!isOpen) return

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal()
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [isOpen])

    const handleTouchStart = (e: Omit<TouchEvent, 'currentTarget'> & { readonly currentTarget: HTMLDivElement }) => {
        setTouchStartX(e.touches[0].clientX)
    }
    
    const handleTouchMove = (e: Omit<TouchEvent, 'currentTarget'> & {readonly currentTarget: HTMLDivElement }) => {
        if (touchStartX === null) return
        const deltaX = touchStartX - e.touches[0].clientX
        if (deltaX > 50) {
            next()
            setTouchStartX(null)
        } else if (deltaX < -50) {
            prev()
            setTouchStartX(null)
        }
    }

    return (
        <section className='presentation-img glass-card'>
            <p>Laptop Gamer GIGABYTE G6 (2024)</p>
            <div className='thumbs'>
                {images.map((src, i) => (
                    <img loading='lazy' src={src} alt={`Thumb ${i +1}`} key={`l?-sc-${i}`} onClick={() => openModal(i)} />
                ))}
            </div>

            {isOpen && (
                <div className='lightbox' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <button className='close' onClick={closeModal} ref={closeBtnRef}>×</button>
                    <button className='nav prev' onClick={prev}>‹</button>
                    <img src={images[current]} alt={`Imagen ${current + 1}`} />
                    <button className='nav next' onClick={next}>›</button>
                </div>
            )}
        </section>
    )
}

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [loadingIndex, setLoadingIndex] = useState<number | null>(null)

    const handleClick = (idx: number) => {
        if (openIndex === idx) {
            setOpenIndex(null)
        } else {
            setLoadingIndex(idx)
            setTimeout(() => {
                setLoadingIndex(null)
                setOpenIndex(idx)
            }, 400)
        }
    }

    return (
        <section className='faq glass-card'>
            <p>Preguntas Frecuentes</p>
            <ul>
                {FAQList.map((item, idx) => (
                    <li key={`lfaq-${idx}`}>
                        <div className='faq-question' onClick={() => handleClick(idx)}>
                            <span className='text'>{item.q}</span>
                            {loadingIndex === idx ? (
                                <div className='spinner' aria-label='Cargando'></div>
                            ) : (
                                <div className='toggle-icon' aria-hidden='true'>
                                {openIndex === idx ? '–' : '+'}
                                </div>
                            )}
                        </div>
                        <div className={`faq-answer ${openIndex === idx ? 'is-open': ''}`}>
                            {Array.isArray(item.a) ? (
                                item.a.map((a, i) => (
                                    a === '' 
                                        ? <br />
                                        : <p key={`lfaq-${idx}-${i}`}>{a}</p>
                                ))
                            ) : (
                                <p>{item.a}</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}


export function Lottery() {
    return (
        <main className='lottery'>
            <section className='hero glass-card'>
                <h1>¡Participa por una Laptop Gamer!</h1>
                <p><a href='https://twitch.tv/mictia00'>@Mictia00 – Canje por Twitch</a></p>
            </section>

            <Countdown />
            <Gallery />

            <section className='specs glass-card'>
                <p>Especificaciones</p>
                <ul>
                    <li>Intel 13th Gen Intel Core i7-13620H Processor 4.9 GHz</li>
                    <li>NVIDIA GeForce RTX 4050 Laptop GPU 8GB GDDR6</li>
                    <li>1TB SSD</li>
                    <li>16GB DDR5 RAM</li>
                    <li>Pantalla 16.0" de 165Hz</li>
                    <li>Teclado LED</li>
                    <li>Intel Wi-Fi 6E, Bluetooth V5.2</li>
                </ul>
            </section>

            <FAQ />
        </main>
    )
}
