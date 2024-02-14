import React from 'react';

const ImgEmpleado = ({empleadoImg}) => {
    return (
        <div className='h-25'>
        <img src={empleadoImg} alt="" className='card-img-top'/>
        </div>
    );
};

export default ImgEmpleado;