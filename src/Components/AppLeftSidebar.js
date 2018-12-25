import React, { Component } from 'react';
// import { Grid,Row,Col } from 'react-bootstrap';
import { Button,Checkbox,FormGroup } from 'react-bootstrap';

class AppLeftSidebar extends Component {
    constructor() {
        super();
        this.state = {
          buttonColorActive: false,
          buttonFilterActive: false,
          buttonPriceActive: false,
          value: 0,
          sideView: true
        };
        this.onColorButtonClick = this.onColorButtonClick.bind(this);
        this.onFilterButtonClick = this.onFilterButtonClick.bind(this);
        this.onPriceButtonClick = this.onPriceButtonClick.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.onSideViewClick = this.onSideViewClick.bind(this);
    }

    onColorButtonClick() {
        this.setState({
            buttonColorActive: !this.state.buttonColorActive
        });
    }

    onFilterButtonClick() {
        this.setState({
            buttonFilterActive: !this.state.buttonFilterActive
        });
    }

    onPriceButtonClick() {
        this.setState({
            buttonPriceActive: !this.state.buttonPriceActive
        });
    }

    handleSliderChange(e){
        this.setState({value: e.target.value});
    }

    onSideViewClick(){
        this.setState({
            sideView: !this.state.sideView
        });
    }

    render() {
        let ColorsContentClass="";
        let FiltersContentClass="";
        let PriceContentClass="";
        let ColorsIconClass="";
        let FiltersIconClass="";
        let PriceIconClass="";
        let LeftSideClass="";
        if(this.state.buttonColorActive){
            ColorsIconClass = "fas fa-plus text-muted make-small";
            ColorsContentClass = "hide";
        }
        else{
            ColorsIconClass = "fas fa-minus text-muted make-small"
            ColorsContentClass = "Colors";
        }
        if(this.state.buttonFilterActive){
            FiltersIconClass = "fas fa-plus text-muted make-small";
            FiltersContentClass = "hide";
        }
        else{
            FiltersIconClass = "fas fa-minus text-muted make-small"
            FiltersContentClass = "Filters";
        }
        if(this.state.buttonPriceActive){
            PriceIconClass = "fas fa-plus text-muted make-small";
            PriceContentClass = "hide";
        }
        else{
            PriceIconClass = "fas fa-minus text-muted make-small"
            PriceContentClass = "Price";
        }
        if(this.state.sideView){
            LeftSideClass = "AppLeftSidebar"
        }
        else{
            LeftSideClass = "AppLeftSidebarRemove"
        }
        return (
        <div>
            <div>
                <Button className="clickButton" onClick={this.onSideViewClick}>Filters</Button>
            </div>
            <div className={LeftSideClass}>
                <div className="pull-right Filter-Close"><i className="fas fa-2x fa-times"></i></div>
                <h1 className="SidebarColorsHeading text-muted">Colors
                    <div className="SidebarButton">
                        <Button className="ColorButton" onClick={this.onColorButtonClick}>
                            <i className={ColorsIconClass}></i>
                        </Button>
                    </div>
                </h1>
                <div className={ColorsContentClass}>
                    <div className="ColorIcons">
                        <i className="fas fa-circle" style={{color:"rgb(241, 101, 101)"}}></i>
                        <i className="fas fa-circle" style={{color:"rgb(116, 174, 230)"}}></i>
                        <i className="fas fa-circle" style={{color:"rgb(129, 230, 116)"}}></i>
                        <i className="fas fa-circle" style={{color:"rgb(105, 148, 241)"}}></i>
                    </div>
                    <div className="ColorIcons">
                        <i className="fas fa-circle" style={{color:"rgb(241, 159, 105)"}}></i>
                        <i className="fas fa-circle" style={{color:"rgb(243, 131, 224)"}}></i>
                        <i className="fas fa-circle" style={{color:"rgb(188, 130, 255)"}}></i>
                        <i className="fas fa-circle" style={{color:"rgb(240, 76, 76)"}}></i>
                    </div>
                </div>

                <div className="SidebarSeparator"> </div>

                <h1 className="SidebarFiltersHeading text-muted">Filters
                    <div className="SidebarFilterButton">
                        <Button className="FilterButton" onClick={this.onFilterButtonClick}>
                            <i className={FiltersIconClass}></i>
                        </Button>
                    </div>
                </h1>
                <div className={FiltersContentClass}>
                    {/* FilterContentClass -> hide or Filters */}
                    <h4 className="text-muted">New In</h4>
                    <h4 className="materials">Materials</h4>
                    <FormGroup className="checkbox-group">
                        <Checkbox className="checkboxes text-muted">Synthetic skin(6)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Metal(88)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Wooden(158)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Fabric(294)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Polyurathano(25)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Viscoelastic(36)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Natural Fiber(17)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Synthetic Fiber(20)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Natural skin(7)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Foam(77)</Checkbox>
                    </FormGroup>
                </div>
                <div className="SidebarSeparator"></div>

                <h1 className="SidebarColorsHeading text-muted">Sell Off
                    <div className="SidebarButton">
                        <Button style={{opacity:"0"}} className="ColorButton">
                            <i className={ColorsIconClass}></i>
                        </Button>
                    </div>
                </h1>
                <div className="SidebarSeparator"></div>

                <h1 className="SidebarPriceHeading text-muted">Price
                    <div className="SidebarPriceButton">
                        <Button className="PriceButton" onClick={this.onPriceButtonClick}>
                            <i className={PriceIconClass}></i>
                        </Button>
                    </div>
                </h1>
                <div className={PriceContentClass}>
                    <div className="AppSlider">
                        <div className="d-flex">
                            <div className="p-2" style={{display:'inline-block',float:'left'}}>1</div>
                            <div>
                                <input
                                id="typeinp"
                                type="range"
                                min="0" max="300"
                                value={this.state.value}
                                onChange={this.handleSliderChange}
                                step="1"/>
                            </div>
                            <div className="p-2" style={{display:'inline-block',float:'left'}}>300</div>
                        </div>
                    </div>
                </div>

                <div className="ClearAll">
                    <h6>CLEAR ALL<i className="fas fa-times"></i></h6>
                </div>
            </div>
        </div>
        );
    }
}

export default AppLeftSidebar;
