import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

function TodoItem({ todo, index, onChange }) {
  return (
    <li className={!todo.completed ? styles.listItem : styles.listItemDone}>
      <div className={styles.left}>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          defaultChecked={todo.completed}
        />
        <strong>{`${++index}${")"}`}</strong>
        {todo.title}
      </div>

      <button>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItem;
