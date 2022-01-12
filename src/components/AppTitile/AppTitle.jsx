import PropTypes from 'prop-types';
import { HeadTitle, Wrapper } from './AppTitle.styled';

function AppTitle({ title }) {
  return (
    <Wrapper>
      <HeadTitle>{title}</HeadTitle>
    </Wrapper>
  );
}

AppTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppTitle;
