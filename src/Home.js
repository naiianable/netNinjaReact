import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

        //naming the data "blogs" inside this component so "blogs" can be used in return
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* conditional templating.  evals left side first, if false doesnt output anything.
            when it evals true, it will move to right side of && and output data */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;