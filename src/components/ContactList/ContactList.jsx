import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectNameFilter } from '../../redux/filters/selectors';
import { selectItems, selectVisibleItems } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css";

export default function ContactList( )  {
    const dispatch = useDispatch();
    const NameFilter = useSelector(selectNameFilter);
    const handleDeletePhone = (id) => {
        dispatch(deleteContact(id.id));
        };
    let filteredContacts = [];
   
    if (NameFilter.length>0) {
        filteredContacts = useSelector(selectVisibleItems); } 
    else { filteredContacts = useSelector(selectItems); }
   
    return (
        <>
            {/* <h2 className={css.h2phone} > My Contacts :</h2>  */}
            <ul className={css.phoneUl}>           
	             {filteredContacts.map((phone,index) => {
                    return (
                        <li key={phone.id}>
                            <Contact 
                                    id={phone.id}
                                    ind={index}
                                    name={phone.name}  
                                    number={phone.number}
                                    handleDeletePhone={handleDeletePhone} />
                        </li>
                    );
                 })}
             </ul>  
        </>
    );
  };
