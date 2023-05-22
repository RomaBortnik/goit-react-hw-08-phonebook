export const contactsListFilter = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  const filterToLowerCase = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );
};
