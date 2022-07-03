import { useEffect } from 'react';
import useCategories from '../hooks/useCategories';
import Category from '../components/Category';

function HomePage() {

    const {loading, categories, fetchCategories} = useCategories()

    useEffect(()=>{
        fetchCategories()
    }, []);

    return <div>
        <h4>Welcome to Jokes App!</h4>
         
        {loading ? <p> loading... </p> : <h5>Select a category:</h5>}
        {categories && <div className="list">
            {categories.map((category, index)=>{
                return <Category key={index} href={`/jokes/${category}`} category={category}/>
            })}
        </div>}
    </div>
}

export default HomePage