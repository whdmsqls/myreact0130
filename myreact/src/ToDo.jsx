import React from "react"
import { 
  ListItem,
  ListItemText,
  InputBase,
  Checkbox
 } from "@material-ui/core"

// react에서 컴포넌트 클래스를 만들기 위해서 component로부터 상속을 받기
class ToDo extends React.Component {
  //생성자
  constructor(props){
    //App.js에서 넘겨준 속성들을 자신의 props에 저장
    //this.props.item이라는 속성 앞에서 전달한 데이터를 저장
    super(props);//상위클래스에서 넘겨준 모든 props를 현재 클래스에 저장
    //state생성
    //item이라는 이름으로 props중에서 item이라는 값을 state로 저장
    //props는 상위 컴포넌트에서 전달한 데이터라서 읽기는 가능하지만
    ///수정이나 삭제가 안되므로 수정이나 삭제를 할 때느 state로 변환해야 함
    this.state = {item:props.item}
  }

  // 화면에 출력할 내용을 리턴하는 메서드
  render(){
    //자주 사용하는 데이터를 짧게 사용하기 위해 다른 변수에 대입
    const item = this.state.item;
    return(
      <ListItem>
        <Checkbox checked={item.done} />
        <ListItemText>
          <InputBase
              inputProps={{"aria-label" : "naked"}}
              type="text"
              id={item.id}
              name={item.id}
              value={item.title}
              multiline={true}
              fullWidth={true}
          />
        </ListItemText>
      </ListItem>
      // <div className="ToDo">
      //   {/* 클라이언트가 서버로 전송할 때 이름이 name */}
      //   {/* 상위 컨퍼런트인 app.js에서 item을 받아와야 함 */}
      //   <input type="checkbox" 
      //       id={this.state.item.id} 
      //       name={this.state.item.id}
      //       value={this.state.item.done}/>
      //   {/* 레이블 만드는 이유 : 체크박스를 정확히 누르지않고 레이블에 for속성 하면 대충 글자 클릭해도 눌림 */}
      //   <label id={this.state.item.done}>{this.state.item.title}</label>
      // </div>
    )
  }
}

export default ToDo;