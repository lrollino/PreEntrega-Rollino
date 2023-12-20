import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <header>
                <h1> PETS, alimentos para mascotas </h1>
                <nav>
                    <ul>
                        <li> Home </li>
                        <li> Alimentos para gatos </li>
                        <li> Alimentos para perros </li>
                        <li> Otros </li>
                    </ul>
                </nav>

                <CartWidget />

            </header>
        </div>
    )
}

export default NavBar