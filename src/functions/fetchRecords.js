import { toast } from "react-toastify";
import { Firedb } from "../api/firebaseConfig";
import { AppStrings } from "../components/common/strings/strings";
// import history from '../history'
const fetchRecords = async () => {
    let books = [];
    let BookListRef = [];
    // setTimeout(() => {
        await Firedb.ref(`books/`).on("value", snapshot => {
            
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
            console.log(books)  
            // history.push('/books/')  
        })
         // },1000)
    return books;
}
const doUpdateRecord = async (getValue,getKey,setError,setValue) => {
    Firedb.ref(`books/`).child(`${getKey}`)
      .update({getValue:!getValue})
      .then(_ => {
        setValue(!getValue)
         toast.success(AppStrings.SuccessOperations.LikeSuccess,{autoClose:2000});
      })
      .catch(error => {
         setError(error)
         toast.error(AppStrings.ErrorOccured.noLike,{autoClose:2000});
         console.log(error.message);
      })
   }
const fetchFunction = { 
    getBooks:fetchRecords,
    updateInRecord:doUpdateRecord
};
export default fetchFunction;