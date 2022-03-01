import React from 'react';
import { useEffect } from 'react';
const EditBook = (props) => {
    const {user} = props;
    console.log(user)
    useEffect(() => {
     /* Update Value at backend */
      // Firedb.ref(`books/${book_id}/${BookLike}`)  
      // .once("value")
      //   .then(snapshot => {
      //     setBookLike(snapshot.val().BookLike)
      //     toast.success("Like property Record Updated",{autoClose:2000});          
      //   })
      //   .catch(error => {
      //     toast.error("Property Not avaialable in Records \n Please update recors",{autoClose:2000});
      //     console.log(error.message);
      //   })
    }, [])

    return ( 
    <section className="main">
        {user === 'admin' ? 'You can Edit the Book': 'Sorry You Cannot Edit the Book' }
    </section> );
}
 
export default EditBook;