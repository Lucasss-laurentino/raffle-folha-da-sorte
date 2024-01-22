import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Page_default } from '../components/Page_default';
import { Outlet_index } from '../components/Outlet_index';
import { Page_create_user } from '../components/Page_create_user';
import { Page_raffle } from '../components/Page_raffle';
import { MenuProvider } from '../Contexts/MenuContext';
import { Form } from '../components/Form';
import { Page_login } from '../components/Page_login';
import { FormEditProvider } from '../Contexts/FormEditContext';
import { Form_create_raffle } from '../components/Form_create_raffle';
import { CreateUserProvider } from '../Contexts/CreateUserContext';
import { LoginProvider } from '../Contexts/LoginContext';

export default function appRoutes(){

    return (
        <MenuProvider>      
        <FormEditProvider>
        <CreateUserProvider>
        <LoginProvider>

            <Router>
                <Routes>

                    <Route path='/' element={<Page_default />}>
                        <Route path='/' element={<Outlet_index />} />
                        <Route path='/sorteio/:id' element={<Page_raffle />} />
                    </Route>
                    
                    <Route path='/' element={<Form />}>
                        <Route path='/createUser' element={<Page_create_user />} />
                        <Route path='/login' element={<Page_login />}/>
                        <Route path='/create_raffle' element={<Form_create_raffle/>} />
                    </Route>
                
                </Routes>
            </Router> 
            
        </LoginProvider>                
        </CreateUserProvider>
        </FormEditProvider>      
        </MenuProvider>           

    );

}