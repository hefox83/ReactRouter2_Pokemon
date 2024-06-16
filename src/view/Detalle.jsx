import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

const URL="https://pokeapi.co/api/v2/pokemon/"
const Detalle = () => {
    const [pokemon, setPokemon] = useState({});
    const {name} = useParams ()
    const getData = async () => {
        try {
            const response = await fetch(URL+name)
            const results = await response.json()
            setPokemon(results)
        }
        catch (error) {
        
        console.log("error") }
    }
    console.log(pokemon)
    useEffect(() => {
        getData()
    }, [name])

    return (
        <div>
            <div className="PokeInfomacion">
            
            <div> <img src={pokemon?.sprites?.other?.home?.front_default} alt="" />
            </div>
            <div><h1>{pokemon?.name}</h1></div>
            <Table striped="columns">
    
      <tbody>
        <tr>
          <td>Experiencia base</td>
          <td>{pokemon?.base_experience}</td>
        </tr>
        <tr>
          <td>Peso</td>
          <td>{pokemon?.weight}</td>
         
        </tr>
        <tr>
          <td>Altura</td>
          <td >{pokemon?.height}</td>
         
        </tr>
      </tbody>
    </Table>
            </div>
        </div>
    )
}
export default Detalle