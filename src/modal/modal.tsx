// modal/Modal.tsx
import './modal.css';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const Modal = ({ isOpen, onRequestClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="Overlay">
      <div className="modal-container">
        <h2>로그인</h2>
        <input type="text" placeholder="아이디" className="input" />
        <input type="password" placeholder="비밀번호" className="input" />
        <div className="modal-actions">
          <button onClick={onRequestClose} className="cancel">
            취소
          </button>
          <button className="login">로그인</button>
        </div>
      </div>
    </div>
  );
};
