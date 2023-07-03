import Header from "./header";

function Home(props: { rotation: number }) {

    function Fourty() {
        if (props.rotation <= 40) return props.rotation;
        return 40
    }

    function Fifty() {
        if (props.rotation >= 40) return props.rotation;
        return 40
    }

    return (
        <>
            {
                props.rotation <= 40 ? (
                    <div className="Home" style={{ left: `${40 - Fourty()}vw`, right: `${Fourty()}vw`, boxShadow: `${(Fourty() * 2) - 48}px 4px 30px 0px rgba(0, 0, 0, 0.25)` }}>
                        <div className="mask" style={{ opacity: (Fourty() / 100) - 0.15 }} />
                        <div className="background" />
                        <Header rotation={Fourty() * 1.5} />
                        <div className="heading" style={{ color: `rgba(${255 - Fourty() * 1.5}, ${255 - Fourty() * 1.5}, ${255 - Fourty() * 1.5}, 1)` }}>
                            <h1>Hamza Almuhisen</h1>
                            <h2>Full-stack Developer  </h2>
                            <p>3 years of experience in React and<br /> ASP.NET Core </p>
                        </div>
                    </div>
                ) :
                    <div className="Home" style={{ left: `${40 - Fifty()}vw`, right: `${Fifty()}vw`, boxShadow: `32px 4px 30px 0px rgba(0, 0, 0, 0.25)` }}>
                        <div className="mask" style={{ opacity: 0.25 }} />
                        <div className="background" />
                        <Header rotation={60} />
                        <div className="heading" style={{ color: `rgba(195, 195, 195, 1)` }}>
                            <h1>Hamza Almuhisen</h1>
                            <h2>Full-stack Developer  </h2>
                            <p>3 years of experience in React and<br /> ASP.NET Core </p>
                        </div>
                    </div>
            }

        </>
    );
}

export default Home;

/***
 * : { left: 0, right: "40vw", boxShadow: "32px 4px 30px 0px rgba(0, 0, 0, 0.25)" }
 */