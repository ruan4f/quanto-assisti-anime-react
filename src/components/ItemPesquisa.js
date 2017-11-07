import React, { Component } from 'react'
import { Row, Col, Button, Icon } from 'react-materialize'

class ItemPesquisa extends Component {
    constructor(props, context) {
        super(props, context);

        this.createItem = this.createItem.bind(this);
    }

    createItem(item) {
        return <div key={item.key}>
            <Row className="valign-wrapper card-panel">
                <Col size={2}><img src={item.image_url_med} alt="" /></Col>
                <Col size={4}>
                    <label> {item.title_romaji}</label>
                </Col>
                <Col size={4}>
                    Episódios: {item.total_episodes}
                </Col>
                <Col size={2} className="right-align"><Button waves='light'><Icon>add</Icon></Button></Col>
            </Row>
        </div>
    }

    render() {
        var newItems = this.props.items;
        var listItems = newItems.map(this.createItem)

        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default ItemPesquisa