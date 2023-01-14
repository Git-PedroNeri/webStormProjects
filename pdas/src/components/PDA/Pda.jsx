import ProfileCard from './ProfileCard';
import AlexaImage from '../../images/alexa.png';
import SiriImage from '../../images/siri.png';
import CortanaImage from '../../images/cortana.png';

function Pda() {

    return (
        <div>

            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistants </p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@Alexa99"
                                date="02/01/20"
                                imgSrc={AlexaImage}
                                description='Alexa was created by Amazon and helps you buy things'
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                description="Cortana was created by Microsoft and helps you make easer works on your computer"
                                title="Cortana"
                                handle="@Costana2021"
                                imgSrc={CortanaImage}/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Siri" handle="@Siri2000" imgSrc={SiriImage}
                                         description="Siri was created by Apple and helps you change the world"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
        ;

}

export default Pda;