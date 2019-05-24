import React from 'react';

class LikesButton extends React.Component {
    constructor(props) {
        super(props); // 硬性要求
        this.state = {
            likes: 0
        }
        // this.increaseLikes = this.increaseLikes.bind(this);
    }
    increaseLikes() {
        this.setState({
            likes: this.state.likes+1
        });
    }
    render() {
        return (
            <div className="likes-button-component">
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick={() => {this.increaseLikes()}}
                >
                    <span role="img" aria-label="likes">👍</span>{this.state.likes}
                </button>
            </div>
        );
    }
}

export default LikesButton;

// comments:
// 1.state更新才会重新渲染界面，setState是更新组件的唯一方法
// 如果constructor有给this定义其他属性，这些属性更新并不会触发重新渲染
// 2.事件的回调里（如onClick）直接写this.increaseLike，在increaseLike拿不到this的指向
// 在js的类中，this是没有自动绑定的
// 3.不能this.state.likes++，state的修改需要通过this.setState
// 4.事件绑定属性名字采用驼峰式的写法