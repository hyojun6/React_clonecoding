import { useState, useEffect } from 'react';

function 단어바꾸기() {
  const words = ['단어1', '단어2', '단어3', '단어4'];
  const [word, setWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const 타이머 = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(타이머); // 컴포넌트 unmount 시 타이머 정리
  }, []);

  useEffect(() => {
    setWord(words[index]);
  }, [index, words]);


  return (
    <div>
      {word}
      <h1>hi</h1>
    </div>
  );
}

export default 단어바꾸기;