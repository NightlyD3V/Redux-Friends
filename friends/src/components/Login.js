import React from 'react';
//██╗      ██████╗  ██████╗ ██╗███╗   ██╗
//██║     ██╔═══██╗██╔════╝ ██║████╗  ██║
//██║     ██║   ██║██║  ███╗██║██╔██╗ ██║
//██║     ██║   ██║██║   ██║██║██║╚██╗██║
//███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║
//╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝
//                  

import { connect } from 'react-redux';      
import { login } from '../actions';         
class Login extends React.Component {
    state={
        credentials: {
            username: '',
            password: ''
        }
    }

    login = (event) => {
        event.preventDefault()
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected');
        })
    }

    handleChanges = (event) => {
        event.preventDefault();
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [event.target.name] : event.target.value,
            }
        })
    }

    render(){
        //console.log(this.props.loggedIn);
        // if (this.props.loggedIn) {
        //     this.props.history.push('/protected');
        // }
        return(
            <div>
                <form onSubmit={this.login}>
                    <input 
                        onChange={this.handleChanges}
                        className="email"
                        name="username"
                        value={this.state.username}
                        placeholder='email...'
                        required
                    >
                    </input>
                    <input 
                        onChange={this.handleChanges}
                        className="password"
                        name="password"
                        value={this.state.password}
                        placeholder="enter password..."
                        required
                    >
                    </input>
                    <button value="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, { login })(Login);