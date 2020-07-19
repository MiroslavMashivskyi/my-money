import React from 'react';
import Currency from './Currency';
import {currencies} from '../API/currencies';

const Currency_Container = () => {
    return (
        <Currency currenciesList={currencies} />
    )
}

export default Currency_Container;