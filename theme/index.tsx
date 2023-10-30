import Theme from 'rspress/theme';
import './index.css';

const Layout = () => {
  return (
    <Theme.Layout />
  );
};

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';