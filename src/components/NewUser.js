import React from 'react';
import { fetchAllLocations } from '../actions/index';

class NewUser extends React.Component {
    state = {
        email: '',
        location_id: '',
        name: '',
        locations: []
    };

    componentDidMount() {
        fetchAllLocations().then(response => {
            this.setState({ locations: response.data.data });
        });
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onAddUser(this.state);
        this.handleReset();
    };

    handleReset = () => {
        this.setState({
            email: '',
            name: '',
            location_id: ''
        });
    };

    render() {
        return (
            <div className="col-md-6 container pt-5">
                <div className="card form-group">
                    <div className="card-body">
                        <form onSubmit={ this.handleSubmit }>
                            <h3>Formulario</h3>

                            <div className="form-group text-left">
                                <label for="name">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    required="required"
                                    onChange={ this.handleInputChange }
                                    value={ this.state.name }
                                />
                            </div>
                            <div className="form-group text-left">
                                <label for="name">Correo Electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    required="required"
                                    onChange={ this.handleInputChange }
                                    value={ this.state.email }
                                />
                            </div>
                            <div class="form-group text-left">
                                <label for="location_id">Ciudad</label>

                                <select
                                    type="text"
                                    className="form-control"
                                    name="location_id"
                                    required="required"
                                    value={this.state.location_id ? this.state.location_id : ''}
                                    onChange={ this.handleInputChange }>
                                    <option value=""></option>
                                    {
                                        (this.state.locations && this.state.locations.length > 0) && this.state.locations.map((location) => {
                                            return (<option value={`${location.id}`}> {location.attributes.name}</option>);
                                        })
                                    }
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewUser;