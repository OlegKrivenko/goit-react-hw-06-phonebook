import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/actions';

import css from './ContactFilter.module.css';

const ContactFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChangeFilter = event => {};

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={event => onChangeFilter(event)}
        // onChange={() => dispatch(filterContacts(filter))}
      />
    </label>
  );
};

export default ContactFilter;
