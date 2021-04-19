import React, {useEffect, useState} from 'react';
import * as R from 'ramda';
import { retry } from '../../utils';

const Fp = () => {
    const [count, setCount] = useState(0);
    const add = R.curry((x, y) => x + y);
    const addOne = add(1);
    const addTen = add(10);
    const match = R.curry((what, str) => str.match(what));
    const replace = R.curry((what, replacement, str) => str.repalce(what, replacement));
    const filter = R.curry((f, ary) => ary.filter(f));
    const map = R.curry((f, ary) => ary.map(f));
    const hasSpace = match(/\s+/);
    const findSpace = filter(hasSpace)
    console.log(findSpace(['dad des', 'deaeefd', 'Hal le lu jah']));
    useEffect(() => {
        const p = () => new Promise((resolve, reject) => {
            const ran = Math.random() * 10;
            if(ran < 1){
                resolve(ran)
            } else {
                reject(0)
            }
        })
        console.log(123)
        retry(p, 100).then(res => {alert(res)});
    }, [])
    return (
        <div>
            functional programming
            <p>{addOne(2)}</p>
            <p>{addTen(2)}</p>
        </div>
    )
}

export default Fp;