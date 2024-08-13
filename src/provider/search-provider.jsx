import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const searchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getArticleData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dev.to/api/articles?page=1&per_page=20`
      );
      const data = await response.json();
    } catch (error) {
      setIsLoading(false);
      toast.success("aldaa garlaa");
    }
  };
  useEffect(() => {
    getArticleData();
  }, []);
  return (
    <searchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;
