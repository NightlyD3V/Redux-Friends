import React from 'react';

//███████╗██████╗ ██╗███████╗███╗   ██╗██████╗ ██╗     ██╗███████╗████████╗
//██╔════╝██╔══██╗██║██╔════╝████╗  ██║██╔══██╗██║     ██║██╔════╝╚══██╔══╝
//█████╗  ██████╔╝██║█████╗  ██╔██╗ ██║██║  ██║██║     ██║███████╗   ██║   
//██╔══╝  ██╔══██╗██║██╔══╝  ██║╚██╗██║██║  ██║██║     ██║╚════██║   ██║   
//██║     ██║  ██║██║███████╗██║ ╚████║██████╔╝███████╗██║███████║   ██║   
//╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝╚══════╝   ╚═╝   
//                                                                         

import { connect } from 'react-redux';
import { friends } from '../actions';

class FriendList extends React.Component {
    
    componentDidMount() {
        this.props.friends();
    }

    render() {
        return this.props.data.map((friend) => {
            return (
                <h1>{friend.name}</h1>
            )
        })
    }
}

const mapStateToProps = (state) => {
    console.log(state.data);
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, { friends } )(FriendList);