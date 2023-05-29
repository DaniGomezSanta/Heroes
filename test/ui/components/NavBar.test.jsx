import { fireEvent, render, screen } from "@testing-library/react";
import { Authcontext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui/components/NavBar";

const mockedUseNavigate = jest.fn(); 

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <NavBar/>', () => {

    const contextValue = {
        logged: true,
        use: {
            name: 'Juan Carlos'
        },
        logout: jest.fn()
    }

    beforeEach(()=> jest.clearAllMocks()); 
  
    test('debe mostrar el nombre del usuario', () => {
      
        render(
            <Authcontext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </Authcontext.Provider>
        );

        expect( screen.getByText('Juan Carlos')).toBeTruthy();  

    }); 

    test('debe llamar el logout y navigate cuando se hace click en el boton ', () => {
      
        render(
            <Authcontext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </Authcontext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );
        
        expect( contextValue.logout ).toHaveBeenCalled(); 
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {'replace': true})

    })
    
})
