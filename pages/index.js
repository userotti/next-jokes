import axios from 'axios'
import Category from '../components/Category';

function HomePage({ categories }) {

    return <div>
        <h4>Welcome to Jokes App!</h4>
         
        <h5>Select a category:</h5>
        {categories && <div className="list">
            {categories.map((category)=>{
                return <Category key={category} href={`/jokes/${category}`} category={category}/>
            })}
        </div>}
    </div>
}

export async function getServerSideProps() {
    
    return {
      props: {
          categories: await axios.get(`${process.env.JOKES_API_BASE_URL}/categories`).then((response)=>{
            return response.data
          })
      },
    }
}



export default HomePage