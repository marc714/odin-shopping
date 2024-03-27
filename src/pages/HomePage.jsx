import { Link } from "react-router-dom";

// To your homepage, you can add whatever you’d like! A few images or information will be totally fine; it doesn’t have to be something fancy - it’s to test the concepts taught thus far.
// App.jsx loads the HomePage

export default function HomePage(){
    return (
        <>
        Home Page
        <Link to="/shop">Go Shopping NOW!!!!</Link>
        {/* link to blog/articles */}
        </>
    );
}