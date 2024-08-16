import {
  changeNameFilter,
  changeNumberFilter,
} from "../../redux/filters/slice";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/selectors";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);
  const filterNumber = useSelector(selectNumberFilter);

  const handleNameFilterChange = (event) => {
    dispatch(changeNameFilter(event.target.value));
  };

  const handleNumberFilterChange = (event) => {
    dispatch(changeNumberFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <div>
        <p className={css.txt}>Find contacts by name</p>
        <input
          className={css.input}
          type="text"
          value={filterName}
          onChange={handleNameFilterChange}
        />
      </div>
      <div>
        <p className={css.txt}>Find contacts by number</p>
        <input
          className={css.input}
          type="text"
          value={filterNumber}
          onChange={handleNumberFilterChange}
        />
      </div>
    </div>
  );
}
