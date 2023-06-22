import React, { Component } from "react";
import UploadService from "../services/upload-files.service";
import "./UploadFiles.css"; // Import the CSS file for custom styles

export default class UploadFiles extends Component {
constructor(props) {
super(props);
this.selectFile = this.selectFile.bind(this);
this.upload = this.upload.bind(this);

this.state = {
selectedFiles: undefined,
currentFile: undefined,
progress: 0,
message: "",
fileInfos: [],
userId:0
};
}

componentDidMount() {
UploadService.getFiles().then((response) => {
this.setState({
fileInfos: response.data,
});
});
}

selectFile(event) {
this.setState({
selectedFiles: event.target.files,
});
}

upload() {
let currentFile = this.state.selectedFiles[0];

this.setState({
progress: 0,
currentFile: currentFile,
});

UploadService.upload(currentFile, this.state.userId, (event) => {
this.setState({
progress: Math.round((100 * event.loaded) / event.total),
});
})
.then((response) => {
this.setState({
message: response.data.message,
});
return UploadService.getFiles();
})
.then((files) => {
this.setState({
fileInfos: files.data,
});
})
.catch(() => {
this.setState({
progress: 0,
message: "Could not upload the file!",
currentFile: undefined,
});
});

this.setState({
selectedFiles: undefined,
});
}

render() {
const {
selectedFiles,
currentFile,
progress,
message,
fileInfos,
} = this.state;

return (

<div className="upload-files-container">
{currentFile && (
<div className="progress">
    <div 

className="progress-bar"
role="progressbar"
style={{ width: `${progress}%` }} 
>
{progress}%

</div>
</div>

)}

<label className="file-input-label">
    <input type="file" onChange={this.selectFile} />
</label>


<button 
className="upload-button"
disabled={!selectedFiles}
onClick={this.upload}
>
Upload
</button>

<div className="upload-message">{message}</div>
<div className="file-list-container">
    <div className="file-list-header">
        List of files:
    </div>
    <ul className="file-list">
    {fileInfos &&
fileInfos.map((file, index) => (
    <li className="file-list-item" key={index}>
        <a href={file.url}>{file.name}</a>
    </li>
))}
    </ul>
</div>
</div>
);
}}

