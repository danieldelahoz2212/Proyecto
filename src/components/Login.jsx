import { db } from '../firebase';
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';

const login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [usuario, setUsuario] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [contraseña, setContraseña] = useState('');

    return (
        <div className='container abs-center'>
            <div className='row justify-content-center pt-5 mt-5'>
                <div className='col-md-4 col-sm-6 xl-6 col-lg-4 rounded formulario'>
                    <form className='border p-3 form rounded' action="">
                        <div className='form-group text-center'>
                            <h1 className='text-light'>Inicio de sesión</h1>
                        </div>
                        <div className='form-group mx-sm-6 p-3'>
                            <input type="email" className='form-control' placeholder='Ingrese su Usuario' />
                        </div>
                        <div className='form-group mx-sm-6 p-3'>
                            <input type="password" className='form-control' placeholder='Ingrese su Contrseña' />
                        </div>
                        <div className='d-grid gap-2 col-10 mx-auto p-4'>
                            <input type="button" className='btn btn-dark rounded-3 ingresar text-light' value="Ingresar" />
                        </div>
                        <div className='d-grid gap-2 col-10 mx-auto '>
                            <input type="button" className='btn btn-link' value="¿No estas registrado?" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login
