/**
 * author: chengxuefeng
 * time: 2020-02-01
 * description: icon是从iconfont上下载的，目前只支持了warn、error，TODO: info。
 */
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.scss'
class Toast extends React.Component {
  static maxCount: number
  static exampleList: any[] = []
  static duration: number = 2000
  static rootEl = null

  public props
  // 使用前必须先全局初始化
  static init(props: any): void {
    Toast.maxCount = props.maxCount || 1
    Toast.exampleList = []
    Toast.duration = props.duration || 2000
    Toast.rootEl = props.rootEl
  }

  static judegMaxCount() {
    return Toast.exampleList.length < this.maxCount
  }

  static createEl() {
    return document.createElement('div')
  }

  static render(el, props) {
    Toast.rootEl.appendChild(el)
    ReactDOM.render(<Toast {...props} />, el)
  }

  static info(props) {
    const el = Toast.createEl()
    if (Toast.judegMaxCount()) {
      Toast.exampleList.push(el)
    } else {
      return
    }
    Toast.render(el, props)
    setTimeout(() => {
      Toast.hide()
    }, Toast.duration)
  }

  static error(props) {
    const el = Toast.createEl()
    if (Toast.judegMaxCount()) {
      Toast.exampleList.push(el)
    } else {
      return
    }
    props.type = 'error'
    Toast.render(el, props)
    setTimeout(() => {
      Toast.hide()
    }, props.duration || Toast.duration)
  }

  static hide() {
    Toast.rootEl.removeChild(Toast.exampleList[0])
    Toast.exampleList.shift()
  }

  static propTypes = {
    /**
     * toast 文案
     */
    text: PropTypes.string,
    /**
     * toast 类型：info、error (未来需要再加warn)
     */
    type: PropTypes.string,
    /**
     * toast 持续时长 可全局配置  也可以在调用时配置 毫秒
     */
    duration: PropTypes.number
  }

  getContent() {
    switch (this.props.type) {
      case 'error':
        return (<>
          <span className={'icon iconfont icon-failure_toast'}></span>
          <span className="iconfont">&#x33;</span>
          <div
            className={'error'}
            dangerouslySetInnerHTML={{ __html: this.props.text }}
          ></div>
        </>)
        break
      default:
        return (<>
          <span className={'icon iconfont icon-checked_toast'}></span>
          <div
            className={'info'}
            dangerouslySetInnerHTML={{ __html: this.props.text }}
          ></div>
        </>)
        break
    }
  }

  render() {
    return (<div className={'contianer'}>{this.getContent()}</div>
    )
  }
}

export default Toast
