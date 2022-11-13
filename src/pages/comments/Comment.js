import { useState, useEffect } from 'react';
import './Comment.css';
import PostCard from 'pages/post/PostCard';
import { Avatar, Box } from '../../../node_modules/@mui/material/index';
import { deepOrange, deepPurple, green, lightGreen, lime } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { INFO, ERROR } from './../../utils/alertTypes';
import { openAlert } from 'store/reducers/alert';
import auth from './../../store/reducers/auth';
import { createComment, getAllComment } from 'utils/apis';
import { startLoading, stopLoading } from 'store/reducers/loader';
const Comment = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const dispatch = useDispatch();
    let post = useSelector((state) => state.post);
    let userId = useSelector((state) => state.auth.user_id);

    useEffect(() => {
        (async function () {
            dispatch(startLoading());
            const result = await getAllComment({ post_id: post.post_id });
            console.log('result: ', result);
            result && setComments(result);
            dispatch(stopLoading());
        })();
    }, []);

    useEffect(() => {
        console.log('comment: ', comment);
    }, [comment]);
    async function handlePostComment() {
        if (comment != '') {
            let result = await createComment({ post_id: post.post_id, user_id: userId, comment }, dispatch);
            if (result) {
                setComment('');
                let res = await getAllComment({ post_id: post.post_id });
                console.log('res: ', res);
                res && setComments(res);
            }
        } else {
            dispatch(openAlert({ open: true, type: ERROR, msg: 'Comment body should not be empty' }));
        }
    }
    return (
        <>
            <PostCard post={post} userId={userId} dispatch={dispatch} />
            <div className="container">
                <div className="comment-input-container">
                    <input
                        type="text"
                        placeholder="Add comment"
                        className="comment-input-box"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button className="comment-btn" onClick={handlePostComment}>
                        Comment
                    </button>
                </div>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div key={index}>
                            <div>
                                <div style={{ marginBottom: 10 }}>
                                    <span className="author-name">{comment.username} </span>
                                    <span className="dot" />
                                    <span className="upload-time"> {new Date(comment.comment_time).toDateString()}</span>
                                </div>
                                <div className="comment-text">
                                    <span>{comment.comment}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No comments added yet</p>
                )}
            </div>
        </>
    );
};

export default Comment;

{
    /* <div className="container mt-5 mb-5">
    <PostCard />
    <div className="d-flex justify-content-center row">
        <div className="d-flex flex-column col-md-8">
            <div className="coment-bottom bg-white p-2 px-4">
                <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                    <Box sx={{ px: 0.5 }}>
                        <Avatar src="." sx={{ width: 38, height: 38, bgcolor: deepPurple[500] }}>
                            R
                        </Avatar>
                    </Box>
                    <input type="text" className="form-control mr-3" placeholder="Add comment" />
                    <button className="btn btn-primary" type="button">
                        Comment
                    </button>
                </div>
                <div className="commented-section mt-2">
                    <div className="d-flex flex-row align-items-center commented-user">
                        <Box sx={{ px: 0.5 }}>
                            <Avatar src="." sx={{ width: 38, height: 38, bgcolor: green[300] }}>
                                S
                            </Avatar>
                        </Box>
                        <h5 className="mr-2">Corey oates</h5>
                        <span className="dot mb-1" />
                        <span className="mb-1 ml-2">4 hours ago</span>
                    </div>
                    <div className="comment-text-sm">
                        <Box sx={{ pl: 1 }}>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </span>
                        </Box>
                    </div>
                </div>
                <div className="commented-section mt-2">
                    <div className="d-flex flex-row align-items-center commented-user">
                        <Box sx={{ px: 0.5 }}>
                            <Avatar src="." sx={{ width: 38, height: 38, bgcolor: green[300] }}>
                                P
                            </Avatar>
                        </Box>
                        <h5 className="mr-2">Samoya Johns</h5>
                        <span className="dot mb-1" />
                        <span className="mb-1 ml-2">5 hours ago</span>
                    </div>
                    <div className="comment-text-sm">
                        <Box sx={{ pl: 1 }}>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </span>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */
}
