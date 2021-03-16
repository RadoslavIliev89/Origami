import './Main.css';
import Post from './Post'

const Main = ({
    children
}) => {
    return (

        <main className="main-container">
            <h1>Heading</h1>
            <Post />

        </main>
    );
}
export default Main;