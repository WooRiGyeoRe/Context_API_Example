import { useState, createContext } from "react";

// == 새 Context를 만들 때 ==
// => createContext 함수를 사용함.
// => 파라미터에는 해당 Context의 기본 상태를 지정함.
const ColorContext = createContext({
  state: { color: "black", subColor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");

  const value = {
    state: { color, subColor },
    actions: {
      setColor: (newColor) => {
        console.log("setColor 호출됨, 새로운 색상:", newColor); // 상태 업데이트 전에 로그 출력
        setColor(newColor);
      },
      setSubColor: (newSubColor) => {
        console.log("setSubColor 호출됨, 새로운 서브 색상:", newSubColor); // 상태 업데이트 전에 로그 출력
        setSubColor(newSubColor);
      },
    },
  };

  console.log("현재 상태:", value.state); // 상태 값이 변경될 때마다 로그 출력

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
