import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Error from '../components/Error';
const Pregunta = ({ guardarPresupuesto,guardarRestante,actualizarPregunta }) => {
    //definir el state 
    const [cantidad,guardarCantidad] = useState(0);
    const [ error, guardarError ] = useState(false);


    //funcion que lee el presupuesto
    const definirPresupuesto = (e) =>{
        guardarCantidad(parseInt(e.target.value,10));
     
    }

    //function para agregar presupuesto
    const agregarPresupuesto = (e) =>{
        e.preventDefault();

        //validar
        if( cantidad < 1 || isNaN( cantidad ) ){
            guardarError(true);
            return;
        }

        //si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

        //si se pasa la validacion
    }
  
    return (  
        <div>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje ="El presupuesto es incorrecto"/> : null }
            <form
                onSubmit = { agregarPresupuesto }
            >
                <input 
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange ={ definirPresupuesto }
                />

                <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presuesto"    
                />
            </form>

        </div>

    );
   Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante : PropTypes.func.isRequired,
    actualizarPregunta : PropTypes.func.isRequired
   } 
}
 
export default Pregunta;