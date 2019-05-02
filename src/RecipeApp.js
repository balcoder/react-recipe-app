import React, { Component } from 'react';

import NavBar from './NavBar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList'
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
        id: 0,
        title: "Speghetti",
        instructions: "Open jar of Spaghetti sauce. Bring water to boil. Add pasta and add sauce when cooked",
        ingredients: ["pasta", "water", "1 jar of spaghetti sauce"],
        img: "spaghetti.jpg"
      },
      {
        id: 1,
        title: "Milkshake",
        instructions: "Combine ice cream and milk. Blend it",
        ingredients: ["2 Scoops Ice cream", " 2 cups of milk"],
        img: "spaghetti.jpg"
      },
      {
        id: 2,
        title: "Avocado Toast",
        instructions: "Scoop out Avocado and mash. Spread over toast",
        ingredients: ["One Avocado", "Two Toast"],
        img: "spaghetti.jpg"
      }
    ],
    nextRecipeId: 3,
    inputShow: false
    }
    this.handleSave =  this.handleSave.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return{
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        inputShow: false
      }
    });
  }

  handleShow() {
    this.setState({inputShow: true})
  }

  handleHide() {
    this.setState({inputShow: false})
  }

  handleDelete(id) {
    const newArr = this.state.recipes.filter(r => r.id !== id)
    this.setState({recipes: newArr});
  }

  render() {
    const {inputShow} = this.state;
    return (
      <div className="App">
        <NavBar  showForm={this.handleShow}/>
        { inputShow ?
          <RecipeInput
          onSave={this.handleSave}
          onClose={this.handleHide} /> : null }
        <RecipeList
          recipes={this.state.recipes}
          onDelete={this.handleDelete}/>

      </div>
    );
  }
}

export default RecipeApp;
