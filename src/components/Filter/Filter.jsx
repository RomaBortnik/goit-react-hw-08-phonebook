import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        onChange={e => dispatch(setFilter(e.target.value))}
        type="text"
        name="filter"
      />
    </FilterLabel>
  );
};

export default Filter;
