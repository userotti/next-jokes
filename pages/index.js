import { useCategories } from '../hooks/useCategories';

function HomePage() {

    const {loading, fetchCategories, categories, error} = useCategories()

    return <div>Welcome to Jokes!
        <button onClick={()=>fetchCategories()}> fetch the categories </button>
        {loading && <p> "loading" </p>}
        {categories && <div>
            {categories.map((category, index)=>{
                return <button key={index}> {category} </button>
            })}
        </div>}
    </div>
}
  
export default HomePage