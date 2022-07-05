import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useJoke from '../../hooks/useJoke';
import Joke from '../../components/Joke';

function JokesCategory({initialJoke}) {
    const router = useRouter()
    const { category } = router.query
    const { randomJoke, fetchRandomJoke, error, loading } = useJoke(initialJoke)

    return error ? <div>
            <p>{error}</p>
            <Link href="/"><button> Return to home screen</button></Link>
        </div> : randomJoke ? <div>
            <h4>Random joke from category: {category}</h4>
            {randomJoke && <Joke value={randomJoke.value}/>}
            <button disabled={loading} onClick={()=>{
                if (!Boolean(loading)) {
                    fetchRandomJoke(category)
                }
            }}>New Joke!</button>
        </div> : null
}

export async function getServerSideProps(context) {
    const { category } = context.query;
    
    const initialJoke = await axios.get(`${process.env.JOKES_API_BASE_URL}/random?category=${category}`).then((response)=>{
        return response.data
    }).catch((e)=>{
        console.log("Could not find initialJoke: ", e);
        return null
    })

    return {
      props: {
          initialJoke
      },
    }
}

export default JokesCategory