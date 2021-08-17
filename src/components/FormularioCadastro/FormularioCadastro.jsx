import React from 'react'
import Button from '@material-ui/core/Button'
// Quando criamos uma função,
function FormularioCadastro() {

    //  O retorno dela precisa ser a árvore de renderização
    return(
        <form action="">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Texto"/>

            <label htmlFor="">Sobrenome</label>
            <input type="text" placeholder="Texto"/>

            <label htmlFor="">CPF</label>
            <input type="text" placeholder="Texto"/>

            <label htmlFor="">Promoções</label>
            <input type="checkbox" />
            <label htmlFor="">Novidades</label>
            <input type="checkbox" />

            <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
        </form>
    )
}

export default FormularioCadastro