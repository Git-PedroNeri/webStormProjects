import bird from '../../images/svg/bird.svg'
import cat from '../../images/svg/cat.svg'
import cow from '../../images/svg/cow.svg'
import dog from '../../images/svg/dog.svg'
import gator from '../../images/svg/gator.svg'
import horse from '../../images/svg/horse.svg'
import heart from '../../images/svg/heart.svg'
import {useState} from 'react';
import './AnimalShow.css'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
    heart
};

function AnimalShow({type}) {


    const [meassureLike, setMeassureLike] = useState(0);

    const increaseHeart
        = () => {
        setMeassureLike(meassureLike + 1)
    }

    return (
        <div className="animal-show" onClick={increaseHeart}>
            <img className="animal" alt="animal" src={svgMap[type]}/>
            <img className="heart" alt="heart" src={heart} style={{width: 10 + 10 * meassureLike + 'px'}}/>
        </div>
    );
}

export default AnimalShow;