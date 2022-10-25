// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import LanguageIcon from '@mui/icons-material/Language';
// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'FVOUIRTE COMMUNITIES',
    type: 'group',
    children: [
        {
            id: 'login1',
            title: 'Login',
            type: 'item',
            url: '/login',
            icon: LanguageIcon,
            target: true
        },
        {
            id: 'register1',
            title: 'Register',
            type: 'item',
            url: '/register',
            icon: LanguageIcon,
            target: true
        }
    ]
};

export default pages;
