import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png';

function App() {
    const title = 'titulo';


    return (
        <div>
            <div>
                Personal Digital Assistants
            </div>
            <ProfileCard tit="Alexa" handle="@Alexa99" date="02/01/20" imgSrc={AlexaImage}/>
            <ProfileCard title="Cortana" handle="@Costana2021" imgSrc={CortanaImage}/>
            <ProfileCard title="Siri" handle="@Siri2000" imgSrc={SiriImage}/>
        </div>
    )
}

export default App;