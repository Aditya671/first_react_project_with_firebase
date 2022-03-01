import {Link} from 'react-router-dom';
const NotFound = () => {
    return(
        <section className="main">
            <div className="PageNotFound p-15 flex flexColumn">
                <h1>Oops....</h1>
                <div className="p-15">
                    <h2>Page Not Found</h2>
                </div>
                <Link className="nav-link pb-15" to="/books/">Back to Home Page</Link>
            </div>
        </section>
    );
}
export default NotFound;