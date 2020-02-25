import { connect } from 'react-redux'
import UserList from '../components/UserList';

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(
    mapStateToProps,
    null
)(UserList);