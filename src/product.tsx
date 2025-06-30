import { useLocation } from 'react-router-dom';
import { Modal } from './modal/modal';
import { ProductModal } from './modal/product';
import { useState } from 'react';

interface ProductInfo {
  name: string;
  src: string;
  price: string;
  description: string;
}

const SearchResult = () => {
  const location = useLocation();
  const userInfo = { ...location.state };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo | null>(null);

  const category = userInfo.product;

  const imageMap: Record<string, string[]> = {
    빵: ['단팥빵.jpg', '식빵.jpg', '크림빵.jpg', '초코소라빵.jpg'],
    전자제품: ['노트북.jpg', '에어팟.jpg'],
    책상: ['컴퓨터책상.jpg'],
  };

  const productInfoMap: Record<string, { price: string; description: string }> = {
    단팥빵: { price: '1,200원', description: '단팥빵입니다' },
    식빵: { price: '5,000원', description: '식빵' },
    크림빵: { price: '3,800원', description: '크림빵입니다' },
    초코소라빵: { price: '2,000원', description: '초코소라빵입니다' },
    노트북: { price: '1,200,000원', description: '노트북' },
    에어팟: { price: '250,000원', description: '에어팟임' },
    컴퓨터책상: { price: '90,000원', description: '책상임' },
  };

  const images = imageMap[category] || [];

  return (
    <div style={{ paddingTop: '20px' }}>
      <header className="header">
        <div className="logo">🥕</div>
        <button onClick={() => setModalIsOpen(true)} className="login-button">로그인</button>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
      </header>

      <h2>검색 결과</h2>
      <p>지역: {userInfo.area}</p>
      <p>검색어: {userInfo.product}</p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          marginTop: '40px',
          justifyContent: 'center',
        }}
      >
        {images.map((imgName, idx) => {
          const nameOnly = imgName.replace('.jpg', '');
          const imgSrc = `public/${category}/${imgName}`;
          const info = productInfoMap[nameOnly];

          return (
            <div
              key={idx}
              style={{ textAlign: 'center', width: '200px', cursor: 'pointer' }}
              onClick={() => {
                setSelectedProduct({
                  name: nameOnly,
                  src: imgSrc,
                  price: info?.price || '',
                  description: info?.description || '',
                });
                setProductModalOpen(true);
              }}
            >
              <img
                src={imgSrc}
                alt={nameOnly}
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  display: 'block',
                  marginBottom: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              />
              <span style={{ fontSize: '16px', fontWeight: '500' }}>{nameOnly}</span>
            </div>
          );
        })}
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={productModalOpen}
          onClose={() => setProductModalOpen(false)}
          productName={selectedProduct.name}
          imageSrc={selectedProduct.src}
          price={selectedProduct.price}
          description={selectedProduct.description}
        />
      )}
    </div>
  );
};

export default SearchResult;