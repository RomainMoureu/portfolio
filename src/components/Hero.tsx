import TypeWriter from 'typewriter-effect';

function Hero() {
    return (
        <section id="hero" className="bg-cover bg-center bg-hero">
            <div className="hero container mx-auto py-20">
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-white">Bonjour,</h1>
                    <h1 className="text-4xl font-bold mb-4 text-white">
                        <TypeWriter
                            options={{
                            autoStart: true,
                            loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("Je m'appelles Romain MOUREU")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Je suis en train de coder")
                                .pauseFor(2000)
                                .deleteChars(8)
                                .typeString("d'apprendre")
                                .pauseFor(2000)
                                .deleteAll()
                                .start();
                            }}
                        />
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Hero;