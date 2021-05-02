import * as React from 'react';
import './Card.css';

export interface CardProps {
    id: number,
    name: string,
    email: string
}

export default class Card extends React.Component<CardProps, {}> {
    render() {
        return (
            <div className="card-container">
                <img alt="monster" src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`} />
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
            </div>
        )
    }
}
