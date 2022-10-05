import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import React, { Component } from "react"
import { EditorState, convertToRaw } from "draft-js"
import draftToHtml from "draftjs-to-html"
import dynamic from "next/dynamic"
import NextImage from "next/image"

const axios = require("axios").default

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
)

class Creates extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty(),
      uploadedImages: [],
      image: { id: null, url: "" },
      category: {},
      title: null,
      dscr: null,
      slug: null,
      contentResponse: null,
    }
    this._uploadImageCallBack = this._uploadImageCallBack.bind(this)
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState: editorState })
    //console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
    console.log(convertToRaw(this.state.editorState.getCurrentContent()))
  }

  onTitleChange = (title) => {
    this.setState({ title: title.target.value })
  }

  onDscrChange = (dscr) => {
    this.setState({ dscr: dscr.target.value })
  }

  onSlugChange = (slug) => {
    this.setState({ slug: slug.target.value })
  }

  pickCategory(category) {
    this.setState({
      category: {
        id: category.id,
        name: category.attributes.name,
      },
    })
  }

  createContent(e) {
    e.preventDefault()
    let that = this
    axios
      .post(
        "http://localhost:1337/content-manager/collection-types/api::article.article",
        {
          title: this.state.title,
          description: this.state.dscr,
          slug: this.state.slug,
          image: this.state.image,
          content: draftToHtml(
            convertToRaw(this.state.editorState.getCurrentContent())
          ),
          category: this.state.category.id,
        },
        {
          headers: {
            Authorization: "",
          },
        }
      )
      .then(function (response) {
        console.log(response)
        that.setState({ contentResponse: response })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  _uploadImageCallBack(file) {
    let uploadedImages = this.state.uploadedImages
    let that = this
    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    }

    uploadedImages.push(imageObject)

    that.setState({ uploadedImages: uploadedImages })
    axios
      .post(
        "http://localhost:1337/upload",
        {
          fileInfo: {
            name: file.name,
            caption: file.name,
            alternativeText: file.name,
          },
          files: file,
        },
        {
          headers: {
            Authorization: "",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        console.log(response)
        that.setState({
          image: { id: response.data[0].id, url: imageObject.localSrc },
        })
      })
      .catch(function (error) {
        console.log(error)
      })

    return new Promise((resolve, reject) => {
      resolve({ data: {} })
    })
  }

  render() {
    const { editorState } = this.state
    return (
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <form className="uk-form-horizontal uk-margin-large">
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-horizontal-text">
                Article Title
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="Some text..."
                  onChange={(e) => this.onTitleChange(e)}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-horizontal-text">
                Article Desctiption
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="Some text..."
                  onChange={(e) => this.onDscrChange(e)}
                />
              </div>
            </div>

            <div className="uk-margin">
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapper-class"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true },
                  image: { uploadCallback: this._uploadImageCallBack },
                  inputAccept:
                    "application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel",
                }}
              />
              {/*
          <textarea
          disabled
          value={draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
        />
          */}
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-horizontal-text">
                Slug
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder=""
                  onChange={(e) => this.onSlugChange(e)}
                />
              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-inline">
                <button className="uk-button uk-button-default" type="button">
                  Category
                </button>
                <div uk-dropdown="pos: bottom-justify">
                  <ul className="uk-nav uk-dropdown-nav">
                    {this.props.categories.map((category) => {
                      return (
                        <li key={category.id}>
                          <a onClick={(e) => this.pickCategory(category)}>
                            {category.attributes.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <span style={{ margin: "15px" }}>
                  {" "}
                  Active Category: {this.state.category.name}
                </span>
              </div>
            </div>

            <div className="uk-margin">
              Image:
              {this.state.image.id ? (
                <NextImage
                  width={"150"}
                  height={"90"}
                  src={this.state.image.url}
                />
              ) : (
                <></>
              )}
            </div>

            <div className="uk-margin">
              <button
                className="uk-button uk-button-primary"
                onClick={(e) => this.createContent(e)}
              >
                Create
              </button>
            </div>
            {this.state.contentResponse ? (
              <div className="uk-margin">
                <div className="uk-alert-success" uk-alert>
                  <a className="uk-alert-close" uk-close></a>
                  <p>
                    The <b>{this.state.contentResponse.data.title}</b> has been
                    created(as draft)
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default Creates
