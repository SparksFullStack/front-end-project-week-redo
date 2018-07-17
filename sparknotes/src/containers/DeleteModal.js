import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/actions';
import { bindActionCreators } from 'redux';
import './DeleteModal.css';
import { NavLink } from 'react-router-dom';

class DeleteModal extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="deleteModal">
                <Modal
                    isOpen={this.props.isOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Delete Modal"
                    className="deleteModal__modal"
                    >
                    <p className="deleteModal__text">Are you sure you want to delete this?</p>

                    <div className="deleteModal__buttons">
                        <button onClick={() => this.props.deleteNote(this.props.id)} style={styles.delete}>Delete</button>
                        <button onClick={this.props.closeModal} style={styles.no}>No</button>
                    </div>

                </Modal>
            </div>
        )
    }
}

const styles = {
    delete: {
        border: ".5px solid black",
        height: "51px",
        width: "30%",
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
        marginTop: "20px",
        marginRight: "10px",
        fontSize: "16px",
    },
    no: {
        border: ".5px solid black",
        height: "51px",
        width: "30%",
        backgroundColor: "rgb(8, 196, 196)",
        color: "white",
        textAlign: "center",
        marginTop: "20px",
        marginLeft: "10px",
        fontSize: "16px",
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ deleteNote }, dispatch);
}

export default connect(null, mapDispatchToProps)(DeleteModal);
