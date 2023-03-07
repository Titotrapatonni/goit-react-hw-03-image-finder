// import toast from 'react-hot-toast';

import {
  Header,
  Form,
  SearchFormBtn,
  BtnLable,
  Input,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Header className="searchbar">
      <Form className="form" onSubmit={onSubmit}>
        <SearchFormBtn type="submit" className="button">
          <BtnLable className="button-label">Search</BtnLable>
        </SearchFormBtn>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchBar"
        />
      </Form>
    </Header>
  );
};
