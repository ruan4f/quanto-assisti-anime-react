import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'react-materialize'

class ItemPesquisa extends Component {
    constructor(props, context) {
        super(props, context);

        this.createItem = this.createItem.bind(this);
    }

    createItem(item) {
        return <div key={item.key}>
            <Row className="valign-wrapper card-panel">
                <Col s={2}><img src={item.image_url_med} alt="" /></Col>
                <Col s={6}>
                    <label> {item.title_romaji}</label>
                </Col>
                <Col s={2}>
                    Episódios: {item.total_episodes}
                </Col>
                <Col s={2} className="right-align"><Button waves='light' icon='add' onClick={()=>this.props.addItem(item)}></Button></Col>
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

ItemPesquisa.propTypes = {
    addItem: PropTypes.func
}

export default ItemPesquisa