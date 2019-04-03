import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';
import Textinputcomponent from '../helper/customComponent/Textinputcomponent';
import Textinputcomponentwithicon from '../helper/customComponent/Textinputcomponentwithicon';
import Textareacomponent from '../helper/customComponent/Textareacomponent';
import Reactselectcomponent from '../helper/customComponent/Reactselectcomponent';
import Checkboxcomponent from '../helper/customComponent/Checkboxcomponent';
import Radiocomponent from '../helper/customComponent/Radiocomponent';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      name5: '',
      name6: '',
      comments: '',
      selectedValue: '',
      selectedList: [],

      check1: '',
      check2: '',
      check3: '',
      check4: '',
      check5: '',
      check6: '',

      radio1: '',
      radio2: '',

    }
  }

  componentDidMount() {

    var selectedList = [
      {
        id: 0,
        lable: 'Select',
        value: '0',
      },
      {
        id: 1,
        lable: 'Nokia',
        value: 'nokia',
      },
      {
        id: 2,
        lable: 'Apple',
        value: 'apple',
      },
      {
        id: 3,
        lable: 'Samsung',
        value: 'samsung',
      },
      {
        id: 4,
        lable: 'Huawei',
        value: 'huawei',
      },
      {
        id: 5,
        lable: 'Oppo',
        value: 'oppo',
      },
    ]

    this.setState({ selectedList: selectedList });

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <div className="overviewBox clearfix">
              <h2>Custom Input Field Component</h2>
              <div className="col-md-4">
                <Textinputcomponent
                  inputLable="Name1"
                  inputPlaceholder="Enter Your Name1"
                  inputName="name1"
                  inputType="text"
                  inputValue={this.state.name1}
                  inputDisabled={false}
                  inputCalssName="form-control input-sm"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-4">
                <Textinputcomponent
                  inputLable="Name2"
                  inputPlaceholder="Enter Your Name2"
                  inputName="name2"
                  inputType="text"
                  inputValue={this.state.name2}
                  inputDisabled={false}
                  inputCalssName="form-control input-md"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-4">
                <Textinputcomponent
                  inputLable="Name3"
                  inputPlaceholder="Enter Your Name3"
                  inputName="name3"
                  inputType="text"
                  inputDisabled={false}
                  inputValue={this.state.name3}
                  inputCalssName="form-control input-lg"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-4">
                <Textinputcomponentwithicon
                  inputLable="Name4"
                  inputIcon="glyphicon glyphicon-user"
                  inputPlaceholder="Enter Your Name 4"
                  inputName="name4"
                  inputType="text"
                  inputDisabled={false}
                  inputValue={this.state.name4}
                  inputCalssName="form-control input-sm"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-4">
                <Textinputcomponentwithicon
                  inputLable="Name5"
                  inputIcon="glyphicon glyphicon-envelope"
                  inputPlaceholder="Enter Your Name 5"
                  inputName="name5"
                  inputType="text"
                  inputDisabled={false}
                  inputValue={this.state.name5}
                  inputCalssName="form-control input-md"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-4">
                <Textinputcomponentwithicon
                  inputLable="Name6"
                  inputIcon="glyphicon glyphicon-tags"
                  inputPlaceholder="Enter Your Name 6"
                  inputName="name6"
                  inputType="text"
                  inputDisabled={false}
                  inputValue={this.state.name6}
                  inputCalssName="form-control input-lg"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="overviewBox clearfix">
              <h2>Custom Textarea Component &amp; Select Component</h2>

              <div className="col-md-6">
                <Textareacomponent
                  textareaLable="Comments Here"
                  textareaCalssName="form-control"
                  textareaPlaceholder="Comments ..."
                  textareaName="comments"
                  textareaRows="3"
                  textareaCols="2"
                  textareaID=""
                  textareaDisabled={false}
                  textareaValue={this.state.comments}
                  textareaHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-6">
                <Reactselectcomponent
                  rcSelectCalss="form-control"
                  rcSelectLable="Select List Value"
                  rcSelectFunc={e => this.handleChange(e)}
                  rcSelectVal={this.state.selectedValue}
                  rsSelectID=""
                  rcSelectNam="selectedCourse"
                  rcSelectList={this.state.selectedList}
                />
              </div>
            </div>

            <div className="overviewBox clearfix">
              <h2>Custom Checkbox Component &amp; Radio Component</h2>
              <div className="col-md-6">
                <div className="customCheckboxRadioGroup clearfix">
                  <label className="customLable">Checkbox Inline</label>
                  <Checkboxcomponent
                    checkboxClass="checkbox-inline"
                    checkboxName="check1"
                    checkboxLable="Option 1"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check1 ? '' : 'select check 1'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                  <Checkboxcomponent
                    checkboxClass="checkbox-inline"
                    checkboxName="check2"
                    checkboxLable="Option 2"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check2 ? '' : 'select check 2'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                  <Checkboxcomponent
                    checkboxClass="checkbox-inline"
                    checkboxName="check3"
                    checkboxLable="Option 3"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check3 ? '' : 'select check 3'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                  <label className="customLable">Checkbox</label>
                  <Checkboxcomponent
                    checkboxClass="checkbox"
                    checkboxName="check4"
                    checkboxLable="Option 4"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check4 ? '' : 'select check 4'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                  <Checkboxcomponent
                    checkboxClass="checkbox"
                    checkboxName="check5"
                    checkboxLable="Option 5"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check5 ? '' : 'select check 5'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                  <Checkboxcomponent
                    checkboxClass="checkbox"
                    checkboxName="check6"
                    checkboxLable="Option 6"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check6 ? '' : 'select check 6'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="customCheckboxRadioGroup clearfix">
                  <label className="customLable">Radio Inline</label>
                  <Radiocomponent
                    radioClass="radio-inline"
                    radioName="radio1"
                    radioLable="radio 1"
                    radioDisabled={false}
                    radioValue={this.state.r1 ? '' : 'select radio 1'}
                    radioHandle={e => this.handleChange(e)}
                  />
                  <Radiocomponent
                    radioClass="radio-inline"
                    radioName="radio1"
                    radioLable="radio 2"
                    radioDisabled={false}
                    radioValue={this.state.r2 ? '' : 'select radio 2'}
                    radioHandle={e => this.handleChange(e)}
                  />
                  <Radiocomponent
                    radioClass="radio-inline"
                    radioName="radio1"
                    radioLable="radio 3"
                    radioDisabled={false}
                    radioValue={this.state.r3 ? '' : 'select radio 3'}
                    radioHandle={e => this.handleChange(e)}
                  />
                  <label className="customLable">Radio</label>
                  <Radiocomponent
                    radioClass="radio"
                    radioName="radio2"
                    radioLable="radio 1"
                    radioDisabled={false}
                    radioValue={this.state.rr1 ? '' : 'select radio 1'}
                    radioHandle={e => this.handleChange(e)}
                  />
                  <Radiocomponent
                    radioClass="radio"
                    radioName="radio2"
                    radioLable="radio 2"
                    radioDisabled={false}
                    radioValue={this.state.rr2 ? '' : 'select radio 2'}
                    radioHandle={e => this.handleChange(e)}
                  />
                  <Radiocomponent
                    radioClass="radio"
                    radioName="radio2"
                    radioLable="radio 3"
                    radioDisabled={false}
                    radioValue={this.state.rr3 ? '' : 'select radio 3'}
                    radioHandle={e => this.handleChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;




