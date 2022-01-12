import PropTypes from 'prop-types';
import { FilterBox, FilterInput } from './Filter.styled';

function Filter({ filter, handleFilter, placeholder }) {
  return (
    <FilterBox>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder={placeholder}
      />
    </FilterBox>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
