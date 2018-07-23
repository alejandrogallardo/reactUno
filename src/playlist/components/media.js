import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';


class Media extends PureComponent{
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
        // this.setState({
        //   author: 'Otro Autor',
        // })
        this.props.openModal(this.props);
    }
    render () {
        const styles = {
            container: {
                fontSize: 18,
                color: 'peru',
                background: 'black',
                cursor: 'pointer',
                width: 260,
                border: '1px solid blue',
            }
        }
        return (
            <div className="Media" onClick={this.props.handleClick}>
                <div className="Media-cover ">
                    <img className="Media-image" src={this.props.cover} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}
Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}
export default Media;