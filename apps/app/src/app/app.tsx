import React, { useEffect, useState } from 'react';

import { Message } from '@nx-react-starter/api-interfaces';
import { Counter } from './components/Counter';

export const App = () => {
    const [m, setMessage] = useState<Message>({ message: '' });

    useEffect(() => {
        fetch('/api')
            .then((r) => r.json())
            .then(setMessage);
    }, []);

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome to app!</h1>
                <img
                    width="450"
                    src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
                    alt="Nx - Smart, Extensible Build Framework"
                />
            </div>
            <div className="bg-green-400 text-gray-800">{m.message}</div>
            <Counter />
        </>
    );
};

export default App;
