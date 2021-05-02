import * as React from 'react';
import Card, {CardProps} from '../card/Card';
import './CardList.css';

interface CardListProps {
    cards: CardProps[]
}

export default class CardList extends React.Component<CardListProps, {}> {
    render() {
        return (
            <div className="card-list">
                {
                    this.props.cards.map(cardProps => <Card key={cardProps.id} {...cardProps} />)
                }
            </div>
        )
    }
}
