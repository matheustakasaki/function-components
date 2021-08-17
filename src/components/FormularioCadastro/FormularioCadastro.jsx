import React from 'react'
import { Switch, TextField, Button, FormControlLabel } from '@material-ui/core'

// Quando criamos uma função,
function FormularioCadastro() {

    //  O retorno dela precisa ser a árvore de renderização
    return (
        <form action="">

            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />

            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />

            <FormControlLabel label="Promoções" control={<Switch name="Promoções" color="primary" defaultChecked />} />

            <FormControlLabel label="Novidades" control={<Switch name="Novidades" color="primary" defaultChecked />} />

            <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
        </form>
    )
}

export default FormularioCadastro