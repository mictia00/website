import './NotFound.css'
import { route } from 'preact-router'

export function NotFound() {
    return (
        <main className='not-found'>
            <section className='hero glass-card'>
                <div className='error-code'>404</div>
                <h1>¡Ups! Página no encontrada</h1>
                <p>La página que buscas no existe o se ha movido a otro lugar.</p>
            </section>

            <section className='suggestions glass-card'>
                <h2>¿Qué puedes hacer?</h2>
                <ul>
                    <li>
                        <span>🏠</span>
                        <h3>Ir al inicio</h3>
                        <p>Regresa a la página principal</p>
                        <button className='btn-glass' onClick={() => route('/')}>
                            Ir al Inicio
                        </button>
                    </li>
                    
                    <li>
                        <span>🎁</span>
                        <h3>Ver sorteos</h3>
                        <p>Participa en el sorteo de la laptop</p>
                        <button className='btn-glass' onClick={() => route('/sorteos')}>
                            Ver Sorteos
                        </button>
                    </li>
                </ul>
            </section>
        </main>
    )
}
