import { Link } from "react-router-dom";

import LikeComponent from './common/likeComponent';
import Modal from "./common/modal";
import { AppStrings } from "./common/strings/strings";
import Tooltip from './common/tooltip';
const AllBlogs = ({books,handleDelete,onLike}) => {  
    return (
    <div className="all-blogs-panel">
       <h3 style={{textAlign:'center'}}>
            {books.length === 0 ? <span>{AppStrings.Books.noBook}</span> : 
            (<span>{AppStrings.Books.available} {books.length} {AppStrings.Books.heading}</span>) }
        </h3>
        {books && books.map((blog,index) => { 
            return (
                <div className="blog-card flex flex100" key={index}>
                    <div className="blog-details flex60 flexM100">
                        <Link to={`/books/${blog.key}`}>
                            <h3 key={blog.id} className="blog-card-title" 
                            id={`book_${blog.id}`}>{blog.BookTitle}</h3>    
                        </Link>
                        <p>{AppStrings.Books.Book_written} {blog.BookAuthor}</p>
                    </div>
                    <div className="flex flex40 flexM100 justifyMEnd">
                        <LikeComponent liked={blog.BookLike} onClick={() => onLike(blog.key)}>
                            <Tooltip content={`Click! If you ${blog.BookLike ? AppStrings.Books.LikedBook.awesome : AppStrings.Books.LikedBook.noWorth}`}>
                                {<button className="button-likehidden"></button>}
                            </Tooltip>
                        </LikeComponent>
                        <Modal actionText='Delete Record' heading='Delete Book Record'
                        question={AppStrings.questions.deleteRecordBook.q}>
                            <Tooltip content={AppStrings.questions.deleteRecordBook.a} >
                                <button className="btn btn-delete" onClick={() => handleDelete(blog.key)}>
                                    {AppStrings.common.btn_delete} {AppStrings.Books.heading}</button>
                            </Tooltip>
                        </Modal>
                    </div>
                </div>
            )}
        )}
    </div>
    );
}
export default AllBlogs;