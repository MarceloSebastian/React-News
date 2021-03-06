import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = ({ setCategory }) => {

  const OPTIONS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'heath', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sporst' },
    { value: 'technology', label: 'Technology' },
  ]

  const [ category, SelectNews ] = useSelect('general', OPTIONS);

  const setNews = e => {
    e.preventDefault();

    setCategory(category);
  }

  return ( 
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={setNews}
        >
          <h2 className={styles.heading}>Search News By Category</h2>

          <SelectNews />

          <div className="input-field col s12">
            <input type="submit"
              className={`${styles['btn-block']} btn-large amber darken-2`}
              value='Search'
            />
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default Form;