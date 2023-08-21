


function Card(props){

    return(
        <div>
            <h1>{props.card.name}</h1>
            <h4>{props.card.price}</h4>
        </div>
    );
}
export default Card;