import './app.css'
import Router, { Route } from 'preact-router'
import { Home } from './pages/Home'
import { Lottery } from './pages/Lottery'
import { NotFound } from './pages/NotFound'


function Bg(props: Record<string, any>) {
    return (
        <div className='bg-container' {...props}>
            <div className='bg-wrapper'>
                <div className='bg-slide' />
                <div className='bg-slide' />
            </div>
        </div>
    )
}

export function App() {
    return (
        <>
            <Bg />
            <Router>
                <Route component={Home} path='/' />
                <Route component={Lottery} path='/sorteos' />
                <Route component={NotFound} default />
            </Router>
            <footer>
                <p>Este sitio <strong>NO es oficial</strong> y está en <em>construcción</em></p>
            </footer>
        </>
    )
}
