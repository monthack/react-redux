import React, { useEffect } from 'react';

//Redux
import { fetchAllUsers } from '../redux/slices/users';
import { useSelector, useDispatch } from 'react-redux';

const UserList = () => {
  const dispatch = useDispatch();
  const { list: users } = useSelector((state) => state.users);

  //Aquí ejecuta la llamada a la api o hace el cambio
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {users.map((user, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card">
                <img src={user.avatar} alt="avatar" />
                <div className="card-body">
                  <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                  <p className="card-text">{user.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
