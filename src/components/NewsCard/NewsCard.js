import React from 'react';
import {Button} from 'react-bootstrap';
import '../NewsCard/NewsCard.css'
function NewsCard(props) {
   
    return (
        
        <div className="Card">
            <img className="Image" src={props.urlToImage} alt="" width="100%"></img>
            <div className="container">
                <h5>{props.title}</h5>
                <a href={props.url}>
                    <Button variant="dark">Go To Post</Button>
                    </a>
            </div>
        </div>
    );
}

export default NewsCard;