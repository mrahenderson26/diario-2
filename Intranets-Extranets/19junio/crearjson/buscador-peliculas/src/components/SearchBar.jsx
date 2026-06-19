import { Input, InputGroup, InputGroupText } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ value, onChange }) {
  return (
    <InputGroup>
      <InputGroupText>
        <FaSearch />
      </InputGroupText>
      <Input
        placeholder="Buscar película por título..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchBar;
