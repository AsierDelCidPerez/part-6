import {Link} from 'react-router-dom'

const Navbar = () => {

    const linkStyle = {
        padding: 5
    }

    return (
        <nav>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/users" style={linkStyle}>Users</Link>
            <Link to="/notes" style={linkStyle}>Notes</Link>
        </nav>
    )
}

export default Navbar