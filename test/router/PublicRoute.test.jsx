import { render, screen } from "@testing-library/react"
import { Authcontext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/PublicRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en <PublicRoute/>', () => {
  
    test('Si no esta autenticado debe mostrar el children', () => {

        const contextValue = {
            logged: false
        }
      
        render(
            <Authcontext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute> 
            </Authcontext.Provider>
        );

        expect( screen.getByText('Ruta Publica')).toBeTruthy(); 
    });

    test('Debe navegar si esta autenticado', () => {
      
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }
      
        render(
            <Authcontext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute> 
                        }/>
                        <Route path="marvel" element={<h1>Pagina Marvel</h1>}></Route>
                    </Routes>

                </MemoryRouter>
            </Authcontext.Provider>
        );

        expect( screen.getByText('Pagina Marvel')).toBeTruthy(); 


    })
    
    
})
