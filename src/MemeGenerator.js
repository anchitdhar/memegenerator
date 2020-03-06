import React from 'react'

class MemeGenerator extends React.Component{
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "",
            allMemeImgs:[]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(Response => Response.json())
            .then(Response => {
                const { memes } = Response.data
                this.setState({allMemeImgs:memes})
        })
    }
    handleChange(event) {
        
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>Generate</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator