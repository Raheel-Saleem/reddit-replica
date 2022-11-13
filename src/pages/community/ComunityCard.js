import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Link, Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import LoupeIcon from '@mui/icons-material/Loupe';
import { useSelector, useDispatch } from 'react-redux';
import { subscribeComunity } from 'utils/apis';

export default function CommunityCard({ comunity }) {
    let { community_id, community_name, description } = comunity;
    const user_id = useSelector((state) => state.auth.user_id);
    const dispatch = useDispatch();
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ position: 'relative' }}>
                <Card sx={{ minHeight: 300, maxHeight: 350 }} key={community_id}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: 'primary.light' }} aria-label="recipe">
                                {community_name.charAt(0)}
                            </Avatar>
                        }
                        title={community_name}
                        subheader="September 14, 2016"
                    />
                    {/* <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="Paella dish" /> */}

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>

                    <Box sx={{ position: 'absolute', bottom: 0 }}>
                        <CardActions>
                            <Chip
                                variant="filled"
                                color={'error'}
                                icon={<LoupeIcon />}
                                label={'Subscribe'}
                                sx={{ ml: 1.25, pl: 1 }}
                                size="small"
                                onClick={() => subscribeComunity({ community_id, user_id }, dispatch)}
                            />
                        </CardActions>
                    </Box>
                </Card>
            </Box>
        </Grid>
    );
}
