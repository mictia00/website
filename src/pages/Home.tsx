import './Home.css'
import picture from '../assets/avatar.jpg'
import { route } from 'preact-router'
import { L_1 } from '../store/lottery'


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

            <Lottery />
            <Networks />
        </main>
    )
}