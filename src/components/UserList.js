import React from 'react';

const UserList = ({users}) => (
    <div className="col-md-6 container pt-5">
        <h3 className="text-left">Listado</h3>
        {
            (users.length) ?
                users.map(data => (
                    <div key={data.id} style={{ 'border': '1px solid #eee' }}>
                        <h4>{data.attributes.name}</h4>
                        <p>{data.attributes.city}</p>
                    </div>
                )) : <div> Sin usuarios </div>
        }
    </div>
);

export default UserList