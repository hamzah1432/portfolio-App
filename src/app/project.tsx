import Header from "./header";

function Project(props: { rotation: number }) {

    function Fourty() {
        if (props.rotation/3 >= 100) return "1";
        return "0"
    }

    return (
        <div className="Project" style={{opacity:Fourty()}}>
        <header style={{top:"0",right:-100}}>
            <nav>
                <ul >
                    <li><a style={{ color: "#00B4BB" }} href="#">Home</a></li>
                    <li><a style={{ color: "#00B4BB" }} href="#">About</a></li>
                    <li><a style={{ color:"#00B4BB" }} href="#">Projects</a></li>
                    <li><a style={{ color:"#00B4BB" }} href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
            <h1>My Project</h1>
            <div className="list">
                <div className="card">
                    <div className="logo">
                        <img src="p-1.svg" />
                    </div>

                    <h2>An anime platform </h2>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src="p-2.svg" />
                    </div>

                    <h2>KPI & Tracking system </h2>
                </div>

                <div className="card">
                    <div className="logo">
                        <img src="p-4.svg" />
                    </div>

                    <h2>To do list app</h2>
                </div>
            </div>
        </div>

    );
}


export default Project;