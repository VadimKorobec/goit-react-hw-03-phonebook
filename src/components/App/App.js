import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandle = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.formSubmitHandle} />
        <h2>Contacts</h2>
      </div>
    );
  }
}
