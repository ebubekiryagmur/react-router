import { Link, useLoaderData, useParams } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}


export const userLoader = async ({params}: any) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const user = await response.json();
    return user;
};

function UserDetailPage() {
    const user = useLoaderData() as User;
    const {userId} = useParams();
  return (
    <>
        <h1>{user.name} </h1>
        <p>Username: {user.name}</p>
        <p>Email: {user.email}</p>

         <NavDropdown title="Details" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={`/users/${userId}/Posts`}>Posts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/users/${userId}/Albums`}>Album</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/users/${userId}/Todos`}>Todos</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>

    </>
  )
}

export default UserDetailPage