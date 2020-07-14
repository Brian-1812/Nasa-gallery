import React, {useState} from 'react'

const Search = ({getquery}) => {
    const [query, setQuery] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault()
        getquery(query)
    }
    return (
        <section className="search">
            <form onSubmit={(e) => onSubmit(e)}>
                <input type="text"
                className="form-control"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
