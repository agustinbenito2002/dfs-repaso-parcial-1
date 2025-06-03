const Controles = ({ onCambiarUnidad, onCambiarClima , fullreset}) => {
    return (
        <div className='controles-clima'>
            <button onClick={onCambiarUnidad}>Cambiar Unidad</button>
            <button onClick={() => onCambiarClima('Soleado')}>Soleado</button>
            <button onClick={() => onCambiarClima('Nublado')}>Nublado</button>
            <button onClick={fullreset}>reset</button>
        </div>
    )
}

export default Controles