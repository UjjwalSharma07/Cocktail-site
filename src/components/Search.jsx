import React, { useRef } from 'react'
import { useDispatch} from 'react-redux'
import { fetchSearchCocktails } from '../redux/features/cocktailSlice';
const Search = () => {
    const searchterm = useRef();
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    const handleChange = ()=>{
        const searchText = searchterm.current.value
        dispatch(fetchSearchCocktails({searchText}));
    }
  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
        <form onSubmit={handleSubmit} >
            <div className='mb-2'>
                <input type="text" 
                ref={searchterm} 
                onChange={handleChange}
                className='form-control'
                style={{width:400} }
                placeholder='Search here'
                />
            </div>
        </form>
      </div>
    </>
  )
}

export default Search
