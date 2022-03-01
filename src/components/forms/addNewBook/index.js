import { useState } from "react";
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import history from "../../../history";
import { Firedb } from '../../../api/firebaseConfig';
import { AppStrings } from '../../common/strings/strings';
import InputField from "../inputField";
const AddNewBook = () => {

    const { id:formId } = useParams();
    const [formValues,setFormValues] = useState({
        BookTitle:'',
        BookLike:false,
        BookAuthor:'',
        BookPublished:'',
        BookDesc:'',
        id:formId
    })
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
      
        setFormValues((prevalue) => {
          return {
            ...prevalue,   // Spread Operator               
            [name]: value
          }
        })
      }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formValues)
        Firedb.ref(`books/`).push(formValues)
        .then(_ => {
            toast.success('Book Addition SuccessFull',{
                autoClose:2000
            })
            setTimeout(() => {
                history.push('/books/') 
            }, 3500);
        })
        .catch(err => alert(err.message))
    }
    /* add calendardate to max attr of input date*/
    let [month, dateToday, year]  = new Date().toLocaleDateString("en-US").split('/')
    let calendarDate = `${year}-${month}-${dateToday}`
     
    return(
        <div className='main'>
            <div className="create-blog-form">
                <form onSubmit={handleSubmit} >
                    {/* *Book Title Field* */}
                    <InputField type="text" name={Object.keys(formValues)[0]} fieldType='input'
                    placeholder={`Enter ${AppStrings.Books.Book_title}`} 
                    label={AppStrings.Books.Book_title} onChange={handleChange} />
                    {/* *Book Author Field* */}
                    <InputField type="text" name={Object.keys(formValues)[2]} fieldType='input'
                    placeholder={`Enter ${AppStrings.Books.Book_Author}`}
                    label={AppStrings.Books.Book_Author} onChange={handleChange} />
                    {/* *Book Publishing Date Field* */}
                    <InputField type="date" name={Object.keys(formValues)[3]} fieldType='input'
                    placeholder={`Enter ${AppStrings.Books.Book_publish}`}
                    label={AppStrings.Books.Book_publish} onChange={handleChange} 
                    max={calendarDate} min="1950-01-01" minLength='50'/>
                    {/* *Book Description Textarea* */}
                    <InputField fieldType='textarea' 
                    onChange={handleChange} name={Object.keys(formValues)[4]}
                    label={AppStrings.Books.Book_Desc} minLength='50' rows='3'
                    placeholder={`Enter ${AppStrings.Books.Book_Desc}`} />

                    <div className="form-group">
                        <button className="btn btn-delete">{AppStrings.common.btn_add}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddNewBook;