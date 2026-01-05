import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import CategoryCard from "../components/Category/CategoryCard";
import "./Home.css";
import { initial } from "../assets/assets";
import AuthContext from "../contex";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    count: "",
    image: "",
  });

  const { authUser, setAuthUser } = useContext(AuthContext);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("categories"));
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (stored && stored.length > 0) {
      setCategories(stored);
    } else {
      setCategories(initial);
      localStorage.setItem("categories", JSON.stringify(initial));
    }
  }, [authUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [...categories, formData];
    setCategories(updated);
    localStorage.setItem("categories", JSON.stringify(updated));

    setFormData({ title: "", count: "", image: "" });
    setShowPopup(false);
  };

  const handleUpdateCategory = (oldTitle, updatedData) => {
    const updated = categories.map((c) =>
      c.title === oldTitle ? updatedData : c
    );

    setCategories(updated);
    localStorage.setItem("categories", JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <Sidebar />

        <div className="main-content">
          <div className="category-header">
            <h2>Categories</h2>
            <button className="add-btn" onClick={() => setShowPopup(true)}>
              + Add Category
            </button>
          </div>

          <div className="category-grid">
            {categories.map((cat, index) => (
              <CategoryCard
                key={index}
                {...cat}
                onUpdate={handleUpdateCategory}
              />
            ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>Add New Category</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Category Name"
                required
                onChange={handleChange}
              />

              <input
                type="number"
                name="count"
                placeholder="Item Count"
                required
                onChange={handleChange}
              />

              <input type="file" accept="image/*" onChange={handleImage} />

              <div className="popup-actions">
                <button type="button" onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
