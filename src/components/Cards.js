import Card from './Card';

function Cards(props){

    return(
        <div>
        {
            props.data.map(card => {
                return <Card card={card}></Card>
            })
        }
        </div>
    );
}

export default Cards;