import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Lawsuit = ({ lawsuit }) => {
  return (
    <div>{lawsuit.title}</div>
  );
};

export default Lawsuit;