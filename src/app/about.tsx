
function About(props: { rotation: number }) {

    function Hundred() {
        if (props.rotation <= 40) return props.rotation / 50;
        return 100
    }

    return (

        <div className="About" >
            <div className="heading" style={{ opacity:  Hundred() }}>
                <h1>Education background</h1>

                <p>Bachelor of Engineering in Mechanical<br /> Engineering, Mutah<br />
                    Graduation Year: Sep 2017 - Aug 2021<br />
                    Grade: very good</p>

                <p>Diploma in UI/UX Design, LTUC<br /> Expected Completion: Jan 2024</p>
                <a>And more than 10 certificate of completion
                    from</a>
                    <img src="edu.png" style={{marginTop:70}}/>
            </div>
        </div>
    );
}

export default About;