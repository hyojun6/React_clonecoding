import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Modal } from './modal/modal.tsx';
import { useLocation, useNavigate } from 'react-router-dom';

const MainPage = () => {
  const locations = ['동부산', '서부산'] as const;
  type Region = typeof locations[number];
  const areaMap: Record<Region, string[]> = {
    동부산: ['동래구', '금정구', '연제구', '해운대구', '수영구', '남구', '기장군'],
    서부산: ['부산진구', '동구', '중구', '서구', '북구', '영도구', '사하구', '사상구', '강서구'],
  };
  const [selectedRegion, setSelectedRegion] = useState<Region>('동부산');
  const [loc, setLocation] = useState<string>(areaMap['동부산'][0]);
  const categories = [
    '중고거래', '알바', '부동산', '중고차', '동네업체', '동네생활', '모임'
  ];
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRegion = e.target.value as Region;
    setSelectedRegion(newRegion);
    setLocation(areaMap[newRegion][0]);
  };
  const handleTagClick = (tag: string) => {
    setLocation(tag);
  };

  //1초마다 단어바뀌는거
  const words = ['아이폰', '노트북', '에어팟', '자전거', '책상', '의자', '에어컨', '냉장고', '전자레인지', '선풍기', '캠핑용품', '골프채', '공기청정기', '운동화'];
  const [word, setWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(time);
  }, []);
  useEffect(() => {
    setWord(words[index]);
  }, [index, words]);

  //로그인 팝업페이지
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //카테고리 누르면 검색창에 적히는거
  const [search, setSearch] = useState('');
  const handleCategoryClick = (cate: string) => {
    setSearch(cate)
  }

  // 검색
  const navigate = useNavigate();
  //const nowContent = useRef();

  // const location = useLocation();
  // const userInfo = { ...location.state };
  
  const handleProfile = () => {
    navigate('/product', {
      state: {
        area: `${loc}`,
        product: `${search}`
      },
    });
  };
  

  return (
    <div className="container">
      <header className="header">
        <div className="logo">🥕</div>
        <button onClick={()=> setModalIsOpen(true)} className='login-button'>로그인</button>
	      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
      </header>

      <main className="main-content">
        <h1 className="headline">{loc}에서 {word} 찾고 계신가요?</h1>

        <div className="search">
          <div className="location-select">
            <select
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <input type="text"
            placeholder="검색어를 입력해주세요"
            className="searchi"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="searchb" onClick={handleProfile}>→</button>
        </div>

        <div className="category">
          {categories.map((cate) => (
            <button key={cate} className="categorys" onClick={() => handleCategoryClick(cate)}>{cate}</button>
          ))}
        </div>

        <div className="area-tags">
          {areaMap[selectedRegion].map((atag) => (
            <button
              key={atag}
              className={`tag ${loc === atag ? 'active' : ''}`}
              onClick={() => handleTagClick(atag)}
            >
              {atag}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;