import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(3);

  const getArticleData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dev.to/api/articles?page=1&per_page=${count}`
      );
      const data = await response.json();
      setArticles(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Aldaa garlaa");
    }
  };
  useEffect(() => {
    getArticleData();
  }, [count]);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        articles,
        isLoading,
        count,
        setCount,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
