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
            id: 'util-typography',
            title: 'Communities',
            type: 'item',
            url: '/communities',
            icon: LanguageIcon
        }
    ]
};

export default utilities;
