import React, { useRef } from 'react';
import history from './../history'
import { useState,useEffect } from "react";
import _ from 'lodash'
import AllBlogs from "./all_blogs";
import { Firedb } from "../api/firebaseConfig";
import SkeletonAnimation from "./skeleton_anim/Skeleton";
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppStrings } from './common/strings/strings';
import ToastNotrification from './common/toastNotrification/index';
import SearchBook from './forms/searchBook';

const Home = () => {
   let BookListRef = [];
   // let filteredData = [];
   // let newArray = []
   const totalBooks = useRef([])
   const animationrange = _.range(0,5)
   const [books,setBooks] = useState([])
   const [error,setError]= useState('')
   const [BookLike,setBookLike] = useState();
   const [searchBooks,setSearchBooks] = useState([])
   // const {state} = props.location;
   // window.localStorage = state ? state.from.pathname : '/'
   const BookContext = React.createContext(books) // Store Book value Globally
   const handleDelete = id_del => {
      const updatedBooks = [...books].filter(i => i.id !== id_del);
      setBooks(updatedBooks)
      if(id_del <= 16){
         alert(AppStrings.ErrorOccured.AdminPermit)
         return false;
      }
      else{
         Firedb.ref(`books/`).child(`${id_del}`).remove()
         .then(() => {
            // toast.dark("Tada!!! Successfully Deleted!");
            toast.success(AppStrings.SuccessOperations.DeleteSuccess)
            history.push('/books/') 
         })
         .catch(err => {
            console.log(err)
            toast.error(AppStrings.ErrorOccured.noDelete);
         })
      }
   }
   const handleLike = book_id => {
      /* Edit Existing Value with once and then update */  
      Firedb.ref(`books/`).child(`${book_id}`)
      .update({'BookLike':!BookLike})
      .then(_ => {
         setBookLike(!BookLike)
         toast.success(AppStrings.SuccessOperations.LikeSuccess,{autoClose:2000});
      })
      .catch(error => {
         setError(error)
         toast.error(AppStrings.ErrorOccured.noLike,{autoClose:2000});
         console.log(error.message);
      })

   }
   const handleSearch = (bookname) => {
      let filteredData = []
      const oldRecords = [...BookContext.Provider._context._currentValue]
      console.log(bookname,oldRecords)
      if (!bookname) return null
      else if(bookname.length === 1 || bookname.length <= 1){
         setBooks(books)
      }
      else{
         filteredData = oldRecords.filter(term => {
            return (
               term.BookTitle.toString().toLowerCase().includes(bookname.toLowerCase().trim())         
            )
         })
         console.log(filteredData)
      }
      // let BookNewList = [],sentence = '';
      // if(bookname.length > 5){
      //    sentence = bookname.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
         // const words = bookname.split(' ')
         // words.map((term) => {
         //    return term[0].toUpperCase() + term.substring(1)}).join(" ")   
         // console.log(sentence)
      // }
      // if (!bookname) return null
      // else{   
      // Firedb.ref('/books').orderByChild('BookTitle')
      //    .equalTo(sentence).on('value', snapshot => {
      //       let filteredBooks = [];
      //       snapshot.forEach(snap => {
      //          // eslint-disable-next-line react-hooks/exhaustive-deps
      //          BookNewList = snap.val();
               
      //          filteredBooks.push({
      //             key:snap.key,
      //             BookAuthor:BookNewList.BookAuthor,
      //             BookTitle:BookNewList.BookTitle,
      //             BookDesc:BookNewList.BookDesc,
      //             BookPublished:BookNewList.BookPublished,
      //             BookLike:BookNewList.BookLike,
      //             id:BookNewList.id
      //          });
      //       });
      //       setSearchBooks(filteredBooks)
      //    })
      // }
   }
   useEffect(() => {
      setTimeout(() => {
         Firedb.ref(`books/`).on("value", snapshot => {
            let books = [];
            snapshot.forEach(snap => {
               // eslint-disable-next-line react-hooks/exhaustive-deps
               BookListRef = snap.val();
               books.push({
                  key:snap.key,
                  BookAuthor:BookListRef.BookAuthor,
                  BookTitle:BookListRef.BookTitle,
                  BookDesc:BookListRef.BookDesc,
                  BookPublished:BookListRef.BookPublished,
                  BookLike:BookListRef.BookLike,
                  id:BookListRef.id
               });
            });
            totalBooks.current.push(books)
            setBooks(books)
            
            history.push('/books/')  
         })
      },1000)
   }, []);
   return (
      <section className="main">
         {/* Search Component for Searching a Book */}
         <SearchBook onSearch={handleSearch} searchResult={searchBooks}>
         {/* {searchBooks=== 0 ? <span>Waiting for result</span> : (<span>Found and can be seen on console</span>,console.log(searchResult))} */}
         </SearchBook>
         
         <div className="available-books">
            {error && <p> {error} </p>}
            <ToastNotrification/>
            {books && <AllBlogs totalBooks={totalBooks.current} 
              books={books} handleDelete={handleDelete} onLike={handleLike}/>}
            {(!books || books.length === 0) && 
              animationrange.map((n) => <SkeletonAnimation key={n} typeMain="article"/>)}
         </div>
      </section>
   )
}
export default Home;