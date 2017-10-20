import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    constructor(props) {
        super(props)
    }

    showMessage() {
        alert('mensagem de teste')
    }

    render() {

        return (
            <div>
                <button onClick={this.showMessage}>{this.props.text}</button>
            </div>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button