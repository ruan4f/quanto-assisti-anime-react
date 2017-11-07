import React, { Component } from 'react'
import { Row, Col, Button } from 'react-materialize'

class AnimeItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.createItem = this.createItem.bind(this);
    }

    createItem(item) {
        return <div key={item.id}>
            <Row className="valign-wrapper card-panel">
                <Col s={2}><img src={item.image_url_med} alt="" /></Col>
                <Col s={4}>
                    <label> {item.title_romaji}</label>
                </Col>
                <Col s={4}>
                    Episódios: {item.total_episodes}
                </Col>
                <Col>
                    <Button icon='remove'/>
                </Col>
                <Col>
                    <Button icon='add'/>
                </Col>
            </Row>
        </div>
    }

    render() {
        var newItems = this.props.items
        var listItems = newItems.map(this.createItem)

        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default AnimeItem