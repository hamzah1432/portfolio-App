function Header (props: { rotation: number }) {
    return (

        <header>
            <nav>
                <ul >
                    <li><a style={{ color: `rgba(${255-props.rotation}, ${255-props.rotation}, ${255-props.rotation}, 1)` }} href="#">Home</a></li>
                    <li><a style={{ color: `rgba(${255-props.rotation}, ${255-props.rotation}, ${255-props.rotation}, 1)` }} href="#">About</a></li>
                    <li><a style={{ color: `rgba(${255-props.rotation}, ${255-props.rotation}, ${255-props.rotation}, 1)` }} href="#">Projects</a></li>
                    <li><a style={{ color: `rgba(${255-props.rotation}, ${255-props.rotation}, ${255-props.rotation}, 1)` }} href="#">Contact</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;