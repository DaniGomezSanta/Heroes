import { render, screen } from "@testing-library/react";
import { Authcontext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <PrivateRoute/>', () => {
    test('Si no esta autenticado debe mostrar el children', () => {

        Storage.prototype.setItem = jest.fn(); 

        const contextValue = {
            logged: true,
            user:{
                id: 'abc',
                name: 'Juan Carlos'
            }
        }
      
        render(
            <Authcontext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>  
                    </PrivateRoute> 
                </MemoryRouter>
            </Authcontext.Provider>
        );

        expect( screen.getByText('Ruta Privada')).toBeTruthy(); 
        expect( localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
    });
  
})
