import React from 'react';
interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  imageSrc: string;
  price: string;
  description: string;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  productName,
  imageSrc,
  price,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '20px',
          width: '450px',
          textAlign: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        }}
      >
        <h2 style={{ marginBottom: '10px' }}>{productName}</h2>
        <img
          src={imageSrc}
          alt={productName}
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '10px' }}>{price}</p>
        <p style={{ fontSize: '14px', color: '#555' }}>{description}</p>

        <button
          style={{
            backgroundColor: '#ff6f0f',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            marginTop: '15px',
            cursor: 'pointer',
          }}
          onClick={() => alert('찜 목록에 추가되었습니다!')}
        >
          ❤️ 찜하기
        </button>

        <button
          style={{
            backgroundColor: '#ff6f0f',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            marginTop: '15px',
            cursor: 'pointer',
            marginLeft: '10px'
          }}
          onClick={() => alert('장바구니에 추가되었습니다!')}
        > 
          🧺 장바구니
        </button>

        <div style={{ marginTop: '15px' }}>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};
