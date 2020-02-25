import { connect } from 'react-redux';
import { addUser } from '../actions';
import NewUser from '../components/NewUser';

const mapDispatchToProps = dispatch => {
    return {
        onAddUser: user => {
            dispatch(addUser(user));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(NewUser);