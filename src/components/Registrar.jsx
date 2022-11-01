import { db } from '../firebase';
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';

const Registrar = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [listaUsuario, setlistaUsuario] = useState([]);
    const [id, setid] = useState('');

    const registrar = async (e) => {
        e.preventDefault()
        try {
            if (usuario.length === 0 && /^\s+$/.test(usuario)) {
                alert('El campo de usuario esta vacio')
                return
            }
            if (contrasena.length === 0 && /^\s+$/.test(contrasena)) {
                alert('El campo de contraseña esta vacio')
                return
            } 
            if (contrasena.length <= 7 || contrasena.length === 15 || /^\s+$/.test(contrasena)) {
                alert('La contraseña que se ingreso debe terner minimo 8 digitos o mas')
                return
            } else {
                const data = await addDoc(collection(db, 'login'), {
                    usuarioRegistrado: usuario,
                    constrasenaRegistrada: contrasena
                })
                setlistaUsuario([
                    ...listaUsuario,
                    {
                        usuarioRegistrado: usuario,
                        constrasenaRegistrada: contrasena,
                        id: data.id
                    }
                ])
                setUsuario('')
                setContrasena('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container abs-center'>
            <div className='row justify-content-center pt-5 mt-5'>
                <div className='col-md-4 col-sm-6 xl-6 col-lg-4 rounded formulario'>
                    <form className='border p-3 form rounded' onSubmit={registrar}>
                        <div className='form-group text-center'>
                            <h1 className='text-light'>Registro de usuario</h1>
                        </div>
                        <div className='form-group mx-sm-6 p-3'>
                            <input type="email"
                                className='form-control'
                                placeholder='Ingrese su Usuario'
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>
                        <div className='form-group mx-sm-6 p-3'>
                            <input type="password"
                                className='form-control'
                                placeholder='Ingrese su Contrseña'
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)}
                            />
                        </div>
                        <div className='d-grid gap-2 col-10 mx-auto p-4'>
                            <input type="submit" className='btn btn-dark rounded-3 ingresar text-light' value="Registrar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registrar