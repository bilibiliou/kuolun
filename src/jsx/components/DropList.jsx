import React, { Component, PropTypes } from "react";
import { getPostion } from "../../js/util.js";

class DropList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isDrop: 0,
            ListOffset: 0,
            BtnOffset: 0,
            dragListHeight: 0,
            dragBtnHeight: 0
        }
    }

    componentDidMount () {
        let Wrap = this.refs["wrap"], 
            List = this.refs["list"],
            LH   = (this.props.dataList.length * 25) + 10,
            d = (120 * (LH-120)) / LH,
            BH = 120 - d;

        this.setState({
            dragListHeight: LH,
            dragBtnHeight: BH
        })
    }

    mdown (ev, callback) {
        let $self = this,
            oTarget = ev.target,
            currentTop = oTarget.offsetTop,
            $top = ev.clientY - oTarget.offsetTop,
            $left = ev.clientY - oTarget.offsetLeft

        let mmove = (ev) => {
            let dragTop = ev.clientY - $top,
                dragLeft = ev.clientX - $left

            callback && callback([
                dragTop,
                dragLeft
            ]);
            
        }, mup = () => {
            document.removeEventListener("mousemove", mmove);
            oTarget.removeEventListener("mouseup", mup);
        }

        document.addEventListener("mousemove", mmove)
        document.addEventListener("mouseup", mup);
    }

    render () {
        let {
            dataList
        } = this.props;
        return (
            <div className="drop__list"
                onClick={() => {

                    this.setState({
                        isDrop: this.state.isDrop ^= 1
                    })
                }}

                onWheel = {(ev) => {
                    console.log(ev);
                    ev.stopPropagation();
                    ev.preventDefault();
                }}
                >

                <p>{this.props.initPrompt}</p>

                <section className="drop__wrap"
                    style={
                        this.state.isDrop ? 
                        {display: "block"} :
                        {display: "none"}
                    }
                >
                    <ul 
                        style={{top: this.state.ListOffset}}
                        ref="list"
                        onClick={(ev) => {
                            let codeTypeShowWrap = this.refs["code-type-show__wrap"],
                                oTarget = ev.target

                            if (oTarget.tagName.toLowerCase() === "li") {
                                this.props.returnDataCallback(oTarget.innerHTML);
                            }
                        }}>

                        {
                            dataList.map((value, idx) => 
                                <li 
                                    key={idx}
                                >{value}</li>
                            )
                        }
                    </ul>
                    <div className="drag__wrap"
                         style={{
                            height: "120px",
                            width: "10px"
                         }}
                         ref="drag-wrap"
                         onClick = {(ev) => {
                            let dragWrap = this.refs["drag-wrap"],
                                postionArr = getPostion(dragWrap),
                                d = ev.pageY - postionArr[1]

                            // console.log(123)
                            // if (d >= 120 - this.state.dragBtnHeight) {
                            //     d = 120 - this.state.dragBtnHeight;
                            // } else if (d < 0) {
                            //     d = 0;
                            // }

                            // this.setState({
                            //     ListOffset: -((d * this.state.dragListHeight) / 120),
                            //     BtnOffset: d 
                            // })
                            ev.stopPropagation();
                         }}
                    >
                        <button className="drag__btn"
                            style={{
                                height: this.state.dragBtnHeight,
                                top: this.state.BtnOffset
                            }}
                            ref="drag-btn"
                            onMouseDown={(ev) => {
                                this.mdown.call(this,ev,(params) => {
                                    let [
                                       dragTop 
                                    ] = params,
                                    bOffset = dragTop,
                                    lOffset = 0

                                    if (dragTop >= 120 - this.state.dragBtnHeight) {
                                        bOffset = 120 - this.state.dragBtnHeight;
                                    } else if (dragTop < 0) {
                                        bOffset = 0;
                                    }
                                    
                                    this.setState({
                                        ListOffset: -((bOffset * this.state.dragListHeight) / 120),
                                        BtnOffset: bOffset 
                                    })
                                })
                                ev.stopPropagation();
                                return false;
                            }}
                        ></button>
                    </div>
                </section>
            </div>
            
           
        )
    }
}

export default DropList;