import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import NasaGrid from './components/NasaGrid/NasaGrid'
import './App.css';

function App() {
  const [items, setitems] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    if(query===''){
      setisLoading(false)
    }else{setisLoading(true)}
    
    const fetchItems = async () => {
      const encoded = encodeURI(query);
      const result = await axios(`https://images-api.nasa.gov/search?q=${encoded}`)
      const things = []
      // console.log(result.data['collection']['items'])
      result.data['collection']['items'].map(
          item => {
            if(!item['data'] || !item['links']){
              things.push({'title':'Not found', 'img':'https://www.vecteezy.com/free-vector/banner-template'})
            }else{
              things.push({'title':item['data'][0]['title'], 'img':item['links'][0]['href'],
              'date_created':item['data'][0]['date_created'], 'location':item['data'][0]['location']})
            }
          }
      )
      setitems(things.reverse())
      setisLoading(false)
    }
    fetchItems()
    
  }, [query])

  return (
    <div className="App">
      <Header/>
      <Search getquery={(q) => setQuery(q)}/>
      <NasaGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
