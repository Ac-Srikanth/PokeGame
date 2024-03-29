import React, {Component} from "react"
import "./Pokecard.css"

// const POKEAPI="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const POKEAPI="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
let padToThree=(num)=>(num<=999? `00${num}`.slice(-3):num)


class Pokecard extends Component{
  render(){
    let src =`${POKEAPI}${padToThree(this.props.id)}.png`
    return(
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={src} alt={this.props.name} />
        </div>
        
        <p className="Pokecard-data">Type:{this.props.type}</p>
        <p className="Pokecard-data">Experience:{this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard