import './Home.css'
import picture from '../assets/avatar.jpg'
import { route } from 'preact-router'
import { L_1 } from '../store/lottery'

function formatTimestamp(timestamp: string): string {
    const now = new Date()
    const date = new Date(timestamp)
    const diffMs = now.getTime() - date.getTime()
    const isFuture = diffMs < 0
    const absDiffMs = Math.abs(diffMs)
    const diffDays = Math.floor(absDiffMs / (1000 * 60 * 60 * 24))
    const diffHours = Math.floor(absDiffMs / (1000 * 60 * 60))
    const diffMinutes = Math.floor(absDiffMs / (1000 * 60))

    if (isFuture) {
        if (diffDays === 0) {
            return 'Hoy'
        } else if (diffDays === 1) {
            return 'Mañana'
        } else if (diffDays < 7) {
            return `En ${diffDays} días`
        } else {
            return date.toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short'
            })
        }
    } else {
        if (diffDays > 20) {
            return date.toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })
        } else if (diffDays > 0) {
            return `Hace ${diffDays} día${diffDays !== 1 ? 's' : ''}`
        } else if (diffHours > 0) {
            return `Hace ${diffHours} hora${diffHours !== 1 ? 's' : ''}`
        } else if (diffMinutes > 0) {
            return `Hace ${diffMinutes} minuto${diffMinutes !== 1 ? 's' : ''}`
        } else {
            return 'Ahora mismo'
        }
    }
}


function Networks() {
    return (
        <section className='networks glass-card'>
            <h2>¡Mis Redes!</h2>
            <div className='divider'>═─────── ✦ ───────═</div>
            <ul>
                <li>
                    <a className='btn-glass' href='https://www.twitch.tv/mictia00' target='blank' rel='noopener noreferrer'>
                        Twitch
                    </a>
                </li>
                <li>
                    <a data-info='Por ahora solo hare directo en TWITCH' className='btn-glass' href='https://kick.com/mictia00' target='blank' rel='noopener noreferrer'>
                        Kick
                    </a>
                </li>
                <li>
                    <a className='btn-glass' href='https://x.com/Mictia00' target='blank' rel='noopener noreferrer'>
                        X
                    </a>
                </li>
                <li>
                    <span className="new-network-badge">¡Nueva!</span>
                    <a className='btn-glass' href="https://www.facebook.com/share/1Guc9pfwqY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                </li>
            </ul>

            <div>✦</div>
            <h3>Instagram</h3>
            <ul>
                <li>
                    <a className='btn-glass' href='https://www.instagram.com/abriguerra' target='blank' rel='noopener noreferrer'>
                        AgriGuerra
                    </a>
                </li>
                <li>
                    <a data-info='Cuenta secundaria' className='btn-glass' href='https://www.instagram.com/micti_' target='blank' rel='noopener noreferrer'>
                        Micti_
                    </a>
                </li>
            </ul>

            <div>✦</div>
            <h3>Comunidad</h3>
            <ul>
                <li>
                    <a className='btn-glass' href='https://www.reddit.com/r/CosmiCats' target='blank' rel='noopener noreferrer'>
                        Redit
                    </a>
                </li>
                <li>
                    <a className='btn-glass' href='https://x.com/i/communities/1671186509355970561' target='blank' rel='noopener noreferrer'>
                        X
                    </a>
                </li>
                <li>
                    <a className='btn-glass' href='https://discord.gg/hfkHafMrRj' target='blank' rel='noopener noreferrer'>
                        Discord
                    </a>
                </li>
            </ul>
            
            <div>✦</div>
            <h3>YouTube</h3>
            <ul>
                <li>
                    <a className='btn-glass' href='https://www.youtube.com/@MictiaClips' target='blank' rel='noopener noreferrer'>
                        Mictia+ | CLIPS
                    </a>
                </li>
                <li>
                    <a className='btn-glass' href='https://www.youtube.com/@MictiaTV' target='blank' rel='noopener noreferrer'>
                        Mictia TV🔴 | REACCIONES
                    </a>
                </li>
                <li>
                    <a className='btn-glass' href='https://www.youtube.com/@MictiaGAME' target='blank' rel='noopener noreferrer'>
                        Mictia GAME 🕹️ | GAMEPLAYS
                    </a>
                </li>
                <li>
                    <span className="new-network-badge">¡Nueva!</span>
                    <a className='btn-glass' href="https://www.youtube.com/@MictiaBobux" target="_blank" rel="noopener noreferrer">
                        Mictia Bobux
                    </a>
                </li>
                <li>
                    <a className='btn-glass' href='https://www.youtube.com/@VodsDeMictia00' target='blank' rel='noopener noreferrer'>
                        Mictia VODS
                    </a>
                </li>
            </ul>

            <div>✦</div>
            <h3>TikTok</h3>
            <ul>
                <li>
                    <a className='btn-glass' href='https://www.tiktok.com/@mictia00?lang=es' target='blank' rel='noopener noreferrer'>
                        Mictia00
                    </a>
                </li>
                <li>
                    <a className='btn-glass' href='https://www.tiktok.com/@mictiagenerica?lang=es' target='blank' rel='noopener noreferrer'>
                        MictiaGenerica
                    </a>
                </li>
            </ul>

            <div>✦</div>
            <h3>Otros</h3>
            <ul>
                <li>
                    <a className='btn-glass' href='https://open.spotify.com/playlist/121NBEMce228qZggWZ6iYn?si=14bb942cfaf74f01' target='blank' rel='noopener noreferrer'>
                        Spotify 🎵 | MICTIANOS
                    </a>
                </li>
                <li>
                    <a className='btn-glass' href='https://www.streamloots.com/mictia00' target='blank' rel='noopener noreferrer'>
                        Streamloots
                    </a>
                </li>
                <li>
                    <a className='btn-glass' href='https://streamelements.com/mictia00' target='blank' rel='noopener noreferrer'>
                        Stream Elements
                    </a>
                </li>
                <li>
                    <a data-info='fue uno de mis gatitos <3' className='btn-glass' href='https://www.instagram.com/mizucatgallery' target='blank' rel='noopener noreferrer'>
                        Instagram de Mizu
                    </a>
                </li>
                <li>
                    <a data-info='uno de mis gatitos <3' className='btn-glass' href='https://www.tiktok.com/@dantekuroneko?lang=es' target='blank' rel='noopener noreferrer'>
                        TikTok de Dante
                    </a>
                </li>
            </ul>
            <div className='divider'>═─────── ✦ ───────═</div>
        </section>
    )
}

function Lottery() {
    if (L_1.isExpired.value) {
        return null
    }

    return (
        <section className='lottery glass-card'>
            <h2>¡Sorteo Anual! <span>🎁</span></h2>

            {L_1.isToday.value ? (
                <p className='today-message'>¡Es Hoy! ¡Mucha Suerte!</p>
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
            )}

            <p>Participa por una <span>Laptop Gamer</span> GIGABYTE G6 edición 2024</p>
            <button className='btn-glass' onClick={() => route('/sorteos')}>Conoce Más</button>
        </section>
    )
}

function News({ children }: { children: any }) {
    return (
        <section className='news glass-card'>
            <h2>¡Novedades!</h2>
            <div className='divider'>═─────── ✦ ───────═</div>
            <ul>
                {children}
            </ul>
        </section>
    )
}

function NewsItem({ timestamp, children }: { timestamp: string, children: any }) {
    return (
        <li>
            <div className="news-timestamp">{formatTimestamp(timestamp)}</div>
            {children}
        </li>
    )
}

export function Home() {
    return (
        <main className='home'>
            <section className='hero'>
                <div className='container'>
                    <img src={picture} alt='' />
                </div>
                <h1>@Mictia00</h1>
                <h2>Streamer ・ Creadora de contenido  ・ Ilustradora</h2>
            </section>

            <News>
                <NewsItem timestamp="2025-10-11T18:16:00Z">
                    <p>Debido a cosas recientes, decidi crear una <a href="https://www.facebook.com/share/1Guc9pfwqY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">cuenta de facebook</a>, agradezco el apoyo <span>❤️</span></p>
                </NewsItem>
                <NewsItem timestamp="2025-10-23T21:20:00Z">
                    <p>Cree un <a href="https://www.youtube.com/@MictiaBobux" target="_blank" rel="noopener noreferrer">canal de Roblox</a>, ¡suscríbete y te regalo 1 Robux!</p>
                </NewsItem>
                <NewsItem timestamp="2025-10-26T06:34:00Z">
                    <h3>¡Empiezan los <a href="https://x.com/mictia00/status/1982345254884778450?s=46" target="_blank" rel="noopener noreferrer">premios Mictianos</a>!</h3> 
                    <p>Cada mes premiaremos los memes, fanarts y clips más creativos</p>
                </NewsItem>
            </News>
            <Lottery />
            <Networks />
        </main>
    )
}