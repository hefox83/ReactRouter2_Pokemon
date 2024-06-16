import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const URL="https://pokeapi.co/api/v2/pokemon"
const Pokemones = () => {
    const [pokemones, setPokemones] = useState([]);
    const [name,setName] = useState("");
    const navigate = useNavigate()
    const getData = async () => {
        try {
            const response = await fetch(URL)
            const {results} = await response.json()
            setPokemones(results)
        }
        catch (error) {
        }
        console.log("error")
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="seleccion">
            <h1 className="m-5">Selecciona tu pokemon</h1>
            <select className="m-5" value={name} onChange={(e)=>{setName(e.target.value)}}>
                <option value="" disabled defaultValue>Selecciona un pokemon</option>
                {
                    pokemones.map(({name})=> <option key={name} value={name}>{name}</option>)
                }           
            </select>
            <Button className="btn btn-danger mx-3" onClick={()=>navigate(`/pokemones/${name}`)} >Ver Pokemon</Button>
        </div>
    )
}
export default Pokemones