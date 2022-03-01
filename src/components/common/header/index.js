import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { Firedb } from '../../../api/firebaseConfig';
import CurrentDateTime from '../currentDateTime';
import { AppStrings } from '../strings/strings';


const Header = ({title}) => {
    const [BookId,setBookId] = useState(0)
    useEffect(() => {
        Firedb.ref(`books/`).on("value", snapshot => {
          setBookId(snapshot.numChildren())
        })
    }, []);
    return (
        <div className="NavbarHeader flex flex100 justifyMCenter">
            <div className="navbar-brand">
                <h1>{title}</h1>
            </div>
            <ul className="allNavLinks">
                <li className="nav-item"><Link className="nav-link" to="/books/">{AppStrings.navigationLinks.homePage}</Link></li>
                <li className="nav-item"><Link className="nav-link" to={`/books/addNewBook/${BookId}`}>{AppStrings.navigationLinks.addBook}</Link></li>
            </ul>
            <div className="TimeShown">
                <CurrentDateTime/>
            </div>
        </div>
    );
}
export default Header;