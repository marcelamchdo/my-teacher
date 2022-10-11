import { Button } from "@mui/material";
import { useState } from "react";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorService";
import { Description, Info, ListaVazia, ListItem, ListStyled, Name, TeacherPhoto, Value } from "./ListPage.style";

interface ListProps {
    professors: Professor[],
    onSelect: (professor: Professor) => void
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
                                <Value>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Value>
                                <Description>{FormatadorService.limitarTexto(professor.descricao, 200)}</Description>
                                <Button onClick={() => props.onSelect(professor)} sx={{ width: '70%'}}>Marcar Aula com {professor.nome}</Button>
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