import axios from 'axios'
import useJoke from '../../hooks/useJoke';
import Joke from '../../components/Joke';

function Jokes({initialJoke}) {
    const { randomJoke, fetchRandomJoke, error, loading } = useJoke(initialJoke)

    return error ? <div>
        <p>{error}</p>
        <Link href="/"><button> Return to home screen</button></Link>
    </div> : randomJoke ? <div>
        <h4>Random joke: </h4>
        {randomJoke && <Joke value={randomJoke.value}/>}
        <button disabled={loading} onClick={()=>{
            if (!Boolean(loading)) {
                fetchRandomJoke()
            }}}>New Joke!</button>
    </div> : null

}

export async function getServerSideProps() {
    return {
      props: {
          initialJoke: await axios.get(`${process.env.JOKES_API_BASE_URL}/random`).then((response)=>{
            return response.data
          })
      },
    }
}


export default Jokes