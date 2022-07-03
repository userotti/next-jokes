import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import useJoke from '../../hooks/useJoke';
import Joke from '../../components/Joke';

function JokesCategory() {
    const router = useRouter()
    const { category } = router.query
    const { randomJoke, fetchRandomJoke, error, loading } = useJoke()

    useEffect(()=>{
        if (Boolean(category)){
            fetchRandomJoke(category)
        }
    }, [category]);

    return error ? <div>
            <p>{error}</p>
            <Link href="/"><button> Return to home screen</button></Link>
        </div> : randomJoke ? <div>
            <h4>Random joke from category: {category}</h4>
            {randomJoke && <Joke value={randomJoke.value}/>}
            <button onClick={()=>{fetchRandomJoke(category)}}>New Joke!</button>
        </div> : null
}

export default JokesCategory