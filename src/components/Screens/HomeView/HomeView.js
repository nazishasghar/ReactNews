import React,{ useState,useEffect} from 'react';
import '../HomeView/HomeView.css'
import NewsCard from '../../NewsCard/NewsCard'
import { Spinner } from 'react-bootstrap';
function HomeView(props) {
    const[isLoading,setLoading] = useState(true);
    const [EverythingData, setData] = useState([]);
    const[gotData,setGotData] = useState(false);
    const getNews = async () => {
      try {
       const response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&from=2021-12-05&sortBy=popularity&apiKey=610f3044f4c54d95b5f807c9c7233a2c`);
       const json = await response.json();
       setData(json.articles);
       setGotData(true);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
}
    useEffect(() => {
    getNews();
   });
   if (isLoading){
    return <div className="SpinnerRoot"><Spinner className="Spinner" animation="border" /></div>
  }
  else{
    if (!gotData){
      return <h1>Error Occured</h1>
     }
     else{
       return EverythingData.map(item => <div><NewsCard urlToImage={item.urlToImage} title ={item.title} url={item.url}/></div>)
     }
    }
}
export default HomeView;