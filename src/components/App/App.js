import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (name, number) => {
    console.log(name, number);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList items={this.state.contacts} />
      </div>
    );
  }
}
