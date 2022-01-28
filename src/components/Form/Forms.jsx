import React from 'react';

const Form = () => {
    return (
        <div className='bg-info'>
            <div className='container'>
                <div className='row'>
                    <form className='col card text-white bg-transparent mb5 pt-5 pb-2'>
                        <fieldset>
                            <legend className='text-center'>Buscador Letras De Canciones</legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input
                                        type='text'
                                        className='form-control'
                                        name='artista'
                                        placeholder='Nombre del artista'
                                        />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                <div className='form-group'>
                                        <label>Canción</label>
                                        <input
                                        type='text'
                                        className='form-control'
                                        name='canción'
                                        placeholder='Nombre de la canción'
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                            type='submit'
                            className='btn btn-primary float-right'
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form; 