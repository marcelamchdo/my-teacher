import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { Description, Info, ListaVazia, ListItem, ListStyled, Name, TeacherPhoto, Value } from "./ListPage.style";

interface ListProps {
    professors: Professor[],
}

const ListPage = (props: ListProps) => {
    return (
        <div>
            {props.professors.length > 0 ? (
                        <ListStyled>
                        { props.professors.map(professor => (
                            <ListItem key={professor.id}>
                                <TeacherPhoto src={professor.foto}/>
                                <Info>
                                <Name>{professor.nome}</Name>
                                <Value>{professor.valor_hora.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</Value>
                                <Description>{professor.descricao}</Description>
                                <Button sx={{ width: '70%'}}>Marcar Aula</Button>
                            </Info>
                        </ListItem>    
                        )) }  
                    </ListStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}

        </div>

    )
}

export default ListPage;