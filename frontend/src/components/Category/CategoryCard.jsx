import { useState } from "react";
import "./Category.css";

const CategoryCard = ({ title, count, image, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [data, setData] = useState({ title, count, image });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData({ ...data, image: URL.createObjectURL(file) });
    }
  };

  const handleSave = () => {
    onUpdate(title, data);
    setShowEdit(false);
  };

  return (
    <>
      <div className="category-card">
        <img src={image} alt={title} />

        <div className="card-footer">
          <h4>{title}</h4>
          <p>{count} Items</p>
        </div>

        <button className="edit-btn" onClick={() => setShowEdit(true)}>
          ✏ Edit
        </button>
      </div>

      {showEdit && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>Edit Category</h3>

            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
            />

            <input
              type="number"
              name="count"
              value={data.count}
              onChange={handleChange}
            />

            <input type="file" onChange={handleImage} />

            <div className="popup-actions">
              <button onClick={() => setShowEdit(false)}>Cancel</button>
              <button onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryCard;
