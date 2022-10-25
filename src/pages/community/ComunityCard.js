import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Link, Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import { BellOutlined, CloseOutlined, GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import LoupeIcon from '@mui/icons-material/Loupe';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

export default function CommunityCard({ title }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'primary.light' }} aria-label="recipe">
                            {title.charAt(0)}
                        </Avatar>
                    }
                    title={title}
                    subheader="September 14, 2016"
                />
                {/* <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="Paella dish" /> */}
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen
                        peas along with the mussels, if you like.
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    {/* <Avatar
                        sx={{
                            color: 'primary.main',
                            bgcolor: 'success.lighter'
                        }}
                    >
                        <GiftOutlined />
                    </Avatar> */}
                    <Chip
                        variant="filled"
                        color={'error'}
                        icon={<LoupeIcon />}
                        label={'Subscribe'}
                        sx={{ ml: 1.25, pl: 1 }}
                        size="small"
                        onClick={() => console.log('sunscribe me')}
                    />
                </CardActions>
            </Card>
        </Grid>
    );
}
