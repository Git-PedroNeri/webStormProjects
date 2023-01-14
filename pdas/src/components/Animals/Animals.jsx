import {useState} from "react";
import AnimalShow from './AnimalShow'

function Animals() {

    const [animals, setAnimals] = useState([]);


    function getRandomAnimal() {
        const animals = ['cat', 'dog', 'horse', 'gator', 'cow', 'bird'];
        return animals[Math.floor(Math.random() * animals.length)]
    }


    const addAnimals = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    })

    const clearAnimals = () => {
        setAnimals([]);
    }


    return (
        <div>
            <div>
                <button onClick={clearAnimals}>Clear</button>
            </div>
            <div className="app">
                <button onClick={addAnimals}>Add Animal</button>
                <div className='animal-list'>
                    {renderedAnimals}
                </div>
            </div>
        </div>
    )
}

export default Animals;