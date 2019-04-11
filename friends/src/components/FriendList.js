import React from 'react';

//███████╗██████╗ ██╗███████╗███╗   ██╗██████╗ ██╗     ██╗███████╗████████╗
//██╔════╝██╔══██╗██║██╔════╝████╗  ██║██╔══██╗██║     ██║██╔════╝╚══██╔══╝
//█████╗  ██████╔╝██║█████╗  ██╔██╗ ██║██║  ██║██║     ██║███████╗   ██║   
//██╔══╝  ██╔══██╗██║██╔══╝  ██║╚██╗██║██║  ██║██║     ██║╚════██║   ██║   
//██║     ██║  ██║██║███████╗██║ ╚████║██████╔╝███████╗██║███████║   ██║   
//╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝╚══════╝   ╚═╝   
//                                                                         

import { connect } from 'react-redux';
import { getTheFUCKINGFRIENDS } from '../actions';

class FriendList extends React.Component {
    
    componenetDidMount() {
        this.props.getTheFUCKINGFRIENDS();
    }

    render(){
        //console.log(this.state);
        return (
            {this.state.data.map((friends) => {
                <h1>{friends.name}</h1>
            })}
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, { getTheFUCKINGFRIENDS } )(FriendList);