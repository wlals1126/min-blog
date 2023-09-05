import * as c from "./style";
import useInput from "@/hooks/useInput";
import { UCategory } from "@/typings/data";

interface CategoryInputProps {
  categories: UCategory[];
  setCategories(category: any): void;
}

const CategoryInput = ({ categories, setCategories }: CategoryInputProps) => {
  const [newCategory, onChangeNC, setNC] = useInput("");

  const addNewCategory = (name: string) => {
    if (
      name.length < 2 ||
      name === "undefined" ||
      categories.find((category) => category.name === newCategory)
    )
      return;
    setCategories([...categories, { name: newCategory }]);
    setNC("");
  };

  return (
    <c.CategoryInputBox>
      {categories.map((prev, i) => (
        <div key={i}>{prev.name}</div>
      ))}
      <input
        value={newCategory}
        onChange={onChangeNC}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addNewCategory(newCategory);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Backspace" && newCategory.length === 0) {
            e.preventDefault();
            setNC(categories[categories.length - 1].name);
            setCategories(categories.slice(0, categories.length - 1));
          }
        }}
        type="text"
        placeholder="카테고리를 입력해주세요"
      />
    </c.CategoryInputBox>
  );
};

export default CategoryInput;
