import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';

import ThemeContext from './theme-context'
import ThemedBar from './components/ThemedBar'
const tags = ['react', 'my-page'];
const themes = {
    light: {
      classnames: 'btn btn-primary',
      bgColor: '#eee',
      color: '#000'
    },
    dark: {
      classnames: 'btn btn-light',
      bgColor: '#222',
      color: '#fff'
    }
  }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this if my first reply'],
      theme: 'light'
    }
    this.changeTheme = this.changeTheme.bind(this)
    this.addComment = this.addComment.bind(this)
    this.deletecomment = this.deletecomment.bind(this)
  }
  //theme
  changeTheme(theme) {
    this.setState({
      theme
    })
  }
  // 添加留言
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  // 删除留言
  deletecomment(deleteIndex) {
    this.setState({
      comments: this.state.comments.filter((item, index) => {return index !== deleteIndex})
    })
  }
    render() {
        const { comments } = this.state
        return (
            <div className="App">
            <ThemeContext.Provider value={themes[this.state.theme]}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
                <a href="#theme-switcher" className="btn btn-light" onClick={()=>{this.changeTheme('light')}}>浅色主题</a>
                <a href="#theme-switcher" className="btn btn-secondary" onClick={()=>{this.changeTheme('dark')}}>深色主题</a>
            </header>
            <ThemedBar></ThemedBar>
            </ThemeContext.Provider>
                <DigitalClock></DigitalClock>
                <LikesButton></LikesButton>
                <NameCard name="Tom" number={446473876543} isHuman tags={tags}/>
                <CommentList comments={comments} onDeleteComment={this.deletecomment}></CommentList>
                <CommentBox  commentsLength={comments.length} onAddComment={this.addComment}></CommentBox>
            </div>
        );
    }
}

export default App;
