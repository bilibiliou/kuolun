import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { MemoryHumanReadable } from "../../js/util.js";
import { AlertPlaneThunk } from "../../actions/AlertPlaneActions.js";

class DragAndUpdate extends Component {
    constructor (props) {
        super(props);

        this.state = {
            buttonbOff : 1
        }
        this.handleUploadData = this.handleUploadData.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleFileChoose = this.handleFileChoose.bind(this);
        this.handleClickUpload = this.handleClickUpload.bind(this);
        this.clearDefault = this.clearDefault.bind(this);
    }

    handleUploadData (fileList) {
        let { actions,callback } = this.props,
            fr = new FileReader(),
            promiseStack = [],
            flag = 0,
            allSize = 0,
            SizeLimit = 5 * 1024 * 1024;

        fileList = fileList
            .map((value, idx) => {
                if (!value.type) {
                    actions.AlertPlaneThunk("非图片类型文件禁止上传");
                    return null;
                }
                allSize += value.size;
                return {
                    size: MemoryHumanReadable(value.size),
                    file: value
                }
            })

        if (allSize > SizeLimit) {
            return actions.AlertPlaneThunk("单次上传图片总量不能超过5MB");
        } else {
            function parseImageAndFetch () {
                let value = fileList.shift();
                fr.readAsDataURL(value.file);

                fr.onloadend = (evt) => {
                    let promise = fetch("/upLoadImage", {
                        method: "POST",
                        headers: {
                            "Charset": "utf-8",
                            "Content-Type": "text/plain"
                        },
                        body: flag + evt.target.result
                    })
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        }
                    })

                    promiseStack.push(promise);
                    

                    if(flag !== fileList.length) {
                        return parseImageAndFetch();
                    } else {
                         Promise.all(promiseStack)
                          .then((pics) => {
                            let datas = pics.sort((objA, objB) => {
                                return objA.order - objB.order
                            })
                            callback && callback(datas);
                          })
                          .catch((err) => {
                            throw err;
                            actions.AlertPlaneThunk("上传图片失败");
                          })
                    }
                }
            }
            parseImageAndFetch ();
        }
    } 

    handleDrag (ev) {
        let dt = ev.dataTransfer,
            oDatas = Array.from(dt.files)

        this.clearDefault(ev);
        this.handleUploadData(oDatas);
    }

    handleFileChoose () {
        let files = this.refs["file"].files;
        if(files.length) {this.handleUploadData(Array.from(files))}
        this.setState({
            buttonbOff: this.state.buttonbOff ^= 1
        })
    }

    handleClickUpload (ev) {
        if (this.state.buttonbOff) {
            this.setState({
                buttonbOff: this.state.buttonbOff ^= 1
            })

            this.refs["file"].click();    
        }
        
        this.clearDefault(ev);
    }

    clearDefault (ev) {
        ev.stopPropagation();
        ev.preventDefault();
    }

    render () {
        return (
            <div className="column-arrange">
                <figure className="drop__upload__area"
                    onDragEnter = {this.clearDefault}
                    onDragOver = {this.clearDefault}
                    onDrop = {this.handleDrag}
                >
                    拖拽上传图片
                </figure>
                <input type="file"
                       accept="image/*" 
                       style={{display: "none"}}
                       multiple
                       ref="file"
                       onChange={this.handleFileChoose} 
                />
                <button className="upload__btn"
                        onClick={this.handleClickUpload}
                >点击上传</button>

                <p style={{color: "red"}}>（ps: 单次上传图片总量不能超过5MB！）</p>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {}
    },
    (dispatch) => {
        return {
            actions: bindActionCreators({
                AlertPlaneThunk,
            }, dispatch)
        }
    }
)(DragAndUpdate);