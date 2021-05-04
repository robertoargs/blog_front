import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './BlogCard.css';
import { Link } from 'react-router-dom';

function BlogCard(props) {
  return (
    <>
      <Card className="propsCard">
        <CardImg top className="cardImg" src={props.src} alt={props.alt} />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          {/*<CardSubtitle tag="h6" className="mb-2 text-muted">{props.subTitle}</CardSubtitle>*/}
          <CardText>{props.text.length  <=100 ? props.text : `${props.text.substring(0,100)}...`  }</CardText>
          <Button className="btnPost" color="info"><Link className="postLink" to={`/posts/${props.id}`}>Ver más</Link></Button>
        </CardBody>
      </Card>
    </>
  );
}

export default BlogCard;