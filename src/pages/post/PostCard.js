import React from 'react';
import './PostCard.css';
import ArrowDown from 'assets/images/icons/down-arrow.svg';
import Save from 'assets/images/icons/save.svg';
import ArrowUp from 'assets/images/icons/up-arrow.svg';
import Comment from 'assets/images/icons/comment.svg';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import LanguageIcon from '@mui/icons-material/Language';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { savePost } from 'utils/apis';
import { useNavigate } from 'react-router-dom';
import { selectedPost } from 'store/reducers/post';
import { useDispatch } from 'react-redux';
const PostCard = ({ post = {}, userId, dispatch }) => {
    const navigate = useNavigate();

    let { community_name, description, post_id, post_name, posted_time, username, total_likes } = post;
    function handleComment(post) {
        dispatch(selectedPost(post));
        navigate('/comments', { replace: true });
    }

    return (
        <div class="parent-div" key={post_id}>
            <div class="vote-div">
                <button>
                    <img src={ArrowUp} alt="Up vote" class="icon" />
                </button>
                <div class="votes-num">{total_likes}</div>
                <button>
                    <img src={ArrowDown} alt="Down vote" class="icon" />
                </button>
            </div>
            {/* <!-- author and time  --> */}
            <div class="author-topic-div">
                <div class="author-div">
                    <span>posted by {username.toUpperCase()} </span>
                    <span>.</span>
                    <span>{new Date(posted_time).toDateString()}</span>
                </div>
                {/* <!-- Topic name --> */}
                <div class="topic-div">
                    <div class="topic-name">{post_name}</div>
                    <div class="topic-detail">
                        <span>{description}</span>
                    </div>
                </div>

                {/* <!-- comment and save button --> */}
                <div class="com-save-div">
                    <div class="comm-but-div">
                        <button onClick={() => handleComment(post)}>
                            <img src={Comment} alt="Comment" class="icon comm-icon" />
                            <span> Comments</span>
                        </button>
                    </div>
                    {/* <!-- save button --> */}
                    <button onClick={() => savePost({ user_id: userId, post_id }, dispatch)}>
                        <div class="save-icon">
                            <span class="icon">
                                <TurnedInNotIcon />
                            </span>
                            <span style={{ margin: 0, padding: 0 }}>Save</span>
                        </div>
                    </button>
                    <button>
                        <div class="save-icon">
                            <span class="icon">
                                <LanguageIcon />
                            </span>
                            <span style={{ margin: 0, padding: 0 }}> {community_name}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
