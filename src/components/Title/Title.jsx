import PropTypes from 'prop-types';
import { Wrapper } from 'components/AppTitile/AppTitle.styled';
import { SectionTitle } from './Title.styled';

function Title({ title }) {
  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
    </Wrapper>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
