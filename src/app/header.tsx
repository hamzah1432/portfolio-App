function Header(props: { rotation: number }) {

    function Color() {
        if (props.rotation == 255) return "#00B4BB"

        return `rgba(${255 - props.rotation}, ${255 - props.rotation}, ${255 - props.rotation}, 1)`;
       
    }
    return (
        <header>
            <nav>
                <ul >
                    <li><a style={{ color: Color() }} href="#">Home</a></li>
                    <li><a style={{ color: Color() }} href="#">About</a></li>
                    <li><a style={{ color: Color() }} href="#">Projects</a></li>
                    <li><a style={{ color: Color() }} href="#">Contact</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;