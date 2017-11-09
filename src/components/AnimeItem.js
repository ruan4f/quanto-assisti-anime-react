import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'react-materialize'
import Modal from './Modal'

class AnimeItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = { isModalOpen: false }

        this.createItem = this.createItem.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    createItem(item) {
        return <div key={item.key}>
            <Row className="valign-wrapper card-panel">
                <Col s={2}><img src={item.image_url_med} alt="" /></Col>
                <Col s={6}>
                    <label> {item.title_romaji}</label>
                </Col>
                <Col s={2}>
                    Episódios: {item.assisted_episodes}/{item.total_episodes}
                </Col>
                <Col>
                    <Button waves='light' icon='remove' onClick={() => this.props.removeEpisode(item.key, item.assisted_episodes)} />
                </Col>
                <Col>
                    <Button waves='light' icon='add' onClick={() => this.props.addEpisode(item.key, item.assisted_episodes)} />
                </Col>
                <Col>
                    <Button waves='light' icon='edit' onClick={this.openModal} />
                </Col>
                <Col>
                    <Button className='red' waves='light' icon='delete' onClick={() => this.props.deleteAnime(item.key)} />
                </Col>
            </Row>
            <Modal show={this.state.isModalOpen} onClose={this.closeModal}>
                <h1>Modal title</h1>
                <p>hello</p>                
            </Modal>
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

AnimeItem.propTypes = {
    addEpisode: PropTypes.func,
    removeEpisode: PropTypes.func,
    deleteAnime: PropTypes.func
}

export default AnimeItem