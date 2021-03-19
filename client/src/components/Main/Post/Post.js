import './Post.css';


const Post = ({
    content,
    author
}) => {

    return (

        <div className="post">
            <img src="blue-origami-bird.png" alt="blue-origami-bird" />
            <p className="description">{content}</p>
            <div>
                <span>
                    <small>Author:</small>
                    {author}
                </span>
            </div>
        </div>
    );
}
export default Post;