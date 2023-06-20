import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setDrawerOpen } from '../redux/drawer/drawerActions';
import { selectDrawerOpen } from '../redux/drawer/drawerSelectors';
import Sidebar from '@/components/Navbar/Sidebar';

const mapStateToProps = createStructuredSelector({
  drawerOpen: selectDrawerOpen,
});

export default connect(mapStateToProps, {
  setDrawerOpen,
})(Sidebar);
