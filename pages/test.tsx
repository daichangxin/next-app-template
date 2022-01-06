import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';

const App: FunctionComponent = () => {
    const router = useRouter();

    useEffect(() => {
        router.push(`/test?counter=10`, undefined, { shallow: true });
    }, []);

    useEffect(() => {
        console.log('counter:', router.query.counter);
    }, [router.query.counter]);

    return <div>{Date.now()}</div>;
};

export default App;
