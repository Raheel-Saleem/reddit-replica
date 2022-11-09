import React from 'react';
import './Comment.css';
import PostCard from 'pages/post/PostCard';
import { Avatar, Box } from '../../../node_modules/@mui/material/index';
import { deepOrange, deepPurple, green, lightGreen, lime } from '@mui/material/colors';

const Comment = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
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
            </div>
        </>
    );
};

export default Comment;
