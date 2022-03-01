import React from 'react';
import { useState } from 'react';
import InputField from '../inputField';
import { AppStrings } from '../../common/strings/strings';



const SearchBook = ({onSearch,searchResult}) => {
    const [searchBookTitle,setSearchBookTitle] = useState('')
    const handleSearch = (e) => {
        setSearchBookTitle(e.target.value)
    }
    const handleSearchResults = (e) => {
        e.preventDefault()      
        onSearch(searchBookTitle)  
    } 
    return ( 
    <div className="searchBox">
        <form onSubmit={handleSearchResults}>
            <InputField fieldType='input' value={searchBookTitle} name='SearchBook' 
                label={AppStrings.questions.searchBook.q} required='fa'
                placeholder='Enter Book Title' onChange={handleSearch}/>
            <button className='btn btn-theme' 
            style={{display:'block',marginLeft:'auto'}}>Search</button>
        </form>
        <div style={{textAlign:'center'}}>
            {searchResult.length === 0 ? 
            <span>Waiting for result, please type something and click search</span> : 
            (<span>Found and can be seen on console</span>)}
            
            {searchResult.length === 0 ? false : console.log(searchResult)}
        
        </div>
    </div>
    );
}
 
export default SearchBook;