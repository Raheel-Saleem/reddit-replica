// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import CircularLoader from 'components/CircularLoader';
import Toaster from 'components/Toaster';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <Toaster />
            <CircularLoader />
            <Routes />
        </ScrollTop>
    </ThemeCustomization>
);

export default App;
