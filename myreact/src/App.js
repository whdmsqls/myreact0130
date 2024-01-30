// import logo from './logo.svg';
import './App.css';

import React from 'react'
import ToDo from "./ToDo"
// import Sample from "./Sample"
import AddToDo from './AddToDo'

import {Paper, List, Container} from "@material-ui/core"


class App extends React.Component {
  constructor(props){
    
    super(props)
    // this.state.item = {item:{id:0, 'title': 'Hello React', "done": true}}
    // App.js에 this.state.item이라는 이름으로 데이터 생성
    // ToDo에게 item이라는 이름으로 데이터를 전달
    this.state = {items : [{id:0, title: 'React', done: true},
    {id:1, title: 'aaaa', done: false},
    {id:2, title: 'bbbb', done: false}]}
  }

  add = (item) => {
    //react는 props는 수정할 수 없고
    //state는 수정이 가능하지만 원본을 직접 수정하는것은 안되고
    //setState 메서드를 이용해서만 수정이 가능

    //배열에 데이터를 추가하기 위해서 state의 배열을 복사
    const thisItems = this.state.items;

    //item의 id와 done값을 설정 - title만 입력하기 때문
    item.id = "ID_" + thisItems.length;
    item.done = false;

    //복사한 데이터에 데이터를 추가
    thisItems.push(item)
    //복사한 데이터를 다시 state에 적용
    this.setState({items:thisItems});
  }

  render(){
    // 배열을 순회하면서 출력할 내용을 생성
    //item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스
    //배열을 순회하면서 추력물을 만들 때에는 key를 설정해 주어야 함
    //key를 설정하지않으면 출력은 문제가 없지만 콘솔에 에러가 생김
    var display = this.state.items.length >0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item,idx) => (
            <ToDo item={item} id={idx} />
          ))}
        </List>
      </Paper>
    )

    return(
      <div>
        {/* <ToDo item={this.state.item} /> */}
        <Container>
          <AddToDo add={this.add}/>
          {display}
        </Container>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className='App'>
//       <ToDo />
//       <Sample />
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
