import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import RecipeList from "./components/RecipeList";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import Search from "./components/Search";
import { FaAsymmetrik } from "react-icons/fa";
import Button from "./components/Button";

function App() {

  const [showAdd, setShowAdd] = useState(false);
  const [showPage, setShowPage] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);
  // const query = new URLSearchParams(search).get('s');
  // runs upon rendering page
  useEffect(() => {
    const getUsers = async () => {
      // const recipesFromApi = await fetchRecipes();
      // setRecipes(recipesFromApi);
      const usersFromApi = await fetchUsers();
      setUsers(usersFromApi);
      
    }
    const getRecipes = async() => {
      const recipesFromApi = await fetchRecipes();
      setRecipes(recipesFromApi);
    }
    getRecipes();
    getUsers();
  }, []);

  // // fetch recipes from backend
  const fetchRecipes = async () => {
    const res = await fetch("/getAll");
    const data = await res.json();
    return data;
  }

  const onVisit = async() => {
    setShowPage(!showPage)
  }

  const fetchUsers = async () => {
    const res = await fetch("/getAllUser");
    const data = await res.json();
    return data;
  }

  // adds recipe to server
  // const addRecipe = async (recipe) => {
  //   await fetch("/addOne", {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(recipe),
  //   });

  //   const recipesFromApi = await fetchRecipes();
  //   setRecipes(recipesFromApi);
  // }
  
  const addUser = async (user) => {
    await fetch("/addOneUser", {
      method : 'POST', 
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(user),
    });
    const recipesFromApi = await fetchUsers();
    setUsers(recipesFromApi);
  }

  // delete recipe from server
  const deleteRecipe = async (id) => {
    const toDelete = {_id: id};

    console.log(JSON.stringify(toDelete));

    await fetch('/removeOne', { 
      method: 'DELETE', 
      body: JSON.stringify(toDelete),
    });

    const recipesFromApi = await fetchRecipes();
    setRecipes(recipesFromApi);
  }

  const deleteUser = async (id) => {
    const toDelete = {_id:id};
    console.log(JSON.stringify(toDelete));
    await fetch('removeOneUser', {
      method:'DELETE',
      body: JSON.stringify(toDelete),
    });
    const recipesFromApi = await fetchUsers();
    setUsers(recipesFromApi)
  }

  return (
    <div style={{backgroundColor: '#c5cae9', minHeight: '1000px', paddingTop: '20px',}}>
      <div className='container'>
        <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd}/>
        {/* {showAdd && <AddRecipe onAdd={addRecipe}/>} */}
        {showAdd && <AddUser onAdd={addUser}/>}
        <Search />
        
        {(showPage) ? (
            <div>
              {(users.length <= 0) ? (
                <p>Loading...</p>
              ) : (
                <UserList users={users} onDelete={deleteUser} onVisit={onVisit} />
              )}
            </div>
          ) : (
            <div>
              {(recipes.length<=0) ? (
                <p>nothing</p>
              ) : (
                <RecipeList recipes={recipes} onDelete = {deleteRecipe}/>
              )}
              <Button text="Go back" onClick={onVisit}></Button>
            </div>
          )
        }
      </div>
    </div>);
}

export default App;
