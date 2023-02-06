import { BrowserRouter,Routes, Route } from "react-router-dom"
import {useState, useEffect} from "react"

import {Navbar, VideoPage, VideoDetails} from './components/'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);

    async function fetchData (searchTerm){
        const response = await fetch(`https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&order=date`, options)
            .then(response => response.json())
            .catch(err => console.error(err)); 
        const info = response["items"]; 
        setData(info);
    }

    useEffect(()=>{fetchData(searchTerm)},[searchTerm])

    return(
    <BrowserRouter>
    <section className="page">
        <Navbar searchFunc={setSearchTerm}/>
        <div className="card-container">

            {data.length>0?data.map(item => <VideoDetails 
                vid={item['id']['videoId']} 
                date={item['snippet']['publishedAt']} 
                cid={item['snippet']['channelId']}
                title={item['snippet']['title']}
                description={item['snippet']['description']}
                channel={item['snippet']['channelTitle']}
                thumbnail={item['snippet']['thumbnails']['high']['url']}
            />):<VideoDetails />}
        </div>

        <Routes>
            <Route path="/video" element={<VideoPage />}/>
        </Routes>
    </section>
    </BrowserRouter>
);
}

export default App