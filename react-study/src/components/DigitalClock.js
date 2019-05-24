import React from 'react';

class DigitalClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        // 添加定时器
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 3000)
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log('componentWillUpdate', nextState)
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('componentDidUpdate', prevState)
    }
    comopnentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="digital-clock-componet jumbotron">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default DigitalClock;


// 生命周期钩子函数分为三大类：
// 1.初始化
// constructor - render - DOM和refs
// componentDidMount
//
// 2.更新
// newprops - setState - forceUpdate - D
// componentDidUpdate
//
// 3.卸载
// componentWillUnmount
//