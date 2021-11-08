import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let availablePets = this.props.pets.map(pet => 
      <Pet
      pet={pet}
      key={pet.id}
      onAdoptPet={this.props.onAdoptPet}
      isAdopted={this.props.onAdoptPet}
      />
    )
    return (
    <div className="ui cards">{availablePets}</div>
    );
  }
}

export default PetBrowser
