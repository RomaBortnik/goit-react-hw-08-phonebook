export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilterValue = state => state.filter;

export const contactsListFilter = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  const filterToLowerCase = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );
};
