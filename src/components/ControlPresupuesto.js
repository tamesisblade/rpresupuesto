import React from 'react';
import PropTypes from 'prop-types';
import {revisarPresupuesto} from '../helper';
const ControlPresupuesto = ({presupuesto,restante}) => {
    return ( 
        <div>
            <div className="alert alert-primary">
                Presupuesto $ { presupuesto }
            </div>
            <div className={revisarPresupuesto(presupuesto,restante)}>
                Restante $ { restante }
            </div>
        </div>
     );
    ControlPresupuesto.propTypes  = {
        presupuesto: PropTypes.number.isRequired,
        restante: process.number.isRequired
    }
}
 
export default ControlPresupuesto;