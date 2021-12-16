import React, { useEffect,useState } from 'react';
import NewsCard from '../../NewsCard/NewsCard';
import { Spinner } from 'react-bootstrap';
import '../HomeView/HomeView.css'
function Headline(props) {
    const[isLoading,setLoading] = useState(true);
    const [HeadlineData, setHeadlineData] = useState([]);
    const[gotData,setGotData] = useState(false);
    const getHeadlines = async () => {
      try {
       const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.region}&apiKey=610f3044f4c54d95b5f807c9c7233a2c`);
       const json = await response.json();
       setHeadlineData(json.articles);
       setGotData(true);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
}
useEffect(() => {
    getHeadlines();
});
if (!gotData){
  return <h1>Error Occured</h1>
  }
else{
  if (isLoading){
  return <div className="SpinnerRoot"><Spinner animation="border" /></div>
}
  else{
    return HeadlineData.map(item => <div><NewsCard urlToImage={item.urlToImage} title ={item.title} url={item.url}/></div>)
    }
  }
}
export default Headline;