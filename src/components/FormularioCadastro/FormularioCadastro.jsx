import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
// Quando criamos uma função,
function FormularioCadastro() {

    //  O retorno dela precisa ser a árvore de renderização
    return (
        <form action="">

            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />

            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />

            <label htmlFor="">Promoções</label>
            <input type="checkbox" />
            <label htmlFor="">Novidades</label>
            <input type="checkbox" />

            <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
        </form>
    )
}

export default FormularioCadastro