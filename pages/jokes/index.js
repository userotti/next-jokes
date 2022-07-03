import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useJoke from '../../hooks/useJoke';
import Joke from '../../components/Joke';

function Jokes() {
    const { randomJoke, fetchRandomJoke, error } = useJoke()

    useEffect(()=>{
        fetchRandomJoke()
    }, []);
    
    return error ? <div>
        <p>{error}</p>
        <Link href="/"><button> Return to home screen</button></Link>
    </div> : randomJoke ? <div>
        <h4>Random joke: </h4>
        {randomJoke && <Joke value={randomJoke.value}/>}
        <button onClick={()=>{fetchRandomJoke()}}>New Joke!</button>
    </div> : null

}

export default Jokes