import { render, screen } from "@testing-library/react"
import { Authcontext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../src/router/AppRouter";

describe('Pruebas en el <AppRouter/>', () => {
  
    test('Debe mostrar el login si no esta autenticado', () => {
      
        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <Authcontext.Provider value={ contextValue }>
                    <AppRouter/>
                </Authcontext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length).toBe(2); 
    })

    test('Debe mostrar el componente de Marvel si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user:{
                id: '1',
                name: 'Juan'
            }
        }

            render(
               <MemoryRouter initialEntries={['/login']}>
                <Authcontext.Provider  value={contextValue}>
                    <AppRouter/>
                </Authcontext.Provider>
               </MemoryRouter>
            )

            expect( screen.getAllByText('Mrvel').length).toBeGreaterThanOrEqual(1); 
        

    })
    
    
})
