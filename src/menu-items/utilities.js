// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';
import LanguageIcon from '@mui/icons-material/Language';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'SUBSCRIPTIONS',
    type: 'group',
    children: [
        {
            id: 'community-form',
            title: 'Create Community',
            type: 'item',
            url: '/createcommunity',
            icon: AppstoreAddOutlined
        },
        {
            id: 'create-post-card',
            title: 'Create Post',
            type: 'item',
            url: '/createpost',
            icon: AppstoreAddOutlined
        },
        {
            id: 'communities',
            title: 'Communities',
            type: 'item',
            url: '/communities',
            icon: LanguageIcon
        },
        {
            id: 'post-card',
            title: 'Posts',
            type: 'item',
            url: '/post-card',
            icon: LanguageIcon
        }
    ]
};

export default utilities;
