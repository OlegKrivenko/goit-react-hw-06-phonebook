import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/actions';
import css from './ContactEditor.module.css';

const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm(event);
  };

  const resetForm = event => {
    setName('');
    setNumber('');

    event.target.elements.name.value = '';
    event.target.elements.number.value = '';
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactEditor;
