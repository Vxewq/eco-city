import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/axios";

export default function CreateNews() {
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const newDish = async (e) => {
    e.preventDefault();

    try {
      await api.post("/dish", {
        title: title,
        introduction: introduction,
        price: price,
        imageUrl: imageUrl,
      });
      setSuccess("Dish created successfully!");
      setError("");
      setTitle("");
      setIntroduction("");
      setPrice("");
      setImageUrl("");
      
      navigate("/menu");
    } catch (err) {
      setError("Failed to create dish.");
      setSuccess("");
    }
  };

  return (
    <>
    
   <div className="flex flex-col gap-10 items-center">
   <h1 className="">Create </h1>
        <form onSubmit={newDish} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
  <Input label="Username" />

            <input
              type="text"
              placeholder="D"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="D"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="D"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Create
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          {success && (
            <p className="text-green-500 text-center mt-2">{success}</p>
          )}
        </form>
   </div>
    </>
  );
}