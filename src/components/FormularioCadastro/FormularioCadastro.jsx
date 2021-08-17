import { React, useState } from 'react'
import { Switch, TextField, Button, FormControlLabel } from '@material-ui/core'

// Quando criamos uma função,
function FormularioCadastro() {

    //  Usando o hook useState para gaurdar a info de nome, a função setNome é a função que irei usar para alteração do valor da variavel nome
    const [nome, setNome] = useState("Ricardo");

    //  O retorno dela precisa ser a árvore de renderização
    return (
        <form onSubmit={(event) => { event.preventDefault(); console.log(nome); }}>

            <TextField value={nome} onChange={(event) => {
                setNome(event.target.value);
                if(nome.length > 3 ){
                    setNome(nome.substr(0,3))
                }
            }} id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />

            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />

            <FormControlLabel label="Promoções" control={<Switch name="Promoções" color="primary" defaultChecked />} />

            <FormControlLabel label="Novidades" control={<Switch name="Novidades" color="primary" defaultChecked />} />

            <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
        </form>
    )
}

export default FormularioCadastro