import css from "./Contact.module.css";


export default function Contact({id, ind, name, number , handleDeletePhone}) {
  return (
    <div className = {css.phoneLi}>
        <div className={css.phoneInfo}>
            <p>{name}</p>
            <p>{number}</p>
        </div>
        <div>
            <button onClick={() => {handleDeletePhone({id})}}
                    className={css.deleteButtonPhone}> Delete   :  </button> 
        </div>
    </div>
  );
}


