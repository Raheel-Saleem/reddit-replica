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
const PostCard = () => {
    return (
        <div class="parent-div">
            <div class="vote-div">
                <button>
                    <img src={ArrowUp} alt="Up vote" class="icon" />
                </button>
                <div class="votes-num">13k</div>
                <button>
                    <img src={ArrowDown} alt="Down vote" class="icon" />
                </button>
            </div>
            {/* <!-- author and time  --> */}
            <div class="author-topic-div">
                <div class="author-div">
                    <span>posted by Roheel</span>
                    <span>.</span>
                    <span>14 hours ago</span>
                </div>
                {/* <!-- Topic name --> */}
                <div class="topic-div">
                    <div class="topic-name">Topic Name</div>
                    <div class="topic-detail">
                        <span>
                            (Topic Details) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptates, placeat reiciendis
                            perspiciatis exercitationem natus dolor quisquam officiis dicta a quod libero, modi nisi error nulla minima
                            dolores saepe quia.
                        </span>
                    </div>
                </div>

                {/* <!-- comment and save button --> */}
                <div class="com-save-div">
                    <div class="comm-but-div">
                        <button>
                            <img src={Comment} alt="Comment" class="icon comm-icon" />
                            <span>15k Comments</span>
                        </button>
                    </div>
                    {/* <!-- save button --> */}
                    <button>
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
                            <span style={{ margin: 0, padding: 0 }}>Community</span>
                        </div>
                    </button>

                    {/* <div class="community-but-div">
                        <button>
                            <img src={Comment} alt="Comment" class="icon community-icon" />
                            <span>Community</span>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PostCard;
