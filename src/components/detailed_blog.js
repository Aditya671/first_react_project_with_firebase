import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Firedb } from '../api/firebaseConfig';
import { AppStrings } from './common/strings/strings';
// import useFetch from './cust_hook/useFetch';

const DetailedBlog = ({user}) => {
    const [data,setData ] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        Firedb.ref(`books/${id}`).once("value")
        .then(snapshot => {
            setData(snapshot.val())
        });
        // Firedb.ref(`books/${id}`).on("value", (snapshot,errorObject) => {
        //     setData({data:snapshot.val()})
        //     console.log(data)
        //   }, function (errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        //   });    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <section className="main">
        <div className="BlogInDetail flex flex100 jusifyMCenter">
            {data && (
                <article className="myBlog flex100">
                    <div className="bTitle flex flex100 alignMStart">
                        <div className='flex20 flexM44'>
                            <p>{AppStrings.Books.Book_title}
                                <span className='floatLRight'>&ensp; :</span></p>
                        </div>
                        <div className='flex80 flexM56'><p>{data.BookTitle}</p></div>
                    </div>
                    <div className="bAuthor flex flex100 alignMStart">
                        <div className='flex20 flexM44'>
                            <p>{AppStrings.Books.Book_Author}
                                <span className='floatLRight'>&ensp; :</span></p>
                        </div>
                        <div className='flex80 flexM56'><p>{data.BookAuthor}</p></div>
                    </div>
                    <div className="bAuthor flex flex100 alignMStart">
                        <div className='flex20 flexM44'>
                            <p>{AppStrings.Books.Book_publish}
                                <span className='floatLRight'>&ensp; :</span></p>
                        </div>
                        <div className='flex80 flexM56'><p>{data.BookPublished}</p></div>
                    </div>
                    <div className="bDesc flex flex100 alignMStart">
                        <div className='flex20 flexM44'>
                            <p>{AppStrings.Books.Book_Desc}
                                <span className='floatLRight'>&ensp; :</span></p>
                        </div>
                        <div className='flex80 flexM56'><p>{data.BookDesc}</p></div>
                    </div>
                </article>
            )}
            <div className="editThisBlog">
                <Link to={`/books/editBook/${id}`}><span className="editBlogClick"></span></Link>
            </div>
        </div>
        </section>
    )
}
export default DetailedBlog;