import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';


class Media extends Component{
    // ES7
    state = {
        author: 'Alejandro Gallardo'
    }
    // ES6
    // constructor(props){
    //     super(props)
    //     // this.handleClick = this.handleClick.bind(this);
    //     this.state = {
    //         author: props.author
    //     }
    // }
    handleClick = (event) => {
        // console.log(this.props.title)
        this.setState({
          author: 'Sergio Hueco',
        })
    }
    render () {
        // const styles = {
        //     container: {
        //         fontSize: 18,
        //         color: 'peru',
        //         background: 'black',
        //         cursor: 'pointer',
        //         width: 260,
        //         border: '1px solid blue',
        //     }
        // }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover ">
                    <img className="Media-image" src={this.props.image} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        )
    }
}
Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
}
export default Media;