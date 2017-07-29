import React, { Component } from 'react';
import marked from 'marked';
import renderHTML from 'react-render-html';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
      this.state.markedOutput =`Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
`+'monospace'+`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`

  }
  render() {
  ///console.log(this.markedOutput)
    return (
      <div className="App">
        <div className="Ar">
            <textarea id="area" ref='mInput' rows="20"  onChange={this.hChange.bind(this)}>
            </textarea>
        </div>
        <div id="prev">
        <div>
        {renderHTML(this.state.markedOutput)}
        </div>
        </div>
      </div>
    );
  }
  hChange(){
    console.log(this)
    this.markedOutput = marked(this.refs.mInput.value)
    this.setState({markedOutput : marked(this.refs.mInput.value)})
  }
  componentDidMount(){
   this.refs.mInput.value = this.state.markedOutput
   this.setState({markedOutput : marked(this.refs.mInput.value)})
  }
}

export default App;
