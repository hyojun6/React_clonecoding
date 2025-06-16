import { useLocation } from 'react-router-dom';

const SearchResult = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const loc = params.get("loc");
  const district = params.get("location");
  const keyword = params.get("keyword");

  return (
    <div>
      <h2>검색 결과</h2>
      <p>지역: {loc} {district}</p>
      <p>검색어: {keyword}</p>
    </div>
  );
};

export default SearchResult;
