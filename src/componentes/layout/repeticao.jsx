import React from 'react'
import produtos from '../data/produtos'

let repe = props => {

    function getProdutosListItem(){
        return produtos.map(prod =>{
        return <li>{prod.id} - {prod.nome} - R$ {prod.preco}</li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}

export default repe;