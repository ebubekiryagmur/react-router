import { Link, useLoaderData, useParams } from 'react-router-dom';
import styled from 'styled-components';

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    background-color: #fff;
`;

const SelectOption = styled(Link)`
    padding: 10px;
    border-bottom: 1px solid #ced4da;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: inherit;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: #e9ecef;
    }
`;



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

     <SelectContainer>
            <SelectOption to={`/users/${userId}/Posts`}>Posts</SelectOption>
            <SelectOption to={`/users/${userId}/Albums`}>Albums</SelectOption>
            <SelectOption to={`/users/${userId}/Todos`}>Todos</SelectOption>
        </SelectContainer>
    

    </>
  )
}

export default UserDetailPage