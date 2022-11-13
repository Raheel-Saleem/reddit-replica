import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// assets
import { CommentOutlined, LockOutlined, QuestionCircleOutlined, UserOutlined, UnorderedListOutlined } from '@ant-design/icons';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import LanguageIcon from '@mui/icons-material/Language';
import { styled } from '@mui/material/styles';
// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
    color: #8c8c8c;
`;
const SettingTab = () => {
    const theme = useTheme();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] } }}>
            <StyledLink to="createcommunity">
                <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon>
                        <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Community" />
                </ListItemButton>
            </StyledLink>

            <StyledLink to="createpost">
                <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon>
                        <WysiwygIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Post" />
                </ListItemButton>
            </StyledLink>
        </List>
    );
};

export default SettingTab;
