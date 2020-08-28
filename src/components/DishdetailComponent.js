
import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText,Row,Col} from 'reactstrap'
class DishdetailComponent extends Component{
    constructor(props){
        super(props)
    }
    renderDish(dish){
        if(dish != null)
        return(
            <div className='row'>
            <div className= "col-12 md-5 m-1" >  
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className= "col-12 md-5 m-1" >  
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            </div>
        )
        else
        return(<div></div>)
        
    }
    render(){
        return(
            <div className= "col-12 md-5 m-1" >  
                {this.renderDish(this.props.dish)}
            </div>   
        )
    }
}
export default DishdetailComponent;