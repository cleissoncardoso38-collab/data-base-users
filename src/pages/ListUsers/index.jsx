import TopBackground from "../../components/Topbackground";
import TopTitle from "../../components/topTitle";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
    CardUsers,
    Container,
    ContainerUsers,
    TrashIcon,
    UsersAvatar
} from "./styles";
import DefaultButton from '../../components/Button/'
import Trash from '../../assets/trash.svg'


function ListUsers() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()

    }, [])
    async function deleteUsers(id) {

        await api.delete(`/usuarios/${id}`)

        const newUsers = users.filter(user => user.id !== id)
        
                setUsers(newUsers)
    }
                

    return (
        <Container>

            <TopBackground />
            <TopTitle>Lista de Usuários</TopTitle>

            <ContainerUsers>

                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <UsersAvatar src={`https://i.pravatar.cc/150?u=${user.id}`} />
                        <div>
                            <h1>{user.name}</h1>
                            <p>idade: {user.age}</p>
                            <p>e-mail: {user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt='icon-trash' onClick={() => deleteUsers(user.id)} />

                    </CardUsers>
                ))}

            </ContainerUsers>
            <DefaultButton type='button' onClick={() => navigate('/')}>Voltar</DefaultButton>
        </Container>
    )
}

export default ListUsers