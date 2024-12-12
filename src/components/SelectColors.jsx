import React from "react";
// import ColorConsumer from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// static contextType 값 지정
// 클래스 컴포넌트에서만 사용 가능
// 컴포넌트 내부에서 context를 사용하기 위해 사용
class SelectColors extends Component {
  static contextType = ColorContext;

  // SetColor, SetSubcolor 호출하려면?
  handleSetColor = (color) => {
    // this.context 조회 -> 현재 Context의 value를 가르킴
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;

/* 15.3.3 색상 선택 컴포넌트 만들기 */
// const SelectColors = () => {
//   return (
//    <div>
//      <h2>색상을 선택하세요.</h2>
//      <ColorConsumer>
//        {({ actions }) => (
//          <div style={{ display: "flex" }}>
//            {colors.map((color) => (
//              <div
//                key={color}
//                style={{
//                  background: color,
//                  width: "24px",
//                  height: "24px",
//                  cursor: "pointer",
//                }}
//                onClick={() => {
//                  console.log("왼쪽 마우스 클릭:", color); // 왼쪽 클릭 시 찍히는 값
//                  actions.setColor(color); // 왼쪽 클릭 시 큰 색상 변경
//                }}
//                onContextMenu={(e) => {
//                  e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 기본 메뉴 방지
//                  console.log("오른쪽 마우스 클릭:", color); // 오른쪽 클릭 시 찍히는 값
//                  actions.setSubColor(color); // 오른쪽 클릭 시 작은 색상 변경
//                }}
//              />
//            ))}
//          </div>
//        )}
//      </ColorConsumer>
//      <hr />
//    </div>
//  );
// };
