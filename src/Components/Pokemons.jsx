import React , {useState} from 'react';
import './Pokemons.css'

const Pokemons = () => {
    const [pokemons,setPokemons]=useState([]);

    const handleClick = () =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response=>{
            return response.json();
        })
        .then(response=>{
            console.log(response.results);
            setPokemons(response.results);
        }).catch(err =>{
            console.log(err);
        })
    }

    return (
        <div className='content'>
            <button onClick={handleClick}>Fetch Pokemons</button>
            <ul className="pokemons">
                {pokemons.map((item,index)=>{
                    return (<li key={index}> {item.name} </li>)
                })
                }
            </ul>
        </div>
    );
}
export default Pokemons;